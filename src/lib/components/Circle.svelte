<script lang="ts">
	import { Motion } from "svelte-motion";
	import { createEventDispatcher } from "svelte";
	import anime from "animejs";

	export let className: string;
	export let size: "large" | "normal" = "normal";
	export let style: string = "";
	export let index: number;
	export let selected: number | undefined = undefined;

	const dispatch = createEventDispatcher();

	function onClick() {
		selected = index;
		dispatch("click");
	}

	function onMouseEnter() {
		anime({
			targets: "#circle-" + index,
			scale: () => 1.25
		});
	}

	function onMouseLeave() {
		anime({
			targets: "#circle-" + index,
			scale: () => 1
		});
	}
</script>

<Motion let:motion layoutId={index}>
	<div
		id="circle-{index}"
		class="flex absolute border-4 border-surface-900-50-token rounded-full justify-center items-center overflow-hidden cursor-pointer bg-primary-500 [&>*]:grayscale [&>*]:hover:grayscale-0
		{size === 'large'
			? 'w-[200px] h-[200px] md:w-[300px] md:h-[300px]'
			: 'w-[100px] h-[100px] p-4'} {className}"
		{style}
		use:motion
		on:click={onClick}
		on:mouseenter={onMouseEnter}
		on:mouseleave={onMouseLeave}
	>
		<slot />
	</div>
</Motion>
