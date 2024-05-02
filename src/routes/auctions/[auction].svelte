<script>
       import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
} from '@smui/card';
import List, {
    Item,
    Text,
    PrimaryText,
    SecondaryText
} from '@smui/list';
    import Button, {
    Group,
    Icon,
    Label
} from '@smui/button';
import PromoCard from '../../components/auctionPage/PromoCard.svelte';
import BlackFaq from '../../layout/BlackFaq.svelte';
import AuctionBtns from '../../components/auctionPage/AuctionBtns.svelte';
import { page } from '$app/stores';
import listOfAuctions from '../../data/auctions';
let game = listOfAuctions[$page.params.auction];

</script>

<BlackFaq title={game.promo.name} color={game.promo.brandColor}>

    <PromoCard {game}/>
</BlackFaq>
