<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/seal.svg">
  </a>
</p>

<h1 align="center">Pansy Seal</h1>

<div align="center">
  强大的印章组件，帮你快速的生成印章。
</div>


## 🏗 安装

```
// npm
npm install @pansy/seal --save

// yarn
yarn add @pansy/seal

// pnpm
pnpm install @pansy/seal
```

## 🔨 使用
```ts
import { Seal } from '@pansy/seal';

const seal = new Seal({ ... });

// 如果需要修改印章参数，请调用
seal.update({ ... });

// 销毁印章
seal.destroy();
```

## API

|属性|说明|类型|默认值|
|---|---|---|---|
|type| 印章类型，主要公司印章和个人印章 | `company` \| `personal` |`company`|
|shape| 指定头像的形状，仅当公司印章有效 | `circle` \| `square`\| `ellipse` | `circle` |
|width|指定头像的宽度|`number`|`200`|
|height|指定头像的宽度|`number`|`200`|
|fiveStar|是否显示中间的五角星|`boolean`|`true`|
|name|公司名称或者个人姓名|`string`|-|
|title|是否显示中间的五角星|`boolean`|`true`|

## 🌟 社区互助

| Github Issue                                                 | 钉钉群                                                                                     | 微信群                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [issues](https://github.com/pansyjs/watermark/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |
