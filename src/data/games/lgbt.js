import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🌈 LTGBT+',
	shortName: '🌈 LTGBT+',
	banner: 'img/games/banners/lgbt_banner.png',
	logo: 'img/games/logos/lgbt.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#FEEB1A',
	id: 'lgbt',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#lgbt'
	},
	goal: ''
};

export default game;
