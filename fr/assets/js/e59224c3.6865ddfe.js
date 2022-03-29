"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[593],{3482:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(5170);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(2182),r=n(9028),o=(n(5170),n(3482)),i=["components"],s={title:"Options de configuration des node_modules avec pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,p={permalink:"/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/fr",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Options de configuration des node_modules avec pnpm",description:"Il existe de nombreuses fa\xe7ons de cr\xe9er un dossier nodemodules. Votre objectif doit \xeatre de cr\xe9er le plus strict, mais si ce n'est pas possible, il y a aussi des options pour faire un nodemodules en vrac.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 octobre 2020",tags:[],readingTime:1.925,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Options de configuration des node_modules avec pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"The year 2021 for pnpm",permalink:"/fr/blog/2021/12/29/yearly-update"},nextItem:{title:"Flat node_modules n'est pas le seul moyen",permalink:"/fr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u={authorsImageUrls:[void 0]},c=[{value:"Configuration par d\xe9faut",id:"configuration-par-d\xe9faut",level:2},{value:"Plug&#39;n&#39;Play. La configuration la plus stricte",id:"plugnplay-la-configuration-la-plus-stricte",level:2},{value:"Un r\xe9pertoire de node_modules strict et traditionnel",id:"un-r\xe9pertoire-de-node_modules-strict-et-traditionnel",level:2},{value:"Le pire des cas - hisser \xe0 la racine",id:"le-pire-des-cas---hisser-\xe0-la-racine",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il existe de nombreuses fa\xe7ons de cr\xe9er un dossier node_modules. Votre objectif doit \xeatre de cr\xe9er le plus strict, mais si ce n'est pas possible, il y a aussi des options pour faire un node_modules en vrac."),(0,o.kt)("h2",{id:"configuration-par-d\xe9faut"},"Configuration par d\xe9faut"),(0,o.kt)("p",null,"Par d\xe9faut, pnpm v5 cr\xe9era un node_modules semi-strict. Semi-strict signifie que votre application ne pourra require que des packages ajout\xe9s en tant que d\xe9pendances au ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," (\xe0 quelques exceptions pr\xe8s). Cependant, vos d\xe9pendances pourront acc\xe9der \xe0 tous les packages."),(0,o.kt)("p",null,"La configuration par d\xe9faut ressemble \xe0 ceci:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"; Tous les packages sont hiss\xe9s vers node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; Tous les types sont hiss\xe9s \xe0 la racine afin de rendre TypeScript heureux\npublic-hoist-pattern[]=*types*\n\n; Tous les packages li\xe9s \xe0 ESLint sont \xe9galement hiss\xe9s \xe0 la racine\npublic-hoist-pattern[]=*eslint*\n")),(0,o.kt)("h2",{id:"plugnplay-la-configuration-la-plus-stricte"},"Plug'n'Play. La configuration la plus stricte"),(0,o.kt)("p",null,"pnpm prend en charge ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn's Plug'n'Play")," depuis la version 5.9. Avec PnP, votre application et les d\xe9pendances de votre application n'auront acc\xe8s qu'\xe0 leurs d\xe9pendances d\xe9clar\xe9es. C'est encore plus strict que de d\xe9finir ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist=false")," car \xe0 l'int\xe9rieur d'un monod\xe9p\xf4t, votre application ne pourra m\xeame pas acc\xe9der aux d\xe9pendances du projet racine."),(0,o.kt)("p",null,"Pour utiliser Plug'n'Play, d\xe9finissez ces param\xe8tres:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,o.kt)("h2",{id:"un-r\xe9pertoire-de-node_modules-strict-et-traditionnel"},"Un r\xe9pertoire de node_modules strict et traditionnel"),(0,o.kt)("p",null,"Si vous n'\xeates pas encore pr\xeat \xe0 utiliser PnP, vous pouvez toujours \xeatre strict et autoriser uniquement les packages \xe0 acc\xe9der \xe0 leurs propres d\xe9pendances en d\xe9finissant la configuration de hoist sur false:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,o.kt)("p",null,"Cependant, si certaines de vos d\xe9pendances tentent d'acc\xe9der \xe0 des packages qui ne figurent pas dans leurs d\xe9pendances, vous avez deux options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," et utilisez un ",(0,o.kt)("a",{parentName:"p",href:"/pnpmfile"},"crochet")," pour ajouter la d\xe9pendance manquante au manifeste du package.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ajoutez un pattern au param\xe8tre ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist-pattern"),". Par exemple, si le module non trouv\xe9 est ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-core"),", ajoutez le param\xe8tre suivant \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,o.kt)("h2",{id:"le-pire-des-cas---hisser-\xe0-la-racine"},"Le pire des cas - hisser \xe0 la racine"),(0,o.kt)("p",null,"Certains outils peuvent ne pas fonctionner m\xeame avec la configuration par d\xe9faut de pnpm, qui h\xe9berge tout \xe0 la racine du magasin virtuel et quelques packages \xe0 la racine. Dans ce cas, vous pouvez hisser tout ou un sous-ensemble de d\xe9pendances \xe0 la racine du r\xe9pertoire des modules."),(0,o.kt)("p",null,"Tout placer \xe0 la racine de node_modules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,o.kt)("p",null,"Ne hisser que les packages qui correspondent \xe0 un mod\xe8le:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}m.isMDXComponent=!0}}]);