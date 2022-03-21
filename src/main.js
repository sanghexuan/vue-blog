import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import {
  Button,
  Select,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Image,
  Upload,
  Message,
  Option,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "view-design/dist/styles/iview.css";
import "./assets/css/common.css";
import "./assets/css/fontAwesome.css";
import "./assets/less/index.less";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Image);
Vue.use(Upload);
Vue.use(Option);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$message = Message;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
