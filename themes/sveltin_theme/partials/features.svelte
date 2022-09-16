<script>
	import Value from './svgs/value.svelte';
	import Csupport from './svgs/csupport.svelte';
	import Support from './svgs/support.svelte';
	import Access from './svgs/access.svelte';
	import Courses from './svgs/courses.svelte';
</script>

<div class="bg-[#DBBFFF30]">
	<div
		class="grid grid-cols-2 justify-center gap-y-5 gap-x-2 py-7 px-5 text-xs md:grid-cols-5 md:px-24 md:text-base"
	>
		<div class="flex items-center space-x-3">
			<Courses />
			<p>10k Courses</p>
		</div>
		<div class="flex items-center space-x-3">
			<Access />
			<p>Lifetime Access</p>
		</div>
		<div class="flex items-center space-x-3">
			<Support />
			<p>Lifetime Support</p>
		</div>
		<div class="flex items-center space-x-3">
			<Csupport />
			<p>Community Support</p>
		</div>
		<div class="flex items-center space-x-3">
			<Value />
			<p>Value for money</p>
		</div>
	</div>
</div>
