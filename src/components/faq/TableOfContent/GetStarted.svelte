<script>
import TableOfContentBtn from '../../BtnTableOfContentStepsPanel/TableOfContent.svelte';

export let step;
</script>


<div class={step == 0 ? '': 'hidden'}>
    <div class="wrap-faq-hidden-block">
        <!-- <h2 style="font: 28px 'grafitty'; margin: 0; text-align:center;">Select one or more boardgame category</h2> -->
        <TableOfContentBtn bind:step />
    </div>
</div>