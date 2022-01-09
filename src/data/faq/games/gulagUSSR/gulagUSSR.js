import gameBasicFAQ from "../../basicGameQuestions";
import otherFaq from './otherFaq';
import popularFaq from './popularFaq';
import gameData from '../../../gamesData';

const gameFAQ = {
	basic: gameBasicFAQ,
	popular: popularFaq,
	other: otherFaq,
	// showFaq: false,
	logo: gameData.gulag.promo.logo,
	name: gameData.gulag.promo.shortName,
	id: gameData.gulag.promo.id,
	brandColor: gameData.gulag.promo.brandColor
};




export default gameFAQ;