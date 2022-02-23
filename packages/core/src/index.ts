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
  // private options: Options;
  private canvas: HTMLCanvasElement | undefined;
  private context: CanvasRenderingContext2D | undefined;
  /** 画板的中心点 */
  private centerPoint: [number, number];

  private borderOpts: Required<BorderOptions>;
  private innerLoopLineOpts: Required<BorderOptions>;
  private innerBorderOpts: Required<BorderOptions>;

  private textOpts: Required<TextOptions>;

  private fiveStarOpts: Required<FiveStar>;

  constructor(container: HTMLElement, opts: Options) {
    const canvas = document.createElement('canvas');

    const {
      options,
      borderOpts,
      innerBorderOpts,
      innerLoopLineOpts,
      fiveStarOpts,
      textOpts,
    } = this.resolveConfig(opts);

    canvas.width = options.width ?? defaultOpts.width;
    canvas.height = options.height ?? defaultOpts.height;

    container.appendChild(canvas);

    this.canvas = canvas;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.centerPoint = [
      canvas.width / 2,
      canvas.height / 2,
    ]

    // this.options = options;
    this.borderOpts = borderOpts;
    this.innerBorderOpts = innerBorderOpts;
    this.innerLoopLineOpts = innerLoopLineOpts;
    this.fiveStarOpts = fiveStarOpts;
    this.textOpts = textOpts;

    this.render();
  }

  update(opts: Options) {
    const {
      // options,
      borderOpts,
      innerBorderOpts,
      innerLoopLineOpts,
      fiveStarOpts,
      textOpts,
    } = this.resolveConfig(opts, false);

    // this.options = options;
    this.borderOpts = borderOpts;
    this.innerBorderOpts = innerBorderOpts;
    this.innerLoopLineOpts = innerLoopLineOpts;
    this.fiveStarOpts = fiveStarOpts;
    this.textOpts = textOpts;

    this.render();
  }

  /**
   * 绘制印章
   */
  render() {
    if (!this.canvas || !this.context) return;
    /** 重置画布 */
    this.canvas.width = this.canvas.width;

    /** 绘制透明背景 */
    this.context.putImageData(
      getTransparentData(this.canvas.width, this.canvas.height, this.context),
      0,
      0
    );

    this.drawBorder(this.borderOpts);
    this.drawInnerBorder(this.innerBorderOpts);
    this.drawInnerLoopLine(this.innerLoopLineOpts);

    this.drawFiveStar(this.fiveStarOpts);

    this.writeText(this.textOpts);
  }

  destroy() {
    this.canvas = undefined;
    this.context = undefined;
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
    this.writeSurroundText(opts);
  }

  /**
   * 绘制五角星
   * @param opts
   */
  drawFiveStar(opts: Required<FiveStar>) {
    if (!this.canvas || !this.context || !opts.visible) return;

    this.context.save();
    this.context.lineWidth = 1;
    this.context.fillStyle = opts.color;
    this.context.strokeStyle = opts.color;

    this.context.translate(...this.centerPoint);
    this.context.rotate(Math.PI);
    this.context.beginPath();

    const dig = Math.PI / 5 * 4;

    for (let i = 0; i < 5; i++) {
      const x = Math.sin(i * dig);
      const y = Math.cos(i * dig);
      this.context.lineTo(x * opts.size, y * opts.size);
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
    if (!this.canvas || !this.context || !opts.visible || !opts.text) return;

    this.context.font = `normal normal ${opts.fontWeight} ${opts.fontSize}px serif`;
    this.context.fillStyle = opts.color;

    this.context.translate(...this.centerPoint);

    const count = opts.text.length;

    const angle = -4 * Math.PI / (3 * (count - 1));

    console.log(angle);

    const chars = opts.text.split('').reverse();

    for (let i = 0; i < count; i++){
      let char = chars[i];

      this.context.rotate(i === 0 ? (0.7 * Math.PI / 6.1): angle);
      this.context.save();
      this.context.translate(opts.radius, 0);
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
        x: this.centerPoint[0],
        y: this.centerPoint[1],
      }
    }: DrawCircleOptions
  ) {
    if (!this.canvas || !this.context) return;

    this.context.translate(0, 0);
    this.context.lineWidth = width;
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.arc(circleCenter.x, circleCenter.y, radius, 0, Math.PI * 2);
    this.context.stroke();
    this.context.save();
  }

  /**
   * 解析配置
   * @param opts
   * @param useDefault
   * @returns
   */
  resolveConfig(opts: Options, useDefault: boolean = true) {
    const options = Object.assign({}, defaultOpts, opts);

    const borderOpts = Object.assign({}, {
      ...(useDefault ? defaultBorderOpts : this.borderOpts),
      color: options.color,
      shape: options.shape,
    }, opts?.border);

    const innerBorderOpts = Object.assign({}, {
      ...(useDefault ? defaultInnerBorderOpts: this.innerBorderOpts),
      color: options.color,
      shape: options.shape,
    }, opts?.innerBorder);

    const innerLoopLineOpts = Object.assign({}, {
      ...(useDefault ? defaultInnerLoopLineOpts : this.innerLoopLineOpts),
      color: options.color,
      shape: options.shape,
    }, opts?.innerLoopLine);

    const fiveStarOpts = Object.assign({}, {
      ...(useDefault ? defaultFiveStarOpts: this.fiveStarOpts),
      color: options.color,
    }, opts?.fiveStar);

    const textOpts = Object.assign({}, {
      ...(useDefault ? defaultTextOpts : this.textOpts),
      color: options.color,
    }, opts?.text) as Required<TextOptions>;

    return {
      options,
      borderOpts,
      innerBorderOpts,
      innerLoopLineOpts,
      fiveStarOpts,
      textOpts,
    }
  }
}

export type { Options } from './types';
