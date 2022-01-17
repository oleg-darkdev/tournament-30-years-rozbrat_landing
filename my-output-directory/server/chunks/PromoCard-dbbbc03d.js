import { c as create_ssr_component, v as validate_component, h as escape, i as each } from "./index-d2f82617.js";
import { e as Card, M as Media, d as Content, l as Actions } from "./index-d5037018.js";
import { L as Label, I as Icon, T as Text, b as List, c as Item, P as PrimaryText, f as SecondaryText } from "./index-2fbb442f.js";
import { B as Button_1 } from "./Button-19836e67.js";
import { S as Set, C as Chip, A as AuctionBtns } from "./AuctionBtns-93c88936.js";
const PromoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "margin-bottom: 15px; width: auto; max-width: 100%; min-width: 300px;"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      style: "max-height: 300px; height: 230px; width: 100%; min-width: 300px; background-image: url(" + game.promo.banner + ");"
    }, {}, {})}
    ${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `<div style="${"display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; margin-bottom: 0px;"}"><h2 style="${"color: #fff; font: 26px 'grafitty'; margin-right: 15px;"}">${escape(game.promo.name)} <span style="${"color: " + escape(game.auctionStatus ? "#47babb" : "#ff3e00")}">auction ${escape(game.auctionStatus ? "active" : "paused")}</span></h2>
            ${validate_component(Button_1, "Button").$$render($$result, {
        style: "border-color: " + game.promo.brandColor + ";",
        variant: "outlined"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `Show lots` })}
                ${validate_component(Icon, "Icon").$$render($$result, {
          class: "material-icons",
          style: "color: " + game.promo.brandColor + ";"
        }, {}, {
          default: () => `${escape(game.showList ? "expand_less" : "expand_more")}`
        })}`
      })}</div>
        <div>${validate_component(Set, "Set").$$render($$result, {
        chips: game.promo.categories,
        nonInteractive: true
      }, {}, {
        default: ({ chip }) => `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
          default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => `${escape(chip.emoji)} ${escape(chip.text)}`
          })}`
        })}`
      })}</div>
        ${!game.showList ? `<p style="${"color: #fff; 'roboto';"}">${escape(game.moreInfo.description)}</p>
            ${validate_component(Button_1, "Button").$$render($$result, {
        style: "border-color: " + game.promo.brandColor + ";",
        color: "secondary",
        variant: "outlined",
        href: `/games/${game.promo.id}`
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {
          style: "color: " + game.promo.brandColor + ";"
        }, {}, { default: () => `More Info` })}`
      })}` : ``}
        <div style="${"width: 100%;"}">${game.showList ? `<div style="${"display: flex; width: 100%; flex-wrap: wrap; flex-direction: row; justify-content: flex-start; margin-bottom: 10px;"}">${validate_component(AuctionBtns, "AuctionBtns").$$render($$result, { game }, {}, {})}</div>
            ${validate_component(List, "List").$$render($$result, { twoLine: true, nonInteractive: true }, {}, {
        default: () => `${each(game.lots, (lot) => `${validate_component(Item, "Item").$$render($$result, {
          style: "display: flex; flex-wrap: wrap; flex-direction: row; height: auto; border: solid 2px " + game.promo.brandColor
        }, {}, {
          default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {
              style: "color: " + game.promo.brandColor + ";"
            }, {}, { default: () => `${escape(lot.name)}` })}
                        ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {
              style: "color: " + game.promo.brandColor + ";"
            }, {}, {
              default: () => `${escape(lot.description)}`
            })}
                    `
          })}
                    <div style="${"display: flex; width: 100%; justify-content: flex-start; margin-bottom: 10px;"}">${validate_component(Button_1, "Button").$$render($$result, {
            style: "border-color: " + game.promo.brandColor + ";",
            variant: "outlined",
            href: lot.etsy,
            target: "_blank"
          }, {}, {
            default: () => `${validate_component(Label, "Label").$$render($$result, {
              style: "color: " + game.promo.brandColor + ";"
            }, {}, { default: () => `Buy lot on etsy` })}
                        `
          })}</div>
                `
        })}`)}`
      })}` : ``}</div>`
    })}
    ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
      default: () => `${validate_component(AuctionBtns, "AuctionBtns").$$render($$result, { game }, {}, {})}`
    })}`
  })}`;
});
export { PromoCard as P };
