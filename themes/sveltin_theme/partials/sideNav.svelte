<script>
	import Globe from './svgs/globe.svelte';
</script>

<div
	class="absolute z-[44] h-screen w-[80%] space-y-5 border border-primary bg-primary px-5 py-5 text-white opacity-80 md:hidden"
>
	<ul class="space-y-5">
		<li>Home</li>
		<li>Succes</li>
		<li>Blog</li>
	</ul>

	<div class="flex items-center space-x-3">
		<p class="flex items-center space-x-2"><Globe /> English</p>
		<button class="rounded border border-white py-1 px-3 text-white">Get Started</button>
	</div>
</div>
