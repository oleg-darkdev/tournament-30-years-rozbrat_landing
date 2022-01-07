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

import BlackFaq from '../layout/BlackFaq.svelte';
import ColorFaq from '../layout/ColorFaq.svelte';

import workshops from '../data/workshopsList'

let gamesShortNames = workshops.map(function(workshopData) {
 return {shortName: workshopData.shortName, show: true}
});

const socialMini = [{
        img: "img/social/insta_mini.png"

    },
    {
        img: "img/social/telega_mini.png"

    },
    {
        img: "img/social/fb_mini.png"

    },
    {
        img: "img/social/in_mini.png"

    },
    {
        img: "img/social/tweeter_mini.png"

    },

];

let moreInfoMenu = [''],
    showMoreInfo = false;

    console.log(workshops)

// let gamesArray = Object.values(gamesNames);
// console.log(gamesNames)	
</script>

<ColorFaq title="Upcoming workshops 🎯" >
<div style=" display: flex; flex-direction: row;">
    <Card style="width: 310px; height: auto; margin-right: 15px; "  variant="outlined" padded>
        <Content style="">
            <h2 class="mdc-typography--headline6" style="margin: 0; font: 24px 'grafitty'; color:#47babb; ">
                Sort your workshops
            </h2>
            <h3
                class="mdc-typography--subtitle2"
                style="margin: 0 0 10px; color: #888;"
                >
                by game
            </h3>
            <!-- <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; padding: 0; margin: 0"> -->
            {#each Object.values(gamesShortNames) as game}
            <!-- <Card style="height: 50px; width: 100px; margin: 10px;">
                <Media style="background-image: url({game.img});" class="card-media-16x9" aspectRatio="16x9">
                </Media>
            </Card> -->
            <Button style="margin: 2.5px;" on:click={() => game.selected = !game.selected} touch variant={game.selected ? 'outlined' : "unelevated"}>
                <Label>#{game.shortName}</Label>
            </Button>
            {/each}
            <!-- </div> -->
        </Content>
    </Card>
    <List style="max-width: 560px; width: auto; " threeLine>
        {#each workshops as workshop, i}
        <Item style="border: 2px solid #47babb; min-height: 135px; height: auto; display: flex; flex-direction: row;  justify-content: flex-start;  flex-wrap: wrap;">
            <Menu style="width: 100%; height: 100%;" bind:this={moreInfoMenu[i]}>
                <div class="wrap-hide-menu" >
                    {#if showMoreInfo}
                    {#each socialMini as social, i}
                    <Card style="width: 70px; margin: 5px;">
                        <PrimaryAction on:click={() => location.href = workshop.social}>
                            <Media class="card-media-square" style="background-image: url('{social.img}');" aspectRatio="square">
                            </Media>
                        </PrimaryAction>
                    </Card>
                    {/each}

                    {:else}
                    <div style="display: flex; flex-direction: column; justify-content: center;">

                        <h2 class="mdc-typography--headline6"
                            style="color: #fff; font-family: 'grafitty'; margin: -5px;"
                            >
                            Go to Eventbrite?
                        </h2>
                        <Card style='width: 300px; background-color: #47babb;  height: 70px; '>
                            <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log(workshop.eventbrite)} padded>
                                <span style="font: 35px 'grafitty';">REGISTRATION</span>
                            </PrimaryAction>
                        </Card>
                    </div>
                    {/if}
                </div>
            </Menu>
            
            <Card style="height: 100px; width: 200px; margin: 15px;">
                <Media style="background-image: url({workshop.logo});" class="card-media-16x9" aspectRatio="16x9">
                    <MediaContent>
                    </MediaContent>
                </Media>
            </Card>

            <Text>
                <PrimaryText style="color: #47babb;">{workshop.name} </PrimaryText>
                <SecondaryText style="color: #47babb;">📅 {workshop.date}</SecondaryText>
                <SecondaryText  style="color: #47babb;">🏠  {workshop.place} </SecondaryText>

                <div class="wrap-btns">
                    <Button color="primary" style="margin-right: 15px;"on:click={() => {moreInfoMenu[i].setOpen(true); showMoreInfo = !showMoreInfo }} touch variant="outlined">
                        <Label>Learn more</Label>
                    </Button>
                    <Button style="margin: 0 px;"on:click={() => {moreInfoMenu[i].setOpen(true); showMoreInfo = false}} touch variant="raised">
                        <Label>Registration</Label>
                    </Button>
                </div>
            </Text>

        </Item>
        {/each}
    </List>
</div>
</ColorFaq>

<!--
 Тут будут прошедшие воркшопы, с использованием другого компонента для отображения информации о воркшопе.
<BlackFaq title="">

</BlackFaq>

<ColorFaq title="">

</ColorFaq> -->
<!--

<BlackFaq title="">

</BlackFaq>

<ColorFaq title="">

</ColorFaq> -->

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
