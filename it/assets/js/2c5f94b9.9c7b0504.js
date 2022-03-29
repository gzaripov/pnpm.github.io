"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2996],{3482:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(5170);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(2182),r=n(9028),l=(n(5170),n(3482)),a=["components"],o={id:"run",title:"pnpm run"},p=void 0,s={unversionedId:"cli/run",id:"version-5.x/cli/run",title:"pnpm run",description:"Alias: run-script",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/it/5.x/cli/run",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-5.x/docs",previous:{title:"pnpm why",permalink:"/it/5.x/cli/why"},next:{title:"pnpm test",permalink:"/it/5.x/cli/test"}},u={},c=[{value:"Esempi",id:"esempi",level:2},{value:"Dettagli",id:"dettagli",level:2},{value:"Opzioni",id:"opzioni",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alias: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"Esegue uno script definito nel file manifesto del pacchetto."),(0,l.kt)("h2",{id:"esempi"},"Esempi"),(0,l.kt)("p",null,"Supponiamo che tu abbia uno script ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," configurato nel tuo ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", in questo modo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,l.kt)("p",null,"Ora puoi eseguire questo script usando ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Semplice, vero? Un'altra cosa da notare per coloro a cui piace risparmiare sequenze di tasti e tempo \xe8 che tutti gli script vengono resi alias come comandi pnpm, quindi alla fine ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \xe8 solo abbreviazione per ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (SOLO per gli script che non condividono lo stesso nome dei comandi pnpm gi\xe0 esistenti)."),(0,l.kt)("h2",{id:"dettagli"},"Dettagli"),(0,l.kt)("p",null,"Oltre alla preesistente ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," della shell, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," include ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," nel ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," fornito a ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),". Ci\xf2 significa che finch\xe9 hai installato un pacchetto, puoi usarlo in uno script come un normale comando. Ad esempio, se hai installato ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),", puoi scrivere uno script in questo modo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"E anche se ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," non \xe8 installato globalmente nella tua shell, verr\xe0 eseguito."),(0,l.kt)("p",null,"Per gli spazi di lavoro, a partire dalla v3.5, ",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," viene aggiunto anche al ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", quindi se uno strumento \xe8 installato nella radice dello spazio di lavoro, pu\xf2 essere chiamato negli ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," di qualsiasi pacchetto di spazio di lavoro."),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("p",null,"Aggiunto nella versione: v5.10.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Tipo: ",(0,l.kt)("strong",{parentName:"li"},"percorso"))),(0,l.kt)("p",null,"La shell da usare per gli script eseguiti con il comando ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,l.kt)("p",null,"Ad esempio, per forzare l'utilizzo di Git Bash su Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("p",null,"Aggiunto nella versione: v5.8.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Tipo: ",(0,l.kt)("strong",{parentName:"li"},"Booleano"))),(0,l.kt)("p",null,"Quando ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm utilizzer\xe0 un'implementazione JavaScript di ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"shell simili a bash")," per eseguire gli script."),(0,l.kt)("p",null,"Questa opzione semplifica lo scripting multipiattaforma. Ad esempio, per impostazione predefinita, lo script successivo avr\xe0 esito negativo sui sistemi non conformi a POSIX:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"Ma se l'opzione ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \xe8 impostata a ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", funzioner\xe0 su tutte le piattaforme."),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,'Questo esegue un comando arbitrario dall\'oggetto "script" di ogni pacchetto. Se un pacchetto non ha il comando, viene saltato. Se nessuno dei pacchetti ha il comando, il comando fallisce.'),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,"Aggiunto nella versione: v4.5.0"),(0,l.kt)("p",null,"Puoi usare il flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--if-present")," per evitare di uscire con un codice di uscita diverso da zero quando lo script non \xe8 definito. Questo consente di eseguire script potenzialmente indefiniti senza interrompere la catena di esecuzione."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Aggiunto nella versione: v5.1.0"),(0,l.kt)("p",null,"Ignora completamente la convaluta e l'ordinamento topologico, eseguendo un dato script immediatamente in tutti i pacchetti corrispondenti con output di streaming prefissato. Questo \xe8 il flag preferito per i processi a lungo termine su molti pacchetti, per esempio, un lungo processo di compilazione."),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"Aggiunto nella versione: v5.1.0"),(0,l.kt)("p",null,"Trasmetti immediatamente l'output dai processi figlio, con il prefisso della cartella del pacchetto di origine. Questo permette di interporre l'output di pacchetti diversi."),(0,l.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/5.x/filtering"},"Ulteriori informazioni sui filtri.")))}d.isMDXComponent=!0}}]);