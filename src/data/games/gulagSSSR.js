import GameClass from './template';


let game = new GameClass();
game.promo = {
	name: '💀 Gulag: 1928-1953',
	shortName: '💀 Gulag',
	banner: 'img/games/banners/gulag_banner.png',
	logo: 'img/games/logos/gulagUSSR_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#E40F2A',
	id: 'gulagUSSR',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#gulagUSSR'
	},
	goal: ''
};

export default game;
// console.log(game)
