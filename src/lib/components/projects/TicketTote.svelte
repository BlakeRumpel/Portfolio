<script lang="ts">
	import Fa from "svelte-fa";
	import { faGolang, faJs, faPhp, faVuejs } from "@fortawesome/free-brands-svg-icons";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
	import Project from "$lib/components/Project.svelte";
	import TypeScript from "$lib/components/icons/TypeScript.svelte";
</script>

<Project
	name="TicketTote"
	image="/img/tickettote.png"
	type="Employment"
	synopsis="A complete event and ticket management platform."
	website="tickettote.com"
>
	{#snippet languages()}
		<LanguageIcon name="JavaScript" icon={faJs} />
		<LanguageIcon name="VueJS" icon={faVuejs} />
		<LanguageIcon name="PHP" icon={faPhp} />
		<LanguageIcon name="Go" icon={faGolang} />
		<LanguageIcon name="TypeScript">
			<TypeScript size="20" />
		</LanguageIcon>
	{/snippet}

	<div class="space-y-2">
		<p>
			TicketTote is an online event ticketing platform, similar to sites like <a
				href="https://www.eventbrite.ca"
				target="_blank"
				rel="noreferrer"
			>
				Eventbrite
			</a>
			or
			<a href="https://www.ticketmaster.ca" target="_blank" rel="noreferrer">Ticket Master.</a>
			TicketTote is meant to be a complete event and ticket management platform that is both feature
			rich and easy to use.
		</p>
		<p>
			In the 3 years I worked at TicketTote, I worked up and down the full stack on everything from
			the frontend to the backend. I also handled system administration duties as well as
			system/infrastructure design and implementation.
		</p>
		<p>
			I worked on everything from building responsive UIs using Vue, building out rest APIs using
			Slim Framework and PHP, to creating realtime services using websockets and Golang. I worked on
			many major features such as the Email CRM, Promoter Dashboard, and the event creation flow.
		</p>
	</div>
</Project>
