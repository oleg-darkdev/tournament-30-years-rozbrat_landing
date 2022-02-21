import GameClass from './template';
import categoriesGames from '../categoriesGames';
// import workshopsList from '../workshopsList';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🏴 Theory of Anarchism', //
	shortName: '🏴 Anarchism',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/A_banner.png',
	landingBanner: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/a_bg.png',
	logo: 'img/games/logos/A_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	brandColor: '#702282',
	id: 'a',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};

game.moreInfo = {
	players: '2-8',
	age: '16+',
	time: '120-180',
	LOR: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	],
	lorImg:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/A_banner.png',

	goal: '',
	educationMoments: ['', ''],
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	targetAudience: '',
	photos: ['', '', ''],	
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/banners/persons_banner.png', // new
	characters: [
		{
			name: 'Anarcho-mutuelist',
			bgColor: '#e39900',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/mutuelist_person.png'
		},
		{
			name: 'Anarcho-capitalist',
			bgColor: '#ece322',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/capitalist_person.png'
		},
		{
			name: 'Anarcho-ecologist',
			bgColor: '#109a39',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/ecolog_person.png'
		},
		{
			name: 'Anarcho-individualist',
			bgColor: '#057c69',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/egoist_person.png'
		},
		{
			name: 'Anarcho-feminist',
			bgColor: '#913b8e',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/feminist_person.png'
		},
		{
			name: 'Anarcho-qweer',
			bgColor: '#dc88b8',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/qweer_person.png'
		},
		{
			name: 'Anarcho-technocrat',
			bgColor: '#366eb5',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/technokrat_person.png'
		},
		{
			name: 'Agorist',
			bgColor: '#7f7f80',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/agorist_person.png'
		},

		{
			name: 'Anarcho-sindikalist',
			bgColor: '#df3814',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/sindikalist_person.png'
		},

		{
			name: 'Anarcho-maximalist',
			bgColor: '#df3814',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/a/persons/maximalist_person.png'
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'a'
	},
	goal: ''
};
// game.workshopsHistory = workshopsList.a;


export default game;



