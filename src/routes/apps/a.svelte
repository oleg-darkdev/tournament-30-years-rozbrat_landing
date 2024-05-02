<script>
import Paper, {Title, Content, Subtitle} from '@smui/paper/dist';
import Card, {
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';

let brandColor = '#702282';
</script>

<div class="app-wrap">
   <Paper style="width: auto; width: 90%; margin: 15px 20%; max-width: 1200px; background-color: {brandColor};" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">A</Title>
      <Content style="display: flex; align-items: center;">

            <Card>
                <div style="padding: 1rem;">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                    A card with media.
                </h2>
                <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
                    And a subtitle.
                </h3>
                </div>
                <PrimaryAction on:click={() => clicked++}>
                <Media class="card-media-16x9" aspectRatio="16x9" />
                <Content class="mdc-typography--body2"/>
                </PrimaryAction>
            </Card>

      </Content>
    </Paper>
</div>
