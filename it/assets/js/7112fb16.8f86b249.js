"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9759],{3482:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(5170);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=a,s=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?r.createElement(s,i(i({ref:e},m),{},{components:n})):r.createElement(s,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4898:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(2182),a=n(9028),l=(n(5170),n(3482)),i=["components"],o={id:"feature-comparison",title:"Confronto tra le funzionalit\xe0"},p=void 0,d={unversionedId:"feature-comparison",id:"feature-comparison",title:"Confronto tra le funzionalit\xe0",description:"| Funzionalit\xe0                        | pnpm                            | Yarn                            | npm                             |",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/feature-comparison.md",sourceDirName:".",slug:"/feature-comparison",permalink:"/it/next/feature-comparison",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"feature-comparison",title:"Confronto tra le funzionalit\xe0"},sidebar:"docs",previous:{title:"Lavorare con Git",permalink:"/it/next/git"},next:{title:"Codici di errore",permalink:"/it/next/errors"}},m={},u=[],c={toc:u};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Funzionalit\xe0"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,l.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,l.kt)("th",{parentName:"tr",align:null},"npm"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Supporto dell'area di lavoro"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node_modules")," isolata"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - L'impostazione predefinita"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"node_modules")," issata (hoisted)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - L'impostazione predefinita")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plug'n'Play"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - L'impostazione predefinita"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Zero installazioni"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Correzione delle dipendenze"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gestione delle versioni di Node.js"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ha un file di blocco"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"yarn.lock")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - ",(0,l.kt)("inlineCode",{parentName:"td"},"package-lock.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sostituisce il supporto"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Tramite risoluzioni"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Archivio indirizzabile al contenuto"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Esecuzione dinamica del pacchetto"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Tramite ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm dlx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Tramite ",(0,l.kt)("inlineCode",{parentName:"td"},"yarn dlx")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f - Tramite ",(0,l.kt)("inlineCode",{parentName:"td"},"npx"))))))}k.isMDXComponent=!0}}]);