<script lang="ts">
	import Circle from "$lib/components/Circle.svelte";
	import Card from "$lib/components/Card.svelte";
	import { faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { AnimateSharedLayout, AnimatePresence, Motion } from "svelte-motion";
	import BlakesMods from "$lib/components/cards/BlakesMods.svelte";
	import TicketTote from "$lib/components/cards/TicketTote.svelte";
	import { onMount } from "svelte";
	import anime from "animejs";

	const list = [
		{ id: 1 },
		{ id: 2, component: BlakesMods, x: 200, y: -200 },
		{ id: 3, component: TicketTote, x: -500, y: 200 },
		{ id: 4, x: 250, y: 250 },
		{ id: 5, x: -700, y: -175 }
	];

	let selected: number | undefined;

	function animateCircles() {
		setTimeout(() => {
			anime({
				targets: ".stagger",
				opacity: 1,
				translateX: (el, i) => [0, list[i + 1].x + 200],
				translateY: (el, i) => [0, list[i + 1].y],
				delay: anime.stagger(250)
			});
		}, 700);
	}

	function onCloseCard() {
		animateCircles();
	}

	onMount(() => {
		animateCircles();
	});
</script>

<div class="container flex relative h-full mx-auto justify-center items-center">
	<AnimateSharedLayout type="crossfade">
		<Motion let:motion layout>
			<div use:motion class="container flex relative h-full mx-auto justify-center items-center">
				<Circle className="z-10" size="large" index={1} bind:selected>
					<Fa icon={faUser} style="width: 100%; height: 100%" />
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
					<Fa icon={faQuestion} style="width: 100%; height: 100%" />
				</Circle>
			</div>
		</Motion>
		<AnimatePresence list={list.filter((i) => i.id === selected)} let:item>
			<Card bind:selected {item} on:close={onCloseCard} />
		</AnimatePresence>
	</AnimateSharedLayout>
</div>
