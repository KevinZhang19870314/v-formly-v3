import{f as w,g as c,r as m,o as V,c as h,e as r,u,j as D,a as k,w as d,b as p,t as C,_ as x}from"./app.e2a2a9c4.js";const T={class:"btns"},R=w({__name:"TimeView",setup(S){const l=c(null),a=(e,n)=>{const i=[];for(let o=e;o<=n;o++)i.push(o);return i},f=()=>a(0,16).concat(a(19,23)),_=e=>{if(e===17)return a(0,29);if(e===18)return a(31,59)},b=(e,n)=>{if(e===18&&n===30)return a(1,59)},g={type:"object",properties:{time1_1:{title:"任意时间点",type:"string",ui:{component:"time",placeholder:"Arbitrary time",change:e=>{console.log(e)},grid:{span:12}}},time1_2:{title:"任意时间点",type:"string",ui:{component:"time",placeholder:"Arbitrary time",arrowControl:!0,grid:{span:12}}},time2:{title:"限制时间选择范围",type:"string",default:new Date(2016,9,10,18,30),ui:{component:"time",disabledHours:f,disabledMinutes:_,disabledSeconds:b,placeholder:"Arbitrary time"}},time3:{title:"任意时间范围",type:"string",default:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],ui:{component:"time",isRange:!0,rangeSeparator:"To",startPlaceholder:"Start time",endPlaceholder:"End time"}}},required:["name"],ui:{grid:{span:24}}};let t=c({});function y(){t.value=null}async function v(){await l.value.validate()&&console.log(C(u(t)))}return(e,n)=>{const i=m("v-formly-v3"),o=m("el-button");return V(),h("div",null,[r(i,{ref_key:"form",ref:l,modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=s=>D(t)?t.value=s:t=s),meta:g},null,8,["modelValue"]),k("div",T,[r(o,{type:"danger",onClick:y},{default:d(()=>[p(" 重置 ")]),_:1}),r(o,{type:"primary",onClick:v},{default:d(()=>[p(" 提交 ")]),_:1})])])}}}),B=x(R,[["__file","TimeView.vue"]]);export{B as default};