import { c as create_ssr_component, v as validate_component, i as each, h as escape } from "../../chunks/index-d2f82617.js";
import { b as List, L as Label, c as Item, T as Text, P as PrimaryText, f as SecondaryText } from "../../chunks/index-2fbb442f.js";
import { M as Menu } from "../../chunks/SelectionGroupIcon-f0116078.js";
import { B as Button_1 } from "../../chunks/Button-19836e67.js";
import { e as Card, d as Content, g as PrimaryAction, M as Media, k as MediaContent } from "../../chunks/index-d5037018.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-c54aa38b.js";
import { a as allGamesList } from "../../chunks/gamesData-e89e0b32.js";
class Auction {
  constructor(valuePromo, valueCroundfanding, valueMoreInfo) {
    this.promo = valuePromo;
    this.croundfanding = valueCroundfanding;
    this.moreInfo = valueMoreInfo;
    this.history = [""];
  }
  get promo() {
    return this._promo;
  }
  get croundfanding() {
    return this._croundfanding;
  }
  get moreInfo() {
    return this._moreInfo;
  }
  get history() {
    return this._history;
  }
  set promo(value) {
    this._promo = value;
  }
  set moreInfo(value) {
    this._moreInfo = value;
  }
  set croundfanding(value) {
    this._croundfanding = value;
  }
  set history(value) {
    this._history = value;
  }
}
let gameData$b = allGamesList.eco;
let historyWorkshops$b = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$b = new Auction(gameData$b.promo, gameData$b.croundfanding, gameData$b.moreInfo);
workshop$b.history = historyWorkshops$b;
let gameData$a = allGamesList.lgbt;
let historyWorkshops$a = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$a = new Auction(gameData$a.promo, gameData$a.croundfanding, gameData$a.moreInfo);
workshop$a.history = historyWorkshops$a;
let gameData$9 = allGamesList.gulagUSSR;
let historyWorkshops$9 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$9 = new Auction(gameData$9.promo, gameData$9.croundfanding, gameData$9.moreInfo);
workshop$9.history = historyWorkshops$9;
let gameData$8 = allGamesList.fnb;
let historyWorkshops$8 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$8 = new Auction(gameData$8.promo, gameData$8.croundfanding, gameData$8.moreInfo);
workshop$8.history = historyWorkshops$8;
let gameData$7 = allGamesList.a;
let historyWorkshops$7 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$7 = new Auction(gameData$7.promo, gameData$7.croundfanding, gameData$7.moreInfo);
workshop$7.history = historyWorkshops$7;
let gameData$6 = allGamesList.hackerspace;
let historyWorkshops$6 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$6 = new Auction(gameData$6.promo, gameData$6.croundfanding, gameData$6.moreInfo);
workshop$6.history = historyWorkshops$6;
let gameData$5 = allGamesList.katyn;
let historyWorkshops$5 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$5 = new Auction(gameData$5.promo, gameData$5.croundfanding, gameData$5.moreInfo);
workshop$5.history = historyWorkshops$5;
let gameData$4 = allGamesList.ror;
let historyWorkshops$4 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$4 = new Auction(gameData$4.promo, gameData$4.croundfanding, gameData$4.moreInfo);
workshop$4.history = historyWorkshops$4;
let gameData$3 = allGamesList.squat;
let historyWorkshops$3 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$3 = new Auction(gameData$3.promo, gameData$3.croundfanding, gameData$3.moreInfo);
workshop$3.history = historyWorkshops$3;
let gameData$2 = allGamesList.wikileaks;
let historyWorkshops$2 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$2 = new Auction(gameData$2.promo, gameData$2.croundfanding, gameData$2.moreInfo);
workshop$2.history = historyWorkshops$2;
let gameData$1 = allGamesList.wtb;
let historyWorkshops$1 = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop$1 = new Auction(gameData$1.promo, gameData$1.croundfanding, gameData$1.moreInfo);
workshop$1.history = historyWorkshops$1;
let gameData = allGamesList.yakusa;
let historyWorkshops = [
  {
    date: "22.02.2022",
    place: "ul. Pu\u0142awska 37, Warsawa",
    reports: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    maxPeople: 6,
    eventbrite: "https://www.eventbrite.com/"
  }
];
let workshop = new Auction(gameData.promo, gameData.croundfanding, gameData.moreInfo);
workshop.history = historyWorkshops;
const workshops = {
  gulagUSSR: workshop$9,
  eco: workshop$b,
  lgbt: workshop$a,
  fnb: workshop$8,
  a: workshop$7,
  hackerspace: workshop$6,
  katyn: workshop$5,
  ror: workshop$4,
  squat: workshop$3,
  wikileaks: workshop$2,
  wtb: workshop$1,
  yakusa: workshop
};
var workshops_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrap-hide-menu.svelte-16nqwdu{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px 0}.wrap-hide-menu.svelte-16nqwdu,.wrap-btns.svelte-16nqwdu{display:flex;flex-direction:row;flex-wrap:wrap}.wrap-btns.svelte-16nqwdu{margin-top:15px;justify-content:flex-end;align-content:flex-end;align-items:flex-end}",
  map: null
};
const Workshops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let workshopsArray = Object.values(workshops);
  let gamesShortNames = workshopsArray.map(function(workshopData) {
    return {
      shortName: workshopData.promo.shortName,
      show: true
    };
  });
  let moreInfoMenu = [""];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Workshops \u{1F9E0}</title>`, ""}`, ""}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "Upcoming workshops \u{1F9E0}" }, {}, {
      default: () => `<div style="${"display: flex; flex-direction: row;"}">${validate_component(Card, "Card").$$render($$result, {
        style: "width: 310px; height: auto; margin-right: 15px; ",
        variant: "outlined",
        padded: true
      }, {}, {
        default: () => `${validate_component(Content, "Content").$$render($$result, { style: "" }, {}, {
          default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0; font: 24px 'grafitty'; color:#47babb; "}">Sort your workshops
            </h2>
            <h3 class="${"mdc-typography--subtitle2"}" style="${"margin: 0 0 10px; color: #888;"}">by game
            </h3>
            
            ${each(Object.values(gamesShortNames), (game) => `
            ${validate_component(Button_1, "Button").$$render($$result, {
            style: "margin: 2.5px;",
            touch: true,
            variant: game.selected ? "outlined" : "unelevated"
          }, {}, {
            default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => `#${escape(game.shortName)}`
            })}
            `
          })}`)}
            `
        })}`
      })}
    ${validate_component(List, "List").$$render($$result, {
        style: "max-width: 560px; width: auto; ",
        threeLine: true
      }, {}, {
        default: () => `${each(workshopsArray, (workshop2, i) => `${validate_component(Item, "Item").$$render($$result, {
          style: "border: 2px solid #47babb; min-height: 135px; height: auto; display: flex; flex-direction: row;  justify-content: flex-start;  flex-wrap: wrap;"
        }, {}, {
          default: () => `${validate_component(Menu, "Menu").$$render($$result, {
            style: "width: 100%; height: 100%;",
            this: moreInfoMenu[i]
          }, {
            this: ($$value) => {
              moreInfoMenu[i] = $$value;
              $$settled = false;
            }
          }, {
            default: () => `<div class="${"wrap-hide-menu svelte-16nqwdu"}">${`<div style="${"display: flex; flex-direction: column; justify-content: center;"}"><h2 class="${"mdc-typography--headline6"}" style="${"color: #fff; font-family: 'grafitty'; margin: -5px;"}">Go to Eventbrite?
                        </h2>
                        ${validate_component(Card, "Card").$$render($$result, {
              style: "width: 300px; background-color: #47babb;  height: 70px; "
            }, {}, {
              default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
                style: "display: flex; align-items: center;",
                padded: true
              }, {}, {
                default: () => `<span style="${"font: 35px 'grafitty';"}">REGISTRATION</span>
                            `
              })}
                        `
            })}
                    </div>`}</div>
            `
          })}
            
            ${validate_component(Card, "Card").$$render($$result, {
            style: "height: 100px; width: 200px; margin: 15px;"
          }, {}, {
            default: () => `${validate_component(Media, "Media").$$render($$result, {
              style: "background-image: url(" + workshop2.promo.logo + ");",
              class: "card-media-16x9",
              aspectRatio: "16x9"
            }, {}, {
              default: () => `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {})}
                `
            })}
            `
          })}

            ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => `${validate_component(PrimaryText, "PrimaryText").$$render($$result, { style: "color: #47babb;" }, {}, {
              default: () => `${escape(workshop2.promo.name)} `
            })}
                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, { style: "color: #47babb;" }, {}, {
              default: () => `\u{1F4C5} ${escape(workshop2.history[0].date)}`
            })}
                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, { style: "color: #47babb;" }, {}, {
              default: () => `\u{1F3E0}  ${escape(workshop2.history[0].place)} `
            })}

                <div class="${"wrap-btns svelte-16nqwdu"}">${validate_component(Button_1, "Button").$$render($$result, {
              color: "primary",
              style: "margin-right: 15px;",
              touch: true,
              variant: "outlined"
            }, {}, {
              default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Learn more` })}
                    `
            })}
                    ${validate_component(Button_1, "Button").$$render($$result, {
              style: "margin: 0 px;",
              touch: true,
              variant: "raised"
            }, {}, {
              default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Registration` })}
                    `
            })}</div>
            `
          })}

        `
        })}`)}`
      })}</div>`
    })}


`;
  } while (!$$settled);
  return $$rendered;
});
export { Workshops as default };
