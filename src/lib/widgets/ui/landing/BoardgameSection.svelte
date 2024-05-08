<script>
	import { FactSheet, Carousel, Price } from '$lib/entities/';

	export let boardgame;
</script>

  <div class=" px-6 py-6 overflow-x-hidden w-full">
		<div class="coffee-card overflow-x-hidden py-3  w-full">
			<a class="name" href={boardgame.links.site} target="_blank"
				><h2 class="font-black text-4xl">
					{boardgame.title}
				</h2></a
			>
			<div class="info"> 				{#each boardgame.keywords as keyword}

 <span style="color: {boardgame.brandColor};" class="mr-2"
						>#{keyword}</span
					>

 {/each}      </div>
 				<a id="#{boardgame.anchor}" />

			<div class="location">
        {#each boardgame.description as description}
						<p class="m-2 text-start font-normal leading-tight text-neutral-300 ">
							{description}
						</p>
					{/each}
      </div>
			<div class="type">
				   				<!-- <Price {boardgame} /> -->

			</div>


			<div class="date"><span class="side-title">Roast Date</span>$84.00</div>
			<div class="weight"><span class="side-title"> <a class='' href={boardgame.links.site} target="_blank">
				BGG: {boardgame.bggRaiting} </a></span> </div>
			<div class="footnote">
        <a class='' href={boardgame.links.download} target="_blank">
				Free Download for Print and Play </a>
        </div>
			<div class="site">{boardgame.links.site}</div>
			<div class="pattern ">
				<!-- <Carousel autoplay="2000" images={boardgame.images} /> -->

      </div>
			<div class="square one" style="background-color: {boardgame.brandColor};"/>
			<div class="square two" style="background-color: {boardgame.brandColor};"/>
			<div class="strip" />
		</div>
</div>

<style>
	strong {
		font-weight: 500;
	}

	.coffee-card {

		flex: 1;

		min-width: 380px;
		display: grid;
		grid-template-columns: 1.2fr 1fr min-content;
		grid-auto-rows: min-content;
		/* margin: 2rem; */
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
		min-height: 13.5rem;
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


	.glass {
		background: rgba(12, 10, 9, 0.6);
		border: none;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}


</style>
