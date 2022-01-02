import { c as create_ssr_component, u as subscribe, s as setContext, o as onDestroy, w as set_store_value, a as compute_rest_props, g as get_current_component, h as getContext, v as validate_component, m as missing_component, i as globals, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, t as each, x as tick, r as escape } from "../../chunks/index-4e6387dd.js";
import { C as Card, P as PrimaryAction, M as Media, a as Content } from "../../chunks/index-9ad0e08d.js";
import { w as writable } from "../../chunks/index-89505517.js";
import { f as forwardEventsBuilder, c as classMap, D as Div } from "../../chunks/classAdderBuilder-b24d9c79.js";
import { R as Ripple } from "../../chunks/Ripple-816f236b.js";
import { B as BlackFaq, C as ColorFaq, S as SocialPanel } from "../../chunks/ColorFaq-2a3e5429.js";
import "tslib";
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
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-chip__checkmark": true
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}><svg class="${"mdc-chip__checkmark-svg"}" viewBox="${"-2 -3 30 30"}"><path class="${"mdc-chip__checkmark-path"}" fill="${"none"}" stroke="${"black"}" d="${"M1.73,12.91 8.1,19.28 22.79,4.59"}"></path></svg>
</span>`;
});
const Text$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "tabindex", "focus", "getInput", "getElement"]);
  let $filter, $$unsubscribe_filter;
  let $nonInteractive, $$unsubscribe_nonInteractive;
  let $choice, $$unsubscribe_choice;
  let $isSelected, $$unsubscribe_isSelected;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { tabindex = getContext("SMUI:chips:chip:focusable") ? 0 : -1 } = $$props;
  let element;
  let input = void 0;
  let primaryAction = void 0;
  let internalAttrs = {};
  const nonInteractive = getContext("SMUI:chips:nonInteractive");
  $$unsubscribe_nonInteractive = subscribe(nonInteractive, (value) => $nonInteractive = value);
  const choice = getContext("SMUI:chips:choice");
  $$unsubscribe_choice = subscribe(choice, (value) => $choice = value);
  const filter = getContext("SMUI:chips:filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  const isSelected = getContext("SMUI:chips:chip:isSelected");
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
  function waitForTabindex(fn) {
    if (internalAttrs["tabindex"] !== element.getAttribute("tabindex")) {
      tick().then(fn);
    } else {
      fn();
    }
  }
  function focus() {
    waitForTabindex(() => {
    });
  }
  function getInput() {
    return input && input.getElement();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.getInput === void 0 && $$bindings.getInput && getInput !== void 0)
    $$bindings.getInput(getInput);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$filter ? `${validate_component(Checkmark, "Checkmark").$$render($$result, { this: input }, {
      this: ($$value) => {
        input = $$value;
        $$settled = false;
      }
    }, {})}` : ``}
<span role="${"gridcell"}"${add_attribute("this", element, 0)}>${$nonInteractive ? `<span class="${"mdc-chip__text"}">${slots.default ? slots.default({}) : ``}</span>` : `<span${spread([
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-chip__primary-action": true
        }))
      },
      {
        role: escape_attribute_value($filter ? "checkbox" : $choice ? "radio" : "button")
      },
      escape_object($filter || $choice ? {
        "aria-selected": $isSelected ? "true" : "false"
      } : {}),
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ])}${add_attribute("this", primaryAction, 0)}><span class="${"mdc-chip__text"}">${slots.default ? slots.default({}) : ``}</span></span>`}
</span>`;
  } while (!$$settled);
  $$unsubscribe_filter();
  $$unsubscribe_nonInteractive();
  $$unsubscribe_choice();
  $$unsubscribe_isSelected();
  return $$rendered;
});
const Set$1 = Set_1;
const Text = Text$1;
let game$1 = {
  promo: {
    name: "Graffity culture",
    img: "",
    status: ""
  },
  croundfandingLink: "",
  goal: "",
  educationMoments: ["", ""],
  description: ["", ""],
  targetAudience: "",
  printableFiles: "",
  workShopsReports: [
    {
      date: "",
      img: "",
      linkInstagram: ""
    }
  ],
  fullInfo: {
    LOR: "",
    photos: [],
    haracters: [
      {
        name: "",
        description: "",
        photo: ""
      }
    ]
  },
  updates: [
    {
      date: "",
      changes: ["", "", ""]
    }
  ]
};
let game = {
  promo: {
    name: "Welcome to Belarus: Journalists",
    img: "",
    status: 1
  },
  croundfandingLink: "",
  goal: "",
  educationMoments: ["", ""],
  description: ["", ""],
  targetAudience: "",
  printableFiles: "",
  workShopsReports: [
    {
      date: "",
      img: "",
      linkInstagram: ""
    }
  ],
  fullInfo: {
    LOR: "",
    photos: [],
    \u0441haracters: [
      {
        name: "",
        description: "",
        photo: ""
      }
    ]
  },
  updates: [
    {
      date: "",
      changes: ["", "", ""]
    }
  ]
};
let PoliticalGames = [game], HistoricalGames = [game], EconomicalGames = [], StrategicGames = [], ITGames = [], OfficeGames = [], ManagementGames = [], ArtGames = [game$1];
var gamesList = {
  politicalGames: PoliticalGames,
  historicalGames: HistoricalGames,
  economicalGames: EconomicalGames,
  strategicGames: StrategicGames,
  iTGames: ITGames,
  officeGames: OfficeGames,
  managementGames: ManagementGames,
  artGames: ArtGames
};
var shop_svelte_svelte_type_style_lang = "";
const css = {
  code: ".chips-wrap.svelte-jrko50{display:flex;justify-content:center;flex-direction:row;width:90%}.games-promo-wrap.svelte-jrko50{display:flex;justify-content:center;flex-direction:row;flex-wrap:wrap}",
  map: null
};
const Shop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtredGames;
  let choices = [
    "Political",
    "Historical",
    "Economical",
    "Strategic",
    "IT",
    "Office",
    "Management",
    "Art"
  ];
  let selected = [];
  function getGames(gamesCattegories) {
    return gamesList.politicalGames;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filtredGames = getGames();
    $$rendered = `

    
${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
      title: "Our board games. Use cattegory filtering \u{1F447}"
    }, {}, {
      default: () => `<div class="${"games-promo-wrap svelte-jrko50"}"><div class="${"chips-wrap svelte-jrko50"}">${validate_component(Set$1, "Set").$$render($$result, { chips: choices, filter: true, selected }, {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      }, {
        default: ({ chip }) => `${validate_component(Chip, "Chip").$$render($$result, { chip, touch: true }, {}, {
          default: () => `${validate_component(Text, "Text").$$render($$result, { style: "" }, {}, { default: () => `${escape(chip)}` })}`
        })}`
      })}</div>
${each(filtredGames, (game2) => `<div>${validate_component(Card, "Card").$$render($$result, {
        style: "width: 400px; background-color: #050506; margin: 10px;"
      }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
          default: () => `${validate_component(Media, "Media").$$render($$result, {
            class: "card-media-16x9",
            style: "background-image: url(" + game2.img + ");",
            aspectRatio: "16x9"
          }, {}, {})}
    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
            default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0; font: 54px'grafitty'; color: #fff;"}">${escape(game2.name)}</h2>
      <h3 class="${"mdc-typography--subtitle2"}" style="${"margin: 0 0 10px; font-family: roboto; color: #888;"}">${escape(game2.description)}</h3>
    `
          })}
  `
        })}
  `
      })}
  </div>`)}</div>`
    })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "Filtering boardgames." }, {}, {
      default: () => `${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "We make content with love" }, {}, {})}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Shop as default };
