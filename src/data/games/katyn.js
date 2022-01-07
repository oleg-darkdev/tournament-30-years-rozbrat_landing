import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🕯 Katyn',
	shortName: '🕯 Katyn`40. Repression and archaeological expeditions.',
	banner: 'img/games/banners/katyn_banner.png',
	logo: 'img/games/logos/katyn.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#',
	id: 'katyn',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'handmade#katyn'
	},
	goal: ''
};

export default game;