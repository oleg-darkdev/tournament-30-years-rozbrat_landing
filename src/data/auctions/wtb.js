import gamesData from '../gamesData';
import Auction from './template';
let gameData = gamesData.wtb;

let game = new Auction(gameData.promo, gameData.croundfanding, gameData.moreInfo);
game.lots = [
	''
];

export default game;
