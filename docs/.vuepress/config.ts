import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import { demoCodePlugin } from "./plugins";

const __dirname = getDirname(import.meta.url);
const isProd = process.env.NODE_ENV === "production";
const enum Lib { Antdv = 'antdv', Element = 'element' }

const lib = process.env.VFORMLY_LIB || Lib.Antdv
const LIB_MAP = {
  [Lib.Antdv]: {
    base: "/v-formly-v3/",
    text: 'Ant Design Vue',
    examplesPath: path.resolve(__dirname, "../../src/ant-design-vue/examples/views"),

  },
  [Lib.Element]: {
    base: "/v-formly-v3/element-plus/",
    text: 'Element Plus',
    examplesPath: path.resolve(__dirname, "../../src/element-plus/examples/views"),
  },
}
export default defineUserConfig({
  lang: "zh-CN",
  base: LIB_MAP[lib].base,
  locales: {
    "/": {
      lang: "en-US",
      title: "v-formly-v3",
      description:
        "v-formly-v3 is a dynamic (JSON powered) form library for vue.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "v-formly-v3",
      description: "v-formly-v3是vue的动态（JSON驱动）表单库。",
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/v-formly-v3/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/v-formly-v3/icons/favicon-32x32.png`,
      },
    ],
    // ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "v-formly-v3" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "v-formly-v3" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/v-formly-v3/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/v-formly-v3/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/v-formly-v3/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  theme: defaultTheme({
    repo: "KevinZhang19870314/v-formly-v3",
    docsDir: "docs",
    colorModeSwitch: false,
    locales: {
      "/": {
        // navbar
        navbar: [
          { text: "Guide", link: "/guide/" },
          ...getNavbarLib(lib as Lib)
        ],
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        selectLanguageAriaLabel: "Select language",
        // sidebar
        sidebar: {
          "/guide/": getGuideSidebar("Guide", "Advanced"),
          "/components/": getComponentsSidebar("Components", "Advanced"),
        },
        // page meta
        editLinkText: "Edit this page on GitHub",
      },
      "/zh/": {
        // navbar
        navbar: [
          { text: "指南", link: "/zh/guide/" },
          ...getNavbarLib(lib as Lib, '/zh/')
        ],
        selectLanguageText: "选择语言",
        selectLanguageName: "简体中文",
        selectLanguageAriaLabel: "选择语言",
        // sidebar
        sidebar: {
          "/zh/guide/": getGuideSidebar("指南", "深入"),
          "/zh/components/": getComponentsSidebar("组件", "高级"),
        },
        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  }),
  plugins: [
    demoCodePlugin({ examplesPath: LIB_MAP[lib].examplesPath }),
    searchPlugin(),
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        "/": {
          message: "New content is available.",
          buttonText: "Refresh",
        },
        "/zh/": {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  // configure markdown
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../../src/"),
        },
      },
    },
  }),
  define: {
    __VFORMLY_LIB__: lib,
  },
});

function getGuideSidebar(groupA, groupB) {
  return [
    {
      text: groupA,
      children: ["README.md", "meta.md", "terms.md"],
    },
    {
      text: groupB,
      children: ["custom-validator.md", "layout.md", "form.md", "reactive.md", "visible-if.md"],
    },
  ];
}

function getComponentsSidebar(groupA, groupB) {
  return [
    {
      text: groupA,
      children: [
        "README.md",
        "array.md",
        "autocomplete.md",
        "boolean.md",
        "cascader.md",
        "checkbox.md",
        "date.md",
        "number.md",
        "object.md",
        "radio.md",
        "rate.md",
        "select.md",
        "slider.md",
        "string.md",
        "tag.md",
        "text.md",
        "textarea.md",
        "time.md",
      ],
    },
    {
      text: groupB,
      children: ["custom-components.md"],
    },
  ];
}

function getNavbarLib(lib: Lib, lang: string = '/') {
  const url = isProd ? 'https://kevinzhang19870314.github.io/v-formly-v3' : 'http://127.0.0.1:5500/v-formly-v3'
  const list = [
    {
      lib: Lib.Antdv,
      text: LIB_MAP[Lib.Antdv].text,
      link: `${url}${lang}components/`,
    },
    {
      lib: Lib.Element,
      text: LIB_MAP[Lib.Element].text,
      link: `${url}/element-plus${lang}components/`,
    },
  ]
  list.forEach(item => {
    if (item.lib === lib) {
      item.link = `${lang}components/`
    }
  })
  return list
}