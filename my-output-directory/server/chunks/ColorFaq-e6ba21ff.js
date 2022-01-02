import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, r as escape, t as each } from "./index-9e8b912b.js";
import { a as Content, C as Card, P as PrimaryAction, M as Media } from "./index-9a3dc842.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder, D as Div, g as H5, h as H6 } from "./classAdderBuilder-4ade2dd0.js";
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "smui-paper": true,
        "smui-paper--raised": variant === "raised",
        "smui-paper--unelevated": variant === "unelevated",
        "smui-paper--outlined": variant === "outlined",
        ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
        "smui-paper--rounded": !square,
        ["smui-paper--color-" + color]: color !== "default",
        "smui-paper-transition": transition
      }))
    },
    escape_object($$restProps)
  ])}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
classAdderBuilder({
  class: "smui-paper__content",
  component: Div
});
var Title = classAdderBuilder({
  class: "smui-paper__title",
  component: H5
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  component: H6
});
const SocialPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socialMini = [
    { img: "img/social/fb_mini.png", link: "" },
    { img: "img/social/in_mini.png", link: "" },
    {
      img: "img/social/insta_mini.png",
      link: ""
    },
    {
      img: "img/social/telega_mini.png",
      link: ""
    },
    {
      img: "img/social/tweeter_mini.png",
      link: ""
    },
    {
      img: "img/social/youtube_mini.png",
      link: ""
    }
  ];
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(Paper, "Paper").$$render($$result, {
    style: "margin: 0 auto; height: auto; margin-bottom: 25px;",
    class: "paper-demo"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, { style: "font: 30px 'grafitty';" }, {}, {
      default: () => `${escape(title + ` \u{1F447}`)}`
    })}
    
    ${validate_component(Content, "Content").$$render($$result, {
      style: "display: flex; flex-direction: row; justify-content: center; max-width: 600px; flex-wrap: wrap;"
    }, {}, {
      default: () => `${each(socialMini, (social) => `${validate_component(Card, "Card").$$render($$result, { style: "width: 70px; margin: 5px;" }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
          default: () => `${validate_component(Media, "Media").$$render($$result, {
            class: "card-media-square",
            style: "background-image: url('" + social.img + "');",
            aspectRatio: "square"
          }, {}, {})}
				`
        })}
      `
      })}`)}`
    })}`
  })}`;
});
var BannerSection_svelte_svelte_type_style_lang = "";
var BlackSvgLine_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".section-svg-line.svelte-g4i3bu{display:block;width:100%;margin-bottom:-10px}",
  map: null
};
const BlackSvgLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"section-svg-line svelte-g4i3bu"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1880 58"}" width="${"100%"}"><path d="${"M0 58.7V33.4L285.9 0l202.4 29.7L674 1.9l421.5 42.7 195-40.8L1478 37.1l200.6-14.9 133.7 33.4 67.9-7.4v10.4H0z"}" fill="${"#050506"}"></path></svg></div>`;
});
var BlackFaq_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".section-body.svelte-obekbn{background-color:#000;display:flex;justify-content:center;padding:125px 0}",
  map: null
};
const BlackFaq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$2);
  return `<section style="${"width: 100%; margin-top: -50px;"}">${validate_component(BlackSvgLine, "SvgLine").$$render($$result, {}, {}, {})}
  <div class="${"section-body svelte-obekbn"}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: auto; max-width: 960px; background-color: #fff;",
    class: "paper-demo"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, {
      style: "color: #47babb; font: 26px 'grafitty';"
    }, {}, { default: () => `${escape(title)}` })}
      ${validate_component(Content, "Content").$$render($$result, { style: "" }, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
var ColorSvgLine_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".section-svg-line.svelte-g4i3bu{display:block;width:100%;margin-bottom:-10px}",
  map: null
};
const ColorSvgLine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"section-svg-line svelte-g4i3bu"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1880 58"}" width="${"100%"}"><path d="${"M0 58.7V33.4L285.9 0l202.4 29.7L674 1.9l421.5 42.7 195-40.8L1478 37.1l200.6-14.9 133.7 33.4 67.9-7.4v10.4H0z"}" fill="${"#47babb"}"></path></svg></div>`;
});
var ColorFaq_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-body.svelte-18c2whx{background-color:#47babb;display:flex;justify-content:center;padding:125px 0}",
  map: null
};
const ColorFaq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<section style="${"width: 100%; margin-top: -50px;"}">${validate_component(ColorSvgLine, "SvgLine").$$render($$result, {}, {}, {})}
  <div class="${"section-body svelte-18c2whx"}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: auto; max-width: 1200px; background-color: #000;",
    class: "paper-demo"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, {
      style: "color: #fff; font: 26px 'grafitty';"
    }, {}, { default: () => `${escape(title)}` })}
      ${validate_component(Content, "Content").$$render($$result, { style: "" }, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
export { BlackFaq as B, ColorFaq as C, SocialPanel as S };
