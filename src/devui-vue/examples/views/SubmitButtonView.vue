<template>
  <div>
    <d-row type="flex" justify="center" style="margin: 10px 0">
      button = 'default' 显示默认的提交按钮
    </d-row>
    <v-formly-v3
      v-model="formData1"
      :meta="meta"
      :button="'default'"
      @form-submit="submit"
    />
    <d-row type="flex" justify="center" style="margin: 10px 0">
      button = 'custom' 自定义提交按钮，传入 default slot
    </d-row>
    <v-formly-v3
      v-model="formData2"
      :meta="meta"
      :button="'custom'"
      @form-submit="submit"
    >
      <template v-slot:button="{ loading, clearForm, submitForm }">
        <div class="btns">
          <d-button variant="solid" color="danger" @click="clearForm">
            自定义重置
          </d-button>
          <d-button
            variant="solid"
            color="primary"
            @click="submitForm"
            :loading="loading"
          >
            自定义提交
          </d-button>
        </div>
      </template>
    </v-formly-v3>
    <d-row type="flex" justify="center" style="margin: 10px 0">
      button = undefined 不需要提交按钮，完全由外部控制
    </d-row>
    <v-formly-v3 ref="form" v-model="formData3" :meta="meta" />
    <div class="btns">
      <d-button variant="solid" color="danger" @click="clear"> 重置 </d-button>
      <d-button variant="solid" color="primary" @click="submitAsync">
        提交
      </d-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRaw, unref } from "vue";
import type VFormly from "@/devui-vue/DFormly.vue";

const form = ref<null | InstanceType<typeof VFormly>>(null);
const formData1 = ref({});
const formData2 = ref({});
const formData3 = ref({});
const meta = {
  properties: {
    name: {
      title: "姓名",
      type: "string",
      ui: {
        showRequired: true,
      },
    },
    asyncError: {
      title: "异步错误（2秒）",
      type: "string",
      ui: {
        showRequired: true,
        validatorAsync: (val: any) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                !val
                  ? [
                      {
                        keyword: "required",
                        message: "Required asyncError",
                      },
                    ]
                  : []
              );
            }, 2000);
          });
        },
      },
    },
  },
  required: ["name", "asyncError"],
};

function submit(value: any) {
  console.log(value);
}
function clear() {
  formData3.value = {};
}
async function submitAsync() {
  const valid = await form.value!.validate();
  if (valid) {
    console.log(toRaw(unref(formData3)));
  }
}
</script>
