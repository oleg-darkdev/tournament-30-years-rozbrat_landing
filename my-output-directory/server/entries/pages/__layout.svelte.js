import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, s as setContext, v as validate_component, h as each, i as escape } from "../../chunks/index-99bd7138.js";
import { r as readable } from "../../chunks/index-5c9f1cbc.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder, D as Div, S as Span, P as Paper, T as Title, C as Content, b as Subtitle, L as Li, I as Img } from "../../chunks/Subtitle-e1b47b45.js";
import { _ as __extends, a as __assign, M as MDCFoundation, d as dispatch } from "../../chunks/Ripple-d40e98c6.js";
import { I as IconButton } from "../../chunks/IconButton-5857d6b7.js";
import { B as Button_1, L as Label } from "../../chunks/Button-932af60d.js";
import { M as MenuSurface } from "../../chunks/MenuSurface-ec8ff9c2.js";
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
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
};
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
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
var MDCTopAppBarBaseFoundation = function(_super) {
  __extends(MDCTopAppBarBaseFoundation2, _super);
  function MDCTopAppBarBaseFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        setStyle: function() {
          return void 0;
        },
        getTopAppBarHeight: function() {
          return 0;
        },
        notifyNavigationIconClicked: function() {
          return void 0;
        },
        getViewportScrollY: function() {
          return 0;
        },
        getTotalActionItems: function() {
          return 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTopAppBarBaseFoundation2.prototype.handleTargetScroll = function() {
  };
  MDCTopAppBarBaseFoundation2.prototype.handleWindowResize = function() {
  };
  MDCTopAppBarBaseFoundation2.prototype.handleNavigationClick = function() {
    this.adapter.notifyNavigationIconClicked();
  };
  return MDCTopAppBarBaseFoundation2;
}(MDCFoundation);
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
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = function(_super) {
  __extends(MDCTopAppBarFoundation2, _super);
  function MDCTopAppBarFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.wasDocked = true;
    _this.isDockedShowing = true;
    _this.currentAppBarOffsetTop = 0;
    _this.isCurrentlyBeingResized = false;
    _this.resizeThrottleId = INITIAL_VALUE;
    _this.resizeDebounceId = INITIAL_VALUE;
    _this.lastScrollPosition = _this.adapter.getViewportScrollY();
    _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
    return _this;
  }
  MDCTopAppBarFoundation2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.adapter.setStyle("top", "");
  };
  MDCTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
    if (!this.isCurrentlyBeingResized) {
      this.currentAppBarOffsetTop -= diff;
      if (this.currentAppBarOffsetTop > 0) {
        this.currentAppBarOffsetTop = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
        this.currentAppBarOffsetTop = -this.topAppBarHeight;
      }
      this.moveTopAppBar();
    }
  };
  MDCTopAppBarFoundation2.prototype.handleWindowResize = function() {
    var _this = this;
    if (!this.resizeThrottleId) {
      this.resizeThrottleId = setTimeout(function() {
        _this.resizeThrottleId = INITIAL_VALUE;
        _this.throttledResizeHandler();
      }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }
    this.isCurrentlyBeingResized = true;
    if (this.resizeDebounceId) {
      clearTimeout(this.resizeDebounceId);
    }
    this.resizeDebounceId = setTimeout(function() {
      _this.handleTargetScroll();
      _this.isCurrentlyBeingResized = false;
      _this.resizeDebounceId = INITIAL_VALUE;
    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  MDCTopAppBarFoundation2.prototype.checkForUpdate = function() {
    var offscreenBoundaryTop = -this.topAppBarHeight;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
    if (partiallyShowing) {
      this.wasDocked = false;
    } else {
      if (!this.wasDocked) {
        this.wasDocked = true;
        return true;
      } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
        this.isDockedShowing = hasAnyPixelsOnscreen;
        return true;
      }
    }
    return partiallyShowing;
  };
  MDCTopAppBarFoundation2.prototype.moveTopAppBar = function() {
    if (this.checkForUpdate()) {
      var offset = this.currentAppBarOffsetTop;
      if (Math.abs(offset) >= this.topAppBarHeight) {
        offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
      }
      this.adapter.setStyle("top", offset + "px");
    }
  };
  MDCTopAppBarFoundation2.prototype.throttledResizeHandler = function() {
    var currentHeight = this.adapter.getTopAppBarHeight();
    if (this.topAppBarHeight !== currentHeight) {
      this.wasDocked = false;
      this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
      this.topAppBarHeight = currentHeight;
    }
    this.handleTargetScroll();
  };
  return MDCTopAppBarFoundation2;
}(MDCTopAppBarBaseFoundation);
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
var MDCFixedTopAppBarFoundation = function(_super) {
  __extends(MDCFixedTopAppBarFoundation2, _super);
  function MDCFixedTopAppBarFoundation2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.wasScrolled = false;
    return _this;
  }
  MDCFixedTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    var currentScroll = this.adapter.getViewportScrollY();
    if (currentScroll <= 0) {
      if (this.wasScrolled) {
        this.adapter.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled = false;
      }
    } else {
      if (!this.wasScrolled) {
        this.adapter.addClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled = true;
      }
    }
  };
  return MDCFixedTopAppBarFoundation2;
}(MDCTopAppBarFoundation);
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
var MDCShortTopAppBarFoundation = function(_super) {
  __extends(MDCShortTopAppBarFoundation2, _super);
  function MDCShortTopAppBarFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.collapsed = false;
    _this.isAlwaysCollapsed = false;
    return _this;
  }
  Object.defineProperty(MDCShortTopAppBarFoundation2.prototype, "isCollapsed", {
    get: function() {
      return this.collapsed;
    },
    enumerable: false,
    configurable: true
  });
  MDCShortTopAppBarFoundation2.prototype.init = function() {
    _super.prototype.init.call(this);
    if (this.adapter.getTotalActionItems() > 0) {
      this.adapter.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    }
    this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses.SHORT_COLLAPSED_CLASS));
  };
  MDCShortTopAppBarFoundation2.prototype.setAlwaysCollapsed = function(value) {
    this.isAlwaysCollapsed = !!value;
    if (this.isAlwaysCollapsed) {
      this.collapse();
    } else {
      this.maybeCollapseBar();
    }
  };
  MDCShortTopAppBarFoundation2.prototype.getAlwaysCollapsed = function() {
    return this.isAlwaysCollapsed;
  };
  MDCShortTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    this.maybeCollapseBar();
  };
  MDCShortTopAppBarFoundation2.prototype.maybeCollapseBar = function() {
    if (this.isAlwaysCollapsed) {
      return;
    }
    var currentScroll = this.adapter.getViewportScrollY();
    if (currentScroll <= 0) {
      if (this.collapsed) {
        this.uncollapse();
      }
    } else {
      if (!this.collapsed) {
        this.collapse();
      }
    }
  };
  MDCShortTopAppBarFoundation2.prototype.uncollapse = function() {
    this.adapter.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
    this.collapsed = false;
  };
  MDCShortTopAppBarFoundation2.prototype.collapse = function() {
    this.adapter.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
    this.collapsed = true;
  };
  return MDCShortTopAppBarFoundation2;
}(MDCTopAppBarBaseFoundation);
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
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
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
  function getPropStore() {
    return propStore;
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
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return `

<header${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar": true,
        "mdc-top-app-bar--short": variant === "short",
        "mdc-top-app-bar--short-collapsed": collapsed,
        "mdc-top-app-bar--fixed": variant === "fixed",
        "smui-top-app-bar--static": variant === "static",
        "smui-top-app-bar--color-secondary": color === "secondary",
        "mdc-top-app-bar--prominent": prominent,
        "mdc-top-app-bar--dense": dense,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</header>`;
});
var Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  component: Div
});
const Section$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<section${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar__section": true,
        "mdc-top-app-bar__section--align-start": align === "start",
        "mdc-top-app-bar__section--align-end": align === "end"
      }))
    },
    escape_object(toolbar ? { role: "toolbar" } : {}),
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</section>`;
});
classAdderBuilder({
  class: "mdc-top-app-bar__title",
  component: Span
});
const Section = Section$1;
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "short" }, {}, {
    default: () => `${validate_component(Row, "Row").$$render($$result, {}, {}, {
      default: () => `${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, { default: () => `menu` })}
      `
      })}
    ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {})}`
    })}`
  })}`;
});
var Line_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".line.svelte-6l6noc{max-width:70%;height:85px;display:flex;flex-direction:column;justify-content:center;align-content:center;align-items:center;padding:35px  15px 15px 15px;margin:35px 0}",
  map: null
};
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { merchPolicy, refundPolicy, privacyPolicy, shippingPolicy, termsOfService } = $$props;
  if ($$props.merchPolicy === void 0 && $$bindings.merchPolicy && merchPolicy !== void 0)
    $$bindings.merchPolicy(merchPolicy);
  if ($$props.refundPolicy === void 0 && $$bindings.refundPolicy && refundPolicy !== void 0)
    $$bindings.refundPolicy(refundPolicy);
  if ($$props.privacyPolicy === void 0 && $$bindings.privacyPolicy && privacyPolicy !== void 0)
    $$bindings.privacyPolicy(privacyPolicy);
  if ($$props.shippingPolicy === void 0 && $$bindings.shippingPolicy && shippingPolicy !== void 0)
    $$bindings.shippingPolicy(shippingPolicy);
  if ($$props.termsOfService === void 0 && $$bindings.termsOfService && termsOfService !== void 0)
    $$bindings.termsOfService(termsOfService);
  $$result.css.add(css$2);
  return `<div class="${"line svelte-6l6noc"}">


${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    variant: "outlined",
    class: "mdc-theme--primary"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, { style: "font: 26px 'grafitty';" }, {}, {
      default: () => `2021. DarkDev. All Rights Reserved.
`
    })}
    ${validate_component(Content, "Content").$$render($$result, {
      style: "display: flex; flex-wrap: wrap; 		justify-content: center;\n		align-content: center;\n		align-items: center;"
    }, {}, {
      default: () => `${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        color: "primary",
        style: "height: auto; margin: 0 5px 5px 0;"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, {
          default: () => `Fan Art &amp; Merch Policy`
        })}`
      })}
	${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        color: "primary",
        style: "height: auto; margin: 0 5px 5px 0"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Refund Policy` })}`
      })}
	${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        color: "primary",
        style: "height: auto; margin: 0 5px 5px 0"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Privacy Policy` })}`
      })}
	${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        color: "primary",
        style: "height: auto; margin: 0 5px 5px 0"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Shipping Policy` })}`
      })}
	${validate_component(Button_1, "Button").$$render($$result, {
        variant: "outlined",
        color: "primary",
        style: "height: auto; margin: 0 5px 5px 0"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Terms of Service` })}`
      })}`
    })}`
  })}</div>`;
});
const Policy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showPolicyMenu = "", text = [] } = $$props;
  if ($$props.showPolicyMenu === void 0 && $$bindings.showPolicyMenu && showPolicyMenu !== void 0)
    $$bindings.showPolicyMenu(showPolicyMenu);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(MenuSurface, "MenuSurface").$$render($$result, {
      style: "width: 100%; width:auto; height: 450px;",
      anchorCorner: "TOP_LEFT",
      this: showPolicyMenu
    }, {
      this: ($$value) => {
        showPolicyMenu = $$value;
        $$settled = false;
      }
    }, {
      default: () => `<div style="${"margin: 1em; display: flex; flex-direction: column; align-items: flex-end;"}">

    ${each(text.text, (listItem, listItemNumber) => `${validate_component(Paper, "Paper").$$render($$result, {
        style: " margin-bottom: 25px; width: 90%;",
        transition: true,
        color: "secondary",
        class: "paper-demo"
      }, {}, {
        default: () => `

        ${validate_component(Title, "Title").$$render($$result, {}, {}, {
          default: () => `${escape(listItemNumber + 1)}. ${escape(listItem.title)}`
        })}
        

        
        ${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
          default: () => `${escape(listItem.subtitle)}`
        })}

        ${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => `

          ${validate_component(Paper, "Paper").$$render($$result, { class: "column" }, {}, {
            default: () => `${each(listItem.text, (paragraph, paragraphNumber) => `<p class="${"mdc-typography--body2"}" style="${"margin-bottom: 15px; "}"><span style="${"color: #4a148c"}">${escape(listItemNumber + 1)}.${escape(paragraphNumber + 1)}.
                </span>
                ${escape(paragraph.main)}</p>
							${each(paragraph.sub, (subParagraph, subParagraphNumber) => `<p class="${"mdc-typography--body2"}" style="${"margin: 0 0 15px 25px; "}"><span style="${"color: #4a148c"}">${escape(listItemNumber + 1)}.${escape(paragraphNumber + 1)}.${escape(subParagraphNumber + 1)}.
                </span>
                ${escape(subParagraph)}
              </p>`)}`)}
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
const PolicyMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { merchPolicy, refundPolicy, privacyPolicy, shippingPolicy, termsOfService } = $$props;
  let merchPolicyText = {
    heading: "DarkDev Games Policy on Fan Art and Merchandise",
    lastUpdate: "Jan 26, 2021",
    preview: "We at Leder Games feel grateful for the communities that have been built around our games. With passion, creativity, and ambition, we created the worlds of Root, Vast, Fort, and Oath that you have all come to know and enjoy now. We can only appreciate that our fans share this same passion to expand and amplify their game experiences with fan creations. In order to protect the art and IP of our work, we ask that the following guidelines be followed in regard to the sale of merchandise related to our works:",
    text: [
      {
        title: "Art Use in Items for Sale",
        subtitle: "",
        text: [
          {
            main: "Use of our official art or assets from our games such as logos, character art, component art, iconography, etc. are prohibited.",
            sub: [
              "Traced, digitally manipulated (i.e. skewed, flipped, mirrored, etc), vectorized, reproduced, or any other edit in nature to any existing artwork are also prohibited."
            ]
          },
          {
            main: "Unique and artistic interpretations of our art, characters, games, and any related features or gameplay mechanics are allowed.",
            sub: ""
          }
        ]
      },
      {
        title: "Production and Prohibited Merchandise",
        subtitle: "",
        text: [
          {
            main: "Items may not be mass produced and must be produced on an individual and/or hand-made level unless with our express permission. ",
            sub: [
              "Professional, large, or manufacturing scale machinery are not permitted",
              "3D printing, laser etching, or other like machinery on an individual or small operation scale are allowed"
            ]
          },
          {
            main: "Items such as figures or miniatures (for collectible, display, or gameplay use) are not permitted",
            sub: []
          },
          {
            main: "T-Shirts, apparel, clothing, and other wearable items on a mass-produced scale are not permitted and must also indicate a limited run or limited period of availability",
            sub: [
              "Use of apparel services that sell and print on your behalf such as Threadless and Redbubble are not permitted"
            ]
          },
          {
            main: "No items that are similar to our official products and accessories on our Leder Games site or Leder Games\u2019 authorized licensees are allowed.",
            sub: []
          }
        ]
      },
      {
        title: "Product Listing Guidelines",
        subtitle: "",
        text: [
          {
            main: "Ensure that your items are visibly and clearly marked as \u201CUnofficial\u201D in both title and item description. ",
            sub: [
              "Item descriptions must also describe that no authorization from our company was obtained in relation to its production or creation.",
              "Item name and description cannot devalue the quality of our officially produced works or components such as \u201Ccomponent upgrade.\u201D"
            ]
          },
          {
            main: "Imagery of our official products may not be used unless necessary to demonstrate use of the fan-made item (e.g. inserts)",
            sub: []
          }
        ]
      },
      {
        title: "Sale",
        subtitle: "",
        text: [
          {
            main: "Items may not be sold in bulk to a single customer, such as retailers or wholesalers.",
            sub: []
          },
          {
            main: "Items must be sold through an individual storefront that sells directly to customers such as conventions or an Etsy store",
            sub: [
              "Items may not be listed on large online sites that do not feature an \u201Cartist storefront\u201D or similar feature to distinguish an individual or unique artist such as Amazon, Wish, Alibaba, etc.",
              "Items may not be listed on large online sites that mass produce your items on your behalf such as Redbubble, Society6, Threadless, Displate, Zazzle, etc."
            ]
          },
          {
            main: "Items may not participate or seek funding through crowdfunding campaigns or platforms (e.g. Kickstarter). ",
            sub: []
          },
          {
            main: "Do not associate Leder Games or any of our games or brands in works that are not in line with our company philosophy and values.  Do not associate our company with content that is illegal, sexist, racist, offensive, discriminatory, inappropriate, or in otherwise poor taste.",
            sub: []
          },
          {
            main: "We reserve the right to ask you to remove any works for any reason. We reserve the right to update this policy at any time and ask that you comply with the most up to date contents of this page. ",
            sub: []
          },
          {
            main: "If there are any questions or uncertainty in regard to this policy, please contact us at support@ledergames.com and we\u2019ll get back to you as soon as we can. ",
            sub: []
          },
          {
            main: "Please refer to the follow examples below to understand our policy in further detail.",
            sub: []
          }
        ]
      }
    ]
  }, refundPolicyText = {
    heading: "",
    lastUpdate: "",
    preview: "",
    text: [
      {
        title: "Returns",
        subtitle: "",
        text: [
          {
            main: "Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can\u2019t offer you a refund or exchange.",
            sub: []
          },
          {
            main: "To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To request a return, an email must be sent to support@ledergames.com for coordination.",
            sub: []
          },
          {
            main: "To complete your return, we require a receipt or proof of purchase.",
            sub: []
          },
          {
            main: "Please do not send your purchase back to the manufacturer.",
            sub: []
          }
        ]
      },
      {
        title: "Refunds ",
        subtitle: "if applicable",
        text: [
          {
            main: "Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.",
            sub: []
          },
          {
            main: "If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.",
            sub: []
          }
        ]
      },
      {
        title: "Late or missing refunds",
        subtitle: "if applicable",
        text: [
          {
            main: "If you haven\u2019t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.",
            sub: []
          },
          {
            main: "Next contact your bank. There is often some processing time before a refund is posted.",
            sub: []
          },
          {
            main: "If you\u2019ve done all of this and you still have not received your refund yet, please contact us at support@ledergames.com.",
            sub: []
          }
        ]
      },
      {
        title: "Exchanges",
        subtitle: "if applicable",
        text: [
          {
            main: "We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@ledergames.com.",
            sub: []
          }
        ]
      },
      {
        title: "Gifts",
        subtitle: "",
        text: [
          {
            main: "If the item was marked as a gift when purchased and shipped directly to you, you\u2019ll receive a store credit for the value of your return. Once the returned item is received, a credit code will be e-mailed to you.",
            sub: []
          },
          {
            main: "If the item wasn\u2019t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.",
            sub: []
          }
        ]
      },
      {
        title: "Shipping",
        subtitle: "",
        text: [
          {
            main: "You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.",
            sub: []
          },
          {
            main: "Depending on where you live, the time it may take for your exchanged product to reach you, may vary.",
            sub: []
          },
          {
            main: "If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don\u2019t guarantee that we will receive your returned item.",
            sub: []
          }
        ]
      }
    ]
  }, privacyPolicyText = {
    heading: "Privacy policy",
    lastUpdate: "",
    preview: "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from leder-games.myshopify.com (the \u201CSite\u201D).",
    text: [
      {
        title: "PERSONAL INFORMATION WE COLLECT",
        subtitle: "",
        text: [
          {
            main: "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as \u201CDevice Information\u201D.",
            sub: ["", ""]
          },
          {
            main: "Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as \u201COrder Information\u201D.",
            sub: ["", ""]
          },
          {
            main: "When we talk about \u201CPersonal Information\u201D in this Privacy Policy, we are talking both about Device Information and Order Information.",
            sub: ["", ""]
          },
          {
            main: "We collect Device Information using the following technologies:",
            sub: [
              "\u201CCookies\u201D are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.",
              "\u201CLog files\u201D track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.",
              "\u201CWeb beacons\u201D, \u201Ctags\u201D, and \u201Cpixels\u201D are electronic files used to record information about how you browse the Site."
            ]
          }
        ]
      },
      {
        title: "HOW DO WE USE YOUR PERSONAL INFORMATION?",
        subtitle: "",
        text: [
          {
            main: "We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). ",
            sub: ["", ""]
          },
          {
            main: "We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).",
            sub: ["", ""]
          },
          {
            main: "Additionally, we use this Order Information to:",
            sub: [
              "Communicate with you",
              "Screen our orders for potential risk or fraud",
              "When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services"
            ]
          }
        ]
      },
      {
        title: "SHARING YOUR PERSONAL INFORMATION",
        subtitle: "",
        text: [
          {
            main: "We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store\u2014you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy.",
            sub: ["", ""]
          },
          {
            main: "We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.",
            sub: ["", ""]
          },
          {
            main: "Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "BEHAVIORAL ADVERTISING",
        subtitle: "",
        text: [
          {
            main: "As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative\u2019s (\u201CNAI\u201D) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.",
            sub: ["", ""]
          },
          {
            main: "Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance\u2019s opt-out portal at: http://optout.aboutads.info/.",
            sub: ["", ""]
          },
          {
            main: "You can opt out of targeted advertising by using the links below:",
            sub: [
              "Facebook: https://www.facebook.com/settings/?tab=ads",
              "Google: https://www.google.com/settings/ads/anonymous",
              "Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
            ]
          }
        ]
      },
      {
        title: "DO NOT TRACK",
        subtitle: "",
        text: [
          {
            main: "Please note that we do not alter our Site\u2019s data collection and use practices when we see a Do Not Track signal from your browser.",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "YOUR RIGHTS",
        subtitle: "",
        text: [
          {
            main: "If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.",
            sub: ["", ""]
          },
          {
            main: "Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "DATA RETENTION",
        subtitle: "",
        text: [
          {
            main: "When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "CHANGES",
        subtitle: "",
        text: [
          {
            main: "We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.",
            sub: ["", ""]
          },
          {
            main: "MINORS",
            sub: ["The Site is not intended for individuals under the age of 13."]
          },
          {
            main: "CONTACT US",
            sub: [
              "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e\u2011mail at support@darkdevgames.com"
            ]
          }
        ]
      }
    ]
  }, shippingPolicyText = {
    heading: "Shipping policy",
    lastUpdate: "",
    preview: "",
    text: [
      {
        title: "Pre-Orders",
        subtitle: "",
        text: [
          {
            main: "Please note that any orders containing pre-order products will not ship until the entirety of the order contents are in hand and ready to ship. We will do our best to provide accurate timelines on when we expect pre-order product to reach in-stock status.",
            sub: ["", ""]
          },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "US",
        subtitle: "",
        text: [
          {
            main: "Orders to the US are for a flat fee of $10 USD. For unusually large or heavy orders, additional postage rates may apply and communication will be made to your email provided on your order if such is the case. ",
            sub: ["", ""]
          },
          {
            main: "Orders generally have a 2-5 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.",
            sub: ["", ""]
          },
          {
            main: "Please allow 3\u20137 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.",
            sub: ["", ""]
          },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "Canada",
        subtitle: "",
        text: [
          {
            main: "Orders to Canada under $100 USD ship for a fee of $15 USD",
            sub: ["", ""]
          },
          {
            main: "Orders to Canada between $100-$175 USD ship for a fee of $20 USD",
            sub: ["", ""]
          },
          {
            main: "Orders to Canada above $175 USD ship for a fee of $25 USD",
            sub: ["", ""]
          },
          {
            main: "Orders generally have a 2\u20135 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.",
            sub: ["", ""]
          },
          {
            main: "Please allow 7-10 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.",
            sub: ["", ""]
          },
          {
            main: "Orders ship from the US and may be subject to customs fees upon arrival.",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "Europe",
        subtitle: "",
        text: [
          {
            main: "Orders to Europe under $30 USD ship for a fee of $10 USD",
            sub: ["", ""]
          },
          {
            main: "Orders to Europe between $30-$150 USD ship for a fee of $15 USD",
            sub: ["", ""]
          },
          {
            main: "Orders to Europe between $150\u2013$300 USD ship for a fee of $20 USD",
            sub: ["", ""]
          },
          {
            main: "Orders to Europe above $300 USD ship for a fee of $30 USD",
            sub: ["", ""]
          },
          {
            main: "Orders generally have a 2\u20135 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.",
            sub: ["", ""]
          },
          {
            main: "Please allow 7\u201310 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.",
            sub: ["", ""]
          },
          {
            main: "Orders to Europe ship from Germany and do not incur any additional tax or customs fees upon arrival. Tax laws to the UK are unchanged until Dec 31, 2020.",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "Asia",
        subtitle: "",
        text: [
          {
            main: "Orders to Asia under $150 USD ship for a fee of $40 USD ",
            sub: ["", ""]
          },
          {
            main: "Orders to Asia above $150 USD ship for a fee of $50-$60 USD, depending on the destination country",
            sub: ["", ""]
          },
          {
            main: "Orders generally have a 7\u201310 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.",
            sub: ["", ""]
          },
          {
            main: "Please allow 7\u201321 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.",
            sub: ["", ""]
          },
          {
            main: "Orders to Asia will ship from Germany and all orders are subject to customs fees upon arrival",
            sub: ["", ""]
          },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "Russia",
        subtitle: "",
        text: [
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "Belarus",
        subtitle: "",
        text: [
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "Other Regions",
        subtitle: "",
        text: [
          {
            main: "We are unfortunately not expanding on our shipping regions at the moment but are still looking into reliable solutions and will update our shipping policy and site accordingly once we offer shipping to additional regions.",
            sub: ["", ""]
          },
          {
            main: "We currently do not offer shipping to some parts of Asia, South America, Africa, and some parts of Europe.  ",
            sub: ["", ""]
          }
        ]
      },
      {
        title: "Lost, Missing, or Damaged Packages",
        subtitle: "",
        text: [
          {
            main: "If any items from your order arrive damaged or missing, including missing or defective game pieces, please contact support@ledergames.com for a solution",
            sub: ["", ""]
          }
        ]
      }
    ]
  }, termsOfServiceText = {
    heading: "",
    lastUpdate: "",
    preview: "",
    text: [
      {
        title: "",
        subtitle: "",
        text: [
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "",
        subtitle: "",
        text: [
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      },
      {
        title: "",
        subtitle: "",
        text: [
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] },
          { main: "", sub: ["", ""] }
        ]
      }
    ]
  };
  if ($$props.merchPolicy === void 0 && $$bindings.merchPolicy && merchPolicy !== void 0)
    $$bindings.merchPolicy(merchPolicy);
  if ($$props.refundPolicy === void 0 && $$bindings.refundPolicy && refundPolicy !== void 0)
    $$bindings.refundPolicy(refundPolicy);
  if ($$props.privacyPolicy === void 0 && $$bindings.privacyPolicy && privacyPolicy !== void 0)
    $$bindings.privacyPolicy(privacyPolicy);
  if ($$props.shippingPolicy === void 0 && $$bindings.shippingPolicy && shippingPolicy !== void 0)
    $$bindings.shippingPolicy(shippingPolicy);
  if ($$props.termsOfService === void 0 && $$bindings.termsOfService && termsOfService !== void 0)
    $$bindings.termsOfService(termsOfService);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div style="${"width: 100%"}">${validate_component(Policy, "Policy").$$render($$result, {
      text: merchPolicyText,
      showPolicyMenu: merchPolicy
    }, {
      showPolicyMenu: ($$value) => {
        merchPolicy = $$value;
        $$settled = false;
      }
    }, {})}
	${validate_component(Policy, "Policy").$$render($$result, {
      text: refundPolicyText,
      showPolicyMenu: refundPolicy
    }, {
      showPolicyMenu: ($$value) => {
        refundPolicy = $$value;
        $$settled = false;
      }
    }, {})}
	${validate_component(Policy, "Policy").$$render($$result, {
      text: privacyPolicyText,
      showPolicyMenu: privacyPolicy
    }, {
      showPolicyMenu: ($$value) => {
        privacyPolicy = $$value;
        $$settled = false;
      }
    }, {})}
	${validate_component(Policy, "Policy").$$render($$result, {
      text: shippingPolicyText,
      showPolicyMenu: shippingPolicy
    }, {
      showPolicyMenu: ($$value) => {
        shippingPolicy = $$value;
        $$settled = false;
      }
    }, {})}
	${validate_component(Policy, "Policy").$$render($$result, {
      text: termsOfServiceText,
      showPolicyMenu: termsOfService
    }, {
      showPolicyMenu: ($$value) => {
        termsOfService = $$value;
        $$settled = false;
      }
    }, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
classAdderBuilder({
  class: "mdc-image-list__item",
  component: Li
});
classAdderBuilder({
  class: "mdc-image-list__image-aspect-container",
  component: Div
});
classAdderBuilder({
  class: "mdc-image-list__image",
  component: Img
});
classAdderBuilder({
  class: "mdc-image-list__supporting",
  component: Div
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-o51ejd{display:flex;flex-direction:column;justify-content:center;align-content:center;align-items:center}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let merchPolicy, refundPolicy, privacyPolicy, shippingPolicy, termsOfService;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



<footer style="${"background-color: #000;"}" class="${"svelte-o51ejd"}">${validate_component(PolicyMenu, "PolicyMenu").$$render($$result, {
      merchPolicy,
      refundPolicy,
      shippingPolicy,
      privacyPolicy,
      termsOfService
    }, {
      merchPolicy: ($$value) => {
        merchPolicy = $$value;
        $$settled = false;
      },
      refundPolicy: ($$value) => {
        refundPolicy = $$value;
        $$settled = false;
      },
      shippingPolicy: ($$value) => {
        shippingPolicy = $$value;
        $$settled = false;
      },
      privacyPolicy: ($$value) => {
        privacyPolicy = $$value;
        $$settled = false;
      },
      termsOfService: ($$value) => {
        termsOfService = $$value;
        $$settled = false;
      }
    }, {})}



		


	

	${validate_component(Line, "Line").$$render($$result, {
      merchPolicy,
      refundPolicy,
      shippingPolicy,
      privacyPolicy,
      termsOfService
    }, {
      merchPolicy: ($$value) => {
        merchPolicy = $$value;
        $$settled = false;
      },
      refundPolicy: ($$value) => {
        refundPolicy = $$value;
        $$settled = false;
      },
      shippingPolicy: ($$value) => {
        shippingPolicy = $$value;
        $$settled = false;
      },
      privacyPolicy: ($$value) => {
        privacyPolicy = $$value;
        $$settled = false;
      },
      termsOfService: ($$value) => {
        termsOfService = $$value;
        $$settled = false;
      }
    }, {})}
  

</footer>`;
  } while (!$$settled);
  return $$rendered;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}.section-body{display:flex;justify-content:center;padding:50px 0}.tur-bg{width:430px;height:auto;background-color:#47babb;display:flex;justify-content:center;margin:35px 0 15px 0;padding:50px 0 25px 0}.section-svg-line{display:block;width:100%}.games-promo-wrap{display:flex;justify-content:center;flex-direction:row;flex-wrap:wrap}.svelte-5b8lr1 .hidden{display:none}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
