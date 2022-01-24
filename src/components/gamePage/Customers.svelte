<script>
import Sorry from '../Sorry.svelte';
    
export let sorryBgColor;
</script>

<div style="display: flex; justify-content: center;align-items: center;  flex-direction: row; flex-wrap: wrap; width: 100%;">
    <Sorry {sorryBgColor}/>
</div>