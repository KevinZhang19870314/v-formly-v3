import{f as V,g as n,B as r,C as z,h as A,D as F,F as G,u as e,o as y,c as E,n as m,a as s,G as J,H as K,e as C,w as x,p as v,T as w,I as H,J as R,i as k,K as P,L as j,_ as q}from"./app.e2a2a9c4.js";const O={class:"demo-content"},Q=["innerHTML"],X=["innerHTML"],Y=["onClick"],T=new Map,Z=V({__name:"Demo",props:{component:null,info:null,highlightCode:null,code:null},setup(M){const p=M,D=n(null),_=n(null),a=n(null),I=n(null),u=n(null),f=n(!1),i=n(!1),d=n(!1),B=n(0),l=n(!1),h=r(()=>decodeURIComponent(p.info)),S=r(()=>decodeURIComponent(p.highlightCode)),U=r(()=>decodeURIComponent(p.code)),W=r(()=>h.value?e(I).clientHeight+e(u).clientHeight+20:e(u).clientHeight),L=r(()=>e(l)?"成功":"复制");z(i,t=>{e(a)&&(e(a).style.height=t?`${e(W)+1}px`:"0"),t||(d.value=!1,b()),setTimeout(()=>{var o;_.value=document,(o=e(_))==null||o.addEventListener("scroll",g),g()},200)}),A(()=>{F(()=>{B.value=e(u).offsetWidth})}),G(()=>{b()});function N(t){if(!e(l))try{navigator.clipboard.writeText(e(U)),l.value=!0;const o=t.target;clearTimeout(T.get(o));const c=setTimeout(()=>{o.blur(),T.delete(o),l.value=!1},1500);T.set(o,c)}catch{console.error("复制代码失败")}}function g(){if(e(a)){const{top:t,bottom:o,left:c}=e(a).getBoundingClientRect(),$=document.documentElement.clientHeight;d.value=o>$&&t+44<=$,e(D).style.left=e(d)?`${c}px`:"0"}}function b(){var t;(t=e(_))==null||t.removeEventListener("scroll",g)}return(t,o)=>(y(),E("div",{class:v(["demo",{hover:f.value}]),onMouseenter:o[1]||(o[1]=c=>f.value=!0),onMouseleave:o[2]||(o[2]=c=>f.value=!1)},[m(" 组件展示 "),s("div",O,[(y(),J(K(M.component)))]),m(" 代码展示 "),s("div",{ref_key:"codeWrapRef",ref:a,class:"demo-show"},[e(h)?(y(),E("div",{key:0,ref_key:"descRef",ref:I,class:"demo-show_desc",innerHTML:e(h)},null,8,Q)):m("v-if",!0),s("div",{ref_key:"codeRef",ref:u,class:"demo-show-code language-vue",innerHTML:e(S)},null,8,X)],512),m(" 切换按钮 "),s("div",{ref_key:"controlRef",ref:D,class:v(["demo-control",{fixed:d.value}]),style:j({width:d.value?`${B.value}px`:"unset"}),onClick:o[0]||(o[0]=c=>i.value=!i.value)},[C(w,{name:"arrow-slide"},{default:x(()=>[s("i",{class:v(["demo-control-icon",i.value?"demo-control-icon_up":"demo-control-icon_down"])},null,2)]),_:1}),C(w,{name:"text-slide",persisted:""},{default:x(()=>[H(s("span",{class:"demo-control-tip"},k(i.value?"隐藏":"显示"),513),[[R,f.value]])]),_:1}),H(s("span",{class:v(["demo-control-copy",{copying:l.value}]),onClick:P(N,["stop"])},k(e(L)),11,Y),[[R,!l.value]]),C(w,{name:"bounce",persisted:""},{default:x(()=>[H(s("span",{class:"demo-control-copy success"},k(e(L)),513),[[R,l.value]])]),_:1})],6)],34))}});const oe=q(Z,[["__scopeId","data-v-90ccdceb"],["__file","Demo.vue"]]);export{oe as default};
