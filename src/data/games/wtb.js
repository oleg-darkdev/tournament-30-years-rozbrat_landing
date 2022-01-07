import GameClass from './template'


let game = new GameClass();
game.promo = {
	name: '🎥 WTB',
	shortName: '🎥 Repression of journalists in Belarus.',
	banner: 'img/games/banners/wtb_banner.png',
	logo: 'img/games/logos/wtb.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#E4262E',
	id: 'wtb',
	price: ''
};
game.croundfanding = {
		links: {
			allegro: 'https://allegro.pl/',
			patronitePl: 'https://patronite.pl/',
			auction: 'handmade#wtb'
		},
		goal: ''
};

export default game;