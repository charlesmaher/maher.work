<svelte:head>
	<title>Charles Maher</title>
</svelte:head>

<main
	class="flex h-screen min-h-100 flex-col flex-wrap text-center font-mono text-4xl text-white lowercase md:flex-row"
>
	<div
		class="flex flex-1 items-center justify-center bg-[url(/img/digital.jpg)] bg-cover bg-center text-[#00ff00]"
	>
		<a href="/digital">
			<div
				class="rounded-xl border-4 border-[#00ff00] bg-black/50 px-20 py-10 shadow-lg shadow-black backdrop-blur-xs transition hover:bg-black/20 hover:backdrop-blur-lg"
			>
				Digital
			</div>
		</a>
	</div>
	<div
		class="flex flex-1 items-center justify-center bg-[url(/img/analog.jpg)] bg-cover bg-center font-sans"
	>
		<a href="/analog">
			<div
				class="rounded-xl border-4 bg-black/50 px-20 py-10 shadow-lg shadow-black backdrop-blur-xs transition hover:bg-black/20 hover:backdrop-blur-lg"
			>
				Analog
			</div>
		</a>
	</div>
	<div class="absolute top-10 flex w-full justify-center text-5xl">
		<span class="text-right md:flex-1">Charles</span>&nbsp;<span
			class="text-left md:flex-1 md:text-purple-950">Maher</span
		>
	</div>
</main>
