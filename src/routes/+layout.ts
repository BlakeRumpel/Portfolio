import type { LayoutLoad } from "./$types";

export const load = (({ url }) => {
	return {
		url: url.href
	};
}) satisfies LayoutLoad;
