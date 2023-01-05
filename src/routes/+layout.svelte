<script lang="ts">
	import type { LayoutData } from "./$types";
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import Navbar from "$lib/components/Navbar.svelte";
	import { fly, slide } from "svelte/transition";

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Blake Rumpel</title>
	<meta name="description" content="The portfolio site of software engineer Blake Rumpel!" />
</svelte:head>

<Navbar />

{#key data.url}
	<main
		class="h-full flex flex-col relative pt-16 p-4 overflow-x-hidden overflow-y-auto"
		in:fly
		out:slide
	>
		<slot />
	</main>
{/key}
