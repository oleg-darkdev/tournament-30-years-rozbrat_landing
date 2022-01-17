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


export let moreInfo;
export let promo;
</script>


<Card style="margin-bottom: 15px; width: auto; max-width: auto; background-color: {promo.brandColor};">
<Media  style="height: 250px; background-image: url({moreInfo.lorImg});"/>
<Content class="mdc-typography--body2" style="color: #191B1B;">
    <h2 class="mdc-typography--headline6" style="margin: 0;">
        {promo.name}
    </h2>
    {#each moreInfo.description as description}
        <p>{description}</p>        
    {/each}

    <div style="        display: flex;
        flex-direction: row;
        flex-wrap: wrap;">
        <Button
            variant="outlined"
            class="button-shaped-round"
            >
            <Label style="font: 24px 'grafitty'; color:#191B1B;">{moreInfo.players} Players</Label>
            <Icon style="color:#191B1B;" class="material-icons">groups</Icon>
        </Button>
        <Button
            variant="outlined"
            class="button-shaped-round"
            >
            <Label style="font: 24px 'grafitty'; color:#191B1B;">{moreInfo.age} 8+ age</Label>
            <Icon style="color:#191B1B;" class="material-icons">face</Icon>
        </Button>
        <Button
            variant="outlined"
            class="button-shaped-round"
            >
            <Label style="font: 24px 'grafitty'; color:#191B1B;">{moreInfo.time} min.</Label>
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


