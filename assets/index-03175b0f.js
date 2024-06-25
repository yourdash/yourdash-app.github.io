import{r as t,u as T,j as e,v as $,i as P,U as g,H as p,M,w as z,h as H,x as w,e as j,I as U,C as L,R,a as v}from"./index-35df064e.js";import{D as I}from"./DropdownButton-7aa3cdf8.js";import{T as E}from"./TextBox-f6a9c52c.js";import{T as S}from"./TextInput-b9d5c21b.js";const J="_main_9ll6d_6",X="_logo_9ll6d_16",K="_tagline_9ll6d_21",Q={main:J,logo:X,tagline:K},V="_options_1m2gj_6",Z="_heading_1m2gj_15",ee="_tagline_1m2gj_22",se="_logo_1m2gj_29",k={options:V,heading:Z,tagline:ee,logo:se},te=({setMenuPage:s})=>{t.useState(!1),t.useState([]);const n=T();return e.jsxs("main",{className:"animate__animated animate__fadeIn",children:[e.jsx($,{className:P(k.logo,"animate__animated animate__fadeInUp animate__duration_1000ms"),icon:g.YourDashLogo,preserveColor:!0}),e.jsx(p,{level:1,className:P(k.heading,"animate__animated animate__fadeInDown animate__duration_1000ms"),children:"YourDash Chatbots"}),e.jsx("p",{className:k.tagline,children:"Create and manage customised chatbots for external chat services"}),e.jsxs("section",{className:k.options,children:[e.jsx(M,{onClick:()=>{s(O.TUTORIAL)},children:"Get Started"}),e.jsx(z,{onClick:()=>{n("/app/a/chatbots/list-bots")},children:"Skip Tutorial"})]})]})},ae="_options_1nztb_6",ne="_description_1nztb_15",oe="_heading_1nztb_26",D={options:ae,description:ne,heading:oe},ce=({setMenuPage:s})=>e.jsxs("div",{children:[e.jsx(p,{className:D.heading,level:1,children:"Welcome to YourDash Chatbots"}),e.jsx("p",{className:D.description,children:"YourDash Chatbots is an application for creating and managing chatbots across multiple social platforms."}),e.jsx("div",{className:D.options,children:e.jsx(M,{onClick:()=>{s(O.DEFAULT)},children:"Continue"})})]});var O=(s=>(s[s.DEFAULT=0]="DEFAULT",s[s.TUTORIAL=1]="TUTORIAL",s[s.TERMS_AND_CONDITIONS=2]="TERMS_AND_CONDITIONS",s))(O||{});const re=()=>{const[s,n]=t.useState(0);switch(s){case 0:return e.jsx(te,{setMenuPage:n});case 1:return e.jsx(ce,{setMenuPage:n});default:return e.jsxs(e.Fragment,{children:["UNKNOWN CHATBOTS_STARTUP_MENU_PAGE: ",s]})}},ie=()=>e.jsx("main",{className:Q.main,children:e.jsx(re,{})}),le="_component_18kvj_6",de="_tabsContainer_18kvj_12",me="_activeTabIndicator_18kvj_19",ue="_tab_18kvj_12",pe="_tabSeparator_18kvj_58",he="_sepatator_18kvj_61",_e="_componentContent_18kvj_72",b={component:le,tabsContainer:de,activeTabIndicator:me,tab:ue,tabSeparator:pe,sepatator:he,componentContent:_e},xe=({tabs:s})=>{const[n,i]=t.useState(0),[m,d]=t.useState(0),[o,_]=t.useState(0),c=H.useRef(null);return t.useEffect(()=>{var x,r,N;d((((x=c.current)==null?void 0:x.clientWidth)||0)/8*6),_((((r=c.current)==null?void 0:r.offsetLeft)||0)+(((N=c.current)==null?void 0:N.clientWidth)||0)/8)},[]),e.jsxs("div",{className:b.component,children:[e.jsxs("section",{className:b.tabsContainer,children:[e.jsx("div",{className:b.activeTabIndicator,style:{width:m,transform:`translateX(${o}px)`}}),s.map((x,r)=>e.jsx(e.Fragment,{children:e.jsxs("div",{ref:r===0?c:null,className:`${b.tab} ${n===r?b.active:""}`,onClick:()=>{i(r)},children:[x.displayName,n===r&&e.jsx("div",{className:P(b.activeTabIndicator,"animate__animated animate__fadeInUp animate__duration_250ms")})]},x.uuid)}))]}),e.jsx("section",{className:b.componentContent,children:s[n].content})]})},je="_container_1n1rp_6",ge="_heading_1n1rp_16",Ne="_coloredSegment_1n1rp_19",ve="_badges_1n1rp_27",be="_avatarContainer_1n1rp_31",Ce="_avatar_1n1rp_31",fe="_status_1n1rp_44",ye="_badge_1n1rp_27",Se="_content_1n1rp_72",ke="_name_1n1rp_81",Be="_displayName_1n1rp_85",Ie="_username_1n1rp_90",Le="_usernameBadge_1n1rp_97",we="_usernameBadgeIcon_1n1rp_109",De="_separator_1n1rp_112",$e="_addAppButton_1n1rp_118",Pe="_addAppIcon_1n1rp_132",Te="_sectionHeader_1n1rp_135",Me="_bio_1n1rp_140",Ue="_tryMyCommands_1n1rp_151",Oe="_command_1n1rp_156",Fe="_clickToAddNote_1n1rp_163",We="_text_1n1rp_170",qe="_message_1n1rp_175",a={container:je,heading:ge,coloredSegment:Ne,badges:ve,avatarContainer:be,avatar:Ce,status:fe,badge:ye,content:Se,name:ke,displayName:Be,username:Ie,usernameBadge:Le,usernameBadgeIcon:we,separator:De,addAppButton:$e,addAppIcon:Pe,sectionHeader:Te,bio:Me,tryMyCommands:Ue,command:Oe,clickToAddNote:Fe,text:We,message:qe},ze=({username:s,displayName:n,avatarUrl:i,bio:m,tryMyCommands:d,discriminator:o,showAddApplicationButton:_})=>e.jsxs("div",{className:a.container,children:[e.jsxs("div",{className:a.header,children:[e.jsx("div",{className:a.coloredSegment}),e.jsxs("div",{className:a.avatarContainer,children:[e.jsx("img",{alt:"",className:a.avatar,src:i==="internal://ServerError"?"/assets/productLogos/yourdash.svg":i}),e.jsx("div",{className:a.status})]}),e.jsx("div",{className:a.badges,children:e.jsx("div",{className:a.badge,children:"{/}"})})]}),e.jsxs("div",{className:a.content,children:[e.jsxs("div",{className:a.name,children:[e.jsx("span",{className:a.displayName,children:n||"Unknown Bot"}),e.jsxs("span",{className:a.username,children:[!o&&"@",s||"unknown",o&&`#${o}`,e.jsxs("div",{className:a.usernameBadge,children:[e.jsx($,{icon:g.Check,className:a.usernameBadgeIcon}),"BOT"]})]})]}),e.jsx("div",{className:a.separator}),_&&e.jsxs("button",{className:a.addAppButton,children:[e.jsx($,{icon:g.PlusCircle,className:a.addAppIcon}),"Add App"]}),m&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:a.sectionHeader,children:"ABOUT ME"}),e.jsx("p",{className:a.bio,children:m})]}),e.jsx("h3",{className:a.sectionHeader,children:"TRY MY COMMANDS"}),e.jsx("section",{className:a.tryMyCommands,children:d.map(c=>e.jsxs("div",{className:a.command,children:["/",c]},c))}),e.jsx("h3",{className:a.sectionHeader,children:"NOTE"}),e.jsx("div",{className:a.clickToAddNote,children:e.jsx("span",{className:a.text,children:"Click to add a note"})}),e.jsx("input",{className:a.message,type:"text",placeholder:`Message @${s}`})]})]}),Ae=({username:s,displayName:n,bio:i,avatarUrl:m,status:d,commands:o})=>e.jsx(e.Fragment,{children:e.jsx(xe,{tabs:[{content:e.jsx(ze,{username:s,displayName:n,bio:i,avatarUrl:m,tryMyCommands:o,discriminator:"1234"}),displayName:"Discord",uuid:w()},{content:e.jsx("h1",{children:"Coming Soon"}),displayName:"Universal",uuid:w()},{content:e.jsx("h1",{children:"Coming Soon"}),displayName:"Twitter",uuid:w()}]})}),Ye="_page_moq37_6",Ge="_heading_moq37_18",He="_previewPane_moq37_29",Re="_optionsPane_moq37_36",B={page:Ye,heading:Ge,previewPane:He,optionsPane:Re},Ee=()=>{const s=T(),[n,i]=t.useState([]),[m,d]=t.useState(""),[o,_]=t.useState(""),[c,x]=t.useState(""),[r,N]=t.useState(""),[u,h]=t.useState("online"),[F,f]=t.useState(""),[Y,us]=t.useState(""),[W,G]=t.useState(g.ServerError);return t.useEffect(()=>{j.getTeams().then(async l=>{i(await Promise.all(l.map(async q=>({teamName:q.teamName,displayName:await q.getDisplayName()})))),d(l[0].teamName)})},[]),e.jsxs("main",{className:B.page,children:[e.jsxs("header",{className:B.header,children:[e.jsx(U,{icon:g.ChevronLeft,onClick:()=>{window.history.back()}}),e.jsx(p,{level:2,children:"Create Chatbot"})]}),e.jsxs(L,{showBorder:!0,className:B.previewPane,children:[e.jsx(p,{level:2,className:"pb-2",children:"Profile Preview"}),e.jsx(Ae,{username:o,displayName:c,avatarUrl:W,bio:r,status:Y,commands:["ping","pong","foo","bar"]})]}),e.jsxs(L,{showBorder:!0,className:B.optionsPane,children:[e.jsx(p,{level:2,children:"Profile Options"}),e.jsx(I,{items:n?n.map(l=>({label:l.displayName,onClick(){d(l.teamName)}})):[],children:"Select Team"}),e.jsx(p,{level:3,children:"Bot Username"}),e.jsx(S,{preceedingInlay:o&&e.jsx("span",{className:"animate__animated animate__slideInLeft animate__duration_500ms select-none",children:"@"}),onChange:l=>{_(l)},accessibleName:"Bot Username",placeholder:"Bot Username"}),e.jsx(p,{level:3,children:"Bot Name"}),e.jsx(S,{onChange:l=>{x(l)},accessibleName:"Bot Name",placeholder:"Bot Name"}),e.jsx(p,{level:3,children:"Bot Description"}),e.jsx(E,{placeholder:"Description",onChange:l=>{N(l.currentTarget.value)}}),e.jsx(p,{level:3,children:"Bot Avatar"}),e.jsx(S,{accessibleName:"Avatar URL",placeholder:"Avatar URL",defaultValue:"internal://ServerError",onChange:l=>{G(l)}}),e.jsx(p,{level:3,children:"Bot Activity Status"}),e.jsxs("div",{className:"flex gap-2 w-full",children:[e.jsx(I,{items:[{label:"Playing",onClick(){f("Playing")}},{label:"Streaming",onClick(){f("Streaming")}},{label:"Watching",onClick(){f("Watching")}},{label:"Listening",onClick(){f("Listening")}}],children:"Playing"}),e.jsx(S,{className:"flex-grow",onChange:l=>{f(l)},accessibleName:"Status",placeholder:"Status"})]}),e.jsx(p,{level:3,children:"Bot Status"}),e.jsx(I,{items:[{label:"Online",onClick(){h("online")}},{label:"Idle",onClick(){h("idle")}},{label:"Do Not Disturb",onClick(){h("dnd")}},{label:"Invisible",onClick(){h("offline")}}],children:"Online"}),e.jsx(M,{onClick:()=>{j.postJson("/app/chatbots/team/:teamId/create-bot/:botId",{username:o,displayName:c,bio:r,avatarUrl:W},()=>{s(`/app/a/chatbots/team/${j.getUsername()}/manage/${o}`)},l=>{alert(l)})},children:"Create bot"}),e.jsx(z,{onClick:()=>{s("/app/a/chatbots/bot/0/manage/nodes")},children:"DEVELOPER Nodes"})]})]})},Je=()=>e.jsx("div",{children:e.jsx(L,{children:e.jsx(p,{level:3,children:"YourDash Chatbots"})})});var A=(s=>(s[s.SMALL=0]="SMALL",s[s.MEDIUM=1]="MEDIUM",s[s.LARGE=2]="LARGE",s[s.EXTRA_LARGE=3]="EXTRA_LARGE",s[s.ORIGINAL=4]="ORIGINAL",s))(A||{});const Xe="_component_12zlq_6",Ke="_name_12zlq_17",Qe="_username_12zlq_24",Ve="_avatar_12zlq_30",Ze="_nameContainer_12zlq_36",y={component:Xe,name:Ke,username:Qe,avatar:Ve,nameContainer:Ze},es=()=>{const[s,n]=t.useState(""),[i,m]=t.useState({first:"Unknown",last:"User"}),[d,o]=t.useState("unknown");return t.useEffect(()=>{const _=j.getUser();_.getAvatar(A.SMALL).then(c=>{n(c)}),_.getFullName().then(c=>{m(c)}),o(j.getUsername())},[]),e.jsxs("div",{className:y.component,children:[e.jsx("img",{className:y.avatar,src:s,alt:""}),e.jsxs("div",{className:y.nameContainer,children:[e.jsxs("div",{className:y.name,children:[i.first," ",i.last]}),e.jsx("div",{className:y.username,children:d})]})]})},ss="_component_nue40_6",ts="_title_nue40_16",as="_subtitle_nue40_30",ns="_subtitleSlash_nue40_42",os="_extras_nue40_54",cs="_icon_nue40_62",rs="_left_nue40_67",C={component:ss,title:ts,subtitle:as,subtitleSlash:ns,extras:os,icon:cs,left:rs},is=({title:s,subtitle:n,iconUrl:i,onBrandingClick:m,extras:d,showUserProfileDropdown:o,showBackButton:_})=>{const[c,x]=t.useState(0),r=t.useRef(null);return t.useEffect(()=>{r.current&&x(r.current.getBoundingClientRect().width)},[!r.current]),e.jsxs(L,{className:C.component,showBorder:!0,children:[e.jsxs("div",{className:C.left,style:{"--title-width":`${c}px`},children:[_&&e.jsx(U,{icon:g.ChevronLeft,onClick:()=>{window.history.back()}}),i&&e.jsx("img",{className:C.icon,src:i,alt:"",onClick:m}),s&&e.jsx("span",{ref:r,className:C.title,children:e.jsx(p,{level:2,children:s})}),n&&e.jsxs(p,{level:2,className:C.subtitle,children:[e.jsx("span",{className:C.subtitleSlash,children:"/"}),n]})]}),e.jsx("div",{className:C.extras,children:d}),o&&e.jsx(es,{})]})},ls="_grid_1360z_6",ds={grid:ls},ms=()=>{const s=T(),[n,i]=t.useState([]),[m,d]=t.useState([]),[o,_]=t.useState(""),[c,x]=t.useState([]),[r,N]=t.useState(c[0]);return t.useEffect(()=>{j.getTeams().then(u=>{console.log(u.map(h=>h.teamName)),x(u.map(h=>h.teamName)),N(u.map(h=>h.teamName)[0])})},[]),t.useEffect(()=>{i(o===""?n:n.filter(u=>u.displayName.toLowerCase().includes(o.toLowerCase())))},[o,m]),t.useEffect(()=>{j.syncGetJson(`/app/chatbots/team/${r}/list-bots`,u=>{u.map(h=>{j.syncGetJson(`/app/chatbots/team/${r}/list/${h}`,F=>{d([...m,F])},()=>{console.log("failed to fetch data for bot: "+h),d([...m])})}),d(u)},()=>{d([])})},[r]),e.jsxs(e.Fragment,{children:[e.jsx(is,{title:"Chatbots",subtitle:"Bots",iconUrl:"/assets/productLogos/yourdash.svg",showUserProfileDropdown:!0,extras:e.jsxs(e.Fragment,{children:[e.jsx(I,{items:c.map(u=>({label:u,onClick(){N(u)}})),children:"Select Team"}),e.jsx(S,{accessibleName:"Search Bots",icon:g.Search,placeholder:"Search",onChange:u=>{_(u)}}),e.jsx(U,{icon:g.Plus,onClick:()=>{s("/app/a/chatbots/create-bot")}})]})}),e.jsx("section",{className:ds.grid,children:n.map(u=>e.jsx("div",{children:"Hello World"}))})]})},js=()=>e.jsxs(R,{children:[e.jsx(v,{index:!0,element:e.jsx(ie,{})}),e.jsx(v,{path:"create-bot",element:e.jsx(Ee,{})}),e.jsx(v,{path:"list-bots",element:e.jsx(ms,{})}),e.jsx(v,{path:"bot",children:e.jsxs(v,{path:":botId",children:[e.jsx(v,{index:!0,element:e.jsx(Je,{})}),e.jsx(v,{path:"manage"})]})})]});export{js as default};
