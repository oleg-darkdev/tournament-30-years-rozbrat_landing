const loremDescriptionText = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus turpis in. Faucibus turpis in eu mi bibendum neque. Felis eget nunc lobortis mattis aliquam faucibus. Pharetra pharetra massa massa ultricies. Dolor magna eget est lorem. Mattis nunc sed blandit libero volutpat. Sed turpis tincidunt id aliquet. Vitae tortor condimentum lacinia quis vel eros donec ac. Neque laoreet suspendisse interdum consectetur libero id. Sed risus ultricies tristique nulla aliquet. Integer enim neque volutpat ac tincidunt vitae semper quis. Tellus molestie nunc non blandit massa enim nec dui nunc.',
	'Quam id leo in vitae. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Porttitor massa id neque aliquam vestibulum morbi. Ullamcorper sit amet risus nullam eget felis eget. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Et malesuada fames ac turpis.',
	'Aliquet eget sit amet tellus cras adipiscing. Lobortis mattis aliquam faucibus purus in. Sed cras ornare arcu dui vivamus arcu felis bibendum. Amet consectetur adipiscing elit ut. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Tortor pretium viverra suspendisse potenti. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Maecenas sed enim ut sem viverra.',
	'Nulla aliquet enim tortor at auctor urna nunc id cursus. Aliquam etiam erat velit scelerisque. Habitant morbi tristique senectus et. Turpis tincidunt id aliquet risus feugiat in. Neque convallis a cras semper auctor neque. Amet tellus cras adipiscing enim eu turpis egestas pretium. At auctor urna nunc id cursus metus aliquam eleifend.',
	'Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Gravida cum sociis natoque penatibus et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. A pellentesque sit amet porttitor eget. Venenatis a condimentum vitae sapien pellentesque habitant.',
	'Massa id neque aliquam vestibulum morbi blandit cursus. Risus commodo viverra maecenas accumsan lacus. Platea dictumst vestibulum rhoncus est pellentesque elit. Pretium quam vulputate dignissim suspendisse in est. Commodo elit at imperdiet dui accumsan sit amet nulla. Amet volutpat consequat mauris nunc congue nisi vitae. Lectus urna duis convallis convallis tellus id interdum velit. Interdum velit euismod in pellentesque massa placerat.',
	'Venenatis cras sed felis eget velit aliquet sagittis. Eu consequat ac felis donec et odio. Leo duis ut diam quam nulla porttitor massa id. Risus ultricies tristique nulla aliquet enim.',
	'Eu augue ut lectus arcu. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Risus nullam eget felis eget nunc. At tellus at urna condimentum mattis pellentesque id. Sollicitudin aliquam ultrices sagittis orci a. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.'
];

const loremShortDescriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus turpis in. Faucibus turpis in eu mi bibendum neque. Felis eget nunc lobortis mattis aliquam faucibus. Pharetra pharetra massa massa ultricies.';

const сategories = {
	romantic: 'Романтические предпочтения',
	sexual: 'Сексуальные предпочтения',
	visual: 'Визуальные предпочтения',
	gender: 'Гендерные предпочтения',
	absence: 'Отсутствие предпочтений \ небинарность'
};







const imgsInfo = {
	man: {
		name: 'Man',
		category: [],
		description: loremDescriptionText,
		img: '',
		shortDescription: loremShortDescriptionText,
		number: 1
	},
	woman: {
		name: 'Woman',
		category: [],
		description: loremDescriptionText,
		img: '',
		shortDescription: loremShortDescriptionText,
		number: 2
	},
	gay: {
		name: 'Gay',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '',
		shortDescription: loremShortDescriptionText,
		number: 12
	},
	queer: {
		name: 'Queer',
		category: [сategories.sexual, сategories.gender],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/queer.png',
		shortDescription: loremShortDescriptionText,
		number: 13
	},
	bigender: {
		name: 'Bigender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bigender.png',
		shortDescription: loremShortDescriptionText,
		number: 14
	},
	twink: {
		name: 'Twink',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/twink.png',
		shortDescription: loremShortDescriptionText,
		number: 15
	},
	genderfae: {
		name: 'Genderfae',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/genderfae.png',
		shortDescription: loremShortDescriptionText,
		number: 16
	},
	mogai: {
		name: 'Mogai',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/mogai.png',
		shortDescription: loremShortDescriptionText,
		number: 17
	},
	cassgender: {
		name: 'Cassgender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/cassgender.png',
		shortDescription: loremShortDescriptionText,
		number: 18
	},
	lesbian: {
		name: 'Lesbian',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/lesbian.png',
		shortDescription: loremShortDescriptionText,
		number: 19
	},
	lithromantic: {
		name: 'Lithromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/lithromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 20
	},
	mascic: {
		name: 'Mascic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/mascic.png',
		shortDescription: loremShortDescriptionText,
		number: 21
	},
	greygender: {
		name: 'Greygender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/greygender.png',
		shortDescription: loremShortDescriptionText,
		number: 22
	},
	torik: {
		name: 'Torik',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/toric.png',
		shortDescription: loremShortDescriptionText,
		number: 23
	},
	xenogender: {
		name: 'Xenogender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://github.com/oleg-darkdev/dd/blob/deploy/static/img/apps/lgbt/flags/xenogender.png',
		shortDescription: loremShortDescriptionText,
		number: 24
	},
	butch: {
		name: 'Butch',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/butch.png',
		shortDescription: loremShortDescriptionText,
		number: 25
	},
	gynesexual: {
		name: 'Gynesexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/gynesexual.png',
		shortDescription: loremShortDescriptionText,
		number: 26
	},
	asexual: {
		name: 'Asexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/asexual%20.png',
		shortDescription: loremShortDescriptionText,
		number: 27
	},
	demisexual: {
		name: 'Demisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demisexual.png',
		shortDescription: loremShortDescriptionText,
		number: 28
	},
	noninsexual: {
		name: 'Noninsexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/noninsexual.png',
		shortDescription: loremShortDescriptionText,
		number: 29
	},
	trixic: {
		name: 'Trixic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/trixic.png',
		shortDescription: loremShortDescriptionText,
		number: 30
	},
	enbian: {
		name: 'Enbian',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/enbian.png',
		shortDescription: loremShortDescriptionText,
		number: 31
	},
	quoiromantic: {
		name: 'Quoiromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/quoiromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 32
	},
	androsexual: {
		name: 'Androsexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/androsexual.png',
		shortDescription: loremShortDescriptionText,
		number: 33
	},
	bear: {
		name: 'Bear',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bear.png',
		shortDescription: loremShortDescriptionText,
		number: 34
	},
	pansexual: {
		name: 'Pansexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pansexual.png',
		shortDescription: loremShortDescriptionText,
		number: 35
	},
	intersex: {
		name: 'Intersex',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/intersex.png',
		shortDescription: loremShortDescriptionText,
		number: 36
	},
	diamoric: {
		name: 'Diamoric',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/diamoric.png',
		shortDescription: loremShortDescriptionText,
		number: 37
	},
	nofinsexual: {
		name: 'Nofinsexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/nofinsexual.png',
		shortDescription: loremShortDescriptionText,
		number: 38
	},
	graysexual: {
		name: 'Graysexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/graysexual.png',
		shortDescription: loremShortDescriptionText,
		number: 39
	},
	reciprosexual: {
		name: 'Reciprosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '',
		shortDescription: loremShortDescriptionText,
		number: 40
	},
	demifluid: {
		name: 'Demifluid',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demifluid.png',
		shortDescription: loremShortDescriptionText,
		number: 41
	},
	femaric: {
		name: 'Femaric',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/femaric.png',
		shortDescription: loremShortDescriptionText,
		number: 42
	},
	neutrois: {
		name: 'Neutrois',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/neutrois.png',
		shortDescription: loremShortDescriptionText,
		number: 43
	},
	polysexual: {
		name: 'Polysexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/polysexual.png',
		shortDescription: loremShortDescriptionText,
		number: 44
	},
	omnisexual: {
		name: 'Omnisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/omnisexual.png',
		shortDescription: loremShortDescriptionText,
		number: 45
	},
	greyromantic: {
		name: 'Greyromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/greyromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 46
	},
	achillean: {
		name: 'Achillean',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/achillean.png',
		shortDescription: loremShortDescriptionText,
		number: 47
	},
	pomosexual: {
		name: 'Pomosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pomosexual.png',
		shortDescription: loremShortDescriptionText,
		number: 48
	},
	cupioromantic: {
		name: 'Cupioromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/cupioromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 49
	},
	aegoromantic: {
		name: 'Aegoromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/aegoromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 50
	},
	transmasculine: {
		name: 'Trans masculine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://github.com/oleg-darkdev/dd/blob/deploy/static/img/apps/lgbt/flags/transmasculine.png',
		shortDescription: loremShortDescriptionText,
		number: 51
	},
	demiromantic: {
		name: 'Demiromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demiromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 52
	},
	genderNonConforming: {
		name: 'Gender non conforming',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/nonconforming.png',
		shortDescription: loremShortDescriptionText,
		number: 53
	},
	ceterosexual: {
		name: 'Ceterosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/ceterosexual.png',
		shortDescription: loremShortDescriptionText,
		number: 54
	},
	polyamorous: {
		name: 'Polyamorous',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/polyamorous.png',
		shortDescription: loremShortDescriptionText,
		number: 55
	},
	genderflor: {
		name: 'Genderflor',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/genderflor.png',
		shortDescription: loremShortDescriptionText,
		number: 56
	},
	genderfaun: {
		name: 'Genderfaun',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/genderfaun.png',
		shortDescription: loremShortDescriptionText,
		number: 57
	},
	aromantic: {
		name: 'Aromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/aromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 58
	},
	alexigender: {
		name: 'Alexigender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/alexigender.png',
		shortDescription: loremShortDescriptionText,
		number: 59
	},
	libramasculine: {
		name: 'Libramasculine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/libramasculine.png',
		shortDescription: loremShortDescriptionText,
		number: 60
	},
	queerPlatonicRelationship: {
		name: 'Queer platonic relationship',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/queerplatonic_Relationship.png',
		shortDescription: loremShortDescriptionText,
		number: 61
	},
	androgyne: {
		name: 'Androgyne',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/androgyne.png',
		shortDescription: loremShortDescriptionText,
		number: 62
	},
	librafeminine: {
		name: 'Librafeminine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/librafeminine.png',
		shortDescription: loremShortDescriptionText,
		number: 63
	},
	freysexual: {
		name: 'Freysexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/freysexual.png',
		shortDescription: loremShortDescriptionText,
		number: 64
	},
	quoisexual: {
		name: 'Quoisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/quoisexual.png',
		shortDescription: loremShortDescriptionText,
		number: 65
	},
	trigender: {
		name: 'Trigender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/trigender.png',
		shortDescription: loremShortDescriptionText,
		number: 66
	},
	mavierique: {
		name: 'Mavierique',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/mavierique.png',
		shortDescription: loremShortDescriptionText,
		number: 67
	},
	bisexual: {
		name: 'Bisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bisexual.png',
		shortDescription: loremShortDescriptionText,
		number: 68
	},
	orientedAroace: {
		name: 'Oriented aroace',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/oriented_Aroace.png',
		shortDescription: loremShortDescriptionText,
		number: 69
	},
	transFeminine: {
		name: 'Trans feminine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/transfeminine.png',
		shortDescription: loremShortDescriptionText,
		number: 70
	},
	twospirit: {
		name: 'Two spirit',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/two_Spirit.png',
		shortDescription: loremShortDescriptionText,
		number: 71
	},
	coeosexual: {
		name: 'Coeosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/coeosexual.png',
		shortDescription: loremShortDescriptionText,
		number: 72
	},
	pangender: {
		name: 'Pangender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pangender.png',
		shortDescription: loremShortDescriptionText,
		number: 73
	}
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 74
	// },
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 75
	// },
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 76
	// },
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 77
	// },
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 78
	// },
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 79
	// },
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexual],
	// 	description: loremDescriptionText,
	// 	img: '',
	// shortDescription: loremShortDescriptionText,
	// 	number: 80
	// }
};



export default imgsInfo;