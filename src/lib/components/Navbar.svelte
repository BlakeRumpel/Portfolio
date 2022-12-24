<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

	export let top: boolean;
</script>

<nav class="flex p-8 justify-between" style={top && "order: -1"}>
	<div class="flex w-32">
		{#if top}
			<a class="flex items-center gap-4" href="/">
				<Fa icon={faArrowLeftLong} /> Back
			</a>
		{/if}
	</div>
	<div class="flex gap-8">
		<a href="/about">About Me</a>
		<a href="/contact">Contact</a>
	</div>
	<div class="flex w-32 justify-end gap-4">
		<a href="https://github.com/blakerumpel" target="_blank">
			<Fa icon={faGithub} size="2x" />
		</a>
		<a href="https://www.linkedin.com/in/blake-rumpel/" target="_blank">
			<Fa icon={faLinkedin} size="2x" />
		</a>
	</div>
</nav>
