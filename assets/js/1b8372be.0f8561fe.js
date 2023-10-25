"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8182],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var a=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=i,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||r;return o?a.createElement(d,n(n({ref:t},p),{},{components:o})):a.createElement(d,n({ref:t},p))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,n=new Array(r);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<r;c++)n[c]=o[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},48712:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(87462),i=(o(67294),o(3905));const r={sidebar_position:0},n="What is the Cosmos SDK",s={unversionedId:"learn/intro/overview",id:"version-0.47/learn/intro/overview",title:"What is the Cosmos SDK",description:"The Cosmos SDK is an open-source framework for building multi-asset public Proof-of-Stake (PoS) blockchains, like the Cosmos Hub, as well as permissioned Proof-of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as application-specific blockchains.",source:"@site/versioned_docs/version-0.47/learn/intro/00-overview.md",sourceDirName:"learn/intro",slug:"/learn/intro/overview",permalink:"/v0.47/learn/intro/overview",draft:!1,tags:[],version:"0.47",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"learnSidebar",next:{title:"Application-Specific Blockchains",permalink:"/v0.47/learn/intro/why-app-specific"}},l={},c=[{value:"What are Application-Specific Blockchains",id:"what-are-application-specific-blockchains",level:2},{value:"Why the Cosmos SDK",id:"why-the-cosmos-sdk",level:2},{value:"Getting started with the Cosmos SDK",id:"getting-started-with-the-cosmos-sdk",level:2}],p={toc:c},h="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-the-cosmos-sdk"},"What is the Cosmos SDK"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk"},"Cosmos SDK")," is an open-source framework for building multi-asset public Proof-of-Stake (PoS) ",(0,i.kt)("df",{value:"blockchain"},"blockchains"),", like the Cosmos Hub, as well as permissioned Proof-of-Authority (PoA) blockchains. Blockchains built with the Cosmos SDK are generally referred to as ",(0,i.kt)("strong",{parentName:"p"},"application-specific blockchains"),"."),(0,i.kt)("p",null,"The goal of the Cosmos SDK is to allow developers to easily create custom blockchains from scratch that can natively interoperate with other blockchains. We envision the Cosmos SDK as the npm-like framework to build secure blockchain applications on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft"},"CometBFT"),". SDK-based blockchains are built out of composable ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/build/building-modules/intro"},"modules"),", most of which are open-source and readily available for any developers to use. Anyone can create a module for the Cosmos SDK, and integrating already-built modules is as simple as importing them into your blockchain application. What's more, the Cosmos SDK is a capabilities-based system that allows developers to better reason about the security of interactions between modules. For a deeper look at capabilities, jump to ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/learn/advanced/ocap"},"Object-Capability Model"),"."),(0,i.kt)("h2",{id:"what-are-application-specific-blockchains"},"What are Application-Specific Blockchains"),(0,i.kt)("p",null,"One development paradigm in the blockchain world today is that of virtual-machine blockchains like Ethereum, where development generally revolves around building decentralized applications on top of an existing blockchain as a set of smart contracts. While smart contracts can be very good for some use cases like single-use applications (e.g. ICOs), they often fall short for building complex decentralized platforms. More generally, smart contracts can be limiting in terms of flexibility, sovereignty and performance."),(0,i.kt)("p",null,"Application-specific blockchains offer a radically different development paradigm than virtual-machine blockchains. An application-specific blockchain is a blockchain customized to operate a single application: developers have all the freedom to make the design decisions required for the application to run optimally. They can also provide better sovereignty, security and performance."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/learn/intro/why-app-specific"},"application-specific blockchains"),"."),(0,i.kt)("h2",{id:"why-the-cosmos-sdk"},"Why the Cosmos SDK"),(0,i.kt)("p",null,"The Cosmos SDK is the most advanced framework for building custom application-specific blockchains today. Here are a few reasons why you might want to consider building your decentralized application with the Cosmos SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The default consensus engine available within the Cosmos SDK is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cometbft/cometbft"},"CometBFT"),". CometBFT is the most (and only) mature BFT consensus engine in existence. It is widely used across the industry and is considered the gold standard consensus engine for building Proof-of-Stake systems."),(0,i.kt)("li",{parentName:"ul"},"The Cosmos SDK is open-source and designed to make it easy to build blockchains out of composable ",(0,i.kt)("a",{parentName:"li",href:"../../build/modules"},"modules"),". As the ecosystem of open-source Cosmos SDK modules grows, it will become increasingly easier to build complex decentralized platforms with it."),(0,i.kt)("li",{parentName:"ul"},"The Cosmos SDK is inspired by capabilities-based security, and informed by years of wrestling with blockchain state-machines. This makes the Cosmos SDK a very secure environment to build blockchains."),(0,i.kt)("li",{parentName:"ul"},"Most importantly, the Cosmos SDK has already been used to build many application-specific blockchains that are already in production. Among others, we can cite ",(0,i.kt)("a",{parentName:"li",href:"https://hub.cosmos.network"},"Cosmos Hub"),", ",(0,i.kt)("a",{parentName:"li",href:"https://irisnet.org"},"IRIS Hub"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.binance.org/"},"Binance Chain"),", ",(0,i.kt)("a",{parentName:"li",href:"https://terra.money/"},"Terra")," or ",(0,i.kt)("a",{parentName:"li",href:"https://www.kava.io/"},"Kava"),". ",(0,i.kt)("a",{parentName:"li",href:"https://cosmos.network/ecosystem"},"Many more")," are building on the Cosmos SDK.")),(0,i.kt)("h2",{id:"getting-started-with-the-cosmos-sdk"},"Getting started with the Cosmos SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn more about the ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/learn/intro/sdk-app-architecture"},"architecture of a Cosmos SDK application")),(0,i.kt)("li",{parentName:"ul"},"Learn how to build an application-specific blockchain from scratch with the ",(0,i.kt)("a",{parentName:"li",href:"https://cosmos.network/docs/tutorial"},"Cosmos SDK Tutorial"))))}m.isMDXComponent=!0}}]);