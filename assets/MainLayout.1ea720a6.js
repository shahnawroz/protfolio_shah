import{u as zt,a as _t,v as Bt,c as Ue,g as $t,b as Vt,Q as ee,R as ue}from"./QBtn.4e995a2f.js";import{c as $,a as v,h as L,r as E,i as Re,o as U,b as N,n as De,d as K,g as O,l as R,e as qe,f as H,j as ae,w as x,k as Ht,s as Fe,H as Ke,m as P,p as Pt,q as Ot,P as Mt,t as Qt,u as Rt,v as se,x as ze,y as Ge,z as _e,A as Qe,B as Be,C as le,D as st,E as Dt,F as ce,G as Ft,I as At,J as Wt,K as M,L as Q,M as z,N as B,O as te,Q as de,R as fe,S as ve,T as me}from"./index.d15c829a.js";import{h as G,a as ct,b as Je,c as dt,_ as Nt}from"./plugin-vue_export-helper.c29eaffe.js";import{u as Ae,a as We}from"./use-dark.3acb4bf0.js";var jt=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:n.value},G(o.default))}}),It=$({name:"QSpace",setup(){const e=L("div",{class:"q-space"});return()=>e}}),Xt=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:n.value,role:"toolbar"},G(o.default))}});function Yt(){const e=E(!Re.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const ft=typeof ResizeObserver!="undefined",Ze=ft===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var we=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,a,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),a){const{offsetWidth:d,offsetHeight:c}=a;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=O();if(f.trigger=l,ft===!0){let d;const c=i=>{a=f.$el.parentNode,a?(d=new ResizeObserver(l),d.observe(a),u()):i!==!0&&K(()=>{c(!0)})};return U(()=>{c()}),N(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():a&&d.unobserve(a))}),De}else{let i=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,R.passive),c=void 0)},w=function(){i(),a&&a.contentDocument&&(c=a.contentDocument.defaultView,c.addEventListener("resize",l,R.passive),u())};const{isHydrated:d}=Yt();let c;return U(()=>{K(()=>{a=f.$el,a&&w()})}),N(i),()=>{if(d.value===!0)return L("object",{class:"q--avoid-card-border",style:Ze.style,tabindex:-1,type:"text/html",data:Ze.url,"aria-hidden":"true",onLoad:w})}}}}),Ut=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=O(),t=qe(ae,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const l=E(parseInt(e.heightHint,10)),u=E(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||a.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?l.value:0;const s=l.value-t.scroll.value.position;return s>0?s:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),i=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=v(()=>{const s=t.rows.value.top,b={};return s[0]==="l"&&t.left.space===!0&&(b[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(b[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function h(s,b){t.update("header",s,b)}function y(s,b){s.value!==b&&(s.value=b)}function k({height:s}){y(l,s),h("size",s)}function S(s){i.value===!0&&y(u,!0),n("focusin",s)}x(()=>e.modelValue,s=>{h("space",s),y(u,!0),t.animate()}),x(d,s=>{h("offset",s)}),x(()=>e.reveal,s=>{s===!1&&y(u,e.modelValue)}),x(u,s=>{t.animate(),n("reveal",s)}),x(t.scroll,s=>{e.reveal===!0&&y(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&h("size",l.value),h("space",e.modelValue),h("offset",d.value),N(()=>{t.instances.header===p&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const s=ct(o.default,[]);return e.elevated===!0&&s.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(L(we,{debounce:0,onResize:k})),L("header",{class:w.value,style:C.value,onFocusin:S},s)}}}),he=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:n.value},G(o.default))}}),ye=$({name:"QItem",props:{...Ae,...zt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=O(),t=We(e,a),{hasLink:l,linkAttrs:u,linkClass:f,linkTag:d,navigateOnClick:c}=_t(),i=E(null),w=E(null),C=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),h=v(()=>e.disable!==!0&&C.value===!0),y=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=v(()=>{if(e.insetLevel===void 0)return null;const b=a.lang.rtl===!0?"Right":"Left";return{["padding"+b]:16+e.insetLevel*56+"px"}});function S(b){h.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===i.value?w.value.focus():document.activeElement===w.value&&i.value.focus()),c(b))}function p(b){if(h.value===!0&&Ht(b,[13,32])===!0){Fe(b),b.qKeyEvent=!0;const g=new MouseEvent("click",b);g.qKeyEvent=!0,i.value.dispatchEvent(g)}n("keyup",b)}function s(){const b=ct(o.default,[]);return h.value===!0&&b.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:i,class:y.value,style:k.value,role:"listitem",onClick:S,onKeyup:p};return h.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,u.value)):C.value===!0&&(b["aria-disabled"]="true"),L(d.value,b,s())}}});const Kt=["ul","ol"];var Gt=$({name:"QList",props:{...Ae,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=O(),a=We(e,n.proxy.$q),t=v(()=>Kt.includes(e.tag)?null:"list"),l=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:l.value,role:t.value},G(o.default))}});function Jt(e,o,n){let a;function t(){a!==void 0&&(Ke.remove(a),a=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){a={condition:()=>n.value===!0,handler:o},Ke.add(a)}}}const Zt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},eo=["beforeShow","show","beforeHide","hide"];function to({showing:e,canShow:o,hideOnRouteChange:n,handleShow:a,handleHide:t,processOnMount:l}){const u=O(),{props:f,emit:d,proxy:c}=u;let i;function w(s){e.value===!0?y(s):C(s)}function C(s){if(f.disable===!0||s!==void 0&&s.qAnchorHandled===!0||o!==void 0&&o(s)!==!0)return;const b=f["onUpdate:modelValue"]!==void 0;b===!0&&(d("update:modelValue",!0),i=s,K(()=>{i===s&&(i=void 0)})),(f.modelValue===null||b===!1)&&h(s)}function h(s){e.value!==!0&&(e.value=!0,d("beforeShow",s),a!==void 0?a(s):d("show",s))}function y(s){if(f.disable===!0)return;const b=f["onUpdate:modelValue"]!==void 0;b===!0&&(d("update:modelValue",!1),i=s,K(()=>{i===s&&(i=void 0)})),(f.modelValue===null||b===!1)&&k(s)}function k(s){e.value!==!1&&(e.value=!1,d("beforeHide",s),t!==void 0?t(s):d("hide",s))}function S(s){f.disable===!0&&s===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):s===!0!==e.value&&(s===!0?h:k)(i)}x(()=>f.modelValue,S),n!==void 0&&Bt(u)===!0&&x(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&y()}),l===!0&&U(()=>{S(f.modelValue)});const p={show:C,hide:y,toggle:w};return Object.assign(c,p),p}const oo=[Element,String],lo=[null,document,document.body,document.scrollingElement,document.documentElement];function no(e,o){let n=$t(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return lo.includes(n)?window:n}function vt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function mt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let be;function $e(){if(be!==void 0)return be;const e=document.createElement("p"),o=document.createElement("div");Ue(e,{width:"100%",height:"200px"}),Ue(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=o.clientWidth),o.remove(),be=n-a,be}function ao(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let oe=0,Ve,He,ne,Pe=!1,et,tt,ot,I=null;function io(e){ro(e)&&Fe(e)}function ro(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Pt(e),n=e.shiftKey&&!e.deltaX,a=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||a?e.deltaY:e.deltaX;for(let l=0;l<o.length;l++){const u=o[l];if(ao(u,a))return a?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function lt(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ge(e){Pe!==!0&&(Pe=!0,requestAnimationFrame(()=>{Pe=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:a}=document.scrollingElement;(ne===void 0||o!==window.innerHeight)&&(ne=n-o,document.scrollingElement.scrollTop=a),a>ne&&(document.scrollingElement.scrollTop-=Math.ceil((a-ne)/8))}))}function nt(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:t}=window.getComputedStyle(o);Ve=mt(window),He=vt(window),et=o.style.left,tt=o.style.top,ot=window.location.href,o.style.left=`-${Ve}px`,o.style.top=`-${He}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,P.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ge,R.passiveCapture),window.visualViewport.addEventListener("scroll",ge,R.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",lt,R.passiveCapture))}P.is.desktop===!0&&P.is.mac===!0&&window[`${e}EventListener`]("wheel",io,R.notPassive),e==="remove"&&(P.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ge,R.passiveCapture),window.visualViewport.removeEventListener("scroll",ge,R.passiveCapture)):window.removeEventListener("scroll",lt,R.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=et,o.style.top=tt,window.location.href===ot&&window.scrollTo(Ve,He),ne=void 0)}function uo(e){let o="add";if(e===!0){if(oe++,I!==null){clearTimeout(I),I=null;return}if(oe>1)return}else{if(oe===0||(oe--,oe>0))return;if(o="remove",P.is.ios===!0&&P.is.nativeMobile===!0){I!==null&&clearTimeout(I),I=setTimeout(()=>{nt(o),I=null},100);return}}nt(o)}function so(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,uo(o))}}}function co(){let e=null;const o=O();function n(){e!==null&&(clearTimeout(e),e=null)}return Ot(n),N(n),{removeTimeout:n,registerTimeout(a,t){n(),Vt(o)===!1&&(e=setTimeout(()=>{e=null,a()},t))}}}const Ne={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},fo=Object.keys(Ne);Ne.all=!0;function at(e){const o={};for(const n of fo)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Ne:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const vo=["INPUT","TEXTAREA"];function it(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&vo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function mo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Oe(e,o,n){const a=Qe(e);let t,l=a.left-o.event.x,u=a.top-o.event.y,f=Math.abs(l),d=Math.abs(u);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=u<0?"up":"down":c.up===!0&&u<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&u>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,i=!0,t==="left"||t==="right"?(a.left-=l,f=0,l=0):(a.top-=u,d=0,u=0)}return{synthetic:i,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:a,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:l,y:u},delta:{x:a.left-o.event.lastX,y:a.top-o.event.lastY}}}}let ho=0;var Me=Qt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&P.has.touch!==!0)return;function a(l,u){n.mouse===!0&&u===!0?Fe(l):(n.stop===!0&&_e(l),n.prevent===!0&&Ge(l))}const t={uid:"qvtp_"+ho++,handler:o,modifiers:n,direction:at(n),noop:De,mouseStart(l){it(l,t)&&Rt(l)&&(se(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(it(l,t)){const u=l.target;se(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,u){if(P.is.firefox===!0&&ze(e,!0),t.lastEvt=l,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ge(c),l.cancelBubble===!0&&_e(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}_e(l)}const{left:f,top:d}=Qe(l);t.event={x:f,y:d,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const u=Qe(l),f=u.left-t.event.x,d=u.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,i=()=>{a(l,c);let h;n.preserveCursor!==!0&&n.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),mo(),t.styleCleanup=y=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),c===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{k(),y()},50):k()}else y!==void 0&&y()}};if(t.event.detected===!0){t.event.isFirst!==!0&&a(l,t.event.mouse);const{payload:h,synthetic:y}=Oe(l,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=y===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(l);return}const w=Math.abs(f),C=Math.abs(d);w!==C&&(t.direction.horizontal===!0&&w>C||t.direction.vertical===!0&&w<C||t.direction.up===!0&&w<C&&d<0||t.direction.down===!0&&w<C&&d>0||t.direction.left===!0&&w>C&&f<0||t.direction.right===!0&&w>C&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,u){if(t.event!==void 0){if(Be(t,"temp"),P.is.firefox===!0&&ze(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Oe(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=Oe(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";se(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}P.has.touch===!0&&se(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=at(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Be(o,"main"),Be(o,"temp"),P.is.firefox===!0&&ze(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function pe(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const rt=150;var yo=$({name:"QDrawer",inheritAttrs:!1,props:{...Zt,...Ae,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...eo,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:a}){const t=O(),{proxy:{$q:l}}=t,u=We(e,l),{preventBodyScroll:f}=so(),{registerTimeout:d,removeTimeout:c}=co(),i=qe(ae,H);if(i===H)return console.error("QDrawer needs to be child of QLayout"),H;let w,C=null,h;const y=E(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),k=v(()=>e.mini===!0&&y.value!==!0),S=v(()=>k.value===!0?e.miniWidth:e.width),p=E(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),s=v(()=>e.persistent!==!0&&(y.value===!0||ht.value===!0));function b(r,q){if(D(),r!==!1&&i.animate(),V(0),y.value===!0){const _=i.instances[ie.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),A(1),i.isContainer.value!==!0&&f(!0)}else A(0),r!==!1&&Le(!1);d(()=>{r!==!1&&Le(!0),q!==!0&&n("show",r)},rt)}function g(r,q){J(),r!==!1&&i.animate(),A(0),V(X.value*S.value),Te(),q!==!0?d(()=>{n("hide",r)},rt):c()}const{show:m,hide:T}=to({showing:p,hideOnRouteChange:s,handleShow:b,handleHide:g}),{addToHistory:D,removeFromHistory:J}=Jt(p,T,s),j={belowBreakpoint:y,hide:T},F=v(()=>e.side==="right"),X=v(()=>(l.lang.rtl===!0?-1:1)*(F.value===!0?1:-1)),je=E(0),Y=E(!1),Ce=E(!1),Ie=E(S.value*X.value),ie=v(()=>F.value===!0?"left":"right"),xe=v(()=>p.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),Se=v(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(F.value?"R":"L")!==-1||l.platform.is.ios===!0&&i.isContainer.value===!0),Z=v(()=>e.overlay===!1&&p.value===!0&&y.value===!1),ht=v(()=>e.overlay===!0&&p.value===!0&&y.value===!1),yt=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&Y.value===!1?" hidden":"")),bt=v(()=>({backgroundColor:`rgba(0,0,0,${je.value*.4})`})),Xe=v(()=>F.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),gt=v(()=>F.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),pt=v(()=>{const r={};return i.header.space===!0&&Xe.value===!1&&(Se.value===!0?r.top=`${i.header.offset}px`:i.header.space===!0&&(r.top=`${i.header.size}px`)),i.footer.space===!0&&gt.value===!1&&(Se.value===!0?r.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(r.bottom=`${i.footer.size}px`)),r}),wt=v(()=>{const r={width:`${S.value}px`,transform:`translateX(${Ie.value}px)`};return y.value===!0?r:Object.assign(r,pt.value)}),qt=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ct=v(()=>`q-drawer q-drawer--${e.side}`+(Ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(Se.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Xe.value===!0?" q-drawer--top-padding":""))),xt=v(()=>{const r=l.lang.rtl===!0?e.side:ie.value;return[[Me,Tt,void 0,{[r]:!0,mouse:!0}]]}),St=v(()=>{const r=l.lang.rtl===!0?ie.value:e.side;return[[Me,Ye,void 0,{[r]:!0,mouse:!0}]]}),kt=v(()=>{const r=l.lang.rtl===!0?ie.value:e.side;return[[Me,Ye,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ke(){Et(y,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}x(y,r=>{r===!0?(w=p.value,p.value===!0&&T(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(p.value===!0?(V(0),A(0),Te()):m(!1))}),x(()=>e.side,(r,q)=>{i.instances[q]===j&&(i.instances[q]=void 0,i[q].space=!1,i[q].offset=0),i.instances[r]=j,i[r].size=S.value,i[r].space=Z.value,i[r].offset=xe.value}),x(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ke()}),x(()=>e.behavior+e.breakpoint,ke),x(i.isContainer,r=>{p.value===!0&&f(r!==!0),r===!0&&ke()}),x(i.scrollbarWidth,()=>{V(p.value===!0?0:void 0)}),x(xe,r=>{W("offset",r)}),x(Z,r=>{n("onLayout",r),W("space",r)}),x(F,()=>{V()}),x(S,r=>{V(),Ee(e.miniToOverlay,r)}),x(()=>e.miniToOverlay,r=>{Ee(r,S.value)}),x(()=>l.lang.rtl,()=>{V()}),x(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Lt(),i.animate())}),x(k,r=>{n("miniState",r)});function V(r){r===void 0?K(()=>{r=p.value===!0?0:S.value,V(X.value*r)}):(i.isContainer.value===!0&&F.value===!0&&(y.value===!0||Math.abs(r)===S.value)&&(r+=X.value*i.scrollbarWidth.value),Ie.value=r)}function A(r){je.value=r}function Le(r){const q=r===!0?"remove":i.isContainer.value!==!0?"add":"";q!==""&&document.body.classList[q]("q-body--drawer-toggle")}function Lt(){C!==null&&clearTimeout(C),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Ce.value=!0,C=setTimeout(()=>{C=null,Ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Tt(r){if(p.value!==!1)return;const q=S.value,_=pe(r.distance.x,0,q);if(r.isFinal===!0){_>=Math.min(75,q)===!0?m():(i.animate(),A(0),V(X.value*q)),Y.value=!1;return}V((l.lang.rtl===!0?F.value!==!0:F.value)?Math.max(q-_,0):Math.min(0,_-q)),A(pe(_/q,0,1)),r.isFirst===!0&&(Y.value=!0)}function Ye(r){if(p.value!==!0)return;const q=S.value,_=r.direction===e.side,re=(l.lang.rtl===!0?_!==!0:_)?pe(r.distance.x,0,q):0;if(r.isFinal===!0){Math.abs(re)<Math.min(75,q)===!0?(i.animate(),A(1),V(0)):T(),Y.value=!1;return}V(X.value*re),A(pe(1-re/q,0,1)),r.isFirst===!0&&(Y.value=!0)}function Te(){f(!1),Le(!0)}function W(r,q){i.update(e.side,r,q)}function Et(r,q){r.value!==q&&(r.value=q)}function Ee(r,q){W("size",r===!0?e.miniWidth:q)}return i.instances[e.side]=j,Ee(e.miniToOverlay,S.value),W("space",Z.value),W("offset",xe.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",Z.value),n("miniState",k.value),w=e.showIfAbove===!0;const r=()=>{(p.value===!0?b:g)(!1,!0)};if(i.totalWidth.value!==0){K(r);return}h=x(i.totalWidth,()=>{h(),h=void 0,p.value===!1&&e.showIfAbove===!0&&y.value===!1?m(!1):r()})}),N(()=>{h!==void 0&&h(),C!==null&&(clearTimeout(C),C=null),p.value===!0&&Te(),i.instances[e.side]===j&&(i.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const r=[];y.value===!0&&(e.noSwipeOpen===!1&&r.push(le(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),xt.value)),r.push(Je("div",{ref:"backdrop",class:yt.value,style:bt.value,"aria-hidden":"true",onClick:T},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>kt.value)));const q=k.value===!0&&o.mini!==void 0,_=[L("div",{...a,key:""+q,class:[qt.value,a.class]},q===!0?o.mini():G(o.default))];return e.elevated===!0&&p.value===!0&&_.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Je("aside",{ref:"content",class:Ct.value,style:wt.value},_,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>St.value)),L("div",{class:"q-drawer-container"},r)}}}),bo=$({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=O(),a=qe(ae,H);if(a===H)return console.error("QPageContainer needs to be child of QLayout"),H;st(Dt,!0);const t=v(()=>{const l={};return a.header.space===!0&&(l.paddingTop=`${a.header.size}px`),a.right.space===!0&&(l[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(l.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(l[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),l});return()=>L("div",{class:"q-page-container",style:t.value},G(o.default))}}),go=$({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=O(),t=qe(ae,H);if(t===H)return console.error("QFooter needs to be child of QLayout"),H;const l=E(parseInt(e.heightHint,10)),u=E(!0),f=E(Re.value===!0||t.isContainer.value===!0?0:window.innerHeight),d=v(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||a.platform.is.ios&&t.isContainer.value===!0),c=v(()=>t.isContainer.value===!0?t.containerHeight.value:f.value),i=v(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return u.value===!0?l.value:0;const m=t.scroll.value.position+c.value+l.value-t.height.value;return m>0?m:0}),w=v(()=>e.modelValue!==!0||d.value===!0&&u.value!==!0),C=v(()=>e.modelValue===!0&&w.value===!0&&e.reveal===!0),h=v(()=>"q-footer q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(d.value!==!0?" hidden":""):"")),y=v(()=>{const m=t.rows.value.bottom,T={};return m[0]==="l"&&t.left.space===!0&&(T[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),m[2]==="r"&&t.right.space===!0&&(T[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function k(m,T){t.update("footer",m,T)}function S(m,T){m.value!==T&&(m.value=T)}function p({height:m}){S(l,m),k("size",m)}function s(){if(e.reveal!==!0)return;const{direction:m,position:T,inflectionPoint:D}=t.scroll.value;S(u,m==="up"||T-D<100||t.height.value-c.value-T-l.value<300)}function b(m){C.value===!0&&S(u,!0),n("focusin",m)}x(()=>e.modelValue,m=>{k("space",m),S(u,!0),t.animate()}),x(i,m=>{k("offset",m)}),x(()=>e.reveal,m=>{m===!1&&S(u,e.modelValue)}),x(u,m=>{t.animate(),n("reveal",m)}),x([l,t.scroll,t.height],s),x(()=>a.screen.height,m=>{t.isContainer.value!==!0&&S(f,m)});const g={};return t.instances.footer=g,e.modelValue===!0&&k("size",l.value),k("space",e.modelValue),k("offset",i.value),N(()=>{t.instances.footer===g&&(t.instances.footer=void 0,k("size",0),k("offset",0),k("space",!1))}),()=>{const m=dt(o.default,[L(we,{debounce:0,onResize:p})]);return e.elevated===!0&&m.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),L("footer",{class:h.value,style:y.value,onFocusin:b},m)}}});const{passive:ut}=R,po=["both","horizontal","vertical"];var wo=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>po.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:oo},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,l;x(()=>e.scrollTarget,()=>{d(),f()});function u(){a!==null&&a();const w=Math.max(0,vt(t)),C=mt(t),h={top:w-n.position.top,left:C-n.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const y=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";n.position={top:w,left:C},n.directionChanged=n.direction!==y,n.delta=h,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=no(l,e.scrollTarget),t.addEventListener("scroll",c,ut),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,ut),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")u();else if(a===null){const[C,h]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];a=()=>{h(C),a=null}}}const{proxy:i}=O();return x(()=>i.$q.lang.rtl,u),U(()=>{l=i.$el.parentNode,f()}),N(()=>{a!==null&&a(),d()}),Object.assign(i,{trigger:c,getPosition:()=>n}),De}}),qo=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:a}}=O(),t=E(null),l=E(a.screen.height),u=E(e.container===!0?0:a.screen.width),f=E({position:0,direction:"down",inflectionPoint:0}),d=E(0),c=E(Re.value===!0?0:$e()),i=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),C=v(()=>c.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),h=v(()=>c.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function y(g){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=m,e.onScroll!==void 0&&n("scroll",m)}}function k(g){const{height:m,width:T}=g;let D=!1;l.value!==m&&(D=!0,l.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),p()),u.value!==T&&(D=!0,u.value=T),D===!0&&e.onResize!==void 0&&n("resize",g)}function S({height:g}){d.value!==g&&(d.value=g,p())}function p(){if(e.container===!0){const g=l.value>d.value?$e():0;c.value!==g&&(c.value=g)}}let s=null;const b={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>u.value+c.value),rows:v(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:f,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,m,T){b[g][m]=T}};if(st(ae,b),$e()>0){let T=function(){g=null,m.classList.remove("hide-scrollbar")},D=function(){if(g===null){if(m.scrollHeight>a.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(T,300)},J=function(j){g!==null&&j==="remove"&&(clearTimeout(g),T()),window[`${j}EventListener`]("resize",D)},g=null;const m=document.body;x(()=>e.container!==!0?"add":"remove",J),e.container!==!0&&J("add"),Ft(()=>{J("remove")})}return()=>{const g=dt(o.default,[L(wo,{onScroll:y}),L(we,{onResize:k})]),m=L("div",{class:i.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(we,{onResize:S}),L("div",{class:"absolute-full",style:C.value},[L("div",{class:"scroll",style:h.value},[m])])]):m}}});const Co={__name:"MainLayout",setup(e){const o=E(!1),n=()=>{o.value=!o.value},a=At();return(t,l)=>{const u=Wt("router-view");return M(),Q(qo,{view:"hHh Lpr fFf"},{default:z(()=>[B(Ut,{class:"header text-white"},{default:z(()=>[B(Xt,{class:"text-white"},{default:z(()=>[t.$q.screen.gt.md?te("",!0):(M(),Q(ee,{key:0,flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n,class:"q-mr-sm"})),B(jt,{class:"logo text-bold"},{default:z(()=>l[1]||(l[1]=[de("span",{class:"text-h5 text-center"},"Shah Nawrose",-1)])),_:1}),B(It),t.$q.screen.gt.md?(M(),Q(ee,{key:1,flat:"",class:fe([{active:ve(a).path==="/"},"nav-btn"]),label:"Home",to:{path:"/"}},null,8,["class"])):te("",!0),t.$q.screen.gt.md?(M(),Q(ee,{key:2,flat:"",class:fe([{active:ve(a).path==="/projects"},"nav-btn"]),label:"Projects",to:{path:"/projects"}},null,8,["class"])):te("",!0),t.$q.screen.gt.md?(M(),Q(ee,{key:3,flat:"",class:fe([{active:ve(a).path==="/skills"},"nav-btn"]),label:"Skills",to:{path:"/skills"}},null,8,["class"])):te("",!0),t.$q.screen.gt.md?(M(),Q(ee,{key:4,flat:"",class:fe([{active:ve(a).path==="/contact"},"nav-btn"]),label:"Contact",to:{path:"/contact"}},null,8,["class"])):te("",!0)]),_:1})]),_:1}),B(yo,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=f=>o.value=f),side:"left",bordered:"",class:"text-primary bg-dark drawer"},{default:z(()=>[B(Gt,null,{default:z(()=>[le((M(),Q(ye,{clickable:"",to:{path:"/"}},{default:z(()=>[B(he,null,{default:z(()=>l[2]||(l[2]=[me("Home")])),_:1})]),_:1})),[[ue]]),le((M(),Q(ye,{clickable:"",to:{path:"/projects"}},{default:z(()=>[B(he,null,{default:z(()=>l[3]||(l[3]=[me("Projects")])),_:1})]),_:1})),[[ue]]),le((M(),Q(ye,{clickable:"",to:{path:"/skills"}},{default:z(()=>[B(he,null,{default:z(()=>l[4]||(l[4]=[me("Skills")])),_:1})]),_:1})),[[ue]]),le((M(),Q(ye,{clickable:"",to:{path:"/contact"}},{default:z(()=>[B(he,null,{default:z(()=>l[5]||(l[5]=[me("Contact")])),_:1})]),_:1})),[[ue]])]),_:1})]),_:1},8,["modelValue"]),B(bo,null,{default:z(()=>[B(u)]),_:1}),B(go,{class:"text-white q-pa-md q-pt-lg shadow-2 footer"},{default:z(()=>l[6]||(l[6]=[de("div",{class:"q-gutter-md text-center"},[de("div",{class:"text-h6"},"\xA9 2024"),de("div",{class:"text-h6"},"Shah Nawrose")],-1)])),_:1})]),_:1})}}};var Eo=Nt(Co,[["__scopeId","data-v-4df00b5c"]]);export{Eo as default};
