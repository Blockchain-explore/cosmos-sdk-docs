"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[28864],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(a),p=i,f=d["".concat(s,".").concat(p)]||d[p]||c[p]||r;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:0},o="List of Modules",l={unversionedId:"build/modules/README",id:"build/modules/README",title:"List of Modules",description:"Here are some production-grade modules that can be used in Cosmos SDK applications, along with their respective documentation:",source:"@site/docs/build/modules/README.md",sourceDirName:"build/modules",slug:"/build/modules/",permalink:"/main/build/modules/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"buildSidebar",previous:{title:"PreBlocker",permalink:"/main/build/building-modules/preblock"},next:{title:"x/auth",permalink:"/main/build/modules/auth/"}},s={},m=[{value:"IBC",id:"ibc",level:2},{value:"CosmWasm",id:"cosmwasm",level:2},{value:"EVM",id:"evm",level:2}],u={toc:m},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-of-modules"},"List of Modules"),(0,i.kt)("p",null,"Here are some production-grade modules that can be used in Cosmos SDK applications, along with their respective documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/auth/"},"Auth")," - Authentication of accounts and transactions for Cosmos SDK applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/authz/"},"Authz")," - Authorization for accounts to perform actions on behalf of other accounts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/bank/"},"Bank")," - Token transfer functionalities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/crisis/"},"Crisis")," - Halting the blockchain under certain circumstances (e.g. if an invariant is broken)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/distribution/"},"Distribution")," - Fee distribution, and staking token provision distribution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/evidence/"},"Evidence")," - Evidence handling for double signing, misbehaviour, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/feegrant/"},"Feegrant")," - Grant fee allowances for executing transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/gov/"},"Governance")," - On-chain proposals and voting."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/mint/"},"Mint")," - Creation of new units of staking token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/params/"},"Params")," - Globally available parameter store."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/protocolpool/"},"Protocolpool")," - Functionalities handling community pool funds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/slashing/"},"Slashing")," - Validator punishment mechanisms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/staking/"},"Staking")," - Proof-of-Stake layer for public blockchains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/upgrade/"},"Upgrade")," - Software upgrades handling and coordination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/nft/"},"NFT")," - NFT module implemented based on ",(0,i.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/architecture/adr-043-nft-module.html"},"ADR43"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/consensus/"},"Consensus")," - Consensus module for modifying CometBFT's ABCI consensus params."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/circuit/"},"Circuit")," - Circuit breaker module for pausing messages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/build/modules/genutil/"},"Genutil")," - Genesis utilities for the Cosmos SDK.")),(0,i.kt)("p",null,"To learn more about the process of building modules, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/building-modules/intro"},"building modules reference documentation"),"."),(0,i.kt)("h2",{id:"ibc"},"IBC"),(0,i.kt)("p",null,"The IBC module for the SDK is maintained by the IBC Go team in its ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go"},"own repository"),"."),(0,i.kt)("p",null,"Additionally, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/fdd664698d79864f1e00e147f9879e58497b5ef1/modules/capability"},"capability module")," is from v0.50+ maintained by the IBC Go team in its ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/fdd664698d79864f1e00e147f9879e58497b5ef1/modules/capability"},"own repository"),"."),(0,i.kt)("h2",{id:"cosmwasm"},"CosmWasm"),(0,i.kt)("p",null,"The CosmWasm module enables smart contracts, learn more by going to their ",(0,i.kt)("a",{parentName:"p",href:"https://book.cosmwasm.com/"},"documentation site"),", or visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm"},"the repository"),"."),(0,i.kt)("h2",{id:"evm"},"EVM"),(0,i.kt)("p",null,"Read more about writing smart contracts with solidity at the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.evmos.org/modules/evm/"},(0,i.kt)("inlineCode",{parentName:"a"},"evm")," documentation page"),"."))}c.isMDXComponent=!0}}]);