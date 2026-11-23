/**
 * Find the highest-quality browser canvas export that stays within a byte limit.
 * If quality alone is insufficient (or the format is lossless PNG), progressively
 * reduce dimensions. The original rendered canvas is never mutated.
 */
export async function compressCanvasToMaxBytes(canvas, mime, maxBytes, initialQuality, encode) {
  if (!Number.isFinite(maxBytes) || maxBytes <= 0) {
    throw new RangeError("The maximum file size must be greater than zero.");
  }
  if (!canvas || canvas.width < 1 || canvas.height < 1) {
    throw new Error("The source image has invalid dimensions.");
  }

  const source = document.createElement("canvas");
  source.width = canvas.width;
  source.height = canvas.height;
  const sourceContext = source.getContext("2d");
  if (!sourceContext) throw new Error("Your browser could not prepare the source image.");
  sourceContext.drawImage(canvas, 0, 0);

  const output = document.createElement("canvas");
  const startingQuality = Math.min(1, Math.max(0.1, initialQuality));
  let scale = 1;

  for (let attempt = 0; attempt < 32; attempt += 1) {
    const width = Math.max(1, Math.round(source.width * scale));
    const height = Math.max(1, Math.round(source.height * scale));
    output.width = width;
    output.height = height;
    const context = output.getContext("2d");
    if (!context) throw new Error("Your browser could not resize the image.");
    context.drawImage(source, 0, 0, width, height);

    if (mime === "image/png") {
      const blob = await encode(output, mime, undefined);
      if (blob.size <= maxBytes) return { blob, width, height, quality: null };
    } else {
      let low = 0.1;
      let high = startingQuality;
      let bestBlob = null;
      let bestQuality = null;

      const lowestQualityBlob = await encode(output, mime, low);
      if (lowestQualityBlob.size <= maxBytes) {
        bestBlob = lowestQualityBlob;
        bestQuality = low;

        const preferredBlob = await encode(output, mime, high);
        if (preferredBlob.size <= maxBytes) {
          bestBlob = preferredBlob;
          bestQuality = high;
        } else {
          for (let step = 0; step < 12; step += 1) {
            const middle = (low + high) / 2;
            const candidate = await encode(output, mime, middle);
            if (candidate.size <= maxBytes) {
              low = middle;
              bestBlob = candidate;
              bestQuality = middle;
            } else {
              high = middle;
            }
          }
        }
      }

      if (bestBlob) return { blob: bestBlob, width, height, quality: bestQuality };
    }

    if (width === 1 && height === 1) break;
    scale *= 0.85;
  }

  throw new Error("This image could not reach the selected file-size limit. Try a higher target size or a smaller original image.");
}
