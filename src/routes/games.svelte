<script>
import List, {
    Item,
    Text,
    
} from '@smui/list';

import SocialPanel from '../layout/SocialPanel.svelte'
import BlackFaq from '../layout/BlackFaq.svelte';
import ColorFaq from '../layout/ColorFaq.svelte';
import TableOfContent from '../components/games/TableOfContent.svelte';
import ModulesView from '../components/games/ModulesView.svelte'
import GamesCategoriesWrap from '../components/games/GamesCategoriesWrap.svelte'
import ShortGamesList from '../components/shortGamesList.svelte';
import FullPromo from '../components/auctionPage/PromoCard.svelte'
import gamesList from '../data/gamesData';

//  let msgSoory = ['The description will be ready soon 😇', '  The site is under construction ⚙️', 'Thank you for your interest 💙']
$:options = {
  categories: [],
    view:  {
    name: 'list',
    icon: 'view_list',
    description: 'Short list.'
  },  
};

const allGames = Object.values(gamesList.all),
    historicalGames = Object.values(gamesList.categories.historical),
    artGames = Object.values(gamesList.categories.art),
    civicActivismGames = Object.values(gamesList.categories.civicActivism),
    itGames = Object.values(gamesList.categories.it);

let step = 0;
</script>
  
<svelte:head>
	<title>Boardgames 🎲</title>
</svelte:head>

<TableOfContent bind:step bind:options/>

<!-- {#if step >= 1} -->
<BlackFaq title="Total I created ({gamesList.all.length}) boardgames 🎲">
  {#if options.view.name == 'list'}
      {#each allGames as game}

      <!--           <Item on:click={() => location.href = `auctions/${game.croundfanding.links.auction}`}>
 -->
          <Item >
              <Text style="color: #000;  font: 34px'grafitty';">{game.promo.name}</Text>
          </Item>
      {/each}
  {/if}
  {#if options.view.name == 'brief'}
    {#if options.categories =='All'}
      <div class="games-promo-wrap">
        <ModulesView games={allGames}/>
      </div>
    {:else}
    {#each options.categories as category}
      {#if category=='Historical'}
        <GamesCategoriesWrap gamesOnThisCategory={historicalGames.length} {category} > 
        <div class="games-promo-wrap">
          <ModulesView games={historicalGames}/>
        </div>
      </GamesCategoriesWrap>
      {/if}
      {#if category=='Art'}
        <GamesCategoriesWrap gamesOnThisCategory={artGames.length} {category}> 
        <div class="games-promo-wrap">
          <ModulesView games={artGames}/>
        </div>
        </GamesCategoriesWrap>
      {/if}
      {#if category=='Social activism'}
        <GamesCategoriesWrap gamesOnThisCategory={civicActivismGames.length} {category}> 
        <div class="games-promo-wrap">
          <ModulesView games={civicActivismGames}/>
        </div>
      </GamesCategoriesWrap>
      {/if}
      {#if category=='It'}
        <GamesCategoriesWrap gamesOnThisCategory={itGames.length} {category}> 
        <div class="games-promo-wrap">
          <ModulesView games={itGames}/>
        </div>
        </GamesCategoriesWrap>
      {/if}
    {/each}
    {/if}
    {:else}
      {#if options.view.name == 'full'}
      {#if options.categories =='All'}
        <div class="games-promo-wrap">
           {#each allGames as game}
              <FullPromo {game}/>
            {/each}
        </div>
      {:else}
      {#each options.categories as category}
        {#if category=='Historical'}
          <GamesCategoriesWrap gamesOnThisCategory={historicalGames.length} {category} > 
          <div class="games-promo-wrap">
            {#each historicalGames as game}
              <FullPromo {game}/>
            {/each}
          </div>
        </GamesCategoriesWrap>
        {/if}
        {#if category=='Art'}
          <GamesCategoriesWrap gamesOnThisCategory={artGames.length} {category}> 
          <div class="games-promo-wrap">
            {#each artGames as game}
              <FullPromo {game}/>
            {/each}          </div>
          </GamesCategoriesWrap>
        {/if}
        {#if category=='Social activism'}
          <GamesCategoriesWrap gamesOnThisCategory={civicActivismGames.length} {category}> 
          <div class="games-promo-wrap">
            {#each civicActivismGames as game}
              <FullPromo {game}/>
            {/each} 
          </div>
        </GamesCategoriesWrap>
        {/if}
        {#if category=='It'}
          <GamesCategoriesWrap gamesOnThisCategory={itGames.length} {category}> 
          <div class="games-promo-wrap">
            {#each itGames as game}
              <FullPromo {game}/>
            {/each} 
          </div>
          </GamesCategoriesWrap>
        {/if}
      {/each}
      {/if}
  {/if}
{/if}
</BlackFaq>
<!-- {/if} -->
<ColorFaq title=""  >
  <SocialPanel title='Follow, i make content with love'/>
</ColorFaq>



<style>

</style>