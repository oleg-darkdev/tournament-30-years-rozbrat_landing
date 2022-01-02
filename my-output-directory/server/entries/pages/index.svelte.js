import { c as create_ssr_component, v as validate_component } from "../../chunks/index-9e8b912b.js";
import { C as Card, P as PrimaryAction, M as Media, a as Content } from "../../chunks/index-9a3dc842.js";
import "../../chunks/classAdderBuilder-4ade2dd0.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@font-face{font-family:'grafitty';src:url('grafitty.otf')}.svelte-ug7y61 a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;text-decoration:none}.tur-bg.svelte-ug7y61{width:100%;height:1000px;background-color:#47babb;display:flex;justify-content:center}.svelte-ug7y61 .hidden{display:none}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>DarkDev Games</title>`, ""}`, ""}


<section style="${"max-width: 760px; width: 760px; margin: 0px 0 -45px 0; "}" class="${"svelte-ug7y61"}"><div class="${"tur-bg svelte-ug7y61"}">${validate_component(Card, "Card").$$render($$result, {
    style: "width: 380px; margin-top: 25px; height: 550px; background-color: #000000;"
  }, {}, {
    default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
      default: () => `${`${validate_component(Media, "Media").$$render($$result, {
        style: 'background-image: url("img/glad_to_see_you.png");  height: 450px; width: 100%;'
      }, {}, {})}`}
      ${validate_component(Content, "Content").$$render($$result, {
        class: "mdc-typography--body2",
        style: "display: flex;\r\n      align-items: center; background-color: #050506; flex-direction: column;\r\n      "
      }, {}, {
        default: () => `${`${validate_component(Card, "Card").$$render($$result, {
          style: "width: 250px;  height: 80px; margin-bottom: 15px;"
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex;      align-items: center; ",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty';"}" class="${"svelte-ug7y61"}">Get started</span>`
          })}`
        })}`}`
      })}`
    })}`
  })}

  
   </div></section>

`;
});
export { Routes as default };
