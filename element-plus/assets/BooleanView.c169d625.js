import{f as T,g as l,m as a,E as f,r as b,o as g,c as V,e as u,u as d,j as k,a as C,w as _,b as v,t as B,k as p,l as y,_ as P}from"./app.e2a2a9c4.js";const E={class:"btns"},I=T({__name:"BooleanView",setup(N){const r=l(null);let e=l({});const n=l(!1),i=l(!1),m={type:"object",properties:{boolean1_1:{title:"基础用法",type:"boolean",default:!0,ui:{change:t=>console.log(t)}},boolean1_2:{title:"基础用法",type:"boolean",default:!0,ui:{style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"}},boolean2_1:{title:"尺寸",type:"boolean",default:!0,ui:{size:"large",activeText:"开",inactiveText:"关"}},boolean2_2:{title:"尺寸",type:"boolean",default:!0,ui:{activeText:"开",inactiveText:"关"}},boolean2_3:{title:"尺寸",type:"boolean",default:!0,ui:{size:"small",activeText:"开",inactiveText:"关"}},boolean3_1:{title:"文字描述",type:"boolean",default:!0,ui:{activeText:"Pay by month",inactiveText:"Pay by year",style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"}},boolean3_2:{title:"文字描述",type:"boolean",default:!0,ui:{activeText:"是",inactiveText:"否",inlinePrompt:!0}},boolean3_3:{title:"文字描述",type:"boolean",default:!0,ui:{activeText:"Y",inactiveText:"N",style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"}},boolean4_1:{title:"显示自定义图标",type:"boolean",default:!0,ui:{activeIcon:a(p),inactiveIcon:a(y)}},boolean4_2:{title:"显示自定义图标",type:"boolean",default:!0,ui:{inlinePrompt:!0,activeIcon:a(p),inactiveIcon:a(y)}},boolean5:{title:"扩展的 value 类型",type:"boolean",default:!0,ui:{style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949",activeValue:"100",inactiveValue:"0"}},boolean6:{title:"禁用状态",type:"boolean",default:!0,readOnly:!0},boolean7:{title:"加载状态",type:"boolean",default:!0,ui:{loading:!0}},boolean8_1:{title:"阻止切换",type:"boolean",ui:{loading:n,beforeChange:()=>(n.value=!0,new Promise(t=>{setTimeout(()=>(n.value=!1,f.success("Switch success"),t(!0)),1e3)}))}},boolean8_2:{title:"阻止切换",type:"boolean",ui:{loading:i,beforeChange:()=>(i.value=!0,new Promise((t,o)=>{setTimeout(()=>(i.value=!1,f.error("Switch failed"),o(new Error("Error"))),1e3)}))}}},required:[]};function w(){e.value=null}async function x(){await r.value.validate()&&console.log(B(d(e)))}return(t,o)=>{const h=b("v-formly-v3"),c=b("el-button");return g(),V("div",null,[u(h,{ref_key:"form",ref:r,modelValue:d(e),"onUpdate:modelValue":o[0]||(o[0]=s=>k(e)?e.value=s:e=s),meta:m},null,8,["modelValue"]),C("div",E,[u(c,{type:"danger",onClick:w},{default:_(()=>[v(" 重置 ")]),_:1}),u(c,{type:"primary",onClick:x},{default:_(()=>[v(" 提交 ")]),_:1})])])}}}),j=P(I,[["__file","BooleanView.vue"]]);export{j as default};