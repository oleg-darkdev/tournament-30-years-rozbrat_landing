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

import SocialPanel from '../../components/SocialPanel.svelte'
  // import Banner from '../layout/BannerSection.svelte'
 import BlackFaq from '../../layout/BlackFaq.svelte';
 import ColorFaq from '../../layout/ColorFaq.svelte';

let listOfAuctions = [
	{
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		link: 'https://allegro.pl/',
    game: 'Game name',
    showList: false,
    lotsList: [
      {
        		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            name: 'Name of lot',
      },
       {
        		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            name: 'Name of lot',
      },
       {
        		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            name: 'Name of lot',
      },
       {
        		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            name: 'Name of lot',
      },
       {
        		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            name: 'Name of lot',
      },
    ]
	}
]
</script>

<style>
	.accordion-container {
		max-width: 750px;
	}
</style>


<!-- <Banner text='Frequently Asked Questions' imgUrl='img/faq/faq_bg.png'/> -->

<BlackFaq title="Subscribe to us."  >
  <SocialPanel title='We make content with love'/>
</BlackFaq>


<ColorFaq title="Support the project - buying a homemade souvenir, at auction."  >

  <div class="accordion-container">
	{#each listOfAuctions as auction,numberAuction}
        
      <Card>
      <Content>
        <div style="display: flex; flex-direction: column; align-items: flex-start;">
                  <h2 style="color: #fff; font: 26px 'grafitty'; ">Auction <span style="color: #47babb;">#{numberAuction}.</span></h2> <span style="color: #fff; 'roboto';">{auction.description}</span>

        </div>

        <div>
{#if auction.showList}
  <List twoLine nonInteractive>
    {#each auction.lotsList as lot}
    <Item style="border: solid 2px #47babb;">
      <Text>
        <PrimaryText style="color: #47babb;">{lot.name}</PrimaryText>
        <SecondaryText style="color: #47babb;">{lot.description}</SecondaryText>
      </Text>
    </Item>
        
    {/each}
  
  </List>
  {/if}
</div>



      </Content>
      <Actions>

        <Button  color="primary" variant="unelevated" >
  <Label><a style="color: #fff;" href={auction.link}>Go To</a></Label>
</Button>
 <IconButton on:click={() => {console.log(auction.showList)}} toggle bind:pressed={auction.showList}>
    <Icon class="material-icons" >expand_more</Icon>
    <Icon class="material-icons" on>expand_less</Icon>
  </IconButton>
      </Actions>
    </Card>



    {/each}
    </div>
</ColorFaq>




