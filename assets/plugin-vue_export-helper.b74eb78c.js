import{a as g,h as a,C as z,c as B,g as p}from"./index.28a35aec.js";const M={xs:18,sm:24,md:32,lg:38,xl:46},k={size:String};function j(e,n=M){return g(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}function F(e,n){return e!==void 0&&e()||n}function V(e,n){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return n}function l(e,n){return e!==void 0?n.concat(e()):n}function A(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}function G(e,n,r,c,u,o){n.key=c+u;const i=a(e,n,r);return u===!0?z(i,o()):i}const h="0 0 24 24",y=e=>e,d=e=>`ionicons ${e}`,x={"mdi-":e=>`mdi ${e}`,"icon-":y,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":y,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},_={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},O=new RegExp("^("+Object.keys(x).join("|")+")"),q=new RegExp("^("+Object.keys(S).join("|")+")"),b=new RegExp("^("+Object.keys(_).join("|")+")"),C=/^[Mm]\s?[-+]?\.?\d/,D=/^img:/,I=/^svguse:/,Q=/^ion-/,U=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var H=B({name:"QIcon",props:{...k,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:r}}=p(),c=j(e),u=g(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=g(()=>{let i,t=e.name;if(t==="none"||!t)return{none:!0};if(r.iconMapFn!==null){const s=r.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(C.test(t)===!0){const[s,v=h]=t.split("|");return{svg:!0,viewBox:v,nodes:s.split("&&").map(E=>{const[R,$,w]=E.split("@@");return a("path",{style:$,d:R,transform:w})})}}if(D.test(t)===!0)return{img:!0,src:t.substring(4)};if(I.test(t)===!0){const[s,v=h]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:v}}let f=" ";const m=t.match(O);if(m!==null)i=x[m[1]](t);else if(U.test(t)===!0)i=t;else if(Q.test(t)===!0)i=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(b.test(t)===!0){i="notranslate material-symbols";const s=t.match(b);s!==null&&(t=t.substring(6),i+=_[s[1]]),f=t}else{i="notranslate material-icons";const s=t.match(q);s!==null&&(t=t.substring(2),i+=S[s[1]]),f=t}return{cls:i,content:f}});return()=>{const i={class:u.value,style:c.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?a(e.tag,i,F(n.default)):o.value.img===!0?a(e.tag,i,l(n.default,[a("img",{src:o.value.src})])):o.value.svg===!0?a(e.tag,i,l(n.default,[a("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?a(e.tag,i,l(n.default,[a("svg",{viewBox:o.value.viewBox},[a("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(i.class+=" "+o.value.cls),a(e.tag,i,l(n.default,[o.value.content])))}}}),J=(e,n)=>{const r=e.__vccOpts||e;for(const[c,u]of n)r[c]=u;return r};export{H as Q,J as _,V as a,G as b,l as c,k as d,j as e,A as f,F as h,M as u};