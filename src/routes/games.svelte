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
import gamesList from '../data/gamesData'


// Civic Activism
// let allGamesList = ;

// console.log(gamesList.all)
 let msgSoory = ['The description will be ready soon 😇', '  The site is under construction ⚙️', 'Thank you for your interest 💙']
</script>

<BlackFaq title="I created ({gamesList.all.length}) board games 🎲">
  <div class="games-promo-wrap">
{#each gamesList.all as game}
<div transition:slide|local>

     <Card style="width: 400px; height: auto; margin: 10px;">
      <PrimaryAction on:click={() => game.show = !game.show}>
    <Media class="card-media-16x9" style="background-image: url({game.promo.logo});" aspectRatio="16x9">

        </Media>
         </PrimaryAction>
        <Content style="  display: flex; flex-direction: column;"
  >
                  {#if game.show}
      <h2  class="mdc-typography--headline6" style="margin: 0; font: 54px'grafitty'; color: #fff;">{game.promo.name}</h2>
         <!-- {#each game.description as description} -->
            <p class="mdc-typography--body2">
                  {game.moreInfo.description ? game.moreInfo.description: msgSoory[0]} <br> {msgSoory[1]} <br> {msgSoory[2]}
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