<script>
import List, { Item, Separator, Text } from '@smui/list';
import FAQCategories from '../../../data/faq/FAQCategories';
export let step;
</script>


<div class={step == 1 ? '': 'hidden'}>
    <List lass="demo-list">
        {#each Object.values(FAQCategories) as category}
        <!-- <a href='#{FAQCategories.shipping.id}' > -->
            <Item style="width: 100%; font: 28px 'grafitty'; color: #fff;" ><Text>{category.text}</Text></Item>
        {/each}
    </List>
</div>