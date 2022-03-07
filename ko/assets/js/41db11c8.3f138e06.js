"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7488],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5340:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,assets:()=>c,toc:()=>u,default:()=>d});var r=n(7813),l=n(7044),a=(n(9496),n(9613)),i=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-5.x/cli/run",title:"pnpm run",description:"\ubcc4\uce6d: run-script",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-5.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ko/5.x/cli/run",editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"5.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-5.x/docs",previous:{title:"pnpm why",permalink:"/ko/5.x/cli/why"},next:{title:"pnpm test",permalink:"/ko/5.x/cli/test"}},c={},u=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc0c1\uc138 \uc815\ubcf4",id:"\uc0c1\uc138-\uc815\ubcf4",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ubcc4\uce6d: ",(0,a.kt)("inlineCode",{parentName:"p"},"run-script")),(0,a.kt)("p",null,"\ud328\ud0a4\uc9c0\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc5d0 \uc815\uc758\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 \uad6c\uc131\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,a.kt)("p",null,"\uc774\uc81c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! \uac04\ub2e8\ud558\uc9c0\uc694? \ud0a4 \uc785\ub825\uacfc \uc2dc\uac04\uc744 \uc808\uc57d\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud574 \uc8fc\ubaa9\ud574\uc57c \ud560 \ub610 \ub2e4\ub978 \uc0ac\ud56d\uc740 \ubaa8\ub4e0 \uc2a4\ud06c\ub9bd\ud2b8\uac00 pnpm \uba85\ub839\uc73c\ub85c \uc568\ub9ac\uc5b4\uc2f1\ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uad81\uadf9\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \uc758 \ucd95\uc57d\ud615\uc785\ub2c8\ub2e4 (\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 pnpm \uba85\ub839\uacfc \ub3d9\uc77c\ud55c \uc774\ub984\uc744 \uacf5\uc720\ud558\uc9c0 \uc54a\ub294 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub9cc \ud574\ub2f9\ud568)."),(0,a.kt)("h2",{id:"\uc0c1\uc138-\uc815\ubcf4"},"\uc0c1\uc138 \uc815\ubcf4"),(0,a.kt)("p",null,"\uc178\uc758 \uae30\uc874 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ub354\ud558\uc5ec, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," \uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"\uc5d0 \uc81c\uacf5\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," \uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc989, \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ud55c \uc77c\ubc18 \uba85\ub839\uc5b4\ucc98\ub7fc \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," \uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 \uc2a4\ud06c\ub9bd\ud2b8 \ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," \uac00 \uc178\uc5d0 \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0, v3.5\ubd80\ud130 ",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \ub3c4 \uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ucd94\uac00\ub418\uc5c8\uc73c\ubbc0\ub85c, \ub3c4\uad6c\uac00 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \ub8e8\ud2b8\uc5d0 \uc124\uce58\ub418\uc5c8\ub2e4\uba74 \uc5b4\ub5a4 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"\uc5d0\uc11c\ub3c4 \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("h3",{id:"script-shell"},"script-shell"),(0,a.kt)("p",null,"Added in: v5.10.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"path"))),(0,a.kt)("p",null,"The shell to use for scripts run with the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,a.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,a.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,a.kt)("p",null,"Added in: v5.8.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,a.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,a.kt)("p",null,"But if the ",(0,a.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,a.kt)("h3",{id:"--if-present"},"--if-present"),(0,a.kt)("p",null,"Added in: v4.5.0"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"\ubc84\uc804 5.1.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--stream"},"--stream"),(0,a.kt)("p",null,"\ubc84\uc804 5.1.0\uc5d0\uc11c \ucd94\uac00\ub428"),(0,a.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ko/5.x/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}d.isMDXComponent=!0}}]);