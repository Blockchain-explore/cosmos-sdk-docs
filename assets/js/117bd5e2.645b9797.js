"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[15429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return n?o.createElement(g,r(r({ref:t},m),{},{components:n})):o.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},r="Modules depinject-ready",l={unversionedId:"build/building-modules/depinject",id:"build/building-modules/depinject",title:"Modules depinject-ready",description:"* Depinject Documentation",source:"@site/docs/build/building-modules/15-depinject.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/depinject",permalink:"/main/build/building-modules/depinject",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Module Simulation",permalink:"/main/build/building-modules/simulator"},next:{title:"Testing",permalink:"/main/build/building-modules/testing"}},p={},d=[{value:"Module Configuration",id:"module-configuration",level:2},{value:"Dependency Definition",id:"dependency-definition",level:2},{value:"Integrate in an application",id:"integrate-in-an-application",level:2}],m={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules-depinject-ready"},"Modules depinject-ready"),(0,a.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/build/packages/depinject"},"Depinject Documentation")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/main/build/packages/depinject"},(0,a.kt)("inlineCode",{parentName:"a"},"depinject"))," is used to wire any module in ",(0,a.kt)("inlineCode",{parentName:"p"},"app.go"),".\nAll core modules are already configured to support dependency injection."),(0,a.kt)("p",null,"To work with ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject")," a module must define its configuration and requirements so that ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject")," can provide the right dependencies."),(0,a.kt)("p",null,"In brief, as a module developer, the following steps are required:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define the module configuration using Protobuf"),(0,a.kt)("li",{parentName:"ol"},"Define the module dependencies in ",(0,a.kt)("inlineCode",{parentName:"li"},"x/{moduleName}/module.go"))),(0,a.kt)("p",null,"A chain developer can then use the module by following these two steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the module in ",(0,a.kt)("inlineCode",{parentName:"li"},"app_config.go")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"app.yaml")),(0,a.kt)("li",{parentName:"ol"},"Inject the module in ",(0,a.kt)("inlineCode",{parentName:"li"},"app.go"))),(0,a.kt)("h2",{id:"module-configuration"},"Module Configuration"),(0,a.kt)("p",null,"The module available configuration is defined in a Protobuf file, located at ",(0,a.kt)("inlineCode",{parentName:"p"},"{moduleName}/module/v1/module.proto"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/proto/cosmos/group/module/v1/module.proto\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"go_import")," must point to the Go package of the custom module.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Message fields define the module configuration.\nThat configuration can be set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app_config.go")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"app.yaml")," file for a chain developer to configure the module.",(0,a.kt)("br",{parentName:"p"}),"\n","Taking ",(0,a.kt)("inlineCode",{parentName:"p"},"group")," as example, a chain developer is able to decide, thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"uint64 max_metadata_len"),", what the maximum metadata length allowed for a group proposal is."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/simapp/app_config.go#L228-L234\n")))),(0,a.kt)("p",null,"That message is generated using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/scripts/protocgen-pulsar.sh"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar"))," (by running ",(0,a.kt)("inlineCode",{parentName:"p"},"make proto-gen"),").\nIn the case of the ",(0,a.kt)("inlineCode",{parentName:"p"},"group")," module, this file is generated here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/api/cosmos/group/module/v1/module.pulsar.go"},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/api/cosmos/group/module/v1/module.pulsar.go"),"."),(0,a.kt)("p",null,"The part that is relevant for the module configuration is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/api/cosmos/group/module/v1/module.pulsar.go#L515-L527\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Pulsar is optional. The official ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated"},(0,a.kt)("inlineCode",{parentName:"a"},"protoc-gen-go"))," can be used as well.")),(0,a.kt)("h2",{id:"dependency-definition"},"Dependency Definition"),(0,a.kt)("p",null,"Once the configuration proto is defined, the module's ",(0,a.kt)("inlineCode",{parentName:"p"},"module.go")," must define what dependencies are required by the module.\nThe boilerplate is similar for all modules."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"All methods, structs and their fields must be public for ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the module configuration generated package:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/group/module/module.go#L12-L14\n")),(0,a.kt)("p",{parentName:"li"},"Define an ",(0,a.kt)("inlineCode",{parentName:"p"},"init()")," function for defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," of the module configuration:",(0,a.kt)("br",{parentName:"p"}),"\n","This registers the module configuration message and the wiring of the module."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/group/module/module.go#L194-L199\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that the module implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"appmodule.AppModule")," interface:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/group/module/module.go#L58-L64\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define a struct that inherits ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject.In")," and define the module inputs (i.e. module dependencies):"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"depinject")," provides the right dependencies to the module.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"depinject")," also checks that all dependencies are provided."),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For making a dependency optional, add the ",(0,a.kt)("inlineCode",{parentName:"p"},'optional:"true"')," struct tag.  ")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/group/module/module.go#L201-L211\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the module outputs with a public struct that inherits ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject.Out"),":\nThe module outputs are the dependencies that the module provides to other modules. It is usually the module itself and its keeper."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/group/module/module.go#L213-L218\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a function named ",(0,a.kt)("inlineCode",{parentName:"p"},"ProvideModule")," (as called in 1.) and use the inputs for instantiating the module outputs."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/group/module/module.go#L220-L235\n")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProvideModule")," function should return an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/core/appmodule.AppModule")," which implements\none or more app module extension interfaces for initializing the module."),(0,a.kt)("p",null,"Following is the complete app wiring configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"group"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/group/module/module.go#L194-L235\n")),(0,a.kt)("p",null,"The module is now ready to be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject")," by a chain developer."),(0,a.kt)("h2",{id:"integrate-in-an-application"},"Integrate in an application"),(0,a.kt)("p",null,"The App Wiring is done in ",(0,a.kt)("inlineCode",{parentName:"p"},"app_config.go")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"app.yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"app_v2.go")," and is explained in detail in the ",(0,a.kt)("a",{parentName:"p",href:"/main/build/building-apps/app-go-v2"},"overview of ",(0,a.kt)("inlineCode",{parentName:"a"},"app_v2.go")),"."))}u.isMDXComponent=!0}}]);