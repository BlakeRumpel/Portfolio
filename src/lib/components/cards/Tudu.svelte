<script>
	import Fa from "svelte-fa";
	import { faJs, faReact, faRust } from "@fortawesome/free-brands-svg-icons";
	import { faQuestion } from "@fortawesome/free-solid-svg-icons";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
</script>

<div class="flex flex-col space-y-4 md:space-y-8">
	<div class="flex flex-wrap justify-between gap-4">
		<div class="flex gap-8">
			<Fa icon={faQuestion} size="5x" />
			<div class="flex flex-col justify-center">
				<h2>New Project</h2>
				<a href="" target="_blank" rel="noreferrer">???</a>
			</div>
		</div>
		<div class="flex md:flex-col gap-4">
			<span class="badge badge-filled-primary">Personal Project</span>
			<div class="flex justify-end items-center gap-2">
				<LanguageIcon name="JavaScript" icon={faJs} />
				<LanguageIcon name="React" icon={faReact} />
				<LanguageIcon name="Rust" icon={faRust} />
			</div>
		</div>
	</div>

	<hr />

	<div class="max-h-[296px] md:max-h-[376px] space-y-4 overflow-y-auto">
		<p>(redacted)</p>
	</div>
</div>
