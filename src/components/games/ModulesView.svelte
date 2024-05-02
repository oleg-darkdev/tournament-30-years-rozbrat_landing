<script>
import { slide  } from 'svelte/transition';
import CardModuleView from './CardModuleView.svelte'

export let games;
// console.log(games)
</script>

{#each games as game}
    <div transition:slide|local>
        <CardModuleView {game}/>
    </div>
{/each}