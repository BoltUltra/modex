<script>
	export let image;
	export let text;
</script>

<div class="rounded shadow-lg">
	<img src={image} alt="" class="mx-auto w-56" />
	<p class="py-10 pl-3 text-center font-semibold leading-relaxed md:text-left">{@html text}</p>
</div>
