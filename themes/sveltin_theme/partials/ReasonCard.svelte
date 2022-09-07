<script>
	export let image;
	export let text;
</script>

<div class="rounded shadow-lg">
	<img src={image} alt="" class="w-56" />
	<p class="py-10 pl-3 font-semibold leading-relaxed">{@html text}</p>
</div>
