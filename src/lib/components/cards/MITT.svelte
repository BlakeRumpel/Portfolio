<script>
	import Fa from "svelte-fa";
	import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
	import CSharp from "$lib/components/icons/CSharp.svelte";
	import LanguageIcon from "$lib/components/LanguageIcon.svelte";
</script>

<div class="flex flex-col space-y-4 md:space-y-8">
	<div class="flex flex-wrap justify-between gap-4">
		<div class="flex gap-8">
			<img src="/img/mitt.png" alt="tickettote logo" width="160" />
			<div class="flex flex-col justify-center">
				<h2>MITT</h2>
				<a href="https://https://mitt.ca/" target="_blank" rel="noreferrer">mitt.ca</a>
			</div>
		</div>
		<div class="flex md:flex-col gap-4">
			<span class="badge badge-filled-primary">Education</span>
			<div class="flex justify-end items-center gap-2">
				<LanguageIcon name="JavaScript" icon={faJs} />
				<LanguageIcon name="React" icon={faReact} />
				<LanguageIcon name="C#">
					<CSharp size="21" />
				</LanguageIcon>
			</div>
		</div>
	</div>

	<hr />

	<div class="max-h-[296px] md:max-h-[376px] space-y-4 overflow-y-auto">
		<div class="space-y-2">
			<h3>What is MITT?</h3>
			<p>
				MITT is the trade school I went to in Winnipeg. I graduated from the Software Developer
				program.
			</p>
		</div>
	</div>
</div>
