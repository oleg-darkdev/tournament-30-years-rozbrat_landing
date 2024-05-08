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

  
  <!-- <div class="image">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample85.jpg" alt="sample85"/><i class="ion-ios-star-outline"></i>
  </div> -->
  
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
<figure class="snip1249 ">

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
        <figcaption style='background-color: {boardgame.brandColor}; --bg-color: {boardgame.brandColor};'>
    <div class="price">
      <s>$99.00</s>$84.00
    </div>
   				<Price {boardgame} />

  </figcaption>

				<a id="#{boardgame.anchor}" />
				<!-- <FactSheet factsAboutBoardgame={boardgame.factsAboutBoardgame} /> -->
				<Carousel autoplay="2000" images={boardgame.images} />
<div class="mt-2.5 mb-6 w-full">
		<!--  justify-between -->
		<div class=" flex w-full flex-row   text-white">
			<a href='/download' class="btn-link btn text-neutral-100">See more</a>

		</div>
	</div>
			</div>
		</div>

    
</figure>
	</div>
</section>

<style>

  /* Icon set - http://ionicons.com */
/* @import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500); */
/* figure.snip1249 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  background: #1a1a1a;
  color: #ffffff;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
} */
figure.snip1249 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
/* figure.snip1249 .image {
  position: relative;
}
figure.snip1249 img {
  max-width: 100%;
  vertical-align: top;
} */
/* figure.snip1249 i {
  position: absolute;
  top: 7px;
  left: 12px;
  font-size: 32px;
  opacity: 0;
  z-index: 2;
  -webkit-transition-delay: 0;
  transition-delay: 0;
}
figure.snip1249 h3 {
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
} */
figure.snip1249:before,
figure.snip1249:after {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
/* figure.snip1249:before {
  background-color: #20638f;
  -webkit-transform: skew(-45deg) translateX(-150%);
  transform: skew(-45deg) translateX(-150%);
  border-right: 1px solid #20638f;
} */
/* figure.snip1249:after {
  background-color: #962d22;
  -webkit-transform: skew(-45deg) translateX(-175%);
  transform: skew(-45deg) translateX(-175%);
  border-right: 1px solid #962d22;
} */
figure.snip1249 figcaption {
  padding: 25px 80px 25px 25px;
  /* background-color: #ffffff; */
  color: #000000;
  position: relative;
  font-size: 0.9em;
}
/* figure.snip1249 figcaption p {
  margin-bottom: 15px;
} */
figure.snip1249 figcaption:before {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 0;
  right: 0;
  content: '';
  z-index: 1;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 100%);
  background-color: var(--bg-color);
  -webkit-transform: skew(-45deg) translateX(50%);
  transform: skew(-45deg) translateX(50%);
  /* border-right: 1px solid #20638f; */
}
/* figure.snip1249 .add-to-cart {
  display: inline-block;
  width: auto;
  border: 2px solid #20638f;
  padding: 0.4em 0.6em;
  color: #20638f;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9em;
  text-transform: uppercase;
}
figure.snip1249 .add-to-cart:hover {
  background-color: #20638f;
  color: #ffffff;
} */
figure.snip1249 .price {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #ffffff;
  z-index: 2;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 800;
  font-size: 1.2em;
  text-align: center;
}
 figure.snip1249 .price s {
  display: block;
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.8;
}

/* figure.snip1249:hover i,
figure.snip1249.hover i {
  opacity: 0.7;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
} */

/*

figure.snip1249:hover h3,
figure.snip1249.hover h3 {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
} */
/* figure.snip1249:hover:before,
figure.snip1249.hover:before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transform: skew(-45deg) translateX(-50%);
  transform: skew(-45deg) translateX(-50%);
}
figure.snip1249:hover:after,
figure.snip1249.hover:after {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transform: skew(-45deg) translateX(-75%);
  transform: skew(-45deg) translateX(-75%);
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
