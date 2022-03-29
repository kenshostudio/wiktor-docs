const { path } = require('@vuepress/utils')

const fooTheme = {
	name: 'wiktor-theme',
	layouts: {
		Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
		404: path.resolve(__dirname, 'layouts/404.vue'),
	},
	// ...
}