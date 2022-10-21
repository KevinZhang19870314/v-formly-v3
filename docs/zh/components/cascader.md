# Cascader 级联选择

一般用于省市区，公司层级，事物分类等。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" layout="horizontal">
      <template v-slot:displayRender="{ labels, selectedOptions }">
        <span
          v-for="(label, index) in labels"
          :key="selectedOptions[index].value"
        >
          <span v-if="index === labels.length - 1">
            {{ label }} (<a
              @click="(e) => handleAreaClick(e, label, selectedOptions[index])"
              >{{ selectedOptions[index].code }}</a
            >)
          </span>
          <span v-else @click="onChange"> {{ label }} / </span>
        </span>
      </template>
      <template v-slot:slotNameOfCascaderDefault>
        <span>{{ text }} <a href="#">Change city</a></span>
      </template>
      <template v-slot:slotNameOfCascaderSuffixIcon>
        <a-icon type="smile" />
      </template>
    </v-formly-v3>
    <div class="btns">
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      meta: {},
      text: "Unselect",
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                  code: 752100,
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men",
                  code: 453400,
                },
              ],
            },
          ],
        },
      ],
      asyncOptions: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          isLeaf: false,
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          isLeaf: false,
        },
      ],
      customOptions: [
        {
          code: "zhejiang",
          name: "Zhejiang",
          items: [
            {
              code: "hangzhou",
              name: "Hangzhou",
              items: [
                {
                  code: "xihu",
                  name: "West Lake",
                },
              ],
            },
          ],
        },
        {
          code: "jiangsu",
          name: "Jiangsu",
          items: [
            {
              code: "nanjing",
              name: "Nanjing",
              items: [
                {
                  code: "zhonghuamen",
                  name: "Zhong Hua Men",
                },
              ],
            },
          ],
        },
      ],
      searchOptions: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake",
                },
                {
                  value: "xiasha",
                  label: "Xia Sha",
                  disabled: true,
                },
              ],
            },
          ],
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua men",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {
    this.meta = {
      properties: {
        static: {
          type: "string",
          title: "省市区级联",
          enum: this.options,
          // readOnly: true,
          default: ["jiangsu", "nanjing", "zhonghuamen"],
          ui: {
            component: "cascader",
            placeholder: "Please select area",
            // size: 'large',
            // allowClear: false,
            // autoFocus: true,
            // changeOnSelect: true,
            // expandTrigger: 'hover',
            // popupVisible: true,
            // popupPlacement: 'bottomRight',
            // popupClassName: 'custom-popup-classname',
            // popupStyle: { color: 'red' },
            // notFoundContent: 'Not Found !!!',
            change: (value, option) => console.log("change", value, option),
            // popupVisibleChange: (visible) => console.log("visible", visible),
            // blur: (e) => console.log("blur", e),
            // focus: (e) => console.log("focus", e),
          },
        },
        async: {
          type: "string",
          title: "动态加载选项",
          enum: this.asyncOptions,
          ui: {
            component: "cascader",
            changeOnSelect: true,
            loadData: this.loadData,
            change: (value, option) => console.log(value, option),
          },
        },
        displayRender1: {
          type: "string",
          title: "自定义已选项(slot)",
          enum: this.options,
          ui: {
            component: "cascader",
            slotNameOfDisplayRender: "displayRender",
          },
        },
        displayRender2: {
          type: "string",
          title: "自定义已选项(function)",
          enum: this.options,
          ui: {
            component: "cascader",
            displayRender: ({ labels }) => labels[labels.length - 1],
          },
        },
        slot: {
          type: "string",
          title: "自定义显示",
          enum: this.options,
          ui: {
            component: "cascader",
            slotNameOfCascaderDefault: "slotNameOfCascaderDefault",
            change: (value, selectedOptions) => {
              this.text = selectedOptions.map((o) => o.label).join(", ");
            },
          },
        },
        disabled: {
          type: "string",
          title: "禁用选项",
          enum: [
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                  children: [
                    {
                      value: "xihu",
                      label: "West Lake",
                    },
                  ],
                },
              ],
            },
            {
              value: "jiangsu",
              label: "Jiangsu",
              disabled: true,
              children: [
                {
                  value: "nanjing",
                  label: "Nanjing",
                  children: [
                    {
                      value: "zhonghuamen",
                      label: "Zhong Hua Men",
                    },
                  ],
                },
              ],
            },
          ],
          ui: {
            component: "cascader",
          },
        },
        icon: {
          type: "string",
          title: "自定义后缀图标",
          enum: this.options,
          ui: {
            component: "cascader",
            slotNameOfCascaderSuffixIcon: "slotNameOfCascaderSuffixIcon",
            // suffixIcon: "ab",
          },
        },
        fieldNames: {
          type: "string",
          title: "自定义字段名",
          enum: this.customOptions,
          ui: {
            component: "cascader",
            fieldNames: { label: "name", value: "code", children: "items" },
          },
        },
        showSearch: {
          type: "string",
          title: "搜索",
          enum: this.searchOptions,
          ui: {
            component: "cascader",
            showSearch: { filter: this.filter },
            search: (value) => console.log("search", value),
            change: (value, option) => console.log("change", value, option),
          },
        },
      },
    };
  },
  methods: {
    async printData() {
      const valid = await this.$refs.form.validate();
      console.log(valid, this.data);
    },
    onChange(value) {
      console.log(value);
    },
    handleAreaClick(e, label, option) {
      e.stopPropagation();
      console.log("clicked", label, option);
    },
    loadData(selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;

      // load options lazily
      setTimeout(() => {
        targetOption.loading = false;
        targetOption.children = [
          {
            label: `${targetOption.label} Dynamic 1`,
            value: "dynamic1",
          },
          {
            label: `${targetOption.label} Dynamic 2`,
            value: "dynamic2",
          },
        ];
        const ctx = this.$refs.form.getContext("/async");
        ctx.meta.enum = [...ctx.meta.enum];
      }, 1000);
    },
    filter(inputValue, path) {
      return path.some(
        (option) =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
    },
  },
};
</script>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明     | 类型                            | 默认值 |
| ----------- | -------- | ------------------------------- | ------ |
| `:enum`     | 数据源   | `any[] \| array<{value, label>` | -      |
| `:readOnly` | 禁用状态 | `boolean`                       | -      |

### meta.ui 属性

| 成员                            | 说明                 | 类型 | 默认值 |
| ------------------------------- | -------------------- | ---- | ------ |
| `:slotNameOfCascaderDefault`    | 自定义显示           | slot | -      |
| `:slotNameOfCascaderSuffixIcon` | 后缀图标             | slot | -      |
| `:slotNameOfDisplayRender`      | 选择后展示的渲染函数 | slot | -      |
