import test from "node:test";
import assert from "node:assert/strict";
import { compressCanvasToMaxBytes } from "./target-size-compression.mjs";

class FakeCanvas {
  width = 0;
  height = 0;
  getContext() {
    return { drawImage() {} };
  }
}

function installFakeDocument() {
  const previous = globalThis.document;
  globalThis.document = { createElement: () => new FakeCanvas() };
  return () => {
    if (previous === undefined) delete globalThis.document;
    else globalThis.document = previous;
  };
}

test("lossy formats find a quality that fits without changing dimensions", async () => {
  const restore = installFakeDocument();
  try {
    const source = new FakeCanvas();
    source.width = 1000;
    source.height = 800;
    const result = await compressCanvasToMaxBytes(
      source,
      "image/jpeg",
      50000,
      0.9,
      async (canvas, _mime, quality) => ({ size: Math.round(canvas.width * canvas.height * quality * 0.2) })
    );
    assert.ok(result.blob.size <= 50000);
    assert.equal(result.width, 1000);
    assert.equal(result.height, 800);
    assert.ok(result.quality >= 0.1 && result.quality <= 0.9);
  } finally {
    restore();
  }
});

test("PNG reaches the limit by reducing dimensions rather than quality", async () => {
  const restore = installFakeDocument();
  try {
    const source = new FakeCanvas();
    source.width = 1000;
    source.height = 800;
    const result = await compressCanvasToMaxBytes(
      source,
      "image/png",
      50000,
      0.9,
      async (canvas, _mime, quality) => {
        assert.equal(quality, undefined);
        return { size: Math.round(canvas.width * canvas.height * 0.1) };
      }
    );
    assert.ok(result.blob.size <= 50000);
    assert.ok(result.width < 1000);
    assert.ok(result.height < 800);
    assert.equal(result.quality, null);
  } finally {
    restore();
  }
});

test("reports a clear failure when even the smallest output cannot fit", async () => {
  const restore = installFakeDocument();
  try {
    const source = new FakeCanvas();
    source.width = 20;
    source.height = 20;
    await assert.rejects(
      () => compressCanvasToMaxBytes(source, "image/jpeg", 1, 0.8, async () => ({ size: 10 })),
      /could not reach the selected file-size limit/
    );
  } finally {
    restore();
  }
});

test("rejects invalid target sizes", async () => {
  const source = new FakeCanvas();
  source.width = 10;
  source.height = 10;
  await assert.rejects(
    () => compressCanvasToMaxBytes(source, "image/jpeg", 0, 0.8, async () => ({ size: 1 })),
    /maximum file size must be greater than zero/
  );
});
