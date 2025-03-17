<script lang="ts">
	import Fa from "svelte-fa";
	import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
	import type { Snippet } from "svelte";
	import { Tooltip } from "@skeletonlabs/skeleton-svelte";

	interface Props {
		icon?: IconDefinition | undefined;
		name: string;
		children?: Snippet;
	}

	let { icon = undefined, name, children }: Props = $props();

	let hovered = $state(false);
</script>

<Tooltip
	open={hovered}
	onOpenChange={(e) => (hovered = e.open)}
	positioning={{ placement: "top" }}
	openDelay={200}
	closeDelay={100}
>
	{#snippet trigger()}
		<span
			class="card flex w-8 h-8 justify-center items-center fill-surface-50 rounded [&>*]:pointer-events-none"
		>
			{#if icon}
				<Fa {icon} size="lg" />
			{:else}
				{@render children?.()}
			{/if}
		</span>
	{/snippet}
	{#snippet content()}
		<div class="card p-2">
			{@html name}
		</div>
	{/snippet}
</Tooltip>
