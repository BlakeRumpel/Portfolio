<script lang="ts">
	import { faLaravel, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
	import Project from "$lib/components/Project.svelte";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
	import TypeScript from "$lib/components/icons/TypeScript.svelte";
</script>

<Project
	name="App Tally"
	image="/img/apptally.png"
	type="Personal Project"
	synopsis="A web app to track and manage job applications."
	website="apptally.io"
>
	{#snippet languages()}
		<LanguageIcon name="PHP" icon={faPhp} />
		<LanguageIcon name="Laravel" icon={faLaravel} />
		<LanguageIcon name="React" icon={faReact} />
		<LanguageIcon name="TypeScript">
			<TypeScript size="20" />
		</LanguageIcon>
	{/snippet}

	<div class="space-y-2">
		<p>
			App Tally I decided to build due to the classic SaaS idea pipeline of spreadsheet -> web app.
			The main benefits of building an app like this are automation and data aggregation.
		</p>
		<p>
			I wanted to build an app using a more monolithic/traditional MVC architecture as up to this
			point I had generally built things more modular. I chose Laravel as it seemed to be gaining a
			lot of traction and was a nice batteries included solution.
		</p>
	</div>
</Project>
