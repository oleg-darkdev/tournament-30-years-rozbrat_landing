import { c as create_ssr_component, v as validate_component, h as escape } from "./index-d2f82617.js";
import { P as Paper, T as Title, d as Content } from "./index-d5037018.js";
const BlackFaq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, color = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<section style="${"width: 100%; background-color: #191B1B;"}">

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
