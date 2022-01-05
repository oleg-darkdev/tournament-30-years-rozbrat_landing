<script>
   import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';
	import { slide  } from 'svelte/transition';

import Filters from '../components/shop/Filters.svelte'
import SocialPanel from '../components/SocialPanel.svelte'
import Banner from '../layout/BannerSection.svelte'
 import BlackFaq from '../layout/BlackFaq.svelte';
 import ColorFaq from '../layout/ColorFaq.svelte';
import { missing_component } from 'svelte/internal';
  


 const allGamesList = [
           {
     img: 'img/games-logos/gulag.png',
     show: '',
     name: 'Gulag 1928-1953',
     description: ''
   },
           {
     img: 'img/games-logos/katyn.png',
     show: '',
     name: 'Katyn',
     description: ''
   },
           {
     img: 'img/games-logos/fnb.png',
     show: '',
     name: 'Food not bombs',
     description: ''
   },
        {
     img: 'img/games-logos/eco.png',
     show: '',
     name: 'Eco bunt',
     description: ''
   },
       {
     img: 'img/games-logos/ror.png',
     show: '',
     name: 'R.O.R',
     description: ''
   },

   {
     img: 'img/games-logos/lgbt.png',
     show: '',
     name: 'LTBG+',
     description: ''
   },
           {
     img: 'img/games-logos/wikileaks.png',
     show: '',
     name: 'Wikileaks',
     description: ''
   },

        {
     img: 'img/games-logos/hackerspace.png',
     show: '',
     name: 'Hackerspace',
     description: ''
   },
              {
     img: 'img/games-logos/yakusa.png',
     show: '',
     name: 'Yakusa',
     description: ''
   },
     {
     img: 'img/games-logos/12.262.png',
     show: '',
     name: '12.262',
     description: ''
   },
        {
     img: 'img/games-logos/A.png',
     show: '',
     name: 'A',
     description: ''
   },


 
        {
     img: 'img/games-logos/squat.png',
     show: '',
     name: 'Squat action',
     description: ''
   },

           {
     img: 'img/games-logos/wtb.png',
     show: '',
     name: 'WTB (welcome to belarus)',
     description: ''
   },

  //             {
  //    img: 'img/games-logos/.png',
  //    show: '',
  //    name: '',
  //    description: ''
  //  },
  //             {
  //    img: 'img/games-logos/.png',
  //    show: '',
  //    name: '',
  //    description: ''
  //  },
  //             {
  //    img: 'img/games-logos/.png',
  //    show: '',
  //    name: '',
  //    description: ''
  //  },

 ]


 let msgSoory = ['The description will be ready soon 😇', '  The site is under construction ⚙️', 'Thank you for your interest 💙']
</script>
<!-- My board games  -->
<BlackFaq title="I created ({allGamesList.length}) board games 🎲">
  <div class="games-promo-wrap">
{#each allGamesList as game}
<div transition:slide|local>

     <Card style="width: 400px; height: auto; margin: 10px;">
      <PrimaryAction on:click={() => game.show = !game.show}>
    <Media class="card-media-16x9" style="background-image: url({game.img});" aspectRatio="16x9">

        </Media>
         </PrimaryAction>
        <Content style="  display: flex; flex-direction: column;"
  >
                  {#if game.show}
      <h2  class="mdc-typography--headline6" style="margin: 0; font: 54px'grafitty'; color: #fff;">{game.name}</h2>
         <!-- {#each game.description as description} -->
            <p class="mdc-typography--body2">
                  {game.description ? game.description: msgSoory[0]} <br> {msgSoory[1]} <br> {msgSoory[2]}
              </p>  
        <!-- {/each} -->
      {/if}
      <div style="display: flex; justify-content: center;">
           <div on:click={() => game.show = !game.show} class='show-more-about-game'>
          <span style="font: 24px 'grafitty';">Learn more 🔬</span>
        </div>
         </div>
          </Content>
    </Card>
 </div>

{/each}
</div>
</BlackFaq>

<ColorFaq title=""  >
  <SocialPanel title='Follow, i make content with love'/>
</ColorFaq>



<style>
.show-more-about-game {
  width: 250px; border: 2px solid #47babb; height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #47babb;
  }




</style>