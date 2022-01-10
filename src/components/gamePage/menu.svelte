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



export let  promo;
// https://patronite.pl/darkdev.games
export let btnData; 
</script>

<Card style="margin-bottom: 15px; width: auto; max-width: 100%;">
    <Media  style="height: 250px; background-image: url({promo.banner});"/>
        <Content style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;">
        {#each btnData as data}
            <Card style='width: 280px; margin: 5px; border: 2px solid {promo.brandColor};  height: 80px; '>
                <PrimaryAction style="display: flex; align-items: center;" on:click={() => location.href = data.href} padded>
                    <span style="font: 35px 'grafitty'; color: {promo.brandColor};">{data.text}</span>
                </PrimaryAction>
            </Card>
        {/each}
    </Content>
</Card>