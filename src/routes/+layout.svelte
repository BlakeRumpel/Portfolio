<script lang="ts">
	import type { LayoutData } from "./$types";
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import Navbar from "$lib/components/Navbar.svelte";
	import { fly, slide } from "svelte/transition";
	import { onDestroy, onMount } from "svelte";
	import { storeLightSwitch } from "@skeletonlabs/skeleton";

	export let data: LayoutData;

	let background;
	let unsubscribe;

	onMount(() => {
		background = VANTA.NET({
			el: "#background",
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: "#333",
			backgroundColor: $storeLightSwitch ? "#15171f" : "#dfe0e2"
		});

		unsubscribe = storeLightSwitch.subscribe((value) => {
			background.options.backgroundColor = value ? "#15171f" : "#dfe0e2";
		});
	});

	onDestroy(() => {
		unsubscribe?.();
	});
</script>

<svelte:head>
	<title>Blake Rumpel</title>
	<meta name="description" content="The portfolio site of software engineer Blake Rumpel!" />
	<script src="/js/three.min.js"></script>
	<script src="/js/vanta.net.min.js"></script>
</svelte:head>

<!--suppress CheckEmptyScriptTag -->
<div id="background" class="fixed w-screen h-screen pointer-events-none" />

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
