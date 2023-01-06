<script>
	import { Avatar, Divider, GradientHeading, tooltip } from "@skeletonlabs/skeleton";
	import {
		faCss3,
		faGolang,
		faHtml5,
		faJava,
		faJs,
		faPhp,
		faReact,
		faVuejs
	} from "@fortawesome/free-brands-svg-icons";
	import Fa from "svelte-fa";
	import CSharp from "$lib/components/icons/CSharp.svelte";
	import Svelte from "$lib/components/icons/Svelte.svelte";
	import dayjs from "dayjs";

	const birthday = dayjs("2000-07-11");
	const started = dayjs("2015-06-01");
	const professional = dayjs("2019-06-01");

	const languages = [
		{ name: "HTML", icon: faHtml5 },
		{ name: "CSS", icon: faCss3 },
		{ name: "JavaScript", icon: faJs },
		{ name: "Java", icon: faJava },
		{ name: "Go", icon: faGolang },
		{ name: "PHP", icon: faPhp },
		{ name: "C#", component: CSharp }
	];

	const frameworks = [
		{ name: "React", icon: faReact },
		{ name: "Vue", icon: faVuejs },
		{ name: "Svelte", component: Svelte }
	];
</script>

<svelte:head>
	<title>About Me &bull; Blake Rumpel</title>
</svelte:head>

<div class="container mx-auto mt-16 mb-8 md:mt-8 space-y-8">
	<GradientHeading
		class="text-center"
		tag="h1"
		direction="bg-gradient-to-r"
		from="from-warning-500"
		to="to-primary-500"
	>
		About Me
	</GradientHeading>

	<div class="card max-w-6xl mx-auto space-y-8 p-4">
		<div class="card-header flex flex-col lg:flex-row gap-8">
			<div class="flex justify-center">
				<Avatar src="/img/profile.jpg" rounded="rounded-xl" width="w-48" />
			</div>
			<div class="flex flex-col gap-4">
				<p>
					Hi, I'm Blake! I'm a {dayjs().diff(birthday, "years")} year old software engineer from Winnipeg
					MB, Canada.
				</p>
				<p>
					I've been writing software for {dayjs().diff(started, "years")} years as a hobby and professionally
					for {dayjs().diff(professional, "years")} years.
				</p>
				<p>
					I have a passion for creating feature rich applications that solve complex problems using
					elegant solutions. I enjoy finding solutions to coding problems and solving them to the
					best of my ability. Buzzwords aside, I have the know-how to get the job done.
				</p>
			</div>
		</div>

		<Divider />

		<div class="flex flex-col px-4 gap-4">
			<h2>Backstory</h2>
			<div class="flex flex-col gap-4">
				<p>
					I started writing software back in 2015 creating <a
						href="https://blakesmods.com"
						target="_blank"
						rel="noreferrer"
					>
						Minecraft mods.
					</a>
					Not too long after I released my first mod, it started to gain traction. This motivated me
					to keep developing mods and to take computer science in high school.
				</p>
				<p>
					After high school I enrolled at <a
						href="https://mitt.ca"
						target="_blank"
						rel="noreferrer"
					>
						MITT
					</a>
					and started on my web development career. I was offered a job right out of college.
				</p>
				<p><a href="/experience">View Work Experience &rAarr;</a></p>
			</div>
		</div>

		<Divider />

		<div class="card-footer space-y-8">
			<h2>Languages</h2>
			<div class="flex flex-wrap gap-4">
				{#each languages as language}
					<div
						class="flex w-16 h-16 justify-center items-center text-5xl rounded-xl border-2 border-surface-400-500-token hover:bg-surface-200-700-token"
						use:tooltip={{ content: language.name }}
					>
						{#if language.icon}
							<Fa icon={language.icon} />
						{/if}

						{#if language.component}
							<span class="fill-surface-900 dark:fill-surface-50 w-16 h-16">
								<svelte:component this={language.component} />
							</span>
						{/if}
					</div>
				{/each}
			</div>

			<h2>Frameworks</h2>
			<div class="flex flex-wrap gap-4">
				{#each frameworks as framework}
					<div
						class="flex w-16 h-16 justify-center items-center text-5xl rounded-xl border-2 border-surface-400-500-token hover:bg-surface-200-700-token"
						use:tooltip={{ content: framework.name }}
					>
						{#if framework.icon}
							<Fa icon={framework.icon} />
						{/if}

						{#if framework.component}
							<span class="fill-black dark:fill-white w-16 h-16">
								<svelte:component this={framework.component} />
							</span>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
