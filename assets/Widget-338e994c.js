import{u as r,r as c,h as m,e as _,j as o,q as u,i as h,s as b,t as g}from"./index-35df064e.js";const f="_applicationIcon_iqzo4_10",q="_applicationLabel_iqzo4_18",x="_application_iqzo4_10",d="_left_iqzo4_58",j="_right_iqzo4_69",z="_bottom_iqzo4_80",I="_top_iqzo4_91",a={applicationIcon:f,applicationLabel:q,application:x,left:d,right:j,bottom:z,top:I},v=({side:e})=>{const n=r(),[i,l]=c.useState([]),[s,p]=m.useState(0);return c.useEffect(()=>{_.syncGetJson("/core/panel/quick-shortcuts",t=>{l(t)})},[s]),window.__yourdashCorePanelQuickShortcutsReload=()=>{p(s+1)},o.jsx(o.Fragment,{children:i.map(t=>o.jsx(u,{children:o.jsxs("div",{onClick:()=>{n(`/app/a/${t.name}`)},className:h(a.application,e==="top"&&a.top,e==="right"&&a.right,e==="bottom"&&a.bottom,e==="left"&&a.left,b(1)),children:[o.jsx(g,{authenticatedImage:!0,className:a.applicationIcon,src:t.icon,accessibleLabel:t.name}),o.jsx("span",{className:a.applicationLabel,children:t.name})]},t.name)},t.name))})};export{v as default};