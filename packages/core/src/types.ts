export interface TextOptions {
  /** 是否显示 */
  visible?: boolean;
  /** 文本颜色，默认取 options.color */
  color?: string;
  /** 字体大小 */
  fontSize?: number;
  /** 字体粗细 */
  fontWeight?: string | number;
  /** 文案 */
  text?: string;
  /** 环绕文案半径，具中心点的距离 */
  radius?: number;
}

export interface WriteSurroundTextOptions extends Required<TextOptions> {
  position?: 'top' | 'bottom';
  /** 绘制开始的角度 */
  startDegree?: number,
}

export interface BorderOptions {
  /** 是否显示 */
  visible?: boolean;
  /** 填充色，默认取 options.color */
  color: string;
  /** 边框的宽度 */
  width?: number;
  /** 半径，距离中心点的距离 */
  radius?: number;
  /**
   * 边框的形状, 继承options.shape。
   * 边线和内边线不支持自定义。
   */
  shape?: SealShape;
}

export interface FiveStar {
  /** 是否显示 */
  visible?: boolean;
  /** 填充色，默认取 options.color */
  color: string;
  /** 大小 */
  size?: number;
}

export type SealType = 'company' | 'personal';

export type SealShape = `circle` | `square` | `ellipse`;

export type DrawCircleOptions = {
  /** 圆的半径 */
  radius: number,
  /** 圆心，默认canvas中心点 */
  circleCenter?: {
    x: number;
    y: number;
  }
};

export interface Options {
  /**
   * 印章类型
   * @default 'company'
   */
  type?: SealType;
  /**
   * 印章形状
   * @default 'circle'
   */
  shape?: SealShape;
  /**
   * 印章颜色
   */
  color?: string;
  /**
   * 显示透明背景
   */
  showTransparent?: boolean;
  /**
   * 五角星配置
   */
  fiveStar?: FiveStar;
  /**
   * 画布宽度
   * @default 300
   */
  width?: number;
  /**
   * 画布高度
   * @default 300
   */
  height?: number;
  /**
   * 主文字配置，一般是该公司或结构名称
   */
  text?: TextOptions;
  /**
   *
   */
  serNo?: TextOptions;
  /**
   * 副文字配置
   */
  subText?: TextOptions;
  /**
   * 中心文字配置
   */
  centerText?: TextOptions;
  /** 边线配置 */
  border?: BorderOptions;
  /**
   * 内边线配置
   *  @default
   *   {
   *     visible: true,
   *     width: 1,
   *     shape: 'circle'
   *   }
   */
  innerBorder?: BorderOptions;
  /** 内环线配置 */
  innerLoopLine?: BorderOptions;
}
