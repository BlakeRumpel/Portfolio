<script lang="ts">
	import { Motion } from "svelte-motion";
	import { createEventDispatcher } from "svelte";

	export let selected: number | undefined;
	export let item;

	const dispatch = createEventDispatcher();

	function close() {
		selected = undefined;
		dispatch("close");
	}

	function onKeyUp(e: KeyboardEvent) {
		if (e.code === "Escape") close();
	}
</script>

<svelte:window on:keyup={onKeyUp} />

<Motion let:motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
	<!--suppress CheckEmptyScriptTag -->
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-10"
		use:motion
		on:click={close}
		on:keyup={onKeyUp}
	/>
</Motion>
<Motion
	layoutId={item.id}
	let:motion
	initial={{ borderRadius: "50px" }}
	animate={{ borderRadius: "50px" }}
	exit={{ borderRadius: "50px" }}
>
	<div
		class="fixed top-[25%] left-8 right-8 m-auto rounded-xl p-16 border-surface-900-50-token border-4 max-w-5xl z-20 bg-surface-100-800-token"
		use:motion
	>
		<Motion
			let:motion={body}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div use:body class="w-full">
				<svelte:component this={item.component} />
			</div>
		</Motion>
	</div>
</Motion>
