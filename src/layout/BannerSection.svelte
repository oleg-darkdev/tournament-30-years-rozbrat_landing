<script>
	export let text = '',
							imgUrl = '';

</script>

<section class='banner' style="background-image: url({imgUrl});">
	<h1 style="font: 70px 'grafitty'; margin: 100px 0;">{text}</h1>
</section>


<style>

	.banner {
		height: 560px; width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
background-position: 350px -10px;
		margin-top: -1px;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: end;
	}
</style>
