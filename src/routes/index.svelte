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
    <div class="index-menu bg-img-index" style="">
        <Card>
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <div
              style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
            >
              <h2 class="mdc-typography--headline6" style="margin: 0;">
                A card with media.
              </h2>
              <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                And a subtitle.
              </h3>
            </div>
          </MediaContent>
        </Media>
        <Content class="mdc-typography--body2">
          It's all in this card. It's a veritable smorgasbord of card features.
        </Content>
      </PrimaryAction>
    </Card>
    </div>
<style>
    .index-menu {
        display: flex; 
        justify-content: center;
        align-items: center;  
        flex-direction: column; 
   /* Full height */
  height: 50%; 
        padding: 4%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    }

 .bg-img-index {
     background-image: url('https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/main_bg.png');
  }
</style>