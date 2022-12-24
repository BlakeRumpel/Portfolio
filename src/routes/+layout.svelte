<script lang="ts">
	import type { LayoutData } from "./$types";
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import Navbar from "$lib/components/Navbar.svelte";
	import { page } from "$app/stores";
	import { slide } from "svelte/transition";

	export let data: LayoutData;

	let top;
	let slideParams;

	$: top = $page.route.id !== "/";
</script>

{#key data.url}
	<main
		class="h-full flex flex-col"
		in:slide={{ y: -50, duration: 250 }}
		out:slide={{ y: -50, duration: 250 }}
	>
		<slot />
		<Navbar {top} />
	</main>
{/key}
