module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/comps/'
    : '/',
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/_vars.scss";`
			}
		}
	}
};