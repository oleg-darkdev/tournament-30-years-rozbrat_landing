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
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';


 const btnData = [
   'Manager', 'CFD', 'Product owner'
 ]


 export let day;
 export let today;
 export let days;
 export let brandColor;
</script>



        <Card style="width: 450px;">
            <!-- <PrimaryAction on:click={() => clicked++}> -->
                <Media style="background-image: url({day.img}); " class="card-media-16x9" aspectRatio="16x9" />
                <Content class="mdc-typography--body2">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                    Day {day.dayNumber}
                </h2>
                <div style="margin: 0 0 25px 0 ;">
                    {#each day.text as text}
                        <p>{text}</p>
                    {/each}
                </div>
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;">
            {#each btnData as text}
                <Card style='width: 280px; margin: 5px; border: 2px solid {brandColor};  height: 80px; '>
                    <PrimaryAction style="display: flex; align-items: center;" on:click={() => console.log(text)} padded>
                        <span style="font: 35px 'grafitty'; color: {brandColor};">{text}</span>
                    </PrimaryAction>
                </Card>
            {/each}
        </div>
                </Content>
            <!-- </PrimaryAction> -->
            <Actions>
                <ActionButtons>
                {#if today != days[0].dayNumber}
                    <Button on:click={() => today--}>
                        <Label>Previous Day</Label>
                    </Button>
                {/if}
                {#if today != days[days.length - 1].dayNumber}
                    <Button on:click={() => today++}>
                        <Label>Next day</Label>
                    </Button>
                {/if}
                </ActionButtons>
                <ActionIcons>
                <IconButton
                    class="material-icons"
                    on:click={() => clicked++}
                    title="More options">more_vert</IconButton
                >
                </ActionIcons>
            </Actions>
            </Card>
