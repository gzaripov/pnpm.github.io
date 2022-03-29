"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3273],{3482:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(5170);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(v,s(s({ref:t},d),{},{components:n})):o.createElement(v,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=n(2182),r=n(9028),a=(n(5170),n(3482)),s=["components"],i={id:"motivation",title:"Motivation"},l=void 0,u={unversionedId:"motivation",id:"version-7.x/motivation",title:"Motivation",description:"\xc9conomiser de l'espace disque et booster la vitesse d'installation",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/fr/7.x/motivation",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"version-7.x/docs",next:{title:"Installation",permalink:"/fr/7.x/installation"}},d={},p=[{value:"\xc9conomiser de l&#39;espace disque et booster la vitesse d&#39;installation",id:"\xe9conomiser-de-lespace-disque-et-booster-la-vitesse-dinstallation",level:2},{value:"Cr\xe9ation d&#39;un dossier node_modules non plat",id:"cr\xe9ation-dun-dossier-node_modules-non-plat",level:2}],c={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\xe9conomiser-de-lespace-disque-et-booster-la-vitesse-dinstallation"},"\xc9conomiser de l'espace disque et booster la vitesse d'installation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/HemSays/status/1434921646083563525/photo/1"},(0,a.kt)("img",{src:n(3005).Z,width:"2500",height:"1406"}))),(0,a.kt)("p",null,"Lorsque vous utilisez npm ou Yarn, si vous avez 100 projets utilisant une d\xe9pendance, vous aurez 100 copies de cette d\xe9pendance enregistr\xe9es sur le disque. Avec pnpm, la d\xe9pendance sera stock\xe9e dans un stockage adressable au contenu, donc:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Si vous d\xe9pendez de diff\xe9rentes versions de la d\xe9pendance, seuls les fichiers qui diff\xe8rent sont ajout\xe9s au stockage. Par exemple, si elle a 100 fichiers, et qu'une nouvelle version a un changement dans un seul de ces fichiers, ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm update")," ajoutera seulement 1 nouveau fichier au stockage, au lieu de cloner la d\xe9pendance toute enti\xe8re juste pour un seul changement."),(0,a.kt)("li",{parentName:"ol"},"Tous les fichiers sont enregistr\xe9s en un seul endroit sur le disque. Lorsque des packages sont install\xe9s, leurs fichiers sont li\xe9s directement \xe0 partir de cet emplacement unique, ne consommant aucun espace disque suppl\xe9mentaire. Cela vous permet de partager les d\xe9pendances de m\xeame version entre les projets.")),(0,a.kt)("p",null,"En cons\xe9quence, vous \xe9conomisez beaucoup d'espace sur votre disque proportionnellement au nombre de projets et de d\xe9pendances, et vous avez des installations beaucoup plus rapides !"),(0,a.kt)("h2",{id:"cr\xe9ation-dun-dossier-node_modules-non-plat"},"Cr\xe9ation d'un dossier node_modules non plat"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/xiaokedada/status/1471691763102679041/photo/1"},(0,a.kt)("img",{src:n(7194).Z,width:"2920",height:"1392"}))),(0,a.kt)("p",null,"Lors de l'installation de d\xe9pendances avec npm ou Yarn Classic, tous les paquets sont remont\xe9s \xe0 la racine du dossier des modules. Par cons\xe9quent, le code source a acc\xe8s aux d\xe9pendances qui ne sont pas ajout\xe9es en tant que d\xe9pendances au projet."),(0,a.kt)("p",null,"Par d\xe9faut, pnpm utilise des liens symboliques pour n'ajouter que les d\xe9pendances directes du projet \xe0 la racine du dossier des modules. Si vous souhaitez avoir plus de d\xe9tails sur la structure unique de ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," que pnpm cr\xe9e et pourquoi elle fonctionne bien avec l'environnement de Node.js, lisez:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules n'est pas le seul moyen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/fr/7.x/symlinked-node-modules-structure"},"Structure node_modules en lien symbolique"))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Si votre outil ne fonctionne pas bien avec les liens symboliques, vous pouvez toujours utiliser pnpm et d\xe9finir le param\xe8tre ",(0,a.kt)("a",{parentName:"p",href:"npmrc#node-linker"},"node-linker")," sur ",(0,a.kt)("inlineCode",{parentName:"p"},"hoisted"),". Cela indiquera \xe0 pnpm de cr\xe9er un r\xe9pertoire node_modules similaire \xe0 ceux cr\xe9\xe9s par npm et Yarn Classic."))))}m.isMDXComponent=!0},3005:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg"},7194:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-modules-structure-8ab301ddaed3b7530858b233f5b3be57.jpg"}}]);