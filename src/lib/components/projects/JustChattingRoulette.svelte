<script lang="ts">
	import Project from "$lib/components/Project.svelte";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
	import TypeScript from "$lib/components/icons/TypeScript.svelte";
	import Svelte from "$lib/components/icons/Svelte.svelte";
</script>

<Project
	name="Just Chatting Roulette"
	image="/img/justchattingroulette.png"
	type="Personal Project"
	synopsis="An app to find new Just Chatting streamers on Twitch."
	website="justchattingroulette.com"
>
	{#snippet languages()}
		<LanguageIcon name="Svelte">
			<Svelte size="24" />
		</LanguageIcon>
		<LanguageIcon name="TypeScript">
			<TypeScript size="20" />
		</LanguageIcon>
	{/snippet}

	<div class="space-y-2">
		<p>
			This is a project I threw together in a weekend to test out Cloudflare Pages, Workers and
			their SQLite database called D1.
		</p>
		<p>
			I came up with this idea after scrolling through the Just Chatting section on Twitch and
			seeing the massive variety of things people were streaming. I thought it would be fun to be
			able to potentially find some random streamers and see what you can find at the bottom of the
			Just Chatting section.
		</p>
	</div>
</Project>
