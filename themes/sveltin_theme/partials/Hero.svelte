<script>
	import Button from './button.svelte';
	// import { ExternalLink } from '@sveltinio/essentials';
</script>

<section class="hero relative">
	<img src="/hero-img.png" class="w-full" alt="" />
	<div class="absolute top-0 left-0 ml-5 mt-10 md:ml-24 md:mt-60">
		<p class="mb-3 font-semibold md:mb-7 md:text-xl">Modex to the world</p>
		<p class="mb-3 text-2xl font-bold leading-snug text-white md:mb-7 md:text-7xl">
			Nourish Your Inner <br /> Skill with <span class="text-primary">MODEX</span>
		</p>
		<p class="text-xs font-semibold tracking-wide text-white md:mb-24 md:text-xl">
			Learn about new knowledge and <br /> abilities from experts <br /> and professionals in any field
		</p>
		<div class="md:justify-left hidden items-center space-x-5 md:flex">
			<Button content="Get Started" />
			<button class="rounded border border-primary py-3 px-8 text-white">Discount</button>
		</div>
	</div>
</section>
