import{r as i,k as h,j as p,B as f}from"./index-66ab9f12.js";const x=({children:a,items:c,className:l})=>{const o=i.useContext(h),[d,u]=i.useState(""),[w,r]=i.useState(!1);return p.jsx(f,{className:l,onClick:s=>{s.stopPropagation(),s.preventDefault();const t=s.currentTarget.getBoundingClientRect();if(w){o(0,0,t.width,t.height,!1,[]),r(!1);return}o(t.left,t.bottom,t.width,t.height,!0,c.map(e=>({name:e.name,onClick:()=>{u(e.name),e.onClick()},shortcut:""}))),r(!0);const n=e=>{e.preventDefault(),o(0,0,t.width,t.height,!1,[]),r(!1),window.removeEventListener("click",n),window.removeEventListener("contextmenu",n)};window.addEventListener("click",n),window.addEventListener("contextmenu",n)},children:d||a})};export{x as D};
