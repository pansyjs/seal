---
title: 快速开始
order: 1
---

## 安装依赖


```sh
// npm
npm install @pansy/seal --save

// yarn
yarn add @pansy/seal

// pnpm
pnpm install --dev @pansy/seal
```

## 使用

```ts
import { Seal } from '@pansy/seal';

const seal = new Seal({ ... });

// 如果需要修改印章参数，请调用
seal.update({ ... });

// 销毁印章
seal.destroy();
```
