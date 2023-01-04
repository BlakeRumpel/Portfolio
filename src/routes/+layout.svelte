<script lang="ts">
	import type { LayoutData } from "./$types";
	import "@skeletonlabs/skeleton/themes/theme-crimson.css";
	import "@skeletonlabs/skeleton/styles/all.css";
	import "../app.postcss";
	import Navbar from "$lib/components/Navbar.svelte";
	import { beforeNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	import { fly, slide } from "svelte/transition";

	export let data: LayoutData;

	let top = $page.route.id !== "/";

	beforeNavigate((navigation) => {
		top = !navigation.to || navigation.to.route.id !== "/";
	});
</script>

{#key data.url}
	<div class="w-full h-full flex flex-col" in:fly out:slide>
		<main class="h-full flex flex-col relative">
			<slot />
		</main>
		<Navbar />
	</div>
{/key}
