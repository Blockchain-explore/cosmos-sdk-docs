"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[76187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="ADR 032: Typed Events",s={unversionedId:"build/architecture/adr-032-typed-events",id:"build/architecture/adr-032-typed-events",title:"ADR 032: Typed Events",description:"Changelog",source:"@site/docs/build/architecture/adr-032-typed-events.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-032-typed-events",permalink:"/main/build/architecture/adr-032-typed-events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 031: Protobuf Msg Services",permalink:"/main/build/architecture/adr-031-msg-service"},next:{title:"ADR 033: Protobuf-based Inter-Module Communication",permalink:"/main/build/architecture/adr-033-protobuf-inter-module-comm"}},l={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Authors",id:"authors",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"How to subscribe to these typed events in <code>Client</code>",id:"how-to-subscribe-to-these-typed-events-in-client",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Detailed code example of publishing events",id:"detailed-code-example-of-publishing-events",level:2},{value:"References",id:"references",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-032-typed-events"},"ADR 032: Typed Events"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"28-Sept-2020: Initial Draft")),(0,a.kt)("h2",{id:"authors"},"Authors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Anil Kumar (@anilcse)"),(0,a.kt)("li",{parentName:"ul"},"Jack Zampolin (@jackzampolin)"),(0,a.kt)("li",{parentName:"ul"},"Adam Bozanich (@boz)")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Proposed"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"Currently in the Cosmos SDK, events are defined in the handlers for each message as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlock"),". Each module doesn't have types defined for each event, they are implemented as ",(0,a.kt)("inlineCode",{parentName:"p"},"map[string]string"),". Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use ",(0,a.kt)("strong",{parentName:"p"},"typed events")," defined in each module such that emitting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team."),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Currently in the Cosmos SDK, events are defined in the handlers for each message, meaning each module doesn't have a canonical set of types for each event. Above all else this makes these events difficult to consume as it requires a great deal of raw string matching and parsing. This proposal focuses on updating the events to use ",(0,a.kt)("strong",{parentName:"p"},"typed events")," defined in each module such that emitting and subscribing to events will be much easier. This workflow comes from the experience of the Akash Network team."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://github.com/ovrclk/akash"},"Our platform")," requires a number of programatic on chain interactions both on the provider (datacenter - to bid on new orders and listen for leases created) and user (application developer - to send the app manifest to the provider) side. In addition the Akash team is now maintaining the IBC ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ovrclk/relayer"},(0,a.kt)("inlineCode",{parentName:"a"},"relayer")),", another very event driven process. In working on these core pieces of infrastructure, and integrating lessons learned from Kubernetes development, our team has developed a standard method for defining and consuming typed events in Cosmos SDK modules. We have found that it is extremely useful in building this type of event driven application."),(0,a.kt)("p",null,"As the Cosmos SDK gets used more extensively for apps like ",(0,a.kt)("inlineCode",{parentName:"p"},"peggy"),", other peg zones, IBC, DeFi, etc... there will be an exploding demand for event driven applications to support new features desired by users. We propose upstreaming our findings into the Cosmos SDK to enable all Cosmos SDK applications to quickly and easily build event driven apps to aid their core application. Wallets, exchanges, explorers, and defi protocols all stand to benefit from this work."),(0,a.kt)("p",null,"If this proposal is accepted, users will be able to build event driven Cosmos SDK apps in go by just writing ",(0,a.kt)("inlineCode",{parentName:"p"},"EventHandler"),"s for their specific event types and passing them to ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitters")," that are defined in the Cosmos SDK."),(0,a.kt)("p",null,"The end of this proposal contains a detailed example of how to consume events after this refactor."),(0,a.kt)("p",null,"This proposal is specifically about how to consume these events as a client of the blockchain, not for intermodule communication."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step-1"),":  Implement additional functionality in the ",(0,a.kt)("inlineCode",{parentName:"p"},"types")," package: ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitTypedEvent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ParseTypedEvent")," functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// types/events.go\n\n// EmitTypedEvent takes typed event and emits converting it into sdk.Event\nfunc (em *EventManager) EmitTypedEvent(event proto.Message) error {\n    evtType := proto.MessageName(event)\n    evtJSON, err := codec.ProtoMarshalJSON(event)\n    if err != nil {\n        return err\n    }\n\n    var attrMap map[string]json.RawMessage\n    err = json.Unmarshal(evtJSON, &attrMap)\n    if err != nil {\n        return err\n    }\n\n    var attrs []abci.EventAttribute\n    for k, v := range attrMap {\n        attrs = append(attrs, abci.EventAttribute{\n            Key:   []byte(k),\n            Value: v,\n        })\n    }\n\n    em.EmitEvent(Event{\n        Type:       evtType,\n        Attributes: attrs,\n    })\n\n    return nil\n}\n\n// ParseTypedEvent converts abci.Event back to typed event\nfunc ParseTypedEvent(event abci.Event) (proto.Message, error) {\n    concreteGoType := proto.MessageType(event.Type)\n    if concreteGoType == nil {\n        return nil, fmt.Errorf("failed to retrieve the message of type %q", event.Type)\n    }\n\n    var value reflect.Value\n    if concreteGoType.Kind() == reflect.Ptr {\n        value = reflect.New(concreteGoType.Elem())\n    } else {\n        value = reflect.Zero(concreteGoType)\n    }\n\n    protoMsg, ok := value.Interface().(proto.Message)\n    if !ok {\n        return nil, fmt.Errorf("%q does not implement proto.Message", event.Type)\n    }\n\n    attrMap := make(map[string]json.RawMessage)\n    for _, attr := range event.Attributes {\n        attrMap[string(attr.Key)] = attr.Value\n    }\n\n    attrBytes, err := json.Marshal(attrMap)\n    if err != nil {\n        return nil, err\n    }\n\n    err = jsonpb.Unmarshal(strings.NewReader(string(attrBytes)), protoMsg)\n    if err != nil {\n        return nil, err\n    }\n\n    return protoMsg, nil\n}\n')),(0,a.kt)("p",null,"Here, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitTypedEvent")," is a method on ",(0,a.kt)("inlineCode",{parentName:"p"},"EventManager")," which takes typed event as input and apply json serialization on it. Then it maps the JSON key/value pairs to ",(0,a.kt)("inlineCode",{parentName:"p"},"event.Attributes")," and emits it in form of ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Event"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Event.Type")," will be the type URL of the proto message."),(0,a.kt)("p",null,"When we subscribe to emitted events on the CometBFT websocket, they are emitted in the form of an ",(0,a.kt)("inlineCode",{parentName:"p"},"abci.Event"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"ParseTypedEvent")," parses the event back to it's original proto message."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step-2"),": Add proto definitions for typed events for msgs in each module:"),(0,a.kt)("p",null,"For example, let's take ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposal")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"gov")," module and implement this event's type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// proto/cosmos/gov/v1beta1/gov.proto\n// Add typed event definition\n\npackage cosmos.gov.v1beta1;\n\nmessage EventSubmitProposal {\n    string from_address   = 1;\n    uint64 proposal_id    = 2;\n    TextProposal proposal = 3;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step-3"),": Refactor event emission to use the typed event created and emit using ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.EmitTypedEvent"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// x/gov/handler.go\nfunc handleMsgSubmitProposal(ctx sdk.Context, keeper keeper.Keeper, msg types.MsgSubmitProposalI) (*sdk.Result, error) {\n    ...\n    types.Context.EventManager().EmitTypedEvent(\n        &EventSubmitProposal{\n            FromAddress: fromAddress,\n            ProposalId: id,\n            Proposal: proposal,\n        },\n    )\n    ...\n}\n")),(0,a.kt)("h3",{id:"how-to-subscribe-to-these-typed-events-in-client"},"How to subscribe to these typed events in ",(0,a.kt)("inlineCode",{parentName:"h3"},"Client")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Full code example below")),(0,a.kt)("p",null,"Users will be able to subscribe using ",(0,a.kt)("inlineCode",{parentName:"p"},"client.Context.Client.Subscribe")," and consume events which are emitted using ",(0,a.kt)("inlineCode",{parentName:"p"},"EventHandler"),"s."),(0,a.kt)("p",null,"Akash Network has built a simple ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/pubsub/bus.go#L20"},(0,a.kt)("inlineCode",{parentName:"a"},"pubsub")),". This can be used to subscribe to ",(0,a.kt)("inlineCode",{parentName:"p"},"abci.Events")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L21"},"publish")," them as typed events."),(0,a.kt)("p",null,"Please see the below code sample for more detail on this flow looks for clients."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improves consistency of implementation for the events currently in the Cosmos SDK"),(0,a.kt)("li",{parentName:"ul"},"Provides a much more ergonomic way to handle events and facilitates writing event driven applications"),(0,a.kt)("li",{parentName:"ul"},"This implementation will support a middleware ecosystem of ",(0,a.kt)("inlineCode",{parentName:"li"},"EventHandler"),"s")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("h2",{id:"detailed-code-example-of-publishing-events"},"Detailed code example of publishing events"),(0,a.kt)("p",null,"This ADR also proposes adding affordances to emit and consume these events. This way developers will only need to write\n",(0,a.kt)("inlineCode",{parentName:"p"},"EventHandler"),"s which define the actions they desire to take."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// EventEmitter is a type that describes event emitter functions\n// This should be defined in `types/events.go`\ntype EventEmitter func(context.Context, client.Context, ...EventHandler) error\n\n// EventHandler is a type of function that handles events coming out of the event bus\n// This should be defined in `types/events.go`\ntype EventHandler func(proto.Message) error\n\n// Sample use of the functions below\nfunc main() {\n    ctx, cancel := context.WithCancel(context.Background())\n\n    if err := TxEmitter(ctx, client.Context{}.WithNodeURI("tcp://localhost:26657"), SubmitProposalEventHandler); err != nil {\n        cancel()\n        panic(err)\n    }\n\n    return\n}\n\n// SubmitProposalEventHandler is an example of an event handler that prints proposal details\n// when any EventSubmitProposal is emitted.\nfunc SubmitProposalEventHandler(ev proto.Message) (err error) {\n    switch event := ev.(type) {\n    // Handle governance proposal events creation events\n    case govtypes.EventSubmitProposal:\n        // Users define business logic here e.g.\n        fmt.Println(ev.FromAddress, ev.ProposalId, ev.Proposal)\n        return nil\n    default:\n        return nil\n    }\n}\n\n// TxEmitter is an example of an event emitter that emits just transaction events. This can and\n// should be implemented somewhere in the Cosmos SDK. The Cosmos SDK can include an EventEmitters for tm.event=\'Tx\'\n// and/or tm.event=\'NewBlock\' (the new block events may contain typed events)\nfunc TxEmitter(ctx context.Context, cliCtx client.Context, ehs ...EventHandler) (err error) {\n    // Instantiate and start CometBFT RPC client\n    client, err := cliCtx.GetNode()\n    if err != nil {\n        return err\n    }\n\n    if err = client.Start(); err != nil {\n        return err\n    }\n\n    // Start the pubsub bus\n    bus := pubsub.NewBus()\n    defer bus.Close()\n\n    // Initialize a new error group\n    eg, ctx := errgroup.WithContext(ctx)\n\n    // Publish chain events to the pubsub bus\n    eg.Go(func() error {\n        return PublishChainTxEvents(ctx, client, bus, simapp.ModuleBasics)\n    })\n\n    // Subscribe to the bus events\n    subscriber, err := bus.Subscribe()\n    if err != nil {\n        return err\n    }\n\n    // Handle all the events coming out of the bus\n    eg.Go(func() error {\n        var err error\n        for {\n            select {\n            case <-ctx.Done():\n                return nil\n            case <-subscriber.Done():\n                return nil\n            case ev := <-subscriber.Events():\n                for _, eh := range ehs {\n                    if err = eh(ev); err != nil {\n                        break\n                    }\n                }\n            }\n        }\n        return nil\n    })\n\n    return group.Wait()\n}\n\n// PublishChainTxEvents events using cmtclient. Waits on context shutdown signals to exit.\nfunc PublishChainTxEvents(ctx context.Context, client cmtclient.EventsClient, bus pubsub.Bus, mb module.BasicManager) (err error) {\n    // Subscribe to transaction events\n    txch, err := client.Subscribe(ctx, "txevents", "tm.event=\'Tx\'", 100)\n    if err != nil {\n        return err\n    }\n\n    // Unsubscribe from transaction events on function exit\n    defer func() {\n        err = client.UnsubscribeAll(ctx, "txevents")\n    }()\n\n    // Use errgroup to manage concurrency\n    g, ctx := errgroup.WithContext(ctx)\n\n    // Publish transaction events in a goroutine\n    g.Go(func() error {\n        var err error\n        for {\n            select {\n            case <-ctx.Done():\n                break\n            case ed := <-ch:\n                switch evt := ed.Data.(type) {\n                case cmttypes.EventDataTx:\n                    if !evt.Result.IsOK() {\n                        continue\n                    }\n                    // range over events, parse them using the basic manager and\n                    // send them to the pubsub bus\n                    for _, abciEv := range events {\n                        typedEvent, err := sdk.ParseTypedEvent(abciEv)\n                        if err != nil {\n                            return er\n                        }\n                        if err := bus.Publish(typedEvent); err != nil {\n                            bus.Close()\n                            return\n                        }\n                        continue\n                    }\n                }\n            }\n        }\n        return err\n    })\n\n    // Exit on error or context cancelation\n    return g.Wait()\n}\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ovrclk/akash/blob/90d258caeb933b611d575355b8df281208a214f8/events/publish.go#L19-L58"},"Publish Custom Events via a bus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ovrclk/deploy/blob/bf6c633ab6c68f3026df59efd9982d6ca1bf0561/cmd/event-handlers.go#L57"},"Consuming the events in ",(0,a.kt)("inlineCode",{parentName:"a"},"Client")))))}d.isMDXComponent=!0}}]);