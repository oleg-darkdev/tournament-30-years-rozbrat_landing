<script>
import List, { Item, Meta, Label } from '@smui/list';
import Checkbox from '@smui/checkbox';
import BtnStepsPanel from '../BtnStepsPanel.svelte';
import categoriesGames from '../../data/categoriesGames';


$: selectedCategoriesGames = options.categories;

export let options;
export let step;
</script>

<div style="{step == 2 ? '': 'display: none;'}">
    <div class="wrap-games-hidden-block">
        <h2 style="font: 28px 'grafitty'; margin: 0; text-align:center;">Select one or more boardgame category</h2>
        <List style="width: 220px; margin: 0 0 25px 0;" checkList>
            {#each categoriesGames as category}
                <Item>
                    <Label style="color: #47babb">{category.emoji} {category.text}</Label>
                    <Meta>
                        <Checkbox bind:group={selectedCategoriesGames} value={category.text} />
                    </Meta>
                </Item>
            {/each}
        </List>
        <BtnStepsPanel bind:step/>
    </div>
</div>