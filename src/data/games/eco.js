import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';


let game = new GameClass();
// game.faq = faq.a;
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
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner: '',
	characters: [
		{
			name: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		},

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
