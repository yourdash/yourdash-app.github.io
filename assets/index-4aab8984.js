import{u as f,j as e,b as u,c as g,I as w,Y as j,T as U,k as B,r as m,f as k,H as h,s as T,v as P,B as E,M as O,t as Y,h as q,R as J,a as x,C}from"./index-5bcd9038.js";import{C as H}from"./Carousel-8c643a8a.js";const M="/assets/background-038d9528.svg",G="_component_xsar1_6",V="_background_xsar1_14",X="_gradient_xsar1_33",z="_label_xsar1_42",y={component:G,background:V,gradient:X,label:z},F=({id:s})=>{const a=f();return e.jsxs(u,{unStyledClickable:!0,onClick:()=>a(`/app/a/store/cat/${s}`),className:y.component,children:[e.jsx("div",{className:y.background,style:{backgroundImage:`url(${M})`}}),e.jsx("span",{className:y.label,children:s.slice(0,1).toUpperCase()+s.slice(1)})]})},K="_component_25j1f_6",Q="_section_25j1f_15",W="_label_25j1f_21",b={component:K,section:Q,label:W},R=({displayName:s,id:a,icon:t})=>{const c=f();return e.jsxs(u,{onClick:()=>c(`/app/a/store/app/${a}`),className:b.component,children:[e.jsx("img",{loading:"lazy",src:`${g.getInstanceUrl()}${t}`,className:"aspect-square h-16",alt:""}),e.jsx("div",{className:b.section,children:e.jsx("span",{className:b.label,children:s})})]})},Z="/assets/icon-6539e4a9.avif",D="_component_rnimu_6",ee="_applicationLogo_rnimu_21",se="_brand_rnimu_25",ne="_productName_rnimu_31",ae="_actions_rnimu_44",_={component:D,applicationLogo:ee,brand:se,productName:ne,actions:ae},S=({showBackButton:s})=>{const a=f();return e.jsxs(u,{showBorder:!0,className:_.component,children:[s&&e.jsx(w,{icon:j.ChevronLeft,onClick:()=>{let t="";for(let c=0;c<s;c++)t+="../";a(t)}}),e.jsx("img",{alt:"YourDash Store Application Logo",className:_.applicationLogo,src:Z}),e.jsx("div",{className:_.brand,children:e.jsx("span",{className:_.productName,children:"YourDash Store"})}),e.jsxs("div",{className:_.actions,children:[e.jsx(U,{accessibleName:"Search Applications",onChange:t=>t,placeholder:"Search Applications",className:_.searchInput,icon:j.Search}),e.jsx(w,{icon:j.Database,onClick:()=>{console.log("Implement me!")}}),e.jsx(w,{icon:j.Download,onClick:()=>{console.log("Implement me!")}})]})]})},te="_main_13umw_6",ce={main:te},A=()=>{const s=B("store"),[a,t]=m.useState([]),[c,d]=m.useState([]),[o,n]=m.useState([]);return m.useEffect(()=>{g.getJson("/app/store/promoted/applications",l=>{t(l)}),g.getJson("/app/store/categories",l=>{d(l)}),g.getJson("/app/store/applications",l=>{n(l)})},[]),e.jsxs("main",{className:k("flex flex-col gap-2",ce.main),children:[e.jsx(S,{}),e.jsx(h,{level:2,children:s("ALL_CATEGORIES_SECTION")}),c.length!==0&&e.jsx("section",{className:"grid 3xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-2 animate__animated animate__fadeIn animate__250ms",children:c.map(l=>e.jsx(F,{id:l},l))}),e.jsx(h,{level:2,children:s("ALL_APPLICATIONS_SECTION")}),o.length!==0&&e.jsx("section",{className:"grid grid-cols-1 gap-2 animate__animated animate__fadeIn animate__500ms md:grid-cols-2 lg:grid-cols-3",children:o.map(l=>e.jsx(R,{id:l.id,displayName:l.displayName,icon:l.icon},l.id))})]})},le="_main_1mv98_6",oe={main:le},L=()=>{const s=f(),{id:a}=T(),[t,c]=m.useState(),[d,o]=m.useState(!0);return m.useEffect(()=>{g.getJson(`/app/store/category/${a}`,n=>{c(n),o(!1)},()=>{s("/app/a/store")})},[a,s]),a?e.jsxs("div",{className:oe.main,children:[e.jsx(S,{showBackButton:2}),d?e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx(P,{})}):e.jsxs(e.Fragment,{children:[e.jsx(h,{level:1,className:"p-6",children:`${t==null?void 0:t.displayName}`}),e.jsx("div",{className:"w-full max-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate__animated animate__fadeIn animate__250ms",children:t&&t.applications.map(n=>e.jsx(R,{displayName:n.displayName,id:n.name,icon:n.icon},n.name))})]})]}):(s("/app/a/store"),null)},ie="/assets/background-038d9528.svg",re="_closeButton_1km2c_6",de="_handle_1km2c_21",me="_component_1km2c_44",ue="_content_1km2c_70",xe="_title_1km2c_78",pe="_placeholder_1km2c_90",he="_background_1km2c_95",ge="_hidden_1km2c_104",p={closeButton:re,handle:de,component:me,content:ue,title:xe,placeholder:pe,background:he,hidden:ge},_e=({children:s,onClose:a,className:t,visible:c,style:d,title:o})=>{const[n,l]=m.useState(0);return e.jsx("div",{className:`${p.background} ${c===!1&&p.hidden}`,onClick:a,onMouseUp:i=>{i.screenY>n&&(a==null||a())},onTouchEnd:i=>{i.touches[0].screenY<n&&(a==null||a())},children:e.jsxs(u,{showBorder:!0,className:`${p.component} ${c===!1&&p.hidden} animate__animated animate__flipInX animate__duration_750ms`,style:d,onMouseUp:i=>{i.stopPropagation()},onClick:i=>{i.stopPropagation()},unStyledClickable:!0,children:[e.jsx("section",{className:p.handle,onMouseDown:i=>{l(i.screenY)},onMouseUp:i=>{i.screenY<n&&(a==null||a())},onTouchStart:i=>{l(i.touches[0].screenY)},onTouchEnd:i=>{i.touches[0].screenY<n&&(a==null||a())},children:e.jsx("div",{})}),e.jsx(w,{className:p.closeButton,"data-visible":!!a,icon:j.X,onClick:a}),e.jsxs("section",{className:`${p.content} ${t}`,children:[e.jsx("h1",{className:`${p.title} ${(o===""||o===void 0)&&p.placeholder}`,children:o}),s]})]})})},je=({applicationData:s,onClose:a,onConfirm:t})=>{var d;const c=f();return e.jsx(_e,{onClose:a,title:`Confirm installation of ${s==null?void 0:s.displayName}`,children:e.jsxs("section",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{children:`Do you want to install ${s==null?void 0:s.displayName}?`}),(s==null?void 0:s.requiresBackend)&&e.jsx(u,{level:"tertiary",className:"flex flex-col gap-2",children:e.jsx("div",{children:"Installing this application will automatically load it's supplied backend module on startup."})}),(s==null?void 0:s.dependencies)&&((d=s.dependencies)==null?void 0:d.length)!==0&&e.jsxs(u,{level:"tertiary",className:"flex flex-col gap-2",children:[e.jsx("div",{children:"The following dependency applications will be installed automatically."}),e.jsx("div",{className:"flex flex-wrap w-full",children:s.dependencies.map(o=>e.jsx(u,{className:"p-2 flex-grow text-center",level:"tertiary",onClick:()=>{c(`/app/a/store/app/${o}`)},children:o},o))})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(E,{onClick:()=>{a()},children:"Cancel"}),e.jsx(O,{onClick:()=>{t()},children:"Confirm installation"})]})]})})};function I(s,a,t,c){g.getJson(`/app/store/application/${s}`,d=>{a(d),t(!1)},()=>{c("/app/a/store")})}const fe="_main_2cokv_6",Ne="_contentContainer_2cokv_19",ve="_contentSection_2cokv_32",N={main:fe,contentContainer:Ne,contentSection:ve},we=()=>{var $;const s=B("store"),a=Y(),t=f(),{id:c}=T(),[d,o]=m.useState(!0),[n,l]=m.useState(),[i,v]=m.useState(!1);return m.useEffect(()=>{v(!1),o(!0),I(c||"dash",r=>l(r),o,t)},[c,t]),c?e.jsxs("div",{className:"h-full relative",children:[i&&e.jsx(je,{applicationData:n,onClose:()=>v(!1),onConfirm:()=>{g.postJson(`/app/store/application/install/${n==null?void 0:n.name}`,{},r=>{r.success&&(I(c,l,o,t),a.toast.success("Installed Application",`Installed "${n==null?void 0:n.name}" successfully`)),window.__yourdashCorePanelReload()}),v(!1)}}),d?e.jsx("div",{className:k("w-full h-full flex items-center justify-center",N.main),children:e.jsx(P,{})}):n&&e.jsxs("div",{className:N.main,children:[e.jsx(S,{showBackButton:2}),e.jsxs("header",{className:"flex flex-col w-full bg-container-bg rounded-container-rounding overflow-hidden",children:[e.jsxs("div",{style:{backgroundImage:`url(${ie})`},className:"sm:h-64 h-32 transition-all bg-cover bg-center flex select-none items-center justify-center flex-row gap-3 animate__animated animate__fadeIn",children:[e.jsx("img",{className:"aspect-square drop-shadow-lg sm:w-24 w-0 transition-all",src:n.icon,draggable:!1,alt:""}),e.jsx(h,{className:"drop-shadow-lg",children:n.displayName})]}),e.jsxs("section",{className:"flex items-center p-4 gap-4 max-w-[50rem] w-full ml-auto mr-auto animate__animated animate__fadeIn animate__250ms",children:[e.jsx("img",{className:"w-24 aspect-square select-none",src:n.icon,draggable:!1,alt:""}),e.jsx(h,{level:2,className:" mr-auto",children:n.displayName}),e.jsxs("div",{className:"flex gap-2",children:[n.installed&&e.jsx(O,{onClick:()=>{t(`/app/a/${n.name}`)},children:s("OPEN_APPLICATION")}),e.jsx(E,{onClick:()=>{n.installed?g.postJson(`/app/store/application/uninstall/${n.name}`,{},r=>{r.success&&(I(c,l,o,t),a.toast.success("Uninstalled Application",`Uninstalled "${n.name}" successfully`)),window.__yourdashCorePanelReload()}):v(!0)},children:n.installed?s("UNINSTALL"):s("INSTALL")})]})]})]}),e.jsxs("div",{className:N.contentContainer,children:[e.jsxs("section",{className:k(N.contentSection,"max-w-3xl w-full"),children:[e.jsxs(u,{showBorder:!0,className:"col-span-2",children:[e.jsx(h,{level:3,children:s("DESCRIPTION_SECTION")}),n.description]}),e.jsxs(u,{showBorder:!0,className:"flex flex-col items-start col-span-2 child:w-full",children:[e.jsx(h,{level:3,children:s("ABOUT_SECTION")}),e.jsx("div",{children:`Category: ${n.category}`}),e.jsx("div",{children:`ID: ${n.name}`}),e.jsx("div",{children:`Requires Backend: ${n.requiresBackend}`}),e.jsx("br",{}),e.jsx("div",{children:"Created as part of the YourDash Project"})]})]}),e.jsxs("section",{className:k(N.contentSection,"max-w-lg w-full"),children:[e.jsxs(u,{showBorder:!0,onClick:()=>{window.open(`https://github.com/yourdash/yourdash/tree/main/packages/applications/${n.name}`)},className:"flex gap-1 items-center",children:[e.jsx(q,{className:"h-5",icon:j.Link}),e.jsx("span",{children:"View Source"})]}),e.jsxs("section",{className:"w-full",children:[e.jsx(h,{level:3,children:s("AUTHORS_SECTION")}),e.jsx(H,{children:($=n.authors)==null?void 0:$.map(r=>e.jsxs(u,{className:"flex !flex-col gap-2",showBorder:!0,onClick:()=>{window.location.href=r.site},children:[e.jsx("img",{className:"h-24 aspect-square rounded-container-rounding",src:r.avatarUrl,alt:r.avatarUrl}),e.jsxs("div",{className:"flex items-center justify-between gap-2 flex-col w-full",children:[e.jsx("span",{children:r.displayName}),r.role&&e.jsx("div",{className:"bg-container-secondary-bg text-container-secondary-fg w-[calc(100%+1rem)] -mb-2 text-center rounded-b-container-secondary-rounding rounded-t-sm p-1",children:r.role})]})]},r.avatarUrl))})]})]})]})]})]}):(t("/app/a/store"),null)},be=()=>e.jsxs(J,{children:[e.jsx(x,{index:!0,element:e.jsx(A,{})}),e.jsxs(x,{path:"cat",children:[e.jsx(x,{index:!0,element:e.jsx(C,{})}),e.jsx(x,{path:":id",element:e.jsx(L,{})})]}),e.jsxs(x,{path:"category",children:[e.jsx(x,{index:!0,element:e.jsx(A,{})}),e.jsx(x,{path:":id",element:e.jsx(L,{})})]}),e.jsxs(x,{path:"app",children:[e.jsx(x,{index:!0,element:e.jsx(C,{})}),e.jsx(x,{path:":id",element:e.jsx(we,{})})]})]});export{be as default};
