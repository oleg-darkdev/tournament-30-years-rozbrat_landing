import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🥕 FNB - food not bombs',
	shortName: '🥕 FNB',
	banner: 'img/games/banners/fnb_banner.png',
	logo: 'img/games/logos/fnb_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#D4944A',
	id: 'fnb',
	price: ''
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
