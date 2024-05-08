<script>

 import CaretRight from "carbon-icons-svelte/lib/CaretRight.svelte";
 import CaretLeft from "carbon-icons-svelte/lib/CaretLeft.svelte";

	import { antISystems, social, historical } from '$lib/shared';
	import { BoardgameSection } from '$lib/widgets';

	const boardgames = [].concat(antISystems, social, historical);

  $: now = 0;

	$: selectedBoardgame = boardgames[0];
  // $: filteredBoardgames = boardgames.slice(now, now + step);

  let step = 4;

	let showMenu = false;


</script>

<header class="bg-neitral-200 h-screen w-full">
	<button class="absolute left-[90%] top-10" on:click={() => (showMenu = !showMenu)}>
		<div class=" h-32 w-32 flex-col justify-center">
			<div class="menu-btn h-full w-full" />
			<h2 class="text-center text-2xl font-black">MENU</h2>
		</div>
	</button>

	{#if showMenu}
		<section class="banner banner-bg">
			<div class="relative left-20 top-[50vh]">
				<h1 class="max-w-xl text-5xl font-black">
					44Games <br />- only quality educational boardgame
					<!-- <a href="https://www.uber.design/case-studies/rebrand-2018" target="_blank">Uber Rebrand Site</a> -->
				</h1>
			</div>
		</section>
	{:else}
		<div class=" grid grid-cols-2">
			<article class='wrap py-6 px-2  {selectedBoardgame.bgImage}'>
				<section class='glass  px-10'>
					<BoardgameSection bind:boardgame={selectedBoardgame} />
				</section>
			</article>
			<nav class="">
				<div class="menu h-full max-h-screen py-10 pr-40">
					<ul class="h-full overflow-y-scroll">
						{#each boardgames.slice(now, now + step) as boardgame}
							<li class="h-34 my-2 max-w-lg text-start text-6xl font-black">
								<button on:click={() => selectedBoardgame = boardgame} class=""
									><h2 class="text-start text-6xl font-black">
										{boardgame.title}
									</h2></button
								>
							</li>
						{/each}


            <div class="flex justify-center">
           {#if now > 0}

<button on:click={() => now = now - step} class="mr-4 btn btn-circle btn-outline">
  <CaretLeft size={32}/>
</button> 
           {/if}

<button on:click={() => now = now + step} class="btn btn-circle btn-outline">
  <CaretRight size={32}/>
</button>
  
				</div>
					</ul>


				</div>
			</nav>
	
		</div>
	{/if}
</header>



<!-- <script>
	import { antISystems, social, historical } from '$lib/shared';
	import { BoardgameSection, Hero, Footer, AntiSystems, SupportUs, OurClients } from '$lib/widgets';
</script>


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

<SupportUs />

<div class="h-screen w-full">

</div>
{#each historical as boardgame}
	<BoardgameSection {boardgame} />
{/each}

<Footer />
 -->



<style>
   
  /*  */
  .glass {
		background: rgba(12, 10, 9, 0.6);
		overflow: hidden;
		border: none;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

  .wrap {
		height: auto;
		background-repeat: no-repeat;
		background-size: contain;
		/* min-height: 100vh; */

		background-attachment: fixed;
	}

	@media (min-width: 1024px) {
		/* .work-wrap {
			min-height: 100vh;
		} */
		.a-bg {
			background-image: url(/images/games/a-bg.svg);
		}

		.eco-bg {
			background-image: url(/images/games/eco-bg.svg);
		}

		.ror-bg {
			background-image: url(/images/games/ror-bg.png);
		}

		.fnb-bg {
			background-image: url(/images/games/fnb-bg.svg);
		}

		.graffity-bg {
			background-image: url(/images/games/graffity-bg.svg);
		}

		.locators-bg {
			background-image: url(/images/games/fnb-bg.svg);
		}

		.squat-bg {
			background-image: url(/images/games/squat-bg.svg);
		}

		.mks-bg {
			background-image: url(/images/games/mks-bg.png);
		}

		.lgbt-bg {
			background-image: url(/images/games/lgbt-bg.svg);
		}
		.cov-bg {
			background-image: url(/images/games/cov-bg.svg);
		}

		.gulag-bg {
			background-image: url(/images/games/gulag-bg.svg);
		}

		.yakudza-bg {
			background-image: url(/images/games/yakudza-bg.svg);
		}

		.by_pl-bg {
			background-image: url(/images/games/by-pl-bg.svg);
		}
		/*
    .squat-bg {
			background-image: url(/images/games/squat-bg.svg);
		} */
	}
	@media (min-device-width: 320px) and (max-device-width: 1024px) {
		.work-wrap {
			/* min-height: 60vh;
			height: auto; */
		}
		.a-bg {
			background-color: #000;
		}
	}

	.menu-btn {
		background-image: url(/images/menu.svg);

		background-repeat: no-repeat;
		background-size: contain;
	}
	/* .content {
  position: relative;
  flex: 1;
  padding: 80px 40px 40px;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/2018-09-28%2009_21_48-https___d2kbkpwf98wmwo.cloudfront.net_videos_hero-lg.mp4.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.content p {
  color: #fff;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.content p a {
  color: #fff;
  box-shadow: 0 1px 0 0 #EF3340;
} */
	@media (max-width: 560px) {
		img {
			display: none;
		}
		.banner-bg {
			background-image: url(/images/banner_sm.svg);
			background-repeat: no-repeat;
			background-size: cover;
			height: 370px;
			background-position: center;
		}
	}
	@media (min-width: 560px) {
		.banner-bg {
			background-image: url(/images/banner.svg);
			height: 100%;
			background-repeat: no-repeat;
			background-size: 92%;
		}
	}
</style>
