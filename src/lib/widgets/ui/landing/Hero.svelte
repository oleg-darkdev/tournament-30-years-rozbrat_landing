<script>
</script>


<!-- <section class="banner-bg md:hero lg:hero xl:hero" > -->


<!-- </section> -->


<header class="flex justify-center">
	<nav
		class=" fixed  z-10  flex w-full max-w-2xl   bg-gray-900 px-2 py-2.5  text-gray-700  sm:px-4"
	>
		<div class=" dropdown md:hidden lg:hidden xl:hidden">
			<label tabindex="0" class="btn-ghost btn-circle btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="#3ABFF8"
					viewBox="0 0 24 24"
					stroke="#3ABFF8"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="dropdown-content menu rounded-box menu-compact mt-3 w-64 bg-gray-900 p-2 shadow"
			>
				<!-- <li class="text-info"><a href="#about">O nas</a></li>
				<li class="text-info"><a href="#projects">Projekty</a></li>
				<li class="text-info"><a href="#faq">F.A.Q</a></li>
				<li class="text-info"><a href="#contact">Kontakt</a></li> -->
			</ul>
		</div>
		<img
			src=""
			alt=""
			class="h-16 md:hidden lg:hidden xl:hidden"
			srcset=""
		/>

		<div class="container mx-auto flex flex-wrap justify-center">
			<div class="order-1 w-full md:block md:w-auto" hidden="true">
				<ul
					class="order-1 mt-4 flex flex-col p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
				>
					<!-- <li>
						<a
							href="#offer"
							class="block  py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>Oferta BTB / BTC</a
						>
					</li>
					<li>
						<a
							href="#about"
							class="block  py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>O Fundacji</a
						>
					</li>
					<li>
						<a
							href="#projects"
							class="block  py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>Projekty</a
						>
					</li>
					<li>
						<a
							href="#faq"
							class="block  py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>FAQ</a
						>
					</li>
					<li>
						<a
							href="#contact"
							class="block  py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>Kontakt</a
						>
					</li> -->
				</ul>
			</div>
		</div>
	</nav>
</header>


<section class="wrapper w-full ">
	<div class="news-item hero-item" />
	<div class="news-item standard-item" />
	<div class="news-item standard-item" />
	<!-- <div class="news-item standard-item" /> -->
</section>

<style>

	/* @media (max-width: 560px) {
		
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
			height: 40vh;
		}
	} */

	.wrapper {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
		font-size: 0;
    
	}

	.hero-item,
	.standard-item {
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.news-item {
		display: inline-block;
		min-height: 400px;
		width: 50%;
	}

	.hero-item {
		background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/divinity-ori-sin.jpg');
	}

	.standard-item:nth-child(2) {
		background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/re7-chris-large.jpg');
	}

	.standard-item:nth-child(3) {
		background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/bioshock-large.jpg');
	}

	.standard-item:nth-child(4) {
		background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/dishonored-large.jpg');
	}

	@supports (display: grid) {
		.news-item {
			width: auto;
			min-height: 0;
		}

		.hero-item {
			grid-column: 1 / span 2;
			grid-row: 1/50;
			-webkit-clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
			clip-path: polygon(0 0, 100% 0, 100% calc(100% - 75px), 0 100%);
		}

		.standard-item:nth-child(2) {
			grid-column: 1 / span 1;
			grid-row: 50/100;
			-webkit-clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
			clip-path: polygon(0 14%, 0 86%, 90% 81%, 100% 6%);
			margin-top: -73px;
		}

		.standard-item:nth-child(3) {
			grid-column: 2 / span 1;
			grid-row: 50/100;
			-webkit-clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
			clip-path: polygon(13% 6%, 4% 84%, 100% 100%, 100% 0%);
			margin-top: -73px;
			margin-left: -15%;
			margin-bottom: 18px;
		}

		.standard-item:nth-child(4) {
			grid-column: 1 / span 2;
			grid-row: 100/150;
			-webkit-clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
			clip-path: polygon(45% 0, 100% 15%, 100% 100%, 0 100%, 0 5%);
			margin-top: -107px;
		}
	}
</style>
