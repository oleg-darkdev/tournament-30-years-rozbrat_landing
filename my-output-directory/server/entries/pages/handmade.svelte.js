import { c as create_ssr_component, u as subscribe, s as setContext, o as onDestroy, w as set_store_value, a as compute_rest_props, g as get_current_component, j as getContext, v as validate_component, m as missing_component, k as globals, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, h as each, i as escape } from "../../chunks/index-99bd7138.js";
import { B as Button_1, L as Label, I as Icon } from "../../chunks/Button-932af60d.js";
import { C as Card, M as Media, b as MediaContent, a as Content, A as Actions } from "../../chunks/index-f655cb0a.js";
import { L as List, I as Item, T as Text, P as PrimaryText, S as SecondaryText } from "../../chunks/index-9e8f6ec6.js";
import { w as writable } from "../../chunks/index-5c9f1cbc.js";
import { f as forwardEventsBuilder, c as classMap, D as Div } from "../../chunks/Subtitle-e1b47b45.js";
import { R as Ripple } from "../../chunks/Ripple-d40e98c6.js";
/* empty css                                                                 */import { B as BlackFaq } from "../../chunks/BlackFaq-78830e0c.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-01e0e8cd.js";
import { a as allGamesList } from "../../chunks/gamesData-1a9796e6.js";
import "../../chunks/gulagSSSR-7bb563db.js";
const ContextFragment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeValue, $$unsubscribe_storeValue;
  let { key } = $$props;
  let { value } = $$props;
  const storeValue = writable(value);
  $$unsubscribe_storeValue = subscribe(storeValue, (value2) => $storeValue = value2);
  setContext(key, storeValue);
  onDestroy(() => {
    storeValue.set(void 0);
  });
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  set_store_value(storeValue, $storeValue = value, $storeValue);
  $$unsubscribe_storeValue();
  return `${slots.default ? slots.default({}) : ``}`;
});
const { Object: Object_1 } = globals;
const Chip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "chip",
    "ripple",
    "touch",
    "shouldRemoveOnTrailingIconClick",
    "shouldFocusPrimaryActionOnClick",
    "component",
    "getElement"
  ]);
  let $index, $$unsubscribe_index;
  let $choice, $$unsubscribe_choice;
  let $leadingIconClassesStore, $$unsubscribe_leadingIconClassesStore;
  let $isSelectedStore, $$unsubscribe_isSelectedStore;
  let $shouldRemoveOnTrailingIconClickStore, $$unsubscribe_shouldRemoveOnTrailingIconClickStore;
  let $initialSelectedStore, $$unsubscribe_initialSelectedStore;
  let $nonInteractive, $$unsubscribe_nonInteractive;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { chip: chipId } = $$props;
  let { ripple = true } = $$props;
  let { touch = false } = $$props;
  let { shouldRemoveOnTrailingIconClick = true } = $$props;
  let { shouldFocusPrimaryActionOnClick = true } = $$props;
  let element;
  let internalClasses = {};
  let leadingIconClasses = {};
  let internalStyles = {};
  const initialSelectedStore = getContext("SMUI:chips:chip:initialSelected");
  $$unsubscribe_initialSelectedStore = subscribe(initialSelectedStore, (value) => $initialSelectedStore = value);
  let selected = $initialSelectedStore;
  const nonInteractive = getContext("SMUI:chips:nonInteractive");
  $$unsubscribe_nonInteractive = subscribe(nonInteractive, (value) => $nonInteractive = value);
  const choice = getContext("SMUI:chips:choice");
  $$unsubscribe_choice = subscribe(choice, (value) => $choice = value);
  const index = getContext("SMUI:chips:chip:index");
  $$unsubscribe_index = subscribe(index, (value) => $index = value);
  let { component = Div } = $$props;
  const shouldRemoveOnTrailingIconClickStore = writable(shouldRemoveOnTrailingIconClick);
  $$unsubscribe_shouldRemoveOnTrailingIconClickStore = subscribe(shouldRemoveOnTrailingIconClickStore, (value) => $shouldRemoveOnTrailingIconClickStore = value);
  setContext("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", shouldRemoveOnTrailingIconClickStore);
  const isSelectedStore = writable(selected);
  $$unsubscribe_isSelectedStore = subscribe(isSelectedStore, (value) => $isSelectedStore = value);
  setContext("SMUI:chips:chip:isSelected", isSelectedStore);
  const leadingIconClassesStore = writable(leadingIconClasses);
  $$unsubscribe_leadingIconClassesStore = subscribe(leadingIconClassesStore, (value) => $leadingIconClassesStore = value);
  setContext("SMUI:chips:chip:leadingIconClasses", leadingIconClassesStore);
  setContext("SMUI:chips:chip:focusable", $choice && selected || $index === 0);
  if (!chipId) {
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.chip === void 0 && $$bindings.chip && chipId !== void 0)
    $$bindings.chip(chipId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.shouldRemoveOnTrailingIconClick === void 0 && $$bindings.shouldRemoveOnTrailingIconClick && shouldRemoveOnTrailingIconClick !== void 0)
    $$bindings.shouldRemoveOnTrailingIconClick(shouldRemoveOnTrailingIconClick);
  if ($$props.shouldFocusPrimaryActionOnClick === void 0 && $$bindings.shouldFocusPrimaryActionOnClick && shouldFocusPrimaryActionOnClick !== void 0)
    $$bindings.shouldFocusPrimaryActionOnClick(shouldFocusPrimaryActionOnClick);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    set_store_value(shouldRemoveOnTrailingIconClickStore, $shouldRemoveOnTrailingIconClickStore = shouldRemoveOnTrailingIconClick, $shouldRemoveOnTrailingIconClickStore);
    set_store_value(isSelectedStore, $isSelectedStore = selected, $isSelectedStore);
    set_store_value(leadingIconClassesStore, $leadingIconClassesStore = leadingIconClasses, $leadingIconClassesStore);
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({
      use: [
        [
          Ripple,
          {
            ripple: ripple && !$nonInteractive,
            unbounded: false,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-chip": true,
        "mdc-chip--selected": selected,
        "mdc-chip--touch": touch,
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, { role: "row" }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${ripple && !$nonInteractive ? `<div class="${"mdc-chip__ripple"}"></div>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${touch ? `<div class="${"mdc-chip__touch"}"></div>` : ``}`
    })}`;
  } while (!$$settled);
  $$unsubscribe_index();
  $$unsubscribe_choice();
  $$unsubscribe_leadingIconClassesStore();
  $$unsubscribe_isSelectedStore();
  $$unsubscribe_shouldRemoveOnTrailingIconClickStore();
  $$unsubscribe_initialSelectedStore();
  $$unsubscribe_nonInteractive();
  return $$rendered;
});
const Set_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "chips",
    "key",
    "selected",
    "nonInteractive",
    "choice",
    "filter",
    "input",
    "getElement"
  ]);
  let $filterStore, $$unsubscribe_filterStore;
  let $choiceStore, $$unsubscribe_choiceStore;
  let $nonInteractiveStore, $$unsubscribe_nonInteractiveStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { chips = [] } = $$props;
  let { key = (chip) => chip } = $$props;
  let { selected = void 0 } = $$props;
  let { nonInteractive = false } = $$props;
  let { choice = false } = $$props;
  let { filter = false } = $$props;
  let { input = false } = $$props;
  let element;
  let initialSelected = chips.map((chipId) => choice && selected === chipId || filter && selected.indexOf(chipId) !== -1);
  const nonInteractiveStore = writable(nonInteractive);
  $$unsubscribe_nonInteractiveStore = subscribe(nonInteractiveStore, (value) => $nonInteractiveStore = value);
  setContext("SMUI:chips:nonInteractive", nonInteractiveStore);
  const choiceStore = writable(choice);
  $$unsubscribe_choiceStore = subscribe(choiceStore, (value) => $choiceStore = value);
  setContext("SMUI:chips:choice", choiceStore);
  const filterStore = writable(filter);
  $$unsubscribe_filterStore = subscribe(filterStore, (value) => $filterStore = value);
  setContext("SMUI:chips:filter", filterStore);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.chips === void 0 && $$bindings.chips && chips !== void 0)
    $$bindings.chips(chips);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0)
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.choice === void 0 && $$bindings.choice && choice !== void 0)
    $$bindings.choice(choice);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0)
    $$bindings.filter(filter);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(nonInteractiveStore, $nonInteractiveStore = nonInteractive, $nonInteractiveStore);
  set_store_value(choiceStore, $choiceStore = choice, $choiceStore);
  set_store_value(filterStore, $filterStore = filter, $filterStore);
  $$unsubscribe_filterStore();
  $$unsubscribe_choiceStore();
  $$unsubscribe_nonInteractiveStore();
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-chip-set": true,
        "smui-chip-set--non-interactive": nonInteractive,
        "mdc-chip-set--choice": choice,
        "mdc-chip-set--filter": filter,
        "mdc-chip-set--input": input
      }))
    },
    { role: "grid" },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${each(chips, (chip, i) => `${validate_component(ContextFragment, "ContextFragment").$$render($$result, { key: "SMUI:chips:chip:index", value: i }, {}, {
    default: () => `${validate_component(ContextFragment, "ContextFragment").$$render($$result, {
      key: "SMUI:chips:chip:initialSelected",
      value: initialSelected[i]
    }, {}, {
      default: () => `${slots.default ? slots.default({ chip }) : ``}
      `
    })}
    `
  })}`)}
</div>`;
});
const Set$1 = Set_1;
const gameData = allGamesList.gulag;
let auctionGulag = {
  name: gameData.promo.name,
  description: gameData.moreInfo.description,
  promo: gameData.promo.banner,
  logo: gameData.promo.logo,
  brandColor: gameData.promo.brandColor,
  linkAllegro: gameData.croundfanding.links.allegro,
  linkPatronitePl: gameData.croundfanding.links.patronitePl,
  goal: gameData.croundfanding.goal,
  showList: false,
  id: gameData.promo.id,
  lotsList: [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      name: "Name of lot",
      etsy: "https://www.etsy.com/"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      name: "Name of lot",
      etsy: "https://www.etsy.com/"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      name: "Name of lot",
      etsy: "https://www.etsy.com/"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      name: "Name of lot",
      etsy: "https://www.etsy.com/"
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      name: "Name of lot",
      etsy: "https://www.etsy.com/"
    }
  ]
};
const listOfAuctions = [auctionGulag];
const Handmade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log();
  return `

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Support the project - buying a homemade souvenir, at auction."
  }, {}, {
    default: () => `


${validate_component(List, "List").$$render($$result, { style: "" }, {}, {
      default: () => `${each(listOfAuctions, (auction) => `${validate_component(Item, "Item").$$render($$result, {
        style: "display: flex; flex-direction: row; flex-wrap: wrap; justify-content: content; height: auto; border: 2px solid #47babb; "
      }, {}, {
        default: () => `<div style="${"display: flex; width: auto; margin-bottom: 5px;"}">${validate_component(Card, "Card").$$render($$result, {
          style: "max-height: 150px; width: 300px; margin: 15px;"
        }, {}, {
          default: () => `${validate_component(Media, "Media").$$render($$result, {
            style: "background-image: url(" + auction.logo + ");",
            class: "card-media-16x9",
            aspectRatio: "16x9"
          }, {}, {
            default: () => `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {})}
                `
          })}
            `
        })}</div>
             <div style="${"display: flex; margin-right: 15px; width: auto; flex-wrap: wrap; flex-direction: column; height: auto; justify-content: flex-start;"}">${validate_component(Text, "Text").$$render($$result, {
          style: "color: " + auction.brandColor + ";"
        }, {}, {
          default: () => `${escape(auction.name)}

        `
        })}
        ${validate_component(Set$1, "Set").$$render($$result, {
          chips: [auction.lotsList.length],
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
        
       <div style="${"display: flex; width: 350px; flex-wrap: wrap; flex-direction: column; height: auto; align-content: flex-end;"}">${validate_component(Button_1, "Button").$$render($$result, {
          style: " margin: 5px; background-color: " + auction.brandColor + "; ",
          variant: "unelevated",
          href: auction.linkAllegro,
          target: "_blank"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F525} Auction on allegro ` })}
        `
        })}
        ${validate_component(Button_1, "Button").$$render($$result, {
          style: "margin: 5px; background-color: " + auction.brandColor + ";",
          variant: "outlined",
          href: auction.linkPatronitePl,
          target: "_blank"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F4B8} Donate on patronite` })}
        `
        })}</div>
        
    `
      })}`)}`
    })}`
  })}

${each(listOfAuctions, (auction, numberAuction) => `${validate_component(BlackFaq, "BlackFaq").$$render($$result, { title: "", color: auction.brandColor }, {}, {
    default: () => `<a${add_attribute("id", auction.id, 0)}></a>
    ${validate_component(Card, "Card").$$render($$result, {
      style: "margin-bottom: 15px; width: auto; max-width: 100%; min-width: 300px;"
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: "card-media-16x9",
        aspectRatio: "16x9",
        style: "max-height: 300px; height: 250px; width: auto; min-width: 300px; background-image: url(" + auction.promo + ");"
      }, {}, {})}
            ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => `<h3 style="${"color: #fff; font: 22px 'grafitty'; margin-bottom: -15px;"}">Auction <span style="${"color: " + escape(auction.brandColor) + ";"}">#${escape(numberAuction)}.</span></h3>
                <div style="${"display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; margin-bottom: -10px;"}"><h2 style="${"color: #fff; font: 26px 'grafitty'; margin-right: 15px;"}">${escape(auction.name)}</h2>
                    ${validate_component(Button_1, "Button").$$render($$result, {
          style: "border-color: " + auction.brandColor + ";",
          variant: "outlined"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `Show lots` })}
                        ${validate_component(Icon, "Icon").$$render($$result, {
            class: "material-icons",
            style: "color: " + auction.brandColor + ";"
          }, {}, {
            default: () => `${escape(auction.showList ? "expand_less" : "expand_more")}`
          })}
                    `
        })}</div>
                <p style="${"color: #fff; 'roboto';"}">${escape(auction.description)}</p>
                <div style="${"width: 100%;"}">${auction.showList ? `<div style="${"display: flex; width: 100%; flex-wrap: wrap; flex-direction: row; justify-content: flex-start; margin-bottom: 10px;"}">${validate_component(Button_1, "Button").$$render($$result, {
          style: "background-color: " + auction.brandColor + "; margin: 0 10px 10px 0;",
          variant: "unelevated",
          href: auction.linkAllegro,
          target: "_blank"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F525} Auction on allegro ` })}
                        `
        })}
                        ${validate_component(Button_1, "Button").$$render($$result, {
          style: "background-color: " + auction.brandColor + ";",
          variant: "unelevated",
          href: auction.linkPatronitePl,
          target: "_blank"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F4B8} Donate on patronite` })}
                        `
        })}</div>
                    ${validate_component(List, "List").$$render($$result, { twoLine: true, nonInteractive: true }, {}, {
          default: () => `${each(auction.lotsList, (lot) => `${validate_component(Item, "Item").$$render($$result, {
            style: "display: flex; flex-wrap: wrap; flex-direction: row; height: auto; border: solid 2px " + auction.brandColor
          }, {}, {
            default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
              default: () => `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {
                style: "color: " + auction.brandColor + ";"
              }, {}, { default: () => `${escape(lot.name)}` })}
                                ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {
                style: "color: " + auction.brandColor + ";"
              }, {}, {
                default: () => `${escape(lot.description)}`
              })}
                            `
            })}
                            <div style="${"display: flex; width: 100%; justify-content: flex-start; margin-bottom: 10px;"}">${validate_component(Button_1, "Button").$$render($$result, {
              style: "border-color: " + auction.brandColor + ";",
              variant: "outlined",
              href: lot.etsy,
              target: "_blank"
            }, {}, {
              default: () => `${validate_component(Label, "Label").$$render($$result, {
                style: "color: " + auction.brandColor + ";"
              }, {}, { default: () => `Buy lot on etsy` })}
                                `
            })}</div>
                        `
          })}`)}
                    `
        })}` : ``}</div>
            `
      })}
            ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => `${validate_component(Button_1, "Button").$$render($$result, {
          style: "background-color: " + auction.brandColor + ";",
          variant: "unelevated",
          href: auction.linkAllegro,
          target: "_blank"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F525} Auction on allegro ` })}
                `
        })}
                ${validate_component(Button_1, "Button").$$render($$result, {
          style: "background-color: " + auction.brandColor + ";",
          variant: "unelevated",
          href: auction.linkPatronitePl,
          target: "_blank"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F4B8} Donate on patronite` })}
                `
        })}
            `
      })}
            `
    })}
            `
  })}`)}

            `;
});
export { Handmade as default };
