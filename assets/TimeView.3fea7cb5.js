import{f as h,g as s,r as m,o as x,c as H,e as n,w as i,b as c,h as V,u as p,i as C,a as w,t as b,_ as k}from"./app.5b6a6178.js";const N={class:"btns"},S=h({__name:"TimeView",setup(T){const r=s(null),a=s(!1),f={type:"object",properties:{time:{title:"12小时制",type:"string",default:"08:12:12",ui:{component:"time",valueFormat:"hh:mm:ss",use12Hours:!0,change:(t,e)=>{console.log(t,e)}}},time1:{title:"选择时分",type:"string",ui:{component:"time",format:"HH:mm",change:(t,e)=>{console.log(t,e)}}},time2_1:{title:"大",type:"string",ui:{component:"time",format:"HH:mm",change:(t,e)=>{console.log(t,e)},size:"large",grid:{span:8}}},time2_2:{title:"中",type:"string",ui:{component:"time",format:"HH:mm",change:(t,e)=>{console.log(t,e)},grid:{span:8}}},time2_3:{title:"小",type:"string",ui:{component:"time",format:"HH:mm",change:(t,e)=>{console.log(t,e)},size:"small",grid:{span:8}}},time3:{title:"后缀图标",type:"string",ui:{component:"time",slotNameOfSuffixIcon:"suffixIcon3",change:(t,e)=>{console.log(t,e)}}},time4:{title:"附加内容",type:"string",ui:{component:"time",slotNameOfRenderExtraFooter:"addon4",open:a,change:(t,e)=>{console.log(t,e)}}},time5:{title:"禁用",type:"string",readOnly:!0,ui:{component:"time",change:(t,e)=>{console.log(t,e)}}},time6:{title:"步长选项",type:"string",ui:{component:"time",minuteStep:15,secondStep:10,change:(t,e)=>{console.log(t,e)}}}},required:["name"],ui:{grid:{span:24}}};let o=s({});function g(){o.value=null}async function d(){await r.value.validate()&&console.log(b(p(o)))}function _(){a.value=!a.value}return(t,e)=>{const y=m("smile-outlined"),l=m("a-button"),v=m("v-formly-v3");return x(),H("div",null,[n(v,{ref_key:"form",ref:r,modelValue:p(o),"onUpdate:modelValue":e[0]||(e[0]=u=>C(o)?o.value=u:o=u),meta:f,layout:"vertical"},{suffixIcon3:i(()=>[n(y)]),addon4:i(()=>[n(l,{size:"small",type:"primary",onClick:_},{default:i(()=>[c(V("Close"))]),_:1})]),_:1},8,["modelValue"]),w("div",N,[n(l,{type:"danger",onClick:g},{default:i(()=>[c(" 重置 ")]),_:1}),n(l,{type:"primary",onClick:d},{default:i(()=>[c(" 提交 ")]),_:1})])])}}}),B=k(S,[["__file","TimeView.vue"]]);export{B as default};