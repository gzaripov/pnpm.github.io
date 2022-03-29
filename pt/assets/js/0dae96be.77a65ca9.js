"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8605],{3482:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5170);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(2182),o=n(9028),a=(n(5170),n(3482)),i=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"cli/audit",title:"pnpm audit",description:"Verifica problemas de seguran\xe7a conhecidos nos pacotes instalados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/pt/next/cli/audit",editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/pt/next/cli/install-test"},next:{title:"pnpm list",permalink:"/pt/next/cli/list"}},u={},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Verifica problemas de seguran\xe7a conhecidos nos pacotes instalados."),(0,a.kt)("p",null,"Se problemas de seguran\xe7a forem encontrados, tente atualizar suas depend\xeancias executando ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Se uma atualiza\xe7\xe3o simples n\xe3o corrigir todos os problemas, use ",(0,a.kt)("a",{parentName:"p",href:"/pt/next/package_json#pnpmoverrides"},"substitui\xe7\xf5es")," para for\xe7a vers\xf5es que n\xe3o s\xe3o vulner\xe1veis. Por exemplo, se ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," for vulner\xe1vel use essa substitui\xe7\xe3o para for\xe7ar ",(0,a.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Como alternativa use ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tipo: ",(0,a.kt)("strong",{parentName:"li"},"low"),", ",(0,a.kt)("strong",{parentName:"li"},"moderate"),", ",(0,a.kt)("strong",{parentName:"li"},"high"),", ",(0,a.kt)("strong",{parentName:"li"},"critical")),(0,a.kt)("li",{parentName:"ul"},"Padr\xe3o: ",(0,a.kt)("strong",{parentName:"li"},"low"))),(0,a.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,a.kt)("h3",{id:"--fix"},"--fix"),(0,a.kt)("p",null,"Adicione substitui\xe7\xf5es ao ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," para for\xe7a vers\xf5es n\xe3o vulner\xe1veis das depend\xeancias."),(0,a.kt)("h3",{id:"--json"},"--json"),(0,a.kt)("p",null,"Output audit report in JSON format."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Only audit dev dependencies."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Only audit production dependencies."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Don't audit ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,a.kt)("p",null,"Se o registro responder com um c\xf3digo de status diferente de 200, o processo ser\xe1 encerrado sem erros. Ent\xe3o o processo falhar\xe1 apenas se o registro responder com sucesso e com vulnerabilidades encontradas."))}m.isMDXComponent=!0}}]);