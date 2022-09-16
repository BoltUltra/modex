<script lang="ts">
	import About from './../../themes/sveltin_theme/partials/about.svelte';
	import Reason from '$themes/sveltin_theme/partials/reason.svelte';
	import Features from '$themes/sveltin_theme/partials/features.svelte';
	import { website } from '$config/website.js';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage } from '@sveltinio/seo';
	import Hero from '$themes/sveltin_theme/partials/Hero.svelte';
	import { getFavicon } from '$lib/utils/strings.js';

	const homePage: IWebPageMetadata = {
		url: website.baseURL,
		title: website.title,
		description: website.seoDescription,
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: OpenGraphType.Website
		},
		twitter: {
			type: TwitterCardType.Large
		}
	};
</script>

<!-- SEO Section -->
<PageMetaTags data={homePage} />
<JsonLdWebPage data={homePage} />
<!-- End of SEO Section -->

<Hero />
<Features />
<Reason />
<About />
