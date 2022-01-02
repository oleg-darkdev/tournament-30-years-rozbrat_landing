import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, d as escape_object, f as add_attribute, h as getContext, s as setContext, v as validate_component, m as missing_component, i as globals, t as each, r as escape } from "../../chunks/index-4e6387dd.js";
import { I as IconButton } from "../../chunks/IconButton-d064aaf2.js";
import { f as forwardEventsBuilder, c as classMap, B as Button, A, b as Span } from "../../chunks/classAdderBuilder-b24d9c79.js";
import { C as Card, a as Content, A as Actions } from "../../chunks/index-9ad0e08d.js";
import { R as Ripple } from "../../chunks/Ripple-96dfaf3f.js";
import { L as List, I as Item, T as Text, P as PrimaryText, S as SecondaryText } from "../../chunks/index-af2ec3b0.js";
import { B as BlackFaq, S as SocialPanel, C as ColorFaq } from "../../chunks/ColorFaq-2a3e5429.js";
import "../../chunks/dispatch-e66f93b5.js";
const I = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<i${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</i>`;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
const Button_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
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
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        getElement().blur();
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: false,
            color,
            disabled: !!$$restProps.disabled,
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
        "mdc-button": true,
        "mdc-button--raised": variant === "raised",
        "mdc-button--unelevated": variant === "unelevated",
        "mdc-button--outlined": variant === "outlined",
        "smui-button--color-secondary": color === "secondary",
        "mdc-button--touch": touch,
        "mdc-card__action": context === "card:action",
        "mdc-card__action--button": context === "card:action",
        "mdc-dialog__button": context === "dialog:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__action": context === "snackbar:actions",
        "mdc-banner__secondary-action": context === "banner" && secondary,
        "mdc-banner__primary-action": context === "banner" && !secondary,
        "mdc-tooltip__action": context === "tooltip:rich-actions",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, actionProp, defaultProp, secondaryProp, { href }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"mdc-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-button__touch"}"></div>` : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = Span } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__label": context === "button",
        "mdc-fab__label": context === "fab",
        "mdc-tab__text-label": context === "tab",
        "mdc-image-list__label": context === "image-list",
        "mdc-snackbar__label": context === "snackbar",
        "mdc-banner__text": context === "banner",
        "mdc-segmented-button__label": context === "segmented-button",
        "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
        "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
      })
    }, context === "snackbar" ? { "aria-atomic": "false" } : {}, { tabindex }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = I } = $$props;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__icon": context === "button",
        "mdc-fab__icon": context === "fab",
        "mdc-icon-button__icon": context === "icon-button",
        "mdc-icon-button__icon--on": context === "icon-button" && on,
        "mdc-tab__icon": context === "tab",
        "mdc-banner__icon": context === "banner",
        "mdc-segmented-button__icon": context === "segmented-button"
      })
    }, { "aria-hidden": "true" }, component === Svg ? { focusable: "false", tabindex: "-1" } : {}, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `${slots.default ? slots.default({}) : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Label = CommonLabel;
const Icon = CommonIcon;
var support_svelte_svelte_type_style_lang = "";
const css = {
  code: ".accordion-container.svelte-mvqcvl{max-width:750px}",
  map: null
};
const Support = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      default: () => `<div class="${"accordion-container svelte-mvqcvl"}">${each(listOfAuctions, (auction, numberAuction) => `${validate_component(Card, "Card").$$render($$result, {}, {}, {
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
export { Support as default };
