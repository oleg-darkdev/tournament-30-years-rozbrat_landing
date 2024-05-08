<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<main class="bg-black overflow-hidden">
	<slot />
</main>

<style>
  main {
      font-family: "Roboto Mono", sans-serif;

  }
	:global(.font-roadsBlock) {
		font-family: 'RoadsBlock';
		line-height: 1.2;
	}

	@font-face {
		font-family: 'RoadsBlock';
		font-style: normal;

		src: local(''), url('/fonts/RoadsBlock.otf') format('opentype');
	}
</style>


