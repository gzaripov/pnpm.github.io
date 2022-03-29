"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7683],{3482:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(5170);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(2182),i=n(9028),o=(n(5170),n(3482)),p=["components"],l={id:"scripts",title:"Script"},a=void 0,c={unversionedId:"scripts",id:"version-6.x/scripts",title:"Script",description:"Come pnpm gestisce il campo scripts del package.json.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/it/scripts",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"scripts",title:"Script"},sidebar:"version-6.x/docs",previous:{title:"Filtraggio",permalink:"/it/filtering"},next:{title:"pnpm add <pkg>",permalink:"/it/cli/add"}},s={},u=[{value:"Script del ciclo di vita",id:"script-del-ciclo-di-vita",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Come pnpm gestisce il campo ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," del ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"script-del-ciclo-di-vita"},"Script del ciclo di vita"),(0,o.kt)("h3",{id:"pnpmdevpreinstall"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,o.kt)("p",null,"Aggiunto nella versione: v6.21.0"),(0,o.kt)("p",null,"Funziona solo su ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," locali."),(0,o.kt)("p",null,"Viene eseguito prima dell'installazione di qualsiasi dipendenza."),(0,o.kt)("p",null,"Questo script viene eseguito solo se impostato nel ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," del progetto radice."))}m.isMDXComponent=!0}}]);