import options from './comps.options';
import '@/assets/style.scss';

const { components, directives }  = options;

export default {
	install(Vue) {
		Object.keys(components).forEach(name => {
			Vue.component(name, components[name]);
		});
		Object.keys(directives).forEach(directiveName => {
			Vue.directive(directiveName, directives[directiveName]);
		});
	}
}