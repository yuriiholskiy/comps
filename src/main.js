import Vue from 'vue';
import App from './App.vue';
import router from './router';

import comps from './plugins/comps/';
Vue.use(comps);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
