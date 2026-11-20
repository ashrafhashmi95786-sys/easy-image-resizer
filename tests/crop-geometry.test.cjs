const test = require("node:test");
const assert = require("node:assert/strict");
const { getCropFrameGeometry } = require("../lib/crop-geometry.cjs");

test("portrait source fits a square crop within image bounds", () => {
  const g = getCropFrameGeometry(600, 1200, 1, 0.8);
  assert.equal(g.baseW, 50);
  assert.equal(g.baseH, 100);
  assert.equal(g.frameW, 40);
  assert.equal(g.frameH, 80);
});

test("landscape source fits a portrait crop within image bounds", () => {
  const g = getCropFrameGeometry(1600, 900, 3 / 4, 0.8);
  assert.ok(g.baseW <= 100 && g.baseH <= 100);
  assert.ok(Math.abs(g.frameW / g.frameH - (3 / 4)) < 1e-10);
});

test("crop scale is clamped to supported bounds", () => {
  assert.equal(getCropFrameGeometry(100, 100, 1, 2).frameW, 100);
  assert.equal(getCropFrameGeometry(100, 100, 1, 0).frameW, 20);
});

test("invalid image dimensions are rejected", () => {
  assert.throws(() => getCropFrameGeometry(0, 100, 1, 0.8), RangeError);
});
