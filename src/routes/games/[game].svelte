<script>
import { page } from '$app/stores';

import BlackFaq from '../../layout/BlackFaq.svelte';
import ColorFaq from '../../layout/ColorFaq.svelte';

import NavPanel from '../../components/gamePage/NavPanel.svelte'
import Menu from '../../components/gamePage/Menu.svelte'
import Video from '../../components/gamePage/video.svelte'
import PromoCard from '../../components/gamePage/PromoCard.svelte'
import Lor from '../../components/gamePage/Lor.svelte'
import Roles from '../../components/gamePage/Roles.svelte'
import Expansion from '../../components/gamePage/Expansion.svelte'
import Resources from '../../components/gamePage/Resources.svelte'
import Customers from '../../components/gamePage/Customers.svelte'


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
     * добавить обработчики пустоты
     * добавить стоимость
     * добавить просмотр компонентов
 -->

 <!-- game.promo.name -->
<BlackFaq title={game.promo.name} color='{game.promo.brandColor}'>
    <Menu promo={game.promo} btnData={data} />
</BlackFaq>

<ColorFaq  title={game.promo.shortDescription} color='{game.promo.brandColor}' >
    <Video videos={game.videos}/>
    <div style="display: flex; justify-content:  center;align-items: center;  flex-direction: column; ">
        <PromoCard promo={game.promo} moreInfo={game.moreInfo}/>
        <div style="flex-direction: column; ">
            <Roles promo={game.promo} roles={game.moreInfo.roles}/>
        </div>
    </div>

</ColorFaq>

    <div style="display: flex; justify-content: center;align-items: center;  flex-direction: column; ">
        <!-- fix they: bug  'promo' data -->
        <!-- <Lor promo={game.promo} lor={game.lor} /> -->
        
    </div>

<BlackFaq title="Expansions" color='{game.promo.brandColor}'>
   <Expansion expansions={game.expansions}/>
</BlackFaq>

<ColorFaq title="Resources" color='{game.promo.brandColor}'>
    <Resources resources={game.resources} videos={game.videos} promo={game.promo} /> ;
</ColorFaq >

<BlackFaq title="Customers Who Bought This Item Also Bought" color='{game.promo.brandColor}'>
    <Customers />
</BlackFaq> 

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