import { c as create_ssr_component, v as validate_component, h as each, i as escape, f as add_attribute } from "../../../chunks/index-99bd7138.js";
import { I as IconButton } from "../../../chunks/IconButton-5857d6b7.js";
import { B as Button_1, L as Label, I as Icon } from "../../../chunks/Button-932af60d.js";
import { C as Card, a as Content, A as Actions } from "../../../chunks/index-f655cb0a.js";
import { L as List, I as Item, T as Text, P as PrimaryText, S as SecondaryText } from "../../../chunks/index-9e8f6ec6.js";
import { S as SocialPanel } from "../../../chunks/SocialPanel-a8bc2212.js";
import { B as BlackFaq } from "../../../chunks/BlackFaq-78830e0c.js";
import { C as ColorFaq } from "../../../chunks/ColorFaq-01e0e8cd.js";
import "../../../chunks/Subtitle-e1b47b45.js";
import "../../../chunks/Ripple-d40e98c6.js";
var expansions_svelte_svelte_type_style_lang = "";
const css = {
  code: ".accordion-container.svelte-tsx2l{max-width:750px}",
  map: null
};
const Expansions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listOfAuctions = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      link: "https://allegro.pl/",
      game: "Game name",
      showList: false,
      lotsList: [
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          name: "Name of lot"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          name: "Name of lot"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          name: "Name of lot"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          name: "Name of lot"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          name: "Name of lot"
        }
      ]
    }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Shop</title>`, ""}`, ""}








${validate_component(BlackFaq, "BlackFaq").$$render($$result, { title: "Subscribe to us." }, {}, {
      default: () => `${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "We make content with love" }, {}, {})}`
    })}


${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
      title: "Support the project - buying a homemade souvenir, at auction."
    }, {}, {
      default: () => `<div class="${"accordion-container svelte-tsx2l"}">${each(listOfAuctions, (auction, numberAuction) => `${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => `<div style="${"display: flex; flex-direction: column; align-items: flex-start;"}"><h2 style="${"color: #fff; font: 26px 'grafitty'; "}">Auction <span style="${"color: #47babb;"}">#${escape(numberAuction)}.</span></h2> <span style="${"color: #fff; 'roboto';"}">${escape(auction.description)}</span></div>

        <div>${auction.showList ? `${validate_component(List, "List").$$render($$result, { twoLine: true, nonInteractive: true }, {}, {
            default: () => `${each(auction.lotsList, (lot) => `${validate_component(Item, "Item").$$render($$result, { style: "border: solid 2px #47babb;" }, {}, {
              default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => `${validate_component(PrimaryText, "PrimaryText").$$render($$result, { style: "color: #47babb;" }, {}, { default: () => `${escape(lot.name)}` })}
        ${validate_component(SecondaryText, "SecondaryText").$$render($$result, { style: "color: #47babb;" }, {}, {
                  default: () => `${escape(lot.description)}`
                })}
      `
              })}
    `
            })}`)}
  
  `
          })}` : ``}</div>



      `
        })}
      ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
          default: () => `${validate_component(Button_1, "Button").$$render($$result, { color: "primary", variant: "unelevated" }, {}, {
            default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => `<a style="${"color: #fff;"}"${add_attribute("href", auction.link, 0)}>Go To</a>`
            })}
`
          })}
 ${validate_component(IconButton, "IconButton").$$render($$result, { toggle: true, pressed: auction.showList }, {
            pressed: ($$value) => {
              auction.showList = $$value;
              $$settled = false;
            }
          }, {
            default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, { default: () => `expand_more` })}
    ${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, { default: () => `expand_less` })}
  `
          })}
      `
        })}
    `
      })}`)}</div>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Expansions as default };
