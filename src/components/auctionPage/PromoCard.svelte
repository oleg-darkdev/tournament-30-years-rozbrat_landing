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
import List, {
    Item,
    Text,
    PrimaryText,
    SecondaryText
} from '@smui/list';
    import Button, {
    Group,
    Icon,
    Label
} from '@smui/button';
import Chip, {
    Set
} from '@smui/chips';
import AuctionBtns from './AuctionBtns.svelte';

export let game;
</script>

<Card   style="margin-bottom: 15px; width: auto; max-width: 100%; min-width: 300px;">
<Media style="max-height: 300px; height: 230px; width: 100%; min-width: 300px; background-image: url({game.promo.banner});"/>
    <Content>
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; margin-bottom: 0px;">
            <h2 style="color: #fff; font: 26px 'grafitty'; margin-right: 15px;">{game.promo.name} <span style="color: {game.auctionStatus ? '#47babb': '#ff3e00'}">auction {game.auctionStatus ? 'active': 'paused'}</span> </h2>
            <Button style="border-color: {game.promo.brandColor};" variant="outlined" on:click={() => game.showList = !game.showList} >
                <Label style="color: #fff;">Show lots</Label>
                <Icon class="material-icons" style="color: {game.promo.brandColor};">{game.showList ? 'expand_less': 'expand_more'}</Icon>
            </Button>
        </div>
        <div>
        <Set chips={game.promo.categories} let:chip nonInteractive>
            <Chip {chip}>
                <Text>{chip.emoji} {chip.text}</Text>
            </Chip>
        </Set>
        </div>
        {#if !game.showList} 
            <p style="color: #fff; 'roboto';">{game.moreInfo.description}</p>
            <Button style="border-color: {game.promo.brandColor};" color="secondary" variant="outlined"  href={`/games/${game.promo.id}`}>
                <Label style="color: {game.promo.brandColor};">More Info</Label>
            </Button>
        {/if}
        <div style="width: 100%;" >
            {#if game.showList}
            <div style="display: flex; width: 100%; flex-wrap: wrap; flex-direction: row; justify-content: flex-start; margin-bottom: 10px;">
                <AuctionBtns {game}/>
            </div>
            <List twoLine nonInteractive>
                {#each game.lots as lot}
                <Item style="display: flex; flex-wrap: wrap; flex-direction: row; height: auto; border: solid 2px {game.promo.brandColor}">
                    <Text>
                        <PrimaryText style="color: {game.promo.brandColor};">{lot.name}</PrimaryText>
                        <SecondaryText style="color: {game.promo.brandColor};">{lot.description}</SecondaryText>
                    </Text>
                    <div style="display: flex; width: 100%; justify-content: flex-start; margin-bottom: 10px;">
                        <Button style="border-color: {game.promo.brandColor};" variant="outlined"  href={lot.etsy} target="_blank">
                            <Label style="color: {game.promo.brandColor};">Buy lot on etsy</Label>
                        </Button>
                    </div>
                </Item>
                {/each}
            </List>
            {/if}
        </div>
    </Content>
    <Actions>
        <AuctionBtns {game}/>
    </Actions>
    </Card> 