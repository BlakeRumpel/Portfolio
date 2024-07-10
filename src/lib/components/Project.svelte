<script lang="ts">
	import Fa from "svelte-fa";
	import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

	export let name: string;
	export let image: string;
	export let type: string;
	export let website: string;
	export let synopsis: string;

	let showDescription = false;
</script>

<div class="flex flex-col gap-y-4">
	<div class="flex flex-wrap justify-between gap-8">
		<div class="flex gap-8">
			<img src={image} alt="" class="block w-16 h-16" />
			<div class="flex flex-col justify-center">
				<h2>{name}</h2>
				<a href="https://{website}" target="_blank" rel="noreferrer">{website}</a>
			</div>
		</div>
		<div class="flex flex-row md:flex-col gap-4">
			<div class="flex justify-end">
				<span class="badge variant-filled-primary">
					{type}
				</span>
			</div>
			<div class="flex justify-end items-center gap-2">
				<slot name="languages" />
			</div>
		</div>
	</div>

	<hr />

	{synopsis}

	<div>
		<button
			class="btn btn-sm variant-soft-primary"
			on:click={() => (showDescription = !showDescription)}
		>
			Learn More <Fa class="ml-3" icon={showDescription ? faChevronUp : faChevronDown} />
		</button>
	</div>

	{#if showDescription}
		<slot />
	{/if}
</div>
