<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<footer class="flex w-full p-4 bg-surface-800/70">
	<div class="container flex flex-col justify-center items-center mx-auto gap-2">
		<div class="flex gap-1">
			<a
				href="https://github.com/blakebr0"
				target="_blank"
				rel="noreferrer"
				class="flex items-center px-2 py-1 gap-2 text-surface-950-50 no-underline hover:preset-tonal-primary rounded-base"
			>
				<Fa icon={faGithub} /> GitHub
			</a>
			<a
				href="https://www.linkedin.com/in/blake-rumpel/"
				target="_blank"
				rel="noreferrer"
				class="flex items-center px-2 py-1 gap-2 text-surface-950-50 no-underline hover:preset-tonal-primary rounded-base"
			>
				<Fa icon={faLinkedin} /> Linkedin
			</a>
		</div>
		<div class="text-sm">© {new Date().getFullYear()} Blake Rumpel</div>
	</div>
</footer>
