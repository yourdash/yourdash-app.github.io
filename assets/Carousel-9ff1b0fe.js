import{r as C,j as n,I as e,U as l}from"./index-35df064e.js";const _="_component_x0k5k_6",p="_main_x0k5k_17",u="_mainControlsCompact_x0k5k_39",x="_controls_x0k5k_45",k="_controlsCompact_x0k5k_72",f="_indicator_x0k5k_81",c={component:_,main:p,mainControlsCompact:u,controls:x,controlsCompact:k,indicator:f},j=({children:s,containerClassName:a,className:i,compactControls:r,...m})=>{const t=C.useRef(null);return n.jsxs("div",{...m,className:`${c.component} ${a}`,children:[n.jsx("div",{className:`${c.main} ${r&&c.mainControlsCompact} ${i}`,ref:t,onScroll:o=>o.preventDefault(),children:s}),n.jsx("div",{className:`${c.controls} ${r&&c.controlsCompact}`,children:s instanceof Array?n.jsxs(n.Fragment,{children:[n.jsx(e,{icon:l.ChevronLeft,onClick:()=>{if(!t.current)return;const o=t.current;o.scrollTo({left:o.scrollLeft-o.getBoundingClientRect().width/4*3})}}),n.jsx(e,{icon:l.ChevronRight,onClick:()=>{if(!t.current)return;const o=t.current;o.scrollTo({left:o.scrollLeft+o.getBoundingClientRect().width/4*3})}})]}):null})]})};export{j as C};