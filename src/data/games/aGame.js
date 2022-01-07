import GameClass from './template';

let game = new GameClass();
game.promo = {
	name: '🏴 A',
	shortName: '🏴 theory of Anarchism ',
	banner: 'img/games/banners/A_banner.png',
	logo: 'img/games/logos/A.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#702282',
	id: 'A',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#a'
	},
	goal: ''
};

export default game;