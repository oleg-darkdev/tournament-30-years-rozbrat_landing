import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🏠 Squat action',
	shortName: '🏠 Squat action',
	banner: 'img/games/banners/squat_banner.png',
	logo: 'img/games/logos/squat.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#FFFFFF',
	id: 'squat',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#squat'
	},
	goal: ''
};

export default game;
