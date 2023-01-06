<script lang="ts">
	import Circle from "$lib/components/Circle.svelte";
	import Card from "$lib/components/Card.svelte";
	import { faQuestion } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { AnimateSharedLayout, AnimatePresence, Motion } from "svelte-motion";
	import BlakesMods from "$lib/components/cards/BlakesMods.svelte";
	import TicketTote from "$lib/components/cards/TicketTote.svelte";
	import { onMount } from "svelte";
	import anime from "animejs";
	import { debounce } from "lodash";
	import { goto } from "$app/navigation";
	import MITT from "$lib/components/cards/MITT.svelte";
	import Tudu from "$lib/components/cards/Tudu.svelte";

	let selected: number | undefined;

	const list = [
		{ id: 1 },
		{ id: 2, title: "Blake's Mods", component: BlakesMods, x: "75%", y: "20%" },
		{ id: 3, title: "TicketTote", component: TicketTote, x: "15%", y: "69%" },
		{ id: 4, title: "Secret Project", component: Tudu, x: "80%", y: "60%" },
		{ id: 5, title: "MITT", component: MITT, x: "0%", y: "25%" }
	];

	onMount(() => {
		anime({
			targets: ".stagger",
			left: (el, i) => ["48%", list[i + 1].x],
			top: (el, i) => ["48%", list[i + 1].y],
			delay: anime.stagger(250, { start: 500 })
		});
	});
</script>

<div
	class="container flex flex-col md:flex-row relative w-screen h-full mx-auto mt-16 md:-mt-16 justify-center items-center"
>
	<div class="whitespace-nowrap space-y-2 text-center md:text-left">
		<h1>Blake Rumpel</h1>
		<h3>Software Engineer</h3>
	</div>

	<AnimateSharedLayout type="crossfade">
		<Motion let:motion layout>
			<div use:motion class="flex relative w-full h-full mx-auto justify-center items-center">
				<Circle className="z-10" size="large" index={1} on:click={() => goto("/about")}>
					<img src="/img/profile.jpg" alt="self portrait" class="object-cover w-full h-full" />
				</Circle>

				<Circle className="stagger" index={2} bind:selected>
					<img src="/img/blakesmods.png" alt="blakes mods logo" />
				</Circle>
				<Circle className="stagger" index={3} bind:selected>
					<img src="/img/tickettote.png" alt="tickettote logo" />
				</Circle>
				<Circle className="stagger" index={4} bind:selected>
					<Fa icon={faQuestion} style="width: 100%; height: 100%" />
				</Circle>
				<Circle className="stagger" index={5} bind:selected>
					<img src="/img/mitt.png" alt="manitoba institute of trades and technology logo" />
				</Circle>
			</div>
		</Motion>
		<AnimatePresence list={list.filter((i) => i.id === selected)} let:item>
			<Card bind:selected {item} />
		</AnimatePresence>
	</AnimateSharedLayout>
</div>
