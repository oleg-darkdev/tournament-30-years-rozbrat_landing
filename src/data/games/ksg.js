import GameClass from './template';
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';


let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '12.262',
	shortName: '12.262',
	banner: 'img/games/banners/ksg_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/ksg_bg.png',
	logo: 'img/games/logos/ksg_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: '',
	brandColor: '#97501E',
	id: 'ksg',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner: '',
	characters: [
		{
			name: 'Chappie',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/chappie_person.png'
		},
		{
			name: 'Satan',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/satan_person.png'
		},
		,
		{
			name: 'Tedy',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/tedy_person.png'
		},
		{
			name: 'Thunderbird',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/thunderbird_person.png'
		},
		{
			name: 'Vagosh',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/vagosh_person.png'
		},
		{
			name: 'Yoki',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/yoki_person.png'
		},
		{
			name: 'Prospector',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/prospector_person.png'
		},
		{
			name: 'Geotecton',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/geotecton_person.png'
		},
		{
			name: 'Geognosia',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/geognosia_person.png'
		},
		{
			name: 'Earthlinger',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/earthlinger_person.png'
		},

		{
			name: 'Xeno',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/xeno_person.png'
		},
		{
			name: 'Polygenro',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/polygenro_person.png'
		},
		{
			name: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/khaetano_person.png',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		},
		{
			name: 'Isfeno',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/isfeno_person.png'
		},
		{
			name: 'Kato',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/kato_person.png'
		},

		{
			name: 'Fevagno',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/fevagno_person.png'
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'ksg'
	},
	goal: ''
};

export default game;
