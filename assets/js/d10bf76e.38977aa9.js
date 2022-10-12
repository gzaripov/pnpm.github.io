"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2907],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=t(2081),r=t(4604),a=(t(9496),t(9613)),i=["components"],l={id:"fetch",title:"pnpm fetch"},p=void 0,c={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"Fetch packages from a lockfile into virtual store, package manifest is ignored.",source:"@site/versioned_docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/pnpm/cli/fetch",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/cli/fetch.md",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/pnpm/cli/prune"},next:{title:"pnpm install-test",permalink:"/pnpm/cli/install-test"}},s={},d=[{value:"Usage scenario",id:"usage-scenario",level:2},{value:"Options",id:"options",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Fetch packages from a lockfile into virtual store, package manifest is ignored."),(0,a.kt)("h2",{id:"usage-scenario"},"Usage scenario"),(0,a.kt)("p",null,"This command is specifically designed to boost building a docker image."),(0,a.kt)("p",null,"You may have read the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js\napp, if you didn't read it yet, you may want to read it first."),(0,a.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using\npnpm, which shall look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"As long as there is no change to ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of\n",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time\nwhen building a docker image."),(0,a.kt)("p",null,"However, modification to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than\nwe expected, because it does not only contain dependencies, but may also\ncontain the version number, scripts, and arbitrary configuration for any other\ntool."),(0,a.kt)("p",null,"It's also hard to maintain a Dockerfile that build a monorepo project, it may\nlook like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,a.kt)("p",null,"As you can see, the Dockerfile has to be updated when you add or remove\nsub-packages."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," will solve the above problem perfectly by providing the ability\nto fetch package to virtual store with information only from a lockfile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"It works for both simple project and monorepo project, ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline")," enforces\npnpm not to communicate with package registry as all needed packages shall be\nalready presented in the virtual store."),(0,a.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the\nlayer ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", which will save you much\ntime."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--dev"},"--dev"),(0,a.kt)("p",null,"Only development packages will be fetched"),(0,a.kt)("h3",{id:"--prod"},"--prod"),(0,a.kt)("p",null,"Development packages will not be fetched"))}u.isMDXComponent=!0}}]);