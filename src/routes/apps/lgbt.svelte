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

    import FlagCard from '../../components/apps/lgbt/wikipedia/FlagCard.svelte';
    // import SmartyFlagList from '../../components/apps/lgbt/wikipedia/SmartyFlagList.svelte'
    // import TabPanel from '../../components/apps/lgbt/TabPanel.svelte';
    import allflags from '../../data/gamesApps/lgbt/arrayFlags.js';
    import AlchimIngridients from '../../components/apps/lgbt/wikipedia/AlchimIngridients.svelte';

    const lesbianFlags = allflags.lesbian,
          bearFlags = allflags.bear,
          gayFirstPartFlags = allflags.gayFirstPart,
          gaySecondPartFlags = allflags.gaySecondPart, 
          bisexualFlags = allflags.bisexual;

    let showWikipedia = false,
        wikipediaData = [];

    let brandColor = '#702282';

    let branches = [
      {
        data: lesbianFlags,
        name: 'Lesbian',
        img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/lesbian.png`,
      },
      {
        data: gayFirstPartFlags,
        name: '',
        img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/gay_1.png`,
      },
      // {
      //   data: gaySecondPartFlags,
      //   name: 'Bear',
      //   img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/bear.png`,
      // },
      {
        data: bearFlags,
        name: 'Bear',
        img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/bear.png`,
      },
      {
        data: bisexualFlags,
        name: 'Bisexual',
        img: `https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/main__menu/bisexual.png`,
      }

    ]
</script>

<div class="app-wrap">
 
   <Paper style="width: auto; width: 90%; margin: 15px 20%; max-width: 1200px; background-color: {brandColor};" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">LGBTQ+ Wikipedia</Title>
      <Content style="display: flex; align-items: center;">
        <div class="branches-wrap" style="{showWikipedia ? 'display: none': ''}">
          {#each branches as branch}
          <Card style="width: 300px; margin: 5px;" on:click={() => {
              showWikipedia = true;
              wikipediaData = branch.data;
            }}>
            <Media class="card-media-square" style="background-image: url({branch.img});" aspectRatio="square">
            </Media>
          </Card>
          {/each}
        </div>
        <!-- <Card variant="outlined" style="margin-bottom: 25px;" padded>
              <div class="smartyFlagList-wrap">
                <SmartyFlagList flags={flags.slice(0, 9)}/>
                <SmartyFlagList flags={flags.slice(10, 19)}/>
                <SmartyFlagList flags={flags.slice(20, 29)}/>
                <SmartyFlagList flags={flags.splice(30, 39)}/> 
              </div>
        </Card> -->
      <div class="{showWikipedia ? '': 'hidden'}">
          <AlchimIngridients {wikipediaData} />
          <div class="flags">
            {#each wikipediaData as flag}
              <FlagCard {flag} {brandColor}/>
            {/each}
          </div>
      </div>

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
  .branches-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }
  .flags {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    /* max-width: 700px; */
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