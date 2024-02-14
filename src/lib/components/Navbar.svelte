<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
</script>

<AppBar
	class="fixed w-full flex-col md:flex-row gap-4 z-50"
	slotDefault="w-full"
	shadow="shadow-md"
>
	<div class="flex justify-center md:justify-start">
		<a
			class="flex items-center px-4 py-1 text-surface-900-50-token no-underline hover:bg-primary-hover-token rounded-token"
			href="/"
		>
			Home
		</a>
		<a
			class="flex items-center px-4 py-1 text-surface-900-50-token no-underline hover:bg-primary-hover-token rounded-token"
			href="/about"
		>
			About
		</a>
		<a
			class="flex items-center px-4 py-1 text-surface-900-50-token no-underline hover:bg-primary-hover-token rounded-token"
			href="/experience"
		>
			Experience
		</a>
		<a
			class="flex items-center px-4 py-1 text-surface-900-50-token no-underline hover:bg-primary-hover-token rounded-token"
			href="/contact"
		>
			Contact
		</a>
	</div>

	<svelte:fragment slot="trail">
		<div class="flex w-32 justify-center md:justify-end items-center">
			<a
				href="https://github.com/blakebr0"
				target="_blank"
				rel="noreferrer"
				class="flex items-center px-4 py-1 gap-2 text-surface-900-50-token no-underline hover:bg-primary-hover-token rounded-token"
			>
				<Fa icon={faGithub} /> GitHub
			</a>
			<a
				href="https://www.linkedin.com/in/blake-rumpel/"
				target="_blank"
				rel="noreferrer"
				class="flex items-center px-4 py-1 gap-2 text-surface-900-50-token no-underline hover:bg-primary-hover-token rounded-token"
			>
				<Fa icon={faLinkedin} /> Linkedin
			</a>

			<LightSwitch class="pr-8 mx-4" />
		</div>
	</svelte:fragment>
</AppBar>
