import{j as c}from"./index-5bcd9038.js";const u="_textarea_1729b_6",x={textarea:u},i=({children:n,defaultValue:r,className:s,...o})=>c.jsx("textarea",{...o,onKeyDown:t=>{if(t.key==="Tab"){t.preventDefault(),t.stopPropagation();const a="  ",e=t.currentTarget.selectionStart;t.currentTarget.value=t.currentTarget.value.substring(0,e)+a+t.currentTarget.value.substring(e),t.currentTarget.selectionEnd=e+a.length}},defaultValue:r||"",className:`${x.textarea} ${s}`,children:n});export{i as T};
