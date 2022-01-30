<script>
import Card, {
    PrimaryAction
} from '@smui/card';

export let showMenu;
export let currentMenu;
</script>



<Card style='width: 330px; border: 2px solid #191B1B; height: 90px; margin-bottom: 10px;  '>
    <PrimaryAction style="display: flex;      align-items: center; "   on:click={() => {
        showMenu = !showMenu;
        currentMenu = !currentMenu;
        }} padded>
    <slot>

    </slot>
    </PrimaryAction>
</Card>
