import basicFAQ from './gulagUSSR/basicQuestions';
import otherFaq from './gulagUSSR/otherFaq';
import popularFaq from './gulagUSSR/popularFaq';
import gameData from '../../gamesData';
import FAQ from './template';

let gameFAQ = new FAQ(
	gameData.ksg.promo,
	gameData.ksg.croundfanding,
	basicFAQ,
	popularFaq,
	otherFaq
);

export default gameFAQ;
