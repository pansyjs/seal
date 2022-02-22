import type {
  TextOptions,
} from './types';

export const defaultOpts = {
  type: 'company',
  shape: 'circle',
  color: 'red',
  width: 300,
  height: 300,
}

export const defaultBorderOpts = {
  visible: true,
  width: 6,
}

export const defaultInnerBorderOpts = {
  visible: true,
  width: 1,
}


export const defaultInnerLoopLineOpts = {
  visible: true,
  width: 2,
}


export const defaultFiveStarOpts = {
  visible: true,
}

export const defaultTextOpts = {
  visible: true,
  fontSize: 28,
  text: '超级无敌爱国创新科技有限公司'
} as Required<TextOptions>;
