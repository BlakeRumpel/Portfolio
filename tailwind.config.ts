import { join } from "path";
import { type CustomThemeConfig, getThemeProperties } from "@skeletonlabs/tw-plugin";
import type { Config } from "tailwindcss";

const theme: CustomThemeConfig = {
	name: "custom",
	properties: {
		...getThemeProperties("gold-nouveau"),

		"--theme-font-family-base": "Quicksand, sans-serif",

		"--color-surface-50": "221 221 221", // #dddddd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "198 198 198", // #c6c6c6
		"--color-surface-300": "164 164 164", // #a4a4a4
		"--color-surface-400": "96 96 96", // #606060
		"--color-surface-500": "28 28 28", // #1c1c1c
		"--color-surface-600": "25 25 25", // #191919
		"--color-surface-700": "21 21 21", // #151515
		"--color-surface-800": "17 17 17", // #111111
		"--color-surface-900": "10 10 10" // #0a0a0a
	}
};

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Quicksand", "sans-serif"]
			}
		}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
} satisfies Config;
