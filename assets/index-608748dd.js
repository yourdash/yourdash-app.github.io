import{l as h,_ as j,u as g,r as s,c,j as e,I as r,Y as n,b as a,R as p,a as o}from"./index-5bcd9038.js";import{C as b}from"./Carousel-8c643a8a.js";const y=h(()=>j(()=>import("./DashboardLayout-02a61c01.js"),["assets/DashboardLayout-02a61c01.js","assets/index-5bcd9038.js","assets/index-0aeed6f0.css","assets/Row-2b29ad51.js","assets/Row-d9a1c4d2.css","assets/getWeatherIconFromState-88a70680.js","assets/DashboardLayout-3f24fae7.css"])),v=()=>{const l=g(),[t,i]=s.useState({first:"",last:""}),[u,x]=s.useState(""),[d,m]=s.useState("dashboard");return s.useEffect(()=>{c.getJson("/app/dash/user-full-name",f=>{i(f)}),x(localStorage.getItem("username")||"ERROR"),m(c.userDB.get("dash:useBrowserLayout")?"browser":"dashboard")},[]),t.first===""&&t.last===""?null:e.jsx("div",{className:"overflow-hidden bg-cover bg-center h-full w-full",style:{backgroundImage:`url(${localStorage.getItem("current_server")}/login/instance/background)`},children:d==="dashboard"?e.jsx(y,{username:u,fullName:t}):e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:n.Gear,onClick:()=>{l("/app/a/settings/personalization/dashboard")}}),'"Browser Layout is temporarily disabled"']})})},N=()=>{const[l,t]=s.useState({first:"",last:""});return s.useState(0),s.useEffect(()=>{c.getJson("/core/panel/user-full-name",i=>{t(i)})},[]),l.first===""&&l.last===""?null:e.jsx("div",{style:{backgroundImage:`url(${localStorage.getItem("current_server")}/login/instance/background)`},className:"flex items-center justify-center flex-col h-full w-full bg-center bg-cover relative",children:e.jsxs(a,{className:"w-full max-w-[60rem] flex flex-col gap-6 pt-8 pb-8",children:[e.jsx("h1",{className:"text-5xl font-semibold text-center",children:`Welcome to YourDash, ${c.userDB.get("user:full_name").first}`}),e.jsxs(b,{children:[e.jsxs("main",{className:"w-full flex items-center justify-center gap-4",children:[e.jsxs(a,{level:"secondary",className:"h-64 aspect-square flex flex-col items-start justify-between",children:[e.jsx("p",{children:"Customize everything"}),e.jsx("div",{className:"flex items-center justify-end w-full",children:e.jsx(r,{icon:n.LinkExternal})})]}),e.jsxs(a,{level:"secondary",className:"h-64 aspect-square flex flex-col items-start justify-between",children:[e.jsx("p",{children:"Customize everything"}),e.jsx("div",{className:"flex items-center justify-end w-full",children:e.jsx(r,{icon:n.LinkExternal})})]}),e.jsxs(a,{level:"tertiary",className:"h-64 aspect-square flex flex-col items-start justify-between",children:[e.jsx("p",{children:"Customize everything"}),e.jsx("div",{className:"flex items-center justify-end w-full",children:e.jsx(r,{icon:n.LinkExternal})})]})]}),e.jsxs("main",{className:"w-full",children:[e.jsx("section",{children:"text"}),e.jsx("section",{children:"text"}),e.jsx("section",{children:"text"})]}),e.jsxs("main",{className:"w-full",children:[e.jsx("section",{children:"text"}),e.jsx("section",{children:"text"}),e.jsx("section",{children:"text"})]})]})]})})},E=()=>e.jsxs(p,{children:[e.jsx(o,{index:!0,element:e.jsx(v,{})}),e.jsx(o,{path:"welcome",element:e.jsx(N,{})})]});export{E as default};