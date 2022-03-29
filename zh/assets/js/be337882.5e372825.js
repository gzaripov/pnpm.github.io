"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2663],{3482:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(5170);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(2182),o=n(9028),i=(n(5170),n(3482)),a=["components"],l={id:"motivation",title:"\u9879\u76ee\u521d\u8877"},p=void 0,u={unversionedId:"motivation",id:"version-5.x/motivation",title:"\u9879\u76ee\u521d\u8877",description:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/zh/5.x/motivation",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"motivation",title:"\u9879\u76ee\u521d\u8877"},sidebar:"version-5.x/docs",next:{title:"\u5b89\u88c5",permalink:"/zh/5.x/installation"}},c={},m=[{value:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6",id:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6",level:2},{value:"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684 node_modules \u6587\u4ef6\u5939",id:"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684-node_modules-\u6587\u4ef6\u5939",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6"},"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6"),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528 npm \u6216 Yarn \u65f6\uff0c\u5982\u679c\u4f60\u6709100\u4e2a\u9879\u76ee\u4f7f\u7528\u4e86\u67d0\u4e2a\u4f9d\u8d56\uff08dependency\uff09\uff0c\u5c31\u4f1a\u6709100\u4efd\u8be5\u4f9d\u8d56\u7684\u526f\u672c\u4fdd\u5b58\u5728\u786c\u76d8\u4e0a\u3002 \xa0\u800c\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u4f9d\u8d56\u4f1a\u88ab\u5b58\u50a8\u5728\u5185\u5bb9\u53ef\u5bfb\u5740\u7684\u5b58\u50a8\u4e2d\uff0c\u6240\u4ee5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7528\u5230\u4e86\u67d0\u4f9d\u8d56\u9879\u7684\u4e0d\u540c\u7248\u672c\uff0c\u53ea\u4f1a\u5c06\u4e0d\u540c\u7248\u672c\u95f4\u6709\u5dee\u5f02\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u4ed3\u5e93\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u67d0\u4e2a\u5305\u6709100\u4e2a\u6587\u4ef6\uff0c\u800c\u5b83\u7684\u65b0\u7248\u672c\u53ea\u6539\u53d8\u4e86\u5176\u4e2d1\u4e2a\u6587\u4ef6\u3002\u90a3\u4e48 ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm update")," \u65f6\u53ea\u4f1a\u5411\u5b58\u50a8\u4e2d\u5fc3\u989d\u5916\u6dfb\u52a01\u4e2a\u65b0\u6587\u4ef6\uff0c\u800c\u4e0d\u4f1a\u56e0\u4e3a\u4ec5\u4ec5\u4e00\u4e2a\u6587\u4ef6\u7684\u6539\u53d8\u590d\u5236\u6574\u65b0\u7248\u672c\u5305\u7684\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6240\u6709\u6587\u4ef6\u90fd\u4f1a\u5b58\u50a8\u5728\u786c\u76d8\u4e0a\u7684\u67d0\u4e00\u4f4d\u7f6e\u3002 \u5f53\u8f6f\u4ef6\u5305\u88ab\u88ab\u5b89\u88c5\u65f6\uff0c\u5305\u91cc\u7684\u6587\u4ef6\u4f1a\u786c\u94fe\u63a5\u5230\u8fd9\u4e00\u4f4d\u7f6e\uff0c\u800c\u4e0d\u4f1a\u5360\u7528\u989d\u5916\u7684\u78c1\u76d8\u7a7a\u95f4\u3002 \u8fd9\u5141\u8bb8\u4f60\u8de8\u9879\u76ee\u5730\u5171\u4eab\u540c\u4e00\u7248\u672c\u7684\u4f9d\u8d56\u3002")),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u60a8\u5728\u78c1\u76d8\u4e0a\u8282\u7701\u4e86\u5927\u91cf\u7a7a\u95f4\uff0c\u8fd9\u4e0e\u9879\u76ee\u548c\u4f9d\u8d56\u9879\u7684\u6570\u91cf\u6210\u6b63\u6bd4\uff0c\u5e76\u4e14\u5b89\u88c5\u901f\u5ea6\u8981\u5feb\u5f97\u591a\uff01"),(0,i.kt)("h2",{id:"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684-node_modules-\u6587\u4ef6\u5939"},"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684 node_modules \u6587\u4ef6\u5939"),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528 npm \u5b89\u88c5\u4f9d\u8d56\u65f6\uff0c\u6240\u6709\u7684\u4f9d\u8d56\u90fd\u4f1a\u88ab\u63d0\u5347\u5230\u6a21\u5757\u7684\u6839\u76ee\u5f55\u3002 \u56e0\u6b64\uff0c\u9879\u76ee\u53ef\u4ee5\u8bbf\u95ee\u5230\u672a\u88ab\u6dfb\u52a0\u8fdb\u5f53\u524d\u9879\u76ee\u7684\u4f9d\u8d56\u3002"),(0,i.kt)("p",null,"pnpm \u4f7f\u7528\u8f6f\u94fe\u7684\u65b9\u5f0f\u5c06\u9879\u76ee\u7684\u76f4\u63a5\u4f9d\u8d56\u6dfb\u52a0\u8fdb\u6a21\u5757\u6587\u4ef6\u5939\u7684\u6839\u76ee\u5f55\u3002 \u5982\u679c\u4f60\u60f3\u4e86\u89e3 pnpm \u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7ed3\u6784\u8bbe\u8ba1\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u5b83\u5728 Node.js \u751f\u6001\u6210\u4e3a\u4e86\u540e\u8d77\u4e4b\u79c0\uff0c\u8bf7\u53c2\u8003\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"\u6241\u5e73\u7684 node_modules \u4e0d\u662f\u552f\u4e00\u7684\u65b9\u6cd5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/5.x/symlinked-node-modules-structure"},"\u57fa\u4e8e\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u7ed3\u6784"))))}d.isMDXComponent=!0}}]);