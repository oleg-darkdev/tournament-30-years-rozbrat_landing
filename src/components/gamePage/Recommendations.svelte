<script>
import Sorry from '../Sorry.svelte';
import Carousel from '../landingPage/Carousel.svelte'
import Card, {
    Content,
    Media,
    MediaContent,
} from '@smui/card';



export let sorryBgColor;
export let recommendations;
</script>

<div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; width: 100%;">
     {#if recommendations.length < 1}
        <Sorry {sorryBgColor}/>
    {:else}
        <!-- {#each recommendations as recommendation} -->
            <Carousel 
                games={recommendations}
                controlColor={'white'}
                controlScale={0.8}
                autoplay={true}
                autoplaySpeed={3000}
            />
            <!-- <Card style="min-width: 300px; margin: 5px; margin: 5px;">
                <Media class="card-media-square" style="background-image: url({expansion.img})" aspectRatio="square">
                    <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                    <h2 class="mdc-typography--headline6" style="margin: 0; color: {game.promo.brandColor};">
                        {expansion.name}
                    </h2>
                    </div>
                </Media>
            </Card> -->
        <!-- {/each} -->
    {/if}
</div>