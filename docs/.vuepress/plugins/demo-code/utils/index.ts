import prism from "prismjs";
import loadLanguages from "prismjs/components/index.js";
import { path } from "@vuepress/utils";

/** 高亮代码 */
export const highlight = (code: string) => {
  loadLanguages(["markup"]);
  code = prism.highlight(code, prism.languages.markup, "markup");
  return `<pre v-pre><code>${code}</code></pre>`;
};

/** 将 example/arrary.vue 转换成 example-arrary.vue */ 
export const transComponentName = (fileName: string) => {
  return path.trimExt(fileName.replace(/\//g, "-"));
}