<script>
    import List, {
    Item,
    Separator,
    Text
} from '@smui/list';

export let resources;
export let videos;
export let promo;
</script>    
    

<List id="resources" style="max-width: 1200px; width: 100%; margin-bottom: 25px;" class="demo-list">
    {#each resources.concat(videos) as resource}
        <Item style="border: 2px solid {promo.brandColor};" on:SMUI:action={() => console.log('click')}><Text style="color: {promo.brandColor};">{resource.name}{resource.type == 'pdf' ? `.${resource.type} 📄`: `  (${resource.type} 📺)`}</Text></Item>
    {/each}
</List>