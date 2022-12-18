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

export let currentMenu;
</script>


<Card style='width: 250px; background-color: #191B1B;  height: 80px; margin: 0 0 15px 0;'>
    <PrimaryAction style="display: flex; align-items: center;" on:click={() => {
        currentMenu = !currentMenu;
    }} padded>
        <span style="font: 35px 'grafitty';">👈 GO BACK</span>
    </PrimaryAction>
</Card>
