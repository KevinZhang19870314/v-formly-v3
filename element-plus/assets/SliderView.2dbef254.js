import{f as d,g as l,x as _,r as i,o as f,c as y,e as u,a as b,w as v,b as g,t as w,u as h,_ as V}from"./app.e2a2a9c4.js";const x={class:"btns"},C=d({__name:"SliderView",setup(k){const o=l(null),t=l({}),r=_({0:"0°C",8:"8°C",37:"37°C",50:{style:{color:"#1989FA"},label:"50%"}}),a={properties:{count1_1:{type:"number",title:"Default value",ui:{component:"slider",change:e=>console.log("change",e),input:e=>console.log("input",e)}},count1_2:{type:"number",title:"Customized initial value",default:10,ui:{component:"slider"}},count1_3:{type:"number",title:"Hide Tooltip",ui:{component:"slider",showTooltip:!1}},count1_4:{type:"number",title:"Format Tooltip",ui:{component:"slider",formatTooltip:e=>`${e}%`}},count1_5:{type:"number",title:"Disabled",readOnly:!0,default:50,ui:{component:"slider"}},count2_1:{type:"number",title:"Breakpoints not displayed",ui:{component:"slider"},multipleOf:10},count2_2:{type:"number",title:"Breakpoints displayed",ui:{component:"slider",showStops:!0},multipleOf:10},count3_1:{type:"number",title:"带有输入框的滑块",ui:{component:"slider",showInput:!0,size:"large"}},count3_2:{type:"number",title:"带有输入框的滑块",ui:{component:"slider",showInput:!0}},count3_3:{type:"number",title:"带有输入框的滑块",ui:{component:"slider",showInput:!0,size:"small"}},count4:{type:"number",title:"位置",ui:{component:"slider",placement:"right"}},vertical:{type:"number",title:"垂直模式",ui:{component:"slider",vertical:!0,height:"200px"}},range1:{type:"number",title:"范围选择",ui:{component:"slider",range:!0,showStops:!0},maximum:10,default:[4,8]},range2:{type:"number",title:"显示标记",ui:{component:"slider",range:!0,marks:r},default:[30,60]}}};async function s(){await o.value.validate()&&console.log(w(h(t)))}return(e,n)=>{const p=i("v-formly-v3"),c=i("el-button");return f(),y("div",null,[u(p,{ref_key:"form",ref:o,modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=m=>t.value=m),meta:a},null,8,["modelValue"]),b("div",x,[u(c,{type:"primary",onClick:s},{default:v(()=>[g(" 提交 ")]),_:1})])])}}}),S=V(C,[["__file","SliderView.vue"]]);export{S as default};
