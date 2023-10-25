"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[44959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={},l="x/circuit",s={unversionedId:"build/modules/circuit/README",id:"version-0.50/build/modules/circuit/README",title:"x/circuit",description:"Concepts",source:"@site/versioned_docs/version-0.50/build/modules/circuit/README.md",sourceDirName:"build/modules/circuit",slug:"/build/modules/circuit/",permalink:"/v0.50/build/modules/circuit/",draft:!1,tags:[],version:"0.50",frontMatter:{},sidebar:"buildSidebar",previous:{title:"x/upgrade",permalink:"/v0.50/build/modules/upgrade/"},next:{title:"x/genutil",permalink:"/v0.50/build/modules/genutil/"}},o={},u=[{value:"Concepts",id:"concepts",level:2},{value:"State",id:"state",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Disable List",id:"disable-list",level:3},{value:"State Transitions",id:"state-transitions",level:2},{value:"Authorize",id:"authorize",level:3},{value:"Trip",id:"trip",level:3},{value:"Reset",id:"reset",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgAuthorizeCircuitBreaker",id:"msgauthorizecircuitbreaker",level:3},{value:"MsgTripCircuitBreaker",id:"msgtripcircuitbreaker",level:3},{value:"MsgResetCircuitBreaker",id:"msgresetcircuitbreaker",level:3},{value:"Events - list and describe event tags",id:"events---list-and-describe-event-tags",level:2},{value:"Message Events",id:"message-events",level:3},{value:"MsgAuthorizeCircuitBreaker",id:"msgauthorizecircuitbreaker-1",level:4},{value:"MsgTripCircuitBreaker",id:"msgtripcircuitbreaker-1",level:4},{value:"ResetCircuitBreaker",id:"resetcircuitbreaker",level:4},{value:"Keys - list of key prefixes used by the circuit module",id:"keys---list-of-key-prefixes-used-by-the-circuit-module",level:2},{value:"Client - list and describe CLI commands and gRPC and REST endpoints",id:"client---list-and-describe-cli-commands-and-grpc-and-rest-endpoints",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xcircuit"},(0,i.kt)("inlineCode",{parentName:"h1"},"x/circuit")),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"Circuit Breaker is a module that is meant to avoid a chain needing to halt/shut down in the presence of a vulnerability, instead the module will allow specific messages or all messages to be disabled. When operating a chain, if it is app specific then a halt of the chain is less detrimental, but if there are applications built on top of the chain then halting is expensive due to the disturbance to applications. "),(0,i.kt)("p",null,"Circuit Breaker works with the idea that an address or set of addresses have the right to block messages from being executed and/or included in the mempool. Any address with a permission is able to reset the circuit breaker for the message. "),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("h3",{id:"accounts"},"Accounts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AccountPermissions ",(0,i.kt)("inlineCode",{parentName:"li"},"0x1 | account_address  -> ProtocolBuffer(CircuitBreakerPermissions)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type level int32\n\nconst (\n    // LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit\n    // breaker permissions.\n    LEVEL_NONE_UNSPECIFIED = iota\n    // LEVEL_SOME_MSGS indicates that the account will have permission to\n    // trip or reset the circuit breaker for some Msg type URLs. If this level\n    // is chosen, a non-empty list of Msg type URLs must be provided in\n    // limit_type_urls.\n    LEVEL_SOME_MSGS\n    // LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit\n    // breaker for Msg's of all type URLs.\n    LEVEL_ALL_MSGS \n    // LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker\n    // actions and can grant permissions to other accounts.\n    LEVEL_SUPER_ADMIN\n)\n\ntype Access struct {\n    level int32 \n    msgs []string // if full permission, msgs can be empty\n}\n")),(0,i.kt)("h3",{id:"disable-list"},"Disable List"),(0,i.kt)("p",null,"List of type urls that are disabled."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DisableList ",(0,i.kt)("inlineCode",{parentName:"li"},"0x2 | msg_type_url -> []byte{}")," ")),(0,i.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,i.kt)("h3",{id:"authorize"},"Authorize"),(0,i.kt)("p",null,"Authorize, is called by the module authority (default governance module account) or any account with ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVEL_SUPER_ADMIN")," to give permission to disable/enable messages to another account. There are three levels of permissions that can be granted. ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVEL_SOME_MSGS")," limits the number of messages that can be disabled. ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVEL_ALL_MSGS")," permits all messages to be disabled. ",(0,i.kt)("inlineCode",{parentName:"p"},"LEVEL_SUPER_ADMIN")," allows an account to take all circuit breaker actions including authorizing and deauthorizing other accounts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"  // AuthorizeCircuitBreaker allows a super-admin to grant (or revoke) another\n  // account's circuit breaker permissions.\n  rpc AuthorizeCircuitBreaker(MsgAuthorizeCircuitBreaker) returns (MsgAuthorizeCircuitBreakerResponse);\n")),(0,i.kt)("h3",{id:"trip"},"Trip"),(0,i.kt)("p",null,"Trip, is called by an authorized account to disable message execution for a specific msgURL. If empty, all the msgs will be disabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"  // TripCircuitBreaker pauses processing of Msg's in the state machine.\n  rpc TripCircuitBreaker(MsgTripCircuitBreaker) returns (MsgTripCircuitBreakerResponse);\n")),(0,i.kt)("h3",{id:"reset"},"Reset"),(0,i.kt)("p",null,"Reset is called by an authorized account to enable execution for a specific msgURL of previously disabled message. If empty, all the disabled messages will be enabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"  // ResetCircuitBreaker resumes processing of Msg's in the state machine that\n  // have been been paused using TripCircuitBreaker.\n  rpc ResetCircuitBreaker(MsgResetCircuitBreaker) returns (MsgResetCircuitBreakerResponse);\n")),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("h3",{id:"msgauthorizecircuitbreaker"},"MsgAuthorizeCircuitBreaker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/cosmos/circuit/v1/tx.proto#L25-L75\n")),(0,i.kt)("p",null,"This message is expected to fail if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the granter is not an account with permission level ",(0,i.kt)("inlineCode",{parentName:"li"},"LEVEL_SUPER_ADMIN")," or the module authority")),(0,i.kt)("h3",{id:"msgtripcircuitbreaker"},"MsgTripCircuitBreaker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/cosmos/circuit/v1/tx.proto#L77-L93\n")),(0,i.kt)("p",null,"This message is expected to fail if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if the signer does not have a permission level with the ability to disable the specified type url message")),(0,i.kt)("h3",{id:"msgresetcircuitbreaker"},"MsgResetCircuitBreaker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/main/proto/cosmos/circuit/v1/tx.proto#L95-109\n")),(0,i.kt)("p",null,"This message is expected to fail if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if the type url is not disabled")),(0,i.kt)("h2",{id:"events---list-and-describe-event-tags"},"Events - list and describe event tags"),(0,i.kt)("p",null,"The circuit module emits the following events:"),(0,i.kt)("h3",{id:"message-events"},"Message Events"),(0,i.kt)("h4",{id:"msgauthorizecircuitbreaker-1"},"MsgAuthorizeCircuitBreaker"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"granter"),(0,i.kt)("td",{parentName:"tr",align:null},"{granterAddress}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"grantee"),(0,i.kt)("td",{parentName:"tr",align:null},"{granteeAddress}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"permission"),(0,i.kt)("td",{parentName:"tr",align:null},"{granteePermissions}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"module"),(0,i.kt)("td",{parentName:"tr",align:null},"circuit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"authorize_circuit_breaker")))),(0,i.kt)("h4",{id:"msgtripcircuitbreaker-1"},"MsgTripCircuitBreaker"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"authority"),(0,i.kt)("td",{parentName:"tr",align:null},"{authorityAddress}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"msg_urls"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string{msg_urls}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"module"),(0,i.kt)("td",{parentName:"tr",align:null},"circuit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"trip_circuit_breaker")))),(0,i.kt)("h4",{id:"resetcircuitbreaker"},"ResetCircuitBreaker"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"authority"),(0,i.kt)("td",{parentName:"tr",align:null},"{authorityAddress}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[]string"),(0,i.kt)("td",{parentName:"tr",align:null},"msg_urls"),(0,i.kt)("td",{parentName:"tr",align:null},"[]string{msg_urls}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"module"),(0,i.kt)("td",{parentName:"tr",align:null},"circuit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"reset_circuit_breaker")))),(0,i.kt)("h2",{id:"keys---list-of-key-prefixes-used-by-the-circuit-module"},"Keys - list of key prefixes used by the circuit module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccountPermissionPrefix")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"0x01")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DisableListPrefix")," -  ",(0,i.kt)("inlineCode",{parentName:"li"},"0x02"))),(0,i.kt)("h2",{id:"client---list-and-describe-cli-commands-and-grpc-and-rest-endpoints"},"Client - list and describe CLI commands and gRPC and REST endpoints"))}p.isMDXComponent=!0}}]);