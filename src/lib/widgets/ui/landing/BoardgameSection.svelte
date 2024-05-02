<script>
	import { FactSheet, Carousel, Price } from '$lib/entities/';

	export let boardgame;
</script>

<!--
 -->
<section
	id={boardgame.anchor}
	style="background-position: {boardgame.align == 'start' ? 'right' : 'left'};"
	class="{boardgame.bgImage} work-wrap grid  grid-cols-1 bg-black "
>
	<div
		data-aos="fade-down"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true"
		style=""
		class="w-full flex  {boardgame.align == 'start'
			? 'justify-self-start '
			: 'justify-self-end ' }  glass  lg:w-6/12"
	>
  <!-- rounded-bl-[30px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30px]-->
		<!-- <div style="min-width: 320px;" class="flex h-screen flex-col items-center pt-8 pb-8 pr-2 pl-2 ">
			<h3 class=" text-neutral-100 m-8 text-left text-5xl  font-bold md:text-6xl lg:text-6xl">
				{boardgame.title}
			</h3>
			<p class="text-neutral-300 mb-2 w-11/12 text-start font-normal leading-tight md:w-8/12 lg:w-8/12">
				{boardgame.description}
			</p>
			<FactSheet factsAboutBoardgame={boardgame.factsAboutBoardgame} />
		</div> -->

		<div
			style="min-width: 320px;"
			class="flex  min-h-screen w-full flex-col  items-center pt-6  pr-2  pl-2  "
		>
			<div class="h-full p-10">
				<div class="mb-4 flex flex-row space-x-2">
					{#each boardgame.keywords as keyword}
						<span style="color: {boardgame.brandColor};" class="badge-outline badge  badge-lg"
							>{keyword}</span
						>
					{/each}
				</div>

				<a class="" href={boardgame.links.site} target="_blank"
					><h5 class="mb-2 text-4xl font-semibold tracking-tight text-white">
						{boardgame.title}
					</h5></a
				>
				<div class="mb-4 max-w-xl">
					{#each boardgame.description as description}
						<p class="m-2 text-start font-normal leading-tight text-neutral-300 ">
							{description}
						</p>
					{/each}
				</div>

				<a id="#{boardgame.anchor}" />
				<!-- <FactSheet factsAboutBoardgame={boardgame.factsAboutBoardgame} /> -->
				<Carousel autoplay="2000" images={boardgame.images} />

				<Price {boardgame} />
			</div>
		</div>
	</div>
</section>

<style>
  .glass {
		background: rgba(12, 10, 9, 0.6);
		overflow: hidden;
    border: none;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.work-wrap {
		height: auto;
		background-repeat: no-repeat;
		background-size: contain;
    			min-height: 100vh;

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
</style>
