<script>
	import { Avatar } from "@skeletonlabs/skeleton";
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
		{ name: "C#", component: CSharp },
		{ name: "React", icon: faReact },
		{ name: "Vue", icon: faVuejs },
		{ name: "Svelte", component: Svelte }
	];
</script>

<svelte:head>
	<title>About Me &bull; Blake Rumpel</title>
</svelte:head>

<section id="about" class="flex flex-col my-16 gap-16 scroll-m-16">
	<h1 class="text-center gradient-header">About Me</h1>

	<div class="flex flex-wrap lg:flex-nowrap gap-8">
		<div class="flex flex-col w-full lg:w-1/2 gap-8">
			<Avatar src="/img/profile.jpg" rounded="rounded-xl" width="w-48" />
			<div class="flex flex-col gap-4">
				<p>
					Hi, I'm Blake! I'm a {dayjs().diff(birthday, "years")} year old software engineer from Canada.
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

		<div class="flex flex-col w-full lg:w-1/2 lg:justify-center lg:items-center gap-8">
			<h3>Languages & Frameworks</h3>
			<div class="flex flex-wrap gap-4 lg:justify-center">
				{#each languages as language}
					<div class="card flex flex-col w-24 h-20 justify-center items-center text-5xl rounded-xl">
						{#if language.icon}
							<Fa icon={language.icon} />
						{/if}

						{#if language.component}
							<span class="flex justify-center fill-surface-50 w-16 h-12">
								<svelte:component this={language.component} />
							</span>
						{/if}

						<span class="text-base">{language.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
