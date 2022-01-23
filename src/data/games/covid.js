import GameClass from './template'
import categoriesGames from '../categoriesGames';


let game = new GameClass();
game.promo = {
	name: ' Covid resistance',
	shortName: ' CR',
	banner: 'img/games/banners/fnb_banner.png',
	logo: 'img/games/logos/fnb_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#D4944A',
	id: 'fnb',
	price: '',
	categories: [
		categoriesGames[1],
		categoriesGames[2],
		categoriesGames[5],
		categoriesGames[6]
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'fnb'
	},
	goal: ''
};

export default game;
