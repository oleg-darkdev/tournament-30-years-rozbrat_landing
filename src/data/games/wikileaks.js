import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🌎 Wikileaks',
	shortName: '🌎 Wikileaks',
	banner: 'img/games/banners/wikileaks_banner.png',
	landingBanner: '',
	logo: 'img/games/logos/wikileaks_logo.png',
	promo: '',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#0099FF',
	id: 'wikileaks',
	serial: '',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'wikileaks'
	},
	goal: ''
};

export default game;