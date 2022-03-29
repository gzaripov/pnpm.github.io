"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2295],{3482:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(5170);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(t),f=p,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(2182),p=t(9028),a=(t(5170),t(3482)),o=["components"],i={id:"pnpx-cli",title:"pnpx CLI"},c=void 0,l={unversionedId:"pnpx-cli",id:"version-5.x/pnpx-cli",title:"pnpx CLI",description:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u5411\u3051",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-5.x/pnpx-cli.md",sourceDirName:".",slug:"/pnpx-cli",permalink:"/ja/5.x/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",frontMatter:{id:"pnpx-cli",title:"pnpx CLI"},sidebar:"version-5.x/docs",previous:{title:"pnpm CLI",permalink:"/ja/5.x/pnpm-cli"},next:{title:"\u8a2d\u5b9a",permalink:"/ja/5.x/configuring"}},m={},u=[{value:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u5411\u3051",id:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u5411\u3051",level:2},{value:"npm \u30e6\u30fc\u30b6\u30fc\u5411\u3051",id:"npm-\u30e6\u30fc\u30b6\u30fc\u5411\u3051",level:2}],s={toc:u};function f(e){var n=e.components,t=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u5411\u3051"},"\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u5411\u3051"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) \u306f\u3001\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u306b\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092\u4e00\u56de\u9650\u308a\u3067\u8aad\u307f\u8fbc\u3093\u3067\u3001 \u305d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b3\u30de\u30f3\u30c9\u30d0\u30a4\u30ca\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b\u3048\u3070\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u3092\u5225\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u305b\u305a\u306b\u3001\u3069\u3053\u3067\u3082 React \u30a2\u30d7\u30ea\u3092\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),(0,a.kt)("p",null,"\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u304c\u53d6\u5f97\u3055\u308c\u3001\u6307\u5b9a\u3055\u308c\u305f\u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u540c\u3058\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u63d0\u4f9b\u3059\u308b npm \u306e ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," \u3092\u53c2\u7167\u3059\u308b\u3068\u826f\u3044\u3067\u3057\u3087\u3046\u3002\u3053\u3061\u3089\u306f\u5185\u90e8\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," \u3067\u306f\u306a\u304f ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u70b9\u304c\u7570\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"npm-\u30e6\u30fc\u30b6\u30fc\u5411\u3051"},"npm \u30e6\u30fc\u30b6\u30fc\u5411\u3051"),(0,a.kt)("p",null,"npm has a great package runner called ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpx")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}f.isMDXComponent=!0}}]);