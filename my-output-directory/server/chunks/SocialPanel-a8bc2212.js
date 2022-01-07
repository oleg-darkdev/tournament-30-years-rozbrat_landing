import { c as create_ssr_component, v as validate_component, i as escape, h as each } from "./index-99bd7138.js";
import { a as Content, C as Card, P as PrimaryAction, M as Media } from "./index-f655cb0a.js";
import { P as Paper, T as Title } from "./Subtitle-e1b47b45.js";
const SocialPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socialMini = [
    {
      img: "img/social/insta_mini.png",
      link: ""
    },
    {
      img: "img/social/youtube_mini.png",
      link: ""
    },
    {
      img: "img/social/telega_mini.png",
      link: ""
    },
    { img: "img/social/fb_mini.png", link: "" },
    {
      img: "img/social/tweeter_mini.png",
      link: ""
    },
    {
      img: "img/social/patronite.png",
      link: ""
    },
    {
      img: "img/social/pinterest.png",
      link: ""
    },
    { img: "img/social/in_mini.png", link: "" },
    { img: "img/social/etsy.png", link: "" }
  ];
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(Paper, "Paper").$$render($$result, {
    style: "margin: 0 auto; max-width: 500px; height: auto; margin-bottom: 25px;",
    class: "paper-demo"
  }, {}, {
    default: () => `
    ${validate_component(Title, "Title").$$render($$result, {
      style: "font: 30px 'grafitty'; text-align: center;"
    }, {}, {
      default: () => `${escape(title + ` \u{1F499}`)}`
    })} 
    
    ${validate_component(Content, "Content").$$render($$result, {
      style: "display: flex; flex-direction: row; justify-content: center; width: 100%; flex-wrap: wrap;"
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
export { SocialPanel as S };
