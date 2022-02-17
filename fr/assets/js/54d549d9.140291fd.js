"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2289],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,f=u["".concat(o,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,p(p({ref:n},d),{},{components:t})):r.createElement(f,p({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4301:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>u});var r=t(9518),l=t(7344),a=(t(9496),t(9613)),p=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Ex\xe9cute une commande shell dans le cadre d'un projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/fr/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/fr/next/cli/test"},next:{title:"pnpm dlx",permalink:"/fr/next/cli/dlx"}},d=[{value:"Exemples",id:"exemples",children:[],level:2},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[{value:"Examples",id:"examples",children:[],level:4}],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ex\xe9cute une commande shell dans le cadre d'un projet."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," est ajout\xe9 au ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", donc ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permet d'ex\xe9cuter des commandes de d\xe9pendances."),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("p",null,"Si vous avez Jest en tant que d\xe9pendance de votre projet, il n'est pas n\xe9cessaire d'installer Jest globalement, ex\xe9cutez-le simplement avec ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"La partie ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," est en fait facultative lorsque la commande n'est pas en conflit avec une commande pnpm int\xe9gr\xe9e, vous pouvez donc \xe9galement ex\xe9cuter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Any options for the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," command should be listed before the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," keyword. Options listed after the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," keyword are passed to the executed command."),(0,a.kt)("p",null,"Good. pnpm will run recursively:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Bad, pnpm will not run recursively but ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," will be executed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Added in: v2.9.0"),(0,a.kt)("p",null,"Ex\xe9cutez la commande shell dans chaque projet de l'espace de travail."),(0,a.kt)("p",null,"The name of the current package is available through the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Prune ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"View package information for all packages. This should be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Added in: v5.1.0"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Added in: v6.31.0"),(0,a.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/next/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);