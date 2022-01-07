let shortLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", bigLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
let game = {
  promo: {
    name: "\u{1F480} Gulag: 1928-1953",
    shortName: "\u{1F480} Gulag",
    banner: "img/games/banners/gulag_banner.png",
    logo: "img/games/logos/gulagUSSR_logo.png",
    status: 1,
    shortDescription: "",
    brandColor: "#E40F2A",
    id: "gulagUSSR",
    price: ""
  },
  croundfanding: {
    links: {
      allegro: "https://allegro.pl/",
      patronitePl: "https://patronite.pl/",
      auction: "handmade#gulagUSSR"
    },
    goal: ""
  },
  workShopsReports: [
    {
      date: "",
      img: "",
      linkInstagram: ""
    }
  ],
  moreInfo: {
    LOR: [shortLorem, bigLorem, bigLorem, shortLorem],
    lorImg: "",
    goal: "",
    educationMoments: ["", ""],
    description: [bigLorem, bigLorem],
    targetAudience: "",
    photos: [],
    \u0441haracters: [
      {
        name: "",
        description: "",
        photo: ""
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
  resources: [
    {
      name: "",
      type: "pdf",
      link: ""
    }
  ],
  videos: [
    {
      img: "",
      link: "",
      name: "",
      type: "video"
    }
  ],
  expansions: [
    {
      name: "",
      img: "",
      fullInfo: {}
    }
  ]
};
export { game as g };
