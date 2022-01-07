import gameBasicFAQ from "../../basicGameQuestions";
import otherFaq from './otherFaq';
import popularFaq from './popularFaq';
import gameData from '../../../games/gulagSSSR'


const gameFAQ = {
	basic: gameBasicFAQ,
	popular: popularFaq,
	other: otherFaq,
	// showFaq: false,
	logo: gameData.promo.logo,
	name: gameData.promo.shortName,
	id: gameData.promo.id,
	brandColor: gameData.promo.brandColor
};




export default gameFAQ;