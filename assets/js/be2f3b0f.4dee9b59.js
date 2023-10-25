"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[65504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Module Interfaces",l={unversionedId:"build/building-modules/module-interfaces",id:"build/building-modules/module-interfaces",title:"Module Interfaces",description:"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.",source:"@site/docs/build/building-modules/09-module-interfaces.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/module-interfaces",permalink:"/main/build/building-modules/module-interfaces",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Module Genesis",permalink:"/main/build/building-modules/genesis"},next:{title:"Recommended Folder Structure",permalink:"/main/build/building-modules/structure"}},s={},d=[{value:"CLI",id:"cli",level:2},{value:"Transaction Commands",id:"transaction-commands",level:3},{value:"Query Commands",id:"query-commands",level:3},{value:"gRPC",id:"grpc",level:2},{value:"gRPC-gateway REST",id:"grpc-gateway-rest",level:2}],m={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-interfaces"},"Module Interfaces"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.")),(0,r.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/build/building-modules/intro"},"Building Modules Intro")))),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,"One of the main interfaces for an application is the ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/cli"},"command-line interface"),". This entrypoint adds commands from the application's modules enabling end-users to create ",(0,r.kt)("a",{parentName:"p",href:"/main/build/building-modules/messages-and-queries#messages"},(0,r.kt)("strong",{parentName:"a"},"messages"))," wrapped in transactions and ",(0,r.kt)("a",{parentName:"p",href:"/main/build/building-modules/messages-and-queries#queries"},(0,r.kt)("strong",{parentName:"a"},"queries")),". The CLI files are typically found in the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/cli")," folder."),(0,r.kt)("h3",{id:"transaction-commands"},"Transaction Commands"),(0,r.kt)("p",null,"In order to create messages that trigger state changes, end-users must create ",(0,r.kt)("a",{parentName:"p",href:"/main/learn/advanced/transactions"},"transactions")," that wrap and deliver the messages. A transaction command creates a transaction that includes one or more messages."),(0,r.kt)("p",null,"Transaction commands typically have their own ",(0,r.kt)("inlineCode",{parentName:"p"},"tx.go")," file that lives within the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"./client/cli")," folder. The commands are specified in getter functions and the name of the function should include the name of the command."),(0,r.kt)("p",null,"Here is an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/bank")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/client/cli/tx.go#L37-L76\n")),(0,r.kt)("p",null,"In the example, ",(0,r.kt)("inlineCode",{parentName:"p"},"NewSendTxCmd()")," creates and returns the transaction command for a transaction that wraps and delivers ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgSend"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgSend")," is the message used to send tokens from one account to another."),(0,r.kt)("p",null,"In general, the getter function does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Constructs the command:")," Read the ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/spf13/cobra"},"Cobra Documentation")," for more detailed information on how to create commands.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use:")," Specifies the format of the user input required to invoke the command. In the example above, ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," is the name of the transaction command and ",(0,r.kt)("inlineCode",{parentName:"li"},"[from_key_or_address]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[to_address]"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"[amount]")," are the arguments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Args:")," The number of arguments the user provides. In this case, there are exactly three: ",(0,r.kt)("inlineCode",{parentName:"li"},"[from_key_or_address]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[to_address]"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"[amount]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Short and Long:")," Descriptions for the command. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Short")," description is expected. A ",(0,r.kt)("inlineCode",{parentName:"li"},"Long")," description can be used to provide additional information that is displayed when a user adds the ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," flag."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RunE:")," Defines a function that can return an error. This is the function that is called when the command is executed. This function encapsulates all of the logic to create a new transaction.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The function typically starts by getting the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx"),", which can be done with ",(0,r.kt)("inlineCode",{parentName:"li"},"client.GetClientTxContext(cmd)"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx")," contains information relevant to transaction handling, including information about the user. In this example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx")," is used to retrieve the address of the sender by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx.GetFromAddress()"),"."),(0,r.kt)("li",{parentName:"ul"},"If applicable, the command's arguments are parsed. In this example, the arguments ",(0,r.kt)("inlineCode",{parentName:"li"},"[to_address]")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"[amount]")," are both parsed."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/main/build/building-modules/messages-and-queries"},"message")," is created using the parsed arguments and information from the ",(0,r.kt)("inlineCode",{parentName:"li"},"clientCtx"),". The constructor function of the message type is called directly. In this case, ",(0,r.kt)("inlineCode",{parentName:"li"},"types.NewMsgSend(fromAddr, toAddr, amount)"),". Its good practice to call, if possible, the necessary ",(0,r.kt)("a",{parentName:"li",href:"/main/build/building-modules/msg-services#Validation"},"message validation methods")," before broadcasting the message."),(0,r.kt)("li",{parentName:"ul"},"Depending on what the user wants, the transaction is either generated offline or signed and broadcasted to the preconfigured node using ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.GenerateOrBroadcastTxCLI(clientCtx, flags, msg)"),"."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adds transaction flags:")," All transaction commands must add a set of transaction flags. The transaction flags are used to collect additional information from the user (e.g. the amount of fees the user is willing to pay). The transaction flags are added to the constructed command using ",(0,r.kt)("inlineCode",{parentName:"li"},"AddTxFlagsToCmd(cmd)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns the command:")," Finally, the transaction command is returned.")),(0,r.kt)("p",null,"Each module can implement ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTxCmd()"),", which aggregates all of the transaction commands of the module. Here is an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/bank")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/client/cli/tx.go#L20-L35\n")),(0,r.kt)("p",null,"Each module then can also implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"GetTxCmd()")," method that simply returns ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTxCmd()"),". This allows the root command to easily aggregate all of the transaction commands for each module. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/module.go#L84-L86\n")),(0,r.kt)("h3",{id:"query-commands"},"Query Commands"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is being rewritten. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/autocli"},"AutoCLI")," while this section is being updated.")),(0,r.kt)("h2",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," is a Remote Procedure Call (RPC) framework. RPC is the preferred way for external clients like wallets and exchanges to interact with a blockchain."),(0,r.kt)("p",null,"In addition to providing an ABCI query pathway, the Cosmos SDK provides a gRPC proxy server that routes gRPC query requests to ABCI query requests."),(0,r.kt)("p",null,"In order to do that, modules must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux)")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"AppModuleBasic")," to wire the client gRPC requests to the correct handler inside the module."),(0,r.kt)("p",null,"Here's an example from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/auth/module.go#L71-L76\n")),(0,r.kt)("h2",{id:"grpc-gateway-rest"},"gRPC-gateway REST"),(0,r.kt)("p",null,"Applications need to support web services that use HTTP requests (e.g. a web wallet like ",(0,r.kt)("a",{parentName:"p",href:"https://keplr.app"},"Keplr"),"). ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/grpc-ecosystem/grpc-gateway"},"grpc-gateway")," translates REST calls into gRPC calls, which might be useful for clients that do not use gRPC."),(0,r.kt)("p",null,"Modules that want to expose REST queries should add ",(0,r.kt)("inlineCode",{parentName:"p"},"google.api.http")," annotations to their ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," methods, such as in the example below from the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/auth")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/proto/cosmos/auth/v1beta1/query.proto#L14-L89\n")),(0,r.kt)("p",null,"gRPC gateway is started in-process along with the application and CometBFT. It can be enabled or disabled by setting gRPC Configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," in ",(0,r.kt)("a",{parentName:"p",href:"../run-node/01-run-node.md#configuring-the-node-using-apptoml-and-configtoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml")),"."),(0,r.kt)("p",null,"The Cosmos SDK provides a command for generating ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," documentation (",(0,r.kt)("inlineCode",{parentName:"p"},"protoc-gen-swagger"),"). Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger")," in ",(0,r.kt)("a",{parentName:"p",href:"../run-node/01-run-node.md#configuring-the-node-using-apptoml-and-configtoml"},(0,r.kt)("inlineCode",{parentName:"a"},"app.toml"))," defines if swagger documentation should be automatically registered."))}c.isMDXComponent=!0}}]);