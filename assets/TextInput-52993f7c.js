import{r as x,j as a,f as o}from"./index-4cf28dcc.js";const j=({onChange:p,onBlur:d,label:u,mustMatchRegex:e,placeholder:c,className:f,onKeyDown:t,defaultValue:v,onValid:s,autoComplete:h,...n})=>{const[m,b]=x.useState(!e);return a.jsxs("div",{className:o("relative transition-all",f),children:[a.jsx("span",{className:o("pl-2 pr-2 bg-base-700 absolute -top-1 left-2.5 text-sm z-10 [line-height:.65rem] select-none text-base-400"),children:u}),a.jsx("input",{...n,autoComplete:h,placeholder:c,className:`w-full pl-2 pt-1 pb-1 pr-2 outline-none relative z-0 rounded-button-rounding bg-base-700 transition-all ${e?m?"hover:border-green-400 focus-within:border-green-400 border-2 border-base-600":"border-2 border-red-400":"border-2 border-base-600"}`,type:n.type||"text",onBlur:d,defaultValue:v,onKeyDown:l=>t==null?void 0:t(l),onChange:l=>{var i;const r=l.currentTarget.value;p(r),!e||r.match(e)!==null&&((i=r.match(e))==null?void 0:i.length)===1?(b(!0),s==null||s(r)):b(!1)}})]})};export{j as default};