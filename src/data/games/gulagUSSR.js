import GameClass from './template';
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '💀 Gulag: 1928-1953',
	shortName: '💀 Gulag',
	banner: 'img/games/banners/gulag_banner.png',
	landingBanner: '',
	logo: 'img/games/logos/gulagUSSR_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#E40F2A',
	id: 'gulag-ussr',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'gulagUSSR'
	},
	goal: ''
};


export default game;
// console.log(game)
