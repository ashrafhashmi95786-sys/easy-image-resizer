export function getCropFrameGeometry(
  imageWidth: number,
  imageHeight: number,
  targetRatio: number,
  scale: number
): { baseW: number; baseH: number; frameW: number; frameH: number };
