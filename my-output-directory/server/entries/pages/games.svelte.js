import { l as listen, j as bubble, p as prevent_default, k as stop_propagation, c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, d as escape_object, f as add_attribute, n as getContext, v as validate_component, m as missing_component, u as subscribe, s as setContext, o as onDestroy, w as set_store_value, e as escape_attribute_value, i as each, h as escape } from "../../chunks/index-d2f82617.js";
import { _ as __extends, g as __values, a as __assign, M as MDCFoundation, L as Label, c as Item, T as Text } from "../../chunks/index-2fbb442f.js";
import { S as SocialPanel } from "../../chunks/SocialPanel-aff7763b.js";
import { B as BlackFaq } from "../../chunks/BlackFaq-325a0523.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-c54aa38b.js";
import { e as Card, d as Content, g as PrimaryAction, M as Media, P as Paper, T as Title, C as Content$1 } from "../../chunks/index-d5037018.js";
import { w as writable } from "../../chunks/index-0141c37a.js";
import { F as Fab } from "../../chunks/Fab-389ebb11.js";
import { c as categoriesGames, a as allGamesList } from "../../chunks/gamesData-e89e0b32.js";
import { B as Button_1 } from "../../chunks/Button-19836e67.js";
import { P as PromoCard } from "../../chunks/PromoCard-dbbbc03d.js";
import "../../chunks/AuctionBtns-93c88936.js";
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  SINGLE_SELECT: "mdc-segmented-button--single-select"
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(_super) {
  __extends(MDCSegmentedButtonFoundation, _super);
  function MDCSegmentedButtonFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCSegmentedButtonFoundation.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCSegmentedButtonFoundation, "defaultAdapter", {
    get: function() {
      return {
        hasClass: function() {
          return false;
        },
        getSegments: function() {
          return [];
        },
        selectSegment: function() {
          return void 0;
        },
        unselectSegment: function() {
          return void 0;
        },
        notifySelectedChange: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSegmentedButtonFoundation.prototype.selectSegment = function(indexOrSegmentId) {
    this.adapter.selectSegment(indexOrSegmentId);
  };
  MDCSegmentedButtonFoundation.prototype.unselectSegment = function(indexOrSegmentId) {
    this.adapter.unselectSegment(indexOrSegmentId);
  };
  MDCSegmentedButtonFoundation.prototype.getSelectedSegments = function() {
    return this.adapter.getSegments().filter(function(segmentDetail) {
      return segmentDetail.selected;
    });
  };
  MDCSegmentedButtonFoundation.prototype.isSegmentSelected = function(indexOrSegmentId) {
    return this.adapter.getSegments().some(function(segmentDetail) {
      return (segmentDetail.index === indexOrSegmentId || segmentDetail.segmentId === indexOrSegmentId) && segmentDetail.selected;
    });
  };
  MDCSegmentedButtonFoundation.prototype.isSingleSelect = function() {
    return this.adapter.hasClass(cssClasses$1.SINGLE_SELECT);
  };
  MDCSegmentedButtonFoundation.prototype.handleSelected = function(detail) {
    if (this.isSingleSelect()) {
      this.unselectPrevSelected(detail.index);
    }
    this.adapter.notifySelectedChange(detail);
  };
  MDCSegmentedButtonFoundation.prototype.unselectPrevSelected = function(index) {
    var e_1, _a;
    try {
      for (var _b = __values(this.getSelectedSegments()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var selectedSegment = _c.value;
        if (selectedSegment.index !== index) {
          this.unselectSegment(selectedSegment.index);
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  return MDCSegmentedButtonFoundation;
})(MDCFoundation);
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
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
const Icon = CommonIcon;
const SegmentedButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "segments", "key", "singleSelect", "selected", "getElement"]);
  let $singleSelectStore, $$unsubscribe_singleSelectStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { segments = [] } = $$props;
  let { key = (segment) => segment } = $$props;
  let { singleSelect = false } = $$props;
  let { selected = singleSelect ? void 0 : [] } = $$props;
  let element;
  let initialSelected = segments.map((segmentId) => singleSelect && selected === segmentId || !singleSelect && selected.indexOf(segmentId) !== -1);
  setContext("SMUI:icon:context", "segmented-button");
  setContext("SMUI:label:context", "segmented-button");
  const singleSelectStore = writable(singleSelect);
  $$unsubscribe_singleSelectStore = subscribe(singleSelectStore, (value) => $singleSelectStore = value);
  setContext("SMUI:segmented-button:singleSelect", singleSelectStore);
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0)
    $$bindings.segments(segments);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.singleSelect === void 0 && $$bindings.singleSelect && singleSelect !== void 0)
    $$bindings.singleSelect(singleSelect);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  set_store_value(singleSelectStore, $singleSelectStore = singleSelect, $singleSelectStore);
  $$unsubscribe_singleSelectStore();
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-segmented-button": true,
        "mdc-segmented-button--single-select": singleSelect
      }))
    },
    {
      role: escape_attribute_value(singleSelect ? "radiogroup" : "group")
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${each(segments, (segment, i) => `${validate_component(ContextFragment, "ContextFragment").$$render($$result, {
    key: "SMUI:segmented-button:segment:index",
    value: i
  }, {}, {
    default: () => `${validate_component(ContextFragment, "ContextFragment").$$render($$result, {
      key: "SMUI:segmented-button:segment:initialSelected",
      value: initialSelected[i]
    }, {}, {
      default: () => `${slots.default ? slots.default({ segment }) : ``}
      `
    })}
    `
  })}`)}
</div>`;
});
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var booleans = {
  TRUE: "true",
  FALSE: "false"
};
var attributes = {
  ARIA_CHECKED: "aria-checked",
  ARIA_PRESSED: "aria-pressed",
  DATA_SEGMENT_ID: "data-segment-id"
};
var cssClasses = {
  SELECTED: "mdc-segmented-button__segment--selected"
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var emptyClientRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
};
(function(_super) {
  __extends(MDCSegmentedButtonSegmentFoundation, _super);
  function MDCSegmentedButtonSegmentFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCSegmentedButtonSegmentFoundation.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCSegmentedButtonSegmentFoundation, "defaultAdapter", {
    get: function() {
      return {
        isSingleSelect: function() {
          return false;
        },
        getAttr: function() {
          return "";
        },
        setAttr: function() {
          return void 0;
        },
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        notifySelectedChange: function() {
          return void 0;
        },
        getRootBoundingClientRect: function() {
          return emptyClientRect;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSegmentedButtonSegmentFoundation.prototype.isSelected = function() {
    return this.adapter.hasClass(cssClasses.SELECTED);
  };
  MDCSegmentedButtonSegmentFoundation.prototype.setSelected = function() {
    this.adapter.addClass(cssClasses.SELECTED);
    this.setAriaAttr(booleans.TRUE);
  };
  MDCSegmentedButtonSegmentFoundation.prototype.setUnselected = function() {
    this.adapter.removeClass(cssClasses.SELECTED);
    this.setAriaAttr(booleans.FALSE);
  };
  MDCSegmentedButtonSegmentFoundation.prototype.getSegmentId = function() {
    var _a;
    return (_a = this.adapter.getAttr(attributes.DATA_SEGMENT_ID)) !== null && _a !== void 0 ? _a : void 0;
  };
  MDCSegmentedButtonSegmentFoundation.prototype.handleClick = function() {
    if (this.adapter.isSingleSelect()) {
      this.setSelected();
    } else {
      this.toggleSelection();
    }
    this.adapter.notifySelectedChange(this.isSelected());
  };
  MDCSegmentedButtonSegmentFoundation.prototype.getDimensions = function() {
    return this.adapter.getRootBoundingClientRect();
  };
  MDCSegmentedButtonSegmentFoundation.prototype.toggleSelection = function() {
    if (this.isSelected()) {
      this.setUnselected();
    } else {
      this.setSelected();
    }
  };
  MDCSegmentedButtonSegmentFoundation.prototype.setAriaAttr = function(value) {
    if (this.adapter.isSingleSelect()) {
      this.adapter.setAttr(attributes.ARIA_CHECKED, value);
    } else {
      this.adapter.setAttr(attributes.ARIA_PRESSED, value);
    }
  };
  return MDCSegmentedButtonSegmentFoundation;
})(MDCFoundation);
const Segment$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "style", "segment", "ripple", "touch", "selected", "getElement"]);
  let $$unsubscribe_index;
  let $$unsubscribe_singleSelect;
  let $initialSelectedStore, $$unsubscribe_initialSelectedStore;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { segment: segmentId } = $$props;
  let { ripple = true } = $$props;
  let { touch = false } = $$props;
  const initialSelectedStore = getContext("SMUI:segmented-button:segment:initialSelected");
  $$unsubscribe_initialSelectedStore = subscribe(initialSelectedStore, (value) => $initialSelectedStore = value);
  let { selected = uninitializedValue } = $$props;
  if (isUninitializedValue(selected)) {
    selected = $initialSelectedStore;
  }
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  const singleSelect = getContext("SMUI:segmented-button:singleSelect");
  $$unsubscribe_singleSelect = subscribe(singleSelect, (value) => value);
  const index = getContext("SMUI:segmented-button:segment:index");
  $$unsubscribe_index = subscribe(index, (value) => value);
  if (!segmentId) {
    throw new Error("The segment property is required! It should be passed down from the SegmentedButton to the Segment.");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.segment === void 0 && $$bindings.segment && segmentId !== void 0)
    $$bindings.segment(segmentId);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  $$unsubscribe_index();
  $$unsubscribe_singleSelect();
  $$unsubscribe_initialSelectedStore();
  return `<button${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-segmented-button__segment": true,
        "mdc-segmented-button__segment--touch": touch,
        "mdc-segmented-button__segment--selected": selected,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    {
      role: escape_attribute_value(singleSelect ? "radio" : void 0)
    },
    {
      "aria-pressed": escape_attribute_value(!singleSelect ? selected ? "true" : "false" : void 0)
    },
    {
      "aria-checked": escape_attribute_value(singleSelect ? selected ? "true" : "false" : void 0)
    },
    escape_object(internalAttrs),
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${ripple ? `<div class="${"mdc-segmented-button__ripple"}"></div>` : ``}${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-segmented-button__segment__touch"}"></div>` : ``}</button>`;
});
const Segment = Segment$1;
const SelectView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const views = [
    {
      name: "list",
      icon: "view_list",
      description: "Short list."
    },
    {
      name: "brief",
      icon: "view_module",
      description: "Logo with a brief description."
    },
    {
      name: "full",
      icon: "view_stream",
      description: "Detailed information."
    }
  ];
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `
<div style="${"margin-bottom: 0;"}"><div class="${"wrap-games-hidden-block"}"><h2 style="${"font: 28px 'grafitty'; margin: 0 0 15px 0; width: 280px; text-align:center; color: #fff;"}">Choose the format display \u{1F447}</h2>
    <div style="${"display: flex; display: flex; justify-content: center;align-items: center; flex-direction: row; flex-direction: row;"}">${validate_component(SegmentedButton, "SegmentedButton").$$render($$result, {
      style: "margin-right: 15px;",
      segments: views,
      singleSelect: true,
      key: (segment) => segment.name,
      selected: options.view
    }, {
      selected: ($$value) => {
        options.view = $$value;
        $$settled = false;
      }
    }, {
      default: ({ segment }) => `${validate_component(Segment, "Segment").$$render($$result, { segment, title: segment.name }, {}, {
        default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, { default: () => `${escape(segment.icon)}` })}`
      })}`
    })}  
    ${validate_component(Fab, "Fab").$$render($$result, { color: "primary", mini: true }, {}, {
      default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, { default: () => `help_outline` })}`
    })}</div>
   
      <div style="${"margin: 0 0 0 0; display: flex; display: flex; justify-content: center;align-items: flex-start; flex-direction: column; flex-direction: column; "}">${``}</div>
    
        </div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const SelectCategory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedCategoriesGames;
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  selectedCategoriesGames = options.categories;
  return `<div class="${"wrap-games-hidden-block"}"><p>${escape(selectedCategoriesGames)}</p>
    <h2 style="${"font: 28px 'grafitty'; margin: 0; text-align:center; color: #fff;"}">Select one or more boardgame category</h2>
    <div style="${"display: flex; flex-direction: row; flex-wrap: wrap;"}">${each(categoriesGames, (category) => `${validate_component(Button_1, "Button").$$render($$result, {
    style: "margin: 2.5px;",
    touch: true,
    variant: category.selected ? "unelevated" : "outlined"
  }, {}, {
    default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => `${escape(category.emoji)} ${escape(category.text)}`
    })}
            `
  })}`)}</div></div>`;
});
const TableOfContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  let { options } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div style="${"display: flex; justify-content: center;align-items: center; background-color: #fff;"}"><section style="${"max-width: 760px; margin: 0; display: flex; height: auto; "}"><div class="${"tur-bg"}" style="${"flex-direction: column; align-items: center;"}">
            ${validate_component(Card, "Card").$$render($$result, {
      style: "max-width: 740px;  margin-bottom: 15px;"
    }, {}, {
      default: () => `
                  ${validate_component(Content, "Content").$$render($$result, {
        class: "mdc-typography--body2",
        style: "background-color: #191B1B; display: flex; flex-direction: column;"
      }, {}, {
        default: () => `
                      ${validate_component(SelectView, "SelectView").$$render($$result, { step, options }, {
          step: ($$value) => {
            step = $$value;
            $$settled = false;
          },
          options: ($$value) => {
            options = $$value;
            $$settled = false;
          }
        }, {})}
                      ${validate_component(SelectCategory, "SelectCategory").$$render($$result, { step, options }, {
          step: ($$value) => {
            step = $$value;
            $$settled = false;
          },
          options: ($$value) => {
            options = $$value;
            $$settled = false;
          }
        }, {})}
                      `
      })}`
    })}</div></section>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var CardModuleView_svelte_svelte_type_style_lang = "";
const css = {
  code: ".show-more-about-game.svelte-19cip4h{width:250px;border:2px solid #47babb;height:60px;display:flex;justify-content:center;align-items:center;border-radius:4px;color:#47babb}",
  map: null
};
const CardModuleView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  $$result.css.add(css);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "width: 400px; height: auto; margin: 10px;"
  }, {}, {
    default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: "card-media-16x9",
        style: "background-image: url(" + game.promo.logo + ");",
        aspectRatio: "16x9"
      }, {}, {})}`
    })}
    ${validate_component(Content, "Content").$$render($$result, {
      style: "  display: flex; flex-direction: column;"
    }, {}, {
      default: () => `${game.show ? `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0; font: 54px'grafitty'; color: #fff;"}">${escape(game.promo.name)}</h2>
        
            
        ` : ``}
        <div style="${"display: flex; justify-content: center;"}"><div class="${"show-more-about-game svelte-19cip4h"}"><span style="${"font: 24px 'grafitty';"}">Learn more \u{1F52C}</span></div></div>`
    })}`
  })}`;
});
const ModulesView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { games } = $$props;
  if ($$props.games === void 0 && $$bindings.games && games !== void 0)
    $$bindings.games(games);
  return `${each(games, (game) => `<div>${validate_component(CardModuleView, "CardModuleView").$$render($$result, { game }, {}, {})}
    </div>`)}`;
});
const GamesCategoriesWrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { category } = $$props;
  let { gamesOnThisCategory } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.gamesOnThisCategory === void 0 && $$bindings.gamesOnThisCategory && gamesOnThisCategory !== void 0)
    $$bindings.gamesOnThisCategory(gamesOnThisCategory);
  return `${validate_component(Paper, "Paper").$$render($$result, {
    style: "width: 95%;",
    color: "secondary",
    variant: "unelevated",
    class: "mdc-theme--secondary"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, {
      style: "color: var(--mdc-theme-primary); font: 22px 'grafitty'; color: #fff;"
    }, {}, {
      default: () => `Of these, ${escape(category)} - i creat ${escape(gamesOnThisCategory)} games \u{1F3B2}`
    })}
    ${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
            
        `}`
    })}`
  })}`;
});
const Games = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let options;
  const allGames = Object.values(allGamesList.all), historicalGames = Object.values(allGamesList.categories.historical), artGames = Object.values(allGamesList.categories.art), civicActivismGames = Object.values(allGamesList.categories.civicActivism), itGames = Object.values(allGamesList.categories.it);
  let step = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    options = {
      categories: [],
      view: {
        name: "list",
        icon: "view_list",
        description: "Short list."
      }
    };
    $$rendered = `${$$result.head += `${$$result.title = `<title>Boardgames \u{1F3B2}</title>`, ""}`, ""}

${validate_component(TableOfContent, "TableOfContent").$$render($$result, { step, options }, {
      step: ($$value) => {
        step = $$value;
        $$settled = false;
      },
      options: ($$value) => {
        options = $$value;
        $$settled = false;
      }
    }, {})}


${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
      title: "Total I created (" + allGamesList.all.length + ") boardgames \u{1F3B2}"
    }, {}, {
      default: () => `${options.view.name == "list" ? `${each(allGames, (game) => `
          ${validate_component(Item, "Item").$$render($$result, {}, {}, {
        default: () => `${validate_component(Text, "Text").$$render($$result, {
          style: "color: #000;  font: 34px'grafitty';"
        }, {}, {
          default: () => `${escape(game.promo.name)}`
        })}
          `
      })}`)}` : ``}
  ${options.view.name == "brief" ? `${options.categories == "All" ? `<div class="${"games-promo-wrap"}">${validate_component(ModulesView, "ModulesView").$$render($$result, { games: allGames }, {}, {})}</div>` : `${each(options.categories, (category) => `${category == "Historical" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: historicalGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${validate_component(ModulesView, "ModulesView").$$render($$result, { games: historicalGames }, {}, {})}</div>
      `
      })}` : ``}
      ${category == "Art" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: artGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${validate_component(ModulesView, "ModulesView").$$render($$result, { games: artGames }, {}, {})}</div>
        `
      })}` : ``}
      ${category == "Social activism" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: civicActivismGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${validate_component(ModulesView, "ModulesView").$$render($$result, { games: civicActivismGames }, {}, {})}</div>
      `
      })}` : ``}
      ${category == "It" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: itGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${validate_component(ModulesView, "ModulesView").$$render($$result, { games: itGames }, {}, {})}</div>
        `
      })}` : ``}`)}`}` : `${options.view.name == "full" ? `${options.categories == "All" ? `<div class="${"games-promo-wrap"}">${each(allGames, (game) => `${validate_component(PromoCard, "FullPromo").$$render($$result, { game }, {}, {})}`)}</div>` : `${each(options.categories, (category) => `${category == "Historical" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: historicalGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${each(historicalGames, (game) => `${validate_component(PromoCard, "FullPromo").$$render($$result, { game }, {}, {})}`)}</div>
        `
      })}` : ``}
        ${category == "Art" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: artGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${each(artGames, (game) => `${validate_component(PromoCard, "FullPromo").$$render($$result, { game }, {}, {})}`)}</div>
          `
      })}` : ``}
        ${category == "Social activism" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: civicActivismGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${each(civicActivismGames, (game) => `${validate_component(PromoCard, "FullPromo").$$render($$result, { game }, {}, {})}`)}</div>
        `
      })}` : ``}
        ${category == "It" ? `${validate_component(GamesCategoriesWrap, "GamesCategoriesWrap").$$render($$result, {
        gamesOnThisCategory: itGames.length,
        category
      }, {}, {
        default: () => `<div class="${"games-promo-wrap"}">${each(itGames, (game) => `${validate_component(PromoCard, "FullPromo").$$render($$result, { game }, {}, {})}`)}</div>
          `
      })}` : ``}`)}`}` : ``}`}`
    })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "" }, {}, {
      default: () => `${validate_component(SocialPanel, "SocialPanel").$$render($$result, {
        title: "Follow, i make content with love"
      }, {}, {})}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Games as default };
