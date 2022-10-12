"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3341],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=l,f=m["".concat(o,".").concat(g)]||m[g]||d[g]||r;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=n(2081),l=n(4604),r=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"Filtering"},o=void 0,c={unversionedId:"filtering",id:"version-7.x/filtering",title:"Filtering",description:"Filtering allows you to restrict commands to specific subsets of packages.",source:"@site/versioned_docs/version-7.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/pnpm.github.io/ru/filtering",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"filtering",title:"Filtering"},sidebar:"version-7.x/docs",previous:{title:"Configuring",permalink:"/pnpm.github.io/ru/configuring"},next:{title:"Scripts",permalink:"/pnpm.github.io/ru/scripts"}},s={},d=[{value:"Matching",id:"matching",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluding",id:"excluding",level:2},{value:"Multiplicity",id:"multiplicity",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:d};function g(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Filtering allows you to restrict commands to specific subsets of packages."),(0,r.kt)("p",null,"pnpm supports a rich selector syntax for picking packages by name or by\nrelation."),(0,r.kt)("p",null,"Selectors may be specified via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"-F"),") flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,r.kt)("h2",{id:"matching"},"Matching"),(0,r.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,r.kt)("p",null,"To select an exact package, just specify its name (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") or use a\npattern to select a set of packages (",(0,r.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,r.kt)("p",null,"Specifying the scope of the package is optional, so ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter=core")," will pick ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," is not found.\nHowever, if the workspace has multiple packages with the same name (for instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/core"),"),\nthen filtering without scope will pick nothing."),(0,r.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,r.kt)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the\npackage name with an ellipsis: ",(0,r.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". For instance, the next\ncommand will run tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and all of its dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,r.kt)("p",null,"You may use a pattern to select a set of root packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,r.kt)("p",null,"To ONLY select the dependencies of a package (both direct and non-direct),\nsuffix the name with the aforementioned ellipsis preceded by a chevron. For\ninstance, the next command will run tests for all of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"'s\ndependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,r.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,r.kt)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix\nthe package name with an ellipsis: ",(0,r.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will\nrun the tests of ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,r.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,r.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the\npackage name with an ellipsis followed by a chevron. For instance, this will\nrun tests for all packages dependent on ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,r.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,r.kt)("p",null,"A glob pattern relative to the current working directory matching projects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,r.kt)("p",null,"Includes all projects that are under the specified directory."),(0,r.kt)("p",null,"It may be used with the ellipsis and chevron operators to select\ndependents/dependencies as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,r.kt)("p",null,"It may also be combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed\nprojects inside a directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,r.kt)("p",null,"Or you may select all packages from a directory with names matching the given\npattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,r.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,r.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be\nsuffixed or prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,r.kt)("p",null,"For example, the next command will run tests in all changed packages since\n",(0,r.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,r.kt)("h2",{id:"excluding"},"Excluding"),(0,r.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a\nleading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,r.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,r.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,r.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib"),"\ndirectory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,r.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,r.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,r.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,r.kt)("p",null,"Acts the same a ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects\nfrom the workspace."),(0,r.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests.\nIf they are, the dependent packages of such modified packages are not included."),(0,r.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next\ncommand will run tests in all changed packages, and if the changes are in the\nsource code of the package, tests will run in the dependent packages as well:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,r.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,r.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,r.kt)("p",null,"Usage example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}g.isMDXComponent=!0}}]);