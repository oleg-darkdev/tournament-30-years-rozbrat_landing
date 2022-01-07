import { c as create_ssr_component, i as escape, v as validate_component, h as each, f as add_attribute } from "../../chunks/index-99bd7138.js";
import { S as SocialPanel } from "../../chunks/SocialPanel-a8bc2212.js";
import { L as List, I as Item, T as Text, a as Group, b as Subheader } from "../../chunks/index-9e8f6ec6.js";
import { C as Card, M as Media, a as Content, P as PrimaryAction } from "../../chunks/index-f655cb0a.js";
/* empty css                                                                 */import { B as BlackFaq } from "../../chunks/BlackFaq-78830e0c.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-01e0e8cd.js";
import { g as game } from "../../chunks/gulagSSSR-7bb563db.js";
import "../../chunks/Subtitle-e1b47b45.js";
import "../../chunks/Ripple-d40e98c6.js";
const css$2 = {
  code: ".banner.svelte-16w5q7r{height:560px;width:100%;background-repeat:no-repeat;background-attachment:fixed;background-position:350px -10px;margin-top:-1px;display:flex;justify-content:center;align-content:center;align-items:end}",
  map: null
};
const BannerSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "", imgUrl = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  $$result.css.add(css$2);
  return `<section class="${"banner svelte-16w5q7r"}" style="${"background-image: url(" + escape(imgUrl) + ");"}"><h1 style="${"font: 70px 'grafitty'; margin: 100px 0;"}">${escape(text)}</h1>
</section>`;
});
var QuestionsList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".answer.svelte-qdybij{height:auto;max-width:372px;padding:5px 10px;background-color:#47babb;margin-bottom:15px;border-radius:0 0 4px 4px}",
  map: null
};
const QuestionsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listQuestions = [], title = "" } = $$props;
  if ($$props.listQuestions === void 0 && $$bindings.listQuestions && listQuestions !== void 0)
    $$bindings.listQuestions(listQuestions);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div style="${"display: flex; flex-direction: column; max-width: 405px;"}"><h3 style="${"color: #000; font: 36px 'grafitty';"}">${escape(title)}</h3>
	${validate_component(List, "List").$$render($$result, {
    style: "max-width: 450px; background-color: #000; border: 1px solid\n      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));  height: auto;"
  }, {}, {
    default: () => `${each(listQuestions, (question) => `${validate_component(Item, "Item").$$render($$result, { style: "color: #fff;" }, {}, {
      default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
        default: () => `${escape(question.question)}`
      })}`
    })}
		${question.showAnswer ? `<div class="${"answer svelte-qdybij"}"><p class="${"mdc-typography--body"}">${escape(question.answer)}
		</p></div>` : ``}`)}`
  })}
</div>`;
});
const GameQuestionsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "max-width: 350px; width: auto;  background-color: " + data.brandColor + ";"
  }, {}, {
    default: () => `<a${add_attribute("id", data.id, 0)}></a>
        ${validate_component(Media, "Media").$$render($$result, {
      class: "card-media-16x9",
      aspectRatio: "16x9",
      style: "background-image: url(" + data.logo + "); width: 350px; height: 200"
    }, {}, {})}
            ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
      default: () => `
                
				${validate_component(Card, "Card").$$render($$result, {
        style: "width: 300px;  border-color: " + data.brandColor + ";  height: 80px; margin-bottom: 15px;"
      }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
          style: "display: flex; align-items: center;",
          padded: true
        }, {}, {
          default: () => `<span style="${"font: 35px 'grafitty'; color: #fff;"}">${escape(data.name)} FAQ </span>`
        })}`
      })}

				${data.showFaq ? `${validate_component(Group, "Group").$$render($$result, {}, {}, {
        default: () => `
                    ${validate_component(Subheader, "Subheader").$$render($$result, {
          style: "color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;"
        }, {}, { default: () => `Basic FAQ \u2049\uFE0F` })}
                    ${validate_component(List, "List").$$render($$result, {
          style: "max-width: 450px; width: 100%; height: auto;"
        }, {}, {
          default: () => `${each(data.basic, (faq) => `${validate_component(Item, "Item").$$render($$result, { style: "color: #fff;" }, {}, {
            default: () => `${validate_component(Text, "Text").$$render($$result, { style: "color: #fff" }, {}, { default: () => `${escape(faq.question)}` })}`
          })}
                        ${faq.showAnswer ? `<div class="${"answer"}"><p class="${"mdc-typography--body"}">${escape(faq.answer)}
                            </p></div>` : ``}`)}`
        })}
        ${validate_component(Subheader, "Subheader").$$render($$result, {
          style: "color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;"
        }, {}, { default: () => `Popular FAQ \u2049\uFE0F` })}
                    ${validate_component(List, "List").$$render($$result, {
          style: "max-width: 450px; width: 100%; height: auto;"
        }, {}, {
          default: () => `${each(data.basic, (faq) => `${validate_component(Item, "Item").$$render($$result, { style: "color: #fff;" }, {}, {
            default: () => `${validate_component(Text, "Text").$$render($$result, { style: "color: #fff" }, {}, { default: () => `${escape(faq.question)}` })}`
          })}
                        ${faq.showAnswer ? `<div class="${"answer"}"><p class="${"mdc-typography--body"}">${escape(faq.answer)}
                            </p></div>` : ``}`)}`
        })}
					        ${validate_component(Subheader, "Subheader").$$render($$result, {
          style: "color: #000; font: 28px 'grafitty'; margin: 0; color: #fff;"
        }, {}, { default: () => `Other FAQ \u2049\uFE0F` })}
                    ${validate_component(List, "List").$$render($$result, {
          style: "max-width: 450px; width: 100%; height: auto;"
        }, {}, {
          default: () => `${each(data.other, (faq) => `${validate_component(Item, "Item").$$render($$result, { style: "color: #fff;" }, {}, {
            default: () => `${validate_component(Text, "Text").$$render($$result, { style: "color: #fff" }, {}, { default: () => `${escape(faq.question)}` })}`
          })}
                        ${faq.showAnswer ? `<div class="${"answer"}"><p class="${"mdc-typography--body"}">${escape(faq.answer)}
                            </p></div>` : ``}`)}`
        })}`
      })}` : ``}`
    })}`
  })}`;
});
const questionsGeneral = [
  {
    question: "How can I get a DIY edition of a game with a unique NFC and autographs of all team members?",
    answer: "Buy the boardgame, you automatically receive all of the above - you can order the game here: /shop"
  },
  {
    question: ` How do I contact you?`,
    answer: `1. Come to us personally for the nearest workshop, we will get to know you personally \u{1F601}
2. Write an email to support@ledergames.com. Our email support team can help with damages, missing components, order requests, and anything else you need help with! `
  },
  {
    question: `Is your studio open for public visits?`,
    answer: `We are all geographically distributed members of one big family DarkDev If you want to communicate personally with one of us, sign up for the workshop`
  },
  {
    question: `Can I get involved as a playtester?`,
    answer: `Definitely! Subscribe to our newsletter! We will contact you if we have opportunities for testing soon \u{1F60A}`
  },
  {
    question: `What does DIY components mean?`,
    answer: `Lorem`
  },
  {
    question: `Who made the boxes and organizers?`,
    answer: `Boxes, organaziners, playing fields, etc. - we make it ourselves, you can see how it looks in the video at the links below:`
  }
];
const questionsTypography = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];
const questionsShipping = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];
const questionsWorkshops = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];
const gameBasicFAQ = [
  {
    question: " I have a rules question about GameName!",
    answer: "Please search the Boardgamegeek forums to see if your questions has already been asked or answered. If you are still unclear, please reach out to us at support@darkdev.com"
  },
  {
    question: "When will GameName be available?",
    answer: `We're currently in the midst of our Kickstarter fulfillment for Oath and currently anticipate a retail release in Summer 2021.

(Last updated: March 25, 2021)`
  },
  {
    question: "Will GameName be translated into different languages?",
    answer: "Our general rule is to wait for community approval to complete and make first print sales of any of our games in English or Russian before making translated editions. If you want to help or are simply interested in translation, please write to us at support@darkdev.com"
  },
  {
    question: "How do I reset the game back to the original game state?",
    answer: "If for any reason, you want to reset the order of the cards back to the order of an unplayed game, you can refer to this file (fileLink on cloud) for the specific cards and order."
  },
  {
    question: "How can I find out the version number of an already purchased game?",
    answer: "To find out which version of the game you own, refer to the back of the box. Your NSF number and edition number will be listed next to the barcode for all of our products, including extensions."
  },
  {
    question: `I missed the Kickstarter / workshop. How do I get the game?`,
    answer: `We are currently accepting orders here to ship Mysterious Manor to USA, Europe, Russia`
  }
];
const otherFaq$1 = [
  {
    question: `I have an idea how to improve the game, how to share it?`,
    answer: `Please send your idea to us support@darkdev.com. We will definitely test it.

If you have already printed your idea on paper, you can try it out with the gaming community at one of the .

If your idea seems interesting to the community, you will receive a cash reward or something from our store of your choice.`
  },
  {
    question: `Are there any changes or new extensions planned in the near future?`,
    answer: `There are currently no official plans for improvement ... Root still has a lot of potential ideas and concepts that we want to implement as add-ons. If you have any suggestions for improvement ..., please write to us at support@darkdev.com. We always consider suggestions from the gaming community. `
  },
  {
    question: "How to use the latest extensions with the early version of the GameName",
    answer: "If you have an older version of GameName, you can print these PDFs at home and make changes to your playset, or purchase the Root Upgrade Kit from our online store."
  },
  {
    question: `I have a problem with the components of the translated version of Root. Who should I contact about spare parts?`,
    answer: `Unfortunately, we do not have access to components that contain translated text. Please refer to the front or back of your Root box to find the name of the partnered publisher and contact them for a parts request. If you are in need of a component that does not contain text, you can contact us at support@darkdev.com for assistance.`
  },
  {
    question: ` How can I get the game? Miniatures? Addons?`,
    answer: `The main game Vast: The Crystal Caverns, The Miniatures and The Fearsome Foes expansions are available for order in our store, if you want to play this game for free - come to the `
  }
];
const otherFaq = [
  {
    question: `Where can I see how this game was made?`,
    answer: `Videos of the manufacture of various components are available at the links below:`
  },
  {
    question: "What languages is GameName available in?",
    answer: "GameName is natively created and developed in Russian. We also have language edition partners that have worked on GameName in the following languages as well:"
  },
  {
    question: "How do I find Root in stock?",
    answer: `Poland - - GameName core and all of its related products and expansions are currently sold out on our store and on a distributor level.
		Asia, Australia, USA, EU, rest of world - GameName core and all of its related products and expansions are currently available through distribution and on our webstore right now.`
  },
  {
    question: "I'm new to GameName. Where do I start?",
    answer: "To play any Root content, you need the base Root game. For more information on how Root extensions extend your experience, you can read more here! If you want to play Root with real people, sign up for  is available here \u{1F449}"
  },
  {
    question: "How the GameName developed, the chronology of changes",
    answer: `\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u0432 \u0448\u0435\u0441\u0442\u043E\u0439 \u0440\u0430\u0437 \u043F\u0435\u0447\u0430\u0442\u0430\u0435\u043C \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u0438\u0433\u0440\u0443 ...`
  }
];
const gameFAQ = {
  basic: gameBasicFAQ,
  popular: otherFaq,
  other: otherFaq$1,
  logo: game.promo.logo,
  name: game.promo.shortName,
  id: game.promo.id,
  brandColor: game.promo.brandColor
};
var faq_svelte_svelte_type_style_lang = "";
const css = {
  code: ".questions-wrap.svelte-4pymn1{display:flex;flex-direction:row;height:auto;flex-wrap:wrap;justify-content:space-around}",
  map: null
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>FAQ\`s</title>`, ""}`, ""}

${validate_component(BannerSection, "Banner").$$render($$result, {
    text: "Frequently Asked Questions",
    imgUrl: "img/faq/faq_bg.png"
  }, {}, {})}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Please read the following FAQ before contacting us."
  }, {}, {
    default: () => `<div style="${"display: flex; flex-direction: column; justify-content: center;"}">${validate_component(SocialPanel, "SocialPanel").$$render($$result, { title: "Ask us on social media" }, {}, {})}
	<div class="${"questions-wrap svelte-4pymn1"}">${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
      title: "General Help \u2049\uFE0F",
      listQuestions: questionsGeneral
    }, {}, {})}
		${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
      title: "Shipping \u{1F69A}",
      listQuestions: questionsWorkshops
    }, {}, {})}</div></div>`
  })}

${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: "Please read the following FAQ before contacting us."
  }, {}, {
    default: () => `<div class="${"questions-wrap svelte-4pymn1"}">${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
      title: "Workshops \u{1F9E0}",
      listQuestions: questionsShipping
    }, {}, {})}
	${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
      title: "Typography \u{1F4C7}",
      listQuestions: questionsTypography
    }, {}, {})}</div>`
  })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: "Please read the following FAQ before contacting us."
  }, {}, {
    default: () => `<div class="${"questions-wrap svelte-4pymn1"}">${validate_component(GameQuestionsList, "GameQuestionsList").$$render($$result, { data: gameFAQ }, {}, {})}</div>`
  })}`;
});
export { Faq as default };
