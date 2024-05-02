<script>
import Card, {
    Content,
    Media,
    MediaContent,
} from '@smui/card';

export let roles;
</script>

<div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; max-width: 760px;">
    {#each roles as role}
        <Card style=" width: 370px;  margin: 5px; background-color: {role.bgColor}; ">
            <Media  class="card-media-square" aspectRatio="square" style=" width: 100%; height: 370px; background-image: url({role.img})">
                <MediaContent>
                </MediaContent>
            </Media>
            <Content style="color: #fff; padding: 5px;">
                <!-- <h2
                    class="mdc-typography--headline6"
                    style="color: #fff; font: 28px 'grafitty';"
                    >
                    {role.name}
                </h2> -->
                {role.description}
            </Content>
        </Card>
    {/each}
</div>