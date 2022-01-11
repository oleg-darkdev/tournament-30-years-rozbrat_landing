import GameClass from './template'
import categoriesGames from '../categoriesGames';


let game = new GameClass();
game.promo = {
	name: '🏠 Squat action',
	shortName: '🏠 Squat action',
	banner: 'img/games/banners/squat_banner.png',
	logo: 'img/games/logos/squat_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#47babb',
	id: 'squat',
	price: ''
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'squat'
	},
	goal: ''
};

export default game;
