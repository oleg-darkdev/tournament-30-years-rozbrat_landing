<script>
import MenuBtn from './MenuBtn.svelte'
import firstMenuText from '../../data/firstMenuText';

import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
} from '@smui/card';

let getStarted;
</script> 




<Card style='min-width: 380px;  max-width:700px;  margin: 0; height: auto; background-color: #000000;'>
    <!-- {#if !getStarted}
    <Media  style='background-image: url("img/glad_to_see_you.png");  height: 390px; width: 100%;' ></Media>
    {/if} -->
    <Content class="mdc-typography--body2" style="display: flex;
        align-items: center; background-color: #050506; flex-direction: row; flex-wrap: wrap; justify-content: center;">
        <!-- {#if !getStarted}
        <Card style='width: 250px; background-color: #47babb;  height: 80px; margin-bottom: 15px;'>
            <PrimaryAction style="display: flex; align-items: center;" on:click={() => getStarted = !getStarted} padded>
                <span style="font: 35px 'grafitty';">👉 MENU</span>
            </PrimaryAction>
        </Card>

        {:else}
             -->
             {#each firstMenuText as menuItem}
                <a href={menuItem.link}><MenuBtn bg={menuItem.img}>                        
                    <!-- {menuItem.emoji} {menuItem.text} -->
                    
                </MenuBtn></a>
            {/each}
            <Card style='width: 100%; max-width: 760px; width; auto;    background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url(img/menuBtn/support_btn.png); border: 2px solid #191B1B; height: 90px; margin: 6px;  '>
                <a href='support'><PrimaryAction style="display: flex; align-items: center; " padded>                    
                   
                   </PrimaryAction> </a>
            </Card>
        <!-- {/if} -->
    </Content>
</Card>