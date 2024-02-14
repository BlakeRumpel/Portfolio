<script lang="ts">
	export let index: number;
	export let last = false;

	let color: string;

	$: color = last ? "bg-surface-300-600-token" : "bg-primary-500";
</script>

<div class="grid grid-cols-[32px_1fr] gap-4">
	<div class="flex flex-col items-center">
		<div
			class="flex-none font-bold text-base w-8 h-8 rounded-full flex justify-center items-center {color}"
		>
			{index}
		</div>
		{#if !last}
			<!--suppress CheckEmptyScriptTag -->
			<div class="w-1 h-full {color}" />
		{/if}
	</div>
	<div class={!last ? "mb-4" : ""}>
		<header class="mb-2">
			<slot name="header"><h4>Step {index}</h4></slot>
		</header>
		<div>
			<slot />
		</div>
	</div>
</div>
