function getCropFrameGeometry(imageWidth, imageHeight, targetRatio, scale) {
  if (!(imageWidth > 0) || !(imageHeight > 0) || !(targetRatio > 0)) {
    throw new RangeError("Image dimensions and crop ratio must be positive.");
  }
  const safeScale = Math.max(0.2, Math.min(1, scale));
  const aspect = imageWidth / imageHeight;
  const baseW = aspect > targetRatio ? (targetRatio / aspect) * 100 : 100;
  const baseH = aspect > targetRatio ? 100 : (aspect / targetRatio) * 100;
  return { baseW, baseH, frameW: baseW * safeScale, frameH: baseH * safeScale };
}
module.exports = { getCropFrameGeometry };
