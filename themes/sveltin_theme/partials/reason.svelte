<script>
	import ReasonCard from './ReasonCard.svelte';
</script>

<section class="mx-5 my-5 md:my-10 md:mx-24">
	<div class="text-center">
		<p class="py-10 text-2xl font-semibold">Why we are better than others</p>
	</div>
	<div class="justify-around space-y-10 md:flex md:space-y-0">
		<div class="">
			<ReasonCard image="/convenient.png" text="Convenient study schedule" />
		</div>
		<div class="md:pt-14">
			<ReasonCard image="/expert.png" text="Expert Instructors and <br/> community support" />
		</div>
		<div class="">
			<ReasonCard image="/modern.png" text="Modern Internet platform" />
		</div>
	</div>
</section>
