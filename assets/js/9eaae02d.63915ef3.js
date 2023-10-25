"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[25280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="ADR 021: Protocol Buffer Query Encoding",l={unversionedId:"build/architecture/adr-021-protobuf-query-encoding",id:"build/architecture/adr-021-protobuf-query-encoding",title:"ADR 021: Protocol Buffer Query Encoding",description:"Changelog",source:"@site/docs/build/architecture/adr-021-protobuf-query-encoding.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-021-protobuf-query-encoding",permalink:"/main/build/architecture/adr-021-protobuf-query-encoding",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 020: Protocol Buffer Transaction Encoding",permalink:"/main/build/architecture/adr-020-protobuf-transaction-encoding"},next:{title:"ADR 022: Custom BaseApp panic handling",permalink:"/main/build/architecture/adr-022-custom-panic-handling"}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Custom Query Definition",id:"custom-query-definition",level:3},{value:"Handling of Interface Types",id:"handling-of-interface-types",level:4},{value:"Custom Query Implementation",id:"custom-query-implementation",level:3},{value:"Custom Query Registration and Routing",id:"custom-query-registration-and-routing",level:3},{value:"GRPC Protocol Support",id:"grpc-protocol-support",level:3},{value:"REST Queries and Swagger Generation",id:"rest-queries-and-swagger-generation",level:3},{value:"Client Usage",id:"client-usage",level:3},{value:"Testing",id:"testing",level:3},{value:"Future Improvements",id:"future-improvements",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-021-protocol-buffer-query-encoding"},"ADR 021: Protocol Buffer Query Encoding"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2020 March 27: Initial Draft")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"This ADR is a continuation of the motivation, design, and context established in\n",(0,a.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-019-protobuf-state-encoding"},"ADR 019")," and\n",(0,a.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-020-protobuf-transaction-encoding"},"ADR 020"),", namely, we aim to design the\nProtocol Buffer migration path for the client-side of the Cosmos SDK."),(0,a.kt)("p",null,"This ADR continues from ",(0,a.kt)("a",{parentName:"p",href:"/main/build/architecture/adr-020-protobuf-transaction-encoding"},"ADD 020"),"\nto specify the encoding of queries."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("h3",{id:"custom-query-definition"},"Custom Query Definition"),(0,a.kt)("p",null,"Modules define custom queries through a protocol buffers ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," definition.\nThese ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," definitions are generally associated with and used by the\nGRPC protocol. However, the protocol buffers specification indicates that\nthey can be used more generically by any request/response protocol that uses\nprotocol buffer encoding. Thus, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," definitions for specifying\ncustom ABCI queries and even reuse a substantial amount of the GRPC infrastructure."),(0,a.kt)("p",null,"Each module with custom queries should define a service canonically named ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// x/bank/types/types.proto\n\nservice Query {\n  rpc QueryBalance(QueryBalanceParams) returns (cosmos_sdk.v1.Coin) { }\n  rpc QueryAllBalances(QueryAllBalancesParams) returns (QueryAllBalancesResponse) { }\n}\n")),(0,a.kt)("h4",{id:"handling-of-interface-types"},"Handling of Interface Types"),(0,a.kt)("p",null,"Modules that use interface types and need true polymorphism generally force a\n",(0,a.kt)("inlineCode",{parentName:"p"},"oneof")," up to the app-level that provides the set of concrete implementations of\nthat interface that the app supports. While app's are welcome to do the same for\nqueries and implement an app-level query service, it is recommended that modules\nprovide query methods that expose these interfaces via ",(0,a.kt)("inlineCode",{parentName:"p"},"google.protobuf.Any"),".\nThere is a concern on the transaction level that the overhead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Any")," is too\nhigh to justify its usage. However for queries this is not a concern, and\nproviding generic module-level queries that use ",(0,a.kt)("inlineCode",{parentName:"p"},"Any")," does not preclude apps\nfrom also providing app-level queries that return use the app-level ",(0,a.kt)("inlineCode",{parentName:"p"},"oneof"),"s."),(0,a.kt)("p",null,"A hypothetical example for the ",(0,a.kt)("inlineCode",{parentName:"p"},"gov")," module would look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'// x/gov/types/types.proto\n\nimport "google/protobuf/any.proto";\n\nservice Query {\n  rpc GetProposal(GetProposalParams) returns (AnyProposal) { }\n}\n\nmessage AnyProposal {\n  ProposalBase base = 1;\n  google.protobuf.Any content = 2;\n}\n')),(0,a.kt)("h3",{id:"custom-query-implementation"},"Custom Query Implementation"),(0,a.kt)("p",null,"In order to implement the query service, we can reuse the existing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gogoproto"},"gogo protobuf"),"\ngrpc plugin, which for a service named ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," generates an interface named\n",(0,a.kt)("inlineCode",{parentName:"p"},"QueryServer")," as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type QueryServer interface {\n    QueryBalance(context.Context, *QueryBalanceParams) (*types.Coin, error)\n    QueryAllBalances(context.Context, *QueryAllBalancesParams) (*QueryAllBalancesResponse, error)\n}\n")),(0,a.kt)("p",null,"The custom queries for our module are implemented by implementing this interface."),(0,a.kt)("p",null,"The first parameter in this generated interface is a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),",\nwhereas querier methods generally need an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context")," to read\nfrom the store. Since arbitrary values can be attached to ",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),"\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"WithValue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," methods, the Cosmos SDK should provide a function\n",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext")," to retrieve the ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context")," from the provided\n",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),"."),(0,a.kt)("p",null,"An example implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBalance")," for the bank module as above would\nlook something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Querier struct {\n    Keeper\n}\n\nfunc (q Querier) QueryBalance(ctx context.Context, params *types.QueryBalanceParams) (*sdk.Coin, error) {\n    balance := q.GetBalance(sdk.UnwrapSDKContext(ctx), params.Address, params.Denom)\n    return &balance, nil\n}\n")),(0,a.kt)("h3",{id:"custom-query-registration-and-routing"},"Custom Query Registration and Routing"),(0,a.kt)("p",null,"Query server implementations as above would be registered with ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),"s using\na new method ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterQueryService(grpc.Server)")," which could be implemented simply\nas below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// x/bank/module.go\nfunc (am AppModule) RegisterQueryService(server grpc.Server) {\n    types.RegisterQueryServer(server, keeper.Querier{am.keeper})\n}\n")),(0,a.kt)("p",null,"Underneath the hood, a new method ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterService(sd *grpc.ServiceDesc, handler interface{})"),"\nwill be added to the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"baseapp.QueryRouter")," to add the queries to the custom\nquery routing table (with the routing method being described below).\nThe signature for this method matches the existing\n",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterServer")," method on the GRPC ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," type where ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," is the custom\nquery server implementation described above."),(0,a.kt)("p",null,"GRPC-like requests are routed by the service name (ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos_sdk.x.bank.v1.Query"),")\nand method name (ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBalance"),") combined with ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"s to form a full\nmethod name (ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"/cosmos_sdk.x.bank.v1.Query/QueryBalance"),"). This gets translated\ninto an ABCI query as ",(0,a.kt)("inlineCode",{parentName:"p"},"custom/cosmos_sdk.x.bank.v1.Query/QueryBalance"),". Service handlers\nregistered with ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRouter.RegisterService")," will be routed this way."),(0,a.kt)("p",null,"Beyond the method name, GRPC requests carry a protobuf encoded payload, which maps naturally\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestQuery.Data"),", and receive a protobuf encoded response or error. Thus\nthere is a quite natural mapping of GRPC-like rpc methods to the existing\n",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRouter")," infrastructure."),(0,a.kt)("p",null,"This basic specification allows us to reuse protocol buffer ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," definitions\nfor ABCI custom queries substantially reducing the need for manual decoding and\nencoding in query methods."),(0,a.kt)("h3",{id:"grpc-protocol-support"},"GRPC Protocol Support"),(0,a.kt)("p",null,"In addition to providing an ABCI query pathway, we can easily provide a GRPC\nproxy server that routes requests in the GRPC protocol to ABCI query requests\nunder the hood. In this way, clients could use their host languages' existing\nGRPC implementations to make direct queries against Cosmos SDK app's using\nthese ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," definitions. In order for this server to work, the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRouter"),"\non ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," will need to expose the service handlers registered with\n",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRouter.RegisterService")," to the proxy server implementation. Nodes could\nlaunch the proxy server on a separate port in the same process as the ABCI app\nwith a command-line flag."),(0,a.kt)("h3",{id:"rest-queries-and-swagger-generation"},"REST Queries and Swagger Generation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/grpc-ecosystem/grpc-gateway"},"grpc-gateway")," is a project that\ntranslates REST calls into GRPC calls using special annotations on service\nmethods. Modules that want to expose REST queries should add ",(0,a.kt)("inlineCode",{parentName:"p"},"google.api.http"),"\nannotations to their ",(0,a.kt)("inlineCode",{parentName:"p"},"rpc")," methods as in this example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'// x/bank/types/types.proto\n\nservice Query {\n  rpc QueryBalance(QueryBalanceParams) returns (cosmos_sdk.v1.Coin) {\n    option (google.api.http) = {\n      get: "/x/bank/v1/balance/{address}/{denom}"\n    };\n  }\n  rpc QueryAllBalances(QueryAllBalancesParams) returns (QueryAllBalancesResponse) {\n    option (google.api.http) = {\n      get: "/x/bank/v1/balances/{address}"\n    };\n  }\n}\n')),(0,a.kt)("p",null,"grpc-gateway will work direcly against the GRPC proxy described above which will\ntranslate requests to ABCI queries under the hood. grpc-gateway can also\ngenerate Swagger definitions automatically."),(0,a.kt)("p",null,"In the current implementation of REST queries, each module needs to implement\nREST queries manually in addition to ABCI querier methods. Using the grpc-gateway\napproach, there will be no need to generate separate REST query handlers, just\nquery servers as described above as grpc-gateway handles the translation of protobuf\nto REST as well as Swagger definitions."),(0,a.kt)("p",null,"The Cosmos SDK should provide CLI commands for apps to start GRPC gateway either in\na separate process or the same process as the ABCI app, as well as provide a\ncommand for generating grpc-gateway proxy ",(0,a.kt)("inlineCode",{parentName:"p"},".proto")," files and the ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger.json"),"\nfile."),(0,a.kt)("h3",{id:"client-usage"},"Client Usage"),(0,a.kt)("p",null,"The gogo protobuf grpc plugin generates client interfaces in addition to server\ninterfaces. For the ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," service defined above we would get a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryClient"),"\ninterface like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type QueryClient interface {\n    QueryBalance(ctx context.Context, in *QueryBalanceParams, opts ...grpc.CallOption) (*types.Coin, error)\n    QueryAllBalances(ctx context.Context, in *QueryAllBalancesParams, opts ...grpc.CallOption) (*QueryAllBalancesResponse, error)\n}\n")),(0,a.kt)("p",null,"Via a small patch to gogo protobuf (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gogo/protobuf/pull/675"},"gogo/protobuf#675"),")\nwe have tweaked the grpc codegen to use an interface rather than concrete type\nfor the generated client struct. This allows us to also reuse the GRPC infrastructure\nfor ABCI client queries."),(0,a.kt)("p",null,"1Context",(0,a.kt)("inlineCode",{parentName:"p"},"will receive a new method"),"QueryConn",(0,a.kt)("inlineCode",{parentName:"p"},"that returns a"),"ClientConn`\nthat routes calls to ABCI queries"),(0,a.kt)("p",null,"Clients (such as CLI methods) will then be able to call query methods like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"clientCtx := client.NewContext()\nqueryClient := types.NewQueryClient(clientCtx.QueryConn())\nparams := &types.QueryBalanceParams{addr, denom}\nresult, err := queryClient.QueryBalance(gocontext.Background(), params)\n")),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Tests would be able to create a query client directly from keeper and ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context"),"\nreferences using a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryServerTestHelper")," as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"queryHelper := baseapp.NewQueryServerTestHelper(ctx)\ntypes.RegisterQueryServer(queryHelper, keeper.Querier{app.BankKeeper})\nqueryClient := types.NewQueryClient(queryHelper)\n")),(0,a.kt)("h2",{id:"future-improvements"},"Future Improvements"),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"greatly simplified querier implementation (no manual encoding/decoding)"),(0,a.kt)("li",{parentName:"ul"},"easy query client generation (can use existing grpc and swagger tools)"),(0,a.kt)("li",{parentName:"ul"},"no need for REST query implementations"),(0,a.kt)("li",{parentName:"ul"},"type safe query methods (generated via grpc plugin)"),(0,a.kt)("li",{parentName:"ul"},"going forward, there will be less breakage of query methods because of the\nbackwards compatibility guarantees provided by buf")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"all clients using the existing ABCI/REST queries will need to be refactored\nfor both the new GRPC/REST query paths as well as protobuf/proto-json encoded\ndata, but this is more or less unavoidable in the protobuf refactoring")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("h2",{id:"references"},"References"))}d.isMDXComponent=!0}}]);