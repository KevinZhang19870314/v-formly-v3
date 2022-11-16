import { defineClientConfig } from '@vuepress/client'
import { ImportCodesGroup, ImportCodesGroupItem } from './components/index.js'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ImportCodesGroup', ImportCodesGroup)
    app.component('ImportCodesGroupItem', ImportCodesGroupItem)
  },
})