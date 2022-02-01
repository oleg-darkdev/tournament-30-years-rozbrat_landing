import GameClass from './template';
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';


let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🐧 Open source. Linux Operating System.',
	shortName: '🐧 Linux ',
	banner: 'img/games/banners/linux_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/linux_bg.png',
	logo: 'img/games/logos/linux_logo.png',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	brandColor: '#F28C23',
	id: 'linux',
	price: '',
	categories: [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
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
			name: 'Manager',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/MANAGER_person.png'
		},
		{
			name: 'Arch',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/arch_person.png'
		},
		{
			name: 'Centos',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/centos_person.png'
		},
		{
			name: 'Debian',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/debian_person.png'
		},
		{
			name: 'Devops',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/devops_person.png'
		},
		{
			name: 'Fedora',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/fedora_person.png'
		},
		{
			name: 'FreeBSD',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/freebsd_person.png'
		},
		{
			name: 'Gentoo',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/gentoo_person.png'
		},
		{
			name: 'Opensuse',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/opensuse_person.png'
		},
		{
			name: 'Redhat',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/redhat_person.png'
		},
		{
			name: 'Sales',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/sales_person.png'
		},
		{
			name: 'Ubunty',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/ubunty_person.png'
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'linux'
	},
	goal: ''
};

export default game;
