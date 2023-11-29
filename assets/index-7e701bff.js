import{n as h,r as i,k as c,j as e,D as p,p as j,Y as g,M as N,B as b,q as E,b as L,s as u,R as C,a as R}from"./index-4cf28dcc.js";const T="/assets/yourdash-58795caf.svg",A=()=>{const a=h("diffusion_lab"),[x,l]=i.useState(1),[o,d]=i.useState([]),[t,n]=i.useState({extensions:[],dimensions:{width:256,height:256},model:"",prompt:{positive:"",negative:""},seed:-1,steps:20,clientId:0,batch:{size:1,quantity:1}}),[f,m]=i.useState([]);return i.useEffect(()=>{c.getJson("/app/diffusion_lab/models",s=>{n({...t,model:s.models[0]}),d(s.models)})},[]),e.jsxs("main",{children:[e.jsxs("header",{className:"w-full p-3 flex items-center justify-between sticky top-0 bg-container-bg text-container-fg",children:[e.jsxs("section",{className:"flex items-center justify-center h-full gap-2",children:[e.jsx(p,{items:o.map(s=>({name:s.slice(0,1).toUpperCase()+s.slice(1),onClick:()=>{n({...t,model:s})}})),children:"Select a diffusion model"}),e.jsx(p,{items:o.map(s=>({name:s.slice(0,1).toUpperCase()+s.slice(1),onClick:()=>{n({...t,model:s})}})),children:"Select a VAE"})]}),e.jsx("section",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsxs("div",{className:"flex items-center justify-center h-full gap-1.5",children:[e.jsx(j,{className:"h-9 aspect-square",useDefaultColor:!0,icon:g.YourDashLogo}),e.jsx("h2",{className:"text-3xl font-semibold tracking-wide",children:a("APPLICATION_NAME")})]})}),e.jsx("section",{className:"flex items-center justify-center h-full gap-2",children:x===1?e.jsx(N,{onClick:()=>{l(1),c.postJson("/app/diffusion_lab/generate",{...t},s=>{m(s),l(1)})},children:a("GENERATE_BUTTON.LABEL")}):e.jsx(b,{onClick:()=>{l(0)},children:a("STOP_BUTTON.LABEL")})})]}),e.jsxs(E,{className:"flex gap-3",direction:"row",children:[e.jsx("section",{className:"flex flex-col flex-grow pl-3 pt-3 pb-3",children:e.jsxs(L,{children:[e.jsx("span",{children:a("PROMPT.LABEL")}),e.jsx(u,{onChange:s=>{n({...t,prompt:{...t.prompt,positive:s.target.value}})}}),e.jsx("span",{children:a("NEGATIVE_PROMPT.LABEL")}),e.jsx(u,{onChange:s=>{n({...t,prompt:{...t.prompt,negative:s.target.value}})}})]})}),e.jsx("section",{children:e.jsx("div",{className:"flex flex-col pr-3 pt-3 pb-3",children:e.jsx("div",{style:{aspectRatio:`${t.dimensions.width} / ${t.dimensions.height}`},className:"flex flex-col flex-wrap p-4 items-center justify-center",children:f.map(s=>s.map(r=>e.jsx("img",{src:r||T,alt:"generated ai-image",className:"w-full h-full"},r)))})})})]})]})},v=()=>e.jsx(C,{children:e.jsx(R,{index:!0,element:e.jsx(A,{})})});export{v as default};