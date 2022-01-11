<script>
import Line from '../components/footer/Line.svelte'
import PolicyMenu from '../components/footer/PolicyMenu.svelte'
import SvgLine from "./BlackSvgLine.svelte";
import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';

let merchPolicy,
refundPolicy,
privacyPolicy,
shippingPolicy,
termsOfService;
</script>


<footer style="background-color: #000;">
   <PolicyMenu bind:merchPolicy  bind:refundPolicy bind:shippingPolicy bind:privacyPolicy bind:termsOfService/>

<!-- <SvgLine /> -->
<!-- <Paper
			color="primary"
			style=" max-width: 760px;  margin: 25px 30%; background-color: #fff;"
			class="paper-demo"
		>
  
			<Content>
<div  style="display: flex; flex-direction: row; flex-wrap: wrap;
">

 <ul >

      <li>
        <a href=".">FAQs</a>
      </li>
			      <li>
        <a href=".">Resources</a>
      </li>
			      <li>
        <a href=".">Contact</a>
      </li>
      
			      <li>
        <a href=".">Store Locator</a>
      </li>
			      <li>
        <a href=".">Careers</a>
      </li>

    </ul>
</div>
		</Content>
      
	</Paper> -->
		<!-- <div class="shop">
<h3 > SHOP</h3>
<div class="logos-column">
	<img src="" style="height: 30px; width: 90px;"  alt="">
	   <ImageList style="width: 600px;" class="my-image-list-standard">
      {#each Array(4) as _unused, i}
        <Item style="margin-right: 10px;">
          <ImageAspectContainer>
            <Image style="height: 40px;"
              src="https://place-hold.it/190x190&text=logo"
              alt="Image {i + 1}"
            />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
</div>
</div> -->

	<Line bind:merchPolicy  bind:refundPolicy bind:shippingPolicy bind:privacyPolicy bind:termsOfService/>
</footer>

<style>
	footer {
			display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
    height: 350px;
	}
ul {
    margin: 0;
    padding: 0;
  }

ul::after {
    content: "";
    display: block;
    clear: both;
  }
  li {
list-style: none;
margin: 0;
  }
  a, .shop {
    text-decoration: none;
    padding: 0.1em 0.5em;
    display: block;
    color: #000;
    font: 36px 'grafitty';
  }

/* .shop {
	display: flex;
	flex-direction: column;

} */
</style>
