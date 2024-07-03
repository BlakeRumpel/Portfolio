<script lang="ts">
	import HomeSection from "$lib/components/sections/HomeSection.svelte";
	import AboutSection from "$lib/components/sections/AboutSection.svelte";
	import ProjectsSection from "$lib/components/sections/ProjectsSection.svelte";
	import ContactSection from "$lib/components/sections/ContactSection.svelte";
</script>

<svelte:head>
	<title>Blake Rumpel &bullet; Software Developer</title>
</svelte:head>

<div class="container flex flex-col relative justify-center items-center">
	<div class="flex flex-col gap-8">
		<HomeSection />
		<AboutSection />
		<ProjectsSection />
		<ContactSection />
	</div>
</div>
