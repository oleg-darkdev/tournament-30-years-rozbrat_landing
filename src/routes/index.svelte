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
import firstMenuText from '../data/firstMenuText';
import SocialPanel from '../layout/SocialPanel.svelte'

let getStarted = false;
</script>

<svelte:head>
    <title>DarkDev Games</title>
</svelte:head>
<!--  background-color:#191B1B; -->
    <div class="index-menu bg-img bg-img-index" style="">
        <section style="width: 430px; margin: 0; ">
            <div class="tur-bg" >
                <Card style='width: 380px; margin: 0; height: auto; background-color: #000000;'>
                    <!-- {#if !getStarted}
                    <Media  style='background-image: url("img/glad_to_see_you.png");  height: 390px; width: 100%;' ></Media>
                    {/if} -->
                    <Content class="mdc-typography--body2" style="display: flex;
                        align-items: center; background-color: #050506; flex-direction: column;
                        ">
                        <!-- {#if !getStarted}
                        <Card style='width: 250px; background-color: #47babb;  height: 80px; margin-bottom: 15px;'>
                            <PrimaryAction style="display: flex; align-items: center;" on:click={() => getStarted = !getStarted} padded>
                                <span style="font: 35px 'grafitty';">Get started</span>
                            </PrimaryAction>
                        </Card>

                        {:else} -->
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
                        <!-- {/if} -->
                    </Content>
                </Card>
            </div>
        </section>

        <SocialPanel title="I'm on social media"/>

            </div>
            <!--

    {#each workshopsCatalog as workshop}
    <Card style="width: 340px; background-color: #050506; margin: 10px;">
      <PrimaryAction on:click={() => console.log('click')}>
        <Media class="card-media-16x9" style="background-image: url({workshop.img});" aspectRatio="16x9"></Media>
        <Content class="mdc-typography--body2">
          <h2 class="mdc-typography--headline6" style="margin: 0; font: 54px'grafitty'; color: #fff;">{workshop.name}</h2>
          <h3 class="mdc-typography--subtitle2" style="margin: 0 0 10px; font-family: roboto; color: #888;">{workshop.description}</h3>
        </Content>
      </PrimaryAction>
     </Card>
            {/each} -->

<style>
    .index-menu {
        display: flex; 
        justify-content: center;
        align-items: center;  
        flex-direction: column; 
        width: 100%;
        height: 100%;     
           
    }

 .bg-img-index {
     background-image: url(img/bg/main_bg.png);
  }
</style>