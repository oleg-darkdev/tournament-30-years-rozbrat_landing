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

export let videos;
</script>


<div id="about" style="display: flex; justify-content:  center; align-items: center;  flex-direction: column;"  >
    
    <div style="display: flex; flex-direction: row; max-width: 1260px; flex-wrap: wrap; margin-bottom: 15px;">
        {#each videos as video}
        <Card style="width: 280px; height:280px; margin: 5px;">
            <PrimaryAction on:click={() => location.href = video.link}>
                <Media class="card-media-square" style="background-image: url({video.img});" aspectRatio="square" >
                </Media>
            </PrimaryAction>
        </Card>
        {/each}
    </div>
</div>
