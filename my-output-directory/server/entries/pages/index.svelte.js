import { c as create_ssr_component, v as validate_component } from "../../chunks/index-99bd7138.js";
import { C as Card, M as Media, a as Content, P as PrimaryAction } from "../../chunks/index-f655cb0a.js";
import { S as SocialPanel } from "../../chunks/SocialPanel-a8bc2212.js";
import "../../chunks/Subtitle-e1b47b45.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-zxntqe{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;text-decoration:none}@font-face{font-family:'grafitty';font-style:normal;font-weight:400;src:local('grafitty'), format('otf');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>DarkDev Games</title>`, ""}`, ""}

    <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: column; "}"><section style="${"width: 430px; margin: 0; "}"><div class="${"tur-bg"}">${validate_component(Card, "Card").$$render($$result, {
    style: "width: 380px; margin: 0; height: auto; background-color: #000000;"
  }, {}, {
    default: () => `${`${validate_component(Media, "Media").$$render($$result, {
      style: 'background-image: url("img/glad_to_see_you.png");  height: 390px; width: 100%;'
    }, {}, {})}`}
                    ${validate_component(Content, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "display: flex;\r\n                        align-items: center; background-color: #050506; flex-direction: column;\r\n                        "
    }, {}, {
      default: () => `${`${validate_component(Card, "Card").$$render($$result, {
        style: "width: 250px; background-color: #47babb;  height: 80px; margin-bottom: 15px;"
      }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
          style: "display: flex; align-items: center;",
          padded: true
        }, {}, {
          default: () => `<span style="${"font: 35px 'grafitty';"}">Get started</span>`
        })}`
      })}`}`
    })}`
  })}</div></section>

        ${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "I'm on social media" }, {}, {})}</div>
            `;
});
export { Routes as default };
