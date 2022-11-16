import{_ as E,r as p,o as C,c as r,a,b as n,e as s,w as t,d as c}from"./app.5b6a6178.js";const D={},u=a("h1",{id:"组件介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#组件介绍","aria-hidden":"true"},"#"),n(" 组件介绍")],-1),i=a("h2",{id:"内置组件属性",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#内置组件属性","aria-hidden":"true"},"#"),n(" 内置组件属性")],-1),k=a("p",null,[n("v-formly-v3 中的内置组件为了保证与原生 AntDv 组件的功能保持一致性，尽量不破坏原有属性名称和定义，所以在下述具体组件介绍中，"),a("strong",null,"我们只列出属性中不一致的或新添加的，一致的地方请参考 具体组件库 文档"),n("，我们列出了组件对应关系如下，请自行查阅：")],-1),F=a("h3",{id:"内置组件与-antdv-组件一一对应关系",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#内置组件与-antdv-组件一一对应关系","aria-hidden":"true"},"#"),n(" 内置组件与 AntDv 组件一一对应关系")],-1),d={class:"custom-container details"},m=a("summary",null,"内置组件与 AntDv 组件一一对应关系 =>",-1),f={href:"https://www.antdv.com/components/auto-complete-cn/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.antdv.com/components/cascader-cn/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.antdv.com/components/checkbox-cn/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.antdv.com/components/date-picker-cn/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.antdv.com/components/input-cn/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.antdv.com/components/input-number-cn/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.antdv.com/components/radio-cn/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.antdv.com/components/select-cn/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.antdv.com/components/slider-cn/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.antdv.com/components/switch-cn/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.antdv.com/components/time-picker-cn/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.antdv.com/components/tag-cn/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.antdv.com/components/input-cn/#components-input-demo-textarea",target:"_blank",rel:"noopener noreferrer"},S=c('<h2 id="关于slot的传递" tabindex="-1"><a class="header-anchor" href="#关于slot的传递" aria-hidden="true">#</a> 关于<code>slot</code>的传递</h2><p>v-formly-v3 中的内置组件封装的是 AntDv 的表单组件，这样就带来一个问题，一些类型为<code>slot</code>的属性我们无法透传，比如<code>Input 输入框</code>的<code>addonBefore</code>属性，它即可以直接传字符串，这个没问题，但是<code>slot</code>我们没法传进去，因为我们对<code>a-input</code>做了封装，在使用 v-formly-v3 的时候我们无法直接接触<code>a-input</code>组件，所以这里我让模板<code>&lt;template&gt;xxx&lt;/template&gt;</code>一级一级的从父组件传递到子组件，再传递到孙子组件，直到传递到 AntDv 原生组件为止。下面我们举例说明一下：</p>',2),V=a("p",null,"SlotsView",-1),T=c('<p>从上面的代码中，我们可以看到，我们这里的前缀使用了<code>slot</code>来传值，我们只需要在<code>meta</code>里面定义<code>slotNameOfPrefix</code>来标明它的<code>slot name</code>，然后在<code>v-formly-v3</code>模板标签里面定义我们需要传递的模板内容，从而让表单知道我需要把这个<code>slot</code>模板传递到 AntDv 的输入框，这样就达到了<code>slot</code>的传递。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>v-formly-v3 的每个表单项的属性中如果有需要传递<code>slot</code>的，必须保证<code>slot name</code>的唯一（比如这里的<code>slotNameOfPrefix</code>和<code>slotNameOfSuffix</code>的值必须不一样），否则无法识别或者识别错误。</strong></p></div>',2);function I(O,P){const e=p("RouterLink"),o=p("ExternalLinkIcon"),l=p("demo");return C(),r("div",null,[u,a("p",null,[n("v-formly-v3 内置了一些基础组件，包括常用的输入框、选择框、单选、多选、下拉框、上传等组件，覆盖了大多数业务所需要的组件需求，如果这些内置组件不足以满足你的业务，你也可以"),s(e,{to:"/zh/components/custom-components.html"},{default:t(()=>[n("自定义组件")]),_:1}),n("。")]),i,k,F,a("details",d,[m,a("p",null,[s(e,{to:"/zh/components/autocomplete.html"},{default:t(()=>[n("AutoComplete 自动完成")]),_:1}),n(" -> "),a("a",f,[n("AutoComplete 自动完成"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/cascader.html"},{default:t(()=>[n("Cascader 级联选择")]),_:1}),n(" -> "),a("a",A,[n("Cascader 级联选择"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/checkbox.html"},{default:t(()=>[n("Checkbox 多选框")]),_:1}),n(" -> "),a("a",h,[n("Checkbox 多选框"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/date.html"},{default:t(()=>[n("Date 日期选择框")]),_:1}),n(" -> "),a("a",_,[n("DatePicker 日期选择框"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/string.html"},{default:t(()=>[n("String 文本框")]),_:1}),n(" -> "),a("a",g,[n("Input 输入框"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/number.html"},{default:t(()=>[n("Number 数字输入框")]),_:1}),n(" -> "),a("a",v,[n("InputNumber 数字输入框"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/radio.html"},{default:t(()=>[n("Radio 单选框")]),_:1}),n(" -> "),a("a",y,[n("Radio 单选框"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/select.html"},{default:t(()=>[n("Select 选择器")]),_:1}),n(" -> "),a("a",B,[n("Select 选择器"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/slider.html"},{default:t(()=>[n("Slider 滑动输入条")]),_:1}),n(" -> "),a("a",w,[n("Slider 滑动输入条"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/boolean.html"},{default:t(()=>[n("Boolean 开关")]),_:1}),n(" -> "),a("a",x,[n("Switch 开关"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/time.html"},{default:t(()=>[n("Time 时间选择器")]),_:1}),n(" -> "),a("a",b,[n("TimePicker 时间选择框"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/object.html"},{default:t(()=>[n("Object 对象")]),_:1})]),a("p",null,[s(e,{to:"/zh/components/tag.html"},{default:t(()=>[n("Tag 标签")]),_:1}),n(" -> "),a("a",z,[n("Tag 标签"),s(o)])]),a("p",null,[s(e,{to:"/zh/components/text.html"},{default:t(()=>[n("Text 文本")]),_:1})]),a("p",null,[s(e,{to:"/zh/components/textarea.html"},{default:t(()=>[n("Textarea 多行文本框")]),_:1}),n(" -> "),a("a",N,[n("Input 输入框"),s(o)])])]),S,s(l,{component:"SlotsView",info:"",code:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cv-formly-v3%20ref%3D%22form%22%20v-model%3D%22formData%22%20%3Ameta%3D%22meta%22%3E%0D%0A%20%20%20%20%20%20%3C!--%20string1%20--%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20v-slot%3Astring1_prefix%3E%0D%0A%20%20%20%20%20%20%20%20%3Cuser-outlined%20%2F%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20v-slot%3Astring1_1_suffix%3E%0D%0A%20%20%20%20%20%20%20%20%3Ca-tooltip%20title%3D%22Extra%20information%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cinfo-circle-outlined%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fa-tooltip%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2Fv-formly-v3%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aimport%20type%20VFormly%20from%20%22%40%2Fant-design-vue%2FAFormly.vue%22%3B%0D%0A%0D%0Aconst%20form%20%3D%20ref%3Cnull%20%7C%20InstanceType%3Ctypeof%20VFormly%3E%3E(null)%3B%0D%0Aconst%20meta%20%3D%20%7B%0D%0A%20%20type%3A%20%22object%22%2C%0D%0A%20%20properties%3A%20%7B%0D%0A%20%20%20%20string1%3A%20%7B%0D%0A%20%20%20%20%20%20title%3A%20%22%E7%94%A8%E6%88%B7%E5%90%8D%22%2C%0D%0A%20%20%20%20%20%20type%3A%20%22string%22%2C%0D%0A%20%20%20%20%20%20ui%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20placeholder%3A%20%22%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%22%2C%0D%0A%20%20%20%20%20%20%20%20slotNameOfPrefix%3A%20%22string1_prefix%22%2C%0D%0A%20%20%20%20%20%20%20%20slotNameOfSuffix%3A%20%22string1_1_suffix%22%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%7D%2C%0D%0A%7D%3B%0D%0Alet%20formData%3A%20any%20%3D%20ref(%7B%7D)%3B%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20scoped%3E%3C%2Fstyle%3E%0D%0A",highlightCode:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ev-formly-v3%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eform%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EformData%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ameta%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emeta%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%20string1%20--%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Cspan%20class%3D%22token%20namespace%22%3Ev-slot%3A%3C%2Fspan%3Estring1_prefix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Euser-outlined%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Cspan%20class%3D%22token%20namespace%22%3Ev-slot%3A%3C%2Fspan%3Estring1_1_suffix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea-tooltip%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EExtra%20information%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Einfo-circle-outlined%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea-tooltip%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ev-formly-v3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20type%20VFormly%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%40%2Fant-design-vue%2FAFormly.vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20form%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%7C%3C%2Fspan%3E%20InstanceType%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Etypeof%3C%2Fspan%3E%20VFormly%3Cspan%20class%3D%22token%20operator%22%3E%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20meta%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22object%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eproperties%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Estring1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%E7%94%A8%E6%88%B7%E5%90%8D%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22string%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eui%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eplaceholder%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EslotNameOfPrefix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22string1_prefix%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EslotNameOfSuffix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22string1_1_suffix%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Elet%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EformData%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3C%2Fcode%3E%3C%2Fpre%3E"},{default:t(()=>[V]),_:1}),T])}const q=E(D,[["render",I],["__file","index.html.vue"]]);export{q as default};
