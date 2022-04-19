<script>
    import flags from '../../data/gamesApps/lgbt/tokens.js';
    import Card, {
        Content,
        PrimaryAction,
        Actions,
        ActionButtons,
        ActionIcons,
        Media,
        MediaContent,
    } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import IconButton, { Icon } from '@smui/icon-button';


    console.log(Object.values(flags))
</script>


<!-- name: 'gay',
		category: [сategories.sexual],
		description: loremDescriptionText,
		flag: '', 
		shortDescription: loremShortDescriptionText,
		number: 12
     -->




<!-- {#each flags as flag}
    <Card>
    <Media  style="height: 250px; background-image: url({flag.flag});"/>
      <Content class="mdc-typography--body2">{flag.shortDescription}</Content>
      <Actions fullBleed>
        <Button on:click={() => clicked++}>
          <Label>More</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
      </Actions>
    </Card>
{/each} -->