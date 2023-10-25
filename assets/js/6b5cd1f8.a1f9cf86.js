"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[81993],{3905:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>f});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},m=function(e){var o=c(e.components);return n.createElement(s.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return t?n.createElement(f,i(i({ref:o},m),{},{components:t})):n.createElement(f,i({ref:o},m))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43293:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const a={sidebar_position:1},i="x/protocolpool",l={unversionedId:"build/modules/protocolpool/README",id:"build/modules/protocolpool/README",title:"x/protocolpool",description:"Concepts",source:"@site/docs/build/modules/protocolpool/README.md",sourceDirName:"build/modules/protocolpool",slug:"/build/modules/protocolpool/",permalink:"/main/build/modules/protocolpool/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/params",permalink:"/main/build/modules/params/"},next:{title:"x/slashing",permalink:"/main/build/modules/slashing/"}},s={},c=[{value:"Concepts",id:"concepts",level:2},{value:"State Transitions",id:"state-transitions",level:2},{value:"FundCommunityPool",id:"fundcommunitypool",level:3},{value:"CommunityPoolSpend",id:"communitypoolspend",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgFundCommunityPool",id:"msgfundcommunitypool",level:3}],m={toc:c},p="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xprotocolpool"},(0,r.kt)("inlineCode",{parentName:"h1"},"x/protocolpool")),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"Protopool is a module that handle functionality around community pool funds. This provides a separate module account for community pool making it easier to track the pool assets. We no longer track community pool assets in distribution module, but instead in this protocolpool module. Funds are migrated from the distribution module's community pool to protocolpool's module account."),(0,r.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,r.kt)("h3",{id:"fundcommunitypool"},"FundCommunityPool"),(0,r.kt)("p",null,"FundCommunityPool can be called by any valid account to send funds to the protocolpool module account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"  // FundCommunityPool defines a method to allow an account to directly\n  // fund the community pool.\n  rpc FundCommunityPool(MsgFundCommunityPool) returns (MsgFundCommunityPoolResponse);\n")),(0,r.kt)("h3",{id:"communitypoolspend"},"CommunityPoolSpend"),(0,r.kt)("p",null,"CommunityPoolSpend can be called by the module authority (default governance module account) or any account with authorization to spend funds from the protocolpool module account to a receiver address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"  // CommunityPoolSpend defines a governance  operation for sending tokens from\n  // the community pool in the x/protocolpool module to another account, which\n  // could be the governance module itself. The authority is defined in the\n  // keeper.\n  rpc CommunityPoolSpend(MsgCommunityPoolSpend) returns (MsgCommunityPoolSpendResponse);\n")),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"msgfundcommunitypool"},"MsgFundCommunityPool"),(0,r.kt)("p",null,"This message sends coins directly from the sender to the community pool."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you know the protocolpool module account address, you can directly use bank ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," transaction instead.\n::::"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/9dd34510e27376005e7e7ff3628eab9dbc8ad6dc/proto/cosmos/protocolpool/v1/tx.proto#L31-L41\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The msg will fail if the amount cannot be transferred from the sender to the protocolpool module account.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) FundCommunityPool(ctx context.Context, amount sdk.Coins, sender sdk.AccAddress) error {\n    return k.bankKeeper.SendCoinsFromAccountToModule(ctx, sender, types.ModuleName, amount)\n}\n")),(0,r.kt)("h3",{parentName:"admonition",id:"msgcommunitypoolspend"},"MsgCommunityPoolSpend"),(0,r.kt)("p",{parentName:"admonition"},"This message distributes funds from the protocolpool module account to the recipient using ",(0,r.kt)("inlineCode",{parentName:"p"},"DistributeFromFeePool")," keeper method."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/9dd34510e27376005e7e7ff3628eab9dbc8ad6dc/proto/cosmos/protocolpool/v1/tx.proto#L46-L59\n")),(0,r.kt)("p",{parentName:"admonition"},"The message will fail under the following conditions:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The amount cannot be transferred to the recipient from the protocolpool module account."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"recipient")," address is restricted")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (k Keeper) DistributeFromFeePool(ctx context.Context, amount sdk.Coins, receiveAddr sdk.AccAddress) error {\n    return k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiveAddr, amount)\n}\n")),(0,r.kt)("h2",{parentName:"admonition",id:"client"},"Client"),(0,r.kt)("p",{parentName:"admonition"},"It takes the advantage of ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoCLI")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/9dd34510e27376005e7e7ff3628eab9dbc8ad6dc/x/protocolpool/autocli.go\n"))))}d.isMDXComponent=!0}}]);