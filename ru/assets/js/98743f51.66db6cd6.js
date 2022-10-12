"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1279],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),s=i,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||a;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(2081),i=r(4604),a=(r(9496),r(9613)),p=["components"],o={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"version-7.x/cli/patch",title:"pnpm patch <pkg>",description:"Added in: v7.4.0",source:"@site/versioned_docs/version-7.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/pnpm/ru/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/pnpm/ru/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/pnpm/ru/cli/patch-commit"}},d={},m=[{value:"Options",id:"options",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3}],u={toc:m};function s(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v7.4.0"),(0,a.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,a.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,a.kt)("p",null,"Once you're done with your changes, run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,a.kt)("a",{parentName:"p",href:"/pnpm/ru/package_json#pnpmpatcheddependencies"},(0,a.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,a.kt)("p",null,"Added in v7.11.0"),(0,a.kt)("p",null,"The package that needs to be patched will be extracted to this directory."))}s.isMDXComponent=!0}}]);