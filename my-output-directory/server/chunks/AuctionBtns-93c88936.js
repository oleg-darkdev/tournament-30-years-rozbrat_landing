import { c as create_ssr_component, u as subscribe, s as setContext, o as onDestroy, w as set_store_value, a as compute_rest_props, g as get_current_component, n as getContext, v as validate_component, m as missing_component, q as globals, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, i as each } from "./index-d2f82617.js";
import { w as writable } from "./index-0141c37a.js";
import { f as forwardEventsBuilder, c as classMap, D as Div } from "./index-d5037018.js";
import { R as Ripple, L as Label } from "./index-2fbb442f.js";
import { B as Button_1 } from "./Button-19836e67.js";
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
const AuctionBtns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  return `${validate_component(Button_1, "Button").$$render($$result, {
    style: "background-color: " + game.promo.brandColor + "; margin: 5px;",
    variant: "unelevated",
    href: game.croundfanding.links.allegro,
    target: "_blank"
  }, {}, {
    default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F525} Auction on allegro ` })}`
  })}
${validate_component(Button_1, "Button").$$render($$result, {
    style: "background-color: " + game.promo.brandColor + "; margin: 5px;",
    variant: "unelevated",
    href: game.croundfanding.links.patronitePl,
    target: "_blank"
  }, {}, {
    default: () => `${validate_component(Label, "Label").$$render($$result, { style: "color: #fff;" }, {}, { default: () => `\u{1F4B8} Donate on patronite` })}`
  })}`;
});
export { AuctionBtns as A, Chip as C, Set$1 as S };
