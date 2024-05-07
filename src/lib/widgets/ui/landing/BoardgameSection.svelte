<script>
	import { FactSheet, Carousel, Price } from '$lib/entities/';

	export let boardgame;
</script>

<!--
 -->
<section
	id={boardgame.anchor}
	style="background-position: {boardgame.align == 'start' ? 'right' : 'left'};"
	class="{boardgame.bgImage} work-wrap grid grid-cols-1 bg-black"
>
	<div
		data-aos="fade-down"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="false"
		data-aos-mirror="true"
		style=""
		class="flex w-full {boardgame.align == 'start'
			? 'justify-self-start '
			: 'justify-self-end '}  glass lg:w-6/12"
	>
		<div class="coffee-card w-full " >
			<!-- <div class="mb-4 flex flex-row space-x-2">
				{#each boardgame.keywords as keyword}
					<span style="color: {boardgame.brandColor};" class="badge badge-outline badge-lg"
						>{keyword}</span
					>
				{/each}
			</div> -->

			<a class="name" style='border-color: {boardgame.brandColor};' href={boardgame.links.site} target="_blank"
				><h5 class=" ">
					{boardgame.title}
				</h5></a
			>
			<div class="info " style='border-color: {boardgame.brandColor}; color: {boardgame.brandColor};'> 				{#each boardgame.keywords as keyword}
 <span> {keyword} / </span>
 
 {/each}      </div>
 				<a id="#{boardgame.anchor}" />

			<div class="location" style='border-color: {boardgame.brandColor};'>
        {#each boardgame.description as description}
						<p class="m-2 text-start font-normal leading-tight text-neutral-300 ">
							{description}
						</p>
					{/each}
      </div>
			<div class="type">
				   				<!-- <Price {boardgame} /> -->

			</div>

      
			<div class="date" style='border-color: {boardgame.brandColor}; color: {boardgame.brandColor};'><span class="side-title" style='border-color: {boardgame.brandColor}; color: {boardgame.brandColor};'>Roast Date</span>$84.00</div>
			<div class="weight" style='border-color: {boardgame.brandColor};'><span class="side-title" style='border-color: {boardgame.brandColor}; color: {boardgame.brandColor};'> <a class='' href={boardgame.links.site} target="_blank">
				BGG: {boardgame.bggRaiting} </a></span> </div>
			<div class="footnote" style='border-color: {boardgame.brandColor}; color: {boardgame.brandColor};'>
        <a class='' href={boardgame.links.download} target="_blank">
				Free Download for Print and Play </a>
        </div>
			<div class="site" style='border-color: {boardgame.brandColor}; color: {boardgame.brandColor};'>{boardgame.links.site}</div>
			<div class="pattern h-full w-full">
				<Carousel autoplay="2000" images={boardgame.images} />

      </div>
			<div class="square one" style="background-color: {boardgame.brandColor};"/>
			<div class="square two" style="background-color: {boardgame.brandColor};"/>
			<div class="strip" style='border-color: {boardgame.brandColor};'/>
		</div>
	</div>
</section>

<style>
	strong {
		font-weight: 500;
	}

	.coffee-card {
		/* font-weight: 300;
	font-size: 14px; */
		flex: 1;
		/* max-width: 430px; */
		/* w */
		min-width: 380px;
		display: grid;
		grid-template-columns: 1.2fr 1fr min-content;
		grid-auto-rows: min-content;
		/* background: #fdfdfd; */
		margin: 2rem;
		line-height: 1.5;
		position: relative;
		box-shadow: 0 4px 0 -2px #ddd, 1px 1px 0 0 #f7f7f7;
	}
	.coffee-card:before,
	.coffee-card:after {
		z-index: -1;
		position: absolute;
		content: '';
		bottom: 35px;
		left: 10px;
		width: 50%;
		top: 80%;
		max-width: 300px;
		/* background: #777; */
		/* box-shadow: 0 35px 20px #777; */
		/* transform: rotate(-4deg); */
	}
	.coffee-card::after {
		transform: rotate(4deg);
		right: 10px;
		left: auto;
	}
	.coffee-card > * {
		padding: 0.6rem 1.2rem;
	}
	.coffee-card h5 {
		font-size: clamp(2.2rem, 4.2vw, 3rem);
		line-height: 1;
		font-weight: 500;
	}
	.coffee-card .name {
		grid-column: 1/-1;
		grid-row: 2;
		padding-bottom: 1.2rem;
	}
	.coffee-card .info,
	.coffee-card .location,
	.coffee-card .type,
	.coffee-card .pattern {
		grid-column: 1 / span 2;
	}
	.coffee-card .date,
	.coffee-card .weight {
		transform: rotate(180deg);
		writing-mode: vertical-lr;
		padding: 1.2rem 0;
	}
	.coffee-card .date,
	.coffee-card .weight,
	.coffee-card .footnote,
	.coffee-card .site {
		font-size: 85%;
	}
	.coffee-card .date {
		grid-row: 3 / span 4;
		grid-column: 3/4;
	}
	.coffee-card .footnote {
		grid-column: 1/2;
	}
	.coffee-card .weight {
		grid-row: 7 / span 1;
		grid-column: 3/4;
		min-height: 10rem;
	}
	.coffee-card .pattern {
		grid-row: 6 / span 2;
		min-height: 16.5rem;
		background-repeat: repeat;
	}

	.side-title {
		display: inline-block;
		margin-bottom: 0.75rem;
		border-bottom: 0.5px dashed;
		padding: 0 0.8rem 0.75rem;
	}

	.name,
	.info,
	.location,
	.weight {
		border-bottom: 0.5px dashed;
	}

	.info,
	.location,
	.type,
	.footnote {
		border-right: 0.5px dashed;
	}

	.checkbox {
		display: inline-block;
		pointer-events: none;
	}
	.checkbox:nth-child(1) {
		margin-right: 30px;
	}
	.checkbox input {
		height: 0;
		width: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}
	.checkbox input:checked + label:after {
		content: '';
		position: absolute;
		width: 22px;
		height: 5px;
		background: black;
		left: 3px;
		transform: rotate(-45deg);
		top: 10px;
		border-radius: 5px;
	}
	.checkbox label {
		padding: 5px 20px 5px 30px;
		position: relative;
	}
	.checkbox label:before {
		content: '';
		position: absolute;
		border: 1px dashed;
		width: 18px;
		height: 18px;
		left: 0;
	}

	.strip {
		grid-column: 1/3;
		grid-row: 1;
	}

	.square {
		background: white;
    
	}
	.square.one {
		grid-row: 1;
		grid-column: 3/4;
		height: 2.5rem;
	}
	/* .pattern {
  background-image: repeating-radial-gradient(circle at 60%, #eee, #eee 3px, transparent 4px, #eee 5px), repeating-radial-gradient(circle at 45%, #999, #999 3px, transparent 4px, #999 5px);
  background-size: 200%;
}

.pattern-one {
  background-image: radial-gradient(#999 15%, transparent 16%), radial-gradient(#bbbbbb 15%, transparent 16%), linear-gradient(45deg, transparent 48%, #666 48%, #666 52%, transparent 52%), linear-gradient(-45deg, #fff 48%, #999 48%, #999 52%, #fff 52%);
  background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
  background-position: 0 0, 10px 10px, 0 0, 0 0;
}

.pattern-two {
  background-image: repeating-radial-gradient(ellipse at right, #888 10%, #888 1px, transparent 1px, transparent 3px, #888 3px, #888 4px, transparent 4px, transparent 5px, #888 5px, #888 6px, transparent 6px, #888 6px, #888 7px, transparent 7px, transparent 8px, #888 8px, #888 9px, transparent 9px, transparent 10px);
  background-size: 20px 40px;
} */

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
