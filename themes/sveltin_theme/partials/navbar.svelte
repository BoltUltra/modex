<script>
	import Globe from './svgs/globe.svelte';
	import Logo from './svgs/logo.svelte';
</script>

<nav class="flex items-center justify-between py-2 px-24 text-primary">
	<div class="flex items-center space-x-3">
		<div>
			<Logo />
		</div>
		<p class="-mt-4 font-semibold uppercase text-primary">Modex</p>
	</div>
	<div class="-mt-4">
		<ul class="flex items-center space-x-5">
			<a href="/"><li>Home</li></a>
			<li>Success</li>
			<li>Blog</li>
		</ul>
	</div>

	<div class="-mt-4 flex items-center space-x-3">
		<p class="flex items-center space-x-2"><Globe /> English</p>
		<button
			class="rounded border border-primary py-1 px-3 text-primary hover:bg-primary hover:text-white"
			>Get Started</button
		>
	</div>
</nav>
