import { fileURLToPath, URL } from "node:url";

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    outDir: "lib/element",
    lib: {
      entry: path.resolve(__dirname, "src/elformly.ts"),
      name: "lib",
      fileName: (format: any) => `v-formly-v3-element.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "element-plus", "ajv", "mitt"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
          "element-plus": "element-plus",
          ajv: "Ajv",
          mitt: "mitt",
        },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      outputDir: "types/element",
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
