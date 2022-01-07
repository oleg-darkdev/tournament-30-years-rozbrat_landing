<svelte:head>
	<title>Shop</title>
</svelte:head>

<script >
  import IconButton, { Icon } from '@smui/icon-button';
   import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Group,  Label } from '@smui/button';
 import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';   

import SocialPanel from '../components/SocialPanel.svelte'
  import Banner from '../layout/BannerSection.svelte'
 import BlackFaq from '../layout/BlackFaq.svelte';
 import ColorFaq from '../layout/ColorFaq.svelte';

</script>

<style>

</style>


<!-- <Banner text='Frequently Asked Questions' imgUrl='img/faq/faq_bg.png'/> -->

<BlackFaq title="Subscribe to me."  >
  <SocialPanel title='I make content with love'/>
</BlackFaq>





