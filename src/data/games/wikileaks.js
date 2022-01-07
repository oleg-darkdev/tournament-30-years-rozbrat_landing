import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🌎 Wikileaks',
	shortName: '🌎 Wikileaks',
	banner: 'img/games/banners/wikileaks_banner.png',
	logo: 'img/games/logos/wikileaks.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#',
	id: 'wikileaks',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#wikileaks'
	},
	goal: ''
};

export default game;