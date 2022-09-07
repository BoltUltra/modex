<script lang="ts">
	import '../app.css';
	import { website } from '$config/website.js';
	import { googleFonts } from '$config/externals.js';
	import { menu } from '$config/menu.js';
	import orderBy from 'lodash-es/orderBy.js';
	import { JsonLdSiteNavigationElements, JsonLdWebSite } from '@sveltinio/seo';
	import { GoogleFonts } from '@sveltinio/services';
	import ScrollToTopButton from '@sveltinio/widgets/components/ScrollToTopButton.svelte';
	import Footer from '$themes/sveltin_theme/partials/Footer.svelte';
	import Navbar from '$themes/sveltin_theme/partials/navbar.svelte';

	const sortedMenu = orderBy(menu, 'weight');
</script>

<JsonLdWebSite websiteData={website} />
<JsonLdSiteNavigationElements websiteData={website} menuData={sortedMenu} />

<GoogleFonts fonts={googleFonts} />

<div class="flex min-h-screen w-full flex-col justify-center">
	<Navbar />
	<main class="grow">
		<slot />
	</main>
	<Footer websiteData={website} />
</div>
<ScrollToTopButton fillColor="#772EB0" />
