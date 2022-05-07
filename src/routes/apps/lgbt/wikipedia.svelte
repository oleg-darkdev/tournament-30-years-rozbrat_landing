<script>
    import Paper, {Title, Content, Subtitle} from '@smui/paper/dist';
        import Card, {
        PrimaryAction,
        Actions,
        ActionButtons,
        ActionIcons,
        Media,
        MediaContent,
    } from '@smui/card';

    import FlagCard from '../../../components/apps/lgbt/wikipedia/FlagCard.svelte';
    import SmartyFlagList from '../../../components/apps/lgbt/wikipedia/SmartyFlagList.svelte'
    // import TabPanel from '../../components/apps/lgbt/TabPanel.svelte';
    import flags from '../../../data/gamesApps/lgbt/arrayFlags.js';
    import AlchimIngridients from '../../../components/apps/lgbt/wikipedia/AlchimIngridients.svelte';

    let brandColor = '#702282';
</script>

<div class="app-wrap">
 
   <Paper style="width: auto; width: 90%; margin: 15px 20%; max-width: 1200px; background-color: #702282;" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">LGBTQ+ Wikipedia</Title>
      <Content>
 
        <!-- <Card variant="outlined" style="margin-bottom: 25px;" padded>
              <div class="smartyFlagList-wrap">
                <SmartyFlagList flags={flags.slice(0, 9)}/>
                <SmartyFlagList flags={flags.slice(10, 19)}/>
                <SmartyFlagList flags={flags.slice(20, 29)}/>
                <SmartyFlagList flags={flags.splice(30, 39)}/> 
              </div>
        </Card> -->
        <AlchimIngridients {flags} />
        <div class="flags">
          {#each flags as flag}
            <FlagCard {flag} {brandColor}/>
          {/each}
          </div>
      </Content>
    </Paper>

</div>



<style>
  .app-wrap {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    padding: 0 auto;
  }

  .flags {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    min-width: 350px;
    margin: 0;
    padding: 0;
  }

  .smartyFlagList-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
</style>