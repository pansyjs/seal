export interface TextOptions {
  /** 是否显示 */
  visible?: boolean;
  /** 文本颜色，默认取 options.color */
  color: string;
  /** 字体大小 */
  fontSize?: number;
  /** 字体粗细 */
  fontWeight?: string | number;
  /** 文案 */
  text?: string;
}

export interface BorderOptions {
  /** 是否显示 */
  visible?: boolean;
  /** 填充色，默认取 options.color */
  color: string;
  /** 字体大小 */
  fontSize?: number;
  /** 边框的宽度 */
  width?: string;
  /** 边框的形状 */
  shape?: SealShape;
}

export interface FiveStar {
  /** 是否显示 */
  visible?: boolean;
  /** 填充色，默认取 options.color */
  color: string;
}

export type SealType = 'company' | 'personal';

export type SealShape = `circle` | `square` | `ellipse`;

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
  shape?: SealType;
  /**
   * 印章颜色
   */
  color?: string;
  /**
   * 五角星配置
   */
  fiveStar?: FiveStar;
  /**
   * 印章宽度
   * @default 300
   */
  width: number;
  /**
   * 印章高度
   * @default 300
   */
  height: number;
  /**
   * 主文字配置，一般是该公司或结构名称
   */
  text?: TextOptions;
  /**
   * 主文字配置
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
