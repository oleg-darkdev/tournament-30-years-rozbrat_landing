class Game {
  constructor() {
    this.promo = {
      name: "",
      shortName: "",
      banner: "",
      logo: "",
      status: 0,
      shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      brandColor: "#47babb",
      id: "",
      price: "",
      categories: ["lorem", "lorem", "lorem", "lorem"]
    };
    this.croundfanding = {
      links: {
        allegro: "",
        patronitePl: "",
        auction: ""
      },
      goal: ""
    };
    this.workShopsReports = [
      {
        date: "",
        img: "",
        linkInstagram: ""
      }
    ];
    this.moreInfo = {
      players: "2-8",
      age: "16+",
      time: "120-180",
      LOR: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ],
      lorImg: "",
      goal: "",
      educationMoments: ["", ""],
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      ],
      targetAudience: "",
      photos: ["", "", ""],
      roles: [
        {
          name: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          photo: ""
        },
        {
          name: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          photo: ""
        }
      ]
    };
    this.updates = [
      {
        date: "",
        persons: "",
        mechanic: "",
        map: "",
        version: ""
      }
    ];
    this.resources = [
      {
        name: "",
        type: "pdf",
        link: ""
      }
    ];
    this.videos = [
      {
        img: "",
        link: "",
        name: "",
        type: "video"
      }
    ];
    this.lor = {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ],
      lorImg: ""
    };
    this.expansions = [
      {
        name: "",
        img: "",
        fullInfo: {
          name: ""
        }
      }
    ];
  }
  get promo() {
    return this._promo;
  }
  get croundfanding() {
    return this._croundfanding;
  }
  get workShopsReports() {
    return this._workShopsReports;
  }
  get moreInfo() {
    return this._moreInfo;
  }
  get updates() {
    return this._updates;
  }
  get resources() {
    return this._resources;
  }
  get videos() {
    return this._videos;
  }
  get resources() {
    return this._resources;
  }
  get expansions() {
    return this._expansions;
  }
  set promo(value) {
    this._promo = value;
  }
  set croundfanding(value) {
    this._croundfanding = value;
  }
  set workShopsReports(value) {
    this._workShopsReports = value;
  }
  set moreInfo(value) {
    this._moreInfo = value;
  }
  set updates(value) {
    this._updates = value;
  }
  set resources(value) {
    this._resources = value;
  }
  set videos(value) {
    this._videos = value;
  }
  set resources(value) {
    this._resources = value;
  }
  set expansions(value) {
    this._expansions = value;
  }
}
let categoriesGames = [
  {
    text: "All",
    emoji: "\u2705"
  },
  {
    text: "Historical",
    emoji: "\u{1F4DC}"
  },
  {
    text: "Strategy",
    emoji: "\u{1F4EF}"
  },
  {
    text: "Art",
    emoji: "\u{1F3A8}"
  },
  {
    text: "Office",
    emoji: "\u{1F4BC}"
  },
  {
    text: "Political",
    emoji: "\u{1F3F0}"
  },
  {
    text: "Social activism",
    emoji: "\u{1F465}"
  },
  {
    text: "Economic",
    emoji: "\u{1F4B8}"
  },
  {
    text: "Management",
    emoji: "\u{1F5FF}"
  },
  {
    text: "It",
    emoji: "\u{1F916}"
  }
];
let game$f = new Game();
game$f.promo = {
  name: "\u{1F480} Gulag: 1928-1953",
  shortName: "\u{1F480} Gulag",
  banner: "img/games/banners/gulag_banner.png",
  logo: "img/games/logos/gulagUSSR_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#E40F2A",
  id: "gulag-ussr",
  price: "",
  categories: [
    categoriesGames[1],
    categoriesGames[2],
    categoriesGames[5],
    categoriesGames[6]
  ]
};
game$f.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "gulagUSSR"
  },
  goal: ""
};
let game$e = new Game();
game$e.promo = {
  name: "Katyn`40. Archaeological expeditions.",
  shortName: "Katyn`40",
  banner: "img/games/banners/katyn_banner.png",
  logo: "img/games/logos/katyn_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#E4262E",
  id: "katyn",
  price: "",
  categories: [
    categoriesGames[1],
    categoriesGames[2],
    categoriesGames[7],
    categoriesGames[6]
  ]
};
game$e.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "katyn"
  },
  goal: ""
};
let game$d = new Game();
game$d.promo = {
  name: "Yakusa wars",
  shortName: "Yakusa",
  banner: "img/games/banners/yakusa_banner.png",
  logo: "img/games/logos/yakusa_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#E5292A",
  id: "yakusa",
  price: ""
};
game$d.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "yakusa"
  },
  goal: ""
};
let game$c = new Game();
game$c.promo = {
  name: "\u{1F3A5} Repression of journalists in Belarus.",
  shortName: "\u{1F3A5} WTB",
  banner: "img/games/banners/wtb_banner.png",
  logo: "img/games/logos/wtb_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#E4262E",
  id: "wtb",
  price: ""
};
game$c.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "wtb"
  },
  goal: ""
};
let game$b = new Game();
game$b.promo = {
  name: "\u{1F30E} Wikileaks",
  shortName: "\u{1F30E} Wikileaks",
  banner: "img/games/banners/wikileaks_banner.png",
  logo: "img/games/logos/wikileaks_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#0099FF",
  id: "wikileaks",
  price: ""
};
game$b.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "wikileaks"
  },
  goal: ""
};
const games$3 = {
  gulagUSSR: game$f,
  katyn: game$e,
  yakusa: game$d,
  wtb: game$c,
  wikileaks: game$b
};
let game$a = new Game();
game$a.promo = {
  name: "\u{1F3F4} Theory of Anarchism",
  shortName: "\u{1F3F4} Anarchism",
  banner: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/A_banner.png",
  logo: "img/games/logos/A_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#702282",
  id: "A",
  price: "",
  categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};
game$a.moreInfo = {
  players: "2-8",
  age: "16+",
  time: "120-180",
  LOR: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  ],
  lorImg: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/A_banner.png",
  goal: "",
  educationMoments: ["", ""],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  ],
  targetAudience: "",
  photos: ["", "", ""],
  roles: {
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    ],
    banner: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/banners/persons_banner.png",
    persons: [
      {
        name: "Agorist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/agorist_person.png"
      },
      {
        name: "Anarcho-capitalist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/capitalist_person.png"
      },
      {
        name: "Anarcho-ecologist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/ecolog_person.png"
      },
      {
        name: "Anarcho-individualist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/egoist_person.png"
      },
      {
        name: "Anarcho-feminist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/feminist_person.png"
      },
      {
        name: "Anarcho-maximalist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/maximalist_person.png"
      },
      {
        name: "Anarcho-mutuelist",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/mutuelist_person.png"
      },
      {
        name: "Anarcho-qweer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/qweer_person.png"
      },
      {
        name: "Anarcho-technocrat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/technokrat_person.png"
      }
    ]
  }
};
game$a.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "a"
  },
  goal: ""
};
let game$9 = new Game();
game$9.promo = {
  name: "\u{1F955} FNB - food not bombs",
  shortName: "\u{1F955} FNB",
  banner: "img/games/banners/fnb_banner.png",
  logo: "img/games/logos/fnb_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#D4944A",
  id: "fnb",
  price: "",
  categories: [
    categoriesGames[1],
    categoriesGames[2],
    categoriesGames[5],
    categoriesGames[6]
  ]
};
game$9.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "fnb"
  },
  goal: ""
};
let game$8 = new Game();
game$8.promo = {
  name: "\u2618\uFE0F Eco bunt - eco activism",
  shortName: "\u2618\uFE0F Eco",
  banner: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/eco_banner.png",
  logo: "img/games/logos/eco_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#339A37",
  id: "eco",
  price: "",
  categories: [
    categoriesGames[1],
    categoriesGames[2],
    categoriesGames[4],
    categoriesGames[5],
    categoriesGames[6]
  ]
};
game$8.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "eco"
  },
  goal: ""
};
let game$7 = new Game();
game$7.promo = {
  name: "\u{1F3E0} Squat action",
  shortName: "\u{1F3E0} Squat action",
  banner: "img/games/banners/squat_banner.png",
  logo: "img/games/logos/squat_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#47babb",
  id: "squat",
  price: ""
};
game$7.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "squat"
  },
  goal: ""
};
let game$6 = new Game();
game$6.promo = {
  name: "\u{1F941} Rhythms of Resistance",
  shortName: "\u{1F941} ROR",
  banner: "img/games/banners/ror_banner.png",
  logo: "img/games/logos/ror_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#A6539B",
  id: "ror",
  price: ""
};
game$6.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "ror"
  },
  goal: ""
};
let game$5 = new Game();
game$5.promo = {
  name: "\u{1F308} LGBT+",
  shortName: "\u{1F308} LGBT+",
  banner: "img/games/banners/lgbt_banner.png",
  logo: "img/games/logos/lgbt_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#FEEB1A",
  id: "lgbt",
  price: ""
};
game$5.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "lgbt"
  },
  goal: ""
};
let game$4 = new Game();
game$4.promo = {
  name: "\u{1F4DF} Hackerspace",
  shortName: "\u{1F4DF} Hackerspace",
  banner: "img/games/banners/hackerspace_banner.png",
  logo: "img/games/logos/hackerspace_logo.png",
  status: 1,
  shortDescription: "",
  brandColor: "#537A2D",
  id: "hackerspace",
  price: "",
  categories: [
    categoriesGames[2],
    categoriesGames[4],
    categoriesGames[7],
    categoriesGames[6]
  ]
};
game$4.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "hackerspace"
  },
  goal: ""
};
const games$2 = {
  a: game$a,
  fnb: game$9,
  eco: game$8,
  squat: game$7,
  hackerspace: game$4,
  lgbt: game$5,
  ror: game$6
};
let game$3 = new Game();
let game$2 = new Game();
const games$1 = {
  graffity: game$3,
  tattoo: game$2
};
let game$1 = new Game();
let game = new Game();
const games = {
  kanbanel: game$1,
  linux: game
};
function getGames(gamesCategory) {
  let arrayTemp = [], key;
  for (key in gamesCategory) {
    arrayTemp.push(gamesCategory[key]);
  }
  return arrayTemp;
}
let allGamesList = {
  categories: {
    civicActivism: games$2,
    historical: games$3,
    art: games$1,
    it: games
  },
  all: [].concat(getGames(games$3), getGames(games$2)),
  gulagUSSR: games$3.gulagUSSR,
  katyn: games$3.katyn,
  yakusa: games$3.yakusa,
  wtb: games$3.wtb,
  wikileaks: games$3.wikileaks,
  a: games$2.a,
  fnb: games$2.fnb,
  eco: games$2.eco,
  squat: games$2.squat,
  hackerspace: games$2.hackerspace,
  lgbt: games$2.lgbt,
  ror: games$2.ror,
  graffity: games$1.graffity,
  tattoo: games$1.tattoo,
  kanbanel: games.kanbanel,
  linux: games.linux
};
export { allGamesList as a, categoriesGames as c };
