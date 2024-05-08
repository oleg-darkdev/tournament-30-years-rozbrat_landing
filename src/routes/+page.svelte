<script>
	import { antISystems, social, historical, menu, emptyBoardgame } from '$lib/shared';
	import { BoardgameSection, Aside, AnimaterdLogo } from '$lib/widgets';
  import { Menu } from '$lib/entities'
	const boardgames = [].concat(antISystems, social, historical);

  $: selectedBoardgame = emptyBoardgame;
  $: selectedMenu = menu[0];

	let showMenu = false;
</script>


<svelte:head>
  <title>44Games - shop 🎲</title>
</svelte:head>

<header class="bg-neitral-200 h-screen w-full">
  <Aside bind:selectedBoardgame bind:showMenu bind:selectedMenu />
		{#if !showMenu}
      <AnimaterdLogo />
	{:else}
		<div class=" grid grid-cols-2  ">
			<article class='wrap py-6  px-2  {selectedBoardgame.id ? selectedBoardgame.bgImage : 'menu '}'>
				<section class='pl-24 pr-4'>
          <!-- class='hidden' -->
          {#if selectedMenu.id == 1}
<div class="card w-full h-[94vh]" data-aos="flip-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true">

    <div class="flex pl-16 pt-10 pr-4 flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1>About 44Games</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
<!-- <h2 class='relative left-20 top-10 text-4xl font-black'> About </h2>
<p class="text-md">
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
</p> -->
        </div>
					{:else if selectedMenu.id == 2}
          <div class="card overflow-x-hidden w-full h-[90vh]" data-aos="flip-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true">
            <BoardgameSection  bind:boardgame={selectedBoardgame} />

            </div>
					{:else if selectedMenu.id == 3}
<div class="card w-full h-[90vh]" data-aos="flip-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true">
<div class="flex pl-16 pt-10 pr-4 flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1>Offer BTB</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </div>
          {:else if selectedMenu.id == 4}
<div class="card w-full h-[90vh]" data-aos="flip-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true">
<div class="flex pl-16 pt-10 pr-4 flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1>Offer BTC</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        </div>

        {:else if selectedMenu.id == 5}
<div class="card w-full h-[90vh]" data-aos="flip-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true">
<div class="flex pl-16 pt-10 pr-4 flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1>CONTACT</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
            </div>
        </div>
        </div>

          {/if}
				</section>
			</article>
			<nav class="">
				<div class=" h-full max-h-screen py-10 pr-40">
          <Menu bind:selectedMenu bind:selectedBoardgame/>
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


  .card {
    background: rgba(12, 10, 9, 0.6);

		border: none;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
  }
.hidden {
  display: none;
}
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
		background-attachment: fixed;
	}

.menu {
  background-image: url(/images/menu.svg);
  height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
}
	@media (min-width: 1024px) {

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

		.a-bg {
			background-color: #000;
		}
	}

	@media (max-width: 560px) {

	}
	@media (min-width: 560px) {

	}
</style>
