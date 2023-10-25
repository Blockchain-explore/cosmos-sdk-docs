"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[17010],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[s]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:1},o="Depinject",p={unversionedId:"build/packages/depinject",id:"build/packages/depinject",title:"Depinject",description:"DISCLAIMER: This is a beta package. The SDK team is actively working on this feature and we are looking for feedback from the community. Please try it out and let us know what you think.",source:"@site/docs/build/packages/01-depinject.md",sourceDirName:"build/packages",slug:"/build/packages/depinject",permalink:"/main/build/packages/depinject",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Packages",permalink:"/main/build/packages/"},next:{title:"Collections",permalink:"/main/build/packages/collections"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Interface type resolution",id:"interface-type-resolution",level:3},{value:"<code>BindInterface</code> API",id:"bindinterface-api",level:4},{value:"Full example in real app",id:"full-example-in-real-app",level:3},{value:"Debugging",id:"debugging",level:2}],d={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"depinject"},"Depinject"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"DISCLAIMER"),": This is a ",(0,i.kt)("strong",{parentName:"p"},"beta")," package. The SDK team is actively working on this feature and we are looking for feedback from the community. Please try it out and let us know what you think.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," is a dependency injection (DI) framework for the Cosmos SDK, designed to streamline the process of building and configuring blockchain applications. It works in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"p"},"core/appconfig")," module to replace the majority of boilerplate code in ",(0,i.kt)("inlineCode",{parentName:"p"},"app.go")," with a configuration file in Go, YAML, or JSON format."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," is particularly useful for developing blockchain applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With multiple interdependent components, modules, or services. Helping manage their dependencies effectively."),(0,i.kt)("li",{parentName:"ul"},"That require decoupling of these components, making it easier to test, modify, or replace individual parts without affecting the entire system."),(0,i.kt)("li",{parentName:"ul"},"That are wanting to simplify the setup and initialisation of modules and their dependencies by reducing boilerplate code and automating dependency management.")),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject"),", developers can achieve:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cleaner and more organised code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Improved modularity and maintainability.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A more maintainable and modular structure for their blockchain applications, ultimately enhancing development velocity and code quality.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/depinject"},"Go Doc")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," framework, based on dependency injection concepts, streamlines the management of dependencies within your blockchain application using its Configuration API. This API offers a set of functions and methods to create easy to use configurations, making it simple to define, modify, and access dependencies and their relationships."),(0,i.kt)("p",null,"A core component of the ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/depinject#Config"},"Configuration API")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Provide")," function, which allows you to register provider functions that supply dependencies. Inspired by constructor injection, these provider functions form the basis of the dependency tree, enabling the management and resolution of dependencies in a structured and maintainable manner. Additionally, ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," supports interface types as inputs to provider functions, offering flexibility and decoupling between components, similar to interface injection concepts."),(0,i.kt)("p",null,"By leveraging ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," and its Configuration API, you can efficiently handle dependencies in your blockchain application, ensuring a clean, modular, and well-organised codebase."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "cosmossdk.io/depinject"\n)\n\ntype AnotherInt int\n\nfunc GetInt() int               { return 1 }\nfunc GetAnotherInt() AnotherInt { return 2 }\n\nfunc main() {\n    var (\n        x int\n        y AnotherInt\n    )\n\n    fmt.Printf("Before (%v, %v)\\n", x, y)\n    depinject.Inject(\n        depinject.Provide(\n            GetInt,\n            GetAnotherInt,\n        ),\n        &x,\n        &y,\n    )\n    fmt.Printf("After (%v, %v)\\n", x, y)\n}\n')),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Provide")," registers two provider functions that return ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AnotherInt")," values. The ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Inject")," function is then used to inject these values into the variables ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,i.kt)("p",null,"Provider functions serve as the basis for the dependency tree. They are analysed to identify their inputs as dependencies and their outputs as dependents. These dependents can either be used by another provider function or be stored outside the DI container (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"&x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"&y")," in the example above). Provider functions must be exported."),(0,i.kt)("h3",{id:"interface-type-resolution"},"Interface type resolution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," supports the use of interface types as inputs to provider functions, which helps decouple dependencies between modules. This approach is particularly useful for managing complex systems with multiple modules, such as the Cosmos SDK, where dependencies need to be flexible and maintainable."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"x/bank")," expects an ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/cosmos/cosmos-sdk/x/bank/types#AccountKeeper"},"AccountKeeper")," interface as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/module.go#L208-L260"},"input to ProvideModule"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"SimApp")," uses the implementation in ",(0,i.kt)("inlineCode",{parentName:"p"},"x/auth"),", but the modular design allows for easy changes to the implementation if needed."),(0,i.kt)("p",null,"Consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"package duck\n\ntype Duck interface {\n    quack()\n}\n\ntype AlsoDuck interface {\n    quack()\n}\n\ntype Mallard struct{}\ntype Canvasback struct{}\n\nfunc (duck Mallard) quack()    {}\nfunc (duck Canvasback) quack() {}\n\ntype Pond struct {\n    Duck AlsoDuck\n}\n")),(0,i.kt)("p",null,"And the following provider functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func GetMallard() duck.Mallard {\n    return Mallard{}\n}\n\nfunc GetPond(duck Duck) Pond {\n    return Pond{Duck: duck}\n}\n\nfunc GetCanvasback() Canvasback {\n    return Canvasback{}\n}\n")),(0,i.kt)("p",null,"In this example, there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"Pond")," struct that has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Duck")," field of type ",(0,i.kt)("inlineCode",{parentName:"p"},"AlsoDuck"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," framework can automatically resolve the appropriate implementation when there's only one available, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var pond Pond\n\ndepinject.Inject(\n  depinject.Provide(\n        GetMallard,\n        GetPond,\n    ),\n   &pond)\n")),(0,i.kt)("p",null,"This code snippet results in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Duck")," field of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pond")," being implicitly bound to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mallard")," implementation because it's the only implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Duck")," interface in the container."),(0,i.kt)("p",null,"However, if there are multiple implementations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Duck")," interface, as in the following example, you'll encounter an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var pond Pond\n\ndepinject.Inject(\n    depinject.Provide(\n        GetMallard,\n        GetCanvasback,\n        GetPond,\n    ),\n    &pond)\n")),(0,i.kt)("p",null,"A specific binding preference for ",(0,i.kt)("inlineCode",{parentName:"p"},"Duck")," is required."),(0,i.kt)("h4",{id:"bindinterface-api"},(0,i.kt)("inlineCode",{parentName:"h4"},"BindInterface")," API"),(0,i.kt)("p",null,"In the above situation registering a binding for a given interface binding may look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'depinject.Inject(\n    depinject.Configs(\n        depinject.BindInterface(\n            "duck/duck.Duck",\n            "duck/duck.Mallard",\n        ),\n        depinject.Provide(\n            GetMallard,\n            GetCanvasback,\n            GetPond,\n        ),\n    ),\n    &pond)\n')),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject")," has enough information to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"Mallard")," as an input to ",(0,i.kt)("inlineCode",{parentName:"p"},"APond"),". "),(0,i.kt)("h3",{id:"full-example-in-real-app"},"Full example in real app"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"depinject.Inject"),", the injected types must be pointers.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/simapp/app_v2.go#L219-L244\n")),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"Issues with resolving dependencies in the container can be done with logs and ",(0,i.kt)("a",{parentName:"p",href:"https://graphviz.org"},"Graphviz")," renderings of the container tree.\nBy default, whenever there is an error, logs will be printed to stderr and a rendering of the dependency graph in Graphviz DOT format will be saved to ",(0,i.kt)("inlineCode",{parentName:"p"},"debug_container.dot"),"."),(0,i.kt)("p",null,"Here is an example Graphviz rendering of a successful build of a dependency graph:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cosmos/cosmos-sdk/ff39d243d421442b400befcd959ec3ccd2525154/depinject/testdata/example.svg",alt:"Graphviz Example"})),(0,i.kt)("p",null,"Rectangles represent functions, ovals represent types, rounded rectangles represent modules and the single hexagon\nrepresents the function which called ",(0,i.kt)("inlineCode",{parentName:"p"},"Build"),". Black-colored shapes mark functions and types that were called/resolved\nwithout an error. Gray-colored nodes mark functions and types that could have been called/resolved in the container but\nwere left unused."),(0,i.kt)("p",null,"Here is an example Graphviz rendering of a dependency graph build which failed:\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cosmos/cosmos-sdk/ff39d243d421442b400befcd959ec3ccd2525154/depinject/testdata/example_error.svg",alt:"Graphviz Error Example"})),(0,i.kt)("p",null,"Graphviz DOT files can be converted into SVG's for viewing in a web browser using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dot")," command-line tool, ex:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"dot -Tsvg debug_container.dot > debug_container.svg\n")),(0,i.kt)("p",null,"Many other tools including some IDEs support working with DOT files."))}u.isMDXComponent=!0}}]);