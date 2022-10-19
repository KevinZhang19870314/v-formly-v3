# 自定义组件

v-formly 内置了很多组件，一般业务场景基本可以满足，除了内置组件外，v-formly 还提供了自定义组件的能力。

## 自定义组件需要遵循一定的规则，总的来说有四步：

::: tip
一般情况下，我们自定义组件需要新增两个文件，比如我们下面的 Password 密码框组件，我们需要新增：

`Password.vue`

`password.meta.js`

:::

### 1. 命名组件`.vue`中的`name`

通常我们以`v-${id}`来命名我们的组件，其中`id`代表你注册时的组件`id`（`registerFormComponent("v-string", VString)`中的第一个参数）。

### 2. 导入 mixin 到`.vue`组件中

导入 mixin`componentMixin`到组件中，此 mixin 包含了一些通过的`props`、`data`等供组件使用。

### 3. 新建并初始化 context 到`.meta.js`文件中

新建一个 context js 类，比如`string.meta.js`, 在组件的`data`中初始化 context：

```vue
data() { return { context: new StringMeta(this.state, this.id, this.meta), }; },
```

### 4. 绑定`context.value`到`.vue`文件模板中

v-formly 中的每个组件都对应一个 context，其中包含了组件的数据存储及校验逻辑等，我们需要把`context.value`绑定到组件的模板中去，这样组件才能响应数据的变化。

## 自定义 Password 密码框组件

好了，我们对自定义组件应该有了一个大致的了解，下面我们举例说明如何创建一个自定义 Password 组件。

### 具体实现

#### Password.vue

对应上面的自定义组件四步，理解一下这个文件。

```vue
<template>
  <!-- 必须要使用 v-wrapper 来包裹我们的模板 -->
  <v-wrapper :id="id" :meta="meta">
    <a-input
      v-bind="ui"
      :defaultValue="meta.defaultValue"
      :disabled="meta.readOnly"
      :maxLength="meta.maxLength"
      :type="type"
      v-model="value"
      @change="change"
    >
      <template v-slot:suffix>
        <div style="cursor: pointer" @click="toggle">
          <a-icon v-if="!eyeVisible" type="eye-invisible" />
          <a-icon v-if="eyeVisible" type="eye" />
        </div>
      </template>
    </a-input>
  </v-wrapper>
</template>
<script>
import { PasswordMeta } from "./password.meta.js";
import { componentMixin } from "@/formly.js";
export default {
  name: "v-password",
  // 导入mixin
  mixins: [componentMixin],
  data() {
    return {
      // 初始化 context
      context: new PasswordMeta(this.state, this.id, this.meta),
      eyeVisible: false,
      type: "password",
    };
  },
  computed: {
    // 这个是绑定到模板的 v-model 值
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || undefined;
      },
    },
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
    toggle() {
      this.eyeVisible = !this.eyeVisible;
      this.type = this.eyeVisible ? "text" : "password";
    },
  },
};
</script>
<style lang="less" scoped></style>
```

#### password.meta.js

因为密码框组件比较简单，只有一些 UI 样式的操作，所以`.meta.js`文件非常简单，只在`setValue`中设置`value`时去除两边的空格。

```js
import { BaseMeta } from "@/formly.js";
class PasswordMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
  }

  setValue(val) {
    this._value = (val && val.trim()) || undefined;
  }
}

export { PasswordMeta };
```

#### 注册自定义组件

我们可以在`main.js`文件中注册，如下所示：

```js
import VPassword from "@/examples/components/password/Password.vue";
import VChkInput from "@/examples/components/chk-input/ChkInput.vue";
import { registerFormComponent } from "@/formly.js";

Vue.config.productionTip = false;

Vue.use(VFormly, {
  ui: {
    errors: {
      required: "必填项",
    },
  },
});

registerFormComponent("v-password", VPassword);
registerFormComponent("v-chkinput", VChkInput);
```

接下来，我们就可以直接使用自定义组件了。

### 代码演示

以上就是我们自定义的密码框组件，其实我们在[String 文本框](/zh/components/string.html)中通过内置的`v-string`组件也实现了 Password，但是比较一下代码就知道，`v-string`中是通过传入`slot`然后增加了一些逻辑来实现了它。

我们在来看下下面的使用代码，没有任何多余的逻辑处理，只是在`ui`中增加了一行`component: "password"`就可以了，剩余的逻辑都在自定义组件里面帮我们实现了，所以对终端用户来说创建表单非常简单！

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "用户名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入用户名",
              },
            },
          },
          password: {
            title: "密码",
            type: "string",
            default: "123456",
            ui: {
              component: "password",
              showRequired: true,
              errors: {
                required: "请输入密码",
              },
            },
          },
        },
        required: ["name", "password"],
      },
      data: {},
    };
  },
  methods: {
    clear() {
      this.data = null;
      // this.$refs.form.reset(null);
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
<style lang="less" scoped></style>
```

:::

### 深入

我们还在[@/examples/components/chk-input](https://github.com/KevinZhang19870314/v-formly/tree/main/src/examples/components/chk-input)文件夹下定义了一个复杂一点的选择输入框的自定义组件：当你选择“Others”的时候，会多出一个输入框让你输入自定义内容。有兴趣的可以自己查看。

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChkInputView",
  data: function () {
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
          favLanguage: {
            title: "喜欢的前端框架",
            type: "string",
            enum: ["VueJs", "Angular", "React", "Others"],
            // default: {
            //   options: ["VueJs", "Angular", "Others"],
            //   others: "NestJs",
            // },
            ui: {
              component: "chkinput",
              showRequired: true,
            },
          },
        },
        required: ["name", "favLanguage"],
      },
      data: {
        name: "Jack",
        favLanguage: {
          options: ["VueJs", "Angular", "Others"],
          others: "NestJs",
        },
      },
    };
  },
  methods: {
    clear() {
      this.data = null;
      // this.$refs.form.reset(null);
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
<style lang="less" scoped></style>
```

:::
