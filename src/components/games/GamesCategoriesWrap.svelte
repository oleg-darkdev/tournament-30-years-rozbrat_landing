
<script>
import Paper, { Title, Content } from '@smui/paper';
export let category;
export let gamesOnThisCategory;
</script>

<Paper style="width: 95%;"color="secondary" variant="unelevated" class="mdc-theme--secondary">
    <Title style="color: var(--mdc-theme-primary); font: 22px 'grafitty';">Of these, {category} - i creat {gamesOnThisCategory} games 🎲</Title>
    <Content >
        <slot>
            
        </slot>
    </Content>
</Paper>