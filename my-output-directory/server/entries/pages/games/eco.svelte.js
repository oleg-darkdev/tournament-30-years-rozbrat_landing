import { c as create_ssr_component, v as validate_component, h as each, i as escape } from "../../../chunks/index-99bd7138.js";
import { C as Card, M as Media, a as Content, P as PrimaryAction, A as Actions, c as ActionButtons, d as ActionIcons, b as MediaContent } from "../../../chunks/index-f655cb0a.js";
import { B as Button_1, L as Label, I as Icon } from "../../../chunks/Button-932af60d.js";
import { I as IconButton } from "../../../chunks/IconButton-5857d6b7.js";
import { L as List, I as Item, T as Text } from "../../../chunks/index-9e8f6ec6.js";
/* empty css                                                                    */import { B as BlackFaq } from "../../../chunks/BlackFaq-78830e0c.js";
import { C as ColorFaq } from "../../../chunks/ColorFaq-01e0e8cd.js";
import "../../../chunks/Subtitle-e1b47b45.js";
import "../../../chunks/Ripple-d40e98c6.js";
const Eco = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let game = {
    promo: {
      name: "A GAME OF WOODLAND MIGHT AND RIGHT",
      img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/products/1-RootGameBox-Edit-Web_640x.png?v=1595294735",
      status: ""
    },
    croundfandingLink: "",
    goal: "",
    educationMoments: ["", ""],
    description: [
      `Root is a game of woodland might and right. Stalk the woods as one of the Vagabonds, seize the initiative with the Eyrie birds of prey, rule over your subjects as the Marquise de Cat, or command the Woodland Alliance to create a new order. With creatures and cunning, you'll rule a fantastic forest kingdom in the ultimate asymmetric board game of adventure and war.`
    ],
    targetAudience: "",
    resources: [
      {
        name: "Update Kit (1st and 2nd Printings Only)",
        type: "pdf",
        link: ""
      },
      {
        name: "Learning to Play",
        type: "pdf",
        link: ""
      },
      {
        name: "Walking Through Root",
        type: "pdf",
        link: ""
      },
      {
        name: "Root Clarifications and Errata",
        type: "pdf",
        link: ""
      }
    ],
    workShopsReports: [{ date: "", img: "", linkInstagram: "" }],
    photos: [``, ``, ``, ``],
    fullInfo: {
      lorImg: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/root-fox_23bf465c-4fac-4914-b44a-e426e264917a.jpg",
      LOR: [
        "Root is a game of adventure and war where 2 to 4 players battle for control of a vast wilderness.",
        "The nefarious Marquise de Cat has seized the great woodland, intent on harvesting its riches. Under her rule, the many creatures of the forest have banded together. This Alliance will seek to strengthen its resources and subvert the rule of Cats. In this effort, the Alliance may enlist the help of the wandering Vagabonds who are able to move through the more dangerous woodland paths. Though some may sympathize with the Alliance\u2019s hopes and dreams, these wanderers are old enough to remember the great birds of prey who once controlled the woods.",
        "Meanwhile, at the edge of the region, the proud, squabbling Eyrie have found a new commander who they hope will lead their faction to resume their ancient birthright.",
        "The stage is set for a contest that will decide the fate of the great woodland. It is up to the players to decide which group will ultimately take root."
      ],
      \u0441haracters: [
        {
          name: "The Marquise de Cat",
          description: "The Cats play a game of engine building and logistics while attempting to police the vast wilderness. By collecting Wood they are able to produce workshops, lumber mills, and barracks. They win by building new buildings and crafts.",
          img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Marquise-de-Cat.png"
        },
        {
          name: "The Eyrie Dynasties",
          description: "The Eyrie musters their hawks to take back the Woods. They must capture as much territory as possible and build roosts before they collapse back into squabbling.",
          img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Eyrie-Dynasties.png"
        },
        {
          name: "The Vagabond",
          description: "Meanwhile, the Vagabond plays all sides of the conflict for their own gain, while hiding a mysterious quest. Explore the board, fight other factions, and work towards achieving your hidden goal.",
          img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Vagabond_6206fe8d-03e4-413a-a1cd-490979470aca.png"
        },
        {
          name: "The Woodland Alliance",
          description: "The Alliance hides in the shadows, recruiting forces and hatching conspiracies. They begin slowly and build towards a dramatic late-game presence\u2014but only if they can manage to keep the other players in check.",
          img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Marquise-de-Cat.png"
        },
        {
          name: "The Eyrie Dynasties",
          description: "The Eyrie musters their hawks to take back the Woods. They must capture as much territory as possible and build roosts before they collapse back into squabbling.",
          img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Eyrie-Dynasties.png"
        },
        {
          name: "The Woodland Alliance",
          description: "The Alliance hides in the shadows, recruiting forces and hatching conspiracies. They begin slowly and build towards a dramatic late-game presence\u2014but only if they can manage to keep the other players in check.",
          img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/files/The-Marquise-de-Cat.png"
        }
      ]
    },
    updates: [
      {
        date: "22.10.2020",
        persons: "Add: Doctor, Crow",
        mechanic: "",
        map: "",
        version: "0.0.1"
      }
    ],
    videos: [
      {
        img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/products/51-RootBaseGameBoard-Winter-Editv2-Web_1024x1024.png?v=1617976948",
        link: "https://www.youtube.com/",
        name: "Walking Through Root",
        type: "video"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/products/1-RootGameBox-Edit-Web_1024x1024.png?v=1595294735",
        link: "https://www.youtube.com/",
        name: "Root Clarifications and Errata",
        type: "video"
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/products/51-RootBaseGameBoard-Winter-Editv2-Web_1024x1024.png?v=1617976948",
        link: "https://www.youtube.com/",
        name: "Learning to Play",
        type: "video"
      }
    ],
    expansions: [
      {
        name: "The Riverfolk Expansion",
        img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/products/10-RootUnderworldBox-Edit-Web_250x.png?v=1595310452",
        fullInfo: {}
      },
      {
        name: "The Clockwork Expansion",
        img: "https://cdn.shopify.com/s/files/1/0106/0162/7706/products/17-RootClockworkGameBox-Edit-Web_250x.png?v=1595303856",
        fullInfo: {}
      }
    ]
  };
  return `${$$result.head += `${$$result.title = `<title>\u2618\uFE0F Eco bunt - eco activism</title>`, ""}`, ""}

${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: "\u2618\uFE0F Eco bunt - eco activism",
    color: "#339A37"
  }, {}, {
    default: () => `
    ${validate_component(Card, "Card").$$render($$result, {
      style: "margin-bottom: 15px; width: auto; max-width: 100%;"
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        style: "height: 250px; background-image: url(" + game.promo.img + ");"
      }, {}, {})}
            ${validate_component(Content, "Content").$$render($$result, {
        style: "display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;"
      }, {}, {
        default: () => `
                

                ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">PLAY \u{1F579}\uFE0F</span>`
          })}`
        })}
                 ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">FUNDRAISING</span>`
          })}`
        })}
                             ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">WORKSHOP \u{1F3AF}</span>`
          })}`
        })}
                ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">BUY \u{1F6D2}</span>`
          })}`
        })}
                ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 300px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">FAQ \u2049\uFE0F</span>`
          })}`
        })}
                ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">ABOUT \u2139\uFE0F</span>`
          })}`
        })}
   
               
                ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 280px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">RESOURCES \u{1F4FA}</span>`
          })}`
        })}
                ${validate_component(Card, "Card").$$render($$result, {
          style: "width: 300px; margin: 5px; border: 2px solid #339A37;  height: 80px; "
        }, {}, {
          default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {
            style: "display: flex; align-items: center;",
            padded: true
          }, {}, {
            default: () => `<span style="${"font: 35px 'grafitty'; color: #339A37;"}">RECORDS \u{1F4C9}</span>`
          })}`
        })}`
      })}`
    })}`
  })}

            

            ${validate_component(ColorFaq, "ColorFaq").$$render($$result, {
    title: ".... is a game of woodland might and right.",
    color: "#339A37"
  }, {}, {
    default: () => `<div id="${"about"}" style="${"display: flex; justify-content: center; align-items: center; flex-direction: column;"}">
                <div style="${"display: flex; flex-direction: row; max-width: 1260px; flex-wrap: wrap; margin-bottom: 15px;"}">${each(game.videos, (video) => `${validate_component(Card, "Card").$$render($$result, {
      style: "width: 280px; height:280px; margin: 5px;"
    }, {}, {
      default: () => `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
        default: () => `${validate_component(Media, "Media").$$render($$result, {
          class: "card-media-square",
          style: "background-image: url(" + video.img + ");",
          aspectRatio: "square"
        }, {}, {})}
                        `
      })}
                    `
    })}`)}</div></div>

            

            <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: column; "}">
                ${validate_component(Card, "Card").$$render($$result, {
      style: "margin-bottom: 15px; width: auto; max-width: 760px; background-color: #339A37;"
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        style: "height: 250px; background-image: url(" + game.promo.img + ");"
      }, {}, {})}
                        ${validate_component(Content, "Content").$$render($$result, {
        class: "mdc-typography--body2",
        style: "color: #191B1B;"
      }, {}, {
        default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0;"}">A card with media.
                            </h2>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.

                            <div style="${"display: flex; flex-direction: row; flex-wrap: wrap;"}">${validate_component(Button_1, "Button").$$render($$result, {
          variant: "outlined",
          class: "button-shaped-round"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, {
            style: "font: 24px 'grafitty'; color:#191B1B;"
          }, {}, { default: () => `2-4 Players` })}
                                    ${validate_component(Icon, "Icon").$$render($$result, {
            style: "color:#191B1B;",
            class: "material-icons"
          }, {}, { default: () => `groups` })}`
        })}
                                ${validate_component(Button_1, "Button").$$render($$result, {
          variant: "outlined",
          class: "button-shaped-round"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, {
            style: "font: 24px 'grafitty'; color:#191B1B;"
          }, {}, { default: () => `8+ age` })}
                                    ${validate_component(Icon, "Icon").$$render($$result, {
            style: "color:#191B1B;",
            class: "material-icons"
          }, {}, { default: () => `face` })}`
        })}
                                ${validate_component(Button_1, "Button").$$render($$result, {
          variant: "outlined",
          class: "button-shaped-round"
        }, {}, {
          default: () => `${validate_component(Label, "Label").$$render($$result, {
            style: "font: 24px 'grafitty'; color:#191B1B;"
          }, {}, { default: () => `60\u201390 min.` })}
                                    ${validate_component(Icon, "Icon").$$render($$result, {
            style: "color:#191B1B;",
            class: "material-icons"
          }, {}, { default: () => `schedule` })}`
        })}</div>`
      })}
                        ${validate_component(Actions, "Actions").$$render($$result, {}, {}, {
        default: () => `${validate_component(ActionButtons, "ActionButtons").$$render($$result, {}, {}, {
          default: () => `${validate_component(Button_1, "Button").$$render($$result, { style: "color:#191B1B;" }, {}, {
            default: () => `${validate_component(Label, "Label").$$render($$result, {}, {}, { default: () => `Action` })}`
          })}`
        })}
                            ${validate_component(ActionIcons, "ActionIcons").$$render($$result, {}, {}, {
          default: () => `${validate_component(IconButton, "IconButton").$$render($$result, {
            style: "color:#191B1B;",
            toggle: true,
            "aria-label": "Add to favorites",
            title: "Add to favorites"
          }, {}, {
            default: () => `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, { default: () => `favorite` })}
                                    ${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, { default: () => `favorite_border` })}`
          })}
                                ${validate_component(IconButton, "IconButton").$$render($$result, {
            style: "color:#191B1B;",
            class: "material-icons",
            title: "Share"
          }, {}, { default: () => `share` })}
                                    ${validate_component(IconButton, "IconButton").$$render($$result, {
            style: "color:#191B1B;",
            class: "material-icons",
            title: "More options"
          }, {}, { default: () => `more_vert` })}`
        })}`
      })}`
    })}

                                        </div>

                                        
                                        <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: column; "}">${validate_component(Card, "Card").$$render($$result, {
      style: "margin-bottom: 15px; width: auto; max-width: 760px; background-color: #339A37;"
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: "card-media-16x9",
        aspectRatio: "16x9",
        style: "background-image: url(" + game.fullInfo.lorImg + ")"
      }, {}, {})}
                                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
        default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"margin: 0;"}">${escape(game.promo.name)}</h2>
                                                        ${each(game.fullInfo.LOR, (paragraph) => `<p>${escape(paragraph)}</p>`)}`
      })}`
    })}
                                                    <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: row; flex-wrap: wrap; max-width: 760px;"}">${each(game.fullInfo.\u0441haracters, (\u0441haracter) => `${validate_component(Card, "Card").$$render($$result, {
      style: "width: 350px; height: 400px; margin: 15px; background-color: #339A37; "
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: "card-media-16x9",
        aspectRatio: "16x9",
        style: "background-image: url(" + \u0441haracter.img + ")"
      }, {}, {
        default: () => `${validate_component(MediaContent, "MediaContent").$$render($$result, {}, {}, {})}
                                                            `
      })}
                                                            ${validate_component(Content, "Content").$$render($$result, { style: "color: #191B1B;" }, {}, {
        default: () => `<h2 class="${"mdc-typography--headline6"}" style="${"color: #191B1B;"}">${escape(\u0441haracter.name)}</h2>
                                                                ${escape(\u0441haracter.description)}`
      })}
                                                        `
    })}`)}</div></div>`
  })}

                                                    ${validate_component(BlackFaq, "BlackFaq").$$render($$result, { title: "Expansions", color: "#339A37" }, {}, {
    default: () => `
                                                        
                                                        <div style="${"display: flex; justify-content: center;align-items: center; flex-direction: row; flex-wrap: wrap; width: 100%;"}">${each(game.expansions, (expansion) => `${validate_component(Card, "Card").$$render($$result, {
      style: "min-width: 300px; margin: 5px; margin: 5px;"
    }, {}, {
      default: () => `${validate_component(Media, "Media").$$render($$result, {
        class: "card-media-square",
        style: "background-image: url(" + expansion.img + ")",
        aspectRatio: "square"
      }, {}, {
        default: () => `<div style="${"color: #fff; position: absolute; bottom: 16px; left: 16px;"}"></div>
                                                                `
      })}
                                                            `
    })}`)}</div>`
  })}

                                                    ${validate_component(ColorFaq, "ColorFaq").$$render($$result, { title: "Resources", color: "#339A37" }, {}, {
    default: () => `
                                                    ${validate_component(List, "List").$$render($$result, {
      id: "resources",
      style: "max-width: 1200px; width: 100%; margin-bottom: 25px;",
      class: "demo-list"
    }, {}, {
      default: () => `${each(game.resources.concat(game.videos), (resource) => `${validate_component(Item, "Item").$$render($$result, { style: "border: 2px solid #339A37;" }, {}, {
        default: () => `${validate_component(Text, "Text").$$render($$result, { style: "color: #339A37;" }, {}, {
          default: () => `${escape(resource.name)}${escape(resource.type == "pdf" ? `.${resource.type} \u{1F4C4}` : `  (${resource.type} \u{1F4FA})`)}`
        })}`
      })}`)}`
    })}

                                                    `
  })}

                                                    ${validate_component(BlackFaq, "BlackFaq").$$render($$result, {
    title: "Customers Who Bought This Item Also Bought",
    color: "#339A37"
  }, {}, {})}

                                                    

                                                    `;
});
export { Eco as default };
