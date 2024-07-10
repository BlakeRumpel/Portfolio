import { writable } from "svelte/store";

export const modDownloads = writable<number | undefined>(undefined);
