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
		{ id: 2, title: "Blake's Mods", component: BlakesMods, x: 200, y: -200 },
		{ id: 3, title: "TicketTote", component: TicketTote, x: -600, y: 200 },
		{ id: 4, title: "Secret Project", component: Tudu, x: 150, y: 250 },
		{ id: 5, title: "MITT", component: MITT, x: -650, y: -175 }
	];

	let widthMultiplier = 1;

	const animateCircles = debounce(() => {
		anime({
			targets: ".stagger",
			opacity: 1,
			translateX: (el, i) => (list[i + 1].x + 200) * widthMultiplier,
			translateY: (el, i) => list[i + 1].y,
			delay: anime.stagger(250)
		});
	}, 700);

	function onCloseCard() {
		animateCircles();
	}

	function onResize() {
		const width = window.innerWidth;
		const minWidth = 1300;

		widthMultiplier = Math.min(width / minWidth, 1);

		animateCircles();
	}

	onMount(() => {
		onResize();
	});
</script>

<svelte:window on:resize={debounce(onResize, 100)} />

<div
	class="container flex flex-col md:flex-row relative h-full mx-auto mt-16 md:-mt-16 justify-center items-center"
>
	<div class="space-y-2">
		<h1>Blake Rumpel</h1>
		<h3>Software Engineer</h3>
	</div>

	<AnimateSharedLayout type="crossfade">
		<Motion let:motion layout>
			<div use:motion class="flex relative h-full mx-auto justify-center items-center">
				<Circle className="z-10" size="large" index={1} on:click={() => goto("/about")}>
					<img src="https://i.pravatar.cc" alt="person" />
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
			<Card bind:selected {item} on:close={onCloseCard} />
		</AnimatePresence>
	</AnimateSharedLayout>
</div>
