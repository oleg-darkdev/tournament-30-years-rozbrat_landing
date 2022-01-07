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

import {
    fade
} from 'svelte/transition';

export let data = {}
</script>


 <Card style="max-width: 350px; width: auto;  background-color: {data.brandColor};">
	<a id={data.id}></a>
        <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({data.logo}); width: 350px; height: 200"/>
            <Content class="mdc-typography--body2">
                <!-- <h2 class="mdc-typography--headline6" style="margin: 0;">
            A card with media.
                </h2> -->
                <!-- <h3 style="color: #000; font: 36px 'grafitty'; margin: 0; color: #fff;">{data.name}</h3> -->
				<Card style='width: 300px;  border-color: {data.brandColor};  height: 80px; margin-bottom: 15px;'>
					<PrimaryAction style="display: flex; align-items: center;" on:click={() => {
						location.href = `#${data.id}`
						data.showFaq = !data.showFaq;
					}} padded>
						<span style="font: 35px 'grafitty'; color: #fff;">{data.name} FAQ </span>
					</PrimaryAction>
				</Card>

				{#if data.showFaq}
                <Group>
                    <!-- other   -->
                    <Subheader style="color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;">Basic FAQ ⁉️</Subheader>
                    <List style="max-width: 450px; width: 100%; height: auto;">
                        {#each data.basic  as faq }
                        <Item style="color: #fff;" on:click={() => faq.showAnswer = !faq.showAnswer}><Text style="color: #fff">{faq.question}</Text></Item>
                        {#if faq.showAnswer}
                        <div transition:fade class='answer'>
                            <p class=" mdc-typography--body" >		{faq.answer}
                            </p></div>
                        {/if}
                        {/each}
                    </List>
        <Subheader style="color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;">Popular FAQ ⁉️</Subheader>
                    <List style="max-width: 450px; width: 100%; height: auto;">
                        {#each data.basic  as faq }
                        <Item style="color: #fff;" on:click={() => faq.showAnswer = !faq.showAnswer}><Text style="color: #fff">{faq.question}</Text></Item>
                        {#if faq.showAnswer}
                        <div transition:fade class='answer'>
                            <p class=" mdc-typography--body" >		{faq.answer}
                            </p></div>
                        {/if}
                        {/each}
                    </List>
					        <Subheader style="color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;">Other FAQ ⁉️</Subheader>
                    <List style="max-width: 450px; width: 100%; height: auto;">
                        {#each data.other  as faq }
                        <Item style="color: #fff;" on:click={() => faq.showAnswer = !faq.showAnswer}><Text style="color: #fff">{faq.question}</Text></Item>
                        {#if faq.showAnswer}
                        <div transition:fade class='answer'>
                            <p class=" mdc-typography--body" >		{faq.answer}
                            </p></div>
                        {/if}
                        {/each}
                    </List>
                </Group>
				{/if}
            </Content>
            </Card>

<style>

</style>
