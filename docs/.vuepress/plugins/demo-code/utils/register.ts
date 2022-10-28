import { App } from "@vuepress/core";
import { ComponentInfo } from "./type";

export class Register {
  components = new Map<string, ComponentInfo>();

  constructor(public app: App) {}

  push(comp: ComponentInfo) {
    if (this.components.has(comp.name)) return;
    this.components.set(comp.name, comp);
  }

  writeTotemp() {
    const file = `register-components/clientEnhance..js`;
    const content = `
        import { defineAsyncComponent } from "vue";
        export default {
            enhance({ app }) {
                ${Array.from(this.components.values())
                  .map(
                    ({ name, path }) =>
                      `app.component("${name}", defineAsyncComponent(() => import("${path}")))`
                  )
                  .join(";\n")}
            }
        }
        `;
    return this.app.writeTemp(file, content);
  }
}
