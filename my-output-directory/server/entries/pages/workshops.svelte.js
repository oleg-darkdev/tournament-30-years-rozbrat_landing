import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, v as validate_component, h as each, i as escape } from "../../chunks/index-99bd7138.js";
import { G as Graphic, L as List, I as Item, T as Text, P as PrimaryText, S as SecondaryText } from "../../chunks/index-9e8f6ec6.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder } from "../../chunks/Subtitle-e1b47b45.js";
import { M as MenuSurface } from "../../chunks/MenuSurface-ec8ff9c2.js";
import { B as Button_1, L as Label } from "../../chunks/Button-932af60d.js";
import { C as Card, a as Content, P as PrimaryAction, M as Media, b as MediaContent } from "../../chunks/index-f655cb0a.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-01e0e8cd.js";
import { a as allGamesList } from "../../chunks/gamesData-1a9796e6.js";
import "../../chunks/Ripple-d40e98c6.js";
import "../../chunks/gulagSSSR-7bb563db.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let element;
  let instance;
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setDefaultFocusState(focusState) {
    instance.setDefaultFocusState(focusState);
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.setDefaultFocusState === void 0 && $$bindings.setDefaultFocusState && setDefaultFocusState !== void 0)
    $$bindings.setDefaultFocusState(setDefaultFocusState);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0)
    $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    usePass = [forwardEvents, ...use];
    $$rendered = `${validate_component(MenuSurface, "MenuSurface").$$render($$result, Object.assign({ use: usePass }, {
      class: classMap({ [className]: true, "mdc-menu": true })
    }, $$restProps, { this: element }, { open }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      },
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
classAdderBuilder({
  class: "mdc-menu__selection-group-icon",
  component: Graphic
});
const workshop = {
  name: allGamesList.gulag.promo.name,
  logo: allGamesList.gulag.promo.logo,
  shortName: allGamesList.gulag.promo.shortName,
  date: "22.02.2022",
  place: "ul. Pu\u0142awska 37, Warsawa",
  social: [
    "",
    "",
    "",
    "",
    ""
  ],
  eventbrite: "https://www.eventbrite.com/",
  show: true
};
const workshops = [workshop];
var workshops_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrap-hide-menu.svelte-16nqwdu{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px 0}.wrap-hide-menu.svelte-16nqwdu,.wrap-btns.svelte-16nqwdu{display:flex;flex-direction:row;flex-wrap:wrap}.wrap-btns.svelte-16nqwdu{margin-top:15px;justify-content:flex-end;align-content:flex-end;align-items:flex-end}",
  map: null
};
const Workshops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gamesShortNames = workshops.map(function(workshopData) {
    return {
      shortName: workshopData.shortName,
      show: true
    };
  });
  let moreInfoMenu = [""];
  console.log(workshops);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "Upcoming workshops \u{1F3AF}" }, {}, {
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
        default: () => `${each(workshops, (workshop2, i) => `${validate_component(Item, "Item").$$render($$result, {
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
              style: "background-image: url(" + workshop2.logo + ");",
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
              default: () => `${escape(workshop2.name)} `
            })}
                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, { style: "color: #47babb;" }, {}, {
              default: () => `\u{1F4C5} ${escape(workshop2.date)}`
            })}
                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, { style: "color: #47babb;" }, {}, {
              default: () => `\u{1F3E0}  ${escape(workshop2.place)} `
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
