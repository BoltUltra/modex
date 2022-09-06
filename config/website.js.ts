import type { IWebSite } from '@sveltinio/seo/types';

const website: IWebSite = {
	name: '',
	baseURL: '',
	language: 'en-GB',
	title: '',
	slogan: '',
	description: '',
	seoDescription: '',
	favicon: 'favicon.ico',
	logo: 'logo.png',
	copyright: '2022, ',
	keywords: '',
	contactEmail: '',
	sitemap: {
		changefreq: 'weekly',
		priority: 0.5
	},
	socials: {
		linkedin: '',
		twitter: '',
		github: '',
		facebook: '',
		instagram: '',
		youtube: ''
	},
	webmaster: {
		name: 'YOUR_NAME_HERE',
		address: 'Somewhere, World (Milky Way)',
		contactEmail: ''
	}
};


export { website };
