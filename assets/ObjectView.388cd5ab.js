import{f as b,g as l,r,o as v,c as j,e as t,u as i,i as y,a as V,w as c,b as _,t as O,_ as g}from"./app.5b6a6178.js";const w={class:"btns"},k=b({__name:"ObjectView",setup(x){const o=l(null),d={type:"object",properties:{obj1:{title:"对象1",type:"string"},nestedObj2:{type:"object",properties:{nestedObj2_1:{title:"嵌套对象1",type:"string"},nestedObj2_2:{title:"嵌套对象2",type:"string"}}}},required:["string1"]};let e=l({obj1:"Kevin",nestedObj2:{nestedObj2_1:"test nested 1"}});function u(){e.value=null}async function p(){await o.value.validate()&&console.log(O(i(e)))}return(f,n)=>{const m=r("v-formly-v3"),a=r("a-button");return v(),j("div",null,[t(m,{ref_key:"form",ref:o,modelValue:i(e),"onUpdate:modelValue":n[0]||(n[0]=s=>y(e)?e.value=s:e=s),meta:d},null,8,["modelValue"]),V("div",w,[t(a,{type:"danger",onClick:u},{default:c(()=>[_(" 重置 ")]),_:1}),t(a,{type:"primary",onClick:p},{default:c(()=>[_(" 提交 ")]),_:1})])])}}}),B=g(k,[["__file","ObjectView.vue"]]);export{B as default};
