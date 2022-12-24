<script lang="ts">
	import Circle from "$lib/components/Circle.svelte";
	import Fa from "svelte-fa";
	import { faUser } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="container flex relative h-full mx-auto justify-center items-center">
	<Circle size="large">
		<Fa icon={faUser} style="width: 100%; height: 100%" />
	</Circle>

	<Circle style="position: absolute; left: 0">Test</Circle>
	<Circle style="position: absolute; right: 0">Test</Circle>
	<Circle style="position: absolute; left: 0; top: 76%">Test</Circle>
</div>
