import Vue from 'vue'
import Router from 'vue-router'
import ComponentsPage from './views/ComponentsPage.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition ? savedPosition : { x: 0, y: 0 };
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import(/* webpackChunkName: 'home' */ './views/HomePage.vue')
		},
		{
			path: '/components',
			name: 'components',
			component: () => import(/* webpackChunkName: 'components' */ './views/ComponentsPage.vue')
		}  
	]
})
