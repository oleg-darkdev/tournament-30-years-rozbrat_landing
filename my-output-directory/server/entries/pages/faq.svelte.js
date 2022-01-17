import { c as create_ssr_component, v as validate_component, h as escape, i as each, f as add_attribute } from "../../chunks/index-d2f82617.js";
import { e as Card, g as PrimaryAction, M as Media, d as Content } from "../../chunks/index-d5037018.js";
import { b as List, c as Item, T as Text, e as Subheader, I as Icon, h as Group } from "../../chunks/index-2fbb442f.js";
import { F as Fab } from "../../chunks/Fab-389ebb11.js";
import { B as BlackFaq } from "../../chunks/BlackFaq-325a0523.js";
import { C as ColorFaq } from "../../chunks/ColorFaq-c54aa38b.js";
import { a as allGamesList } from "../../chunks/gamesData-e89e0b32.js";
const TableOfContent$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "width: 320px; background-color: #47babb;  height: 80px; margin: 0 0 15px  5px;"
  }, {}, {
    default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
      style: "display: flex; align-items: center;",
      padded: true
    }, {}, {
      default: () => `<span style="${"font: 28px 'grafitty';"}">Table of Content \u{1F449}</span>`
    })}`
  })}`;
});
var QuestionsList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".answer.svelte-qdybij{height:auto;max-width:372px;padding:5px 10px;background-color:#47babb;margin-bottom:15px;border-radius:0 0 4px 4px}",
  map: null
};
const QuestionsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listQuestions = [], category = "" } = $$props;
  if ($$props.listQuestions === void 0 && $$bindings.listQuestions && listQuestions !== void 0)
    $$bindings.listQuestions(listQuestions);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$result.css.add(css$3);
  return `<div style="${"display: flex; flex-direction: column; max-width: 405px;"}"><h3 style="${"color: #000; font: 36px 'grafitty';"}">${escape(category.text)}</h3>
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
var PartGameFaqList_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrap-question-type.svelte-v39jm0{display:flex;align-content:center;justify-content:space-between;flex-direction:row;flex-wrap:wrap-reverse}",
  map: null
};
const PartGameFaqList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { faqData } = $$props;
  let { text } = $$props;
  if ($$props.faqData === void 0 && $$bindings.faqData && faqData !== void 0)
    $$bindings.faqData(faqData);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  return `${validate_component(Subheader, "Subheader").$$render($$result, { style: "" }, {}, {
    default: () => `<div class="${"wrap-question-type svelte-v39jm0"}"><h2 style="${"font: 28px 'grafitty'; margin: 0; color: #fff;"}">${escape(text)}</h2>
        ${validate_component(Fab, "Fab").$$render($$result, { mini: true }, {}, {
      default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
        default: () => `${escape("expand_more")}`
      })}`
    })}</div>`
  })}

${``}`;
});
const GameQuestionsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Card, "Card").$$render($$result, {
    style: "width: 100%; max-width: 100%; min-width: 300px;background-color: " + data.promo.brandColor + "; margin-bottom: 15px;"
  }, {}, {
    default: () => `<a${add_attribute("id", data.promo.id, 0)}></a>
        ${validate_component(Media, "Media").$$render($$result, {
      style: "background-image: url(" + data.promo.banner + "); max-height: 300px; height: 230px; width: 100%; min-width: 300px; "
    }, {}, {})}
            ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
      default: () => `<div style="${"display: flex; justify-content: center;"}">${validate_component(Card, "Card").$$render($$result, {
        style: "min-width: 320px; width: auto; border-color: " + data.promo.brandColor + ";  height: 80px; margin-bottom: 15px;"
      }, {}, {
        default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
          style: "display: flex; align-items: center;",
          padded: true
        }, {}, {
          default: () => `<span style="${"font: 35px 'grafitty'; color: #fff;"}">${escape(data.promo.shortName)} - FAQ</span>`
        })}`
      })}</div>

            ${data.showFaq ? `<div style="${"display: flex; justify-content: center; width: 100%;"}">${validate_component(Group, "Group").$$render($$result, { style: "width: 100%;" }, {}, {
        default: () => `${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "Basic FAQ \u2049\uFE0F",
          faqData: data.basicFAQ
        }, {}, {})}
                    ${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "Popular FAQ \u2049\uFE0F",
          faqData: data.popularFaq
        }, {}, {})}
                    ${validate_component(PartGameFaqList, "PartGameFaqList").$$render($$result, {
          text: "Other FAQ \u2049\uFE0F",
          faqData: data.otherFaq
        }, {}, {})}`
      })}</div>` : ``}`
    })}`
  })}`;
});
const GetStarted = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div${add_attribute("class", step == 0 ? "" : "hidden", 0)}><div class="${"wrap-faq-hidden-block"}">
        ${validate_component(TableOfContent$1, "TableOfContentBtn").$$render($$result, { step }, {
      step: ($$value) => {
        step = $$value;
        $$settled = false;
      }
    }, {})}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
let FAQCategories = {
  support: {
    text: "Support \u{1F499}",
    id: "support"
  },
  about: {
    text: "About me \u2139\uFE0F",
    id: "about"
  },
  general: {
    text: "General Help \u2049\uFE0F",
    id: "general"
  },
  workshops: {
    text: "Workshops \u{1F9E0}",
    id: "workshops"
  },
  shipping: {
    text: "Shipping \u{1F69A}",
    id: "shipping"
  },
  typography: {
    text: "DarkDruk \u{1F4C7}",
    id: "typography"
  }
};
const AnchorList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<div${add_attribute("class", step == 1 ? "" : "hidden", 0)}>${validate_component(List, "List").$$render($$result, { lass: "demo-list" }, {}, {
    default: () => `${each(Object.values(FAQCategories), (category) => `
            ${validate_component(Item, "Item").$$render($$result, {
      style: "width: 100%; font: 28px 'grafitty'; color: #fff;"
    }, {}, {
      default: () => `${validate_component(Text, "Text").$$render($$result, {}, {}, {
        default: () => `${escape(category.text)}`
      })}`
    })}`)}`
  })}</div>`;
});
var TableOfContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrap-faq-hidden-block{display:flex;justify-content:center;align-items:center;flex-direction:column}",
  map: null
};
const TableOfContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div style="${"display: flex; justify-content: center;align-items: center; width: 100%; background-color:#191B1B; "}"><section style="${"width: 430px; margin: 0; display: flex; height: auto; "}"><div class="${"tur-bg"}" style="${"flex-direction: column; align-items: center; "}">
            ${validate_component(Card, "Card").$$render($$result, {
      style: "width: 360px;  margin-bottom: 15px;"
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: step == 0 ? "" : "hidden",
        style: "height: 460px; width: 100%; background-image: url('img/faq.png');"
      }, {}, {})}
                  ${validate_component(Content, "Content").$$render($$result, {
        class: "mdc-typography--body2",
        style: "display: flex; justify-content: center;align-items: center; flex-direction: column;"
      }, {}, {
        default: () => `${validate_component(GetStarted, "GetStarted").$$render($$result, { step }, {
          step: ($$value) => {
            step = $$value;
            $$settled = false;
          }
        }, {})}
                      ${validate_component(AnchorList, "AnchorList").$$render($$result, { step }, {
          step: ($$value) => {
            step = $$value;
            $$settled = false;
          }
        }, {})}`
      })}`
    })}</div></section>
</div>`;
  } while (!$$settled);
  return $$rendered;
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
class FAQ {
  constructor(valuePromo, valueCroundfanding, valueGameBasicFAQ, valuePopularFaq, valueOtherFaq) {
    this.promo = valuePromo;
    this.croundfanding = valueCroundfanding;
    this.basicFAQ = valueGameBasicFAQ;
    this.popularFaq = valuePopularFaq;
    this.otherFaq = valueOtherFaq;
  }
  get promo() {
    return this._promo;
  }
  get croundfanding() {
    return this._croundfanding;
  }
  set promo(value) {
    this._promo = value;
  }
  set croundfanding(value) {
    this._croundfanding = value;
  }
}
let gameFAQ$b = new FAQ(allGamesList.gulagUSSR.promo, allGamesList.gulagUSSR.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$a = new FAQ(allGamesList.eco.promo, allGamesList.eco.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$9 = new FAQ(allGamesList.fnb.promo, allGamesList.fnb.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$8 = new FAQ(allGamesList.a.promo, allGamesList.a.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$7 = new FAQ(allGamesList.hackerspace.promo, allGamesList.hackerspace.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$6 = new FAQ(allGamesList.katyn.promo, allGamesList.katyn.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$5 = new FAQ(allGamesList.lgbt.promo, allGamesList.lgbt.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$4 = new FAQ(allGamesList.ror.promo, allGamesList.ror.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$3 = new FAQ(allGamesList.squat.promo, allGamesList.squat.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$2 = new FAQ(allGamesList.wikileaks.promo, allGamesList.wikileaks.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ$1 = new FAQ(allGamesList.wtb.promo, allGamesList.wtb.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
let gameFAQ = new FAQ(allGamesList.yakusa.promo, allGamesList.yakusa.croundfanding, gameBasicFAQ, otherFaq, otherFaq$1);
const gamesFaq = {
  gulagUSSR: gameFAQ$b,
  a: gameFAQ$8,
  eco: gameFAQ$a,
  fnb: gameFAQ$9,
  hackerspace: gameFAQ$7,
  katyn: gameFAQ$6,
  lgbt: gameFAQ$5,
  ror: gameFAQ$4,
  squat: gameFAQ$3,
  wikileaks: gameFAQ$2,
  wtb: gameFAQ$1,
  yakusa: gameFAQ
};
var faq_svelte_svelte_type_style_lang = "";
const css = {
  code: ".questions-wrap.svelte-4pymn1{display:flex;flex-direction:row;height:auto;flex-wrap:wrap;justify-content:space-around}",
  map: null
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let step = 0;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>FAQ\`s \u2049\uFE0F</title>`, ""}`, ""}


<div style="${"display: flex; justify-content: center;align-items: center; "}">${validate_component(TableOfContent, "TableOfContent").$$render($$result, { step }, {
      step: ($$value) => {
        step = $$value;
        $$settled = false;
      }
    }, {})}</div>

${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
      title: "Please read the following FAQ before contacting me."
    }, {}, {
      default: () => `<div class="${"questions-wrap svelte-4pymn1"}">${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
        category: FAQCategories.general,
        listQuestions: questionsGeneral
      }, {}, {})}
		${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
        category: FAQCategories.workshops,
        listQuestions: questionsWorkshops
      }, {}, {})}</div>
	<a${add_attribute("name", FAQCategories.shipping.id, 0)}></a>

	<div class="${"questions-wrap svelte-4pymn1"}">${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
        category: FAQCategories.shipping,
        listQuestions: questionsShipping
      }, {}, {})}
		${validate_component(QuestionsList, "QuestionsList").$$render($$result, {
        category: FAQCategories.typography,
        listQuestions: questionsTypography
      }, {}, {})}</div>`
    })}

${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "FAQ about games \u{1F3B2}" }, {}, {
      default: () => `${each(Object.values(gamesFaq), (game) => `${validate_component(GameQuestionsList, "GameQuestionsList").$$render($$result, { data: game }, {}, {})}`)}`
    })}



`;
  } while (!$$settled);
  return $$rendered;
});
export { Faq as default };
