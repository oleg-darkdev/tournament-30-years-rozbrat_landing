let shortLorem =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	bigLorem =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

let game = {
	promo: {
		name: '',
		shortName: '',
		banner: 'img/games/banners/fnb_banner.png',
		logo: 'img/games/logos/fnb.png',
		status: 1, // 0 - alfa, 1 - beta, 2 - good,
		shortDescription: shortLorem,
		brandColor: '#',
		id: '',
		price: ''
	},
	croundfanding: {
		links: {
			allegro: 'https://allegro.pl/',
			patronitePl: 'https://patronite.pl/',
			auction: 'handmade#fnb'
		},
		goal: ''
	},
	workShopsReports: [
		{
			date: '',
			img: '',
			linkInstagram: ''
		}
	],
	moreInfo: {
		LOR: [shortLorem, bigLorem, bigLorem, shortLorem],
		lorImg: '',
		goal: '',
		educationMoments: ['', ''],
		description: [bigLorem, bigLorem],
		targetAudience: '',
		photos: ['', '', ''],
		сharacters: [
			{
				name: '',
				description: '',
				photo: ''
			}
		]
	},
	updates: [
		{
			date: '22.10.2020',
			persons: 'Add: Doctor, Crow',
			mechanic: '',
			map: '',
			version: '0.0.1'
		}
	],
	resources: [
		{
			name: '',
			type: 'pdf',
			link: ''
		}
	],
	videos: [
		{
			img: '',
			link: '',
			name: '',
			type: 'video'
		}
	],
	expansions: [
		{
			name: '', // The Riverfolk Expansion
			img: '', // https://cdn.shopify.com/s/files/1/0106/0162/7706/products/10-RootUnderworldBox-Edit-Web_250x.png?v=1595310452
			fullInfo: {} // for expansion page
		}
	]
};

export default game;
