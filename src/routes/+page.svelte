<script>
	import { antISystems, social, historical } from '$lib/shared';
	import { BoardgameSection, Hero, Footer, AntiSystems, SupportUs, OurClients } from '$lib/widgets';
</script>

<Hero />

<OurClients />

<AntiSystems />


{#each antISystems as boardgame}
	<BoardgameSection {boardgame} />
{/each}

<div class="h-screen w-full">

</div>
{#each social as boardgame}
	<BoardgameSection {boardgame} />
{/each}
<!-- <SupportUs /> -->

<div class="h-screen w-full">

</div>
{#each historical as boardgame}
	<BoardgameSection {boardgame} />
{/each}

<Footer />
