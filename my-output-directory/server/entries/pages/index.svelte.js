import { c as create_ssr_component, v as validate_component, i as each, f as add_attribute, h as escape } from "../../chunks/index-d2f82617.js";
import { e as Card, d as Content, g as PrimaryAction } from "../../chunks/index-d5037018.js";
import { f as firstMenu } from "../../chunks/firstMenuText-188754cb.js";
import { S as SocialPanel } from "../../chunks/SocialPanel-aff7763b.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".index-menu.svelte-120ohlp{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100%}.bg-img-index.svelte-120ohlp{background-image:url(img/bg/main_bg.png)}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>DarkDev Games</title>`, ""}`, ""}

    <div class="${"index-menu bg-img bg-img-index svelte-120ohlp"}" style="${""}"><section style="${"width: 430px; margin: 0; "}"><div class="${"tur-bg"}">${validate_component(Card, "Card").$$render($$result, {
    style: "width: 380px; margin: 0; height: auto; background-color: #000000;"
  }, {}, {
    default: () => `
                    ${validate_component(Content, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "display: flex;\r\n                        align-items: center; background-color: #050506; flex-direction: column;\r\n                        "
    }, {}, {
      default: () => `
                        ${each(firstMenu, (menuItem) => `${validate_component(Card, "Card").$$render($$result, {
        style: "width: 330px; border: 2px solid #47babb; height: 90px; margin-bottom: 10px;  "
      }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
          style: "display: flex;      align-items: center; ",
          padded: true
        }, {}, {
          default: () => `
                                <a${add_attribute("href", menuItem.link, 0)}><span style="${"font: 40px 'grafitty';"}">${escape(menuItem.text)} ${escape(menuItem.emoji)}</span></a>
                            `
        })}
                        `
      })}`)}
                        `
    })}`
  })}</div></section>

        ${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "I'm on social media" }, {}, {})}</div>
            `;
});
export { Routes as default };
