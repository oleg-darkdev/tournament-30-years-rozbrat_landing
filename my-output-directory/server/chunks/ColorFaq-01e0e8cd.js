import { c as create_ssr_component, i as escape, v as validate_component } from "./index-99bd7138.js";
import { P as Paper, T as Title } from "./Subtitle-e1b47b45.js";
import { a as Content } from "./index-f655cb0a.js";
const ColorFaq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, color } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<section style="${"width: 100%; "}">

  <div class="${"section-body"}" style="${"background-color: " + escape(color ? color : "#47babb") + ";"}">${validate_component(Paper, "Paper").$$render($$result, {
    color: "primary",
    style: "width: 90%; border: " + (color ? color : "#191B1B") + "; margin: 0 20%; max-width: 1200px; background-color: #191B1B;",
    class: "paper-demo"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, {
      style: "color: " + (color ? color : "#fff") + "; font: 26px 'grafitty';"
    }, {}, { default: () => `${escape(title)}` })}
      ${validate_component(Content, "Content").$$render($$result, {}, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>`;
});
export { ColorFaq as C };
