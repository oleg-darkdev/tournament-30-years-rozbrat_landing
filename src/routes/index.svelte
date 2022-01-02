
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

import SocialPanel from '../components/SocialPanel.svelte'



  let workshopsCatalog = [
    {
      name: 'Workshop 1',
      description: 'A Game of Woodland Might and Right',
      link: '',
      img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/box-root_360x.jpg?v=1596378293',
      id: ''
    },
    {
      name: 'Workshop 2',
      description: 'A Game of Woodland Might and Right',
      link: '',
      img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/box-oath_360x.jpg?v=1596378306',
      id: ''
    },
    {
      name: 'Workshop 3',
      description: 'A Game of Woodland Might and Right',
      link: '',
      img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/ledergames-fort_360x.jpg?v=1596378316',
      id: ''
    },
    {
      name: 'Workshop 4',
      description: 'A Game of Woodland Might and Right',
      link: '',
      img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/box-vast-tmm_360x.jpg?v=1596378327',
      id: ''
    },
  ];



let shop = false,
faq = false,
about = false,
support = false,
workshops = false;

let getStarted = false,
firstMenu = [
  {
    text: 'shop',
    variable: shop,
    link: 'shop',
    emoji: '🛒'
  },
    {
    text: 'FAQs',
    variable: faq,
    link: 'faq',
    emoji: '⁉️'
  },
      {
    text: 'Support',
    variable: support,
    link: 'support',
    emoji: '🖤'
  },
  //     {
  //   text: 'workshops',
  //   variable: workshops,
  //   link: 'workshops',
  //   emoji: '🎲'
  // },
  // {
  //   text: 'about',
  //   variable: about,
  //   link: 'about',
  //   emoji: 'ℹ️'
  // }

]
</script>


<style>
@font-face {
    font-family: 'grafitty';
    src: url('grafitty.otf');
}
/* https://www.fontspace.com/amanzing-grafiti-font-f47454
https://www.fontspace.com/whoa-font-f6273 */


* :global(a) {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
}

.tur-bg {
width: 430px;
/* max-width: ; */
max-height: 600px;
height: auto;
background-color: #47babb;
display: flex;
justify-content: center;
margin: 35px 0 15px 0;
padding: 25px 0 ;
/* flex-direction: column; */
}

/* .games-promo-wrap {
  display: flex;
justify-content: center;
flex-direction: row;
}

.btns {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-between;
margin-left:35px;
} */

* :global(.hidden) {
	display: none;
}
</style>

<svelte:head>
  <title>DarkDev Games</title>
</svelte:head>

<div style="display: flex; justify-content: center;align-items: center;  flex-direction: column; ">



<section style="width: 430px; margin: 0; ">
<div class="tur-bg" >
  <Card style='width: 380px; margin: 0; height: 550px; background-color: #000000;'>
 
      {#if !getStarted}
        <Media  style='background-image: url("img/glad_to_see_you.png");  height: 450px; width: 100%;' ></Media>
      {/if}
      <Content class="mdc-typography--body2" style="display: flex;
      align-items: center; background-color: #050506; flex-direction: column;
      ">
      {#if !getStarted}
      <Card style='width: 250px; background-color: #47babb;  height: 80px; margin-bottom: 15px;'>
      <PrimaryAction style="display: flex; align-items: center;" on:click={() => getStarted = !getStarted} padded>
        <span style="font: 35px 'grafitty';">Get started</span>
      </PrimaryAction>
      </Card> 
   
      {:else}
      {#each firstMenu as menuItem}
     <Card style='width: 300px; border: 2px solid #47babb; height: 90px; margin-bottom: 10px;  '>
      <PrimaryAction style="display: flex;      align-items: center; " on:click={() => {
        
        menuItem.variable = !menuItem.variable;
        // console.log(menuItem.variable )
      }} padded>
        <a rel=prefetch href={menuItem.link}><span style="font: 40px 'grafitty';">{menuItem.text} {menuItem.emoji}</span> </a>
      </PrimaryAction>
      </Card> 
      {/each}
      {/if}
          </Content>

  </Card>
</div>
</section>

    <SocialPanel title="I'm on social media"/>

</div>
<!-- 


    {#each workshopsCatalog as workshop}
    <Card style="width: 340px; background-color: #050506; margin: 10px;">
      <PrimaryAction on:click={() => console.log('click')}>
        <Media class="card-media-16x9" style="background-image: url({workshop.img});" aspectRatio="16x9"></Media>
        <Content class="mdc-typography--body2">
          <h2 class="mdc-typography--headline6" style="margin: 0; font: 54px'grafitty'; color: #fff;">{workshop.name}</h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; font-family: roboto; color: #888;">{workshop.description}</h3>
        </Content>
      </PrimaryAction>
     </Card>
    {/each} -->