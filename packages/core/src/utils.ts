/**
 * 获取透明背景数据
 * @param width
 * @param height
 * @param ctx
 * @returns
 */
export function getTransparentData(
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
) {
  let emptyBox = ctx.createImageData(width, height);
  let emptyBoxData = emptyBox.data

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        let point = i * width + j << 2;
        // >> 2 相当于 / 4 取整， & 1相当于 % 2
        let rgbData = (((i >> 2) + (j >> 2) & 1) === 1) ? 240 : 255;

        emptyBoxData[point] = rgbData;
        emptyBoxData[point + 1] = rgbData;
        emptyBoxData[point + 2] = rgbData;
        emptyBoxData[point + 3] = 255
    }
  }

  return emptyBox
}

export const getFontStr = (
  opts: {
    fontWeight: string | number;
    fontSize: number;
  }
) => {
  return `normal normal ${opts.fontWeight} ${opts.fontSize}px serif`;
}
