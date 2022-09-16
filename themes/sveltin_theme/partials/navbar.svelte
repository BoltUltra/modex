<script>
	import SideNav from './sideNav.svelte';
	import Sidebar from './svgs/sidebar.svelte';
	import Globe from './svgs/globe.svelte';
	import Logo from './svgs/logo.svelte';

	function sidebar() {
		let sidenavEl = document.querySelector('.sidebar');
		sidenavEl.classList.toggle('hidden');
	}
</script>

<header class="relative">
	<nav class="flex items-center justify-between py-2 text-sm text-primary md:px-24 md:text-base">
		<div class="flex items-center space-x-3">
			<div class="">
				<Logo />
			</div>
			<p class="-mt-4 font-semibold uppercase text-primary">Modex</p>
		</div>
		<div class="-mt-4 hidden md:block">
			<ul class="flex items-center space-x-5">
				<a href="/"><li>Home</li></a>
				<li>Success</li>
				<li>Blog</li>
			</ul>
		</div>

		<div class="-mt-4 hidden items-center space-x-3 md:flex">
			<p class="flex items-center space-x-2"><Globe /> English</p>
			<button
				class="rounded border border-primary py-1 px-3 text-primary hover:bg-primary hover:text-white"
				>Get Started</button
			>
		</div>
		<div class="pr-3 text-primary md:hidden" on:click={sidebar}>
			<Sidebar />
		</div>
	</nav>
	<div class="sidebar hidden">
		<SideNav />
	</div>
</header>
