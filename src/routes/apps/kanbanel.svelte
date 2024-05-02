<script>
    import Paper, {Title, Subtitle} from '@smui/paper/dist';
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton from '@smui/icon-button';
 import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text';
 
  let teamName = '';


  import DaysCard from './kanbanel/DayCard.svelte';
  


 const days = [
    {
        dayNumber: 1,
        img: '',
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis.']
    },
    {
        dayNumber: 2,
        img: '',
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis.']
    },
 ];

 let today = 1,
 startGame = true,
 startdays = false;
 let brandColor = '#702282';

</script>

<div class="app-wrap">
 
   <Paper style="width: auto; width: 90%; margin: 15px 20%; max-width: 1200px; background-color: {brandColor};" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">Kanbanel</Title>
      <Content style="display: flex; align-items: center;">
        {#if startGame}
            <Card style="width: 450px;">
                <Media class="card-media-16x9" aspectRatio="16x9" />
                    <Content class="mdc-typography--body2">
                        <h2 class="mdc-typography--headline6" style="margin: 0;">
                            A card with media.
                        </h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <div>
                            <!-- <Textfield bind:value={teamName} label="Label">
                                <HelperText slot="helper">Your team name</HelperText>
                            </Textfield> -->
                            <Textfield bind:value={teamName} />
                        </div>
                        <Card style='width: 280px; margin: 5px; border: 2px solid {brandColor};  height: 80px; '>
                            <PrimaryAction style="display: flex; align-items: center;" on:click={() => {
                                startGame = false;
                                startdays = true;
                            }} padded>
                                <span style="font: 35px 'grafitty'; color: {brandColor};">Continue</span>
                            </PrimaryAction>
                        </Card>
                    </Content>
                    <!-- <Actions fullBleed>
                        <Button on:click={() => clicked++}>
                        <Label>Action</Label>
                        <i class="material-icons" aria-hidden="true">arrow_forward</i>
                        </Button>
                    </Actions> -->
                </Card>

        {:else}
            {#if startdays}
                {#each days as day }
                    {#if day.dayNumber == today}
                        <DaysCard {day} bind:today {brandColor} {days}/>
                    {/if}
                {/each}
            <!-- {:else} -->


            {/if}
        {/if}
      </Content>
    </Paper>

</div>



<style>
  .app-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 auto;
  }
 
</style>