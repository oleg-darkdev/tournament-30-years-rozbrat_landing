import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🌈 LGBT+',
	shortName: '🌈 LGBT+',
	banner: 'img/games/banners/lgbt_banner.png',
	logo: 'img/games/logos/lgbt_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#FEEB1A',
	id: 'lgbt',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'lgbt'
	},
	goal: ''
};

export default game;
