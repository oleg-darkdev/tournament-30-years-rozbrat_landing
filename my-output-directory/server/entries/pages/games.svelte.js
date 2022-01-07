import { c as create_ssr_component, v as validate_component, h as each, i as escape } from "../../chunks/index-99bd7138.js";
import { C as Card, P as PrimaryAction, M as Media, a as Content } from "../../chunks/index-f655cb0a.js";
import { S as SocialPanel } from "../../chunks/SocialPanel-a8bc2212.js";
/* empty css                                                                 */import { B as BlackFaq } from "../../chunks/BlackFaq-78830e0c.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-01e0e8cd.js";
import { a as allGamesList } from "../../chunks/gamesData-1a9796e6.js";
import "../../chunks/Subtitle-e1b47b45.js";
import "../../chunks/gulagSSSR-7bb563db.js";
var games_svelte_svelte_type_style_lang = "";
const css = {
  code: ".show-more-about-game.svelte-1xm9wkx{width:250px;border:2px solid #47babb;height:60px;display:flex;justify-content:center;align-items:center;border-radius:4px;color:#47babb}",
  map: null
};
const Games = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let msgSoory = [
    "The description will be ready soon \u{1F607}",
    "  The site is under construction \u2699\uFE0F",
    "Thank you for your interest \u{1F499}"
  ];
  $$result.css.add(css);
  return `${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: "I created (" + allGamesList.all.length + ") board games \u{1F3B2}"
  }, {}, {
    default: () => `<div class="${"games-promo-wrap"}">${each(allGamesList.all, (game) => `<div>${validate_component(Card, "Card").$$render($$result, {
      style: "width: 400px; height: auto; margin: 10px;"
    }, {}, {
      default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
        default: () => `${validate_component(Media, "Media").$$render($$result, {
          class: "card-media-16x9",
          style: "background-image: url(" + game.promo.logo + ");",
          aspectRatio: "16x9"
        }, {}, {})}
         `
      })}
        ${validate_component(Content, "Content").$$render($$result, {
        style: "  display: flex; flex-direction: column;"
      }, {}, {
        default: () => `${game.show ? `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0; font: 54px'grafitty'; color: #fff;"}">${escape(game.promo.name)}</h2>
         
            <p class="${"mdc-typography--body2"}">${escape(game.moreInfo.description ? game.moreInfo.description : msgSoory[0])} <br> ${escape(msgSoory[1])} <br> ${escape(msgSoory[2])}</p>  
        ` : ``}
      <div style="${"display: flex; justify-content: center;"}"><div class="${"show-more-about-game svelte-1xm9wkx"}"><span style="${"font: 24px 'grafitty';"}">Learn more \u{1F52C}</span>
        </div></div>
          `
      })}
    `
    })}
 </div>`)}</div>`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "" }, {}, {
    default: () => `${validate_component(SocialPanel, "SocialPanel").$$render($$result, {
      title: "Follow, i make content with love"
    }, {}, {})}`
  })}`;
});
export { Games as default };
