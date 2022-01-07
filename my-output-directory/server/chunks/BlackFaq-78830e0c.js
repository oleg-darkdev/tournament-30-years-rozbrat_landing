import { c as create_ssr_component, v as validate_component, i as escape } from "./index-99bd7138.js";
import { P as Paper, T as Title } from "./Subtitle-e1b47b45.js";
import { a as Content } from "./index-f655cb0a.js";
const BlackFaq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, color = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<section style="${"width: 100%; "}">

  <div class="${"section-body"}" style="${"background-color: #191B1B;"}">${validate_component(Paper, "Paper").$$render($$result, {
    style: "width: auto; width: 90%; margin: 0 20%; max-width: 1200px; background-color: " + (color ? color : "#47babb") + ";",
    class: "paper-demo"
  }, {}, {
    default: () => `${validate_component(Title, "Title").$$render($$result, {
      style: "color: #000; font: 26px 'grafitty';"
    }, {}, { default: () => `${escape(title)}` })}
      ${validate_component(Content, "Content").$$render($$result, { style: "" }, {}, {
      default: () => `${slots.default ? slots.default({}) : `
        `}`
    })}`
  })}</div></section>

`;
});
export { BlackFaq as B };
