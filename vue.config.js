module.exports = {
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production'
    ? '/comps/public'
    : '/',
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/_vars.scss";`
			}
		}
	}
};