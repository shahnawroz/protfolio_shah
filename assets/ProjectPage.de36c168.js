import{d as P,e as V,b as Q,Q as m,f as R}from"./QIcon.f36b3a09.js";import{R as A,Q as I}from"./QBtn.cb10ec45.js";import{u as M,a as N}from"./use-dark.c6636927.js";import{c as z,a as i,h as n,s as D,g as L,K as r,L as f,M as g,Q as a,V as k,W as S,X as q,Y as x,T as K,N as O}from"./index.9ca4113e.js";import{Q as $}from"./QPage.7c4b8c40.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const W={xs:8,sm:10,md:14,lg:20,xl:24};var E=z({name:"QChip",props:{...M,...P,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:u,emit:o}){const{proxy:{$q:l}}=L(),c=N(e,l),s=V(e,W),p=i(()=>e.selected===!0||e.icon!==void 0),y=i(()=>e.selected===!0?e.iconSelected||l.iconSet.chip.selected:e.icon),j=i(()=>e.iconRemove||l.iconSet.chip.remove),d=i(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),C=i(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(d.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(c.value===!0?" q-chip--dark q-dark":"")}),_=i(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},h={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||l.lang.label.remove};return{chip:t,remove:h}});function B(t){t.keyCode===13&&b(t)}function b(t){e.disable||(o("update:selected",!e.selected),o("click",t))}function v(t){(t.keyCode===void 0||t.keyCode===13)&&(D(t),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function w(){const t=[];d.value===!0&&t.push(n("div",{class:"q-focus-helper"})),p.value===!0&&t.push(n(m,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const h=e.label!==void 0?[n("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(n("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},R(u.default,h))),e.iconRight&&t.push(n(m,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(n(m,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:j.value,..._.value.remove,onClick:v,onKeyup:v})),t}return()=>{if(e.modelValue===!1)return;const t={class:C.value,style:s.value};return d.value===!0&&Object.assign(t,_.value.chip,{onClick:b,onKeyup:B}),Q("div",t,w(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[A,e.ripple]])}}});const F={class:"projects-container text-left"},X={class:"projects-grid"},Y={class:"project-image-placeholder"},G={class:"project-title text-center"},H={class:"project-details"},J={class:"tech-stack"},U={__name:"ProjectPage",setup(e){const u=[{name:"Abrar Awsaf Membership Vue",techStack:["Vue.js","Quasar","Sass"],link:"https://member.abrarawsafagrofarm.com/#/"},{name:"Mians Official Website",techStack:["React.js","CSS"],link:"https://wanna-be-coder.github.io/MIANS/"},{name:"Marketing App",techStack:["Vue.js","Quasar.js","Sass"],link:"https://onbez.com/"}];return(o,l)=>(r(),f($,{class:"bg-gradient text-white"},{default:g(()=>[a("div",F,[l[0]||(l[0]=a("h2",{class:"projects-heading"},"My Projects",-1)),a("div",X,[(r(),k(q,null,S(u,c=>a("div",{key:c.name,class:"project-card"},[a("div",Y,[a("p",G,x(c.name),1)]),a("div",H,[a("div",J,[(r(!0),k(q,null,S(c.techStack,s=>(r(),f(E,{key:s,class:"tech-chip",color:"primary",label:""},{default:g(()=>[K(x(s),1)]),_:2},1024))),128))]),O(I,{flat:"",label:"View Project",icon:"open_in_new",color:"orange",class:"view-project-btn",href:c.link,target:"_blank"},null,8,["href"])])])),64))])])]),_:1}))}};var ie=T(U,[["__scopeId","data-v-341110c7"]]);export{ie as default};
