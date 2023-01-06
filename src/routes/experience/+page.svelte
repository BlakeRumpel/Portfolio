<script>
	import { Avatar, Divider, GradientHeading, Stepper, tooltip } from "@skeletonlabs/skeleton";
	import {
		faCss3,
		faGolang,
		faHtml5,
		faJava,
		faJs,
		faLinkedin,
		faPhp,
		faReact,
		faVuejs
	} from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa";
	import CSharp from "$lib/components/icons/CSharp.svelte";
	import Svelte from "$lib/components/icons/Svelte.svelte";
	import dayjs from "dayjs";
	import { writable } from "svelte/store";
	import Step from "$lib/components/Step.svelte";

	const active = writable(0);
</script>

<svelte:head>
	<title>Work Experience &bull; Blake Rumpel</title>
</svelte:head>

<div class="container mx-auto mt-16 mb-8 md:mt-8 space-y-8">
	<GradientHeading
		class="text-center"
		tag="h1"
		direction="bg-gradient-to-r"
		from="from-warning-500"
		to="to-primary-500"
	>
		Work Experience
	</GradientHeading>

	<div class="card max-w-6xl mx-auto space-y-8 p-8">
		<div class="flex flex-col gap-8">
			<h2>Employment History</h2>
			<div class="flex flex-col gap-4">
				<Stepper>
					<Step index="1">
						<svelte:fragment slot="header">
							<h4>Sync Digital Solutions & TicketTote</h4>
							<small class="block">
								(Sep 2019 - Oct 2022) - <a href="https://www.syncds.ca/">Website</a>
							</small>
						</svelte:fragment>

						<p>Full Stack Developer</p>
					</Step>
					<Step index="2" last>
						<svelte:fragment slot="header">
							<h4>Unemployed</h4>
							<small class="block">(Oct 2022 - Now)</small>
						</svelte:fragment>

						<p>Looking for new opportunities... 👀</p>
					</Step>
				</Stepper>
			</div>
		</div>

		<p class="flex gap-2">
			View in detail on <a
				class="flex gap-1 items-center"
				href="https://www.linkedin.com/in/blake-rumpel/"
				target="_blank"
				rel="noreferrer"
			>
				<Fa icon={faLinkedin} /> Linkedin
			</a>
		</p>
	</div>
</div>
