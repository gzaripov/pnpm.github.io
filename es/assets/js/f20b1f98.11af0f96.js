"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8942],{3482:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(5170);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=t(2182),l=t(9028),o=(t(5170),t(3482)),a=["components"],p={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Ejecuta un comando de shell en el \xe1mbito de un proyecto.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/es/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/es/next/cli/test"},next:{title:"pnpm dlx",permalink:"/es/next/cli/dlx"}},s={},d=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Opciones",id:"opciones",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Examples",id:"examples",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:d};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ejecuta un comando de shell en el \xe1mbito de un proyecto."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("p",null,"Si tienes Jest como dependencia de tu proyecto, no es necesario instalar Jest globalmente, simplemente ejec\xfatalo con ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,o.kt)("p",null,"El argumento ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," es opcional cuando el comando a ejecutar no est\xe1 en conflicto con un comando incorporado de pnpm, as\xed que tambi\xe9n puedes ejecutar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("p",null,"Any options for the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," command should be listed before the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," keyword. Options listed after the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," keyword are passed to the executed command."),(0,o.kt)("p",null,"Good. pnpm will run recursively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,o.kt)("p",null,"Bad, pnpm will not run recursively but ",(0,o.kt)("inlineCode",{parentName:"p"},"jest")," will be executed with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-r")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Ejecuta un comando de shell en cada proyecto del workspace."),(0,o.kt)("p",null,"The name of the current package is available through the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Prune ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,o.kt)("p",null,"View package information for all packages. This should be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,o.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,o.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,o.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);