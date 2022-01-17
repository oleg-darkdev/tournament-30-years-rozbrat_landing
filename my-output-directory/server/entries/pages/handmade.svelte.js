import { c as create_ssr_component, v as validate_component, h as escape, i as each } from "../../chunks/index-d2f82617.js";
import { s as socialBlack, S as SocialPanel } from "../../chunks/SocialPanel-aff7763b.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-c54aa38b.js";
import { e as Card, d as Content, M as Media, k as MediaContent } from "../../chunks/index-d5037018.js";
import { b as List, c as Item, T as Text, L as Label } from "../../chunks/index-2fbb442f.js";
import { B as Button_1 } from "../../chunks/Button-19836e67.js";
import { S as Set, C as Chip, A as AuctionBtns } from "../../chunks/AuctionBtns-93c88936.js";
import { l as listOfAuctions } from "../../chunks/auctions-9fae30b6.js";
import "../../chunks/index-0141c37a.js";
import "../../chunks/gamesData-e89e0b32.js";
const ShortGamesList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "max-width: 400px; color: #fff; background-color: rgb(25, 27, 27);"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, { component: List }, {}, {
      default: () => `${validate_component(Item, "Item").$$render($$result, {
        style: "background-color: rgb(25, 27, 27);"
      }, {}, {
        default: () => `${validate_component(Text, "Text").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `${escape(text)}` })}`
      })}
    ${slots.default ? slots.default({}) : `


    `}`
    })}`
  })}`;
});
const TableOfContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { arrayOfAuctions } = $$props;
  let { activeAuctions } = $$props;
  let { nonActiveAuctions } = $$props;
  if ($$props.arrayOfAuctions === void 0 && $$bindings.arrayOfAuctions && arrayOfAuctions !== void 0)
    $$bindings.arrayOfAuctions(arrayOfAuctions);
  if ($$props.activeAuctions === void 0 && $$bindings.activeAuctions && activeAuctions !== void 0)
    $$bindings.activeAuctions(activeAuctions);
  if ($$props.nonActiveAuctions === void 0 && $$bindings.nonActiveAuctions && nonActiveAuctions !== void 0)
    $$bindings.nonActiveAuctions(nonActiveAuctions);
  return `<div style="${"display: flex; justify-content: center;align-items: center; width: 100%; background-color:#191B1B; "}"><section style="${"width: 430px; margin: 0; display: flex; height: auto; "}"><div class="${"tur-bg"}" style="${"flex-direction: column; align-items: center;"}">
            ${validate_component(Card, "Card").$$render($$result, {
    style: "width: 400px;  margin-bottom: 15px;"
  }, {}, {
    default: () => `
        ${validate_component(Media, "Media").$$render($$result, {
      style: "height: 515px; width: 100%; background-image: url('img/handmade.png');"
    }, {}, {})}
        ${validate_component(Content, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "background-color: rgb(25, 27, 27); color: #fff; "
    }, {}, {
      default: () => `<p>At the moment I am found money for the development and printing of my games, and i organized auctions of items that I made with my own hands.
              </p>
          
             
             
           
          `
    })}`
  })}

      ${validate_component(ShortGamesList, "ShortGamesList").$$render($$result, {
    text: "I raise money money for next games \u{1F447}",
    style: ""
  }, {}, {
    default: () => `${each(arrayOfAuctions, (game) => `
                
            
             ${validate_component(Item, "Item").$$render($$result, {
      style: "background-color: rgb(25, 27, 27)"
    }, {}, {
      default: () => `${validate_component(Text, "Text").$$render($$result, { style: "color: #47babb" }, {}, {
        default: () => `${escape(game.promo.name)}`
      })}
            `
    })}`)}`
  })}</div></section></div>`;
});
const AuctionsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listOfAuctions: listOfAuctions2 } = $$props;
  if ($$props.listOfAuctions === void 0 && $$bindings.listOfAuctions && listOfAuctions2 !== void 0)
    $$bindings.listOfAuctions(listOfAuctions2);
  return `${!listOfAuctions2.length ? `<div style="${"display: flex; justify-content: center;"}">${validate_component(Card, "Card").$$render($$result, {
    style: "max-width:450px; height: auto; background-color: rgb(25, 27, 27);"
  }, {}, {
    default: () => `${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `<p style="${"font: 28px 'grafitty'; max-width: 500px; color: #47babb; text-align: center;"}">At the moment I do not conduct auctions, but the patronite or store on etsy is always available \u{1F499}</p>`
    })}
        
                   <div style="${"display: flex; width: 100%; min-width:350px; flex-wrap: wrap; flex-direction: column; height: auto; align-content: center;"}">${validate_component(Button_1, "Button").$$render($$result, {
      style: " margin: 5px;",
      color: "primary",
      variant: "unelevated",
      href: socialBlack.patronite.link,
      target: "_blank"
    }, {}, {
      default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F525} Handmade on etsy ` })}`
    })}
        ${validate_component(Button_1, "Button").$$render($$result, {
      style: "margin: 5px; border: 1px solid #47babb; background-color: rgb(25, 27, 27);",
      color: "primary",
      variant: "outlined",
      href: socialBlack.patronite.link,
      target: "_blank"
    }, {}, {
      default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F4B8} Donate on patronite` })}`
    })}</div>
        `
  })}</div>` : `${validate_component(List, "List").$$render($$result, { style: "" }, {}, {
    default: () => `${each(listOfAuctions2, (auction) => `
     
    ${validate_component(Item, "Item").$$render($$result, {
      style: "display: flex; flex-direction: row; margin-bottom: 15px; border: 1px solid " + auction.promo.brandColor + ";  flex-wrap: wrap;  height: auto; "
    }, {}, {
      default: () => `<div style="${"display: flex; width: auto; margin-bottom: 5px;"}">${validate_component(Card, "Card").$$render($$result, {
        style: "max-height: 150px; width: 300px; margin: 5px 15px 20px 15px;"
      }, {}, {
        default: () => `${validate_component(Media, "Media").$$render($$result, {
          style: "background-image: url(" + auction.promo.logo + ");",
          class: "card-media-16x9",
          aspectRatio: "16x9"
        }, {}, {
          default: () => `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {})}
                `
        })}
            `
      })}</div>
             <div style="${"display: flex; margin-right: 15px; width: auto; flex-wrap: wrap; flex-direction: column; height: auto; justify-content: flex-start;"}">${validate_component(Text, "Text").$$render($$result, {
        style: "color: " + auction.promo.brandColor + ";"
      }, {}, {
        default: () => `${escape(auction.promo.shortName)}

        `
      })}
        ${validate_component(Set, "Set").$$render($$result, {
        chips: [auction.lots.length],
        nonInteractive: true
      }, {}, {
        default: ({ chip }) => `${validate_component(Chip, "Chip").$$render($$result, { chip }, {}, {
          default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => `${escape(chip)} lots in auction`
          })}
            `
        })}
        `
      })}</div>
       <div style="${"display: flex; width: 350px; flex-wrap: wrap; flex-direction: column; height: auto; align-content: flex-end;"}">${validate_component(AuctionBtns, "AuctionBtns").$$render($$result, { game: auction }, {}, {})}</div>
    `
    })}`)}`
  })}`}`;
});
const Handmade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let arrayOfAuctions = Object.values(listOfAuctions);
  let activeAuctions = arrayOfAuctions.filter((auction) => auction.auctionStatus == 1), nonActiveAuctions = arrayOfAuctions.filter((auction) => auction.auctionStatus == 0);
  console.log(activeAuctions.length);
  return `${$$result.head += `${$$result.title = `<title>Handmade \u{1F3A8}</title>`, ""}`, ""}
${validate_component(TableOfContent, "TableOfContent").$$render($$result, {
    arrayOfAuctions,
    nonActiveAuctions: nonActiveAuctions.length,
    activeAuctions: activeAuctions.length
  }, {}, {})}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Active handmade sales at the auctions."
  }, {}, {
    default: () => `${validate_component(AuctionsList, "AuctionsList").$$render($$result, { listOfAuctions: activeAuctions }, {}, {})}`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Paused handmade sales at the auctions."
  }, {}, {
    default: () => `<a name="${"auctions"}"></a>
    ${validate_component(AuctionsList, "AuctionsList").$$render($$result, { listOfAuctions: nonActiveAuctions }, {}, {})}`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "" }, {}, {
    default: () => `${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "I make content with love" }, {}, {})}`
  })}`;
});
export { Handmade as default };
