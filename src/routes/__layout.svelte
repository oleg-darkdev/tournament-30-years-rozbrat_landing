<script>
import HeaderLayout from '../layout/Header.svelte'
import Footer from '../layout/Footer.svelte'
import Card, {
  Content,
  PrimaryAction,
  Media,
  MediaContent,
} from '@smui/card';
import List, { Item, Graphic, Separator, Text, Subheader  } from '@smui/list';
  import Drawer, {
  AppContent,
  Header,
  Subtitle,
  Title,
  Scrim,
} from '@smui/drawer';
import { H5 } from '@smui/common/elements';

import firstMenuText from '../data/firstMenuText';
import socialIcons from '../data/social/socialTq';
import gamesList from '../data/gamesData';

const topGames = [gamesList.gulagUSSR, gamesList.katyn, gamesList.lgbt];
let open = false;
let active = '';

function setActive(value) {
  active = value.text;
  open = false;
};
// console.log(topGames[0].promo)
</script>

<HeaderLayout bind:open/>
<div class="drawer-container">
      <Drawer style="background-color: #191B1B;" variant="modal" bind:open>
        <Header>
          <div class="logo"></div>
          <Title style="color: #fff;">DarkDev games 🎲</Title>
          <Subtitle style="color: #fff;">Educational boardgames</Subtitle>
        </Header>
        <Content style="padding:  0 5px 0 10px;">
          <List>
           {#each firstMenuText as firstMenu}
              <Item 
                href={firstMenu.link}
                on:click={() => setActive(firstMenu)}
                activated={active === firstMenu.text}
              >
                <Text>
                  <a rel=prefetch href={firstMenu.link}>
                    <span style="font: 28px 'grafitty';">{firstMenu.text} {firstMenu.emoji}</span>
                  </a>
                </Text>
              </Item>
           {/each}
            <Separator style="background-color: var(--mdc-theme-primary, #47babb);"/>
            <Subheader component={H5} style="color: #fff;">I'm in social 👇</Subheader>
            <div style="display: flex; flex-direction: row; align-content: center; width: 200px; flex-wrap: wrap;">
              {#each Object.values(socialIcons) as social}
                <Card style="width: 40px; height: 40px; margin: 5px;">
                  <PrimaryAction on:click={() => location.href = social.link}>
                    <Media style="background-image: url('{social.img}');" class="card-media-square" aspectRatio="square">
                  </Media>
                  </PrimaryAction>
                </Card>
              {/each}
            </div>
            <Separator style="background-color: var(--mdc-theme-primary, #47babb);"/>
            <Subheader style="color: #fff;"component={H5}>Top boardgames</Subheader>
              {#each topGames as game}
                <Item >
                    <Text style="color: var(--mdc-theme-primary, #47babb);  font: 28px 'grafitty';">{game.promo.shortName}</Text>
                </Item>
              {/each}
          </List>
        </Content>
      </Drawer>
  </div>
    <AppContent class="app-content">
      <main class="main-content">
          <slot />
     </main>
  </AppContent>
<Footer />

<style>
    @font-face {
        font-family: 'grafitty';
        font-style: normal;
        font-weight: 400;
        src: local('grafitty'), format('otf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  :global(.bg-img) {
 background-position: center center;      
    background-repeat: no-repeat;      
    background-attachment: fixed;      
    background-size: cover;      
    background-color: #fff;

  }
  :global(.bg-img-index) {
     background-image: url(img/bg/main_bg.png);
  }
  .main-content {
    /* background: url(img/bg.png);
    background-position: center center;      
    background-repeat: no-repeat;      
    background-attachment: fixed;      
    background-size: cover;      
    background-color: #fff; */
  }
  .logo {
    background-image: url(img/logo.svg);
    padding: 0 5px 0 15px;
    margin: 10px 0 -10px 0;
    height: 40px;
    width: 200px;
    background-repeat: no-repeat;
  }
  .drawer-container {
    background-color: #191B1B;
    position: relative;
    display: flex;
    height: auto;
    width: 256px;
    padding: 50px 0 0 0;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 1;
  }
  .main-content {
    overflow: auto;
    padding: 0px;
    height: 100%;
    box-sizing: border-box;
    z-index: 0;
      /* background-color:#191B1B; */
  }
  :global(a) {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
}

  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
      background-color:#191B1B;

  }


:global(.section-body) {
  display: flex;
justify-content: center;

/* padding: 125px 0; */
padding: 50px 0;

}

:global(.tur-bg) {
    width: 430px;
    /* max-width: ; */
    /* max-height: 600px; */
    height: auto;

    background-color: #47babb;
    display: flex;
    justify-content: center;
    /* margin: 35px 0 15px 0; */
        margin: -40px 0 15px 0;

    padding: 50px 0 25px 0;
    border-radius: 4px;
}
:global(.section-svg-line) {
  display: block;
width: 100%;
/* margin-bottom: -15px; */
/* overflow: hidden;
box-sizing: border-box; */
}

:global(.games-promo-wrap) {
  display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
}

:global(.hidden) {
	display: none;
}
</style>