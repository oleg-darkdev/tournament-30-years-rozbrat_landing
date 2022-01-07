import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '📟 Hackerspace',
	shortName: '📟 Hackerspace',
	banner: 'img/games/banners/hackerspace_banner.png',
	logo: 'img/games/logos/hackerspace.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#537A2D',
	id: 'hackerspace',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#hackerspace'
	},
	goal: ''
};

export default game;
