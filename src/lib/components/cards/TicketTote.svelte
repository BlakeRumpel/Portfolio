<script>
	import { popup } from "@skeletonlabs/skeleton";
	import Fa from "svelte-fa";
	import { faGolang, faJs, faPhp, faVuejs } from "@fortawesome/free-brands-svg-icons";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
</script>

<div class="flex flex-col space-y-4 md:space-y-8">
	<div class="flex flex-wrap justify-between gap-4">
		<div class="flex gap-8">
			<img src="/img/tickettote.png" alt="tickettote logo" class="block w-16 h-auto" />
			<div class="flex flex-col justify-center">
				<h2>TicketTote</h2>
				<a href="https://tickettote.com" target="_blank" rel="noreferrer">tickettote.com</a>
			</div>
		</div>
		<div class="flex md:flex-col gap-4">
			<span class="badge badge-filled-primary">Employment</span>
			<div class="flex justify-end items-center gap-2">
				<LanguageIcon name="JavaScript" icon={faJs} />
				<LanguageIcon name="VueJS" icon={faVuejs} />
				<LanguageIcon name="PHP" icon={faPhp} />
				<LanguageIcon name="Go" icon={faGolang} />
			</div>
		</div>
	</div>

	<hr />

	<div class="max-h-[296px] md:max-h-[376px] space-y-4 overflow-y-auto">
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
				In the 3 years I worked at TicketTote, I worked up and down the full stack on everything
				from the frontend to the backend. I also handled system administration duties as well as
				system/infrastructure design and implementation.
			</p>
			<p>
				I worked on everything from building responsive UIs using Vue, building out rest APIs using
				Slim Framework and PHP, to creating realtime services using websockets and Golang. I worked
				on many major features such as the Email CRM, Promoter Dashboard, and the event creation
				flow.
			</p>
		</div>
	</div>
</div>
