"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3977],{3482:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(5170);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=r.createContext({}),m=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(t),d=p,f=s["".concat(a,".").concat(d)]||s[d]||u[d]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=t(2182),p=t(9028),l=(t(5170),t(3482)),o=["components"],i={id:"uninstall",title:"\u5378\u8f7d pnpm"},a=void 0,m={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"\u5378\u8f7d pnpm",description:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/zh/7.x/uninstall",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"\u5378\u8f7d pnpm"},sidebar:"version-7.x/docs",previous:{title:"peers \u662f\u5982\u4f55\u88ab\u5904\u7406\u7684",permalink:"/zh/7.x/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/zh/7.x/pnpm-vs-npm"}},c={},u=[{value:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",id:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305",level:2},{value:"\u79fb\u9664 pnpm CLI",id:"\u79fb\u9664-pnpm-cli",level:2},{value:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8",id:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8",level:2},{value:"\u5220\u9664\u72b6\u6001\u6587\u4ef6",id:"\u5220\u9664\u72b6\u6001\u6587\u4ef6",level:2}],s={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305"},"\u79fb\u9664\u5168\u5c40\u5b89\u88c5\u7684\u5305"),(0,l.kt)("p",null,"\u5728\u5220\u9664 pnpm CLI \u4e4b\u524d\uff0c\u5220\u9664\u6240\u6709\u7531 pnpm \u5b89\u88c5\u7684\u5168\u5c40\u5305\u53ef\u80fd\u662f\u6709\u610f\u4e49\u7684\u3002"),(0,l.kt)("p",null,"\u8981\u5217\u51fa\u6240\u6709\u5168\u5c40\u5305\uff0c\u8bf7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),"\u3002 \u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u5168\u5c40\u5305\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," \u5217\u51fa\u6bcf\u4e2a\u5168\u5c40\u5305\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," \u627e\u5230\u5168\u5c40\u76ee\u5f55\u7684\u4f4d\u7f6e\u5e76\u624b\u52a8\u5220\u9664\u5b83\u3002")),(0,l.kt)("h2",{id:"\u79fb\u9664-pnpm-cli"},"\u79fb\u9664 pnpm CLI"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u72ec\u7acb\u811a\u672c\u5b89\u88c5 pnpm\uff08\u6216 npx\uff09\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u80fd\u591f\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d pnpm CLI\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm rm -g pnpm\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 npm \u5b89\u88c5 pnpm\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u4f7f\u7528 npm \u5378\u8f7d pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8"},"\u5220\u9664\u5168\u5c40\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4ec5\u5728\u4e3b\u78c1\u76d8\u4e2d\u4f7f\u7528 pnpm\uff0c\u90a3\u4e48\u60a8\u5c06\u5728\u4e3b\u76ee\u5f55\u4e2d\u62e5\u6709\u4e00\u4e2a\u5168\u5c40\u5b58\u50a8\u3002 \u6240\u4ee5\u53ea\u9700\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5220\u9664\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf ~/.pnpm-store\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u975e\u4e3b\u78c1\u76d8\u4e2d\u4f7f\u7528 pnpm\uff0c\u5219\u5b58\u50a8\u4f4d\u4e8e\u8be5\u78c1\u76d8\u7684\u6839\u76ee\u5f55\u4e2d\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u60a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"D:")," \u4e0a\u4f7f\u7528 pnpm\uff0c\u8bf7\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"\u5220\u9664\u5b58\u50a8\u3002"),(0,l.kt)("h2",{id:"\u5220\u9664\u72b6\u6001\u6587\u4ef6"},"\u5220\u9664\u72b6\u6001\u6587\u4ef6"),(0,l.kt)("p",null,"pnpm \u4e5f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pnpm-state.json")," \u4fdd\u5b58\u4e86\u4e00\u4e9b\u72b6\u6001\u3002 \u60a8\u53ef\u4ee5\u5220\u9664\u6b64\u6587\u4ef6\u3002"))}d.isMDXComponent=!0}}]);