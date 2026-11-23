export type CanvasEncoder = (canvas: HTMLCanvasElement, mime: string, quality?: number) => Promise<Blob>;

export function compressCanvasToMaxBytes(
  canvas: HTMLCanvasElement,
  mime: string,
  maxBytes: number,
  initialQuality: number,
  encode: CanvasEncoder
): Promise<{ blob: Blob; width: number; height: number; quality: number | null }>;
