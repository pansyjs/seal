(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0lqN":function(e,t,n){"use strict";n.r(t);var r=n("nNWW"),a=n.n(r),l=n("thUu"),o=n("QtyR"),c=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u5982\u4f55\u5728\u6846\u67b6\u4e2d\u4f7f\u7528"},a.a.createElement(l["AnchorLink"],{to:"#\u5982\u4f55\u5728\u6846\u67b6\u4e2d\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u5728\u6846\u67b6\u4e2d\u4f7f\u7528"),a.a.createElement("p",null,"\u672c\u4ed3\u5e93\u63d0\u4f9b\u4e86 react\u3001vue \u6846\u67b6\u7684\u5c01\u88c5\u5bf9\u5e94 @pansy/react-seal @pansy/vue-seal\u53ef\u5b89\u88c5\u5bf9\u5e94\u7684\u5305"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u6846\u67b6"),a.a.createElement("th",null,"\u5305"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"react"),a.a.createElement("td",null,"@pansy/react-seal")),a.a.createElement("tr",null,a.a.createElement("td",null,"vue"),a.a.createElement("td",null,"@pansy/vue-seal"))))))}));t["default"]=e=>{var t=a.a.useContext(l["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(c,{demos:n})}},QtyR:function(e,t,n){"use strict";var r=n("nNWW"),a=n.n(r),l=n("bIC1"),o=n.n(l);n("u5XT");function c(e,t){return m(e)||d(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(u){c=!0,a=u}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(r["useRef"])(),l=Object(r["useState"])(!1),u=c(l,2),i=u[0],s=u[1],d=Object(r["useState"])(!1),m=c(d,2),f=m[0],v=m[1];return Object(r["useEffect"])((function(){var e=n.current,t=o()((function(){s(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":f||void 0},a.a.createElement("table",null,t)))};t["a"]=f},u5XT:function(e,t,n){}}]);