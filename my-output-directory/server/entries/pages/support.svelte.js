import { c as create_ssr_component, v as validate_component, i as each, h as escape } from "../../chunks/index-d2f82617.js";
import { e as Card, M as Media, d as Content } from "../../chunks/index-d5037018.js";
import { B as Button_1 } from "../../chunks/Button-19836e67.js";
import { L as Label, b as List, c as Item, T as Text } from "../../chunks/index-2fbb442f.js";
import { S as SocialPanel } from "../../chunks/SocialPanel-aff7763b.js";
import { B as BlackFaq } from "../../chunks/BlackFaq-325a0523.js";
var BannerSection_svelte_svelte_type_style_lang = "";
var support_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrap-btns.svelte-v0vi9c{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;margin:0 0 10px 0;width:100%}",
  map: null
};
const Support = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let services = [
    "\u{1F58C} Create design",
    "\u{1F916} Development website or telegram bot",
    "\u{1F3B2} Development of educational boardgame",
    "\u{1F525} Laser cutting and engraving on my equipment"
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Support DarkDev.games \u{1F499}</title>`, ""}`, ""}



  <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: column; "}"><section style="${"width: 430px; margin: 0; "}"><div class="${"tur-bg"}">${validate_component(Card, "Card").$$render($$result, {
    style: "max-width: 380px; margin: 0; height: auto;"
  }, {}, {
    default: () => `${validate_component(Media, "Media").$$render($$result, {
      style: 'background-image: url("img/support.png");  height: 190px; width: 100%;'
    }, {}, {})}
                 ${validate_component(Content, "Content").$$render($$result, {
      class: "mdc-typography--body2",
      style: "display: flex; background-color: #050506; flex-direction: column;\r\n                        "
    }, {}, {
      default: () => `<p style="${"margin: 0;"}">The easy way is - to donate or sign up a paid subscription on patronite.
              </p>
                                 <div class="${"wrap-btns svelte-v0vi9c"}">${validate_component(Button_1, "Button").$$render($$result, {
        href: "",
        target: "_blank",
        style: "border-color: #47babb; margin: 5px;",
        variant: "outlined"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `\u{1F4B8} patronite` })}`
      })}</div> 


                       <p style="${"margin: 0;"}"><span style="${"color:#47babb; font: 22px 'grafitty'"}">1.</span> For each board game I made a set of souvenirs, you can buy souvenirs by coming to one of the workshops or buying in the shop on etsy.
              </p>
               <div class="${"wrap-btns svelte-v0vi9c"}">${validate_component(Button_1, "Button").$$render($$result, {
        href: "",
        target: "_blank",
        style: "border-color: #47babb; margin: 5px;",
        variant: "outlined"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `\u{1F3AF} workshops` })}`
      })}
                ${validate_component(Button_1, "Button").$$render($$result, {
        href: "",
        target: "_blank",
        style: "border-color: #47babb; margin: 5px;",
        variant: "outlined"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `\u{1F6D2} etsy` })}`
      })}</div>
   <p style="${"margin: 0;"}"><span style="${"color:#47babb; font: 22px 'grafitty'"}">2.</span> 
                 I periodically organize the auctions to raise money for the development of boardgames. In these auctions, I offer you to buy souvenirs.
              </p>

               <div class="${"wrap-btns svelte-v0vi9c"}">${validate_component(Button_1, "Button").$$render($$result, {
        href: "",
        target: "_blank",
        style: "border-color: #47babb; margin: 5px;",
        variant: "outlined"
      }, {}, {
        default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `\u{1F3A8} handmade` })}`
      })}</div>
  <p style="${"margin: 0;"}"><span style="${"color:#47babb; font: 22px 'grafitty'"}">3.</span> 
              I provide the next services:              </p>
              ${validate_component(List, "List").$$render($$result, {
        class: "demo-list",
        style: "width: 100%; color: #47babb; margin-bottom: 10px;",
        dense: true
      }, {}, {
        default: () => `${each(services, (service) => `${validate_component(Item, "Item").$$render($$result, { style: "border: 2px solid #47babb; " }, {}, {
          default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, { default: () => `${escape(service)}` })}
                  `
        })}`)}`
      })}
                             <p style="${"margin: 0;"}"><span style="${"color:#47babb; font: 22px 'grafitty'"}">4.</span> 
Come to one of the workshops and play the boardgames with me and other people, or write me nice message and put likes \u{1F447}</p>`
    })}`
  })}</div></section></div>
${validate_component(BlackFaq, "BlackFaq").$$render($$result, { title: "" }, {}, {
    default: () => `${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "I make content with love" }, {}, {})}`
  })}`;
});
export { Support as default };
