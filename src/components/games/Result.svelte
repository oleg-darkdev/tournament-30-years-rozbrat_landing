<script>
import List, { Group, Item, Graphic, Subheader, Text } from '@smui/list';
import PreviousBtn from '../BtnTableOfContentStepsPanel/PreviousBtn.svelte'

export let options;
export let step;
</script>

<div style="{step == 3 ? '': 'display: none;'}">
    <div class="wrap-games-hidden-block">
        <h2 style="font: 28px 'grafitty'; margin: 0; text-align:center; color: #fff;">Games are filtered by the next criteries 👇</h2>
            <Group style="width: 320px;">
                <Subheader style="font: 22px 'grafitty'; color: #fff; ">🎲 Categories</Subheader>
                <List class="demo-list">
                    {#each options.categories as category}
                        <Item>
                            <Text style="color: #47babb">{category}</Text>
                        </Item>
                    {/each}
                </List>
                <Subheader style="font: 22px 'grafitty'; color: #fff; ">Display Format 👀</Subheader>
                <List class="demo-list" dense>
                    <Item>
                        <Graphic  style="color: #47babb" class="material-icons">{options.view.icon}</Graphic>
                        <Text  style="color: #47babb">{options.view.name}</Text>
                    </Item>
                </List>
        </Group>

        <PreviousBtn bind:step/>
    </div>
</div>
