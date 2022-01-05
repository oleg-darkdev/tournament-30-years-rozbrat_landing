<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

</script>

<Header />
  <slot />
<Footer />

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }


:global(.section-body) {
  display: flex;
justify-content: center;
/* padding: 125px 0; */
padding: 50px 0;

}

:global(.section-svg-line) {
  display: block;
width: 100%;
/* margin-bottom: -15px; */
/* overflow: hidden;
box-sizing: border-box; */
}

:global(.games-promo-wrap) {
  display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
}

* :global(.hidden) {
	display: none;
}
</style>