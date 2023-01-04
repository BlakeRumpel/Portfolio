<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
	import { page } from "$app/stores";
</script>

<nav class="flex p-8 justify-between" style={$page.route.id !== "/" && "order: -1"}>
	<div class="flex w-32">
		{#if $page.route.id !== "/"}
			<a class="flex items-center gap-4" href="/">
				<Fa icon={faArrowLeftLong} /> Back
			</a>
		{/if}
	</div>
	<div class="flex gap-8">
		<a class="flex items-center" href="/about">About Me</a>
		<a class="flex items-center" href="/contact">Contact</a>
	</div>
	<div class="flex w-32 justify-end gap-4">
		<a href="https://github.com/blakerumpel" target="_blank" rel="noreferrer">
			<Fa icon={faGithub} size="2x" />
		</a>
		<a href="https://www.linkedin.com/in/blake-rumpel/" target="_blank" rel="noreferrer">
			<Fa icon={faLinkedin} size="2x" />
		</a>
	</div>
</nav>
