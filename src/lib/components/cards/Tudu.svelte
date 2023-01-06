<script>
	import { Divider, tooltip } from "@skeletonlabs/skeleton";
	import Fa from "svelte-fa";
	import {
		faGolang,
		faJs,
		faPhp,
		faReact,
		faRust,
		faVuejs
	} from "@fortawesome/free-brands-svg-icons";
	import { faQuestion } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="flex flex-col space-y-8">
	<div class="flex flex-wrap justify-between gap-4">
		<div class="flex gap-8">
			<Fa icon={faQuestion} size="5x" />
			<div class="flex flex-col justify-center">
				<h2>New Project</h2>
				<a href="" target="_blank" rel="noreferrer">???</a>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<span class="badge badge-filled-primary">Personal Project</span>
			<div class="flex justify-end items-center gap-2">
				<span use:tooltip={{ content: "JavaScript" }}>
					<Fa icon={faJs} size="lg" />
				</span>
				<span use:tooltip={{ content: "React" }}>
					<Fa icon={faReact} size="lg" />
				</span>
				<span use:tooltip={{ content: "Rust" }}>
					<Fa icon={faRust} size="lg" />
				</span>
			</div>
		</div>
	</div>

	<Divider />

	<div class="space-y-4">
		<p>(redacted)</p>
	</div>
</div>
