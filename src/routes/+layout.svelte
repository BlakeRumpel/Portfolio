<script lang="ts">
	import "../app.css";
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import type { Snippet } from "svelte";

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Blake Rumpel &bullet; Software Developer</title>
	<meta name="description" content="This is my portfolio. Check out the things I've worked on!" />
	<meta name="og:title" content="Blake Rumpel" />
	<meta
		name="og:description"
		content="This is my portfolio. Check out the things I've worked on!"
	/>
	<meta name="og:image" content="https://blakerumpel.com/img/og-image.png" />
</svelte:head>

<div class="container flex mx-auto">
	<Navigation />
	<main class="flex flex-col h-full relative md:ml-60 px-8">
		{@render children?.()}
	</main>
</div>

<Footer />
