<script lang="ts">
	import { Motion } from "svelte-motion";
	export let className: string;
	export let size: "large" | "normal" = "normal";
	export let style: string = "";
	export let index: number;
	export let selected: number | undefined;

	function onClick() {
		selected = index;
	}
</script>

<Motion let:motion layoutId={index}>
	<div
		class="flex absolute border-4 border-accent-100-800-token rounded-full justify-center items-center overflow-hidden cursor-pointer bg-primary-500
		{size === 'large' ? 'w-[400px] h-[400px]' : 'w-[100px] h-[100px] p-4'} {className}"
		{style}
		use:motion
		on:click={onClick}
	>
		<slot />
	</div>
</Motion>
