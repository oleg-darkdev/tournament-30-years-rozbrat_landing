import historicalGames from './historicalGames';
import civicActivismGames from './civicActivismGames';
// import artGames from './artGames'; // graffity, tattoo,
// import itGames from './itGames'; // linux, kanbanel,
// import politicalGames from './politicalGames';
// import economicalGames from './economicalGames';
// import strategicGames from './strategicGames'; // ksg
// import officeGames from './officeGames'; // spyral linux, kanbanel,
// import managementGames from './managementGames'; // spyral kanbanel,


// 🕋 Urbanism. Society of the future.', 🐧 Open source. Linux Operating System.',

function getGames(gamesCategory) {
	let arrayTemp = [],
		key;
	for (key in gamesCategory) {
		arrayTemp.push(gamesCategory[key]);
	}
	return arrayTemp;
}

let allGamesList = {
	categories: {
		civicActivism: civicActivismGames,
		historical: historicalGames
		// artGames: artGames,
		// itGames: itGames,
		// politicalGames: politicalGames,
		// economicalGames: economicalGames,
		// strategicGames: strategicGames,
		// officeGames: officeGames,
		// managementGames: managementGames
	},
	all: [].concat(getGames(historicalGames), getGames(civicActivismGames)),

	// historicalGames
	gulag: historicalGames.gulag,
	katyn: historicalGames.katyn,
	yakusa: historicalGames.yakusa,
	wtb: historicalGames.wtb,
	wikileaks: historicalGames.wikileaks,
	// : historicalGames. ,

	// civicActivismGames
	a: civicActivismGames.a,
	fnb: civicActivismGames.fnb,
	eco: civicActivismGames.eco,
	squat: civicActivismGames.squat,
	hackerspace: civicActivismGames.hackerspace,
	lgbt: civicActivismGames.lgbt,
	ror: civicActivismGames.ror
	//  : civicActivismGames,

	// artGames
};

export default allGamesList;
