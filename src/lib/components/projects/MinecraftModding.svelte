<script lang="ts">
	import Fa from "svelte-fa";
	import { faJava, faVuejs } from "@fortawesome/free-brands-svg-icons";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
	import ModDownloadCount from "$lib/components/ModDownloadCount.svelte";
	import Project from "$lib/components/Project.svelte";
	import TypeScript from "$lib/components/icons/TypeScript.svelte";
</script>

<Project
	name="Minecraft Modding"
	image="/img/blakesmods.png"
	type="Personal Project"
	synopsis="Multiple popular mods for Minecraft: Java Edition."
	website="blakesmods.com"
>
	<svelte:fragment slot="languages">
		<LanguageIcon name="Java <br> (Mod Development)" icon={faJava} />
		<LanguageIcon name="Vue <br> (Website)" icon={faVuejs} />
		<LanguageIcon name="TypeScript <br> (Website)">
			<TypeScript size="20" />
		</LanguageIcon>
	</svelte:fragment>

	<div class="space-y-2">
		<p>
			Blake's Mods is the umbrella term for all of my Minecraft mods. Minecraft modding was my first
			endeavor into programming. I started creating Minecraft mods back in 2015, and have since
			accumulated <ModDownloadCount /> downloads!
		</p>
		<p>
			Minecraft mods are coded using Java, and are compiled into jar files which can be installed by
			an end user by simply dropping that jar into their mods folder. Mods add additional content
			and features to the base Minecraft game.
		</p>
		<p>
			I initially released all my mods on <a
				href="https://www.curseforge.com/minecraft/mc-mods"
				target="_blank"
				rel="noreferrer"
			>
				CurseForge,
			</a>
			the most popular hub for Minecraft mods. Recently, I decided to distribute my mods on my own website,
			<a href="https://blakesmods.com" target="_blank" rel="noreferrer">blakesmods.com,</a>
			as well as the new CurseForge competitor,
			<a href="https://modrinth.com/mods" target="_blank" rel="noreferrer">Modrinth.</a>
		</p>
	</div>
</Project>
