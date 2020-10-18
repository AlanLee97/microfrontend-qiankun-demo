import Vue from 'vue'
import App from './App.vue'
import router from "@/util/router";
import store from "@/util/store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from "vue-router";
import './public-path'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);

let vue_router = router;

let instance = null;

function render(props) {
  console.log(props);
  // const {container} = props;
  router.base = window.__POWERED_BY_QIANKUN__ ? '/vue-app' : '/';

  instance = new Vue({
    router: vue_router,
    store,
    render: h => h(App),
  }).$mount( '#app');
}

if (!window.__POWERED_BY_QIANKUN__){
  render();
}

// new Vue({
//   router: router,
//   store: store,
//   render: h => h(App),
// }).$mount('#app')

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
