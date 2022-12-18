<script>
    import Button, {
    Group,
    Icon,
    Label
} from '@smui/button';

export let game;
</script>

<Button style="background-color: {game.promo.brandColor}; margin: 5px;" variant="unelevated"  href={game.croundfanding.links.allegro} target="_blank">
    <Label style="color: #fff;">🔥 Auction on allegro </Label>
</Button>
<Button style="background-color: {game.promo.brandColor}; margin: 5px;" variant="unelevated"  href={game.croundfanding.links.patronitePl} target="_blank">
    <Label style="color: #fff;">💸 Donate on patronite</Label>
</Button>

