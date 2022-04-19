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
		name: 'man',
		category: [],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 1
	},
	woman: {
		name: 'woman',
		category: [],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 2
	},
	gay: {
		name: 'gay',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 12
	},
	queer: {
		name: 'queer',
		category: [сategories.sexual, сategories.gender],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 13
	},
	bigender: {
		name: 'bigender',
		category: [сategories.sexual, ],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 14
	},
	twink: {
		name: 'twink',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 15
	},
	genderfae: {
		name: 'genderfae',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 16
	},
	mogai: {
		name: 'mogai',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 17
	},
	cassgender: {
		name: 'cassgender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 18
	},
	lesbian: {
		name: 'lesbian',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 19
	},
	lithromantic: {
		name: 'lithromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 20
	},
	mascic: {
		name: 'mascic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 21
	},
	greygender: {
		name: 'greygender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 22
	},
	torik: {
		name: 'torik',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 23
	},
	xenogender: {
		name: 'xenogender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 24
	},
	butch: {
		name: 'butch',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 25
	},
	gynesexual: {
		name: 'gynesexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 26
	},
	asexual: {
		name: 'asexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 27
	},
	demisexual: {
		name: 'demisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 28
	},
	noninsexual: {
		name: 'noninsexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 29
	},
	trixic: {
		name: 'trixic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 30
	},
	enbian: {
		name: 'enbian',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 31
	},
	quoiromantic: {
		name: 'quoiromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 32
	},
	androsexual: {
		name: 'androsexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 33
	},
	bear: {
		name: 'bear',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 34
	},
	pansexual: {
		name: 'pansexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 35
	},
	intersex: {
		name: 'intersex',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 36
	},
	diamoric: {
		name: 'diamoric',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 37
	},
	nofinsexual: {
		name: 'nofinsexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 38
	},
	graysexual: {
		name: 'graysexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 39
	},
	reciprosexual: {
		name: 'reciprosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 40
	},
	demifluid: {
		name: 'demifluid',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 41
	},
	femaric: {
		name: 'femaric',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 42
	},
	neutrois: {
		name: 'neutrois',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 43
	},
	polysexual: {
		name: 'polysexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 44
	},
	omnisexual: {
		name: 'omnisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 45
	},
	greyromantic: {
		name: 'greyromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 46
	},
	achillean: {
		name: 'achillean',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 47
	},
	pomosexual: {
		name: 'pomosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 48
	},
	cupioromantic: {
		name: 'cupioromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 49
	},
	aegoromantic: {
		name: 'aegoromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 50
	},
	transmasculine: {
		name: 'transmasculine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 51
	},
	demiromantic: {
		name: 'demiromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 52
	},
	genderNonConforming: {
		name: 'gender non conforming',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 53
	},
	ceterosexual: {
		name: 'ceterosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 54
	},
	polyamorous: {
		name: 'polyamorous',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 55
	},
	genderflor: {
		name: 'genderflor',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 56
	},
	genderfaun: {
		name: 'genderfaun',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 57
	},
	aromantic: {
		name: 'aromantic',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 58
	},
	alexigender: {
		name: 'alexigender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 59
	},
	libramasculine: {
		name: 'libramasculine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 60
	},
	queerPlatonicRelationship: {
		name: 'queer platonic relationship',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 61
	},
	androgyne: {
		name: 'androgyne',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 62
	},
	librafeminine: {
		name: 'librafeminine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 63
	},
	freysexual: {
		name: 'freysexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 64
	},
	quoisexual: {
		name: 'quoisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 65
	},
	trigender: {
		name: 'trigender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 66
	},
	mavierique: {
		name: 'mavierique',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 67
	},
	bisexual: {
		name: 'bisexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 68
	},
	orientedAroace: {
		name: 'oriented aroace',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 69
	},
	transFeminine: {
		name: 'trans feminine',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 70
	},
	twospirit: {
		name: 'twospirit',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 71
	},
	coeosexual: {
		name: 'coeosexual',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 72
	},
	pangender: {
		name: 'pangender',
		category: [сategories.sexual],
		description: loremDescriptionText,
		img: '', 
		shortDescription: loremShortDescriptionText,
		number: 73
	},
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