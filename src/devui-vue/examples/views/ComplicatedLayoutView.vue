<template>
  <div>
    <v-formly-v3
      ref="form"
      v-model="formData"
      :meta="meta"
      :layout="'vertical'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const meta = {
  type: "object",
  properties: {
    name: {
      title: "姓名",
      type: "string",
      default: "kevin",
      ui: {
        showRequired: true,
        errors: {
          required: "请输入姓名",
        },
      },
    },
    desc: {
      title: "描述",
      type: "string",
      default: "Base on technical, but not limited on it!",
      ui: {
        change: (val: string) => {
          console.log("val = ", val);
        },
      },
    },
    field1_1: {
      title: "字段1_1",
      type: "string",
      ui: {
        grid: {
          span: 8,
        },
      },
    },
    field1_2: {
      title: "字段1_2",
      type: "string",
      ui: {
        grid: {
          span: 8,
        },
      },
    },
    field1_3: {
      title: "字段1_3",
      type: "string",
      ui: {
        grid: {
          span: 8,
        },
      },
    },
    field2_1: {
      title: "字段2_1",
      type: "string",
      ui: {
        grid: {
          span: 12,
        },
      },
    },
    field2_2: {
      title: "字段2_2",
      type: "string",
      ui: {
        grid: {
          span: 12,
        },
      },
    },
    obj: {
      type: "object",
      properties: {
        obj1: {
          title: "子对象1",
          type: "string",
          ui: {
            grid: {
              span: 4,
            },
          },
        },
        obj2: {
          title: "子对象2",
          type: "string",
          ui: {
            grid: {
              span: 4,
            },
          },
        },
        obj3: {
          title: "子对象3",
          type: "string",
          ui: {
            grid: {
              span: 4,
            },
          },
        },
        obj4: {
          title: "子对象4",
          type: "string",
          ui: {
            grid: {
              span: 4,
            },
          },
        },
        obj5: {
          title: "子对象5",
          type: "string",
          ui: {
            grid: {
              span: 4,
            },
          },
        },
        obj6: {
          title: "子对象6",
          type: "string",
          ui: {
            grid: {
              span: 4,
            },
          },
        },
      },
    },
    enable: {
      title: "启用",
      type: "boolean",
    },
  },
  required: ["name"],
};
const formData = ref({ enable: true });
</script>
