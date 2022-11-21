import { fileURLToPath, URL } from "node:url";

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    outDir: "lib",
    lib: {
      // 默认支持antDv
      entry: path.resolve(__dirname, "src/aformly.ts"),
      name: "v-formly-v3",
      fileName: (format: any) => `v-formly-v3.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "ant-design-vue", "ajv", "mitt"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
          "ant-design-vue": "antDesignVue",
          ajv: "Ajv",
          mitt: "mitt",
        },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      outputDir: "types",
      tsConfigFilePath: "./tsconfig.types.json",
    }),
    vue(),
    vueSetupExtend(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
