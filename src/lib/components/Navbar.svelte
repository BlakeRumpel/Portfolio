<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
	import { page } from "$app/stores";
	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
</script>

<AppBar
	class="fixed w-full flex-col md:flex-row gap-4 z-50"
	shadow="shadow-md"
	slotLead="w-32"
	slotTrail="w-32"
>
	<div class="flex gap-8">
		{#if $page.route.id !== "/"}
			<a class="flex items-center gap-4" href="/">
				<Fa icon={faArrowLeftLong} /> Home
			</a>
		{/if}
		<a class="flex items-center" href="/about">About</a>
		<a class="flex items-center" href="/contact">Contact</a>
	</div>

	<svelte:fragment slot="trail">
		<div class="flex w-32 justify-center md:justify-end items-center gap-4">
			<a href="https://github.com/blakerumpel" target="_blank" rel="noreferrer">
				<Fa icon={faGithub} size="2x" />
			</a>
			<a href="https://www.linkedin.com/in/blake-rumpel/" target="_blank" rel="noreferrer">
				<Fa icon={faLinkedin} size="2x" />
			</a>

			<LightSwitch class="pr-8 ml-4" />
		</div>
	</svelte:fragment>
</AppBar>
