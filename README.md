<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/seal.svg">
  </a>
</p>

<h1 align="center">Pansy Seal</h1>

<div align="center">
  强大的印章组件，帮你快速的生成印章。
</div>

<br />

<div align="center">

[![npm version][npm-v-image]][npm-url] 
[![npm download][download-image]][download-url] 
[![stars-image][stars-image]][stars-url] 
[![forks-image][forks-image]][forks-url] 
[![packagephobia][packagephobia-image]][packagephobia-url] 
  
</div> 

<div>
  注意！注意！注意！本库只为个人研究学习所用，请勿用于违法相关！
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

## 📸 印章概览

印章包含以下内容

<img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/seal.png">

## 🧑‍💻 API

|属性|说明|类型|默认值|
|---|---|---|---|
| type | 印章类型，分为公司印章、个人印章 | `company` \| `personal` |`company`|
| shape | 指定印章的形状，仅公司印章有效 | `circle` \| `square`\| `ellipse` | `circle` |
| color | 印章颜色，各分部的颜色可单独指定 | `string` | `red` |
| showTransparent | 是否显示透明背景, 下载时请隐藏 | `boolean` | `true` |
| width | 指定印章的宽度 | `number` | `300` |
| height | 指定印章的高度 | `number` | `300` |
| fiveStar | 五角星配置 | `any` | - |
| text | 主文字配置 | `any` |-|
| subText | 副文字配置 | `any` | - |
| centerText | 中心文字配置 | `any` | - |
| border | 边线配置 | `any` | - |
| innerBorder | 内边线配置 | `any` | - |
| innerLoopLine | 内环线配置 | `any` | - |

## 🌟 社区互助

| Github Issue                                                 | 钉钉群                                                                                     | 微信群                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [issues](https://github.com/pansyjs/seal/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |



[npm-v-image]: https://img.shields.io/npm/v/@pansy/seal.svg
[forks-image]: https://img.shields.io/github/forks/pansyjs/seal.svg
[stars-image]: https://img.shields.io/github/stars/pansyjs/seal.svg
[packagephobia-image]: https://packagephobia.com/badge?p=@pansy/seal
[npm-url]: http://npmjs.org/package/@pansy/seal
[github-url]: https://github.com/pansyjs/seal
[stars-url]: https://github.com/pansyjs/seal/stargazers
[forks-url]: https://github.com/pansyjs/seal/network/members
[packagephobia-url]: https://packagephobia.com/result?p=@pansy/seal
[download-image]: https://img.shields.io/npm/dm/@pansy/seal
[download-url]: https://npmjs.org/package/@pansy/seal
