# 自定义组件

v-formly-v3 内置了很多组件，一般业务场景基本可以满足，除了内置组件外，v-formly 还提供了自定义组件的能力。

## 自定义组件需要遵循一定的规则，总的来说有四步：

::: tip
一般情况下，我们自定义组件需要新增两个文件，比如我们下面的 Password 密码框组件，我们需要新增：

`Password.vue`

`password.meta.ts`

:::

### 1. 命名组件`.vue`中的`name`

通常我们以`v-${id}`来命名我们的组件，其中`id`代表你注册时的组件`id`（`registerFormComponent(app, "v-password", VPassword)`中的第二个参数）。

### 2. 新建并初始化 context 到`.meta.ts`文件中

新建一个 context ts 类，比如`password.meta.ts`, 在组件中初始化 context：

```ts {9}
import { PasswordMeta } from "./password.meta";
import type { Meta } from "@/types/meta";
import { getCurrentInstance, inject, type ComponentInternalInstance } from "vue";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const context = new PasswordMeta(appContext, state, props.id, props.meta);
```

### 3. 导入 useBindings  到`.vue`组件中

导入 hook`useBindings`到组件中，此 hook 导出了可供组件绑定使用的 ui props 对象`bindings`。

```ts {4}
import { Input } from "ant-design-vue";
import { useBindings } from "@/hooks/bindings";

const { bindings } = useBindings(Object.keys(Input.props), context.ui);
```

### 4. 绑定`context.value`到`.vue`文件模板中

v-formly-v3 中的每个组件都对应一个 context，其中包含了组件的数据存储及校验逻辑等，我们需要把`context.value`绑定到组件的模板中去，这样组件才能响应数据的变化。

## 自定义 Password 密码框组件

好了，我们对自定义组件应该有了一个大致的了解，下面我们举例说明如何创建一个自定义 Password 组件。

### 具体实现

#### Password.vue

对应上面的自定义组件四步，理解一下这个文件。

```vue {3,19,44,46,52-59}
<template>
  <!-- 必须要使用 v-wrapper 来包裹我们的模板 -->
  <v-wrapper :id="id" :meta="meta">
    <a-input
      v-bind="bindings"
      :disabled="meta.readOnly"
      :maxlength="meta.maxLength"
      :type="type"
      v-model:value="value"
      @change="change"
    >
      <template v-slot:suffix>
        <div style="cursor: pointer" @click="toggle">
          <eye-invisible-outlined v-if="!eyeVisible" />
          <eye-outlined v-if="eyeVisible" />
        </div>
      </template>
    </a-input>
  </v-wrapper>
</template>

<script setup lang="ts">
import { PasswordMeta } from "./password.meta";
import type { Meta } from "@/types/meta";
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  unref,
  type ComponentInternalInstance,
} from "vue";
import { Input } from "ant-design-vue";
import { useBindings } from "@/hooks/bindings";
import type { Global } from "@/utils/global";

const props = defineProps<{ id: string; meta: Meta }>();
const state = inject("state") as Global;
let type = ref("password");
let eyeVisible = ref(false);

const { appContext } = getCurrentInstance() as ComponentInternalInstance;
// 初始化 context
const context = new PasswordMeta(appContext, state, props.id, props.meta);
// 导入 hook
const { bindings } = useBindings(Object.keys(Input.props), context.ui);

const ui = computed(() => {
  return context.ui.value || {};
});
// 这个是绑定到模板的 v-model 值
const value = computed({
  get() {
    return context.value;
  },
  set(val) {
    context.value = val;
  },
});

function change() {
  if (ui.value.change) {
    ui.value.change(unref(value));
  }
}

function toggle() {
  eyeVisible.value = !eyeVisible.value;
  type.value = eyeVisible.value ? "text" : "password";
}
</script>
```

#### password.meta.ts

因为密码框组件比较简单，只有一些 UI 样式的操作，所以`.meta.ts`文件非常简单，只在`setValue`中设置`value`时去除两边的空格。

```ts {19}
import { BaseMeta } from "@/formly";
import type { Meta } from "@/types/meta";
import type { Global } from "@/utils/global";
import type { AppContext } from "vue";
class PasswordMeta extends BaseMeta {
  constructor(appContext: AppContext, state: Global, id: string, meta: Meta) {
    super(appContext, state, id, meta);
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (this.meta.value.default) {
      this.value = this.meta.value.default;
    }
  }

  setValue(val: any) {
    this._value.value = val?.trim() || undefined;
  }
}

export { PasswordMeta };
```

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
