import { fileURLToPath, URL } from "node:url";

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    outDir: "lib/devui",
    lib: {
      entry: path.resolve(__dirname, "src/dformly.ts"),
      name: "lib",
      fileName: (format: any) => `v-formly-v3-devui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vue-devui", "ajv", "mitt"],
      output: {
        exports: "named",
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
          "vue-devui": "vue-devui",
          ajv: "Ajv",
          mitt: "mitt",
        },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      outputDir: "types/devui",
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
