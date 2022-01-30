<script>
import List, {
    Item,
    Text,
    PrimaryText,
    SecondaryText
} from '@smui/list';
import Menu from '@smui/menu';
import Button, {
    Label
} from '@smui/button';
import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
} from '@smui/card';

import socialBlack from '../../data/social/socialWorkshops';


let moreInfoMenu = [''],
    showMoreInfo = false;


export let workshopData;
</script>


<List style="max-width: 560px; min-height: 280px; width: auto; " threeLine>
        <!-- {#each workshopData as workshopData, i} -->
        <Item style="background-color: #191B1B; min-height: 185px; height: auto; display: flex; flex-direction: row;  justify-content: flex-start;  flex-wrap: wrap;">
            <Menu style="width: 100%; background-color: #fff;  height: 180%;" bind:this={moreInfoMenu[0]}>
                <div class="wrap-hide-menu" >
                    {#if showMoreInfo}
                        {#each Object.values(socialBlack) as social, i}
                            <Card style="width: 70px; margin: 5px;">
                                <PrimaryAction on:click={() => location.href = workshopData.social}>
                                    <Media class="card-media-square" style="background-image: url('{social.img}');" aspectRatio="square">
                                    </Media>
                                </PrimaryAction>
                            </Card>
                        {/each}

                    {:else}
                    <div style="display: flex; flex-direction: column; justify-content: center;">
                        <h2 class="mdc-typography--headline6"
                            style="color: #191B1B; font-family: 'grafitty'; margin: -5px;"
                            >
                            Go to Eventbrite?
                        </h2>
                        <Card style='width: 300px; background-color: {workshopData.promo.brandColor}; height: 70px; '>
                            <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log(workshopData.eventbrite)} padded>
                                <span style="font: 35px 'grafitty';">REGISTRATION</span>
                            </PrimaryAction>
                        </Card>
                    </div>
                    {/if}
                </div>
            </Menu>
            
            <!-- <Card style="height: 100px; width: 200px; margin: 15px;">
                <Media style="background-image: url({workshopData.promo.logo});" class="card-media-16x9" aspectRatio="16x9">
                    <MediaContent>
                    </MediaContent>
                </Media>
            </Card> -->

            <Text>
                <PrimaryText style="color: #fff;">{workshopData.promo.name} </PrimaryText>
                <SecondaryText style="color: #fff;">📅 {workshopData.history[0].date}</SecondaryText>
                <SecondaryText  style="color: #fff;">🏠  {workshopData.history[0].place} </SecondaryText>

                <div class="wrap-btns">
                    <Button style="margin-right: 15px; color:#fff;"on:click={() => {moreInfoMenu[0].setOpen(true); showMoreInfo = !showMoreInfo }} touch variant="outlined">
                        <Label>Learn more</Label>
                    </Button>
                    <Button style="background-color: {workshopData.promo.brandColor}; margin: 0 px;"on:click={() => {moreInfoMenu[0].setOpen(true); showMoreInfo = false}} touch variant="raised">
                        <Label style="color: #fff;">Registration</Label>
                    </Button>
                </div>
            </Text>

        </Item>
        <!-- {/each} -->
    </List>

<style>
    .wrap-hide-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-content: center; */
    align-items: center;
    padding: 20px 0;
}

.wrap-hide-menu,
.wrap-btns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.wrap-btns {
    margin-top: 15px;

    justify-content: flex-end;
    align-content: flex-end;
    align-items: flex-end;
    /* color: #47babb; */
    /* margin-top: -20px;    */
}
</style>