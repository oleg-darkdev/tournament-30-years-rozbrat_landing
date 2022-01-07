import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '☘️ Eco bunt - eco activism',
	shortName: '☘️ Eco',
	banner: 'img/games/banners/eco_banner.png',
	logo: 'img/games/logos/eco.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#339A37',
	id: 'eco',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#eco'
	},
	goal: ''
};

export default game;
