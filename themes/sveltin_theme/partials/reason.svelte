<script>
	import ReasonCard from './ReasonCard.svelte';
</script>

<section class="mx-24 my-10">
	<div class="text-center">
		<p class="py-10 text-xl font-semibold">Why we are better than others</p>
	</div>
	<div class="flex justify-around">
		<div class="">
			<ReasonCard image="/convenient.png" text="Convenient study schedule" />
		</div>
		<div class="pt-14">
			<ReasonCard image="/expert.png" text="Expert Instructors and <br/> community support" />
		</div>
		<div class="">
			<ReasonCard image="/modern.png" text="Modern Internet platform" />
		</div>
	</div>
</section>
