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

<Card style="margin-bottom: 15px; width: 100%; max-width: auto; background-color: {promo.brandColor};">
<Media  style="height: 250px; background-image: url({moreInfo.roles.banner});"/>
    <Content class="mdc-typography--body2" style="color: #191B1B;">
        <h2 class="mdc-typography--headline6" style="margin: 0;">
            Characters available in the game
        </h2>
        {#each moreInfo.roles.description as description}
            <p>{description}</p>        
        {/each}
    </Content>
</Card>


