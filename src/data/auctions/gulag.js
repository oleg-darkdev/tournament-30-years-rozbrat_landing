import gamesData from '../gamesData';
const gameData = gamesData.gulag;

let auctionGulag = {
	name: gameData.promo.name,
	description: gameData.moreInfo.description,
	promo: gameData.promo.banner,
	logo: gameData.promo.logo,
	brandColor: gameData.promo.brandColor,
	linkAllegro: gameData.croundfanding.links.allegro,
	linkPatronitePl: gameData.croundfanding.links.patronitePl,
	goal: gameData.croundfanding.goal,
	showList: false,
	id: gameData.promo.id,

	lotsList: [
		{
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			name: 'Name of lot',
			etsy: 'https://www.etsy.com/'
		},
		{
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			name: 'Name of lot',
			etsy: 'https://www.etsy.com/'
		},
		{
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			name: 'Name of lot',
			etsy: 'https://www.etsy.com/'
		},
		{
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			name: 'Name of lot',
			etsy: 'https://www.etsy.com/'
		},
		{
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			name: 'Name of lot',
			etsy: 'https://www.etsy.com/'
		}
	]
};


export default auctionGulag;