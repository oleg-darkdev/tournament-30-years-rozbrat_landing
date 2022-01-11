import GameClass from './template'
import categoriesGames from '../categoriesGames';


let game = new GameClass();
game.promo = {
	name: '📟 Hackerspace',
	shortName: '📟 Hackerspace',
	banner: 'img/games/banners/hackerspace_banner.png',
	logo: 'img/games/logos/hackerspace_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#537A2D',
	id: 'hackerspace',
	price: '',
	categories: [
		categoriesGames[2],
		categoriesGames[4],
		categoriesGames[7],
		categoriesGames[6]
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'hackerspace'
	},
	goal: ''
};

export default game;
