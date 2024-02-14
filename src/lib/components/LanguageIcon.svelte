<script lang="ts">
	import { popup } from "@skeletonlabs/skeleton";
	import Fa from "svelte-fa";

	export let icon: any | undefined;
	export let name: string;

	const id = `language-popup-${Math.random().toString(16).slice(2)}`;
</script>

<span class="[&>*]:pointer-events-none" use:popup={{ event: "hover", target: id }}>
	{#if icon}
		<Fa {icon} size="lg" />
	{:else}
		<slot />
	{/if}
</span>
<span class="bg-primary-500 p-2 rounded-lg" data-popup={id}>
	{@html name}
</span>
