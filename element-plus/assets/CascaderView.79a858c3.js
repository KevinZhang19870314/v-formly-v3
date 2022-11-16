import{f as T,g as d,r as m,o as b,c as v,e as g,w as y,a as f,i as h,n as k,b as x,t as V,u as N,_ as w}from"./app.e2a2a9c4.js";const D={key:0},O={class:"btns"},S=T({__name:"CascaderView",setup(B){const i=d(null),n=d({});let r=0;const a=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"}]}],_={properties:{data1_1:{type:"string",title:"clicked (default)",enum:a,ui:{component:"cascader",change:c,expandChange:u,visibleChange:e=>console.log("visible",e),blur:e=>console.log("blur",e),focus:e=>console.log("focus",e)}},data1_2:{type:"string",title:"hovered",enum:a,ui:{component:"cascader",props:{expandTrigger:"hover"}}},data2:{type:"string",title:"有禁用选项",enum:[{value:"guide",label:"Guide",disabled:!0,children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",disabled:!0,children:[{value:"layout",label:"Layout"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components",disabled:!0},{value:"sketch",label:"Sketch Templates"}]}],ui:{component:"cascader"}},data3:{type:"string",title:"可清空",enum:a,ui:{component:"cascader",clearable:!0}},data4:{type:"string",title:"仅显示最后一级",enum:a,ui:{component:"cascader",showAllLevels:!1}},data5_1:{type:"string",title:"多选(Display all tags)",enum:a,ui:{component:"cascader",clearable:!0,removeTag:e=>console.log("removeTag",e),props:{multiple:!0}}},data5_2:{type:"string",title:"Collapse tags",enum:a,ui:{component:"cascader",clearable:!0,collapseTags:!0,props:{multiple:!0}}},data5_3:{type:"string",title:"Collapse tags tooltip",enum:a,ui:{component:"cascader",clearable:!0,collapseTags:!0,collapseTagsTooltip:!0,props:{multiple:!0}}},data6_1:{type:"string",title:"选择任意一级选项",enum:a,ui:{component:"cascader",clearable:!0,props:{checkStrictly:!0}}},data6_2:{type:"string",title:"选择任意一级选项(多选)",enum:a,ui:{component:"cascader",clearable:!0,props:{multiple:!0,checkStrictly:!0}}},data7:{type:"string",title:"动态加载",ui:{component:"cascader",clearable:!0,props:{lazy:!0,lazyLoad(e,l){const{level:t}=e;setTimeout(()=>{const s=Array.from({length:t+1}).map(o=>({value:++r,label:`Option - ${r}`,leaf:t>=2}));l(s)},1e3)}}}},data8_1:{type:"string",title:"可搜索",enum:a,ui:{component:"cascader",placeholder:"Try searching Guide",clearable:!0,filterable:!0}},data8_2:{type:"string",title:"可搜索(多选)",enum:a,ui:{component:"cascader",placeholder:"Try searching Guide",clearable:!0,filterable:!0,props:{multiple:!0}}},data9:{type:"string",title:"自定义节点内容",enum:a,ui:{component:"cascader",slotNameOfDefault:"slotNameOfDefault"}},data10:{type:"string",title:"级联面板",enum:a,ui:{component:"cascader",type:"panel",change:c,expandChange:u}}}};async function C(){await i.value.validate()&&console.log(V(N(n)))}function c(e){console.log("change",e)}function u(e){console.log("expandChange",e)}return(e,l)=>{const t=m("v-formly-v3"),s=m("el-button");return b(),v("div",null,[g(t,{ref_key:"form",ref:i,modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o),meta:_},{slotNameOfDefault:y(({node:o,data:p})=>[f("span",null,h(p.label),1),o.isLeaf?k("v-if",!0):(b(),v("span",D," ("+h(p.children.length)+") ",1))]),_:1},8,["modelValue"]),f("div",O,[g(s,{type:"primary",onClick:C},{default:y(()=>[x(" 提交 ")]),_:1})])])}}}),G=w(S,[["__file","CascaderView.vue"]]);export{G as default};
