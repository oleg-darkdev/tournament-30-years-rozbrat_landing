import GameClass from './template'


let game = new GameClass();
game.promo = {
	//🕯 Repression and archaeological expeditions.
	name: '🪦 Katyn`40. Archaeological expeditions.',
	shortName: '🪦 Katyn`40',
	banner: 'img/games/banners/katyn_banner.png',
	logo: 'img/games/logos/katyn_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#E4262E',
	id: 'katyn',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'katyn'
	},
	goal: ''
};

export default game;