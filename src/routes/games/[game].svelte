<script>
import { page } from '$app/stores';

import BlackFaq from '../../layout/BlackFaq.svelte';
import ColorFaq from '../../layout/ColorFaq.svelte';
import ImgFaq from '../../layout/ImgFaq.svelte';

import NavPanel from '../../components/gamePage/NavPanel.svelte';
import Menu from '../../components/gamePage/Menu.svelte'; // ../../components/gamePage/Menu.svelte
import Video from '../../components/gamePage/Video.svelte';
import PromoCard from '../../components/gamePage/PromoCard.svelte';
import PromoCardPersons from '../../components/gamePage/PromoCardPersons.svelte';
import Lor from '../../components/gamePage/Lor.svelte';
import Roles from '../../components/gamePage/Roles.svelte';
import Expansion from '../../components/gamePage/Expansion.svelte';
import Resources from '../../components/gamePage/Resources.svelte';
import Customers from '../../components/gamePage/Customers.svelte';


import gamesList from '../../data/gamesData';
let game = gamesList[$page.params.game];
let data = [
    {
        text: 'PLAY 🕹️',
        href: '/eco-app'       
    },
       {
        text: 'FUNDRAISING',
        href: '',
    },
      {
        text: 'WORKSHOP 🎯',
        href: '/workshops', // + id игры
    },
          {
        text: 'BUY 🛒',
        href: '', // в магазин + якорь
    },
              {
        text: 'ABOUT ℹ️',
        href: '#about',
    },
          {
        text: 'FAQ ⁉️',
        href: '', // проматывает до компонента faq + якорь
    },
          {
        text: 'RESOURCES 📺',
        href: '#resources',
    },
          {
        text: 'RECORDS 📉',
        href: '/eco-app#records',
    },
]

</script>


<svelte:head>
    <title>{game.promo.name}</title>
</svelte:head>
<!-- 
    ToDO:
     * добавить отображение статуса
     * добавить стоимость
     * добавить просмотр компонентов
 -->

 <!-- game.promo.name -->
<BlackFaq title={game.promo.name} color='{game.promo.brandColor}'>
    <Menu promo={game.promo} btnData={data} />
</BlackFaq>

<ImgFaq  title={game.promo.shortDescription} img='{game.promo.banner}' color='{game.promo.brandColor}' >
    <Video videos={game.videos} sorryBgColor='{game.promo.brandColor}'/>
</ImgFaq>


<ColorFaq  title={game.promo.shortDescription} color='{game.promo.brandColor}' >
       <PromoCard promo={game.promo} info={game.moreInfo}/>
    <!-- </div> -->
</ColorFaq>
   
  
<!-- <ColorFaq  title='' color='{game.promo.brandColor}' >
    -->
<ImgFaq  title='Characters available in the game' img='{game.roles.banner}' color='{game.promo.brandColor}' >
    <div style="display: flex;  justify-content:  center; align-items: center; width: 100%; flex-direction: column; ">
        <PromoCardPersons promo={game.promo} info={game.roles}/>
        <div style="flex-direction: column; ">
            <Roles roles={game.roles.characters} />
        </div>
    </div>
</ImgFaq> 


   
<div style="display: flex; justify-content: center;align-items: center;  flex-direction: column; ">
    <!-- fix they: bug  'promo' data -->
    <!-- <Lor promo={game.promo} lor={game.lor} /> -->
    
</div>

<ColorFaq title="Expansions" color='{game.promo.brandColor}'>
   <Expansion expansions={game.expansions} sorryBgColor='{game.promo.brandColor}'/>
</ColorFaq>

<ImgFaq  title='Resources' img='{game.promo.banner}' color='{game.promo.brandColor}' >
   <Resources resources={game.resources} videos={game.videos} promo={game.promo}/> ;
</ImgFaq>

<ColorFaq title="Customers who bought this item also bought" color='{game.promo.brandColor}'>
    <Customers sorryBgColor='{game.promo.brandColor}'/>
</ColorFaq> 

<!-- <ColorFaq >

</ColorFaq> -->

<!--
<BlackFaq title="">

</BlackFaq> -->

<style>

</style>


                                                    <!-- <h5 style="font-family: 'grafitty'; color: {game.promo.brandColor};" class="mdc-typography--headline4">Updates</h5>
<DataTable stickyHeader table$aria-label="User list" style="max-width: 760px; width: 50%; margin-top: -15px;">
<Head>
<Row>
<Cell  numeric>Version</Cell>
<Cell >Persons</Cell>
<Cell >Map</Cell>
<Cell >Mechanics</Cell>
<Cell >Date</Cell>
</Row>
</Head>
<Body>
{#each game.updates as update}
<Row>
<Cell numeric>{update.version}</Cell>
<Cell>{update.persons ? update.persons : 'No changes'}</Cell>
<Cell>{update.map ? update.map : 'No changes'}</Cell>
<Cell>{update.mechanic ? update.mechanic : 'No changes'}</Cell>
<Cell>{update.date}</Cell>
</Row>
{/each}
</Body>
                                                    </DataTable> -->
<!-- <Card  style="width: 460px; background-color: {game.promo.brandColor};">
                    <Content>        <span style="font: 24px 'grafitty';">price: 60 euro</span>
                    </Content>
                    <Actions style="background-color: {game.promo.brandColor};" fullBleed>
                        <Button on:click={() => console.log('click')}>
                            <Label style="font: 35px 'grafitty'; color: #000;">Buy it now</Label>
                            <i style="color: #000;" class="material-icons" aria-hidden="true">arrow_forward</i>
                        </Button>
                    </Actions>
                </Card> -->
                       <!--
            <Card style='width: 530px; background-color: {game.promo.brandColor};  height: 80px; '>
                <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log('instagram link')} padded>
                    <span style="font: 35px 'grafitty';">Real photos this boardgame</span>
                </PrimaryAction>
            </Card> -->