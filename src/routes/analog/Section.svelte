<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		title,
		image_names,
	}: { children?: Snippet; title: string; image_names: string[] } = $props();
</script>

<div class="shrink overflow-clip rounded-xl border-2 shadow-xl shadow-black/40">
	<div class="flex">
		{#each image_names as name}
			<div
				class="inline-block aspect-4/3 min-h-30 max-w-120 grow bg-cover bg-center"
				style="background-image: url(/img/prints/{name}.jpg)"
			></div>
		{/each}
	</div>
	<div class="flex flex-col items-center p-3">
		<h1 class="text-center text-3xl font-bold">{title}</h1>
		<div class="max-w-110">
			{@render children?.()}
		</div>
	</div>
</div>
