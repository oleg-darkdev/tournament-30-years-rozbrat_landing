<script>
import categoriesGames from '../../data/categoriesGames';
import Button, { Label } from '@smui/button';

$: selectedCategoriesGames = options.categories;

export let options;
</script>

<div class="wrap-games-hidden-block">
    <p>{selectedCategoriesGames}</p>
    <h2 style="font: 28px 'grafitty'; margin: 0; text-align:center; color: #fff;">Select one or more boardgame category</h2>
    <div style="display: flex;  flex-direction: row; flex-wrap: wrap;">  
        {#each categoriesGames as category}
            <Button style="margin: 2.5px;" on:click={() => {
                selectedCategoriesGames.push(category.text)
                category.selected = !category.selected
                console.log(selectedCategoriesGames)
            }} touch variant={category.selected ? 'unelevated' : "outlined"}>
                <Label>{category.emoji} {category.text}</Label>
            </Button>
        {/each}
    </div>  
</div>
