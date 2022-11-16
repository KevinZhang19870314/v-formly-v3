import{f as Y,g as o,r as c,o as p,c as u,e as d,w as r,a as s,i as x,n as V,p as S,u as m,j as M,b as y,t as b,_ as C}from"./app.e2a2a9c4.js";const E={class:"text"},N={key:0,class:"holiday"},B={class:"btns"},L=Y({__name:"DateView",setup(j){const l=o(null),_=[{text:"Today",value:new Date},{text:"Yesterday",value:()=>{const e=new Date;return e.setTime(e.getTime()-3600*1e3*24),e}},{text:"A week ago",value:()=>{const e=new Date;return e.setTime(e.getTime()-3600*1e3*24*7),e}}],f=e=>e.getTime()>Date.now(),h=[{text:"Last week",value:()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*7),[t,e]}},{text:"Last month",value:()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*30),[t,e]}},{text:"Last 3 months",value:()=>{const e=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*90),[t,e]}}],D=o([new Date(2e3,1,1,0,0,0),new Date(2e3,2,1,23,59,59)]),g=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"],w=({dayjs:e})=>g.includes(e.format("YYYY-MM-DD")),v={type:"object",properties:{date1:{type:"string",title:"选择某一天",ui:{component:"date",placeholder:"Pick a day",type:"date"}},date2:{type:"string",title:"选择某一天(快捷选项)",ui:{component:"date",placeholder:"Pick a day",type:"date",shortcuts:_,disabledDate:f}},date3:{type:"string",title:"其他日期单位(Week)",ui:{component:"date",placeholder:"Pick a week",type:"week",format:"[Week] ww"}},date4:{type:"string",title:"其他日期单位(Month)",ui:{component:"date",placeholder:"Pick a month",type:"month"}},date5:{type:"string",title:"其他日期单位(Year)",ui:{component:"date",placeholder:"Pick a year",type:"year"}},date6:{type:"string",title:"其他日期单位(Dates)",ui:{component:"date",placeholder:"Pick one or more dates",type:"dates"}},date7:{type:"string",title:"选择一段时间",ui:{component:"date",rangeSeparator:"To",startPlaceholder:"Start date",endPlaceholder:"End date",type:"daterange"}},date8:{type:"string",title:"选择一段时间(快捷选项)",ui:{component:"date",rangeSeparator:"To",startPlaceholder:"Start date",endPlaceholder:"End date",type:"daterange",shortcuts:h,unlinkPanels:!0}},date9:{type:"string",title:"选择月份范围",ui:{component:"date",rangeSeparator:"To",startPlaceholder:"Start month",endPlaceholder:"End month",type:"monthrange"}},date10:{type:"string",title:"默认值",ui:{component:"date",placeholder:"Pick a date",type:"date",defaultValue:new Date(2010,9,1)}},date11:{type:"string",title:"日期格式",ui:{component:"date",placeholder:"Pick a date",type:"date",format:"YYYY/MM/DD"}},date12:{type:"string",title:"默认显示日期",ui:{component:"date",type:"daterange",startPlaceholder:"Start date",endPlaceholder:"End date",defaultTime:D}},date13:{type:"string",title:"自定义内容",default:"2021-10-29",ui:{component:"date",type:"date",slotNameOfDefault:"date13_default",placeholder:"Pick a day",format:"YYYY/MM/DD",valueFormat:"YYYY-MM-DD"}}},required:[]};let a=o({});function k(){a.value=null}async function P(){await l.value.validate()&&console.log(b(m(a)))}return(e,t)=>{const T=c("v-formly-v3"),i=c("el-button");return p(),u("div",null,[d(T,{ref_key:"form",ref:l,modelValue:m(a),"onUpdate:modelValue":t[0]||(t[0]=n=>M(a)?a.value=n:a=n),meta:v},{date13_default:r(n=>[s("div",{class:S(["cell",{current:n.isCurrent}])},[s("span",E,x(n.text),1),w(n)?(p(),u("span",N)):V("v-if",!0)],2)]),_:1},8,["modelValue"]),s("div",B,[d(i,{type:"danger",onClick:k},{default:r(()=>[y(" 重置 ")]),_:1}),d(i,{type:"primary",onClick:P},{default:r(()=>[y(" 提交 ")]),_:1})])])}}});const R=C(L,[["__scopeId","data-v-e06c053d"],["__file","DateView.vue"]]);export{R as default};
