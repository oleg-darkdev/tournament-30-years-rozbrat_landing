import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, n as getContext, s as setContext, o as onDestroy, v as validate_component, m as missing_component, q as globals, i as each, h as escape, u as subscribe } from "../../../chunks/index-d2f82617.js";
import { p as page } from "../../../chunks/stores-a50a587a.js";
import { B as BlackFaq } from "../../../chunks/BlackFaq-325a0523.js";
import { C as ColorFaq } from "../../../chunks/ColorFaq-c54aa38b.js";
import { f as forwardEventsBuilder, c as classMap, B as Button, A, e as Card, M as Media, d as Content, g as PrimaryAction, l as Actions, m as ActionButtons, n as ActionIcons, k as MediaContent } from "../../../chunks/index-d5037018.js";
import { B as Button_1 } from "../../../chunks/Button-19836e67.js";
import { _ as __extends, a as __assign, M as MDCFoundation, R as Ripple, d as dispatch, L as Label, I as Icon, b as List, c as Item, T as Text } from "../../../chunks/index-2fbb442f.js";
import { a as allGamesList } from "../../../chunks/gamesData-e89e0b32.js";
/**
 * @license
 * Copyright 2018 Google Inc.
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
var cssClasses = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
};
var strings = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
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
var MDCIconButtonToggleFoundation = function(_super) {
  __extends(MDCIconButtonToggleFoundation2, _super);
  function MDCIconButtonToggleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCIconButtonToggleFoundation2.defaultAdapter), adapter)) || this;
    _this.hasToggledAriaLabel = false;
    return _this;
  }
  Object.defineProperty(MDCIconButtonToggleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        notifyChange: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        getAttr: function() {
          return null;
        },
        setAttr: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCIconButtonToggleFoundation2.prototype.init = function() {
    var ariaLabelOn = this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON);
    var ariaLabelOff = this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
    if (ariaLabelOn && ariaLabelOff) {
      if (this.adapter.getAttr(strings.ARIA_PRESSED) !== null) {
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
      }
      this.hasToggledAriaLabel = true;
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, String(this.isOn()));
    }
  };
  MDCIconButtonToggleFoundation2.prototype.handleClick = function() {
    this.toggle();
    this.adapter.notifyChange({ isOn: this.isOn() });
  };
  MDCIconButtonToggleFoundation2.prototype.isOn = function() {
    return this.adapter.hasClass(cssClasses.ICON_BUTTON_ON);
  };
  MDCIconButtonToggleFoundation2.prototype.toggle = function(isOn) {
    if (isOn === void 0) {
      isOn = !this.isOn();
    }
    if (isOn) {
      this.adapter.addClass(cssClasses.ICON_BUTTON_ON);
    } else {
      this.adapter.removeClass(cssClasses.ICON_BUTTON_ON);
    }
    if (this.hasToggledAriaLabel) {
      var ariaLabel = isOn ? this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(strings.ARIA_LABEL, ariaLabel || "");
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, "" + isOn);
    }
  };
  return MDCIconButtonToggleFoundation2;
}(MDCFoundation);
const { Object: Object_1 } = globals;
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance && instance.destroy();
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
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
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }
  function handleChange(evtData) {
    pressed = evtData.isOn;
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
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
    $$bindings.pressed(pressed);
  if ($$props.ariaLabelOn === void 0 && $$bindings.ariaLabelOn && ariaLabelOn !== void 0)
    $$bindings.ariaLabelOn(ariaLabelOn);
  if ($$props.ariaLabelOff === void 0 && $$bindings.ariaLabelOff && ariaLabelOff !== void 0)
    $$bindings.ariaLabelOff(ariaLabelOff);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.displayFlex === void 0 && $$bindings.displayFlex && displayFlex !== void 0)
    $$bindings.displayFlex(displayFlex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    {
      if (previousDisabled !== $$restProps.disabled) {
        const elem = getElement();
        if ("blur" in elem) {
          elem.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    {
      if (element && getElement() && toggle !== oldToggle) {
        if (toggle && !instance) {
          instance = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          });
          instance.init();
        } else if (!toggle && instance) {
          instance.destroy();
          instance = void 0;
          internalClasses = {};
          internalAttrs = {};
        }
        oldToggle = toggle;
      }
    }
    {
      if (instance && !isUninitializedValue(pressed) && instance.isOn() !== pressed) {
        instance.toggle(pressed);
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: true,
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
        "mdc-icon-button": true,
        "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
        "mdc-icon-button--touch": touch,
        "mdc-icon-button--display-flex": displayFlex,
        "smui-icon-button--size-button": size === "button",
        "mdc-icon-button--reduced-size": size === "mini" || size === "button",
        "mdc-card__action": context === "card:action",
        "mdc-card__action--icon": context === "card:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__dismiss": context === "snackbar:actions",
        "mdc-data-table__pagination-button": context === "data-table:pagination",
        "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
        "mdc-dialog__close": context === "dialog:header" && action === "close",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, {
      "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null
    }, {
      "aria-label": pressed ? ariaLabelOn : ariaLabelOff
    }, { "data-aria-label-on": ariaLabelOn }, { "data-aria-label-off": ariaLabelOff }, { "aria-describedby": ariaDescribedby }, { href }, actionProp, internalAttrs, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div class="${"mdc-icon-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-icon-button__touch"}"></div>` : ``}`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { promo } = $$props;
  let { btnData } = $$props;
  if ($$props.promo === void 0 && $$bindings.promo && promo !== void 0)
    $$bindings.promo(promo);
  if ($$props.btnData === void 0 && $$bindings.btnData && btnData !== void 0)
    $$bindings.btnData(btnData);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "margin-bottom: 15px; width: auto; max-width: 100%;"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      style: "height: 250px; background-image: url(" + promo.banner + ");"
    }, {}, {})}
        ${validate_component(Content, "Content").$$render($$result, {
      style: "display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;"
    }, {}, {
      default: () => `${each(btnData, (data) => `${validate_component(Card, "Card").$$render($$result, {
        style: "width: 280px; margin: 5px; border: 2px solid " + promo.brandColor + ";  height: 80px; "
      }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
          style: "display: flex; align-items: center;",
          padded: true
        }, {}, {
          default: () => `<span style="${"font: 35px 'grafitty'; color: " + escape(promo.brandColor) + ";"}">${escape(data.text)}</span>
                `
        })}
            `
      })}`)}`
    })}`
  })}`;
});
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videos } = $$props;
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  return `<div id="${"about"}" style="${"display: flex; justify-content: center; align-items: center; flex-direction: column;"}"><div style="${"display: flex; flex-direction: row; max-width: 1260px; flex-wrap: wrap; margin-bottom: 15px;"}">${each(videos, (video) => `${validate_component(Card, "Card").$$render($$result, {
    style: "width: 280px; height:280px; margin: 5px;"
  }, {}, {
    default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: "card-media-square",
        style: "background-image: url(" + video.img + ");",
        aspectRatio: "square"
      }, {}, {})}
            `
    })}
        `
  })}`)}</div></div>`;
});
const PromoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { moreInfo } = $$props;
  let { promo } = $$props;
  if ($$props.moreInfo === void 0 && $$bindings.moreInfo && moreInfo !== void 0)
    $$bindings.moreInfo(moreInfo);
  if ($$props.promo === void 0 && $$bindings.promo && promo !== void 0)
    $$bindings.promo(promo);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "margin-bottom: 15px; width: auto; max-width: auto; background-color: " + promo.brandColor + ";"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      style: "height: 250px; background-image: url(" + moreInfo.lorImg + ");"
    }, {}, {})}
${validate_component(Content, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "color: #191B1B;"
    }, {}, {
      default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0;"}">${escape(promo.name)}</h2>
    ${each(moreInfo.description, (description) => `<p>${escape(description)}</p>`)}

    <div style="${"display: flex; flex-direction: row; flex-wrap: wrap;"}">${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        class: "button-shaped-round"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {
          style: "font: 24px 'grafitty'; color:#191B1B;"
        }, {}, {
          default: () => `${escape(moreInfo.players)} Players`
        })}
            ${validate_component(Icon, "Icon").$$render($$result, {
          style: "color:#191B1B;",
          class: "material-icons"
        }, {}, { default: () => `groups` })}`
      })}
        ${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        class: "button-shaped-round"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {
          style: "font: 24px 'grafitty'; color:#191B1B;"
        }, {}, {
          default: () => `${escape(moreInfo.age)} 8+ age`
        })}
            ${validate_component(Icon, "Icon").$$render($$result, {
          style: "color:#191B1B;",
          class: "material-icons"
        }, {}, { default: () => `face` })}`
      })}
        ${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        class: "button-shaped-round"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {
          style: "font: 24px 'grafitty'; color:#191B1B;"
        }, {}, {
          default: () => `${escape(moreInfo.time)} min.`
        })}
            ${validate_component(Icon, "Icon").$$render($$result, {
          style: "color:#191B1B;",
          class: "material-icons"
        }, {}, { default: () => `schedule` })}`
      })}</div>`
    })}
${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
      default: () => `${validate_component(ActionButtons, "ActionButtons").$$render($$result, {}, {}, {
        default: () => `${validate_component(Button_1, "Button").$$render($$result, { style: "color:#191B1B;" }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Action` })}`
        })}`
      })}
    ${validate_component(ActionIcons, "ActionIcons").$$render($$result, {}, {}, {
        default: () => `${validate_component(IconButton, "IconButton").$$render($$result, {
          style: "color:#191B1B;",
          toggle: true,
          "aria-label": "Add to favorites",
          title: "Add to favorites"
        }, {}, {
          default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, { default: () => `favorite` })}
            ${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, { default: () => `favorite_border` })}`
        })}
        ${validate_component(IconButton, "IconButton").$$render($$result, {
          style: "color:#191B1B;",
          class: "material-icons",
          title: "Share"
        }, {}, { default: () => `share` })}
            ${validate_component(IconButton, "IconButton").$$render($$result, {
          style: "color:#191B1B;",
          class: "material-icons",
          title: "More options"
        }, {}, { default: () => `more_vert` })}`
      })}`
    })}`
  })}`;
});
const PromoCardPersons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { moreInfo } = $$props;
  let { promo } = $$props;
  if ($$props.moreInfo === void 0 && $$bindings.moreInfo && moreInfo !== void 0)
    $$bindings.moreInfo(moreInfo);
  if ($$props.promo === void 0 && $$bindings.promo && promo !== void 0)
    $$bindings.promo(promo);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "margin-bottom: 15px; width: 100%; max-width: auto; background-color: " + promo.brandColor + ";"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      style: "height: 250px; background-image: url(" + moreInfo.roles.banner + ");"
    }, {}, {})}
    ${validate_component(Content, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "color: #191B1B;"
    }, {}, {
      default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0;"}">Characters available in the game
        </h2>
        ${each(moreInfo.roles.description, (description) => `<p>${escape(description)}</p>`)}`
    })}`
  })}`;
});
const Roles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { promo } = $$props;
  let { roles } = $$props;
  if ($$props.promo === void 0 && $$bindings.promo && promo !== void 0)
    $$bindings.promo(promo);
  if ($$props.roles === void 0 && $$bindings.roles && roles !== void 0)
    $$bindings.roles(roles);
  return `<div style="${"display: flex; justify-content: center;align-items: center; flex-direction: row; flex-wrap: wrap; max-width: 760px;"}">${each(roles, (role) => `${validate_component(Card, "Card").$$render($$result, {
    style: " width: 370px;  margin: 5px; background-color: " + promo.brandColor + "; "
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      class: "card-media-square",
      aspectRatio: "square",
      style: " width: 100%; height: 370px; background-image: url(" + role.img + ")"
    }, {}, {
      default: () => `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {})}
            `
    })}
            ${validate_component(Content, "Content").$$render($$result, { style: "color: #191B1B; padding: 5px;" }, {}, {
      default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"color: #fff; font: 28px 'grafitty';"}">${escape(role.name)}</h2>
                ${escape(role.description)}
            `
    })}
        `
  })}`)}</div>`;
});
const Expansion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expansions } = $$props;
  if ($$props.expansions === void 0 && $$bindings.expansions && expansions !== void 0)
    $$bindings.expansions(expansions);
  return `<div style="${"display: flex; justify-content: center;align-items: center; flex-direction: row; flex-wrap: wrap; width: 100%;"}">${each(expansions, (expansion) => `${validate_component(Card, "Card").$$render($$result, {
    style: "min-width: 300px; margin: 5px; margin: 5px;"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      class: "card-media-square",
      style: "background-image: url(" + expansion.img + ")",
      aspectRatio: "square"
    }, {}, {
      default: () => `<div style="${"color: #fff; position: absolute; bottom: 16px; left: 16px;"}"></div>
        `
    })}
    `
  })}`)}</div>`;
});
const Resources = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { resources } = $$props;
  let { videos } = $$props;
  let { promo } = $$props;
  if ($$props.resources === void 0 && $$bindings.resources && resources !== void 0)
    $$bindings.resources(resources);
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  if ($$props.promo === void 0 && $$bindings.promo && promo !== void 0)
    $$bindings.promo(promo);
  return `${validate_component(List, "List").$$render($$result, {
    id: "resources",
    style: "max-width: 1200px; width: 100%; margin-bottom: 25px;",
    class: "demo-list"
  }, {}, {
    default: () => `${each(resources.concat(videos), (resource) => `${validate_component(Item, "Item").$$render($$result, {
      style: "border: 2px solid " + promo.brandColor + ";"
    }, {}, {
      default: () => `${validate_component(Text, "Text").$$render($$result, {
        style: "color: " + promo.brandColor + ";"
      }, {}, {
        default: () => `${escape(resource.name)}${escape(resource.type == "pdf" ? `.${resource.type} \u{1F4C4}` : `  (${resource.type} \u{1F4FA})`)}`
      })}`
    })}`)}`
  })}`;
});
const Customers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const U5Bgameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let game = allGamesList[$page.params.game];
  let data = [
    { text: "PLAY \u{1F579}\uFE0F", href: "/eco-app" },
    { text: "FUNDRAISING", href: "" },
    {
      text: "WORKSHOP \u{1F3AF}",
      href: "/workshops"
    },
    {
      text: "BUY \u{1F6D2}",
      href: ""
    },
    { text: "ABOUT \u2139\uFE0F", href: "#about" },
    {
      text: "FAQ \u2049\uFE0F",
      href: ""
    },
    { text: "RESOURCES \u{1F4FA}", href: "#resources" },
    {
      text: "RECORDS \u{1F4C9}",
      href: "/eco-app#records"
    }
  ];
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape(game.promo.name)}</title>`, ""}`, ""}


 
${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: game.promo.name,
    color: game.promo.brandColor
  }, {}, {
    default: () => `${validate_component(Menu, "Menu").$$render($$result, { promo: game.promo, btnData: data }, {}, {})}`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: game.promo.shortDescription,
    color: game.promo.brandColor
  }, {}, {
    default: () => `${validate_component(Video, "Video").$$render($$result, { videos: game.videos }, {}, {})}
    <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: column; "}">${validate_component(PromoCard, "PromoCard").$$render($$result, {
      promo: game.promo,
      moreInfo: game.moreInfo
    }, {}, {})}</div>`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Characters available in the game",
    color: game.promo.brandColor
  }, {}, {
    default: () => `<div style="${"display: flex; justify-content: center; align-items: center; width: 100%; flex-direction: column; "}">${validate_component(PromoCardPersons, "PromoCardPersons").$$render($$result, {
      promo: game.promo,
      moreInfo: game.moreInfo
    }, {}, {})}
        <div style="${"flex-direction: column; "}">${validate_component(Roles, "Roles").$$render($$result, {
      promo: game.promo,
      roles: game.moreInfo.roles.persons
    }, {}, {})}</div></div>`
  })}


   
    <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: column; "}">
        </div>

${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: "Expansions",
    color: game.promo.brandColor
  }, {}, {
    default: () => `${validate_component(Expansion, "Expansion").$$render($$result, { expansions: game.expansions }, {}, {})}`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Resources",
    color: game.promo.brandColor
  }, {}, {
    default: () => `${validate_component(Resources, "Resources").$$render($$result, {
      resources: game.resources,
      videos: game.videos,
      promo: game.promo
    }, {}, {})} ;
`
  })}

${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: "Customers Who Bought This Item Also Bought",
    color: game.promo.brandColor
  }, {}, {
    default: () => `${validate_component(Customers, "Customers").$$render($$result, {}, {}, {})}`
  })} 








                                                    

                       `;
});
export { U5Bgameu5D as default };
