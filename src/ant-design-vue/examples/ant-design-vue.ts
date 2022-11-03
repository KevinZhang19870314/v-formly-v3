import type { App } from "vue";

import {
  Card,
  Button,
  Form,
  Tooltip,
  Input,
  Row,
  Col,
  Switch,
  AutoComplete,
  Select,
  Checkbox,
  DatePicker,
  InputNumber,
  Menu,
  Layout,
  Breadcrumb,
  TimePicker,
  Radio,
  Rate,
  Tag,
  Slider,
  Space,
  Divider,
  Spin,
  Upload,
  Cascader,
  message,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

export function setupAntd(app: App<Element>) {
  app.config.globalProperties.$message = message;
  app
    .use(Card)
    .use(Button)
    .use(Form)
    .use(Tooltip)
    .use(Input)
    .use(Row)
    .use(Col)
    .use(Switch)
    .use(AutoComplete)
    .use(Select)
    .use(Checkbox)
    .use(DatePicker)
    .use(InputNumber)
    .use(Menu)
    .use(Layout)
    .use(TimePicker)
    .use(Radio)
    .use(Rate)
    .use(Tag)
    .use(Slider)
    .use(Space)
    .use(Divider)
    .use(Spin)
    .use(Upload)
    .use(Cascader)
    .use(Breadcrumb);
}
