import type { Plugin } from '@vuepress/core'
import type Token from 'markdown-it/lib/token.js'
import { getDirname, path } from '@vuepress/utils'
import container from 'markdown-it-container'

const __dirname = getDirname(import.meta.url)
const currLib = process.env.VFORMLY_LIB

export const importCodesPlugin = (): Plugin => {
  return {
    name: "@vuepress/plugin-import-codes",
    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
    extendsMarkdown: (md) => {
      md.use(container, "import-codes-group", {
        render: function (tokens: Token[], i: number) {
          const token = tokens[i]
          if (token.nesting === 1) {
            return `<ImportCodesGroup>\n`;
          } else {
            return `</ImportCodesGroup>\n`;
          }
        },
      });
      md.use(container, "import-codes-group-item", {
        render: function (tokens: Token[], i: number) {
          debugger
          const token = tokens[i]
          const lib = token.info.trim().slice('import-codes-group-item'.length).trim()
          if (token.nesting === 1) {
            return `<ImportCodesGroupItem ${lib === currLib ? 'active' : ''}>\n`;
          } else {
            return `</ImportCodesGroupItem>\n`;
          }
        },
      });
    },
  };
};
