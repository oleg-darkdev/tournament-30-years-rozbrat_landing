<script>
	import { antISystems, social, historical } from '$lib/shared';
	import { BoardgameSection, Hero, Footer, SupportUs } from '$lib/widgets';
</script>

<Hero />

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
