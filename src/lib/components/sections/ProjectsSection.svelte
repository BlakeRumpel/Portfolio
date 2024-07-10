<script lang="ts">
	import MinecraftModding from "$lib/components/projects/MinecraftModding.svelte";
	import TicketTote from "$lib/components/projects/TicketTote.svelte";
	import AppTally from "$lib/components/projects/AppTally.svelte";
	import JustChattingRoulette from "$lib/components/projects/JustChattingRoulette.svelte";
</script>

<section id="projects" class="flex flex-col my-16 gap-16 scroll-mt-16">
	<h1 class="text-center">Projects</h1>

	<div class="flex flex-col gap-16">
		<TicketTote />
		<MinecraftModding />
		<AppTally />
		<JustChattingRoulette />
	</div>
</section>
