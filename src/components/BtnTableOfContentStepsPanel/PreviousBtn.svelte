<script>
 import Card, {
    Content,
    PrimaryAction,
  } from '@smui/card';

export let step;
</script>      


<Card style='width: 150px; background-color: #47babb;  height: 80px; margin-bottom: 15px;'>
    <PrimaryAction style="display: flex; align-items: center;" on:click={() => step--} padded>
        <span style="font: 28px 'grafitty';">👈 Back</span>
    </PrimaryAction>
</Card>    