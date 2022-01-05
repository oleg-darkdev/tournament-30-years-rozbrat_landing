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
import List, {
    Item,
    Separator,
    Text
} from '@smui/list';
import DataTable, {
    Head,
    Body,
    Row,
    Cell
} from '@smui/data-table';

import Banner from '../../layout/BannerSection.svelte'
import BlackFaq from '../../layout/BlackFaq.svelte';
import ColorFaq from '../../layout/ColorFaq.svelte';

let game = {
    promo: {
        name: 'A GAME OF WOODLAND MIGHT AND RIGHT',
        img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/1-RootGameBox-Edit-Web_640x.png?v=1595294735',
        status: ''
    },
    croundfandingLink: '',
    goal: '',
    educationMoments: ['', ''],
    description: [`Root is a game of woodland might and right. Stalk the woods as one of the Vagabonds, seize the initiative with the Eyrie birds of prey, rule over your subjects as the Marquise de Cat, or command the Woodland Alliance to create a new order. With creatures and cunning, you'll rule a fantastic forest kingdom in the ultimate asymmetric board game of adventure and war.`],
    targetAudience: '',
    resources: [{
            name: 'Update Kit (1st and 2nd Printings Only)',
            type: 'pdf',
            link: ''
        },
        {
            name: 'Learning to Play',
            type: 'pdf',
            link: ''
        },
        {
            name: 'Walking Through Root',
            type: 'pdf',
            link: ''
        },
        {
            name: 'Root Clarifications and Errata',
            type: 'pdf',
            link: ''
        },

    ],

    workShopsReports: [{
        date: '',
        img: '',
        linkInstagram: ''
    }],
    photos: [``, ``, ``, ``, ],
    fullInfo: {
        lorImg: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/root-fox_23bf465c-4fac-4914-b44a-e426e264917a.jpg',
        LOR: ['Root is a game of adventure and war where 2 to 4 players battle for control of a vast wilderness.', 'The nefarious Marquise de Cat has seized the great woodland, intent on harvesting its riches. Under her rule, the many creatures of the forest have banded together. This Alliance will seek to strengthen its resources and subvert the rule of Cats. In this effort, the Alliance may enlist the help of the wandering Vagabonds who are able to move through the more dangerous woodland paths. Though some may sympathize with the Alliance’s hopes and dreams, these wanderers are old enough to remember the great birds of prey who once controlled the woods.', 'Meanwhile, at the edge of the region, the proud, squabbling Eyrie have found a new commander who they hope will lead their faction to resume their ancient birthright.', 'The stage is set for a contest that will decide the fate of the great woodland. It is up to the players to decide which group will ultimately take root.'],
        сharacters: [{
                name: 'The Marquise de Cat',
                description: 'The Cats play a game of engine building and logistics while attempting to police the vast wilderness. By collecting Wood they are able to produce workshops, lumber mills, and barracks. They win by building new buildings and crafts.',
                img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Marquise-de-Cat.png'
            },
            {
                name: 'The Eyrie Dynasties',
                description: 'The Eyrie musters their hawks to take back the Woods. They must capture as much territory as possible and build roosts before they collapse back into squabbling.',
                img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Eyrie-Dynasties.png'
            },
            {
                name: 'The Vagabond',
                description: 'Meanwhile, the Vagabond plays all sides of the conflict for their own gain, while hiding a mysterious quest. Explore the board, fight other factions, and work towards achieving your hidden goal.',
                img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Vagabond_6206fe8d-03e4-413a-a1cd-490979470aca.png'
            },
            {
                name: 'The Woodland Alliance',
                description: 'The Alliance hides in the shadows, recruiting forces and hatching conspiracies. They begin slowly and build towards a dramatic late-game presence—but only if they can manage to keep the other players in check.',
                img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Marquise-de-Cat.png'
            },
            {
                name: 'The Eyrie Dynasties',
                description: 'The Eyrie musters their hawks to take back the Woods. They must capture as much territory as possible and build roosts before they collapse back into squabbling.',
                img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Eyrie-Dynasties.png'
            },
            {
                name: 'The Woodland Alliance',
                description: 'The Alliance hides in the shadows, recruiting forces and hatching conspiracies. They begin slowly and build towards a dramatic late-game presence—but only if they can manage to keep the other players in check.',
                img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Marquise-de-Cat.png'
            },

        ]
    },
    // таблицей!
    updates: [{
        date: '22.10.2020',
        persons: 'Add: Doctor, Crow',
        mechanic: '',
        map: '',
        version: '0.0.1'
    }, ],
    videos: [{
            img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/51-RootBaseGameBoard-Winter-Editv2-Web_1024x1024.png?v=1617976948',
            link: 'https://www.youtube.com/',
            name: 'Walking Through Root',
            type: 'video',
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/1-RootGameBox-Edit-Web_1024x1024.png?v=1595294735',
            link: 'https://www.youtube.com/',
            name: 'Root Clarifications and Errata',
            type: 'video',
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/51-RootBaseGameBoard-Winter-Editv2-Web_1024x1024.png?v=1617976948',
            link: 'https://www.youtube.com/',
            name: 'Learning to Play',
            type: 'video',
        },
        //   {
        //   img: '',
        //   link: ''
        // }
    ],
    expansions: [{
            name: 'The Riverfolk Expansion',
            img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/10-RootUnderworldBox-Edit-Web_250x.png?v=1595310452',
            fullInfo: {

            }
        },
        {
            name: 'The Clockwork Expansion',
            img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/17-RootClockworkGameBox-Edit-Web_250x.png?v=1595303856',
            fullInfo: {

            }
        },
        // {
        //     name: 'The Underworld Expansion',
        //     img: 'https://cdn.shopify.com/s/files/1/0106/0162/7706/products/20-RootRiverfolkBox-Edit-Web_250x.png?v=1595306138',
        //     fullInfo: {

        //     }
        // },

    ]
};
</script>


<svelte:head>
    <title>☘️ Eco bunt - eco activism</title>
</svelte:head>

<BlackFaq title="☘️ Eco bunt - eco activism" color='#339A37'>
    <!-- рекомендации настолок из этой каттегории -->
    <Card style="margin-bottom: 15px; width: auto; max-width: 100%;">
        <Media  style="height: 250px; background-image: url({game.promo.img});"/>
            <Content style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;">
                <!-- <h2 class="mdc-typography--headline6" style="margin: 0;">
A card with media.
                </h2> -->
                <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint. -->

                <Card style='width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => location.href = '/games/eco'} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">PLAY 🕹️</span>
                    </PrimaryAction>
                </Card>
                 <Card style='width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => location.href = 'https://patronite.pl/darkdev.games'} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">FUNDRAISING</span>
                    </PrimaryAction>
                </Card>
                             <Card style='width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => location.href = "/workshops"} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">WORKSHOP 🎯</span>
                    </PrimaryAction>
                </Card>
                <Card style='width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log('sorry')} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">BUY 🛒</span>
                    </PrimaryAction>
                </Card>
                <Card style='width: 300px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log('s')} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">FAQ ⁉️</span>
                    </PrimaryAction>
                </Card>
                <Card style='width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => location.href ='#about'} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">ABOUT ℹ️</span>
                    </PrimaryAction>
                </Card>
   
               
                <Card style='width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => location.href ='#resources'} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">RESOURCES 📺</span>
                    </PrimaryAction>
                </Card>
                <Card style='width: 300px; margin: 5px; border: 2px solid #339A37;  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log('s')} padded>
                        <span style="font: 35px 'grafitty'; color: #339A37;">RECORDS 📉</span>
                    </PrimaryAction>
                </Card>

            </Content>
            </Card>

            </BlackFaq>

            <!-- <Banner text='' imgUrl={game.promo.img}/> -->

            <ColorFaq  title=".... is a game of woodland might and right." color='#339A37' >
            <div id="about" style="display: flex; justify-content:  center; align-items: center;  flex-direction: column;"  >
                <!-- <Card  style="width: 460px; background-color: #339A37;">
                    <Content>        <span style="font: 24px 'grafitty';">price: 60 euro</span>
                    </Content>
                    <Actions style="background-color: #339A37;" fullBleed>
                        <Button on:click={() => console.log('click')}>
                            <Label style="font: 35px 'grafitty'; color: #000;">Buy it now</Label>
                            <i style="color: #000;" class="material-icons" aria-hidden="true">arrow_forward</i>
                        </Button>
                    </Actions>
                </Card> -->
                <div style="display: flex; flex-direction: row; max-width: 1260px; flex-wrap: wrap; margin-bottom: 15px;">
                    {#each game.videos as video}
                    <Card style="width: 280px; height:280px; margin: 5px;">
                        <PrimaryAction on:click={() => location.href = video.link}>
                            <Media class="card-media-square" style="background-image: url({video.img});" aspectRatio="square" >
                            </Media>
                        </PrimaryAction>
                    </Card>
                    {/each}
                </div>
            </div>

            <!--
            <Card style='width: 530px; background-color: #339A37;  height: 80px; '>
                <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log('instagram link')} padded>
                    <span style="font: 35px 'grafitty';">Real photos this boardgame</span>
                </PrimaryAction>
            </Card> -->

            <div style="display: flex; justify-content:  center;align-items: center;  flex-direction: column; ">

                <!-- <Paper color="primary" style="width: auto; max-width: 760px; " class="paper-demo">
<Title style="color: #fff; font: 26px 'grafitty';">{title}</Title>
                <Content style="display: flex; justify-content: center;align-items: center;  flex-direction: column; "> -->
                <Card style="margin-bottom: 15px; width: auto; max-width: 760px; background-color: #339A37;">
                    <Media  style="height: 250px; background-image: url({game.promo.img});"/>
                        <Content class="mdc-typography--body2" style="color: #191B1B;">
                            <h2 class="mdc-typography--headline6" style="margin: 0;">
                                A card with media.
                            </h2>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.

                            <div style="        display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;">

                                <Button
                                    on:click={() => console.log('click')}
                                    variant="outlined"
                                    class="button-shaped-round"
                                    >
                                    <Label style="font: 24px 'grafitty'; color:#191B1B;">2-4 Players</Label>
                                    <Icon style="color:#191B1B;" class="material-icons">groups</Icon>
                                </Button>
                                <Button
                                    on:click={() => console.log('click')}
                                    variant="outlined"
                                    class="button-shaped-round"
                                    >
                                    <Label style="font: 24px 'grafitty'; color:#191B1B;">8+ age</Label>
                                    <Icon style="color:#191B1B;" class="material-icons">face</Icon>
                                </Button>
                                <Button
                                    on:click={() => console.log('click')}
                                    variant="outlined"
                                    class="button-shaped-round"
                                    >
                                    <Label style="font: 24px 'grafitty'; color:#191B1B;">60–90 min.</Label>
                                    <Icon style="color:#191B1B;" class="material-icons">schedule</Icon>
                                </Button>
                            </div>
                        </Content>
                        <Actions>
                            <ActionButtons>
                                <Button style="color:#191B1B;" on:click={() => console.log('click')}>
                                    <Label>Action</Label>
                                </Button>
                    
                            </ActionButtons>
                            <ActionIcons>
                                <IconButton style="color:#191B1B;"
                                    on:click={() => console.log('click')}
                                    toggle
                                    aria-label="Add to favorites"
                                    title="Add to favorites"
                                    >
                                    <Icon class="material-icons" on>favorite</Icon>
                                    <Icon class="material-icons">favorite_border</Icon>
                                </IconButton>
                                <IconButton style="color:#191B1B;"
                                    class="material-icons"
                                    on:click={() => console.log('click')}
                                    title="Share">share</IconButton
                                    >
                                    <IconButton style="color:#191B1B;"
                                        class="material-icons"
                                        on:click={() => console.log('click')}
                                        title="More options">more_vert</IconButton
                                        >
                                        </ActionIcons>
                                        </Actions>
                                        </Card>

                                        <!-- </Content>
                                        </Paper> -->
                                        </div>

                                        <!-- большай карточка и куча мелких  -->
                                        <div style="display: flex; justify-content: center;align-items: center;  flex-direction: column; ">
                                            <Card style="margin-bottom: 15px; width: auto; max-width: 760px; background-color: #339A37;">
                                                <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({game.fullInfo.lorImg})"/>
                                                    <Content class="mdc-typography--body2">
                                                        <h2 class="mdc-typography--headline6" style="margin: 0;">
                                                            {game.promo.name}
                                                        </h2>
                                                        {#each game.fullInfo.LOR as paragraph}
                                                        <p>{paragraph}</p>
                                                        {/each}
                                                    </Content>

                                                    </Card>
                                                    <div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; max-width: 760px;">
                                                        {#each game.fullInfo.сharacters as сharacter}
                                                        <Card style="width: 350px; height: 400px; margin: 15px; background-color: #339A37; ">
                                                            <Media  class="card-media-16x9" aspectRatio="16x9" style="background-image: url({сharacter.img})">
                                                                <MediaContent>
                                                                </MediaContent>
                                                            </Media>
                                                            <Content style="color: #191B1B;">
                                                                <h2
                                                                    class="mdc-typography--headline6"
                                                                    style="color: #191B1B;"
                                                                    >
                                                                    {сharacter.name}
                                                                </h2>
                                                                {сharacter.description}</Content>
                                                        </Card>
                                                        {/each}
                                                    </div>
                                                    </div>
                                                    </ColorFaq>

                                                    <BlackFaq title="Expansions" color='#339A37'>
                                                        <!-- дополнения -->
                                                        <!-- Root:  -->
                                                        <div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; width: 100%;">
                                                            {#each game.expansions as expansion}
                                                            <Card style="min-width: 300px; margin: 5px; margin: 5px;">
                                                                <Media class="card-media-square" style="background-image: url({expansion.img})" aspectRatio="square">
                                                                    <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                                                                            <!-- <h2 class="mdc-typography--headline6" style="margin: 0; color: #339A37;">
                                                                                {expansion.name}
                                                                            </h2> -->
                                                                    </div>
                                                                </Media>
                                                            </Card>
                                                            {/each}
                                                        </div>
                                                    </BlackFaq>

                                                    <ColorFaq title="Resources" color='#339A37'>
                                                    <!-- ресурсы для скачивания -->
                                                    <List id="resources" style="max-width: 1200px; width: 100%; margin-bottom: 25px;" class="demo-list">
                                                        {#each game.resources.concat(game.videos) as resource}
                                                        <Item style="border: 2px solid #339A37;" on:SMUI:action={() => console.log('click')}><Text style="color: #339A37;">{resource.name}{resource.type == 'pdf' ? `.${resource.type} 📄`: `  (${resource.type} 📺)`}</Text></Item>
                                                        {/each}
                                                    </List>

                                                    <!-- <h5 style="font-family: 'grafitty'; color: #339A37;" class="mdc-typography--headline4">Updates</h5>
<DataTable stickyHeader table$aria-label="User list" style="max-width: 760px; width: 50%; margin-top: -15px;">
<Head>
<Row>
<Cell  numeric>Version</Cell>
<Cell >Persons</Cell>
<Cell >Map</Cell>
<Cell >Mechanics</Cell>
<Cell >Date</Cell>
</Row>
</Head>
<Body>
{#each game.updates as update}
<Row>
<Cell numeric>{update.version}</Cell>
<Cell>{update.persons ? update.persons : 'No changes'}</Cell>
<Cell>{update.map ? update.map : 'No changes'}</Cell>
<Cell>{update.mechanic ? update.mechanic : 'No changes'}</Cell>
<Cell>{update.date}</Cell>
</Row>
{/each}
</Body>
                                                    </DataTable> -->

                                                    </ColorFaq >

                                                    <BlackFaq title="Customers Who Bought This Item Also Bought" color='#339A37'>
                                                        <!-- рекомендации настолок из этой каттегории -->

                                                    </BlackFaq>

                                                    <!-- <ColorFaq >

                                                    </ColorFaq> -->

                                                    <!--
<BlackFaq title="">

                                                    </BlackFaq> -->

<style>

</style>
