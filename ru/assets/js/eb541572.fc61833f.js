"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1023],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=l,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=n(2081),l=n(4604),a=(n(9496),n(9613)),o=["components"],p={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/versioned_docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/pnpm/ru/6.x/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1647463814,formattedLastUpdatedAt:"16 \u043c\u0430\u0440. 2022 \u0433.",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/pnpm/ru/6.x/cli/test"},next:{title:"pnpm dlx",permalink:"/pnpm/ru/6.x/cli/dlx"}},s={},d=[{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Execute a shell command in scope of a project."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Any options for the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," command should be listed before the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," keyword.\nOptions listed after the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," keyword are passed to the executed command."),(0,a.kt)("p",null,"Good. pnpm will run recursively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Bad, pnpm will not run recursively but ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," will be executed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Added in: v2.9.0"),(0,a.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,a.kt)("p",null,"The name of the current package is available through the environment variable\n",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,a.kt)("h4",{id:"examples-1"},"Examples"),(0,a.kt)("p",null,"Prune ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"View package information for all packages. This should be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Added in: v5.1.0"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes over many packages, for instance, a\nlengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Added in: v6.31.0"),(0,a.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pnpm/ru/6.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);