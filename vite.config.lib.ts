import { fileURLToPath, URL } from "node:url";

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: "lib",
    lib: {
      entry: path.resolve(__dirname, "src/formly.ts"),
      name: "v-formly-v3",
      fileName: (format: any) => `v-formly-v3.${format}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        "ant-design-vue",
        "pinia",
        "ajv",
        "@ant-design/icons-vue",
        "vue-router",
        "mitt",
      ],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
          "ant-design-vue": "ant-design-vue",
          pinia: "pinia",
          "@ant-design/icons-vue": "@ant-design/icons-vue",
          "vue-router": "vue-router",
          mitt: "mitt",
          ajv: "ajv",
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
