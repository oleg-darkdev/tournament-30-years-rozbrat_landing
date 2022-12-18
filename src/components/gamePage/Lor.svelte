<script>
import Card, {
    Content,
    Media,
} from '@smui/card';

export let promo;
export let lor;
</script>

<Card style="margin-bottom: 15px; width: auto; max-width: 760px; background-color: {promo.brandColor};">
    <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({lor.img})"/>
        <Content class="mdc-typography--body2">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
                {promo.name}
            </h2>
    {#each lor.text as text}
    <p>{text}</p>
    {/each}
</Content>
</Card>
