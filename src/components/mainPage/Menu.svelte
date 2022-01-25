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
import firstMenuText from '../../data/firstMenuText';

let getStarted;
</script> 

<Card style='width: 380px; margin: 0; height: auto; background-color: #000000;'>
    {#if !getStarted}
    <Media  style='background-image: url("img/glad_to_see_you.png");  height: 390px; width: 100%;' ></Media>
    {/if}
    <Content class="mdc-typography--body2" style="display: flex;
        align-items: center; background-color: #050506; flex-direction: column;
        ">
        {#if !getStarted}
        <Card style='width: 250px; background-color: #47babb;  height: 80px; margin-bottom: 15px;'>
            <PrimaryAction style="display: flex; align-items: center;" on:click={() => getStarted = !getStarted} padded>
                <span style="font: 35px 'grafitty';">Get started</span>
            </PrimaryAction>
        </Card>

        {:else}
        {#each firstMenuText as menuItem}
        <Card style='width: 330px; border: 2px solid #47babb; height: 90px; margin-bottom: 10px;  '>
            <PrimaryAction style="display: flex;      align-items: center; "  padded>
                <!-- on:click={() => {

                menuItem.variable = !menuItem.variable;
                // console.log(menuItem.variable )
                }} -->
                <a href={menuItem.link}><span style="font: 40px 'grafitty';">{menuItem.text} {menuItem.emoji}</span> </a>
            </PrimaryAction>
        </Card>
        {/each}
        {/if}
    </Content>
</Card>