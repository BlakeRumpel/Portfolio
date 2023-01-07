<script lang="ts">
	import { Divider, tooltip } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";
	import numeral from "numeral";
	import Fa from "svelte-fa";
	import { faJava, faJs } from "@fortawesome/free-brands-svg-icons";

	let downloads: number | null = null;

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

<div class="flex flex-col space-y-4 md:space-y-8">
	<div class="flex flex-wrap justify-between gap-4">
		<div class="flex gap-8">
			<img src="/img/blakesmods.png" alt="blakes mods logo" class="block w-16 h-16" />
			<div class="flex flex-col justify-center">
				<h2>Blake's Mods</h2>
				<a href="https://blakesmods.com" target="_blank" rel="noreferrer">blakesmods.com</a>
			</div>
		</div>
		<div class="flex md:flex-col gap-4">
			<span class="badge badge-filled-primary">Personal Project</span>
			<div class="flex justify-end items-center gap-2">
				<span use:tooltip={{ content: "Java <br> (Mod Development)" }}>
					<Fa icon={faJava} size="lg" />
				</span>
				<span use:tooltip={{ content: "JavaScript <br> (Website)" }}>
					<Fa icon={faJs} size="lg" />
				</span>
			</div>
		</div>
	</div>

	<Divider />

	<div class="max-h-[296px] md:max-h-[376px] space-y-4 overflow-y-auto">
		<div class="space-y-2">
			<p>
				Blake's Mods is the umbrella term for all of my Minecraft mods. Minecraft modding was my
				first endeavor into programming. I started creating Minecraft mods back in 2015, and have
				since accumulated {#if downloads}<span class="inline-flex font-bold">
						{numeral(downloads).format()}
					</span>
				{:else}<!--suppress CheckEmptyScriptTag -->
					<div class="inline-block placeholder animate-pulse w-24 align-middle" />{/if} downloads!
			</p>
			<p>
				Minecraft mods are coded using Java, and are compiled into jar files which can be installed
				by an end user by simply dropping that jar into their mods folder. Mods add additional
				content and features to the base Minecraft game.
			</p>
			<p>
				I initially released all my mods on <a
					href="https://www.curseforge.com/minecraft/mc-mods"
					target="_blank"
					rel="noreferrer"
				>
					CurseForge,
				</a>
				the most popular hub for Minecraft mods. Recently, I decided to distribute my mods on my own
				website,
				<a href="https://blakesmods.com" target="_blank" rel="noreferrer">blakesmods.com,</a>
				as well as the new CurseForge competitor,
				<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth.</a>
			</p>
		</div>
	</div>
</div>
