import { a as allGamesList } from "./gamesData-e89e0b32.js";
class Auction {
  constructor(valuePromo, valueCroundfanding, valueMoreInfo) {
    this.promo = valuePromo;
    this.croundfanding = valueCroundfanding;
    this.moreInfo = valueMoreInfo;
    this.lots;
    this.showList = false;
    this.auctionStatus = 0;
  }
  get promo() {
    return this._promo;
  }
  get croundfanding() {
    return this._croundfanding;
  }
  get moreInfo() {
    return this._moreInfo;
  }
  get showList() {
    return this._showList;
  }
  get lots() {
    return this._lots;
  }
  get status() {
    return this._status;
  }
  set status(value) {
    this._status = value;
  }
  set promo(value) {
    this._promo = value;
  }
  set moreInfo(value) {
    this._moreInfo = value;
  }
  set croundfanding(value) {
    this._croundfanding = value;
  }
  set lots(value) {
    this._lots = value;
  }
  set showList(value) {
    this._showList = value;
  }
}
let gameData$b = allGamesList.gulagUSSR;
let game$b = new Auction(gameData$b.promo, gameData$b.croundfanding, gameData$b.moreInfo);
game$b.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  },
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$a = allGamesList.eco;
let game$a = new Auction(gameData$a.promo, gameData$a.croundfanding, gameData$a.moreInfo);
game$a.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$9 = allGamesList.fnb;
let game$9 = new Auction(gameData$9.promo, gameData$9.croundfanding, gameData$9.moreInfo);
game$9.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$8 = allGamesList.a;
let game$8 = new Auction(gameData$8.promo, gameData$8.croundfanding, gameData$8.moreInfo);
game$8.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$7 = allGamesList.hackerspace;
let game$7 = new Auction(gameData$7.promo, gameData$7.croundfanding, gameData$7.moreInfo);
game$7.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$6 = allGamesList.katyn;
let game$6 = new Auction(gameData$6.promo, gameData$6.croundfanding, gameData$6.moreInfo);
game$6.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$5 = allGamesList.lgbt;
let game$5 = new Auction(gameData$5.promo, gameData$5.croundfanding, gameData$5.moreInfo);
game$5.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$4 = allGamesList.ror;
let game$4 = new Auction(gameData$4.promo, gameData$4.croundfanding, gameData$4.moreInfo);
game$4.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$3 = allGamesList.squat;
let game$3 = new Auction(gameData$3.promo, gameData$3.croundfanding, gameData$3.moreInfo);
game$3.lots = [
  {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    name: "Name of lot",
    etsy: "https://www.etsy.com/"
  }
];
let gameData$2 = allGamesList.wikileaks;
let game$2 = new Auction(gameData$2.promo, gameData$2.croundfanding, gameData$2.moreInfo);
game$2.lots = [
  ""
];
let gameData$1 = allGamesList.wtb;
let game$1 = new Auction(gameData$1.promo, gameData$1.croundfanding, gameData$1.moreInfo);
game$1.lots = [
  ""
];
let gameData = allGamesList.yakusa;
let game = new Auction(gameData.promo, gameData.croundfanding, gameData.moreInfo);
game.lots = [
  ""
];
const listOfAuctions = {
  gulagUSSR: game$b,
  a: game$8,
  eco: game$a,
  fnb: game$9,
  hackerspace: game$7,
  katyn: game$6,
  lgbt: game$5,
  ror: game$4,
  squat: game$3,
  wikileaks: game$2,
  wtb: game$1,
  yakusa: game
};
export { listOfAuctions as l };
