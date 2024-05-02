import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';
import recommendationsData from './covid/recommendations';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🦠 Covid resistance',
	shortName: '🦠 CR',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/covid_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/covid_bg.png',
	logo: 'img/games/logos/covid_logo.png',
	promo: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/landingPromo/covid.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	brandColor: '#EA4C80',
	id: 'covid',
	serial: '2',
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
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/covid_banner.png',
	goal: '',
	educationMoments: ['', ''],
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	targetAudience: '',
	photos: ['', '', '']
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/banners/persons_banner.png',
	characters: [
		{
			name: 'Anti globalist',
			bgColor: '#e6007e',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/antiglobal_person%20.png'
		},
		{
			name: 'Pirate',
			bgColor: '#2b744a',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/pirate_person.png'
		},
		{
			name: 'Field agent',
			bgColor: '#8d815b',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/fieldagent_person.png'
		},
		{
			name: 'Philanthrope',
			bgColor: '#debd57',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/philantrope_person.png'
		},
		{
			name: 'Quarantine specialist',
			bgColor: '#66231d',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/quarantine%20_person.png'
		},
		{
			name: 'Wanderer',
			bgColor: '#1d2521',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/wanderer_person.png'
		},
		{
			name: 'Optimist',
			bgColor: '#bf3736',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/optimist_person.png'
		},
		{
			name: 'Medic',
			bgColor: '#cc2b17',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/medic_person.png'
		},

		{
			name: 'Bot',
			bgColor: '#43b177',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/bot_person.png'
		},
		{
			name: 'Hacker',
			bgColor: '#1f4251',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/hacker_person.png'
		},
		{
			name: 'Helper',
			bgColor: '#ad6d47',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/helper_person.png'
		},
		{
			name: 'Explorer',
			bgColor: '#685053',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/explorer_person.png'
		},
		{
			name: 'Scientist',
			bgColor: '#a01e3a',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/scientist_person.png'
		},
		{
			name: 'Soldier',
			bgColor: '#918d8c',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/covid/persons/soldier_person.png'
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'covid'
	},
	goal: ''
};
game.recommendations = recommendationsData;
// game.workshopsHistory = workshopsList.a;

export default game;
