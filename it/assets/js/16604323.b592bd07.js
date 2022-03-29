"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[802],{3482:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(5170);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=n(2182),r=n(9028),o=(n(5170),n(3482)),a=["components"],l={id:"recursive",title:"pnpm -r, --recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"version-6.x/cli/recursive",title:"pnpm -r, --recursive",description:"Esegue un comando pnpm in modo ricorsivo su tutte le sottocartelle del pacchetto o su ogni spazio di lavoro disponibile. Attualmente, solo i seguenti comandi possono essere usati ricorsivamente: add, exec, install, list, outdated, publish, build, remove, run, test, unlink, update, why",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/it/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"recursive",title:"pnpm -r, --recursive"},sidebar:"version-6.x/docs",previous:{title:"pnpm pack",permalink:"/it/cli/pack"},next:{title:"pnpm server",permalink:"/it/cli/server"}},c={},u=[{value:"Opzioni",id:"opzioni",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Esegue un comando pnpm in modo ricorsivo su tutte le sottocartelle del pacchetto o su ogni spazio di lavoro disponibile. Attualmente, solo i seguenti comandi possono essere usati ricorsivamente: ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"why")),(0,o.kt)("p",null,"Alias: ",(0,o.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"recursive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,o.kt)("p",null,"Esempio di utilizzo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r publish\n")),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,o.kt)("p",null,"Collega i pacchetti disponibili localmente negli spazi di lavoro di un monorepo in ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," invece di scaricarli nuovamente dal registro. Questo emula la funzionalit\xe0 simile a ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,o.kt)("p",null,"Quando \xe8 impostato su deep, i pacchetti locali possono anche essere collegati alle dipendenze secondarie."),(0,o.kt)("p",null,"Tieni presente che si consiglia invece di utilizzare ",(0,o.kt)("a",{parentName:"p",href:"/it/workspaces#link-workspace-packages"},"npmrc")," per questa impostazione, di imporre lo stesso comportamento in tutti gli ambienti. Questa opzione esiste esclusivamente in modo che tu possa sovrascriverla se necessario."),(0,o.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"4")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Numero"))),(0,o.kt)("p",null,"Imposta il numero massimo di attivit\xe0 da eseguire contemporaneamente. Per la simultaneit\xe0 illimitata usa ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Dalla versione 6.10.0 \xe8 possibile impostare ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace-concurrency")," come ",(0,o.kt)("inlineCode",{parentName:"p"},"<= 0")," e verr\xe0 utilizzato la quantit\xe0 di core dell'host come: ",(0,o.kt)("inlineCode",{parentName:"p"},"max(1, (numero di core) - abs(workspace-concurrency))"))),(0,o.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Se true, si interrompe quando un'attivit\xe0 genera un errore."),(0,o.kt)("p",null,"Questa configurazione non influisce sul codice di uscita. Anche se viene utilizzato ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-bail"),", tutte le attivit\xe0 finiranno ma se una qualsiasi delle attivit\xe0 fallisce, il comando uscir\xe0 con un codice diverso da zero."),(0,o.kt)("p",null,"Esempio (esegui test in ogni pacchetto, continua se i test falliscono in uno di essi):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,o.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.14.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"Booleano"))),(0,o.kt)("p",null,"Quando ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", i pacchetti vengono ordinati topologicamente (dipendenze prima dei dipendenti). Passa ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-sort")," per disabilitare."),(0,o.kt)("p",null,"Esempio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,o.kt)("h3",{id:"--reverse"},"--reverse"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.17.1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"booleano"))),(0,o.kt)("p",null,"Quando ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", l'ordine dei pacchetti viene invertito."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,o.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);