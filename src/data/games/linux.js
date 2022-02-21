import GameClass from './template';
import categoriesGames from '../categoriesGames';
// import faq from '../faq/questionsGames';


let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🐧 Linux Operating System.',
	shortName: '🐧 Linux',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/linux_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/linux_bg.png',
	logo: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/logos/linux_logo.png',
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
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/banners/persons_banner.png', // new
	characters: [
		{
			name: 'Manager',
			bgColor: '#089939',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/MANAGER_person.png'
		},
		{
			name: 'Arch',
			bgColor: '#33b098',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/arch_person.png'
		},
		{
			name: 'Centos',
			bgColor: '#fbea2a',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/centos_person.png'
		},
		{
			name: 'Debian',
			bgColor: '#ce1e1f',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/debian_person.png'
		},
		{
			name: 'Devops',
			bgColor: '#695e1c',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/devops_person.png'
		},
		{
			name: 'Fedora',
			bgColor: '#225ba7',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/fedora_person.png'
		},
		{
			name: 'FreeBSD',
			bgColor: '#656e76',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/freebsd_person.png'
		},
		{
			name: 'Gentoo',
			bgColor: '#a067a8',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/gentoo_person.png'
		},
		{
			name: 'Opensuse',
			bgColor: '#a5c83c',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/opensuse_person.png'
		},
		{
			name: 'Redhat',
			bgColor: '#e52a24',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/redhat_person.png'
		},
		{
			name: 'Sales',
			bgColor: '#e42386',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/linux/persons/sales_person.png'
		},
		{
			name: 'Ubunty',
			bgColor: '#f08220',
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
