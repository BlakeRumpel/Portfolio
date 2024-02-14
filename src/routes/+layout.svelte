<script lang="ts">
	import type { LayoutData } from "./$types";
	import "../app.postcss";
	import Navbar from "$lib/components/Navbar.svelte";
	import { fly, slide } from "svelte/transition";
	import { onDestroy, onMount } from "svelte";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
	import { modeCurrent, storePopup } from "@skeletonlabs/skeleton";

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: LayoutData;

	let background: any;
	let unsubscribe: any;

	onMount(() => {
		// @ts-ignore
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
			backgroundColor: !$modeCurrent ? "#15171f" : "#dfe0e2"
		});

		unsubscribe = modeCurrent.subscribe((value) => {
			background.options.backgroundColor = !value ? "#15171f" : "#dfe0e2";
		});
	});

	onDestroy(() => {
		unsubscribe?.();
	});
</script>

<svelte:head>
	<title>Blake Rumpel</title>
	<meta name="description" content="This is my portfolio. Check out the things I've worked on!" />
	<meta name="og:title" content="Blake Rumpel" />
	<meta
		name="og:description"
		content="This is my portfolio. Check out the things I've worked on!"
	/>
	<meta name="og:image" content="https://blakerumpel.com/img/og-image.png" />
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
