# 自定义组件

v-formly-v3 内置了很多组件，一般业务场景基本可以满足，除了内置组件外，v-formly 还提供了自定义组件的能力。

## 自定义组件需要遵循一定的规则，总的来说有四步

::: tip
一般情况下，我们自定义组件需要新增两个文件，比如我们下面的 Password 密码框组件，我们需要新增：

`Password.vue`

`password.meta.ts`

:::

### 1. 命名组件`.vue`中的`name`

通常我们以`v-${id}`来命名我们的组件，其中`id`代表你注册时的组件`id`（`registerFormComponent(app, "v-password", VPassword)`中的第二个参数）。

### 2. 新建并初始化 context 到`.meta.ts`文件中

新建一个 context ts 类，比如`password.meta.ts`, 在组件中初始化 context：

:::: import-codes-group
::: import-codes-group-item antdv
@[code{23-44} ts{22}](@src/ant-design-vue/examples/components/password/Password.vue)
:::
::: import-codes-group-item element
@[code{35-41} ts{7}](@src/element-plus/examples/components/password/Password.vue)
:::
::: import-codes-group-item devui
@[code{30-36} ts{7}](@src/devui-vue/examples/components/password/Password.vue)
:::
::::

### 3. 导入 useBindings 到`.vue`组件中

导入 hook`useBindings`到组件中，此 hook 导出了可供组件绑定使用的 ui props 对象`bindings`。

:::: import-codes-group
::: import-codes-group-item antdv
@[code{33-44} ts{12}](@src/ant-design-vue/examples/components/password/Password.vue)
:::
::: import-codes-group-item element
@[code{33-43} ts{11}](@src/element-plus/examples/components/password/Password.vue)
:::
::: import-codes-group-item devui
@[code{27-38} ts{12}](@src/devui-vue/examples/components/password/Password.vue)
:::
::::

### 4. 绑定`context.value`到`.vue`文件模板中

v-formly-v3 中的每个组件都对应一个 context，其中包含了组件的数据存储及校验逻辑等，我们需要把`context.value`绑定到组件的模板中去，这样组件才能响应数据的变化。

## 自定义 Password 密码框组件

好了，我们对自定义组件应该有了一个大致的了解，下面我们举例说明如何创建一个自定义 Password 组件。

### 具体实现

#### Password.vue

对应上面的自定义组件四步，理解一下这个文件。

:::: import-codes-group
::: import-codes-group-item antdv
@[code{1-} vue{3,19,44,46,52-59}](@src/ant-design-vue/examples/components/password/Password.vue)
:::
::: import-codes-group-item element
@[code{1-} vue{3,19,41,43,52-59}](@src/element-plus/examples/components/password/Password.vue)
:::
::: import-codes-group-item devui
@[code{1-} vue{3,14,36,38,44-51}](@src/devui-vue/examples/components/password/Password.vue)
:::
::::

#### password.meta.ts

因为密码框组件比较简单，只有一些 UI 样式的操作，所以`.meta.ts`文件非常简单，只在`setValue`中设置`value`时去除两边的空格。

:::: import-codes-group
::: import-codes-group-item antdv
@[code{1-23} ts{19}](@src/ant-design-vue/examples/components/password/password.meta.ts)
:::
::: import-codes-group-item element
@[code{1-23} ts{19}](@src/element-plus/examples/components/password/password.meta.ts)
:::
::: import-codes-group-item devui
@[code{1-23} ts{19}](@src/devui-vue/examples/components/password/password.meta.ts)
:::
::::

#### 注册自定义组件

我们可以在`main.ts`文件中注册，如下所示：

```ts {15-16}
import App from "./App.vue";
import VFormly, { registerFormComponent } from "./formly";
import VPassword from "@/examples/components/password/Password.vue";
import VChkInput from "@/examples/components/chk-input/ChkInput.vue";

const app = createApp(App);
app.use(VFormly, {
  ui: {
    errors: {
      required: "必填项",
    },
  },
});

registerFormComponent(app, "v-password", VPassword);
registerFormComponent(app, "v-chkinput", VChkInput);
```

接下来，我们就可以直接使用自定义组件了。

### 代码演示

以上就是我们自定义的密码框组件，其实我们在[String 文本框](/zh/components/string.md)中通过内置的`v-string`组件也实现了 Password，但是比较一下代码就知道，`v-string`中是通过传入`slot`然后增加了一些逻辑来实现了它。

我们在来看下下面的使用代码，没有任何多余的逻辑处理，只是在`ui`中增加了一行`component: "password"`就可以了，剩余的逻辑都在自定义组件里面帮我们实现了，所以对终端用户来说创建表单非常简单！

::: block
PasswordView
:::

### 深入

我们还在[@/examples/components/chk-input](https://github.com/KevinZhang19870314/v-formly-v3/tree/main/src/examples/components/chk-input)文件夹下定义了一个复杂一点的选择输入框的自定义组件：当你选择“Others”的时候，会多出一个输入框让你输入自定义内容。有兴趣的可以自己查看。

::: block
ChkInputView
:::
