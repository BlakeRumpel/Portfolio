<script lang="ts">
	import { onMount } from "svelte";
	import numeral from "numeral";
	import { modDownloads } from "$lib/stores";

	onMount(() => {
		if (typeof $modDownloads !== "undefined") {
			return;
		}

		fetch("https://api.blakesmods.com/v2/mods")
			.then((res) => res.json())
			.then((res) => {
				const mods = res.data.mods;
				let total = 0;

				for (const mod of mods) {
					total += mod.curseforge_downloads + mod.modrinth_downloads + mod.site_downloads;
				}

				$modDownloads = total;
			})
			.catch((err) => console.log(err));
	});
</script>

{#if $modDownloads}
	<span class="inline-flex font-bold">
		{numeral($modDownloads).format()}
	</span>
{:else}
	<div class="inline-block placeholder animate-pulse w-24 align-middle"></div>
{/if}
