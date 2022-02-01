import GameClass from './template'
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🌈 LGBT+',
	shortName: '🌈 LGBT+',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/lgbt_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/d45fec7333c68c75264acfead3be04a4de16b2bf/static/img/bg/lgbt_bg.png',
	logo: 'img/games/logos/lgbt_logo.png',
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
		auction: 'lgbt'
	},
	goal: ''
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/banners/persons_banner.png',
	characters: [
		{
			name: 'Achillean',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/achillean_person.png'
		},
		{
			name: 'Aromantic',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/aromantic_person.png'
		},
		{
			name: 'Bigender',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/bigender_person.png'
		},
		{
			name: 'Bisexual',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/bisexual_person.png'
		},
		{
			name: 'Diamoric',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/diamoric_person.png'
		},
		{
			name: 'Libra masculine',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/libra_masculine_person.png'
		},
		{
			name: 'Libra feminine',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/librafeminine_person.png'
		},
		{
			name: '',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: ''
		},
		{
			name: 'Mavierique',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/mavierique_person.png'
		},
		{
			name: 'Torik',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/torik_person.png'
		},
		{
			name: 'Trixic',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/trixic_person.png'
		},
		{
			name: 'Trigender',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/trigender_person.png'
		}]
};


export default game;
