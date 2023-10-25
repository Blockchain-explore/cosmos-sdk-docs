"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[90992],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>b});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,b=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return t?n.createElement(b,s(s({ref:o},d),{},{components:t})):n.createElement(b,s({ref:o},d))}));function b(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31640:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const a={sidebar_position:1},s="ProtocolBuffer Annotations",i={unversionedId:"build/building-modules/protobuf-annotations",id:"build/building-modules/protobuf-annotations",title:"ProtocolBuffer Annotations",description:"This document explains the various protobuf scalars that have been added to make working with protobuf easier for Cosmos SDK application developers",source:"@site/docs/build/building-modules/05-protobuf-annotations.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/protobuf-annotations",permalink:"/main/build/building-modules/protobuf-annotations",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Query Services",permalink:"/main/build/building-modules/query-services"},next:{title:"BeginBlocker and EndBlocker",permalink:"/main/build/building-modules/beginblock-endblock"}},l={},c=[{value:"Signer",id:"signer",level:2},{value:"Scalar",id:"scalar",level:2},{value:"Implements_Interface",id:"implements_interface",level:2},{value:"Amino",id:"amino",level:2},{value:"Name",id:"name",level:3},{value:"Field_Name",id:"field_name",level:3},{value:"Dont_OmitEmpty",id:"dont_omitempty",level:3},{value:"Encoding",id:"encoding",level:3}],d={toc:c},m="wrapper";function p(e){let{components:o,...t}=e;return(0,r.kt)(m,(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocolbuffer-annotations"},"ProtocolBuffer Annotations"),(0,r.kt)("p",null,"This document explains the various protobuf scalars that have been added to make working with protobuf easier for Cosmos SDK application developers"),(0,r.kt)("h2",{id:"signer"},"Signer"),(0,r.kt)("p",null,"Signer specifies which field should be used to determine the signer of a message for the Cosmos SDK. This field can be used for clients as well to infer which field should be used to determine the signer of a message."),(0,r.kt)("p",null,"Read more about the signer field ",(0,r.kt)("a",{parentName:"p",href:"/main/build/building-modules/messages-and-queries"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e6848d99b55a65d014375b295bdd7f9641aac95e/proto/cosmos/bank/v1beta1/tx.proto#L40\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'option (cosmos.msg.v1.signer) = "from_address";\n')),(0,r.kt)("h2",{id:"scalar"},"Scalar"),(0,r.kt)("p",null,"The scalar type defines a way for clients to understand how to construct protobuf messages according to what is expected by the module and sdk."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'(cosmos_proto.scalar) = "cosmos.AddressString"\n')),(0,r.kt)("p",null,"Example of account address string scalar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e6848d99b55a65d014375b295bdd7f9641aac95e/proto/cosmos/bank/v1beta1/tx.proto#L46\n")),(0,r.kt)("p",null,"Example of validator address string scalar: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/distribution/v1beta1/query.proto#L87\n")),(0,r.kt)("p",null,"Example of Decimals scalar: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/distribution/v1beta1/distribution.proto#L26\n")),(0,r.kt)("p",null,"Example of Int scalar: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/gov/v1/gov.proto#L137\n")),(0,r.kt)("p",null,"There are a few options for what can be provided as a scalar: cosmos.AddressString, cosmos.ValidatorAddressString, cosmos.ConsensusAddressString, cosmos.Int, cosmos.Dec. "),(0,r.kt)("h2",{id:"implements_interface"},"Implements_Interface"),(0,r.kt)("p",null,"Implement interface is used to provide information to client tooling like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmology-tech/telescope"},"telescope")," on how to encode and decode protobuf messages. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'option (cosmos_proto.implements_interface) = "cosmos.auth.v1beta1.AccountI";\n')),(0,r.kt)("h2",{id:"amino"},"Amino"),(0,r.kt)("p",null,"The amino codec was removed in 0.50.0, this means there is not a need register ",(0,r.kt)("inlineCode",{parentName:"p"},"legacyAminoCodec"),". To replace the amino codec, Amino protobuf annotations are used to provide information to the amino codec on how to encode and decode protobuf messages. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Amino annotations are only used for backwards compatibility with amino. New modules are not required use amino annotations.")),(0,r.kt)("p",null,"The below annotations are used to provide information to the amino codec on how to encode and decode protobuf messages in a backwards compatible manner. "),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"Name specifies the amino name that would show up for the user in order for them see which message they are signing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'option (amino.name) = "cosmos-sdk/BaseAccount";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/bank/v1beta1/tx.proto#L41\n")),(0,r.kt)("h3",{id:"field_name"},"Field_Name"),(0,r.kt)("p",null,"Field name specifies the amino name that would show up for the user in order for them see which field they are signing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'uint64 height = 1 [(amino.field_name) = "public_key"];\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/distribution/v1beta1/distribution.proto#L166\n")),(0,r.kt)("h3",{id:"dont_omitempty"},"Dont_OmitEmpty"),(0,r.kt)("p",null,"Dont omitempty specifies that the field should not be omitted when encoding to amino. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"repeated cosmos.base.v1beta1.Coin amount = 3 [(amino.dont_omitempty)   = true];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/bank/v1beta1/bank.proto#L56\n")),(0,r.kt)("h3",{id:"encoding"},"Encoding"),(0,r.kt)("p",null,"Encoding specifies the amino encoding that should be used when encoding to amino. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},'(amino.encoding)         = "legacy_coins",\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/e8f28bf5db18b8d6b7e0d94b542ce4cf48fed9d6/proto/cosmos/bank/v1beta1/genesis.proto#L23\n")))}p.isMDXComponent=!0}}]);