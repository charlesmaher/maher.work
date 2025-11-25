<script lang="ts">
	import data from './data';
	const { children, params } = $props();

	const title = $derived(params.slug ? params.slug : 'Digital');
</script>

<svelte:head>
	<title>Charles Maher | {title}</title>
</svelte:head>

<div class="min-h-screen bg-black text-lg text-[#3f6]">
	<header class="sticky top-0 border-b-1 border-[#3f6] bg-black/70 backdrop-blur-md">
		<div class="p-4 font-mono text-2xl lowercase">
			<a href="/" class="pr-5 text-blue-300 underline">Charles Maher</a>/<a
				href="/digital"
				class="text-blue-300 underline">Digital</a
			>
		</div>
		<div class="flex gap-5 border-t-1 p-2 pt-1">
			{#each Object.keys(data) as url}
				<span>/<a href="/digital/{url}" class="text-blue-300 underline">{url}</a></span>
			{/each}
		</div>
	</header>
	<main>
		{@render children?.()}
	</main>
</div>
