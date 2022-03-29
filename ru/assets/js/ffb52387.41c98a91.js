"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{3482:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(5170);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(2182),o=n(9028),i=(n(5170),n(3482)),a=["components"],l={id:"limitations",title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},p=void 0,s={unversionedId:"limitations",id:"version-6.x/limitations",title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",description:"1. npm-shrinkwrap.json \u0438 package-lock.json \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 pnpm, npm \u043c\u043e\u0436\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 name@version \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. npm's lockfile is designed to reflect the flat node_modules layout, however, as pnpm creates an isolated layout by default, it cannot respect npm's lockfile format. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 pnpm import, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f pnpm.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/ru/limitations",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},sidebar:"version-6.x/docs",previous:{title:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f\u044b",permalink:"/ru/logos"},next:{title:"Symlinked `node_modules` structure",permalink:"/ru/symlinked-node-modules-structure"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 pnpm, npm \u043c\u043e\u0436\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"name@version")," \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. npm's lockfile is designed to reflect the flat ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," layout, however, as pnpm creates an isolated layout by default, it cannot respect npm's lockfile format. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,i.kt)("a",{parentName:"li",href:"/ru/cli/import"},"pnpm import"),", \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f pnpm."),(0,i.kt)("li",{parentName:"ol"},"\u0411\u0438\u043d\u0441\u0442\u0430\u0431\u044b (\u0444\u0430\u0439\u043b\u044b \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") \u0432\u0441\u0435\u0433\u0434\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430/\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438, \u0430 \u043d\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 JS \u0444\u0430\u0439\u043b\u044b. (\u0411\u0438\u043d\u0441\u0442\u0430\u0431\u044b - \u044d\u0442\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u044b-\u043e\u0431\u0435\u0440\u0442\u043a\u0438 \u0432\u043e\u043a\u0440\u0443\u0433 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432, \u0446\u0435\u043b\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u0440\u0435\u0434\u044b \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0432\u044b\u0437\u043e\u0432\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443). \u0424\u0430\u0439\u043b\u044b \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u043c CLI \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0441\u0432\u043e\u0438\u0445 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0432 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules"),". \u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u0440\u0435\u0434\u043a\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439, \u0438 \u0435\u0441\u043b\u0438 \u0432\u044b \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 JS-\u0444\u0430\u0439\u043b\u043e\u043c, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0441\u0441\u044b\u043b\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043d\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,i.kt)("p",null,"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0438\u0434\u0435\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b? ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0438\u0435\u0441\u044c \u0438\u043c\u0438.")))}d.isMDXComponent=!0}}]);