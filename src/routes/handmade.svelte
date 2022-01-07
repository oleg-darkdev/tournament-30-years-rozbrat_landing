<script>
import IconButton, {
    Icon
} from '@smui/icon-button';
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
    Group,
    Label
} from '@smui/button';
import List, {
    Item,
    Text,
    PrimaryText,
    SecondaryText
} from '@smui/list';
import Chip, {
    Set
} from '@smui/chips';

import SocialPanel from '../components/SocialPanel.svelte'
import Banner from '../layout/BannerSection.svelte'
import BlackFaq from '../layout/BlackFaq.svelte';
import ColorFaq from '../layout/ColorFaq.svelte';

import gamesList from '../data/gamesData'
import listOfAuctions from '../data/auctions'


// let allGamesList = [].concat(gamesList.artGames, gamesList.civicActivism, gamesList.historical, gamesList.itGames);

console.log()
// console.log(listOfAuctions)
</script>

<!-- <Banner text='Frequently Asked Questions' imgUrl='img/faq/faq_bg.png'/> -->

<ColorFaq title="Support the project - buying a homemade souvenir, at auction."  >
<!-- Я организовал аукционы из предметов которые сделал своими руками - для сбора денег на обучающие игры: -->
<!-- I organized auctions of items that I made with my own hands - to raise money for educational games: -->

<List style="">
    {#each listOfAuctions as auction}
    <Item style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: content; height: auto; border: 2px solid #47babb; " on:click={() => location.href =`#${auction.id}`} >
                        
         <div style="display: flex; width: auto; margin-bottom: 5px;">
               <Card style="max-height: 150px; width: 300px; margin: 15px;">
                <Media style="background-image: url({auction.logo});" class="card-media-16x9" aspectRatio="16x9">
                    <MediaContent>
                    </MediaContent>
                </Media>
            </Card>
        
        </div>
             <div style="display: flex; margin-right: 15px; width: auto; flex-wrap: wrap; flex-direction: column; height: auto; justify-content: flex-start;">
            <Text style="color: {auction.brandColor};">
            {auction.name}

        </Text>
        <Set chips={[auction.lotsList.length]} let:chip nonInteractive>
            <Chip {chip}>
                <Text>{chip} lots in auction</Text>
            </Chip>
        </Set>
        </div>
        <!-- 520px -->
       <div style="display: flex; width: 350px; flex-wrap: wrap; flex-direction: column; height: auto; align-content: flex-end;">
        <Button style=" margin: 5px; background-color: {auction.brandColor}; " variant="unelevated"  href={auction.linkAllegro} target="_blank">
            <Label style="color: #fff;">🔥 Auction on allegro </Label>
        </Button>
        <Button style="margin: 5px; background-color: {auction.brandColor};" variant="outlined"  href={auction.linkPatronitePl} target="_blank">
            <Label style="color: #fff;">💸 Donate on patronite</Label>
        </Button>
        </div>
        
    </Item>
    {/each}
</List>
</ColorFaq>

{#each listOfAuctions as auction,numberAuction}
<BlackFaq  title="" color={auction.brandColor}>
    <a id={auction.id}></a>
    <Card   style="margin-bottom: 15px; width: auto; max-width: 100%; min-width: 300px;">
        <Media class="card-media-16x9" aspectRatio="16x9" style="max-height: 300px; height: 250px; width: auto; min-width: 300px; background-image: url({auction.promo});"/>
            <Content>
                <h3 style="color: #fff; font: 22px 'grafitty'; margin-bottom: -15px;">Auction <span style="color: {auction.brandColor};">#{numberAuction}.</span></h3>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; margin-bottom: -10px;">
                    <h2 style="color: #fff; font: 26px 'grafitty'; margin-right: 15px;">{auction.name}</h2>
                    <Button style="border-color: {auction.brandColor};" variant="outlined" on:click={() => auction.showList = !auction.showList} >
                        <Label style="color: #fff;">Show lots</Label>
                        <Icon class="material-icons" style="color: {auction.brandColor};">{auction.showList ? 'expand_less': 'expand_more'}</Icon>
                    </Button>
                </div>
                <p style="color: #fff; 'roboto';">{auction.description}</p>
                <div style="width: 100%;" >
                    {#if auction.showList}
                    <div style="display: flex; width: 100%; flex-wrap: wrap; flex-direction: row; justify-content: flex-start; margin-bottom: 10px;">
                        <Button style="background-color: {auction.brandColor}; margin: 0 10px 10px 0;" variant="unelevated"  href={auction.linkAllegro} target="_blank">
                            <Label style="color: #fff;">🔥 Auction on allegro </Label>
                        </Button>
                        <Button style="background-color: {auction.brandColor};" variant="unelevated"  href={auction.linkPatronitePl} target="_blank">
                            <Label style="color: #fff;">💸 Donate on patronite</Label>
                        </Button>
                    </div>
                    <List twoLine nonInteractive>
                        {#each auction.lotsList as lot}
                        <Item style="display: flex; flex-wrap: wrap; flex-direction: row; height: auto; border: solid 2px {auction.brandColor}">
                            <Text>
                                <PrimaryText style="color: {auction.brandColor};">{lot.name}</PrimaryText>
                                <SecondaryText style="color: {auction.brandColor};">{lot.description}</SecondaryText>
                            </Text>
                            <div style="display: flex; width: 100%; justify-content: flex-start; margin-bottom: 10px;">
                                <Button style="border-color: {auction.brandColor};" variant="outlined"  href={lot.etsy} target="_blank">
                                    <Label style="color: {auction.brandColor};">Buy lot on etsy</Label>
                                </Button>
                            </div>
                        </Item>
                        {/each}
                    </List>
                    {/if}
                </div>
            </Content>
            <Actions>
                <Button style="background-color: {auction.brandColor};" variant="unelevated"  href={auction.linkAllegro} target="_blank">
                    <Label style="color: #fff;">🔥 Auction on allegro </Label>
                </Button>
                <Button style="background-color: {auction.brandColor};" variant="unelevated"  href={auction.linkPatronitePl} target="_blank">
                    <Label style="color: #fff;">💸 Donate on patronite</Label>
                </Button>
            </Actions>
            </Card>
            </BlackFaq>
            {/each}

            <!-- <ColorFaq title=""  >

            </ColorFaq>

            <BlackFaq title="">

            </BlackFaq>

            <ColorFaq title=""  >

            </ColorFaq> -->

            <style>
                .d {
                    justify-content:space-between;
                }
</style>
