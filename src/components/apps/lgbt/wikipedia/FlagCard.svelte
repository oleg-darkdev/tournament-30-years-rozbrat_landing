<script>
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
    import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';
    

    export let flag;
</script>


<Card style="width: 340px; margin: 0 0 15px 0;">
    <div style="padding: 1rem;">
        <h2 class="mdc-typography--headline6" style="margin: 0;">
         #{flag.number} {flag.name}
        </h2>
      </div>
    <Media style="height: 190px; width: 340px; background-image: url({flag.img});">
    </Media>
    <Content class="mdc-typography--body2">
        {flag.shortDescription}
        <Set chips={flag.category} let:chip>
        <!-- Note: the `chip` property is required! -->
        <Chip
            {chip}
            shouldRemoveOnTrailingIconClick={false}>
            <Text tabindex={0}>{chip}</Text>
        </Chip>
        </Set>
    </Content>
    <Actions fullBleed>
        <Button on:click={() => clicked++}>
        <Label>Go to Wikipedia</Label>
        <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
    </Actions>
    </Card>