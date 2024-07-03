<script lang="ts">
	import { onMount } from "svelte";
	import numeral from "numeral";

	let downloads: number | undefined;

	onMount(() => {
		fetch("https://api.blakesmods.com/v2/mods")
			.then((res) => res.json())
			.then((res) => {
				const mods = res.data.mods;
				let total = 0;

				for (const mod of mods) {
					total += mod.curseforge_downloads + mod.modrinth_downloads + mod.site_downloads;
				}

				downloads = total;
			})
			.catch((err) => console.log(err));
	});
</script>

{#if downloads}
	<span class="inline-flex font-bold">
		{numeral(downloads).format()}
	</span>
{:else}
	<div class="inline-block placeholder animate-pulse w-24 align-middle" />
{/if}
