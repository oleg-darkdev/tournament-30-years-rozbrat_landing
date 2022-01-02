<script>
   import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';
	import { slide  } from 'svelte/transition';

import Filters from '../components/shop/Filters.svelte'
import SocialPanel from '../components/SocialPanel.svelte'
import Banner from '../layout/BannerSection.svelte'
 import BlackFaq from '../layout/BlackFaq.svelte';
 import ColorFaq from '../layout/ColorFaq.svelte';
     import Chip, { Set, Text } from '@smui/chips';
 
  import gamesList from '../data/gamesList'

  let choices = ['Political', 'Historical', 'Economical', 'Strategic', 'IT', 'Office', 'Management', 'Art',];
  let selected = [];

  // let allGamesList = [].concat(
  //   gamesList.politicalGames,
  //   gamesList.historicalGames,
  //   gamesList.economicalGames,
  //   gamesList.strategicGames,
  //   gamesList.iTGames,
  //   gamesList.officeGames,
  //   gamesList.managementGames,
  //   gamesList.artGames
  // )

// function concatFilteredGames (selectedCattegory) {
//   let filtredArray = [''];
//   if (selectedCattegory == 'Political') {
//         console.log(gamesList.politicalGames)
//         filtredArray.concat(gamesList.politicalGames)
//       }


//       return filtredArray;
// }
function getGames(gamesCattegories) {
    // gamesCattegories
  // gamesCattegories.filter(concatFilteredGames)

    // gamesCattegories.filter((selectedCattegory) => {

    //   if (selectedCattegory == 'Political') {
    //     console.log(gamesList.politicalGames)
    //     filtredArray.concat(gamesList.politicalGames)
    //   }
    //   if (selectedCattegory =='Art') filtredArray.concat(gamesList.artGames)
    //   if (selectedCattegory =='Historical') filtredArray.concat(gamesList.historicalGames)
    //       console.log(selectedCattegory)
    //       console.log(filtredArray)

    // })
    // return filtredArray
    // gamesCatalog
		return gamesList.politicalGames
	}
	

   $: filtredGames = getGames(selected);

let gamesStep = 3;
// console.log(allGamesList)
</script>
<!-- promo: {
    name: "Graffity culture",  -->

    <!-- <Filters /> -->
<BlackFaq title="Our board games. Use cattegory filtering 👇"  >
  <div class="games-promo-wrap">

    
<div class="chips-wrap">
    <Set chips={choices} let:chip filter bind:selected>
  <Chip {chip} touch>
    <Text style="">{chip}</Text>
  </Chip>
</Set>
</div>
{#each filtredGames as game}
<div transition:slide|local>
<Card style="width: 400px; background-color: #050506; margin: 10px;">
  <PrimaryAction on:click={() => console.log('click')}>
    <Media class="card-media-16x9" style="background-image: url({game.img});" aspectRatio="16x9"></Media>
    <Content class="mdc-typography--body2">
      <h2  class="mdc-typography--headline6" style="margin: 0; font: 54px'grafitty'; color: #fff;">{game.name}</h2>
      <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; font-family: roboto; color: #888;">{game.description}</h3>
    </Content>
  </PrimaryAction>
  </Card>
  </div>
{/each}
</div>
</BlackFaq>

<ColorFaq title="Filtering boardgames."  >
  <SocialPanel title='We make content with love'/>
</ColorFaq>



<style>
.chips-wrap {
  display: flex;
justify-content: center;
flex-direction: row;
width: 90%;
/* 
border: solid 2px #000;
border-radius: 4px; */
}


.games-promo-wrap {
  display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
}


</style>