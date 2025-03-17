<script lang="ts">
	import Fa from "svelte-fa";
	import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
	import type { Snippet } from "svelte";

	interface Props {
		name: string;
		image: string;
		type: string;
		website: string;
		synopsis: string;
		languages?: Snippet;
		children?: Snippet;
	}

	let { name, image, type, website, synopsis, languages, children }: Props = $props();

	let showDescription = $state(false);
</script>

<div class="flex flex-col gap-y-4">
	<div class="flex flex-col lg:flex-row justify-between gap-8">
		<div class="flex gap-8">
			<img src={image} alt="" class="block w-16 h-16" />
			<div class="flex flex-col justify-center">
				<h2>{name}</h2>
				<a href="https://{website}" target="_blank" rel="noreferrer">{website}</a>
			</div>
		</div>
		<div class="flex flex-row lg:flex-col gap-4">
			<div class="flex justify-end">
				<span class="badge variant-filled-primary">
					{type}
				</span>
			</div>
			<div class="flex justify-end items-center gap-2">
				{@render languages?.()}
			</div>
		</div>
	</div>

	<hr />

	{synopsis}

	<div>
		<button
			class="btn btn-sm variant-soft-primary"
			onclick={() => (showDescription = !showDescription)}
		>
			Learn More <Fa class="ml-3" icon={showDescription ? faChevronUp : faChevronDown} />
		</button>
	</div>

	{#if showDescription}
		{@render children?.()}
	{/if}
</div>
