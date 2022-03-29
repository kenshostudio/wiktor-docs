const { path } = require('@vuepress/utils')

module.exports = {
	title: 'wiktor',
	extends: '@vuepress/theme-default',
	themeConfig: {
		logo: '/images/wiktor/wiktor-docs-logo.svg',
		logoDark: '/images/wiktor/wiktor-docs-logo-dark.svg',

		navbar: [

			{
				text: 'For Users',
				link: '/user/',
			},
			{
				text: 'For Business',
				link: '/business/'
			},
			{
				text: 'Wiktor links',
				children: [
					{
						text: 'Forum',
						link: 'https://forum.wiktor.app'
					},
					{
						text: 'App',
						link: 'https://wiktor.app'
					},
					{
						text: 'Website',
						link: 'https://thewiktor.com'
					},
				]
			},
		],
		sidebar: {
			'/': [

			],
			'/user/': [
				{
					text: 'For users',
					children: [
						'/user/README.md',
						'/user/getting-started.md'
					],
				},
			],
			'/business/': [
				{
					text: 'For business',
					children: ['/business/cli.md', '/business/config.md'],
				},
			],
		},
	},
	locales: {
		'/': {
			lang: 'en-US',
			description: 'Documentation',
			selectLanguageName: 'English',
			selectLanguageText: 'Language',
		},
		'/cz/': {
			selectLanguageName: 'Čeština',
			lang: 'Čeština',
			description: 'Dokumentace',
			selectLanguageText: 'Jazyk',
		},
	},
	layouts: {
		layouts: path.resolve(__dirname, '/layouts'),
	},
	postcss: {
		plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
	},
	plugins: [
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search',
					},
					'/zh/': {
						placeholder: '搜索',
					},
				},
			},
		],
	]
}