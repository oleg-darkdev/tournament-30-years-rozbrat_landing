import { c as create_ssr_component, u as subscribe, v as validate_component } from "../../../chunks/index-d2f82617.js";
import "../../../chunks/index-d5037018.js";
import "../../../chunks/index-2fbb442f.js";
import { P as PromoCard } from "../../../chunks/PromoCard-dbbbc03d.js";
import { B as BlackFaq } from "../../../chunks/BlackFaq-325a0523.js";
import { p as page } from "../../../chunks/stores-a50a587a.js";
import { l as listOfAuctions } from "../../../chunks/auctions-9fae30b6.js";
import "../../../chunks/Button-19836e67.js";
import "../../../chunks/AuctionBtns-93c88936.js";
import "../../../chunks/index-0141c37a.js";
import "../../../chunks/gamesData-e89e0b32.js";
const U5Bauctionu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let game = listOfAuctions[$page.params.auction];
  $$unsubscribe_page();
  return `${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: game.promo.name,
    color: game.promo.brandColor
  }, {}, {
    default: () => `${validate_component(PromoCard, "PromoCard").$$render($$result, { game }, {}, {})}`
  })}`;
});
export { U5Bauctionu5D as default };
