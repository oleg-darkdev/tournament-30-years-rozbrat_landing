import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🏠 Squat action',
	shortName: '🏠 Squat action',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/squat_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/squat_bg.png',
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
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/banners/persons_banner.png', // new
	characters: [
		{
			name: 'Cops',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/acab_person.png'
		},
		{
			name: 'White trash',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/whitetrash_person.png'
		},
		{
			name: 'Capitalist',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/capitalist_person.png'
		},
		{
			name: 'A.D.A. squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/ada_person.png'
		},
		{
			name: 'ELBA squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/elba_person.png'
		},
		{
			name: 'Hulai pole squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/hulaipole_person.png'
		},
		{
			name: 'Pandamia squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/pandemia_person.png'
		},
		{
			name: 'Przychodnia squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/przychodnia_person.png'
		},
		{
			name: 'Syrena squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/syrena_person.png'
		},
		{
			name: 'Rozbrat squat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/rozbrat_person.png'
		}
	]
};
export default game;
