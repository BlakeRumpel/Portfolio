<script lang="ts">
	import { replaceState } from "$app/navigation";
	import { onMount } from "svelte";

	const links = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" }
	];

	let current = $state(links[0].href);

	function onClick(event: MouseEvent) {
		event.preventDefault();

		const target = event.currentTarget as HTMLAnchorElement;
		const href = target.getAttribute("href") as string;
		const element = document.querySelector(href);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	onMount(() => {
		// handle initial load if url contains hash
		if (location.hash) {
			const element = document.querySelector(location.hash);

			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				current = location.hash;
			}
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute("id");
						current = "#" + id;
						replaceState("#" + id, {});
					}
				});
			},
			{ threshold: 0.5 }
		);

		document.querySelectorAll("section").forEach((s) => observer.observe(s));

		return () => observer.disconnect();
	});
</script>

<div class="fixed top-0 hidden md:flex flex-col h-full w-60 justify-center p-8">
	{#each links as link}
		<a
			href={link.href}
			class="flex items-center px-4 py-1 !text-surface-50 no-underline hover:bg-surface-50/10 rounded-token"
			class:font-bold={current === link.href}
			onclick={onClick}
		>
			{link.name}
		</a>
	{/each}
</div>
