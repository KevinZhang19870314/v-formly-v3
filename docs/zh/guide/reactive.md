# 响应式

v-formly-v3 因为 Vue 3 的响应式，所以也支持响应式的在运行时设置表单项的所有属性。

## 代码演示

我们给输入框设置一个响应式的边框属性`const hasBorder = ref(true);`，当我们点击“设置边框”按钮时，他会 toggle 边框设置，这样我们就无需像 Vue 2 版本中的`v-formly`一样获取`context`上下文，然后通过使用上下文`context`来设置了，是不是很方便？

::: block
ReactiveView
:::
