<script>
  import Button, { Group, GroupItem, Label, Icon } from '@smui/button';
	// import Policy from './Policy.svelte'
import Paper, { Title, Content } from '@smui/paper';
export let merchPolicy,
refundPolicy,
privacyPolicy,
shippingPolicy,
termsOfService;
</script>

<style>
	.line {
		max-width: 70%;
		height: 85px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		  /* background-color: #47babb; */
		  /* border: 2px solid #000; */
padding: 35px  15px 15px 15px;
margin: 35px 0;
	}
	/* .foo-navigation {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	} */
	/* .copyright {
				display: flex;
		flex-direction: row;
		width: 100%;
				justify-content: center;
		align-content: center;
		align-items: center;
		font: 26px 'grafitty';
		margin-bottom: -15px;
	} */
/*
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
    display: block;
    float: left;
  } */
  /* a {
    text-decoration: none;
    padding: 0.7em 0.5em;
    display: block;
    color: #fff;
font-size: 14px;
  } */
</style>

<div class="line">

<!-- <ul class="foo-navigation">
      <li>
        <a  href=".">Fan Art & Merch Policy </a>
      </li>
      <li>
        <a  href="shop">Refund Policy</a>
      </li>
      <li>
        <a  href="faq">Privacy Policy</a>
      </li>
      <li>
        <a  href="blog">Shipping Policy</a>
      </li>
      <li>
        <a  href="resources">Terms of Service</a>
      </li>
    </ul> -->
<!-- <div style="margin-bottom: 50px;">
</div> -->

<Paper color="primary" variant="outlined" style="border: 2px #47babb solid; color: #47babb;" class="mdc-theme--primary">
    <Title style="font: 26px 'grafitty';">

2021. DarkDev. All Rights Reserved.
<!-- <div class="copyright">
		<h3 style="margin-top: 27px;">2021.</h3>
	<img src="img/footer/logo_footer.png" style="" alt="DarkDev logo">
	<h3 style="margin-top: 27px;">.All Rights Reserved.</h3>
</div> -->
</Title>
    <Content style="display: flex; flex-wrap: wrap; 		justify-content: center;
		align-content: center;
		align-items: center;">

  <Button variant="outlined" color="primary" style="height: auto; margin: 0 5px 5px 0; border: 2px #47babb solid; color: #47babb;" on:click={() => merchPolicy.setOpen(true)}  ><Label>Fan Art & Merch Policy</Label></Button>
	<Button variant="outlined" color="primary" style="height: auto; margin: 0 5px 5px 0; border: 2px #47babb solid; color: #47babb;" on:click={() =>  refundPolicy.setOpen(true)} ><Label>Refund Policy</Label></Button>
	<Button variant="outlined" color="primary" style="height: auto; margin: 0 5px 5px 0; border: 2px #47babb solid; color: #47babb;"  on:click={() => privacyPolicy.setOpen(true)}><Label>Privacy Policy</Label></Button>
	<Button variant="outlined" color="primary" style="height: auto; margin: 0 5px 5px 0; border: 2px #47babb solid; color: #47babb;" on:click={() => shippingPolicy.setOpen(true)}><Label>Shipping Policy</Label></Button>
	<Button variant="outlined" color="primary" style="height: auto; margin: 0 5px 5px 0; border: 2px #47babb solid; color: #47babb;" on:click={() => termsOfService.setOpen(true)}><Label>Terms of Service</Label></Button>
	

    </Content>
  </Paper>

</div>
