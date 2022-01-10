<script>
import Card, {
    Content,
    Media,
    MediaContent,
} from '@smui/card';

export let promo;
export let roles;

</script>


<div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; max-width: 760px;">
    {#each roles as role}
        <Card style="width: 350px; height: 400px; margin: 15px; background-color: {promo.brandColor}; ">
            <Media  class="card-media-16x9" aspectRatio="16x9" style="background-image: url({role.img})">
                <MediaContent>
                </MediaContent>
            </Media>
            <Content style="color: #191B1B;">
                <h2
                    class="mdc-typography--headline6"
                    style="color: #191B1B;"
                    >
                    {role.name}
                </h2>
                {role.description}</Content>
        </Card>
    {/each}
</div>