(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{9536:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3087)}])},3087:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return no}});var s=i(4246),t=i(7378),r=i(7098),a=i(6677),o=i(2238),l=i(4366),c=i(149),d=i(624),u=i(1251),h=i.n(u);function m(e){let{className:n,...i}=e;return(0,s.jsx)(c.x,{component:"span",className:(0,d.Z)(h().code,n),...i})}var p=i(1996);function x(e){let{errorOf:n}=e;return(0,s.jsxs)(c.x,{children:[(0,s.jsxs)(c.x,{span:!0,c:"red",children:["Error loading component ",n," data."," "]}),"If you see this message please let us know by"," ",(0,s.jsx)(p.e,{href:"https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml",target:"_blank",children:"opening an issue on GitHub"}),"."]})}function g(e){let{component:n,query:i,data:t}=e;if(!t[n])return(0,s.jsx)(x,{errorOf:"props"});let r=Object.keys(t[n].props).filter(e=>t[n].props[e].name.toLowerCase().includes(i.toLowerCase().trim())).map(e=>{let r=t[n].props[e];return(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsxs)(o.i.Td,{style:{whiteSpace:"nowrap"},children:[(0,s.jsx)(l.y,{highlight:i,component:"span",fz:"sm",children:r.name}),r.required&&(0,s.jsxs)(c.x,{component:"sup",c:"red",fz:"xs",children:[" ","*"]})]}),(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(m,{children:r.type.name})}),(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(c.x,{fz:"sm",dangerouslySetInnerHTML:{__html:r.description}})})]},e)});return 0===r.length?(0,s.jsx)(c.x,{c:"dimmed",mb:"xl",fz:"sm",children:"Nothing found"}):(0,s.jsx)(o.i.ScrollContainer,{minWidth:800,children:(0,s.jsxs)(o.i,{layout:"fixed",children:[(0,s.jsx)(o.i.Thead,{children:(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsx)(o.i.Th,{w:210,children:"Name"}),(0,s.jsx)(o.i.Th,{w:310,children:"Type"}),(0,s.jsx)(o.i.Th,{children:"Description"})]})}),(0,s.jsx)(o.i.Tbody,{children:r})]})})}var j=i(4046),f=i(2033),b=i(7993);function _(e){let{component:n,componentPrefix:i}=e;return i?i===n?n:"".concat(i,".").concat(n.replace(i,"")):n}var v=i(5628),y=i.n(v);function T(e){let{components:n,componentPrefix:i,data:r}=e,[a,o]=(0,t.useState)(""),l=n.map(e=>(0,s.jsxs)("div",{className:y().section,children:[(0,s.jsxs)(j.D,{order:2,className:y().title,children:[_({component:e,componentPrefix:i})," component props"]}),(0,s.jsx)(g,{component:e,query:a,data:r})]},e));return(0,s.jsxs)("div",{className:y().root,children:[(0,s.jsx)(f.o,{className:y().search,value:a,onChange:e=>o(e.currentTarget.value),leftSection:(0,s.jsx)(b.Z,{className:y().searchIcon}),placeholder:"Search props",radius:"md",size:"lg",autoFocus:!0}),l]})}var k=i(3788),N=i(4485),w=i(603),z=i(2424),C=i(1598),S=i.n(C);function P(e){if(0===e.length)return -1;let n=e.reduce((e,n,i)=>Math.abs(e.position)<Math.abs(n.y)?e:{index:i,position:n.y},{index:0,position:e[0].y});return n.index}function A(e){let{withTabs:n}=e,[i,r]=(0,t.useState)(0),[o,l]=(0,t.useState)([]),d=(0,t.useRef)([]),u=(0,a.useRouter)(),h=o.filter(e=>e.depth>1),m=()=>{r(P(d.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,t.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let n=[];for(let i=0;i<e.length;i+=1){let s=e[i];s.id&&n.push({depth:parseInt(s.getAttribute("data-order"),10),content:s.getAttribute("data-heading")||"",id:s.id,getNode:()=>document.getElementById(s.id)})}return n}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return d.current=e,l(e),r(P(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),0===h.length)return null;let p=h.map((e,n)=>(0,s.jsx)(c.x,{component:"a",fz:"sm",className:S().link,mod:{active:i===n},href:"#".concat(e.id),__vars:{"--toc-link-offset":"".concat(e.depth-1)},onClick:n=>{n.preventDefault(),u.replace("".concat(u.pathname,"#").concat(e.id))},children:e.content},e.id));return(0,s.jsx)(k.x,{component:"nav",mod:{"with-tabs":n},className:S().wrapper,children:(0,s.jsx)("div",{className:S().inner,children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:S().header,children:[(0,s.jsx)(z.Z,{style:{width:(0,N.h)(20),height:(0,N.h)(20)},stroke:1.5}),(0,s.jsx)(c.x,{className:S().title,children:"Table of contents"})]}),(0,s.jsx)(w.x.Autosize,{mah:"calc(100vh - ".concat((0,N.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,s.jsx)("div",{className:S().items,children:p})})]})})})}var D=i(2752),E=i.n(D);function I(e){let{children:n,...i}=e;return(0,s.jsx)(c.x,{component:"span","data-docs-inline-code":!0,dangerouslySetInnerHTML:{__html:n.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/!important!/g,"<b>Important</b>")},fz:"sm",...i})}function R(e){let{data:n,component:i,fixedLayout:t=!0,...r}=e,a=Object.keys(n.selectors).map(e=>(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsx)(o.i.Td,{children:e}),(0,s.jsx)(o.i.Td,{children:(0,s.jsxs)(m,{children:[".mantine-",i,"-",e]})}),(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(I,{fz:"sm",children:n.selectors[e]})})]},e));return(0,s.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,s.jsxs)(o.i,{layout:t?"fixed":void 0,...r,children:[(0,s.jsx)(o.i.Thead,{children:(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsx)(o.i.Th,{w:t?210:void 0,children:"Selector"}),(0,s.jsx)(o.i.Th,{w:t?310:void 0,children:"Static selector"}),(0,s.jsx)(o.i.Th,{children:"Description"})]})}),(0,s.jsx)(o.i.Tbody,{children:a})]})})}function L(e){let{data:n,fixedLayout:i=!0,...t}=e,r=Object.keys(n.vars).reduce((e,i)=>(Object.keys(n.vars[i]).forEach((t,r)=>{e.push((0,s.jsxs)(o.i.Tr,{children:[0===r&&(0,s.jsx)(o.i.Td,{rowSpan:Object.keys(n.vars[i]).length,children:i}),(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(m,{children:t})}),(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(I,{fz:"sm",children:n.vars[i][t]})})]},"".concat(i,"-").concat(t)))}),e),[]);return(0,s.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,s.jsxs)(o.i,{layout:i?"fixed":void 0,...t,children:[(0,s.jsx)(o.i.Thead,{children:(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsx)(o.i.Th,{w:i?210:void 0,children:"Selector"}),(0,s.jsx)(o.i.Th,{w:i?310:void 0,children:"Variable"}),(0,s.jsx)(o.i.Th,{children:"Description"})]})}),(0,s.jsx)(o.i.Tbody,{children:r})]})})}function M(e){var n,i,t;let{data:r,fixedLayout:a=!0,...l}=e,c=null===(n=r.modifiers)||void 0===n?void 0:n.some(e=>!!e.condition),d=null===(i=r.modifiers)||void 0===i?void 0:i.some(e=>!!e.value),u=(null===(t=r.modifiers)||void 0===t?void 0:t.map((e,n)=>(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsx)(o.i.Td,{children:Array.isArray(e.selector)?e.selector.join(", "):e.selector}),(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(m,{children:e.modifier})}),c&&(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(I,{fz:"sm",children:e.condition||"–"})}),d&&(0,s.jsx)(o.i.Td,{children:(0,s.jsx)(I,{fz:"sm",children:e.value||"–"})})]},n)))||[];return(0,s.jsx)(o.i.ScrollContainer,{minWidth:600,children:(0,s.jsxs)(o.i,{layout:a?"fixed":void 0,...l,children:[(0,s.jsx)(o.i.Thead,{children:(0,s.jsxs)(o.i.Tr,{children:[(0,s.jsx)(o.i.Th,{w:a?210:void 0,children:"Selector"}),(0,s.jsx)(o.i.Th,{w:a?310:void 0,children:"Attribute"}),c&&(0,s.jsx)(o.i.Th,{children:"Condition"}),d&&(0,s.jsx)(o.i.Th,{children:"Value"})]})}),(0,s.jsx)(o.i.Tbody,{children:u})]})})}var V=i(2118),F=i.n(V);function q(e){let{component:n,componentPrefix:i,data:t}=e;if(!t)return(0,s.jsx)(x,{errorOf:"Styles API"});let r=_({component:n,componentPrefix:i});return(0,s.jsxs)("div",{className:F().root,children:[(0,s.jsxs)("div",{className:F().section,children:[(0,s.jsxs)(j.D,{order:2,className:F().title,children:[r," selectors"]}),(0,s.jsx)(R,{component:n,data:t})]}),Object.keys(t.vars).length>0&&(0,s.jsxs)("div",{className:F().section,children:[(0,s.jsxs)(j.D,{order:2,className:F().title,children:[r," CSS variables"]}),(0,s.jsx)(L,{data:t})]}),Array.isArray(t.modifiers)&&t.modifiers.length>0&&(0,s.jsxs)("div",{className:F().section,children:[(0,s.jsxs)(j.D,{order:2,className:F().title,children:[r," data attributes"]}),(0,s.jsx)(M,{data:t})]})]})}var O=i(8970),Z=i(531),H=i(2658),U=i(1363),W=i(3001),B=i(7040),G=i(103),X=i(7923),$=i(6239),J=i.n($);function Y(e){let{className:n,...i}=e,t=(0,B.rZ)();return(0,s.jsx)(G.V,{className:(0,d.Z)(J().root,n),icon:(0,s.jsx)(W.Z,{className:J().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,X.m)(t.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,X.m)(t.colors.blue[4],.2)},...i})}var K=i(6938),Q=i.n(K);function ee(e){let{id:n,children:i,order:t=2,...r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:n,"data-heading":i,"data-order":t,className:Q().titleOffset}),(0,s.jsx)(j.D,{order:t,className:Q().title,...r,children:(0,s.jsx)("a",{className:(0,d.Z)(Q().titleLink,"mantine-focus-auto"),href:"#".concat(n),children:i})})]})}let en=e=>n=>(0,s.jsx)(ee,{order:e,...n});function ei(e){let{children:n}=e;return(0,s.jsx)(U.P,{className:Q().code,code:n.props.children,language:function(e){let n=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return n&&n.groups&&n.groups.lang?n.groups.lang:"tsx"}(n)})}function es(e){return(0,s.jsx)("p",{className:Q().paragraph,...e})}function et(e){return(0,s.jsx)("ul",{className:Q().ul,...e})}function er(e){return(0,s.jsx)("li",{className:Q().li,...e})}function ea(e){let{href:n,...i}=e;return(0,s.jsx)(p.e,{className:Q().link,href:n,...i})}function eo(e){return{img:Z.E,ul:et,li:er,p:es,a:ea,blockquote:Y,code:O.E,h1:en(1),h2:en(2),h3:en(3),h4:en(4),h5:en(5),h6:en(6),pre:ei,Demo:H.B,...e}}function el(e){let{components:n,data:i,componentPrefix:t}=e,r=n.map(e=>(0,s.jsx)("div",{className:F().group,children:(0,s.jsx)(q,{component:e,componentPrefix:t,data:i[e]})},e));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:F().groupsHeader,children:[(0,s.jsx)(ee,{style:{marginTop:0},children:"Styles API"}),(0,s.jsxs)(es,{style:{marginTop:0},children:[(0,s.jsx)(O.E,{children:n[0]})," component supports"," ",(0,s.jsx)(ea,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"Styles API"}),". With Styles API, you can customize styles of any inner element. Follow"," ",(0,s.jsx)(ea,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"the documentation"})," ","to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles."]})]}),r]})}function ec(e){let{children:n,docgen:i,componentsProps:o,componentsStyles:l,stylesApiData:c,componentPrefix:d}=e,u=(0,a.useRouter)(),[h,m]=(0,t.useState)("docs"),p=Array.isArray(o),x=Array.isArray(l);return((0,t.useEffect)(()=>{m(window.location.search.replace("?t=","")||"docs")},[]),p||x)?(0,s.jsxs)(r.m,{variant:"outline",value:h,classNames:{root:E().root,list:E().tabsList,tab:E().tab},keepMounted:!1,radius:"md",onChange:e=>{u.replace("docs"===e?u.pathname:"".concat(u.pathname,"?t=").concat(e)),m(e)},children:[(0,s.jsx)("div",{className:E().tabsWrapper,children:(0,s.jsxs)(r.m.List,{children:[(0,s.jsx)(r.m.Tab,{value:"docs",children:"Documentation"}),p&&(0,s.jsx)(r.m.Tab,{value:"props",children:"Props"}),x&&(0,s.jsx)(r.m.Tab,{value:"styles-api",children:"Styles API"})]})}),(0,s.jsx)(r.m.Panel,{value:"docs",children:(0,s.jsxs)("div",{className:E().tabContent,"data-main":!0,children:[(0,s.jsx)("div",{className:E().main,id:"mdx",children:n}),(0,s.jsx)("div",{className:E().tableOfContents,children:(0,s.jsx)(A,{withTabs:!0})})]})}),(0,s.jsx)(r.m.Panel,{value:"props",children:(0,s.jsx)("div",{className:E().tabContent,"data-secondary":!0,children:(0,s.jsx)(T,{components:o,data:i})})}),(0,s.jsx)(r.m.Panel,{value:"styles-api",children:(0,s.jsx)("div",{className:E().tabContent,"data-secondary":!0,children:c&&(0,s.jsx)(el,{data:c,components:l,componentPrefix:d})})})]}):null}var ed=i(7653),eu=i(5083),eh=i(1487),em=i(1864),ep=i(2972),ex=i(4010),eg=i(3738),ej=i(5608),ef=i(4987),eb=i(2657),e_={i8:"0.1.8"},ev=i(4128),ey=i.n(ev),eT=i(3266),ek=i.n(eT);function eN(e){let{label:n,icon:i,children:t,link:r}=e,a=r?(0,s.jsxs)("a",{href:r,target:"_blank",className:ek().body,rel:"noreferrer",children:[(0,s.jsx)("div",{className:ek().icon,children:i}),(0,s.jsx)("div",{className:ek().content,children:t})]}):(0,s.jsxs)("div",{className:ek().body,children:[(0,s.jsx)("div",{className:ek().icon,children:i}),(0,s.jsx)("div",{className:ek().content,children:t})]});return(0,s.jsxs)("div",{className:ek().root,children:[(0,s.jsx)("div",{className:ek().label,children:n}),a]})}function ew(e){let{data:n}=e;return(0,s.jsx)("header",{className:ey().root,children:(0,s.jsxs)(ed.W,{size:"lg",children:[(0,s.jsx)(j.D,{className:ey().title,children:n.packageName}),(0,s.jsx)(c.x,{className:ey().description,children:n.packageDescription}),(0,s.jsxs)("div",{className:ey().links,children:[(0,s.jsx)(eN,{label:"Version",icon:(0,s.jsx)(ex.Z,{size:18,stroke:1.5}),children:(0,s.jsxs)(eu.C,{children:["v",e_.i8]})}),(0,s.jsx)(eN,{label:"Source",icon:(0,s.jsx)(em.E,{size:16}),link:n.repositoryUrl,children:"View source code"}),(0,s.jsx)(eN,{label:"Package",icon:(0,s.jsx)(ep._,{size:16}),link:"https://npmjs.com/package/".concat(n.packageName),children:n.packageName}),(0,s.jsx)(eN,{label:"See More",icon:(0,s.jsx)(eg.Z,{size:16}),link:"https://mantine-extensions.vercel.app/",children:"Mantine Extensions"}),(0,s.jsx)(eN,{label:"Docs",icon:(0,s.jsx)(ej.Z,{size:18,stroke:1.5}),link:n.mdxFileUrl,children:"Edit this page"}),(0,s.jsxs)(eN,{label:"Built by",icon:(0,s.jsx)(ef.Z,{size:18,stroke:1.5}),link:"https://github.com/".concat(n.author.githubUsername),children:[n.author.name," ",(0,s.jsxs)(c.x,{span:!0,c:"dimmed",inherit:!0,children:["(@",n.author.githubUsername,")"]})]}),(0,s.jsx)(eN,{label:"License",icon:(0,s.jsx)(eb.Z,{size:18,stroke:1.5}),link:n.licenseUrl,children:"MIT"}),(0,s.jsx)(eh.Z,{mt:18,children:(0,s.jsx)("a",{href:"https://www.buymeacoffee.com/johnfazioli",children:(0,s.jsx)("img",{alt:"Buy me a coffee",height:32,src:"https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=johnfazioli&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"})})})]})]})})}var ez=i(805),eC=i(2153),eS=i(8323),eP=i(1328),eA=i(633),eD=i(4943),eE=i(2206),eI=i(2905),eR=i(5966);let eL={packageName:"@gfazioli/mantine-rings-progress",packageDescription:"A Mantine component that replicates the progress rings of Apple Watch.",mdxFileUrl:"https://github.com/gfazioli/mantine-rings-progress/blob/master/docs/pages/index.mdx",repositoryUrl:"https://github.com/gfazioli/mantine-rings-progress",licenseUrl:"https://github.com/gfazioli/mantine-rings-progress/blob/master/LICENSE",author:{name:"Giovambattista Fazioli",githubUsername:"gfazioli"}};var eM=i(186),eV=i.n(eM);function eF(e){let{children:n}=e,{toggleColorScheme:i}=(0,ez.X)();(0,eA.A)([["mod + J",i]]);let t=eL.packageName.replace("@gfazioli/","").replaceAll("-"," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ");return(0,s.jsxs)(eC.V,{header:{height:60},children:[(0,s.jsx)(eC.V.Header,{className:eS.Z.classNames.zeroRight,children:(0,s.jsxs)(ed.W,{size:"lg",px:"md",className:eV().inner,children:[(0,s.jsxs)(eh.Z,{children:[(0,s.jsx)("a",{href:"https://mantine.dev/",target:"_blank",className:(0,d.Z)("mantine-focus-auto",eV().logo),rel:"noreferrer",children:(0,s.jsx)(eI.D,{size:30,type:"mark"})}),(0,s.jsx)(j.D,{order:2,children:t})]}),(0,s.jsxs)(eh.Z,{gap:10,children:[(0,s.jsx)(eP.A,{visibleFrom:"sm",size:36,radius:8,component:"a",href:"https://undolog.substack.com/",target:"_blank",rel:"noreferrer","aria-label":"Undolog",title:"Undolog",variant:"subtle",children:(0,s.jsx)("img",{width:36,src:"https://substackcdn.com/image/fetch/f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5d483192-7bf9-4d61-aaf7-ced1a3f4adf8_1024x1024.png",alt:"Undolog"})}),(0,s.jsx)(eD.q,{visibleFrom:"sm",githubLink:eL.repositoryUrl,withDirectionToggle:!1,withSearch:!1,discordLink:eR.$.discordLink})]}),(0,s.jsx)(eh.Z,{hiddenFrom:"sm",children:(0,s.jsx)(eE.M,{})})]})}),(0,s.jsx)(eC.V.Main,{children:(0,s.jsx)("div",{className:eV().main,children:n})})]})}var eq=JSON.parse('{"RingsProgress":{"props":{"animate":{"description":"Animate","name":"animate","required":false,"type":{"name":"boolean"}},"animationDuration":{"description":"Animation duration in ms","name":"animationDuration","required":false,"type":{"name":"number"}},"animationSteps":{"description":"Animation steps","name":"animationSteps","required":false,"type":{"name":"number"}},"animationTimingFunction":{"description":"Animation timing function to define the speed curve of the animation","name":"animationTimingFunction","required":false,"type":{"name":"\\"linear\\" | \\"ease\\" | \\"ease-in\\" | \\"ease-out\\" | \\"ease-in-out\\" | \\"ease-in-cubic\\" | \\"ease-out-cubic\\" | \\"ease-in-out-cubic\\"","raw":"\\"linear\\" | \\"ease\\" | \\"ease-in\\" | \\"ease-out\\" | \\"ease-in-out\\" | \\"ease-in-cubic\\" | \\"ease-out-cubic\\" | \\"ease-in-out-cubic\\"","value":[{"value":"\\"linear\\""},{"value":"\\"ease\\""},{"value":"\\"ease-in\\""},{"value":"\\"ease-out\\""},{"value":"\\"ease-in-out\\""},{"value":"\\"ease-in-cubic\\""},{"value":"\\"ease-out-cubic\\""},{"value":"\\"ease-in-out-cubic\\""}]}},"gap":{"description":"Gap between rings","name":"gap","required":false,"type":{"name":"number"}},"label":{"description":"Label displayed in the center of the ring","name":"label","required":false,"type":{"name":"React.ReactNode"}},"rings":{"description":"List of the rings","name":"rings","required":true,"type":{"name":"RingProgressSection[]"}},"rootColorAlpha":{"description":"Root color alpha","name":"rootColorAlpha","required":false,"type":{"name":"number"}},"roundCaps":{"description":"Sets whether the edges of the progress circle are rounded","name":"roundCaps","required":false,"type":{"name":"boolean"}},"size":{"description":"Width and height of the progress ring","name":"size","required":false,"type":{"name":"number"}},"thickness":{"description":"Ring thickness","name":"thickness","required":false,"type":{"name":"number"}}}}}'),eO=i(8395),eZ=i(3276),eH=i(8646),eU=i(1555),eW=i.n(eU);function eB(e){let{packages:n,dev:i}=e,[t,r]=(0,eO.I)({key:"script-tab",defaultValue:0});return(0,s.jsx)(eZ.Q,{classNames:{root:eW().root},activeTab:t,onTabChange:r,code:[{fileName:"yarn",code:"yarn add ".concat(i?"--dev ":"").concat(n),language:"bash",icon:(0,s.jsx)(eH.z,{className:eW().icon,size:16})},{fileName:"npm",code:"npm install ".concat(i?"--save-dev ":"").concat(n),language:"bash",icon:(0,s.jsx)(ep._,{className:eW().icon,size:16})}]})}var eG=i(9662),eX=i(7226),e$=i(1662),eJ=i(4710),eY=i(6415),eK=i(401),eQ=i(9104);function e0({size:e,thickness:n,sum:i,value:s,root:t,offset:r}){let a=(.9*e-2*n)/2,o=Math.PI*a*2/100,l=t||void 0===s?`${(100-i)*o}, ${i*o}`:`${s*o}, ${(100-s)*o}`;return{strokeWidth:Number.isNaN(n)?12:n,cx:e/2||0,cy:e/2||0,r:a||0,transform:t?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:l,strokeDashoffset:t?0:r||0}}function e2({size:e,value:n,offset:i,sum:s,thickness:r,root:a,color:o,lineRoundCaps:l,tooltip:c,getStyles:d,display:u,...h}){let m=(0,B.rZ)();return a?t.createElement(k.x,{component:"circle",...h,...d("curve"),__vars:{"--curve-color":o?(0,eQ.p)(o,m):void 0},fill:"none",strokeLinecap:l?"round":"butt",...e0({sum:s,size:e,thickness:r,value:n,offset:i,root:a})}):t.createElement(eK.u.Floating,{disabled:!c,label:c},t.createElement(k.x,{component:"circle",...h,...d("curve"),__vars:{"--curve-color":o?(0,eQ.p)(o,m):void 0},fill:"none",strokeLinecap:l?"round":"butt",...e0({sum:s,size:e,thickness:r,value:n,offset:i,root:a})}))}e2.displayName="Curve";var e1={root:"me-b32e4812",svg:"me-d43b5134",curve:"me-b1ca1fbf",label:"me-b23f9dc4"};let e3={size:120,thickness:12,animate:!1,animationDuration:1e3,animationTimingFunction:"ease",animationSteps:60},e6=(0,eY.Z)((e,{size:n,thickness:i})=>({root:{"--rp-size":(0,N.h)(n),"--rp-label-offset":(0,N.h)(2*i)}})),e5=(0,eG.d5)((e,n)=>{let i=(0,eX.w)("RingProgress",e3,e),{classNames:s,className:r,style:a,styles:o,unstyled:l,vars:c,label:d,sections:u,size:h,thickness:m,roundCaps:p,rootColor:x,animate:g,animationSteps:j,animationDuration:f,animationTimingFunction:b,..._}=i,v={linear:e=>e,ease:e=>e<.5?.5*(2*e)*(2*e):-.5*((2*e-1)*(2*e-3)-1),"ease-in":e=>e*e,"ease-out":e=>e*(2-e),"ease-in-out":e=>e<.5?.5*e*e:-.5*((2*e-1)*(2*e-3)-1),"ease-in-cubic":e=>e*e*e,"ease-out-cubic":e=>--e*e*e+1,"ease-in-out-cubic":e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},[y,T]=t.useState(u.map(e=>({...e,...g&&{value:0}})));t.useEffect(()=>{g&&function(){let e=u[0],n=e.value/j,i=0,s=v[b],t=setInterval(()=>{i++;let e=i/j,r=s(e),a=n*r*j;T(e=>[{...e[0],value:a}]),i===j&&clearInterval(t)},f/j)}()},[g,f,j,b,u]);let N=(0,e$.y)({name:"RingProgress",classes:e1,props:i,className:r,style:a,classNames:s,styles:o,unstyled:l,vars:c,varsResolver:e6}),w=Math.min(m||12,(h||120)/4),z=(function({size:e,thickness:n,sections:i,renderRoundedLineCaps:s,rootColor:t}){let r=i.reduce((e,n)=>e+n.value,0),a=Math.PI*((.9*e-2*n)/2)*2,o=a,l=[],c=[];for(let e=0;e<i.length;e+=1)l.push({sum:r,offset:o,data:i[e],root:!1}),o-=i[e].value/100*a;if(l.push({sum:r,offset:o,data:{color:t},root:!0}),c.push({...l[l.length-1],lineRoundCaps:!1}),l.length>2){c.push({...l[0],lineRoundCaps:s}),c.push({...l[l.length-2],lineRoundCaps:s});for(let e=1;e<=l.length-3;e+=1)c.push({...l[e],lineRoundCaps:!1})}else c.push({...l[0],lineRoundCaps:s});return c})({size:h,thickness:w,sections:y,renderRoundedLineCaps:p,rootColor:x}).map(({data:e,sum:n,root:i,lineRoundCaps:s,offset:r},a)=>t.createElement(e2,{...e,key:a,size:h,thickness:w,sum:n,offset:r,color:e?.color,root:i,lineRoundCaps:s,getStyles:N}));return t.createElement(k.x,{...N("root"),size:h,ref:n,..._},t.createElement("svg",{...N("svg")},z),d&&t.createElement("div",{...N("label")},d))});e5.classes=e1,e5.displayName="RingProgress";var e8={root:"me-726a891f",ring:"me-726a726d"};let e4={size:120,thickness:12,gap:8,animate:!1,roundCaps:!0,animationDuration:1e3,animationSteps:60,animationTimingFunction:"ease",rootColorAlpha:.15},e9=(0,eG.d5)((e,n)=>{let i=(0,B.rZ)(),s=(0,eX.w)("Rings",e4,e),{rings:r,size:a,thickness:o,gap:l,rootColorAlpha:c,label:d,animate:u,animationSteps:h,animationDuration:m,animationTimingFunction:p,roundCaps:x,...g}=s,j=(0,e$.y)({name:"RingsProgress",props:s,classes:e8});return t.createElement(k.x,{ref:n,...j("root"),...g},r.map((e,n)=>{let s=(0,eJ.E)({color:e.color,theme:i});return t.createElement(e5,{label:n===r.length-1?d:null,key:e.value+e.color+n,rootColor:(0,X.F)(s.value,c),size:a-n*((o+l)*2),thickness:o,roundCaps:x,animate:u,animationDuration:m,animationSteps:h,animationTimingFunction:p,left:n*(o+l),top:n*(o+l),...j("ring"),styles:{label:{position:"absolute",top:"50%",left:"50% ",transform:"translate(-50%,-50%)",right:"auto",color:"red"}},sections:[e]})}))});e9.classes=e8,e9.displayName="RingsProgress";var e7=i(4022);let ne={type:"configurator",component:function(e){return(0,s.jsx)(e7.M,{children:(0,s.jsx)(k.x,{h:e.size,w:e.size,children:(0,s.jsx)(e9,{rings:[{value:20,color:"cyan"},{value:50,color:"red"},{value:80,color:"#f90"}],...e})})})},minHeight:300,code:"\nimport { RingsProgress } from '@gfazioli/mantine-rings-progress';\n\nfunction Demo() {\n  const rings = [\n    { value: 20, color: 'cyan' },\n    { value: 50, color: 'red' },\n    { value: 80, color: '#f90' },\n  ];\n\n  return (\n    <RingsProgress rings={rings}{{props}} />\n  );\n}\n",controls:[{prop:"animate",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"size",type:"number",min:100,max:640,initialValue:180,libraryValue:120},{prop:"gap",type:"number",min:1,max:32,initialValue:4,libraryValue:4},{prop:"thickness",type:"number",initialValue:12,libraryValue:12},{prop:"rootColorAlpha",type:"number",min:0,max:1,step:.1,initialValue:.15,libraryValue:.15},{prop:"animationDuration",type:"number",min:100,max:5e3,step:1,initialValue:1e3,libraryValue:1e3},{prop:"animationSteps",type:"number",min:10,max:120,step:1,initialValue:60,libraryValue:60},{prop:"animationTimingFunction",type:"select",data:["linear","ease","ease-in","ease-out","ease-in-out","ease-in-cubic","ease-out-cubic","ease-in-out-cubic"],initialValue:"ease",libraryValue:"ease"},{prop:"label",type:"string",initialValue:"",libraryValue:void 0}]};var nn=i(9681);let ni={type:"code",component:function(e){return(0,s.jsx)(e7.M,{children:(0,s.jsx)(k.x,{h:100,w:100,children:(0,s.jsx)(e9,{size:100,rings:[{value:20,color:"green"}],label:(0,s.jsx)(eP.A,{color:"teal",variant:"light",radius:"xl",size:"xl",children:(0,s.jsx)(nn.Z,{style:{width:(0,N.h)(22),height:(0,N.h)(22)}})})})})})},minHeight:100,code:'\nimport { RingsProgress } from \'@gfazioli/mantine-rings-progress\';\n\nfunction Demo() {\n  const rings = [{ value: 20, color: \'green\' }];\n\n  return (\n    <RingsProgress\n      size={100}\n      rings={rings}\n      label={\n        <ActionIcon color="teal" variant="light" radius="xl" size="xl">\n          <IconCheck style={{ width: rem(22), height: rem(22) }} />\n        </ActionIcon>\n      }\n    />\n  );\n}\n'},ns={type:"code",component:function(e){return(0,s.jsx)(e7.M,{children:(0,s.jsx)(k.x,{h:140,w:140,children:(0,s.jsx)(e9,{size:140,rings:[{value:20,color:"green"},{value:80,color:"blue"}],label:(0,s.jsx)(eP.A,{color:"yellow",variant:"filled",radius:"xl",size:"xl",children:(0,s.jsx)(nn.Z,{style:{width:(0,N.h)(22),height:(0,N.h)(22)}})})})})})},minHeight:100,code:'\nimport { RingsProgress } from \'@gfazioli/mantine-rings-progress\';\n\nfunction Demo() {\n  const rings = [\n    { value: 20, color: \'green\' },\n    { value: 80, color: \'blue\' },\n  ];\n\n  return (\n    <RingsProgress\n      size={140}\n      rings={rings}\n      label={\n        <ActionIcon color="yellow" variant="filled" radius="xl" size="xl">\n          <IconCheck style={{ width: rem(22), height: rem(22) }} />\n        </ActionIcon>\n      }\n    />\n  );\n}\n'},nt={type:"code",component:function(e){return(0,s.jsx)(e7.M,{children:(0,s.jsx)(k.x,{h:140,w:140,children:(0,s.jsx)(e9,{size:140,rings:[{value:20,color:"green",tooltip:"Fitness – 40 Gb"},{value:80,color:"blue",tooltip:"Running – 50 minutes"}],label:(0,s.jsx)(eP.A,{color:"yellow",variant:"filled",radius:"xl",size:"xl",children:(0,s.jsx)(nn.Z,{style:{width:(0,N.h)(22),height:(0,N.h)(22)}})})})})})},minHeight:100,code:"\nimport { RingsProgress } from '@gfazioli/mantine-rings-progress';\n\nfunction Demo() {\n  const rings = [\n    { value: 20, color: 'green', tooltip: 'Fitness – 40 Gb' },\n    { value: 80, color: 'blue', tooltip: 'Running – 50 minutes' },\n  ];\n\n  return (\n    <RingsProgress\n      size={140}\n      rings={rings}\n      label={\n        <ActionIcon color=\"yellow\" variant=\"filled\" radius=\"xl\" size=\"xl\">\n          <IconCheck style={{ width: rem(22), height: rem(22) }} />\n        </ActionIcon>\n      }\n    />\n  );\n}\n"};function nr(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...eo(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(eB,{packages:"@gfazioli/mantine-rings-progress"}),"\n",(0,s.jsx)(n.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import '@gfazioli/mantine-rings-progress/styles.css';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can import styles within a layer ",(0,s.jsx)(n.code,{children:"@layer mantine-rings-progress"})," by importing ",(0,s.jsx)(n.code,{children:"@gfazioli/mantine-rings-progress/styles.layer.css"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import '@gfazioli/mantine-rings-progress/styles.layer.css';\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i,{data:ne}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Mantine RingProgress"})}),"\n",(0,s.jsxs)(n.p,{children:["We're usign a custom version of the ",(0,s.jsx)(n.code,{children:"RingProgress"})," component from the ",(0,s.jsx)(n.code,{children:"mantine"})," library to render the rings."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"label"})," prop can be a string or a component. Try to change the label on the above configurator. You may use also an emoji \uD83D\uDE0A or a custom component."]}),"\n",(0,s.jsx)(n.h2,{id:"label",children:"Label"}),"\n",(0,s.jsx)(i,{data:ni}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"label"})," prop can be a string or a component."]}),"\n",(0,s.jsx)(i,{data:ns}),"\n",(0,s.jsx)(n.h2,{id:"tooltips",children:"Tooltips"}),"\n",(0,s.jsxs)(n.p,{children:["Despite the ",(0,s.jsx)(n.code,{children:"RingProgress"})," component from the ",(0,s.jsx)(n.code,{children:"mantine"})," library has a ",(0,s.jsx)(n.code,{children:"tooltip"})," prop, we discourage its use. The tooltip will be rendered on the top of the rings and it will be hard to read the label."]}),"\n",(0,s.jsx)(i,{data:nt})]})}function na(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...eo(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(nr,{...e})}):nr(e)}function no(){return(0,s.jsxs)(eF,{children:[(0,s.jsx)(ew,{data:eL}),(0,s.jsx)(ec,{docgen:eq,componentsProps:["RingsProgress"],children:(0,s.jsx)(na,{})})]})}},2752:function(e){e.exports={root:"DocsTabs_root__3_liq",tabsWrapper:"DocsTabs_tabsWrapper__IRW55",tabsList:"DocsTabs_tabsList__WAMMe",tab:"DocsTabs_tab__mfbTe",tabContent:"DocsTabs_tabContent__xZoIg",main:"DocsTabs_main__bXjjr",tableOfContents:"DocsTabs_tableOfContents__m_mWC"}},1555:function(e){e.exports={root:"InstallScript_root__C12dR",icon:"InstallScript_icon__2DGM0"}},6938:function(e){e.exports={paragraph:"MdxElements_paragraph__Y192O",link:"MdxElements_link__Lt3iC",ul:"MdxElements_ul__hdTt4",li:"MdxElements_li__KI_j2",title:"MdxElements_title__YHwzc",titleLink:"MdxElements_titleLink__MBV9J",titleOffset:"MdxElements_titleOffset__Vn_Uo",code:"MdxElements_code__C3Y34"}},6239:function(e){e.exports={root:"MdxInfo_root__m_cCs",icon:"MdxInfo_icon__hDmDv"}},4128:function(e){e.exports={root:"PageHeader_root__u_xWw",title:"PageHeader_title__gP726",description:"PageHeader_description__gCV5r",links:"PageHeader_links__3ws49"}},3266:function(e){e.exports={root:"PageHeaderLink_root__xmmCT",label:"PageHeaderLink_label__7Fad9",body:"PageHeaderLink_body__qvtDJ",icon:"PageHeaderLink_icon__d9jEr"}},5628:function(e){e.exports={root:"PropsTablesList_root__c_Say",searchIcon:"PropsTablesList_searchIcon__9N6KL",title:"PropsTablesList_title__RXbmG",section:"PropsTablesList_section__nwP7g",search:"PropsTablesList_search__uiqGP"}},186:function(e){e.exports={inner:"Shell_inner__vEmfO",main:"Shell_main__lcVaI",logo:"Shell_logo__4Ivhz"}},2118:function(e){e.exports={root:"StylesApiTable_root__obqpY",groupsHeader:"StylesApiTable_groupsHeader__GDU_x",group:"StylesApiTable_group__X_sw5",title:"StylesApiTable_title__inUP0",section:"StylesApiTable_section__nAJMp"}},1251:function(e){e.exports={code:"TableInlineCode_code__TNUKa"}},1598:function(e){e.exports={wrapper:"TableOfContents_wrapper__BAgli",inner:"TableOfContents_inner__au2gv",link:"TableOfContents_link__X__0J",header:"TableOfContents_header__5Tlsz",title:"TableOfContents_title__FWq20",items:"TableOfContents_items__s8ECn"}}},function(e){e.O(0,[5896,9774,2888,179],function(){return e(e.s=9536)}),_N_E=e.O()}]);