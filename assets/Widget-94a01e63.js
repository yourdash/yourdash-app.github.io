import{b as f,L as I,c as y,d as B,u as b,j as e,e as l,f as R,r as d,g as v,I as E,U as P,h as j,T,i as k,k as u,B as $,m as w,n as S,o as A}from"./index-35df064e.js";const D=o=>f.jsx(I.Provider,{value:y()-1,children:o.children}),F="_launcherButton_8lox6_10",M="_launcherButtonIcon_8lox6_42",U="_widgetContainer_8lox6_46",L={launcherButton:F,launcherButtonIcon:M,widgetContainer:U},J="_applicationLauncher_9miwi_10",q="_content_9miwi_25",z="_sideTop_9miwi_43",O="_sideRight_9miwi_66",Q="_sideBottom_9miwi_90",G="_sideLeft_9miwi_113",K="_invisible_9miwi_137",V="_footer_9miwi_142",m={applicationLauncher:J,content:q,sideTop:z,sideRight:O,sideBottom:Q,sideLeft:G,invisible:K,footer:V},X=({items:o,children:s,className:n})=>f.jsx(B.Consumer,{children:t=>f.jsx("div",{className:n,onContextMenu:a=>{a.stopPropagation(),a.preventDefault();const c=a.currentTarget.getBoundingClientRect();t.createMenu({x:a.pageX,y:a.pageY,width:c.width,height:c.height,items:o});const i=r=>{r.preventDefault(),t.destroyMenu(),window.removeEventListener("click",i),window.removeEventListener("contextmenu",i)};window.addEventListener("click",i),window.addEventListener("contextmenu",i)},children:s})}),Y="_grid_1ayy9_6",W="_itemIcon_1ayy9_14",H="_itemLabel_1ayy9_21",Z="_item_1ayy9_14",ee="_itemContent_1ayy9_34",g={grid:Y,itemIcon:W,itemLabel:H,item:Z,itemContent:ee},ne=({applications:o})=>{const s=b();return e.jsx("section",{className:g.grid,children:o.map(n=>e.jsx(X,{items:[{label:"Pin To Panel",onClick(){l.postJson("/core/panel/quick-shortcuts/create",{name:n.name},()=>{var t;return(t=window.__yourdashCorePanelQuickShortcutsReload)==null||t.call(window),0})}},{label:"Open In New Tab",onClick(){return window.open(`${window.location.origin}${window.location.pathname}/app/a/${n.name}`,"_blank"),0}}],className:g.item,children:e.jsxs(R,{onClick:()=>{s(`/app/a/${n.name}`)},className:g.itemContent,children:[e.jsx("img",{className:g.itemIcon,src:`${l.getInstanceUrl()}${n.icon}`,draggable:!1,loading:"lazy",alt:""}),e.jsx("span",{className:g.itemLabel,children:n.displayName})]})},n.name))})},te="_searchBar_1e44p_6",oe={searchBar:te},N=({items:o,children:s,...n})=>{const t=d.useContext(v);return e.jsx("section",{...n,onContextMenu:a=>{a.stopPropagation(),a.preventDefault();const c=a.currentTarget.getBoundingClientRect();t(a.pageX,a.pageY,c.width,c.height,!0,o);const i=r=>{r.preventDefault(),t(0,0,c.width,c.height,!1,[]),window.removeEventListener("click",i),window.removeEventListener("contextmenu",i)};window.addEventListener("click",i),window.addEventListener("contextmenu",i)},children:s})},ie="_grid_mw6bn_6",se="_itemIcon_mw6bn_14",ae="_itemLabel_mw6bn_21",ce="_item_mw6bn_14",re="_itemContent_mw6bn_35",p={grid:ie,itemIcon:se,itemLabel:ae,item:ce,itemContent:re},le=({applications:o})=>{const s=b();return e.jsx("section",{className:p.grid,children:o.map(n=>e.jsx(N,{items:[{label:"Pin To Panel",onClick(){l.postJson("/core/panel/quick-shortcuts/create",{name:n.name},()=>{var t;return(t=window.__yourdashCorePanelQuickShortcutsReload)==null||t.call(window),0})}},{label:"Open In New Tab",onClick(){return window.open(`${window.location.origin}${window.location.pathname}/app/a/${n.name}`,"_blank"),0}}],className:p.item,onClick:()=>{s(`/app/a/${n.name}`)},children:e.jsxs("div",{className:p.itemContent,children:[e.jsx("img",{loading:"lazy",className:p.itemIcon,src:`${l.getInstanceUrl()}${n.icon}`,draggable:!1,alt:""}),e.jsx("span",{className:p.itemLabel,children:n.displayName})]})},n.name))})},me=({items:o,className:s,icon:n})=>{const t=d.useContext(v),[a,c]=d.useState(!1);return e.jsx(E,{icon:n,className:s,onClick:i=>{i.stopPropagation(),i.preventDefault();const r=i.currentTarget.getBoundingClientRect();if(a){t(0,0,r.width,r.height,!1,[]),c(!1);return}t(r.left,r.bottom,r.width,r.height,!0,o.map(h=>({label:h.label,onClick:()=>{h.onClick()},shortcut:h.shortcut}))),c(!0);const _=h=>{h.preventDefault(),t(0,0,r.width,r.height,!1,[]),c(!1),window.removeEventListener("click",_),window.removeEventListener("contextmenu",_)};window.addEventListener("click",_),window.addEventListener("contextmenu",_)}})},de="_grid_bno12_6",ue="_itemIcon_bno12_14",_e="_itemLabel_bno12_21",he="_item_bno12_14",we="_itemContent_bno12_35",x={grid:de,itemIcon:ue,itemLabel:_e,item:he,itemContent:we},ge=({applications:o})=>{const s=b();return e.jsx("section",{className:x.grid,children:o.map(n=>e.jsx(N,{items:[{label:"Pin To Panel",onClick(){l.postJson("/core/panel/quick-shortcuts/create",{name:n.name},()=>{var t;return(t=window.__yourdashCorePanelQuickShortcutsReload)==null||t.call(window),0})}},{label:"Open In New Tab",onClick(){return window.open(`${window.location.origin}${window.location.pathname}/app/a/${n.name}`,"_blank"),0}}],className:x.item,onClick:()=>{s(`/app/a/${n.name}`)},children:e.jsxs("div",{className:x.itemContent,children:[e.jsx("img",{loading:"lazy",className:x.itemIcon,src:`${l.getInstanceUrl()}${n.icon}`,draggable:!1,alt:""}),e.jsx("span",{className:x.itemLabel,children:n.displayName}),e.jsx(me,{className:"ml-auto",items:[{label:"Pin To Panel",onClick(){l.postJson("/core/panel/quick-shortcuts/create",{name:n.name},()=>{var t;return(t=window.__yourdashCorePanelQuickShortcutsReload)==null||t.call(window),0})}},{label:"Open In New Tab",onClick(){return window.open(`${window.location.origin}${window.location.pathname}/app/a/${n.name}`,"_blank"),0}}],icon:P.ThreeBars})]})},n.name))})};let C=[];const pe=({apps:o,layout:s})=>{const n=b(),[t,a]=j.useState(o);return d.useEffect(()=>{a(o)},[o]),e.jsxs(e.Fragment,{children:[e.jsx(T,{accessibleName:"Search Applications",placeholder:"Search Applications",className:k(oe.searchBar,"top-0 sticky z-10"),onEnter:()=>{C.length===1&&n(`/app/a/${C[0].name}`)},onChange:c=>{C=o.filter(i=>i.name.toLowerCase().includes(c.toLowerCase())||i.description.toLowerCase().includes(c.toLowerCase())||i.displayName.toLowerCase().includes(c.toLowerCase())),a(C)},icon:u.Search}),s==="large-grid"&&e.jsx(ne,{applications:t}),s==="small-grid"&&e.jsx(le,{applications:t}),s==="list"&&e.jsx(ge,{applications:t})]})},xe=({side:o,visible:s})=>{var r;const n=b(),[t,a]=d.useState([]),[c,i]=j.useState("large-grid");return d.useEffect(()=>{l.syncGetJson("/core/panel/applications",_=>{a(_)})},[]),e.jsxs("div",{className:k(m.applicationLauncher,o==="top"&&`${m.sideTop} animate__slideInLeft`,o==="right"&&`${m.sideRight} animate__slideInDown`,o==="bottom"&&`${m.sideBottom} animate__slideInLeft`,o==="left"&&`${m.sideLeft} animate__slideInDown`,"animate__animated animate__duration_500ms",!s&&m.invisible),children:[e.jsx($,{className:m.content,children:e.jsx(pe,{apps:t,layout:c})}),e.jsxs($,{className:m.footer,children:[e.jsx(w,{accessibleLabel:"Logout",className:m.logoutButton,icon:u.Logout,onClick:()=>{l.logout(),n("/login")}}),e.jsxs("div",{children:[e.jsx("img",{src:"",alt:""}),e.jsx(w,{accessibleLabel:"Profile",icon:u.Person,"aria-label":"User Profile Settings",onClick:()=>{n("/app/a/settings/profile")}})]}),e.jsx("span",{children:((r=l.userDB.get("user:name"))==null?void 0:r.first)||"Unknown First Name"}),e.jsx(w,{accessibleLabel:"Filter small grid",className:"ml-auto",icon:u.Filter,onClick:()=>{i("small-grid")}}),e.jsx(w,{accessibleLabel:"Filter large grid",icon:u.Filter,onClick:()=>{i("large-grid")}}),e.jsx(w,{accessibleLabel:"Filter list",icon:u.Filter,onClick:()=>{i("list")}})]})]})},be=d.memo(xe),Le=({side:o})=>{const[s,n]=j.useState(!1),t=S();return d.useEffect(()=>{n(!1)},[t]),e.jsx(D,{children:e.jsxs("div",{className:L.widgetContainer,children:[e.jsx("button",{"aria-label":"Application Launcher",className:L.launcherButton,onClick:()=>n(!s),children:e.jsx(A,{icon:u.AppLauncher,className:L.launcherButtonIcon})}),e.jsx(be,{side:o,visible:s})]})})};export{Le as default};