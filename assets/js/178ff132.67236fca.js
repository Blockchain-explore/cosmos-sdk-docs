"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[75378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),c=a,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return t?o.createElement(g,r(r({ref:n},p),{},{components:t})):o.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var m=2;m<i;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65870:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(87462),a=(t(67294),t(3905));const i={sidebar_position:1},r="AutoCLI",s={unversionedId:"learn/advanced/autocli",id:"version-0.50/learn/advanced/autocli",title:"AutoCLI",description:"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.",source:"@site/versioned_docs/version-0.50/learn/advanced/17-autocli.md",sourceDirName:"learn/advanced",slug:"/learn/advanced/autocli",permalink:"/v0.50/learn/advanced/autocli",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Configuration",permalink:"/v0.50/learn/advanced/config"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"Application Wiring",id:"application-wiring",level:2},{value:"Keyring",id:"keyring",level:3},{value:"Signing",id:"signing",level:2},{value:"Module Wiring &amp; Customization",id:"module-wiring--customization",level:2},{value:"Specifying Subcommands",id:"specifying-subcommands",level:3},{value:"Positional Arguments",id:"positional-arguments",level:3},{value:"Customising Flag Names",id:"customising-flag-names",level:3},{value:"Combining AutoCLI with Other Commands Within A Module",id:"combining-autocli-with-other-commands-within-a-module",level:3},{value:"Use AutoCLI for non module commands",id:"use-autocli-for-non-module-commands",level:3},{value:"Summary",id:"summary",level:2}],p={toc:m},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"autocli"},"AutoCLI"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.")),(0,a.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/cli"},"CLI")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," (also known as ",(0,a.kt)("inlineCode",{parentName:"p"},"client/v2"),") package is a ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/client/v2/autocli"},"Go library")," for generating CLI (command line interface) interfaces for Cosmos SDK-based applications. It provides a simple way to add CLI commands to your application by generating them automatically based on your gRPC service definitions. Autocli generates CLI commands and flags directly from your protobuf messages, including options, input parameters, and output parameters. This means that you can easily add a CLI interface to your application without having to manually create and manage commands."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," generates CLI commands and flags for each method defined in your gRPC service. By default, it generates commands for each gRPC services. The commands are named based on the name of the service method."),(0,a.kt)("p",null,"For example, given the following protobuf definition for a service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"service MyService {\n  rpc MyMethod(MyRequest) returns (MyResponse) {}\n}\n")),(0,a.kt)("p",null,"For instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," would generate a command named ",(0,a.kt)("inlineCode",{parentName:"p"},"my-method")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyMethod")," method. The command will have flags for each field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyRequest")," message."),(0,a.kt)("p",null,"It is possible to customize the generation of transactions and queries by defining options for each service."),(0,a.kt)("h2",{id:"application-wiring"},"Application Wiring"),(0,a.kt)("p",null,"Here are the steps to use AutoCLI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure your app's modules implements the ",(0,a.kt)("inlineCode",{parentName:"li"},"appmodule.AppModule")," interface."),(0,a.kt)("li",{parentName:"ol"},"(optional) Configure how behave ",(0,a.kt)("inlineCode",{parentName:"li"},"autocli")," command generation, by implementing the ",(0,a.kt)("inlineCode",{parentName:"li"},"func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions")," method on the module."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"autocli.AppOptions")," struct to specify the modules you defined. If you are using ",(0,a.kt)("inlineCode",{parentName:"li"},"depinject")," / app v2, it can automatically create an instance of ",(0,a.kt)("inlineCode",{parentName:"li"},"autocli.AppOptions")," based on your app's configuration."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"EnhanceRootCommand()")," method provided by ",(0,a.kt)("inlineCode",{parentName:"li"},"autocli")," to add the CLI commands for the specified modules to your root command.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"AutoCLI is additive only, meaning ",(0,a.kt)("em",{parentName:"p"},"enhancing")," the root command will only add subcommands that are not already registered. This means that you can use AutoCLI alongside other custom commands within your app.")),(0,a.kt)("p",null,"Here's an example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," in your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Define your app\'s modules\ntestModules := map[string]appmodule.AppModule{\n    "testModule": &TestModule{},\n}\n\n// Define the autocli AppOptions\nautoCliOpts := autocli.AppOptions{\n    Modules: testModules,\n}\n\n// Create the root command\nrootCmd := &cobra.Command{\n    Use: "app",\n}\n\nif err := appOptions.EnhanceRootCommand(rootCmd); err != nil {\n    return err\n}\n\n// Run the root command\nif err := rootCmd.Execute(); err != nil {\n    return err\n}\n')),(0,a.kt)("h3",{id:"keyring"},"Keyring"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," uses a keyring for key name resolving and signing transactions. Providing a keyring is optional, but if you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," generated commands to sign transactions, you must provide a keyring."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This provides a better UX as it allows to resolve key names directly from the keyring in all transactions and commands."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"<appd> q bank balances alice\n<appd> tx bank send alice bob 1000denom\n"))),(0,a.kt)("p",null,"The keyring to be provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"client/v2")," must match the ",(0,a.kt)("inlineCode",{parentName:"p"},"client/v2")," keyring interface.\nThe keyring should be provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"appOptions")," struct as follows, and can be gotten from the client context:"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The Cosmos SDK keyring and Hubl keyring both implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"client/v2/autocli/keyring")," interface, thanks to the following wrapper:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"keyring.NewAutoCLIKeyring(kb)\n"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"When using AutoCLI the keyring will only be created once and before any command flag parsing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Set the keyring in the appOptions\nappOptions.Keyring = keyring\n\nerr := autoCliOpts.EnhanceRootCommand(rootCmd)\n...\n")),(0,a.kt)("h2",{id:"signing"},"Signing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," supports signing transactions with the keyring.\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/9dd34510e27376005e7e7ff3628eab9dbc8ad6dc/docs/build/building-modules/05-protobuf-annotations.md#L9"},(0,a.kt)("inlineCode",{parentName:"a"},"cosmos.msg.v1.signer")," protobuf annotation")," defines the signer field of the message.\nThis field is automatically filled when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--from")," flag or defining the signer as a positional argument."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"AutoCLI currently supports only one signer per transaction.")),(0,a.kt)("h2",{id:"module-wiring--customization"},"Module Wiring & Customization"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoCLIOptions()")," method on your module allows to specify custom commands, sub-commands or flags for each service, as it was a ",(0,a.kt)("inlineCode",{parentName:"p"},"cobra.Command")," instance, within the ",(0,a.kt)("inlineCode",{parentName:"p"},"RpcCommandOptions")," struct. Defining such options will customize the behavior of the ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," command generation, which by default generates a command for each method in your gRPC service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'*autocliv1.RpcCommandOptions{\n  RpcMethod: "Params", // The name of the gRPC service\n  Use:       "params", // Command usage that is displayed in the help\n  Short:     "Query the parameters of the governance process", // Short description of the command\n  Long:      "Query the parameters of the governance process. Specify specific param types (voting|tallying|deposit) to filter results.", // Long description of the command\n  PositionalArgs: []*autocliv1.PositionalArgDescriptor{\n    {ProtoField: "params_type", Optional: true}, // Transform a flag into a positional argument\n  },\n}\n')),(0,a.kt)("h3",{id:"specifying-subcommands"},"Specifying Subcommands"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," generates a command for each method in your gRPC service. However, you can specify subcommands to group related commands together. To specify subcommands, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autocliv1.ServiceCommandDescriptor")," struct."),(0,a.kt)("p",null,"This example shows how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autocliv1.ServiceCommandDescriptor")," struct to group related commands together and specify subcommands in your gRPC service by defining an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"autocliv1.ModuleOptions")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli.go"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-beta.0/x/gov/autocli.go#L94-L97\n")),(0,a.kt)("h3",{id:"positional-arguments"},"Positional Arguments"),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," generates a flag for each field in your protobuf message. However, you can choose to use positional arguments instead of flags for certain fields."),(0,a.kt)("p",null,"To add positional arguments to a command, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"autocliv1.PositionalArgDescriptor")," struct, as seen in the example below. Specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtoField")," parameter, which is the name of the protobuf field that should be used as the positional argument. In addition, if the parameter is a variable-length argument, you can specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"Varargs")," parameter as ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This can only be applied to the last positional parameter, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProtoField")," must be a repeated field."),(0,a.kt)("p",null,"Here's an example of how to define a positional argument for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-beta.0/x/auth/autocli.go#L25-L30\n")),(0,a.kt)("p",null,"Then the command can be used as follows, instead of having to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"--address")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"<appd> query auth account cosmos1abcd...xyz\n")),(0,a.kt)("h3",{id:"customising-flag-names"},"Customising Flag Names"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," generates flag names based on the names of the fields in your protobuf message. However, you can customise the flag names by providing a ",(0,a.kt)("inlineCode",{parentName:"p"},"FlagOptions"),". This parameter allows you to specify custom names for flags based on the names of the message fields."),(0,a.kt)("p",null,"For example, if you have a message with the fields ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test1"),", you can use the following naming options to customise the flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'autocliv1.RpcCommandOptions{ \n    FlagOptions: map[string]*autocliv1.FlagOptions{ \n        "test": { Name: "custom_name", }, \n        "test1": { Name: "other_name", }, \n    }, \n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlagsOptions")," is defined like sub commands in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoCLIOptions()")," method on your module."),(0,a.kt)("h3",{id:"combining-autocli-with-other-commands-within-a-module"},"Combining AutoCLI with Other Commands Within A Module"),(0,a.kt)("p",null,"AutoCLI can be used alongside other commands within a module. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"gov")," module uses AutoCLI to generate commands for the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," subcommand, but also defines custom commands for the ",(0,a.kt)("inlineCode",{parentName:"p"},"proposer")," subcommands."),(0,a.kt)("p",null,"In order to enable this behavior, set in ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoCLIOptions()")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"EnhanceCustomCommand")," field to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", for the command type (queries and/or transactions) you want to enhance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/fa4d87ef7e6d87aaccc94c337ffd2fe90fcb7a9d/x/gov/autocli.go#L98\n")),(0,a.kt)("p",null,"If not set to true, ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoCLI")," will not generate commands for the module if there are already commands registered for the module (when ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTxCmd()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTxCmd()")," are defined)."),(0,a.kt)("h3",{id:"use-autocli-for-non-module-commands"},"Use AutoCLI for non module commands"),(0,a.kt)("p",null,"It is possible to use ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoCLI")," for non module commands. The trick is still to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"appmodule.Module")," interface and append it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"appOptions.ModuleOptions")," map."),(0,a.kt)("p",null,"For example, here is how the SDK does it for ",(0,a.kt)("inlineCode",{parentName:"p"},"cometbft")," gRPC commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/julien/autocli-comet/client/grpc/cmtservice/autocli.go#L52-L71\n")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"autocli")," let you generate CLI to your Cosmos SDK-based applications without any cobra boilerplate. It allows you to easily generate CLI commands and flags from your protobuf messages, and provides many options for customising the behavior of your CLI application."),(0,a.kt)("p",null,"To further enhance your CLI experience with Cosmos SDK-based blockchains, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"hubl"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"hubl")," is a tool that allows you to query any Cosmos SDK-based blockchain using the new AutoCLI feature of the Cosmos SDK. With ",(0,a.kt)("inlineCode",{parentName:"p"},"hubl"),", you can easily configure a new chain and query modules with just a few simple commands."),(0,a.kt)("p",null,"For more information on ",(0,a.kt)("inlineCode",{parentName:"p"},"hubl"),", including how to configure a new chain and query a module, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/hubl"},"Hubl documentation"),"."))}u.isMDXComponent=!0}}]);