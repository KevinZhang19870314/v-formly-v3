# String 文本框

内置组件，用于字符串、密码等输入框。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta">
      <!-- string2_x -->
      <template v-slot:string2_2_prefix>
        <a-icon type="user" />
      </template>
      <template v-slot:string2_2_suffix>
        <a-tooltip title="Extra information">
          <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>

      <!-- string3_x -->
      <template v-slot:string3_1_addon_before>
        <a-select default-value="Http://" style="width: 90px">
          <a-select-option value="Http://"> Http:// </a-select-option>
          <a-select-option value="Https://"> Https:// </a-select-option>
        </a-select>
      </template>
      <template v-slot:string3_2_addon_after>
        <a-select default-value=".com" style="width: 80px">
          <a-select-option value=".com"> .com </a-select-option>
          <a-select-option value=".jp"> .jp </a-select-option>
          <a-select-option value=".cn"> .cn </a-select-option>
          <a-select-option value=".org"> .org </a-select-option>
        </a-select>
      </template>

      <!-- string6 -->
      <template v-slot:string6_suffix>
        <div style="cursor: pointer" @click="string6SuffixClick">
          <a-icon v-if="!visibilityToggle" type="eye-invisible" />
          <a-icon v-if="visibilityToggle" type="eye" />
        </div>
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StringView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          string1: {
            title: "基本使用",
            type: "string",
            ui: {
              showRequired: true,
              placeholder: "Basic usage",
              errors: {
                required: "请输入",
              },
              change: (val) => console.log(val),
            },
          },
          string2_1: {
            title: "前缀和后缀",
            type: "string",
            ui: {
              placeholder: "prefix and suffix",
              prefix: "￥",
              suffix: "RMB",
            },
          },
          string2_2: {
            title: "前缀和后缀slot",
            type: "string",
            ui: {
              placeholder: "prefix and suffix with slot",
              slotNameOfPrefix: "string2_2_prefix",
              slotNameOfSuffix: "string2_2_suffix",
            },
          },
          string3_1: {
            title: "前置/后置标签",
            type: "string",
            default: "mysite",
            ui: {
              placeholder: "addonBefore/addonAfter",
              addonBefore: "Http://",
              addonAfter: ".com",
            },
          },
          string3_2: {
            title: "前置/后置标签slot",
            type: "string",
            ui: {
              placeholder: "addonBefore/addonAfter with slot",
              slotNameOfAddonBefore: "string3_1_addon_before",
              slotNameOfAddonAfter: "string3_2_addon_after",
            },
          },
          string4: {
            title: "带移除图标",
            type: "string",
            ui: {
              placeholder: "input with clear icon",
              allowClear: true,
            },
          },
          string5_1: {
            title: "大",
            type: "string",
            ui: {
              placeholder: "large size",
              size: "large",
              grid: {
                span: 8,
              },
            },
          },
          string5_2: {
            title: "默认",
            type: "string",
            ui: {
              placeholder: "default size",
              grid: {
                span: 8,
              },
            },
          },
          string5_3: {
            title: "小",
            type: "string",
            ui: {
              placeholder: "small size",
              size: "small",
              grid: {
                span: 8,
              },
            },
          },
          string6: {
            title: "密码框",
            type: "string",
            ui: {
              placeholder: "input password",
              type: "password",
              slotNameOfSuffix: "string6_suffix",
            },
          },
          string7: {
            title: "正则表达式",
            type: "string",
            pattern: "^[abc]+$",
            ui: {
              placeholder: "^[abc]+$",
              errors: {
                pattern: "数据格式不正确",
              },
            },
          },
        },
        required: ["string1"],
      },
      visibilityToggle: false,
      formData: {},
    };
  },
  methods: {
    clear() {
      this.formData = null;
      // Below line do the same thing
      // this.$refs.form.reset(null);
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.formData);
      }
    },
    string6SuffixClick() {
      this.visibilityToggle = !this.visibilityToggle;
      const context = this.$refs.form.getContext("/string6");
      context.ui.type = this.visibilityToggle ? "text" : "password";
    },
  },
};
</script>
<style lang="less" scoped></style>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员         | 说明         | 类型      | 默认值 |
| ------------ | ------------ | --------- | ------ |
| `:maxLength` | 表单最大长度 | `number`  | -      |
| `:readOnly`  | 禁用状态     | `boolean` | -      |

### meta.ui 属性

| 成员                     | 说明                                    | 类型          | 默认值 |
| ------------------------ | --------------------------------------- | ------------- | ------ |
| `:addOnAfter`            | 带标签的 input，设置后置标签            | `string`      | -      |
| `:slotNameOfAddonAfter`  | 带标签的 input，设置后置标签，slot 名称 | `string`      | -      |
| `:addOnBefore`           | 带标签的 input，设置前置标签            | `string`      | -      |
| `:slotNameOfAddonBefore` | 带标签的 input，设置前置标签，slot 名称 | `string`      | -      |
| `:prefix`                | 带有前缀图标的 input                    | `string`      | -      |
| `:slotNameOfPrefix`      | 带有前缀图标的 input，slot 名称         | `string`      | -      |
| `:suffix`                | 带有后缀图标的 input                    | `string`      | -      |
| `:slotNameOfSuffix`      | 带有后缀图标的 input，slot 名称         | `string`      | -      |
| `@change`                | 输入框内容变化时的回调                  | `function(e)` | -      |
