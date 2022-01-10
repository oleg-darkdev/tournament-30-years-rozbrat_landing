<script>
import SocialPanel from '../layout/SocialPanel.svelte'
import ColorFaq from '../layout/ColorFaq.svelte';
import BlackFaq from '../layout/BlackFaq.svelte';

import TableOfContent from '../components/handmade/TableOfContent.svelte';
import AuctionsList from '../components/handmade/AuctionsList.svelte'
import listOfAuctions from '../data/auctions';


let arrayOfAuctions = Object.values(listOfAuctions);

let activeAuctions = arrayOfAuctions.filter(auction => auction.auctionStatus == 1),
    nonActiveAuctions = arrayOfAuctions.filter(auction => auction.auctionStatus == 0);
console.log(activeAuctions.length)

</script>

<svelte:head>
	<title>Handmade 🎨</title>
</svelte:head>
<TableOfContent {arrayOfAuctions} nonActiveAuctions={nonActiveAuctions.length} activeAuctions={activeAuctions.length}/>

<ColorFaq title="Active handmade sales at the auctions."  >
    <AuctionsList listOfAuctions={activeAuctions}/>
</ColorFaq>

<ColorFaq title="Paused handmade sales at the auctions."  >
    <a name="auctions"></a>
    <AuctionsList listOfAuctions={nonActiveAuctions}/>
</ColorFaq>

<ColorFaq title=""  >
  <SocialPanel title='I make content with love'/>
</ColorFaq>
<style>
</style>
