<script>
	import { antISystems, social, historical } from '$lib/shared';
	import { BoardgameSection, Hero, Footer, AntiSystems, SupportUs, OurClients } from '$lib/widgets';
</script>

			<!--     -->
<a name='about'> </a>
<a name='projects'> </a>
<a name='faq'> </a>
<a name='contact'> </a>

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
