"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4599],{3482:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(5170);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(2182),a=n(9028),o=(n(5170),n(3482)),i=["components"],p={id:"store",title:"pnpm store"},l=void 0,s={unversionedId:"cli/store",id:"cli/store",title:"pnpm store",description:"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30b9\u30c8\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ja/next/cli/store",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"store",title:"pnpm store"},sidebar:"docs",previous:{title:"pnpm server",permalink:"/ja/next/cli/server"},next:{title:"pnpm root",permalink:"/ja/next/cli/root"}},c={},u=[{value:"\u30b3\u30de\u30f3\u30c9",id:"\u30b3\u30de\u30f3\u30c9",level:2},{value:"status",id:"status",level:3},{value:"add",id:"add",level:3},{value:"prune",id:"prune",level:3},{value:"path",id:"path",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30b9\u30c8\u30a2\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30b3\u30de\u30f3\u30c9"},"\u30b3\u30de\u30f3\u30c9"),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"\u30b9\u30c8\u30a2\u5185\u306e\u5909\u66f4\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5185\u5bb9\u304c\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5c55\u958b\u3057\u305f\u3068\u304d\u3068\u540c\u4e00\u306e\u5834\u5408\u3001\u7d42\u4e86\u30b3\u30fc\u30c90\u3067\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"\u6a5f\u80fd\u7684\u306b\u306f",(0,o.kt)("a",{parentName:"p",href:"/ja/next/cli/add"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm add")),"\u3068\u540c\u7b49\u3067\u3059\u304c\u3001\u30b9\u30c8\u30a2\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u305b\u305a\u3001\u76f4\u63a5\u30b9\u30c8\u30a2\u306b\u65b0\u3057\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"prune"},"prune"),(0,o.kt)("p",null,"Removes ",(0,o.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,o.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the system. Packages can become unreferenced after most installation operations, for instance when dependencies are made redundant."),(0,o.kt)("p",null,"For example, during ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not automatically remove packages. If package ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other project on the system, it becomes unreferenced. Running ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would remove ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your projects. If future installations require removed packages, pnpm will download them again."),(0,o.kt)("p",null,"It is best practice to run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the store, but not too frequently. Sometimes, unreferenced packages become required again. This could occur when switching branches and installing older dependencies, in which case pnpm would need to re-download all removed packages, briefly slowing down the installation process."),(0,o.kt)("p",null,"Please note that this command is prohibited when a ",(0,o.kt)("a",{parentName:"p",href:"/ja/next/cli/server"},"store server")," is running."),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30b9\u30c8\u30a2\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30d1\u30b9\u3092\u8fd4\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);