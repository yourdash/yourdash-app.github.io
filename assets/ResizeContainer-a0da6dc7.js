import{r as s,h as C,j as c}from"./index-4cf28dcc.js";const M="_component_1scyw_6",z="_handle_1scyw_16",d={component:M,handle:z},y=({children:l,style:h,className:p,direction:n})=>{const[r,i]=s.useState(!1),[o,a]=s.useState(0),[f,u]=s.useState(0),e=C.useRef(null),m=t=>{e.current&&(t.preventDefault(),i(!0),a(n==="row"?t.clientX-e.current.getBoundingClientRect().left:t.clientY-e.current.getBoundingClientRect().top),u(n==="row"?t.clientX-e.current.getBoundingClientRect().left:t.clientY-e.current.getBoundingClientRect().top))},w=t=>{if(!e.current||!r)return;const g=n==="row"?t.clientX-e.current.getBoundingClientRect().left:t.clientY-e.current.getBoundingClientRect().top,x=g-f;u(g),a(o+x)},R=()=>{i(!1)};return c.jsxs("div",{ref:e,style:{...h,flexDirection:n,padding:0},className:`${d.component} ${p}`,onMouseMove:w,children:[c.jsx("div",{style:{[n==="row"?"width":"height"]:o},children:l[0]}),c.jsx("div",{style:n==="row"?{left:`${o-4}px`,cursor:"col-resize",top:0,height:"100%",width:"0.5rem",...r?{backgroundColor:"rgb(var(--theme-500))",transition:"none"}:{}}:{left:0,cursor:"row-resize",top:`${o-4}px`,width:"100%",height:"0.5rem",...r?{backgroundColor:"rgb(var(--theme-500))",transition:"none"}:{}},className:d.handle,onMouseDown:m,onMouseUp:R}),l[1]]})};export{y as default};