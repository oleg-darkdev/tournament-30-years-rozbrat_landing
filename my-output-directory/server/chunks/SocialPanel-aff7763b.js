import { c as create_ssr_component, v as validate_component, h as escape, i as each } from "./index-d2f82617.js";
import { P as Paper, T as Title, d as Content, e as Card, g as PrimaryAction, M as Media } from "./index-d5037018.js";
const socialBlack = {
  insta: {
    img: "img/social/insta_black.png",
    link: "https://www.instagram.com/darkdev.games/"
  },
  youtube: {
    img: "img/social/youtube_black.png",
    link: "https://www.youtube.com/channel/UCkOSmUpGfWuLXMskYTymLGA"
  },
  tg: {
    img: "img/social/telega_black.png",
    link: "https://t.me/darkdev_games"
  },
  fb: {
    img: "img/social/fb_black.png",
    link: ""
  },
  twitter: {
    img: "img/social/tweeter_black.png",
    link: ""
  },
  patronite: {
    img: "img/social/patronite_black.png",
    link: ""
  },
  pinterest: {
    img: "img/social/pinterest_black.png",
    link: "www.pinterest.com/darkdev_games"
  },
  in: {
    img: "img/social/in_black.png",
    link: "https://www.linkedin.com/groups/13745684/"
  },
  etsy: {
    img: "img/social/etsy_black.png",
    link: ""
  }
};
const SocialPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(Paper, "Paper").$$render($$result, {
    style: "margin: 0 auto; max-width: 340px; height: auto; margin-bottom: 25px; border: 2px solid #47babb; background-color: #191B1B;",
    class: "paper-demo"
  }, {}, {
    default: () => `
    ${validate_component(Title, "Title").$$render($$result, {
      style: "font: 30px 'grafitty'; text-align: center; color: #fff;"
    }, {}, {
      default: () => `${escape(title + ` \u{1F499}`)}`
    })} 
    
    ${validate_component(Content, "Content").$$render($$result, {
      style: "display: flex; flex-direction: row; align-content: center; width: 100%; min-width: 300px; flex-wrap: wrap;"
    }, {}, {
      default: () => `${each(Object.values(socialBlack), (social) => `${validate_component(Card, "Card").$$render($$result, { style: "width: 70px; margin: 5px;" }, {}, {
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
export { SocialPanel as S, socialBlack as s };
