<script lang="ts">
	export let size: "large" | "normal" = "normal";
	export let style: string = "";
</script>

<div
	class="flex border-4 border-accent-100-800-token rounded-full justify-center items-center overflow-hidden
	{size === 'large' ? 'w-[400px] h-[400px]' : 'w-[100px] h-[100px]'}"
	{style}
>
	<slot />
</div>
