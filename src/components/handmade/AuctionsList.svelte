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
import AuctionBtns from '../../components/auctionPage/AuctionBtns.svelte'
import socialData from '../../data/social/socialBlack';

export let listOfAuctions;
// console.log(listOfAuctions)
</script>

{#if !listOfAuctions.length}
<div style="display: flex; justify-content: center;">
    <Card style="max-width:450px; height: auto; ">
        <Content>        
            <p style="font: 28px 'grafitty'; max-width: 500px; color: #47babb; text-align: center;">At the moment I do not conduct auctions, but the patronite or store on etsy is always available 💙</p>
        </Content>
        <!-- <Actions> -->
                   <div style="display: flex; width: 100%; min-width:350px; flex-wrap: wrap; flex-direction: column; height: auto; align-content: center;">

        <Button style=" margin: 5px;" color="primary" variant="unelevated"  href={socialData.patronite.link} target="_blank">
            <Label style="color: #fff;">🔥 Handmade on etsy </Label>
        </Button>
        <Button style="margin: 5px;" color="primary" variant="outlined"  href={socialData.patronite.link} target="_blank">
            <Label style="color: #fff;">💸 Donate on patronite</Label>
        </Button>
        </div>
        <!-- </Actions> -->
    </Card>
     </div>
{:else}
<List style="">
    {#each listOfAuctions as auction}
     <!-- background-image: linear-gradient(to top right, {auction.promo.brandColor} 0,9%, #191B1B 90%);  -->
     <!--  -->
    <Item style="display: flex; flex-direction: row; margin-bottom: 15px; border: 1px solid {auction.promo.brandColor};  flex-wrap: wrap;  height: auto; " on:click={() => location.href = `auctions/${auction.croundfanding.links.auction}`} >
         <div style="display: flex; width: auto; margin-bottom: 5px;">
               <Card style="max-height: 150px; width: 300px; margin: 5px 15px 20px 15px;">
                <Media style="background-image: url({auction.promo.logo});" class="card-media-16x9" aspectRatio="16x9">
                    <MediaContent>
                    </MediaContent>
                </Media>
            </Card>
        </div>
             <div style="display: flex; margin-right: 15px; width: auto; flex-wrap: wrap; flex-direction: column; height: auto; justify-content: flex-start;">
            <Text style="color: {auction.promo.brandColor};">
            {auction.promo.shortName}

        </Text>
        <Set chips={[auction.lots.length]} let:chip nonInteractive>
            <Chip {chip}>
                <Text>{chip} lots in auction</Text>
            </Chip>
        </Set>
        </div>
       <div style="display: flex; width: 350px; flex-wrap: wrap; flex-direction: column; height: auto; align-content: flex-end;">
            <AuctionBtns game={auction}/>
        </div>
    </Item>
    {/each}
</List>
{/if}