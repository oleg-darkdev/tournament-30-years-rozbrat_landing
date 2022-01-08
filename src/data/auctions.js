import gulagUSSR from './auctions/gulagUSSR';
import eco from './auctions/eco';
import fnb from './auctions/fnb';
// import graffity from './auctions/graffity';
// import gulagRussia from './auctions/gulagRussia';
// import tattoo from './auctions/tattoo';
// import linux from './auctions/linux';
// import kanbanel from './auctions/kanbanel';
// import ksg from './auctions/ksg';
import a from './auctions/aGame';
import hackerspace from './auctions/hackerspace';
import katyn from './auctions/katyn';

import lgbt from './auctions/lgbt';
import ror from './auctions/ror';
import squat from './auctions/squat';
import wikileaks from './auctions/wikileaks';
import wtb from './auctions/wtb';
import yakusa from './auctions/yakusa';

const listOfAuctions = {
	gulagUSSR: gulagUSSR,
	a: a,
	eco: eco,
	fnb: fnb,

	// linux,
	// tattoo,
	// graffity,
	// gulagRussia,
	// kanbanel,
	// ksg,

	hackerspace: hackerspace,
	katyn: katyn,
	lgbt: lgbt,
	ror: ror,
	squat: squat,
	wikileaks: wikileaks,
	wtb: wtb,
	yakusa: yakusa
};
export default listOfAuctions;
