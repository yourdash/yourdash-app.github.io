import{r,j as t,f as S,b as j,B as w,k as v,h as y,Y as J,c as h,R as C,a as q}from"./index-5bcd9038.js";import{D as O}from"./DropdownButton-b3e2b591.js";import{T as k}from"./TextBox-56383e45.js";const L=({onChange:n,options:l,onBlur:d,label:c,placeholder:f,className:x,onKeyDown:N})=>{const[E,b]=r.useState(!1),[i,p]=r.useState([]),g=r.useRef(null);return t.jsxs("div",{className:S("relative transition-all border-none",x),children:[t.jsx("span",{className:S("pl-2 pr-2 bg-base-700 absolute -top-1 left-2.5 text-sm z-10 [line-height:.65rem] select-none text-base-400"),children:c}),t.jsx("input",{placeholder:f,className:`w-full pl-2 pt-1 pb-1 pr-2 outline-none relative z-0 rounded-button-rounding bg-base-700 transition-all ${E?"hover:border-green-400 focus-within:border-green-400 border-2 border-base-600":"border-2 border-red-400"}`,type:"text",onFocus:s=>{l.includes(s.currentTarget.value)&&s.currentTarget.value!=="/"?p([]):p(l.filter(u=>u.includes(s.currentTarget.value)))},onBlur:s=>d==null?void 0:d(s),onKeyDown:s=>N==null?void 0:N(s),ref:g,onChange:s=>{const u=s.currentTarget.value;if(!u)return b(!1);n(u),p(l.filter(a=>a.includes(u))),l.includes(u)?(u!=="/"&&p([]),b(!0)):b(!1)}}),i.length!==0&&t.jsx(j,{className:"absolute top-full z-10 w-max flex flex-col p-2 gap-1",children:i.slice(0,25).map(s=>t.jsx(w,{className:"h-6 whitespace-nowrap w-full text-left",onClick:()=>{g.current&&(g.current.value=s,n(g.current.value),p([]),b(!0))},children:s},s))})]})};function A(n){h.getJson("/app/endpoints/endpoints",l=>{const d=l.map(c=>{var f;return((f=c==null?void 0:c.route)==null?void 0:f.path)||null}).filter(c=>c!==null);n([...new Set(d)])})}const I=()=>{const n=v("endpoints"),[l,d]=r.useState("JSON"),[c,f]=r.useState("GET"),[x,N]=r.useState({}),[E,b]=r.useState(""),[i,p]=r.useState(""),[g,s]=r.useState([]),[u,a]=r.useState(!0),[T,o]=r.useState(!1),[R,m]=r.useState("");return r.useEffect(()=>{A(e=>s(e))},[]),t.jsxs("main",{className:"grid grid-cols-2 p-2 gap-2",children:[t.jsxs(j,{showBorder:!0,className:"w-full p-3 flex items-center justify-between sticky top-0 bg-container-bg text-container-fg col-span-2",children:[t.jsxs("section",{className:"flex items-center justify-center h-full gap-2",children:[t.jsx(O,{items:[{label:"Get",onClick(){f("GET")}},{label:"Post",onClick(){f("POST")}},{label:"Delete",onClick(){f("DELETE")}}],children:"Get"}),t.jsx(O,{items:[{label:"Text",onClick(){d("Text")}},{label:"JSON",onClick(){d("JSON")}}],children:"JSON"})]}),t.jsx("section",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:t.jsxs("div",{className:"flex items-center justify-center h-full gap-1.5",children:[t.jsx(y,{className:"h-9 aspect-square",preserveColor:!0,icon:J.YourDashLogo}),t.jsx("h2",{className:"text-3xl font-semibold tracking-wide",children:n("APPLICATION_NAME")})]})}),t.jsx("section",{className:"flex items-center justify-center h-full gap-2",children:t.jsx(w,{onClick:()=>{switch(o(!1),a(!0),c){case"GET":switch(l){case"Text":h.getText(i,e=>{m(e),a(!1)},e=>{o(e),a(!1)},x);break;case"JSON":h.getJson(i,e=>{m(e),a(!1)},e=>{o(e),a(!1)},x);break;default:o(n("INTERNAL_ERROR"))}break;case"POST":switch(l){case"Text":h.postText(i,JSON.parse(E),e=>{m(e),a(!1)},e=>{o(e),a(!1)},x);break;case"JSON":h.postJson(i,JSON.parse(E),e=>{m(e),a(!1)},e=>{o(e),a(!1)},x);break;default:o(n("INTERNAL_ERROR"))}break;case"DELETE":switch(l){case"Text":h.deleteText(i,e=>{m(e),a(!1)},e=>{o(e),a(!1)},x);break;case"JSON":h.deleteJson(i,e=>{m(e),a(!1)},e=>{o(e),a(!1)},x);break;default:o(n("INTERNAL_ERROR"))}break;default:o(n("INTERNAL_ERROR"))}},children:n("SEND_REQUEST.LABEL")})})]}),t.jsxs(j,{showBorder:!0,className:"bg-container-bg text-container-fg rounded-container-rounding p-2 h-max flex flex-col",children:[t.jsx(L,{options:g,label:"Request Endpoint",onChange:e=>{p(e)},className:"mb-2"}),c!=="GET"&&t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"-mb-0.5 text-opacity-60 text-container-fg",children:"Request Body"}),t.jsx(k,{defaultValue:`{
  
}`,onChange:e=>{b(e.currentTarget.value)}})]}),t.jsx("span",{className:"-mb-0.5 text-opacity-60 text-container-fg",children:"Request Extra Headers"}),t.jsx(k,{defaultValue:`{
  
}`,onChange:e=>{N(JSON.parse(e.currentTarget.value))}})]}),!u&&t.jsxs(j,{className:"overflow-x-auto w-auto",showBorder:!0,children:[t.jsx("pre",{className:"bg-container-secondary-bg text-container-fg p-4 rounded-container-secondary-rounding w-auto",children:l==="JSON"?JSON.stringify(R,null,2):R.toString()}),T&&t.jsx("pre",{className:"bg-container-tertiary-bg text-red-400 p-4 rounded-container-rounding",children:T})]})]})},G=()=>t.jsx(C,{children:t.jsx(q,{index:!0,element:t.jsx(I,{})})});export{G as default};