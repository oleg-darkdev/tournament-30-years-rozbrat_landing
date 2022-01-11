<script>
import Card, {Content, PrimaryAction, Media} from '@smui/card';
import Paper, { Title, Subtitle } from '@smui/paper';
import socialData from '../data/social/socialBlack';

export let title = ''
</script>

  <Paper style="margin: 0 auto; max-width: 340px; height: auto; margin-bottom: 25px;" class="paper-demo">
	  <!--  👇 -->
    <Title style="font: 30px 'grafitty'; text-align: center;">{title + ` 💙`}</Title> 
    <!-- <Subtitle>This is a sheet of paper.</Subtitle> -->
    <Content style="display: flex; flex-direction: row; align-content: center; width: 100%; min-width: 300px; flex-wrap: wrap;">
	{#each Object.values(socialData) as social}
      <Card style="width: 70px; margin: 5px;">
				<PrimaryAction on:click={() => location.href = social.link}>
        <Media class="card-media-square" style="background-image: url('{social.img}');" aspectRatio="square">
        </Media>
				</PrimaryAction>
      </Card>
		{/each}

		</Content>
  </Paper>

