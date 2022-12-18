<script>
    import List, {
    Item,
    Separator,
    Text
} from '@smui/list';
import Sorry from '../Sorry.svelte';

export let resources;
export let videos;
export let promo;
</script>    
    
{#if resources.length < 2}
    <div style="display: flex; justify-content:  center; align-items: center;  flex-direction: column;"  >
        <Sorry sorryBgColor={promo.brandColor}/>
    </div>
{:else}
    <List id="resources" style="max-width: 1200px; width: 100%; margin-bottom: 25px;" class="demo-list">
        {#each resources.concat(videos) as resource}
            <Item style="border: 2px solid {promo.brandColor};" on:SMUI:action={() => console.log('click')}><Text style="color: {promo.brandColor};">{resource.name}{resource.type == 'pdf' ? `.${resource.type} 📄`: `  (${resource.type} 📺)`}</Text></Item>
        {/each}
    </List>
{/if}