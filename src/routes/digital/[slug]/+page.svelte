<script lang="ts">
	import data, { type TechStats } from '../data';
	import type { PageProps } from './$types';
	const { params }: PageProps = $props();
	const tech = $derived(data[params.slug]);
</script>

{#snippet techPane(techStats: TechStats[])}
	<div class="flex flex-col gap-3">
		{#each techStats as { name, skill, love, shortDesc, longDesc }}
			{@const loveTxt = love >= 0 ? `Love: ${love}%` : `Dislike: ${-love}%`}
			<div>
				<div class="mx-2 inline-block w-20 overflow-clip" title="Skill: {skill}%{'\n' + loveTxt}">
					<div class="h-1.5 w-full bg-emerald-800">
						<div class="h-full bg-emerald-300" style="width: {skill}%"></div>
					</div>
					<div class="mt-1 flex h-1.5 w-full">
						<div class="h-full w-[50%] bg-sky-950">
							{#if love < 0}
								<div class="float-right h-full bg-sky-500" style="width: {-love}%"></div>
							{/if}
						</div>
						<div class="h-full w-[50%] bg-red-950">
							{#if love > 0}
								<div class="h-full bg-red-500" style="width: {love}%"></div>
							{/if}
						</div>
					</div>
				</div>
				<span class="text-2xl">{name}</span>
				<span class="text-white">
					{#if shortDesc.length > 0}
						- {shortDesc}
					{/if}
					{#if longDesc.length > 0}
						<details class="ml-8 whitespace-pre-line">
							<summary class="text-mono cursor-default text-[#3f6] select-none">view more</summary>
							<div class="max-w-100">{longDesc}</div>
						</details>
					{/if}
				</span>
			</div>
		{/each}
	</div>
{/snippet}

{@render techPane(tech)}
