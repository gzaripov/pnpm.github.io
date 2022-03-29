"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4974],{3482:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(5170);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),v=l,f=s["".concat(p,".").concat(v)]||s[v]||d[v]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(2182),l=r(9028),o=(r(5170),r(3482)),a=["components"],i={id:"why",title:"pnpm why"},p=void 0,c={unversionedId:"cli/why",id:"cli/why",title:"pnpm why",description:"\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u4f9d\u5b58\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/ja/next/cli/why",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"why",title:"pnpm why"},sidebar:"docs",previous:{title:"pnpm outdated",permalink:"/ja/next/cli/outdated"},next:{title:"pnpm run",permalink:"/ja/next/cli/run"}},u={},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:d};function v(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u4f9d\u5b58\u3059\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"JSON \u5f62\u5f0f\u3067\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--long"},"--long"),(0,o.kt)("p",null,"Show verbose output."),(0,o.kt)("h3",{id:"--parseable"},"--parseable"),(0,o.kt)("p",null,"\u30c4\u30ea\u30fc\u8868\u793a\u306e\u4ee3\u308f\u308a\u306b\u89e3\u6790\u53ef\u80fd\u306a\u51fa\u529b\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"\u73fe\u5728\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u306a\u304f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," \u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u306e\u307f\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u306e\u307f\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}v.isMDXComponent=!0}}]);