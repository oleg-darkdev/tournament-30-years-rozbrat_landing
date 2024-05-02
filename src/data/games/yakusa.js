import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: 'Yakusa wars',
	shortName: 'Yakusa', // 🥷
	banner: 'img/games/banners/yakusa_banner.png',
	landingBanner: '',
	logo: 'img/games/logos/yakusa_logo.png',
	promo: '',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#E5292A',
	id: 'yakusa',
	serial: '',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'yakusa'
	},
	goal: ''
};

export default game;