<script>
import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
import Menu from '@smui/menu';
 import Button, { Label } from '@smui/button';
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

 let gamesTemplates = {
     lgbt: {
        name: '🌈 LTGBT+',
        img: 'img/games-logos/lgbt.png'
     },
    eco: {
        name: '☘️ Eco bunt - eco activism',
        img: 'img/games-logos/eco.png'
     },
    fnb: {
        name: '🥕 FNB - food not bombs',
        img: 'img/games-logos/fnb.png'
     },
    linux: {
        name: '🐧 Open source. Linux Operating System.',
        img: ''
     },
    wtbj: {
        name: '🎥 Repression of journalists in Belarus.',
        img: ''
     },
    wikileaks: {
        name: '🌎 Wikileaks.',
        img: ''
     },
    katyn: {
        name: '🧹 KATYN`40. Repression and archaeological expeditions.',
        img: ''
     },
    urbanism: {
        name: '🕋 Urbanism. Society of the future.',
        img: ''
     },
    //      eco: {
    //     name: '',
    //     img: ''
    //  },
    //      eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },
    //          eco: {
    //     name: '',
    //     img: ''
    //  },

 }
const workshops = [
    {
        game: gamesTemplates.lgbt,
        date: '19.02.2022',
        place: 'ul. Puławska 37, Warsawa',
        social: [ // 1- inst, 2 - teleg, 3- fb, 4- in, 5- tw
            "",
            "",
            "",
            "",
            "",
        ],
        eventbrite: 'https://www.eventbrite.com/',
    },
    {
        game: gamesTemplates.eco,
        date: '22.02.2022',
        place: 'ul. Puławska 37, Warsawa',
        social: [ // 1- inst, 2 - teleg, 3- fb, 4- in, 5- tw
            "",
            "",
            "",
            "",
            "",
        ],
        eventbrite: 'https://www.eventbrite.com/',
    },
    {
        game: gamesTemplates.fnb,
        date: '22.02.2022',
        place: 'ul. Puławska 37, Warsawa',
        social: [ // 1- inst, 2 - teleg, 3- fb, 4- in, 5- tw
            "",
            "",
            "",
            "",
            "",
        ],
        eventbrite: 'https://www.eventbrite.com/',
    },
];

  const socialMini = [
	{
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

let moreInfoMenu = '',
showMoreInfo = false;
</script>



<ColorFaq title="Upcoming workshops 🎯">
 <List style="max-width: 760px; width: auto;" threeLine>
     {#each workshops as workshop}
    <Item style="border: 2px solid #47babb; min-height: 135px; height: auto; display: flex; flex-direction: row;  justify-content: center;  flex-wrap: wrap;">
    <Menu style="width: 100%; height: 100%;" bind:this={moreInfoMenu}>
        <div class="wrap-hide-menu" >
        {#if showMoreInfo}
        {#each socialMini as social, i}
      <Card style="width: 70px; margin: 5px;"> 
          <!--   -->
				<PrimaryAction on:click={() => location.href = workshop.social[i]}>
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
      <Media style="background-image: url({workshop.game.img});" class="card-media-16x9" aspectRatio="16x9">
        <MediaContent>
          </MediaContent>
      </Media>
     </Card>

      <Text>
        <PrimaryText style="color: #47babb;">{workshop.game.name} </PrimaryText>
        <SecondaryText style="color: #47babb;">📅 {workshop.date}</SecondaryText>
        <SecondaryText  style="color: #47babb;">🏠  {workshop.place} </SecondaryText>

      <div class="wrap-btns">
           <Button color="primary" style="margin-right: 15px;"on:click={() => {moreInfoMenu.setOpen(true); showMoreInfo = !showMoreInfo }} touch variant="outlined">
                    <Label>Learn more</Label>
                </Button>
                <Button style="margin: 0 px;"on:click={() => {moreInfoMenu.setOpen(true); showMoreInfo = false}} touch variant="raised">
                    <Label>Registration</Label>
                </Button>
            </div>
      </Text>


    </Item>
   {/each}
  </List>
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
        .wrap-hide-menu, .wrap-btns  {
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