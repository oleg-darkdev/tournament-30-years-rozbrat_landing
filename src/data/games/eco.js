import GameClass from './template'
import categoriesGames from '../categoriesGames';

let game = new GameClass();
game.promo = {
	name: '☘️ Eco bunt - eco activism',
	shortName: '☘️ Eco',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/eco_banner.png',
	logo: 'img/games/logos/eco_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#339A37',
	id: 'eco',
	price: '',
	categories: [
		categoriesGames[1],
		categoriesGames[2],
		categoriesGames[4],
		categoriesGames[5],
		categoriesGames[6]
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'eco'
	},
	goal: ''
};

export default game;
