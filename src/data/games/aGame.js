import GameClass from './template';
import categoriesGames from '../categoriesGames';

let game = new GameClass();
game.promo = {
	name: 'Theory of Anarchism', // 🏴
	shortName: 'Anarchism',
	banner: 'img/games/banners/A_banner.png',
	logo: 'img/games/logos/A_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#702282',
	id: 'A',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'a'
	},
	goal: ''
};

export default game;



