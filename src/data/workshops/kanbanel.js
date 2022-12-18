import gamesData from '../gamesData';
import Workshop from './template';

let gameData = gamesData.kanbanel;

let historyWorkshops = [
	{
		date: '22.02.2022',
		place: 'ul. Puławska 37, Warsawa',
		reports: [
			'',
			'',
			'',
			'',
			'',
			''
			// telegram facebook instagram twitter linkedin youtube
		],
		maxPeople: 6,
		eventbrite: 'https://www.eventbrite.com/'
	}
];
let workshop = new Workshop(gameData.promo, gameData.croundfanding, gameData.moreInfo);
workshop.history = historyWorkshops;

export default workshop;
