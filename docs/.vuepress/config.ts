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

export default defineUserConfig({
  lang: "zh-CN",
  base: "/v-formly-v3/",
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
        href: `/icons/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/icons/favicon-32x32.png`,
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
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
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
          { text: "Config Reference", link: "/components/" },
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
          { text: "组件", link: "/zh/components/" },
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
    demoCodePlugin({
      examplesPath: path.resolve(__dirname, "../../src/examples/views"),
    }),
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
});

function getGuideSidebar(groupA, groupB) {
  return [
    {
      text: groupA,
      children: ["README.md", "meta.md", "terms.md"],
    },
    {
      text: groupB,
      children: ["custom-validator.md", "layout.md", "form.md"],
    },
  ];
}

function getComponentsSidebar(groupA, groupB) {
  return [
    {
      text: groupA,
      collapsable: false,
      sidebarDepth: 0,
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
      collapsable: false,
      sidebarDepth: 2,
      children: ["custom-components.md"],
    },
  ];
}
