import GameClass from '../template';
import regularData from './regularData';
import recommendationsData from './recommendations';

let game = new GameClass();
/*
	Universal data for all languages
*/ 
game.promo = regularData.promo;
game.moreInfo = regularData.moreInfo;
game.recommendations = recommendationsData;
game.croundfanding = regularData.croundfanding;
game.roles.banner = regularData.roles.banner;
game.roles.characters = regularData.roles.characters;

export default game;



