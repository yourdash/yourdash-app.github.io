import{r as i,g as h,j as p,w as f}from"./index-35df064e.js";const g=({children:l,items:a,className:c})=>{const o=i.useContext(h),[d,u]=i.useState(""),[w,r]=i.useState(!1);return p.jsx(f,{className:c,onClick:s=>{s.stopPropagation(),s.preventDefault();const t=s.currentTarget.getBoundingClientRect();if(w){o(0,0,t.width,t.height,!1,[]),r(!1);return}o(t.left,t.bottom,t.width,t.height,!0,a.map(e=>({label:e.label,onClick:()=>{u(e.label),e.onClick()},shortcut:""}))),r(!0);const n=e=>{e.preventDefault(),o(0,0,t.width,t.height,!1,[]),r(!1),window.removeEventListener("click",n),window.removeEventListener("contextmenu",n)};window.addEventListener("click",n),window.addEventListener("contextmenu",n)},children:d||l})};export{g as D};