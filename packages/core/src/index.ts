import {
  defaultOpts,
  defaultBorderOpts,
  defaultInnerLoopLineOpts,
  defaultFiveStarOpts,
  defaultTextOpts,
  defaultInnerBorderOpts,
} from './config';
import { getTransparentData } from './utils';

import type {
  Options,
  BorderOptions,
  DrawCircleOptions,
  FiveStar,
  TextOptions,
} from './types';

export class Seal {
  private options: Options;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private borderOpts: Required<BorderOptions>;
  private innerLoopLineOpts: Required<BorderOptions>;
  private innerBorderOpts: Required<BorderOptions>;

  private textOpts: Required<TextOptions>;

  private fiveStarOpts: Required<FiveStar>;

  constructor(container: HTMLElement, opts: Options) {
    const canvas = document.createElement('canvas');

    const options = Object.assign({}, defaultOpts, opts);

    canvas.width = options.width ?? defaultOpts.width;
    canvas.height = options.height ?? defaultOpts.height;

    container.appendChild(canvas);

    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas = canvas;
    this.context = context;
    this.options = options;

    this.borderOpts = Object.assign({}, {
      ...defaultBorderOpts,
      color: options.color,
      shape: options.shape,
    }, opts?.border);

    this.innerBorderOpts = Object.assign({}, {
      ...defaultInnerBorderOpts,
      color: options.color,
      shape: options.shape,
    }, opts?.border);

    this.innerLoopLineOpts = Object.assign({}, {
      ...defaultInnerLoopLineOpts,
      color: options.color,
      shape: options.shape,
    }, opts?.border);

    this.fiveStarOpts = Object.assign({}, {
      ...defaultFiveStarOpts,
      color: options.color,
    }, opts?.border);

    this.textOpts = Object.assign({}, {
      ...defaultTextOpts,
      color: options.color,
    }, opts?.text);

    this.render();
  }

  render() {
    this.drawTransparentBg();

    this.drawBorder(this.borderOpts);
    this.drawInnerBorder(this.innerBorderOpts);
    this.drawInnerLoopLine(this.innerLoopLineOpts);

    this.drawFiveStar(this.fiveStarOpts);

    this.writeText(this.textOpts);
  }

  /**
   * 绘制边线
   */
  drawBorder(opts: Required<BorderOptions>) {
    if (!opts.visible) return;
    this.drawCircle(opts.width, opts.color, {
      radius: 140,
    });
  }

  /**
   * 绘制内边线
   * @param opts
   */
  drawInnerBorder(opts: Required<BorderOptions>) {
    if (!opts.visible) return;
    this.drawCircle(opts.width, opts.color, {
      radius: 130,
    });
  }

  /**
   * 绘制内环线
   * @param opts
   */
  drawInnerLoopLine(opts: Required<BorderOptions>) {
    if (!opts.visible) return;
    this.drawCircle(opts.width, opts.color, {
      radius: 80,
    });
  }

  /**
   * 绘制主文字
   * @param opts
   * @returns
   */
  writeText(opts: Required<TextOptions>) {
    if (!opts.visible) return;

    this.writeSurroundText(opts);
  }

  /**
   * 绘制五角星
   * @param opts
   */
  drawFiveStar(opts: Required<FiveStar>) {
    if (!opts.visible) return;

    this.context.save();
    this.context.fillStyle = opts.color;

    this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.context.rotate(Math.PI);
    this.context.beginPath();

    const dig = Math.PI / 5 * 4;

    for (let i = 0; i < 5; i++) {
      const x = Math.sin(i * dig);
      const y = Math.cos(i * dig);
      this.context.lineTo(x * 30, y * 30);
    }

    this.context.closePath();
    this.context.stroke();
    this.context.fill();
    this.context.restore();
  }

  /**
   * 绘制环绕文案
   * @param opts
   */
  writeSurroundText(opts: Required<TextOptions>) {

    this.context.font = `bold ${opts.fontSize}px serif`;
    this.context.fillStyle = opts.color;

    this.context.translate(this.canvas.width / 2, this.canvas.height / 2);

    const count = opts.text.length;

    const angle = -4 * Math.PI / (3 * (count - 1));

    const chars = opts.text.split('').reverse();

    for (let i = 0; i < count; i++){
      let char = chars[i];

      this.context.rotate(i === 0 ? (0.7 * Math.PI / 6.1): angle);
      this.context.save();
      this.context.translate(95, 0);
      this.context.rotate(Math.PI / 2);
      this.context.fillText(char, 0, 5);
      this.context.restore();
    }
  }

  /**
   * 绘制圆形
   */
  drawCircle(
    width: number,
    color: string,
    {
      radius,
      circleCenter = {
        x: this.canvas.width / 2,
        y: this.canvas.width / 2,
      }
    }: DrawCircleOptions
  ) {
    this.context.translate(0, 0);
    this.context.lineWidth = width;
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(circleCenter.x, circleCenter.y, radius, 0, Math.PI * 2);
    this.context.stroke();
    this.context.save();
  }

  /**
   * 绘制透明背景
   */
  drawTransparentBg() {
    this.context.putImageData(getTransparentData(this.canvas.width, this.canvas.height, this.context), 0, 0);
  }
}
