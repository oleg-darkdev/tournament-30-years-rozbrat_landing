<header class=" h-screen w-full bg-black">
	<div class="text-wrap pt-24 text-center">
        <!-- <span class='text-6xl'>Project</span> -->

		<h1 class=" font-roadsBlock" style="">Antisystem <br /> boardgames</h1>
	</div>
</header>

<style>

	.text-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		padding: 4em;
		filter: contrast(20);
		background-color: black;
		overflow: hidden;
	}

	h1 {
		/* color: white; */
		font-family: 'RoadsBlock';
		font-size: 12rem;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1;
		filter: blur(0.5rem);
		animation: letterspacing 14s infinite alternate cubic-bezier(0.2, 0, 0, 1);
		display: block;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0);
	}

	@keyframes letterspacing {
		0% {
			letter-spacing: -0.9rem;
			filter: blur(0.5rem);
		}

		50% {
			filter: blur(0.5rem);
		}

		90% {
			filter: blur(0.6rem);
		}
		100% {
			letter-spacing: 0.7rem;
			filter: blur(1.1rem);
			/* overflow: hidden;
			opacity: 0;
			display: none;
			visibility: hidden; */
		}
	}
</style>
