<script>
import List, {
    Group,
    Item,
    Subheader,
    Text
} from '@smui/list';
import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
} from '@smui/card';

import PartGameFaqList from '../faq/PartGameFaqList.svelte';

export let faqData;
</script>



<div style="display: flex; justify-content: center; width: 100%; margin-bottom: 115px;">
    <Group style="width: 100%;">
        <PartGameFaqList text="Basic FAQ ⁉️" faqData={faqData.basicFAQ}/>
        <PartGameFaqList text="Popular FAQ ⁉️" faqData={faqData.popularFaq}/>
        <PartGameFaqList text="Other FAQ ⁉️" faqData={faqData.otherFaq}/>
    </Group>
</div>
