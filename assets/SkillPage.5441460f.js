import{r as S,k as De,v as ke,d as Ae,t as le,w as M,o as Je,b as O,g as se,z as he,l as ve,Z as Se,c as ye,E as Ue,_ as Xe,h as H,$ as Ye,a as k,U as Ze,p as xe,T as ge,s as et,H as fe,I as Te,J as D,M as U,V as tt,W as nt,X as it,K as j,Y as X,P as Ee}from"./index.bfdc6c16.js";import{c as pe,i as lt,u as Fe,s as ot,a as ze,b as Qe,g as at,d as st,e as rt}from"./selection.9fd3d545.js";import{r as _e,a as ut,b as ct}from"./focus-manager.c9b70bc2.js";import{f as dt,h as Ve,p as ft,_ as mt,Q as ht}from"./plugin-vue_export-helper.dfadc240.js";import{u as je}from"./use-timeout.cb511972.js";import{Q as vt,a as gt,c as pt,b as bt}from"./QCard.5538f555.js";import{Q as yt}from"./QPage.65878e2d.js";import"./use-dark.4df98846.js";const xt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean};function wt({showing:e,avoidEmit:n,configureAnchorEl:i}){const{props:t,proxy:l,emit:r}=se(),o=S(null);let s=null;function u(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};i===void 0&&(Object.assign(c,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){De(a,13)===!0&&c.toggle(a)},contextClick(a){l.hide(a),ke(a),Ae(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:ke,mobileTouch(a){if(c.mobileCleanup(a),u(a)!==!0)return;l.hide(a),o.value.classList.add("non-selectable");const f=a.target;le(c,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&pe()}}),i=function(a=t.contextMenu){if(t.noParentEvent===!0||o.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[o.value,"touchstart","mobileTouch","passive"]]:f=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:f=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],le(c,"anchor",f)});function h(){he(c,"anchor")}function b(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)o.value=null;else if(t.target===!0)b(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,i()):(o.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return M(()=>t.contextMenu,a=>{o.value!==null&&(h(),i(a))}),M(()=>t.target,()=>{o.value!==null&&h(),x()}),M(()=>t.noParentEvent,a=>{o.value!==null&&(a===!0?h():i())}),Je(()=>{x(),n!==!0&&t.modelValue===!0&&o.value===null&&r("update:modelValue",!1)}),O(()=>{s!==null&&clearTimeout(s),h()}),{anchorEl:o,canShow:u,anchorEvents:c}}function kt(e,n){const i=S(null);let t;function l(s,u){const c=`${u!==void 0?"add":"remove"}EventListener`,h=u!==void 0?u:t;s!==window&&s[c]("scroll",h,ve.passive),window[c]("scroll",h,ve.passive),t=u}function r(){i.value!==null&&(l(i.value),i.value=null)}const o=M(()=>e.noParentEvent,()=>{i.value!==null&&(r(),n())});return O(o),{localScrollTarget:i,unconfigureScrollTarget:r,changeScrollEvent:l}}let St=1,Tt=document.body;function Et(e,n){const i=document.createElement("div");if(i.id=n!==void 0?`q-portal--${n}--${St++}`:e,Se.globalNodes!==void 0){const t=Se.globalNodes.class;t!==void 0&&(i.className=t)}return Tt.appendChild(i),i}function _t(e){e.remove()}const Y=[],Ct=ye({name:"QPortal",setup(e,{slots:n}){return()=>n.default()}});function Ht(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Oe(e,n,i,t){const l=S(!1),r=S(!1);let o=null;const s={},u=t==="dialog"&&Ht(e);function c(b){if(b===!0){_e(s),r.value=!0;return}r.value=!1,l.value===!1&&(u===!1&&o===null&&(o=Et(!1,t)),l.value=!0,Y.push(e.proxy),ut(s))}function h(b){if(r.value=!1,b!==!0)return;_e(s),l.value=!1;const x=Y.indexOf(e.proxy);x!==-1&&Y.splice(x,1),o!==null&&(_t(o),o=null)}return Ue(()=>{h(!0)}),e.proxy.__qPortal=!0,Xe(e.proxy,"contentEl",()=>n.value),{showPortal:c,hidePortal:h,portalIsActive:l,portalIsAccessible:r,renderPortal:()=>u===!0?i():l.value===!0?[H(Ye,{to:o},H(Ct,i))]:void 0}}const ie={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ne(e,n=()=>{},i=()=>{}){return{transitionProps:k(()=>{const t=`q-transition--${e.transitionShow||n()}`,l=`q-transition--${e.transitionHide||i()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:k(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ie(){let e;const n=se();function i(){e=void 0}return Ze(i),O(i),{removeTick:i,registerTick(t){e=t,Ae(()=>{e===t&&(dt(n)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:oe}=ve,A=[];function ae(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let i=Y.length-1;for(;i>=0;){const t=Y[i].$;if(t.type.name==="QTooltip"){i--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;i--}for(let t=A.length-1;t>=0;t--){const l=A[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function qt(e){A.push(e),A.length===1&&(document.addEventListener("mousedown",ae,oe),document.addEventListener("touchstart",ae,oe))}function Ce(e){const n=A.findIndex(i=>i===e);n!==-1&&(A.splice(n,1),A.length===0&&(document.removeEventListener("mousedown",ae,oe),document.removeEventListener("touchstart",ae,oe)))}let He,qe;function Pe(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Pt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const be={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{be[`${e}#ltr`]=e,be[`${e}#rtl`]=e});function Me(e,n){const i=e.split(" ");return{vertical:i[0],horizontal:be[`${i[1]}#${n===!0?"rtl":"ltr"}`]}}function Mt(e,n){let{top:i,left:t,right:l,bottom:r,width:o,height:s}=e.getBoundingClientRect();return n!==void 0&&(i-=n[1],t-=n[0],r+=n[1],l+=n[0],o+=n[0],s+=n[1]),{top:i,bottom:r,height:s,left:t,right:l,width:o,middle:t+(l-t)/2,center:i+(r-i)/2}}function Bt(e,n,i){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,i!==void 0&&(t+=i[1],l+=i[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function Wt(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function Be(e,n,i,t){return{top:e[i.vertical]-n[t.vertical],left:e[i.horizontal]-n[t.horizontal]}}function Re(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Re(e,n+1)},10);return}const{targetEl:i,offset:t,anchorEl:l,anchorOrigin:r,selfOrigin:o,absoluteOffset:s,fit:u,cover:c,maxHeight:h,maxWidth:b}=e;if(xe.is.ios===!0&&window.visualViewport!==void 0){const P=document.body.style,{offsetLeft:w,offsetTop:y}=window.visualViewport;w!==He&&(P.setProperty("--q-pe-left",w+"px"),He=w),y!==qe&&(P.setProperty("--q-pe-top",y+"px"),qe=y)}const{scrollLeft:x,scrollTop:a}=i,f=s===void 0?Mt(l,c===!0?[0,0]:t):Bt(l,s,t);Object.assign(i.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:_,offsetHeight:q}=i,{elWidth:I,elHeight:B}=u===!0||c===!0?{elWidth:Math.max(f.width,_),elHeight:c===!0?Math.max(f.height,q):q}:{elWidth:_,elHeight:q};let p={maxWidth:b,maxHeight:h};(u===!0||c===!0)&&(p.minWidth=f.width+"px",c===!0&&(p.minHeight=f.height+"px")),Object.assign(i.style,p);const E=Wt(I,B);let m=Be(f,E,r,o);if(s===void 0||t===void 0)me(m,f,E,r,o);else{const{top:P,left:w}=m;me(m,f,E,r,o);let y=!1;if(m.top!==P){y=!0;const T=2*t[1];f.center=f.top-=T,f.bottom-=T+2}if(m.left!==w){y=!0;const T=2*t[0];f.middle=f.left-=T,f.right-=T+2}y===!0&&(m=Be(f,E,r,o),me(m,f,E,r,o))}p={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(p.maxHeight=m.maxHeight+"px",f.height>m.maxHeight&&(p.minHeight=p.maxHeight)),m.maxWidth!==void 0&&(p.maxWidth=m.maxWidth+"px",f.width>m.maxWidth&&(p.minWidth=p.maxWidth)),Object.assign(i.style,p),i.scrollTop!==a&&(i.scrollTop=a),i.scrollLeft!==x&&(i.scrollLeft=x)}function me(e,n,i,t,l){const r=i.bottom,o=i.right,s=lt(),u=window.innerHeight-s,c=document.body.clientWidth;if(e.top<0||e.top+r>u)if(l.vertical==="center")e.top=n[t.vertical]>u/2?Math.max(0,u-r):0,e.maxHeight=Math.min(r,u);else if(n[t.vertical]>u/2){const h=Math.min(u,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(r,h),e.top=Math.max(0,h-r)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(r,u-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),l.horizontal==="middle")e.left=n[t.horizontal]>c/2?Math.max(0,c-o):0;else if(n[t.horizontal]>c/2){const h=Math.min(c,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(o,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(o,c-e.left)}var $t=ye({name:"QTooltip",inheritAttrs:!1,props:{...xt,...Fe,...ie,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...ie.transitionShow,default:"jump-down"},transitionHide:{...ie.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Pe},self:{type:String,default:"top middle",validator:Pe},offset:{type:Array,default:()=>[14,14],validator:Pt},scrollTarget:ot,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ze],setup(e,{slots:n,emit:i,attrs:t}){let l,r;const o=se(),{proxy:{$q:s}}=o,u=S(null),c=S(!1),h=k(()=>Me(e.anchor,s.lang.rtl)),b=k(()=>Me(e.self,s.lang.rtl)),x=k(()=>e.persistent!==!0),{registerTick:a,removeTick:f}=Ie(),{registerTimeout:_}=je(),{transitionProps:q,transitionStyle:I}=Ne(e),{localScrollTarget:B,changeScrollEvent:p,unconfigureScrollTarget:E}=kt(e,G),{anchorEl:m,canShow:P,anchorEvents:w}=wt({showing:c,configureAnchorEl:K}),{show:y,hide:T}=Qe({showing:c,canShow:P,handleShow:re,handleHide:ue,hideOnRouteChange:x,processOnMount:!0});Object.assign(w,{delayShow:$,delayHide:R});const{showPortal:Z,hidePortal:ee,renderPortal:Q}=Oe(o,u,ce,"tooltip");if(s.platform.is.mobile===!0){const v={anchorEl:m,innerRef:u,onClickOutside(C){return T(C),C.target.classList.contains("q-dialog__backdrop")&&et(C),!0}},L=k(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);M(L,C=>{(C===!0?qt:Ce)(v)}),O(()=>{Ce(v)})}function re(v){Z(),a(()=>{r=new MutationObserver(()=>W()),r.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),W(),G()}),l===void 0&&(l=M(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,W)),_(()=>{Z(!0),i("show",v)},e.transitionDuration)}function ue(v){f(),ee(),te(),_(()=>{ee(!0),i("hide",v)},e.transitionDuration)}function te(){r!==void 0&&(r.disconnect(),r=void 0),l!==void 0&&(l(),l=void 0),E(),he(w,"tooltipTemp")}function W(){Re({targetEl:u.value,offset:e.offset,anchorEl:m.value,anchorOrigin:h.value,selfOrigin:b.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function $(v){if(s.platform.is.mobile===!0){pe(),document.body.classList.add("non-selectable");const L=m.value,C=["touchmove","touchcancel","touchend","click"].map(d=>[L,d,"delayHide","passiveCapture"]);le(w,"tooltipTemp",C)}_(()=>{y(v)},e.delay)}function R(v){s.platform.is.mobile===!0&&(he(w,"tooltipTemp"),pe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),_(()=>{T(v)},e.hideDelay)}function K(){if(e.noParentEvent===!0||m.value===null)return;const v=s.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];le(w,"anchor",v)}function G(){if(m.value!==null||e.scrollTarget!==void 0){B.value=at(m.value,e.scrollTarget);const v=e.noParentEvent===!0?W:T;p(B.value,v)}}function J(){return c.value===!0?H("div",{...t,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,I.value],role:"tooltip"},Ve(n.default)):null}function ce(){return H(ge,q.value,J)}return O(te),Object.assign(o.proxy,{updatePosition:W}),Q}});const F=[];let N;function Lt(e){N=e.keyCode===27}function Dt(){N===!0&&(N=!1)}function At(e){N===!0&&(N=!1,De(e,27)===!0&&F[F.length-1](e))}function Ke(e){window[e]("keydown",Lt),window[e]("blur",Dt),window[e]("keyup",At),N=!1}function Ft(e){xe.is.desktop===!0&&(F.push(e),F.length===1&&Ke("addEventListener"))}function We(e){const n=F.indexOf(e);n!==-1&&(F.splice(n,1),F.length===0&&Ke("removeEventListener"))}const z=[];function Ge(e){z[z.length-1](e)}function zt(e){xe.is.desktop===!0&&(z.push(e),z.length===1&&document.body.addEventListener("focusin",Ge))}function $e(e){const n=z.indexOf(e);n!==-1&&(z.splice(n,1),z.length===0&&document.body.removeEventListener("focusin",Ge))}let ne=0;const Qt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Le={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Vt=ye({name:"QDialog",inheritAttrs:!1,props:{...Fe,...ie,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...ze,"shake","click","escapeKey"],setup(e,{slots:n,emit:i,attrs:t}){const l=se(),r=S(null),o=S(!1),s=S(!1);let u=null,c=null,h,b;const x=k(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:a}=rt(),{registerTimeout:f}=je(),{registerTick:_,removeTick:q}=Ie(),{transitionProps:I,transitionStyle:B}=Ne(e,()=>Le[e.position][0],()=>Le[e.position][1]),p=k(()=>B.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:E,hidePortal:m,portalIsAccessible:P,renderPortal:w}=Oe(l,r,C,"dialog"),{hide:y}=Qe({showing:o,hideOnRouteChange:x,handleShow:te,handleHide:W,processOnMount:!0}),{addToHistory:T,removeFromHistory:Z}=st(o,y,x),ee=k(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Qt[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),Q=k(()=>o.value===!0&&e.seamless!==!0),re=k(()=>e.autoClose===!0?{onClick:ce}:{}),ue=k(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${Q.value===!0?"modal":"seamless"}`,t.class]);M(()=>e.maximized,d=>{o.value===!0&&J(d)}),M(Q,d=>{a(d),d===!0?(zt(L),Ft(K)):($e(L),We(K))});function te(d){T(),c=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,J(e.maximized),E(),s.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),_($)):q(),f(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:g,bottom:V}=document.activeElement.getBoundingClientRect(),{innerHeight:we}=window,de=window.visualViewport!==void 0?window.visualViewport.height:we;g>0&&V>de/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-de,V>=we?1/0:Math.ceil(document.scrollingElement.scrollTop+V-de/2))),document.activeElement.scrollIntoView()}b=!0,r.value.click(),b=!1}E(!0),s.value=!1,i("show",d)},e.transitionDuration)}function W(d){q(),Z(),G(!0),s.value=!0,m(),c!==null&&(((d&&d.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),f(()=>{m(!0),s.value=!1,i("hide",d)},e.transitionDuration)}function $(d){ct(()=>{let g=r.value;if(g!==null){if(d!==void 0){const V=g.querySelector(d);if(V!==null){V.focus({preventScroll:!0});return}}g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))}})}function R(d){d&&typeof d.focus=="function"?d.focus({preventScroll:!0}):$(),i("shake");const g=r.value;g!==null&&(g.classList.remove("q-animate--scale"),g.classList.add("q-animate--scale"),u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,r.value!==null&&(g.classList.remove("q-animate--scale"),$())},170))}function K(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&R():(i("escapeKey"),y()))}function G(d){u!==null&&(clearTimeout(u),u=null),(d===!0||o.value===!0)&&(J(!1),e.seamless!==!0&&(a(!1),$e(L),We(K))),d!==!0&&(c=null)}function J(d){d===!0?h!==!0&&(ne<1&&document.body.classList.add("q-body--dialog"),ne++,h=!0):h===!0&&(ne<2&&document.body.classList.remove("q-body--dialog"),ne--,h=!1)}function ce(d){b!==!0&&(y(d),i("click",d))}function v(d){e.persistent!==!0&&e.noBackdropDismiss!==!0?y(d):e.noShake!==!0&&R()}function L(d){e.allowFocusOutside!==!0&&P.value===!0&&ft(r.value,d.target)!==!0&&$('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:$,shake:R,__updateRefocusTarget(d){c=d||null}}),O(G);function C(){return H("div",{role:"dialog","aria-modal":Q.value===!0?"true":"false",...t,class:ue.value},[H(ge,{name:"q-transition--fade",appear:!0},()=>Q.value===!0?H("div",{class:"q-dialog__backdrop fixed-full",style:p.value,"aria-hidden":"true",tabindex:-1,onClick:v}):null),H(ge,I.value,()=>o.value===!0?H("div",{ref:r,class:ee.value,style:B.value,tabindex:-1,...re.value},Ve(n.default)):null)])}return w}});const jt={class:"skills-container"},Ot={class:"text-h6"},Nt={class:"q-mt-sm"},It={class:"q-mt-md"},Rt={__name:"SkillPage",setup(e){const n=S([{name:"Vue.js",description:"A progressive JavaScript framework.",details:"Vue.js is great for building interactive interfaces."},{name:"Quasar",description:"A high-performance Vue.js framework.",details:"Quasar Framework helps build responsive UIs."},{name:"JavaScript",description:"A versatile programming language.",details:"JavaScript is essential for modern web development."},{name:"Node.js",description:"Server-side JavaScript runtime.",details:"Node.js is widely used for backend applications."},{name:"MongoDB",description:"NoSQL database for modern apps.",details:"MongoDB is ideal for handling large datasets."},{name:"Git",description:"Version control system.",details:"Git helps manage code changes efficiently."},{name:"Docker",description:"Container platform.",details:"Docker is used to package applications into containers."}]),i=S(!1),t=S({}),l=o=>{t.value=o,i.value=!0},r=()=>{i.value=!1};return(o,s)=>(fe(),Te(yt,{class:"q-pa-md bg-dark text-white"},{default:D(()=>[s[1]||(s[1]=U("h2",{class:"q-mb-lg text-center text-info"},"My Skills",-1)),U("div",jt,[(fe(!0),tt(it,null,nt(n.value,u=>(fe(),Te(bt,{key:u.name,color:"primary","text-color":"white",icon:"code",clickable:"",onClick:c=>l(u),class:"skill-chip"},{default:D(()=>[Ee(X(u.name)+" ",1),j($t,null,{default:D(()=>[Ee(X(u.description),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),j(Vt,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=u=>i.value=u)},{default:D(()=>[j(vt,null,{default:D(()=>[j(gt,{class:"text-primary"},{default:D(()=>[U("div",Ot,X(t.value.name),1),U("div",Nt,X(t.value.description),1),U("div",It,X(t.value.details),1)]),_:1}),j(pt,{align:"right"},{default:D(()=>[j(ht,{flat:"",label:"Close",color:"primary",onClick:r})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};var tn=mt(Rt,[["__scopeId","data-v-7b14e9b8"]]);export{tn as default};
