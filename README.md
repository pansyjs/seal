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

## 📸 印章概览

印章包含以下内容

<img src="https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/seal.png">

## 🧑‍💻 API

|属性|说明|类型|默认值|
|---|---|---|---|
| type | 印章类型，分为公司印章、个人印章 | `company` \| `personal` |`company`|
| shape | 指定印章的形状，仅公司印章有效 | `circle` \| `square`\| `ellipse` | `circle` |
| color | 印章颜色，各分部的颜色可单独指定 | `string` | `red` |
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
| [issues](https://github.com/pansyjs/watermark/issues) | <img src="https://github.com/alitajs/alita/blob/master/public/dingding.png" width="100" /> | <img src="https://github.com/alitajs/alita/blob/master/public/wechat.png" width="100" /> |

