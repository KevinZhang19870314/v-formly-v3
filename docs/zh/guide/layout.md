# 布局

## 基本布局

v-formly-v3 表单支持三种布局，水平`horizontal`，垂直`vertical`，行内`inline`，默认水平布局。

### 代码演示

::: demo

```vue
<template>
  <div>
    <a-radio-group
      v-model="mode"
      style="margin-bottom: 32px; margin-left: 64px"
    >
      <a-radio-button value="horizontal"> 水平 </a-radio-button>
      <a-radio-button value="vertical"> 垂直 </a-radio-button>
      <a-radio-button value="inline"> 行内 </a-radio-button>
    </a-radio-group>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" :layout="mode">
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
  data: () => {
    return {
      mode: "horizontal",
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入姓名",
              },
            },
          },
          desc: {
            title: "描述",
            type: "string",
            default: "Base on technical, but not limited on it!",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          enable: {
            title: "启用",
            type: "boolean",
          },
        },
        required: ["name"],
      },
      data: { enable: true },
    };
  },
  methods: {
    clear() {
      this.data = null;
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
  },
};
</script>
<style lang=""></style>
```

:::

## 自定义复杂布局

利用 AntDv 的 grid 布局功能，v-formly 可以支持复杂的布局结构。

::: tip
自定义复杂布局搭配 v-formly-v3 的垂直布局使用更美观！
:::

### 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly-v3 ref="form" v-model="data" :meta="meta" :layout="'vertical'">
    </v-formly-v3>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
  data: () => {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入姓名",
              },
            },
          },
          desc: {
            title: "描述",
            type: "string",
            default: "Base on technical, but not limited on it!",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          field1_1: {
            title: "字段1_1",
            type: "string",
            ui: {
              grid: {
                span: 8,
              },
            },
          },
          field1_2: {
            title: "字段1_2",
            type: "string",
            ui: {
              grid: {
                span: 8,
              },
            },
          },
          field1_3: {
            title: "字段1_3",
            type: "string",
            ui: {
              grid: {
                span: 8,
              },
            },
          },
          field2_1: {
            title: "字段2_1",
            type: "string",
            ui: {
              grid: {
                span: 12,
              },
            },
          },
          field2_2: {
            title: "字段2_2",
            type: "string",
            ui: {
              grid: {
                span: 12,
              },
            },
          },
          obj: {
            type: "object",
            properties: {
              obj1: {
                title: "子对象1",
                type: "string",
                ui: {
                  grid: {
                    span: 4,
                  },
                },
              },
              obj2: {
                title: "子对象2",
                type: "string",
                ui: {
                  grid: {
                    span: 4,
                  },
                },
              },
              obj3: {
                title: "子对象3",
                type: "string",
                ui: {
                  grid: {
                    span: 4,
                  },
                },
              },
              obj4: {
                title: "子对象4",
                type: "string",
                ui: {
                  grid: {
                    span: 4,
                  },
                },
              },
              obj5: {
                title: "子对象5",
                type: "string",
                ui: {
                  grid: {
                    span: 4,
                  },
                },
              },
              obj6: {
                title: "子对象6",
                type: "string",
                ui: {
                  grid: {
                    span: 4,
                  },
                },
              },
            },
          },
          enable: {
            title: "启用",
            type: "boolean",
          },
        },
        required: ["name"],
      },
      data: { enable: true },
    };
  },
  methods: {
    clear() {
      this.data = null;
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
  },
};
</script>
<style lang=""></style>
```

:::
