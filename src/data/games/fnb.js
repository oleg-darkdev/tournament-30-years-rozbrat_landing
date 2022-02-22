import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🥕 FNB - food not bombs',
	shortName: '🥕 FNB',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/fnb_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/fnb_bg.png',
	logo: 'img/games/logos/fnb_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#81B228',
	id: 'fnb',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/banners/persons_banner.png',
	characters: [
		{
			name: 'Bielsko-Biała',
			bgColor: '#e58824',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/persons/bielsko_biala_person.png'
		},
		{
			name: 'Bytom',
			bgColor: '#e58824',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/persons/bytom_person.png'
		},
		{
			name: 'Zielona Góra',
			bgColor: '#81b228',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/persons/Zielona_G%C3%B3ra_person.png'
		},
		{
			name: 'Kraków',
			bgColor: '#81b228',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/persons/krak%C3%B3w_person.png'
		},
		{
			name: 'Szczecin',
			bgColor: '#bd1819',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/persons/szczecin_person.png'
		},
		{
			name: 'Gdańsk',
			bgColor: '#bd1819',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/fnb/persons/gda%C5%84sk_person.png'
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'fnb'
	},
	goal: ''
};

export default game;
