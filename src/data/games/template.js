class Game {
	constructor() {
		this.promo = {
			name: '',
			shortName: '',
			banner: '',
			logo: '',
			status: 0,
			shortDescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			brandColor: '',
			id: '',
			price: ''
		};
		this.croundfanding = {
			links: {
				allegro: '',
				patronitePl: '',
				auction: ''
			},
			goal: ''
		};
		this.workShopsReports = [
			{
				date: '',
				img: '',
				linkInstagram: ''
			}
		];
		this.moreInfo = {
			players: '2-8',
			age: '16+',
			time: '120-180',
			LOR: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			lorImg: '',
			goal: '',
			educationMoments: ['', ''],
			description: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
			],
			targetAudience: '',
			photos: ['', '', ''],
			roles: [
				{
					name: 'Lorem ipsum',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					photo: ''
				},
				{
					name: 'Lorem ipsum',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					photo: ''
				}
			]
		};
		this.updates = [
			{
				date: '',
				persons: '',
				mechanic: '',
				map: '',
				version: ''
			}
		];
		this.resources = [
			{
				name: '',
				type: 'pdf',
				link: ''
			}
		];
		this.videos = [
			{
				img: '',
				link: '',
				name: '',
				type: 'video'
			}
		];
		this.lor = {
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			lorImg: ''
		};
		this.expansions = [
			{
				name: '', // The Riverfolk Expansion
				img: '', // https://cdn.shopify.com/s/files/1/0106/0162/7706/products/10-RootUnderworldBox-Edit-Web_250x.png?v=1595310452
				fullInfo: {
					name: ''
				} // for expansion page
			}
		];
	}
	get croundfanding() {
		return this._croundfanding;
	}
	get workShopsReports() {
		return this._workShopsReports;
	}
	get moreInfo() {
		return this._moreInfo;
	}
	get updates() {
		return this._updates;
	}
	get resources() {
		return this._resources;
	}
	get videos() {
		return this._videos;
	}
	get resources() {
		return this._resources;
	}
	get expansions() {
		return this._expansions;
	}
	set croundfanding(value) {
		this._croundfanding = value;
	}
	set workShopsReports(value) {
		this._workShopsReports = value;
	}
	set moreInfo(value) {
		this._moreInfo = value;
	}
	set updates(value) {
		this._updates = value;
	}
	set resources(value) {
		this._resources = value;
	}
	set videos(value) {
		this._videos = value;
	}
	set resources(value) {
		this._resources = value;
	}
	set expansions(value) {
		this._expansions = value;
	}
}


export default Game;
