import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import comps from './plugins/comps/comps';
Vue.use(comps);

Vue.config.productionTip = false;

Vue.filter('highlightSearch', (value, filter) => {
	if(filter) {
		const titleRegExp = new RegExp(filter, 'ig');
		return value.replace(titleRegExp, match => `<span class="bg-orange">${match}</span>`);
	}
	return value;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
