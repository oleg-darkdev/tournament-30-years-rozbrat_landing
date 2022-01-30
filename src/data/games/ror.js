import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🥁 Rhythms of Resistance',
	shortName: '🥁 ROR',
	banner: 'img/games/banners/ror_banner.png',
	logo: 'img/games/logos/ror_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#A6539B',
	id: 'ror',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'ror'
	},
	goal: ''
};

export default game;
