import Vue from "vue";
import ElementUI from 'element-ui';
import * as echarts from 'echarts'
import 'echarts-gl'

import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import '@/assets/icon/iconfont.css'
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
