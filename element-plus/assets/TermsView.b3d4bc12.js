import{f as b,g as n,r,o as v,c as y,e as t,u as i,j as w,a as V,w as u,b as c,t as j,_ as k}from"./app.e2a2a9c4.js";const g={class:"btns"},x=b({__name:"TermsView",setup(C){const o=n(null),d={type:"object",properties:{name:{title:"姓名",type:"string",default:"kevin",ui:{showRequired:!0}},obj:{type:"object",properties:{subObj:{title:"test",type:"string",ui:{showRequired:!0}}},required:["subObj"]},enable:{title:"启用",type:"boolean"}},required:["name"]};let e=n({});function m(){e.value=null}async function p(){await o.value.validate()&&console.log(j(i(e)))}return(_,a)=>{const f=r("v-formly-v3"),s=r("el-button");return v(),y("div",null,[t(f,{ref_key:"form",ref:o,modelValue:i(e),"onUpdate:modelValue":a[0]||(a[0]=l=>w(e)?e.value=l:e=l),meta:d},null,8,["modelValue"]),V("div",g,[t(s,{type:"danger",onClick:m},{default:u(()=>[c(" 重置 ")]),_:1}),t(s,{type:"primary",onClick:p},{default:u(()=>[c(" 提交 ")]),_:1})])])}}}),R=k(x,[["__file","TermsView.vue"]]);export{R as default};
