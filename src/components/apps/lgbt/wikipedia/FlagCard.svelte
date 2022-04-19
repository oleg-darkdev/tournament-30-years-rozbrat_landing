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


<Card style="width: 360px; height: 500px; margin: 0 0 15px 0;">
    <Media style="height: 250px; background-image: url({flag.img});">
    <MediaContent>
        <div
        style="color: #fff; position: absolute; bottom: 16px; left: 16px;"
        >
        <h2 class="mdc-typography--headline6" style="margin: 0;">
            #{flag.number} {flag.name}
        </h2>
        </div>
    </MediaContent>
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