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
    Group,
    Icon,
    Label
} from '@smui/button';
import List, {
    Item,
    Text,
    PrimaryText,
    SecondaryText
} from '@smui/list';
import BlackFaq from '../../layout/BlackFaq.svelte';

import { page } from '$app/stores';
import listOfAuctions from '../../data/auctions';
</script>
<!-- 
    ToDo:
     * добавить блок с кнопкой на полное описание игры с сылкой на game
 -->
<BlackFaq title={listOfAuctions[$page.params.auction].promo.name} color='{listOfAuctions[$page.params.auction].promo.brandColor}'>
<Card   style="margin-bottom: 15px; width: auto; max-width: 100%; min-width: 300px;">
<Media class="card-media-16x9" aspectRatio="16x9" style="max-height: 300px; height: 250px; width: auto; min-width: 300px; background-image: url({listOfAuctions[$page.params.auction].promo.banner});"/>
    <Content>
        <!-- <h3 style="color: #fff; font: 22px 'grafitty'; margin-bottom: -15px;">Auction</h3>  -->
        <!--  <span style="color: {auction.promo.brandColor};">#{numberAuction}.</span> -->
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; margin-bottom: -10px;">
            <h2 style="color: #fff; font: 26px 'grafitty'; margin-right: 15px;">{listOfAuctions[$page.params.auction].promo.name}</h2>
            <Button style="border-color: {listOfAuctions[$page.params.auction].promo.brandColor};" variant="outlined" on:click={() => listOfAuctions[$page.params.auction].showList = !listOfAuctions[$page.params.auction].showList} >
                <Label style="color: #fff;">Show lots</Label>
                <Icon class="material-icons" style="color: {listOfAuctions[$page.params.auction].promo.brandColor};">{listOfAuctions[$page.params.auction].showList ? 'expand_less': 'expand_more'}</Icon>
            </Button>
        </div>
        <p class={listOfAuctions[$page.params.auction].showList ? 'hidden': ''} style="color: #fff; 'roboto';">{listOfAuctions[$page.params.auction].moreInfo.description}</p>
        <div style="width: 100%;" >
            {#if listOfAuctions[$page.params.auction].showList}
            <div style="display: flex; width: 100%; flex-wrap: wrap; flex-direction: row; justify-content: flex-start; margin-bottom: 10px;">
                <Button style="background-color: {listOfAuctions[$page.params.auction].promo.brandColor}; margin: 0 10px 10px 0;" variant="unelevated"  href={listOfAuctions[$page.params.auction].croundfanding.links.allegro} target="_blank">
                    <Label style="color: #fff;">🔥 Auction on allegro </Label>
                </Button>
                <Button style="background-color: {listOfAuctions[$page.params.auction].promo.brandColor};" variant="unelevated"  href={listOfAuctions[$page.params.auction].croundfanding.links.patronitePl} target="_blank">
                    <Label style="color: #fff;">💸 Donate on patronite</Label>
                </Button>
            </div>
            <List twoLine nonInteractive>
                {#each listOfAuctions[$page.params.auction].lots as lot}
                <Item style="display: flex; flex-wrap: wrap; flex-direction: row; height: auto; border: solid 2px {listOfAuctions[$page.params.auction].promo.brandColor}">
                    <Text>
                        <PrimaryText style="color: {listOfAuctions[$page.params.auction].promo.brandColor};">{lot.name}</PrimaryText>
                        <SecondaryText style="color: {listOfAuctions[$page.params.auction].promo.brandColor};">{lot.description}</SecondaryText>
                    </Text>
                    <div style="display: flex; width: 100%; justify-content: flex-start; margin-bottom: 10px;">
                        <Button style="border-color: {listOfAuctions[$page.params.auction].promo.brandColor};" variant="outlined"  href={lot.etsy} target="_blank">
                            <Label style="color: {listOfAuctions[$page.params.auction].promo.brandColor};">Buy lot on etsy</Label>
                        </Button>
                    </div>
                </Item>
                {/each}
            </List>
            {/if}
        </div>
    </Content>
    <Actions>
        <Button style="background-color: {listOfAuctions[$page.params.auction].promo.brandColor};" variant="unelevated"  href={listOfAuctions[$page.params.auction].croundfanding.links.allegro} target="_blank">
            <Label style="color: #fff;">🔥 Auction on allegro </Label>
        </Button>
        <Button style="background-color: {listOfAuctions[$page.params.auction].promo.brandColor};" variant="unelevated"  href={listOfAuctions[$page.params.auction].croundfanding.links.patronitePl} target="_blank">
            <Label style="color: #fff;">💸 Donate on patronite</Label>
        </Button>
    </Actions>
    </Card>
    </BlackFaq>