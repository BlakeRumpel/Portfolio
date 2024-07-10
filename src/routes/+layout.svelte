<script lang="ts">
	import "../app.pcss";
	import { onMount } from "svelte";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
	import { storePopup } from "@skeletonlabs/skeleton";
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	onMount(() => {
		// @ts-ignore
		VANTA.NET({
			el: "#background",
			mouseControls: true,
			touchControls: false,
			gyroControls: false,
			scale: 1.0,
			scaleMobile: 1.0,
			points: 20.0,
			maxDistance: 30.0,
			spacing: 20.0,
			showDots: false,
			color: "#111",
			backgroundColor: "#0a0a0a"
		});
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

<div id="background" class="fixed w-screen h-screen -z-10 pointer-events-none" />

<div class="container flex mx-auto">
	<Navigation />
	<main class="flex flex-col h-full relative md:ml-60 px-8">
		<slot />
	</main>
</div>

<Footer />
