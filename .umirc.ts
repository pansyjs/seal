import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/seal.svg';

export default {
  title: 'Pansy Seal',
  logo,
  favicon: logo,
  mode: 'site',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/seal',
    },
  ],
  alias: {
    '@pansy/seal': join(__dirname, 'packages/core/src'),
  },
  resolve: {
    includes: [
      'docs',
      'packages/core/docs',
      'packages/react/docs'
    ]
  },
  hash: true,
  dynamicImport: {}
};
