import type { Plugin } from "@vuepress/core";
import { getDirname, path, fs } from "@vuepress/utils";
import Token from "markdown-it/lib/token.js";
import container from "markdown-it-container";
import { Register } from "../utils/register";
import { DemoCodePluginOption } from "../utils/type";
import { highlight, transComponentName } from "../utils";

const __dirname = getDirname(import.meta.url);

export const demoCodePlugin = (options: DemoCodePluginOption): Plugin => {
  return (app) => {
    const register = new Register(app);
    return {
      name: "@vuepress/plugin-demo-code",
      clientConfigFile: () => register.writeTotemp(),
      onInitialized() {
        const demoPath = path.resolve(__dirname, "../components/Demo.vue");
        register.push({ name: "demo", path: demoPath });
      },
      extendsMarkdown: (md) => {
        md.use(container, "block", {
          validate: function (params: string) {
            // 匹配demo的开标签和闭合标签
            return params.trim().match(/^block\s*(.*)$/);
          },
          render: function (tokens: Token[], i: number) {
            // 拿到含有demo的token
            const m = tokens[i].info.trim().match(/^block\s+(.*)$/);
            if (tokens[i].nesting === 1) {
              // opening tag，
              const info = (m && m[1]) || "";
              // 注册所有demo组件
              const demoName = transComponentName(tokens[i + 2].content);
              const demoPath = path.resolve(
                options.examplesPath,
                tokens[i + 2].content + ".vue"
              );
              register.push({ name: demoName, path: demoPath });
              const demoCode = fs.readFileSync(demoPath).toString();
              const codeStr = encodeURIComponent(demoCode);
              const htmlStr = encodeURIComponent(highlight(demoCode));
              const infoStr = encodeURIComponent(md.render(info));
              return `<demo component="${demoName}" info="${infoStr}" code="${codeStr}" highlightCode="${htmlStr}">`;
            } else {
              // closing tag
              return "</demo>\n";
            }
          },
        });
      },
    };
  };
};
