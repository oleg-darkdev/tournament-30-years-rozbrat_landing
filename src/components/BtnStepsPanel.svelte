<script>    
import ReadyBtn from "./BtnTableOfContentStepsPanel/ReadyBtn.svelte";
import PreviousBtn from './BtnTableOfContentStepsPanel/PreviousBtn.svelte'

export let step;
</script>

<div class="btns-wrap">
    <PreviousBtn bind:step/>
    <ReadyBtn bind:step/>
</div>

<style>
    .btns-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap-reverse;
        align-items: start;
        align-content: start;
        width: 100%;
    }
</style>