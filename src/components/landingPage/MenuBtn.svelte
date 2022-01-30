<script>
import Card, {
    PrimaryAction
} from '@smui/card';

export let color='';
</script>



<Card style='width: 330px; border: 2px solid {color}; height: 90px; margin-bottom: 10px;  '>
    <PrimaryAction style="display: flex;      align-items: center; "  padded>
    <slot>

    </slot>
    </PrimaryAction>
</Card>
