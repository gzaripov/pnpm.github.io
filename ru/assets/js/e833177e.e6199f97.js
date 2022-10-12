"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6599],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=p,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(2081),p=n(4604),i=(n(9496),n(9613)),o=["components"],a={id:"scripts",title:"Scripts"},c=void 0,l={unversionedId:"scripts",id:"scripts",title:"Scripts",description:"How pnpm handles the scripts field of package.json.",source:"@site/docs/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/pnpm/ru/next/scripts",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1647740495,formattedLastUpdatedAt:"20 \u043c\u0430\u0440. 2022 \u0433.",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"docs",previous:{title:"Filtering",permalink:"/pnpm/ru/next/filtering"},next:{title:"pnpm add <pkg>",permalink:"/pnpm/ru/next/cli/add"}},s={},d=[{value:"Lifecycle Scripts",id:"lifecycle-scripts",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How pnpm handles the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h2",{id:"lifecycle-scripts"},"Lifecycle Scripts"),(0,i.kt)("h3",{id:"pnpmdevpreinstall"},(0,i.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,i.kt)("p",null,"Runs only on local ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"Runs before any dependency is installed."),(0,i.kt)("p",null,"This script is executed only when set in the root project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}f.isMDXComponent=!0}}]);