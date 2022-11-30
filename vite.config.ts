import { fileURLToPath, URL } from "node:url";
import { defineConfig, type ConfigEnv, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import vueSetupExtendPlus from "unplugin-vue-setup-extend-plus/vite";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv) => {
  return defineConfig({
    plugins: [
      vue(),
      command === "serve"
        ? (vueSetupExtendPlus({}) as PluginOption)
        : vueSetupExtend(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
