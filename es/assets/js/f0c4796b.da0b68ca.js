"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9522],{3482:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(5170);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2719:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var t=n(2182),o=n(9028),a=(n(5170),n(3482)),i=["components"],p={id:"errors",title:"Error Codes"},s=void 0,l={unversionedId:"errors",id:"errors",title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/es/next/errors",editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"docs",previous:{title:"Feature Comparison",permalink:"/es/next/feature-comparison"},next:{title:"Logotipos",permalink:"/es/next/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2}],d={toc:u};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,a.kt)("p",null,"Un directorio de m\xf3dulos est\xe1 presente y est\xe1 vinculado a un directorio de almacenamiento diferente."),(0,a.kt)("p",null,"Si cambi\xf3 el directorio de la tienda intencionalmente, ejecute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," y pnpm reinstalar\xe1 las dependencias usando el nuevo almacenamiento."),(0,a.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,a.kt)("p",null,"Un proyecto tiene una dependencia de espacio de trabajo que no existe en el espacio de trabajo."),(0,a.kt)("p",null,"Por ejemplo, el paquete ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," tiene ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," en las ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencias"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,a.kt)("p",null,"Sin embargo, solo hay ",(0,a.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," en el espacio de trabajo, por lo que ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallar\xe1."),(0,a.kt)("p",null,"Para corregir este error, todas las dependencias que usan el ",(0,a.kt)("a",{parentName:"p",href:"/es/next/workspaces#workspace-protocol-workspace"},"protocolo de espacio de trabajo")," deben actualizarse para usar versiones de paquetes que est\xe1n presentes en el espacio de trabajo. Esto puede hacerse manualmente o usando el comando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."))}m.isMDXComponent=!0}}]);