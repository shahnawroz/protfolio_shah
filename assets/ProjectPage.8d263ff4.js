import{d as P,e as R,b as V,Q as _,f as Q}from"./QIcon.462343ae.js";import{R as N,Q as A}from"./QBtn.2597a644.js";import{u as I,a as D}from"./use-dark.7d8a6917.js";import{c as M,a as i,h as n,g as z,s as L,K as r,L as g,M as k,Q as a,V as S,W as w,X as x,Y as T,Z as p,T as $,N as K}from"./index.f9cefa6b.js";import{Q as O}from"./QPage.46c2c404.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const W={xs:8,sm:10,md:14,lg:20,xl:24};var F=M({name:"QChip",props:{...I,...P,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:d,emit:o}){const{proxy:{$q:c}}=z(),l=D(e,c),u=R(e,W),s=i(()=>e.selected===!0||e.icon!==void 0),q=i(()=>e.selected===!0?e.iconSelected||c.iconSet.chip.selected:e.icon),y=i(()=>e.iconRemove||c.iconSet.chip.remove),m=i(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),j=i(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(m.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(l.value===!0?" q-chip--dark q-dark":"")}),f=i(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},h={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||c.lang.label.remove};return{chip:t,remove:h}});function C(t){t.keyCode===13&&b(t)}function b(t){e.disable||(o("update:selected",!e.selected),o("click",t))}function v(t){(t.keyCode===void 0||t.keyCode===13)&&(L(t),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function B(){const t=[];m.value===!0&&t.push(n("div",{class:"q-focus-helper"})),s.value===!0&&t.push(n(_,{class:"q-chip__icon q-chip__icon--left",name:q.value}));const h=e.label!==void 0?[n("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(n("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Q(d.default,h))),e.iconRight&&t.push(n(_,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(n(_,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...f.value.remove,onClick:v,onKeyup:v})),t}return()=>{if(e.modelValue===!1)return;const t={class:j.value,style:u.value};return m.value===!0&&Object.assign(t,f.value.chip,{onClick:b,onKeyup:C}),V("div",t,B(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[N,e.ripple]])}}});const H={class:"projects-container text-left"},X={class:"projects-grid"},Y={class:"project-image-placeholder"},Z={class:"project-title text-center"},G={class:"project-details"},J={class:"tech-stack"},U={__name:"ProjectPage",setup(e){const d=[{name:"Abrar Awsaf Membership Vue",techStack:["Vue.js","Quasar","Sass"],link:"https://member.abrarawsafagrofarm.com/#/"},{name:"Mians Official Website",techStack:["React.js","CSS"],link:"https://wanna-be-coder.github.io/MIANS/"},{name:"Marketing App",techStack:["Vue.js","Quasar.js","Sass"],link:"https://onbez.com/"},{name:"Adrar Awsaf E-commerce",techStack:["Next.js","React","Tailwind Css"],link:"https://abrarawsafagrofarm.com/#/home"},{name:"Daatti Home Collection",techStack:["Next.js","React","Tailwind Css"],link:"https://www.daattihomecollection.com/"},{name:"Motamot",techStack:["Next.js","React","Tailwind Css"],link:"https://www.daattihomecollection.com/"}];return(o,c)=>(r(),g(O,{class:"bg-gradient text-white"},{default:k(()=>[a("div",H,[c[0]||(c[0]=a("h2",{class:"projects-heading animate__animated animate__fadeInDown"}," My Projects ",-1)),a("div",X,[(r(),S(x,null,w(d,(l,u)=>a("div",{key:l.name,class:"project-card animate__animated animate__fadeInLeft",style:T({animationDelay:`${u*.3}s`})},[a("div",Y,[a("p",Z,p(l.name),1)]),a("div",G,[a("div",J,[(r(!0),S(x,null,w(l.techStack,s=>(r(),g(F,{key:s,class:"tech-chip",color:"primary",label:""},{default:k(()=>[$(p(s),1)]),_:2},1024))),128))]),K(A,{flat:"",label:"View Project",icon:"open_in_new",color:"orange",class:"view-project-btn",href:l.link,target:"_blank"},null,8,["href"])])],4)),64))])])]),_:1}))}};var ne=E(U,[["__scopeId","data-v-daa24c96"]]);export{ne as default};