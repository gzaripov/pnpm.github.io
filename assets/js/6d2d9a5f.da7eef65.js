"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9355],{9613:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},m=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(f,c(c({ref:e},m),{},{components:n})):r.createElement(f,c({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1793:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(2081),a=n(4604),o=(n(9496),n(9613)),c=["components"],i={id:"patch-commit",title:"pnpm patch-commit <path>"},p=void 0,l={unversionedId:"cli/patch-commit",id:"cli/patch-commit",title:"pnpm patch-commit <path>",description:"Added in: v7.4.0",source:"@site/docs/cli/patch-commit.md",sourceDirName:"cli",slug:"/cli/patch-commit",permalink:"/pnpm.github.io/next/cli/patch-commit",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/patch-commit.md",tags:[],version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1656423184,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{id:"patch-commit",title:"pnpm patch-commit <path>"},sidebar:"docs",previous:{title:"pnpm patch <pkg>",permalink:"/pnpm.github.io/next/cli/patch"},next:{title:"pnpm audit",permalink:"/pnpm.github.io/next/cli/audit"}},m={},u=[],s={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v7.4.0"),(0,o.kt)("p",null,"Generate a patch out of a directory (inspired by a similar command in Yarn)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm patch-commit <patchDir>\n")))}d.isMDXComponent=!0}}]);