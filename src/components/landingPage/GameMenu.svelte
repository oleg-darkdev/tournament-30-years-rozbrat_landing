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
import MenuBtn from './MenuBtn.svelte'
import WorkshopsList from './WorkshopList.svelte';
import workshops from '../../data/workshopsList'

let showMenu, showWorkshops, showSupport, showFaq;

export let gameData;

</script>


<Card style="min-width: 370px; width: auto; max-width: 760px;  margin: 5px; background-color: {gameData.promo.brandColor}; ">
  <!-- <PrimaryAction on:click={() => clicked++}> -->
    <Media class="card-media-16x9 {showMenu ? 'hidden': ''}" aspectRatio="16x9" style="background-image: url({gameData.promo.logo});">
      <MediaContent>

      </MediaContent>
    </Media>
    <Content style="" class="mdc-typography--body2">
        <h2 class="mdc-typography--headline6" style="margin: 0;">
            {gameData.promo.name}
          </h2>
        <h3
        class="mdc-typography--subtitle2 {showMenu ? 'hidden': ''}"
        style="margin: 0 0 10px; color: #888;"
        >
            {gameData.promo.shortDescription}
        </h3>
   
      <div style="display: flex; align-items: center; flex-direction: column;">
        {#if !showMenu & !showWorkshops & !showSupport & !showFaq}
          <Card style='width: 250px; background-color: #191B1B;  height: 80px; margin-bottom: 15px;'>
              <PrimaryAction style="display: flex; align-items: center;" on:click={() => showMenu = !showMenu} padded>
                  <span style="font: 35px 'grafitty';">GAME MENU</span>
              </PrimaryAction>
          </Card>
        {/if}
        {#if showMenu}
          <!-- {#each firstMenuText as menuItem} -->
            <MenuBtn color='#191B1B'>                        
                <a href='games/{gameData.promo.id}'><span style="font: 40px 'grafitty';  color: #fff;">About ℹ️</span> </a>
            </MenuBtn>
              <MenuBtn color='#191B1B'>                        
                <span style="font: 40px 'grafitty';  color: #fff;" on:click={() => {
                showWorkshops = !showWorkshops;
                showMenu = !showMenu;
                // console.log(workshops.a.history);
              }}>Workshops 🧠</span>
            </MenuBtn>
              <MenuBtn color='#191B1B' on:click={() => showFaq = !showFaq}>                        
                <span style="font: 40px 'grafitty';  color: #fff;">FAQ`s ⁉️</span>
            </MenuBtn>
              <MenuBtn color='#191B1B' on:click={() => showSupport = !showSupport}>                        
                <span style="font: 40px 'grafitty';  color: #fff;">Support 💙</span>
            </MenuBtn>
          <!-- {/each}  -->
        {/if}
        {#if !showWorkshops}
            <WorkshopsList workshopData={workshops.a}/>
        {/if}
      </div>
    </Content>
  <!-- </PrimaryAction> -->
</Card>