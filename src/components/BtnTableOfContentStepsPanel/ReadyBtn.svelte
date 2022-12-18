<script>
 import Card, {
    Content,
    PrimaryAction,
  } from '@smui/card';

export let step;
</script>      


<Card style='width: 150px; background-color: #47babb;  height: 80px; margin: 0 0 15px  5px;'>
    <PrimaryAction style="display: flex; align-items: center;" on:click={() => step++} padded>
        <span style="font: 28px 'grafitty';">Next ✅</span>
    </PrimaryAction>
</Card>    