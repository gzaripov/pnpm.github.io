"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3903],{3482:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var i=n(5170);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),s=r,f=u["".concat(p,".").concat(s)]||u[s]||d[s]||a;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=n(2182),r=n(9028),a=(n(5170),n(3482)),o=["components"],l={id:"pnpm-cli",title:"CLI di pnpm"},p=void 0,c={unversionedId:"pnpm-cli",id:"version-5.x/pnpm-cli",title:"CLI di pnpm",description:"Differenze vs npm",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/it/5.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"pnpm-cli",title:"CLI di pnpm"},sidebar:"version-5.x/docs",previous:{title:"Installazione",permalink:"/it/5.x/installation"},next:{title:"CLI di pnpx",permalink:"/it/5.x/pnpx-cli"}},m={},d=[{value:"Differenze vs npm",id:"differenze-vs-npm",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Comandi",id:"comandi",level:2}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"differenze-vs-npm"},"Differenze vs npm"),(0,a.kt)("p",null,"A differenza di npm, pnpm convalida tutte le opzioni. Ad esempio, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," fallir\xe0 poich\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"--foo")," non \xe8 un'opzione valida per ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,a.kt)("p",null,"Tuttavia, alcune dipendenze possono utilizzare la variabile d'ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"npm_config_"),", che \xe8 popolata dalle opzioni CLI. In questo caso, hai le seguenti opzioni:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"impostare esplicitamente la variabile env: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,a.kt)("li",{parentName:"ol"},"forzare l'opzione sconosciuta con ",(0,a.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo=true"))),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,a.kt)("p",null,"Esegui come se pnpm fosse stato avviato in ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," invece che nella cartella di lavoro corrente."),(0,a.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,a.kt)("p",null,"Aggiunto nella versione: v5.6.0"),(0,a.kt)("p",null,"Esegui come se pnpm fosse stato avviato nella radice dello spazio di lavoro invece che nella cartella di lavoro corrente."),(0,a.kt)("h2",{id:"comandi"},"Comandi"),(0,a.kt)("p",null,"Per ulteriori informazioni, vedere la documentazione per i singoli comandi CLI. Ecco un elenco di utili comandi equivalenti di npm per iniziare:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"comando npm"),(0,a.kt)("th",{parentName:"tr",align:null},"equivalente di pnpm"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm install")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/it/5.x/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))))}s.isMDXComponent=!0}}]);