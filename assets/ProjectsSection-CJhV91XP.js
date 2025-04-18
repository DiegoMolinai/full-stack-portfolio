import{r as u,j as o,B as t,C as R,a as r,h as z,G as y,z as D,E as B,J as I,N as W,S as c,q as e,O as E,b as s,Q as d,t as A,v as M,w as T,x as F,y as j}from"./mui-C5RXPblH.js";import{F as f}from"./FadeInSection-CcPvo2ML.js";import"./react-DJG_os-6.js";import"./framer-DhlE8pZd.js";const O=[{title:"Portafolio Personal",description:"Sitio web responsive desarrollado con React y Vite para presentar mis habilidades, proyectos y contacto profesional.",link:"https://miportafolio.dev",repo:"https://github.com/miusuario/portfolio",technologies:["React","Vite","Material-UI","Framer Motion"],year:2024,status:"Completado",type:"Personal",tags:["SPA","Responsivo","Animaciones"],extra:"Este proyecto incluyó la integración de animaciones suaves, modo claro/oscuro, y formularios con validación y envío de correos vía API."},{title:"Gestor de Tareas",description:"Aplicación web full-stack para gestionar tareas personales, con autenticación, CRUD y filtros por estado.",link:"https://taskmanager.app",repo:"https://github.com/miusuario/task-manager",technologies:["React","Node.js","Express","MongoDB"],year:2023,status:"En desarrollo",type:"Open Source",tags:["Full Stack","JWT","Mongo"],extra:"Desarrollado como parte de una iniciativa para mejorar la productividad. Se utilizó JWT para autenticación segura y MongoDB Atlas para base de datos en la nube."},{title:"Dashboard de Analítica",description:"Dashboard dinámico con gráficos y filtros para visualizar métricas clave de usuarios y rendimiento.",link:"https://analytics-dashboard.dev",repo:"https://github.com/miusuario/analytics-dashboard",technologies:["React","ECharts","Apollo Client","GraphQL"],year:2023,status:"Completado",type:"Freelance",tags:["DataViz","Responsive","GraphQL"],extra:"Se implementaron gráficos interactivos con ECharts y consultas optimizadas con Apollo Client y GraphQL."},{title:"Landing Page para Startup",description:"Landing page moderna y rápida para promoción de servicios de una startup de tecnología.",link:"https://startuplanding.dev",repo:"https://github.com/miusuario/landing-startup",technologies:["HTML5","CSS3","JavaScript","ScrollReveal"],year:2022,status:"Completado",type:"Freelance",tags:["SEO","Landing Page","Scroll Animations"],extra:"Optimizada para performance y visibilidad en buscadores. Se utilizó ScrollReveal.js para animaciones suaves al hacer scroll."},{title:"API de Productos",description:"REST API para gestión de productos, creada con Express y MongoDB, validaciones con Joi y documentación con Swagger.",link:"https://documentacion-api.dev",repo:"https://github.com/miusuario/product-api",technologies:["Node.js","Express","MongoDB","Swagger"],year:2024,status:"Completado",type:"Personal",tags:["API REST","Backend","Swagger"],extra:"Incluye middleware para validación con Joi, manejo de errores centralizado y documentación interactiva con Swagger UI."},{title:"Blog Markdown",description:"Blog minimalista que consume archivos Markdown como posts, soporte para temas claro/oscuro y comentarios.",link:"https://blogmarkdown.dev",repo:"https://github.com/miusuario/blog-md",technologies:["React","Markdown","Styled Components"],year:2024,status:"Prototipo",type:"Académico",tags:["Markdown","Theming","SSR"],extra:"Proyecto experimental para renderizar contenido estático desde archivos `.md`. Planea incorporar soporte SSR y SEO en el futuro."}],G=u.forwardRef(function(l,p){return o.jsx(j,{direction:"up",ref:p,...l})}),N=()=>{var h,b;const[a,l]=u.useState(null),[p,x]=u.useState(!1),g=i=>{l(i),x(!0)},m=()=>{x(!1)},k=()=>{l(null)};return o.jsxs(t,{id:"proyectos",component:"section",sx:{padding:{xs:"4rem 1rem",md:"6rem 2rem"},backgroundColor:"var(--color-bg)",color:"var(--color-text)"},children:[o.jsxs(R,{maxWidth:"lg",children:[o.jsxs(f,{type:"fadeIn",children:[o.jsx(r,{variant:"h4",fontWeight:700,gutterBottom:!0,textAlign:"center",children:"Proyectos"}),o.jsx(z,{sx:{backgroundColor:"var(--color-accent)",width:"60px",margin:"0 auto 2rem auto",height:"3px",borderRadius:"6px"}})]}),o.jsx(y,{container:!0,spacing:4,justifyContent:"space-around",children:O.map((i,n)=>{var v;const S=i.image&&i.image!=="";return o.jsx(y,{item:!0,size:{xs:12,sm:6,md:4},children:o.jsx(f,{type:"fadeScale",delay:n*.15,children:o.jsxs(D,{sx:{backgroundColor:"#1e1e1e",height:"100%",display:"flex",flexDirection:"column",borderRadius:3,overflow:"hidden",border:"2px solid var(--color-accent)",transition:"all 0.3s","&:hover":{transform:"scale(1.05)"}},children:[o.jsx(t,{onClick:()=>g(i),sx:{cursor:"pointer"},children:S?o.jsx(B,{component:"img",height:"180",image:i.image,alt:i.title,sx:{borderBottom:"2px solid var(--color-accent)"}}):o.jsx(t,{sx:{height:180,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#2b2b2b",borderBottom:"2px solid var(--color-accent)"},children:o.jsx(I,{sx:{fontSize:60,color:"var(--color-accent)"}})})}),o.jsxs(W,{onClick:()=>g(i),sx:{minHeight:180,cursor:"pointer"},children:[o.jsx(r,{variant:"h6",fontWeight:600,gutterBottom:!0,children:i.title}),o.jsx(r,{variant:"body2",color:"text.secondary",sx:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden",textOverflow:"ellipsis",minHeight:"4.5em",lineHeight:"1.5em"},children:i.description}),((v=i.technologies)==null?void 0:v.length)>0&&o.jsx(c,{direction:"row",spacing:1,mt:2,flexWrap:"wrap",useFlexGap:!0,children:i.technologies.map((C,w)=>o.jsx(e,{label:C,size:"small",variant:"outlined",sx:{backgroundColor:"#2e2e2e",color:"var(--color-text)",borderColor:"var(--color-accent)"}},w))})]}),o.jsxs(E,{sx:{mt:"auto",px:2,pb:2,borderTop:"2px solid var(--color-accent)"},children:[i.link&&o.jsx(s,{size:"small",href:i.link,target:"_blank",endIcon:o.jsx(d,{}),sx:{color:"var(--color-accent)"},children:"Ver sitio"}),i.repo&&o.jsx(s,{size:"small",href:i.repo,target:"_blank",endIcon:o.jsx(d,{}),sx:{color:"var(--color-accent)"},children:"Repositorio"})]})]})})},n)})})]}),o.jsx(A,{open:p,onClose:m,keepMounted:!0,fullWidth:!0,maxWidth:"sm",slots:{transition:G},slotProps:{transition:{onExited:k},paper:{sx:{backgroundColor:"#1e1e1e",color:"var(--color-text)",borderRadius:3,p:1}}},children:a&&o.jsxs(o.Fragment,{children:[o.jsx(M,{sx:{fontWeight:700,fontSize:"1.5rem",pb:1},children:a==null?void 0:a.title}),o.jsxs(T,{dividers:!0,sx:{display:"flex",flexDirection:"column",gap:3},children:[(a==null?void 0:a.image)&&o.jsx(t,{component:"img",src:a==null?void 0:a.image,alt:a==null?void 0:a.title,sx:{width:"100%",borderRadius:2,objectFit:"cover",boxShadow:3}}),o.jsxs(t,{children:[o.jsx(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Descripción"}),o.jsx(r,{variant:"body2",color:"text.secondary",children:a==null?void 0:a.description})]}),((h=a==null?void 0:a.technologies)==null?void 0:h.length)>0&&o.jsxs(t,{children:[o.jsx(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Tecnologías usadas"}),o.jsx(c,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,children:a==null?void 0:a.technologies.map((i,n)=>o.jsx(e,{label:i,size:"small",variant:"outlined"},n))})]}),((b=a==null?void 0:a.tags)==null?void 0:b.length)>0&&o.jsxs(t,{children:[o.jsx(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Etiquetas"}),o.jsx(c,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,children:a==null?void 0:a.tags.map((i,n)=>o.jsx(e,{label:i,size:"small",variant:"filled",sx:{backgroundColor:"#2b2b2b",color:"var(--color-text)"}},n))})]}),(a==null?void 0:a.extra)&&o.jsxs(t,{children:[o.jsx(r,{variant:"subtitle1",fontWeight:600,gutterBottom:!0,children:"Información adicional"}),o.jsx(r,{variant:"body2",children:a==null?void 0:a.extra})]}),o.jsxs(c,{direction:"row",spacing:1,flexWrap:"wrap",useFlexGap:!0,children:[(a==null?void 0:a.type)&&o.jsx(e,{label:`Tipo: ${a==null?void 0:a.type}`,color:"secondary",size:"small"}),(a==null?void 0:a.status)&&o.jsx(e,{label:`Estado: ${a==null?void 0:a.status}`,color:"warning",size:"small"}),(a==null?void 0:a.year)&&o.jsx(e,{label:`Año: ${a==null?void 0:a.year}`,color:"primary",size:"small"})]})]}),o.jsxs(F,{sx:{px:3,pb:2},children:[(a==null?void 0:a.link)&&o.jsx(s,{href:a==null?void 0:a.link,target:"_blank",endIcon:o.jsx(d,{}),sx:{color:"var(--color-accent)"},children:"Ver sitio"}),(a==null?void 0:a.repo)&&o.jsx(s,{href:a==null?void 0:a.repo,target:"_blank",endIcon:o.jsx(d,{}),sx:{color:"var(--color-accent)"},children:"Repositorio"}),o.jsx(s,{onClick:m,color:"success",autoFocus:!0,children:"Cerrar"})]})]})})]})};export{N as default};
