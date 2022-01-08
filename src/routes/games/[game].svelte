<script>
import { page } from '$app/stores';

import BlackFaq from '../../layout/BlackFaq.svelte';
import ColorFaq from '../../layout/ColorFaq.svelte';

import NavPanel from '../../components/game/NavPanel.svelte'
import Menu from '../../components/game/menu.svelte'
import Video from '../../components/game/video.svelte'
import PromoCard from '../../components/game/promoCard.svelte'
import Lor from '../../components/game/lor.svelte'
import Roles from '../../components/game/roles.svelte'
import Expansion from '../../components/game/expansion.svelte'
import Resources from '../../components/game/resources.svelte'
import Customers from '../../components/game/customers.svelte'


import gamesList from '../../data/gamesData'
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
    <title>☘️ Eco bunt - eco activism</title>
</svelte:head>
<!-- 
    ToDO:
     * добавить отображение статуса
     * добавить обработчики пустоты
     * добавить стоимость
     * добавить просмотр компонентов
 -->

 <!-- gamesList[$page.params.game]sList[$page.params.game].promo.name -->
<BlackFaq title={gamesList[$page.params.game].promo.name} color='{gamesList[$page.params.game].promo.brandColor}'>
    <Menu promo={gamesList[$page.params.game].promo} btnData={data} />
</BlackFaq>

<ColorFaq  title={gamesList[$page.params.game].promo.shortDescription} color='{gamesList[$page.params.game].promo.brandColor}' >
    <Video videos={gamesList[$page.params.game].videos}/>
    <div style="display: flex; justify-content:  center;align-items: center;  flex-direction: column; ">
        <PromoCard promo={gamesList[$page.params.game].promo} moreInfo={gamesList[$page.params.game].moreInfo}/>
    </div>
    <div style="display: flex; justify-content: center;align-items: center;  flex-direction: column; ">
        <!-- fix they: bug  'promo' data -->
        <!-- <Lor promo={gamesList[$page.params.game].promo} lor={gamesList[$page.params.game].lor} /> -->
        <!-- <Roles promo={gamesList[$page.params.game].promo} roles={gamesList[$page.params.game].moreInfo.roles}/> -->
    </div>
</ColorFaq>

<BlackFaq title="Expansions" color='{gamesList[$page.params.game].promo.brandColor}'>
   <Expansion expansions={gamesList[$page.params.game].expansions}/>
</BlackFaq>

<ColorFaq title="Resources" color='{gamesList[$page.params.game].promo.brandColor}'>
    <Resources resources={gamesList[$page.params.game].resources} videos={gamesList[$page.params.game].videos} promo={gamesList[$page.params.game].promo} /> ;
</ColorFaq >

<BlackFaq title="Customers Who Bought This Item Also Bought" color='{gamesList[$page.params.game].promo.brandColor}'>
    <Customers />
</BlackFaq> 

<!-- <ColorFaq >

</ColorFaq> -->

<!--
<BlackFaq title="">

</BlackFaq> -->

<style>

</style>


                                                    <!-- <h5 style="font-family: 'grafitty'; color: {gamesList[$page.params.game].promo.brandColor};" class="mdc-typography--headline4">Updates</h5>
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
{#each gamesList[$page.params.game].updates as update}
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
<!-- <Card  style="width: 460px; background-color: {gamesList[$page.params.game].promo.brandColor};">
                    <Content>        <span style="font: 24px 'grafitty';">price: 60 euro</span>
                    </Content>
                    <Actions style="background-color: {gamesList[$page.params.game].promo.brandColor};" fullBleed>
                        <Button on:click={() => console.log('click')}>
                            <Label style="font: 35px 'grafitty'; color: #000;">Buy it now</Label>
                            <i style="color: #000;" class="material-icons" aria-hidden="true">arrow_forward</i>
                        </Button>
                    </Actions>
                </Card> -->
                       <!--
            <Card style='width: 530px; background-color: {gamesList[$page.params.game].promo.brandColor};  height: 80px; '>
                <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log('instagram link')} padded>
                    <span style="font: 35px 'grafitty';">Real photos this boardgamesList[$page.params.game]</span>
                </PrimaryAction>
            </Card> -->