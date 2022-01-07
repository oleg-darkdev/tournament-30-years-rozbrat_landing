<svelte:head>

<title>Support DarkDev.games</title>
</svelte:head>

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
import Button, {
    Label
} from '@smui/button';
import IconButton, {
    Icon
} from '@smui/icon-button';
import List, { Item, Graphic, Separator, Text } from '@smui/list';

import SocialPanel from '../components/SocialPanel.svelte'
import Banner from '../layout/BannerSection.svelte'
import BlackFaq from '../layout/BlackFaq.svelte';
import ColorFaq from '../layout/ColorFaq.svelte';

let services = [
    '🖌 Create design',
  '🤖 Development website or telegram bot',
  '🎲 Development of educational boardgame',
  '🔥 Laser cutting and engraving on my equipment'
];

  // '🤖 Development website or telegram bot',
  // '🎲 Development of educational boardgame for you and your friends, or for corporate educational boardgame the your company',
  // '🖌 Create design for stickers, affishes, banners, or design for the site, instagram)',
  // '🔥 Laser cutting and engraving on my equipment'
//   Ты можешь подержать меня и мой проект следующими способами:  

// 1. Для каждой настольной игры я сделал набор сувениров, ты можешь приобрести сувениры прийдя на один из воркшопов или купив в магазине на etsy.

// 2. Я периодически организую аукционы для сбора средств на разработку настольных игр. В этих аукционах я и предлагаю тебе - купить сувениры.
// - актуальные аукционы  

// 3. Закажи у меня услугу:
//  * разработка сайта, телеграм бота
//  * разработку обучающей настольной игры для тебя и твоих друзей, или для компании в которой ты работаешь
//  * дизайн (наклейки, аффишы, баннеры, оформление для сайта или instagram)
//  * лазерная резка и гравировка 

//  4. Приходи на один воркшопов и сыграй со мной и другими людьми в настольки, или напиши мне что-нибудь приятное и поставь пару лайков. 

</script>



<!-- <Banner text='Frequently Asked Questions' imgUrl='img/faq/faq_bg.png'/> -->

  <div style="display: flex; justify-content: center;align-items: center;  flex-direction: column; ">
        <section style="width: 430px; margin: 0; ">
            <div class="tur-bg" >
                <Card style='max-width: 380px; margin: 0; height: auto;'>
                    <Media  style='background-image: url("img/support.png");  height: 190px; width: 100%;' ></Media>
                 <Content class="mdc-typography--body2" style="display: flex; background-color: #050506; flex-direction: column;
                        ">
             <p style="margin: 0;" > The easy way is - to donate or sign up a paid subscription on patronite.
              </p>
                                 <div class="wrap-btns">
                 <Button href="" target="_blank" style="border-color: #47babb; margin: 5px;" variant="outlined">
                  <Label>💸 patronite</Label>
                </Button>

               </div> 


                       <p style="margin: 0;"><span style="color:#47babb; font: 22px 'grafitty'">1.</span> For each board game I made a set of souvenirs, you can buy souvenirs by coming to one of the workshops or buying in the shop on etsy.
              </p>
               <div class="wrap-btns">
                 <Button href="" target="_blank" style="border-color: #47babb; margin: 5px;" variant="outlined">
                  <Label>🎯 workshops</Label>
                </Button>
                <Button href="" target="_blank" style="border-color: #47babb; margin: 5px;" variant="outlined">
                  <Label>🛒 etsy</Label>
                </Button>
               </div>
   <p style="margin: 0;"><span style="color:#47babb; font: 22px 'grafitty'">2.</span> 
                 I periodically organize the auctions to raise money for the development of boardgames. In these auctions, I offer you to buy souvenirs.
              </p>

               <div class="wrap-btns">
                 <Button href="" target="_blank" style="border-color: #47babb; margin: 5px;" variant="outlined">
                  <Label>🎨 handmade</Label>
                </Button>
               </div>
  <p style="margin: 0;"> <span style="color:#47babb; font: 22px 'grafitty'">3.</span> 
              I provide the next services:              </p>
              <List class="demo-list" style='width: 100%; color: #47babb; margin-bottom: 10px;' dense>
                {#each services as service}
                  <Item style="border: 2px solid #47babb; ">
                    <Text >{service}</Text>
                  </Item>
            {/each}
                     </List>
                             <p style="margin: 0;"><span style="color:#47babb; font: 22px 'grafitty'">4.</span> 
Come to one of the workshops and play the boardgames with me and other people, or write me nice message and put likes 👇</p>
                    </Content>
                  </Card>
    

            
            </div>
        </section>

    </div>
<BlackFaq title=""  >
  
  <SocialPanel title='I make content with love'/>
</BlackFaq>

<style>
.wrap-btns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    margin:  0 0 10px 0;
    width: 100%;
}
</style>
