"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3755],{3482:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(5170);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,v=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(v,i(i({ref:n},m),{},{components:t})):r.createElement(v,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=t(2182),a=t(9028),o=(t(5170),t(3482)),i=["components"],p={id:"continuous-integration",title:"Int\xe9gration Continue"},s=void 0,l={unversionedId:"continuous-integration",id:"version-5.x/continuous-integration",title:"Int\xe9gration Continue",description:"pnpm peut facilement \xeatre utilis\xe9 dans divers syst\xe8mes d'int\xe9gration continue.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-5.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/fr/5.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"5.x",frontMatter:{id:"continuous-integration",title:"Int\xe9gration Continue"},sidebar:"version-5.x/docs",previous:{title:"Using Changesets with pnpm",permalink:"/fr/5.x/using-changesets"},next:{title:"Only allow pnpm",permalink:"/fr/5.x/only-allow-pnpm"}},m={},c=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"Sail CI",id:"sail-ci",level:2},{value:"GitHub Actions",id:"github-actions",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm peut facilement \xeatre utilis\xe9 dans divers syst\xe8mes d'int\xe9gration continue."),(0,o.kt)("h2",{id:"travis"},"Travis"),(0,o.kt)("p",null,"Sur ",(0,o.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", vous pouvez utiliser pnpm pour installer vos d\xe9pendances en ajoutant ce qui suit \xe0 votre fichier ",(0,o.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,o.kt)("h2",{id:"semaphore"},"Semaphore"),(0,o.kt)("p",null,"Sur ",(0,o.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", vous pouvez utiliser pnpm pour installer et mettre en cache vos d\xe9pendances en ajoutant ceci \xe0 votre ",(0,o.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,o.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,o.kt)("p",null,"Sur ",(0,o.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", vous pouvez utiliser pnpm pour installer vos d\xe9pendances en ajoutant ce \xe0 votre ",(0,o.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm install\n")),(0,o.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,o.kt)("p",null,"Sur ","[Sail CI]",", vous pouvez utiliser pnpm pour installer vos d\xe9pendances en ajoutant ceci \xe0 votre fichier ",(0,o.kt)("inlineCode",{parentName:"p"},".sail.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,o.kt)("p",null,"Pour obtenir la version exacte de Node et la version de pnpm dont vous avez besoin, vous pouvez toujours faire votre propre image Docker et la publier sur ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."),(0,o.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,o.kt)("p",null,"Sur les actions GitHub, vous pouvez utiliser pnpm pour installer et mettre en cache vos d\xe9pendances comme ceci (fait partie de ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),") :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: Cache .pnpm-store\n      uses: actions/cache@v1\n      with:\n        path: ~/.pnpm-store\n        key: ${{ runner.os }}-node${{ matrix.node-version }}-${{ hashFiles('**/pnpm-lock.yaml') }}\n    - name: Install pnpm\n      run: curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n    - name: pnpm Build\n      run: pnpm install\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," you need to install pnpm with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/setup-node/issues/177"},"root permissions"),", eg:",(0,o.kt)("inlineCode",{parentName:"p"},"sudo npm install -g pnpm"),". Alternatively, if you specify the Node.js version to use, pnpm may be installed with no priviledged user."))))}d.isMDXComponent=!0}}]);