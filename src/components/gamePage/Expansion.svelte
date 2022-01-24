<script>
import Card, {
    Content,
    Media,
    MediaContent,
} from '@smui/card';
import Sorry from '../Sorry.svelte';
    
export let sorryBgColor;
export let expansions;
</script>

<div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; width: 100%;">
    {#if expansions.length < 2}
        <Sorry {sorryBgColor}/>
    {:else}
              {#each expansions as expansion}
            <Card style="min-width: 300px; margin: 5px; margin: 5px;">
                <Media class="card-media-square" style="background-image: url({expansion.img})" aspectRatio="square">
                    <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                    <!-- <h2 class="mdc-typography--headline6" style="margin: 0; color: {game.promo.brandColor};">
                        {expansion.name}
                    </h2> -->
                    </div>
                </Media>
            </Card>
        {/each}
    {/if}
</div>