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
	// romantic: 'Романтические предпочтения',
	// sexual: 'Сексуальные предпочтения',
	// visual: 'Визуальные предпочтения',
	// gender: 'Гендерные предпочтения',
	// absence: 'Отсутствие предпочтений \ небинарность'
	gender: 'gender',
	subculture: 'Subculture',
	sexuality: 'Sexuality',
	aromanticSpectrum: 'Aromantic spectrum',
	sexualOrientation: 'Sexual orientation',
	romanticOrientation: 'romantic orientation', 
	agenderSpectrum: 'Agender spectrum',
	genderIdentity: 'Gender identity',  
	genderExpression: 'Gender expression',
	umbrellaTerm: 'Umbrella term' 
};


const imgsInfo = {
	man: {
		name: 'Man',
		category: [],
		description: [loremDescriptionText],
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/man.png',
		shortDescription: loremShortDescriptionText,
		number: 1
	},
	woman: {
		name: 'Woman',
		category: [],
		description: [loremDescriptionText],
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/woman.png',
		shortDescription: loremShortDescriptionText,
		number: 2
	},
	gay: {
		name: 'Gay',
		category: [сategories.sexuality, сategories.sexuality],
		description: [
			'Gay is an adjective referring to those with an enduring physical, romantic, and/or emotional attraction to people of the same gender. This is most commonly associated with men, as a gay woman may prefer to use the term "lesbian" instead.'
		],
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Gay',
		etymology: [
			'The word "homosexuality" comes from the Greek homos, which means "the same".',
			'The word "gay" has had many meanings over the years. Dating back to the 12th century, it came from the Old French word "gai", meaning "joyful, happy; pleasant, agreeably charming; forward, pert; light-colored" and was a commonly used term within literature.',
			`It was not until the 1600s that the term took on a sexual meaning. By then, the "carefree" nature of the word became used to refer to people with unrestrained morals and prone to decadence and promiscuity; as such, a prostitute became known as a "gay woman", a womanizer as a "gay man", and a brothel as a "gay house". This trend continued, as in the 1890s, the term "gey cat", which is a Scottish variant of gay, was used to refer to a "vagrant who offered sexual services to women or a young traveler who was new to the road and in the company of an older man." This marked one of the first times that "gay" was used to imply a homosexual relationship.`,
			`By the 1960s, gay men had taken to the term to refer to their own sexual identity, and by today's standards, it is the acceptable way to refer to homosexual people`
		],
		references: [
			{
				name: '"What is LGBTQ?".',
				link: 'https://gaycenter.org/about/lgbtq/#gay',
				source: ' The Center - The Lesbian, Gay, Bisexual & Transgender Community Center.'
			},
			{
				name: '"LGBTQ+ Glossary of Terms". ',
				link: 'https://www.bnl.gov/diversity/files/pdf/resources/transgender/Glossaryof-terms.pdf',
				source: 'Out Alliance.'
			},
			{
				name: 'Etymology of "gay"',
				link: 'https://www.etymonline.com/word/gay',
				source: ''
			},
			{
				name: 'Redman, Jordan: "The history of the word "gay"". ',
				link: 'https://www.gayly.com/history-word-%E2%80%9Cgay%E2%80%9D',
				source: 'The Gayly.'
			},
			{
				name: '"Meaning of gay in English". ',
				link: 'https://www.lexico.com/definition/gay',
				source: 'Lexico.'
			},
			{
				name: '"Gay Man Flag" (2019-07-10). ',
				link: 'https://gayflagblog.tumblr.com/post/186181118619/gay-man-flag-russian-%D1%80%D0%BE%D1%81%D1%81%D0%B8-%D1%8F-portuguese',
				source: 'gayflagblog.tumblr.com. (Archived on February 16, 2022)'
			}
		],
		flagInfo: {
			description: [
				`Much lesser known than its rainbow companion, the modern gay men's pride flag was posted in 2019 on the Tumblr blog gayflagblog as an update of a prior flag. It features an array of green, blue, and purple shades to be representative of a wide range of gay men, regardless of their gender, thus also including, but not being limited to, gay men who are transgender, non-binary, gender non-conforming, aromantic, or asexual. This version replaced the original one that only used blue tones, as it was regarded as a stereotypical representation of the gender binary and lacked meaning for the colors used. Inspired by Gilbert Baker and the responses to the blue flag, the individual stripes used by gayflagblog mean`
			],
			colors: [
				{
					color: 'Green',
					description: 'Community'
				},
				{
					color: 'Teal',
					description: 'Healing'
				},
				{
					color: 'Light teal/green',
					description: 'Joy'
				},
				{
					color: 'White',
					description: 'Non-binary & trans men'
				},
				{
					color: 'Light blue',
					description: 'Pure love'
				},
				{
					color: 'Purple',
					description: 'Fortitude'
				},
				{
					color: 'Indigo',
					description: 'Diversity'
				}
			]
		},
		brandColor: '#702282',
		alternativeName: ['Homosexuality'],
		specifics: {
			genders: [''],
			attractedTo: ['Same gender individuals'],
			attractionType: ['Sexual', 'Romantic', 'Platonic'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Queer'],
			associatedRomanticism: ['Homoromantic']
		},
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/gay.png',
		shortDescription: loremShortDescriptionText,
		number: 12
	},
	queer: {
		name: 'Queer',
		category: [сategories.sexuality, сategories.gender],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'Sensory issues were considered when designing this flag, thus the off-white background color and the rejection of a previously proposed flag.'
			],
			colors: [
				{
					color: 'Lavender colors',
					description: 'historical association with the LGBT'
				},
				{
					color: 'Off-white color',
					description: 'combination of all colors of the rainbow'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Queer',
		etymology: [
			'Originating in Scottish in the 1500s, queer originally meant "strange," "odd," "peculiar," or "eccentric." In 1781, it grew to meant "appearing, feeling, or behaving otherwise than is usual". It began to be associated with homosexuality in 1922 as an adjective, and a noun in 1935.'
		],
		references: [
			{
				name: 'Glossary of Terms - Lesbian / Gay / Bisexual / Queer',
				link: 'https://web.archive.org/web/20210926074140/https://www.glaad.org/reference/lgbtq',
				source: 'GLAAD Media Reference Guide - 10th Edition'
			},
			{
				name: 'National Glossary of Terms',
				link: 'https://web.archive.org/web/20220125043743/https://pflag.org/glossary',
				source: 'PFLAG'
			},
			{
				name: 'Gender Census 2021: Worldwide Report',
				link: 'https://web.archive.org/web/20211121224434/https://gendercensus.com/results/2021-worldwide',
				source: 'Gender Census'
			},
			{
				name: 'Queer". The Trans Language Primer',
				link: 'https://web.archive.org/web/20211105113926/https://translanguageprimer.com/queer',
				source: 'The Trans Language Primer'
			},
			{
				name: 'Coming to an Asexual Identity: Negotiating Identity, Negotiating Desire',
				link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2893352/',
				source: 'Scherrer, Kristin / National Center for Biotechnology Information'
			},
			{
				name: 'Etymology, origin and meaning of queer',
				link: 'https://www.etymonline.com/word/queer#etymonline_v_3174',
				source: 'Online Etymology Dictionary'
			},
			{
				name: 'Proud and Supported: Definitions and Beyond',
				link: 'https://proudandsupported.org/wp-content/uploads/2022/02/Definition-and-Beyond-Easy-Read.pdf',
				source: 'proudandsupported.org'
			}
		],
		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/queer.png',
		shortDescription: `Queer is an identifier for individuals and/or the community of people who are not cisgender heterosexual It can be used instead of, or in addition to, other identifiers of sexual orientation, such as lesbian, bisexual, or gay. Queer can also refer to gender identity or gender expression, whether as a standalone term or part of another like genderqueer. The "Q" in LGBTQIA+ and similar acronyms commonly means Queer. As a reclaimed word, it has been used in fights for LGBTQIA+ rights and liberation as an inclusive and sometimes defiant term. PFLAG and GLAAD are two of the organizations that recommend only using it for people who self-identify as queer because it has varying meanings and is not universally accepted. In addition, the term may be used in preference to other identifiers by members, for a variety of reasons.`,
		number: 13
	},
	bigender: {
		name: 'Bigender',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The most known bigender flag was created by Tumblr user no-bucks-for-this-doe. The flag consists of two different pink stripes, a deep pink followed by the traditional depiction of pink. From there, a lilac stripe, a white stripe, and another lilac stripe. The last two stripes are baby blue followed by a deep blue. An alternate version of the bigender flag exists, though the creator is currently unknown as well as the meanings behind each stripe.'
			],
			colors: [
				{
					color: 'Pink',
					description: 'femininity'
				},
				{
					color: 'Yellow',
					description: 'those whose gender exists outside the gender binary'
				},
				{
					color: 'White',
					description: 'non-binary'
				},
				{
					color: 'Purple',
					description: 'combination of male and female or androgyny'
				},
				{
					color: 'Blue',
					description: 'femininity'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Bigender',
		etymology: [
			`Early examples of the term 'bigender' appear as early as the late 1980s, though at this time it was grouped under the "androgyne" label as "bigenderist". Definitions were rooted in the expression of "either gender role" or as "having two genders".`
		],
		references: [
			{
				name: `The ABC's of LGBT+`,
				link: '',
				source: 'Hardell, Ash / Mango Media Inc., 2016'
			},
			{
				name: 'The A-Z of Gender and Sexuality: From Ace to Ze.',
				link: '',
				source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
			},
			{
				name: 'Brochure for the Human Outreach and Achievement Institute.',
				link: 'https://www.digitaltransgenderarchive.net/downloads/8g84mm373',
				source: 'The Human Outreach and Achievement Institute'
			},
			{
				name: 'A Dictionary of Words for Masculine Women',
				link: 'https://web.archive.org/web/19961105010926/http://www.ftm-intl.org/Wrtngs/ftm-words.gary.html',
				source: 'Bowen, Gary / FTM International'
			},
			{
				name: 'Queer in the World: "What Does Bigender Mean? + Other Bigender Information To Help You Be A Better Ally!"',
				link: 'https://queerintheworld.com/what-does-bigender-mean/',
				source: 'queerintheworld.com.'
			},
			{
				name: 'Wat is bigender?',
				link: 'https://weten.site/bigender/',
				source: 'weten.site'
			},
			{
				name: 'Non-binary pride flag',
				link: 'https://outrightinternational.org/content/flags-lgbtiq-community',
				source: 'OutRight Action International'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any two distinct gender identities'],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: [`Transgender`, `Non-binary`, `Multigender`]
		},
		relatedTerms: {
			differentFrom: ['Genderfluid', 'Non-binary', 'Intersex', 'Intergender', 'Androgyne'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bigender.png',
		shortDescription: `Bigender is a gender identity in which a person has or experiences two genders. The genders may be any combination of two genders, and those genders can be binary ("man" or "woman") or non-binary. They may be experienced simultaneously or may alternate, and they may not be experienced equally or in the same way. For example, a bigender person may be both a woman and a man, agender and neutrois, or non-binary and a woman. Bigender is an identity under the transgender umbrella.`,
		number: 14
	},
	twink: {
		name: 'Twink',
		category: [сategories.subculture],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'While the exact origins of the colors are unknown, the pink stripe is commonly seen as a celebration of the effeminate nature of many twinks.'
			],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Twink',
		etymology: [
			'The origins of the term twink are disputed.',
			`One possibility is that the term originates from twank, an older British gay slang term which means "the quarry of a homosexual prostitute (male); a man willing and ready to become any dominant man's 'partner'". This would date the term back to the 1920-30s.`,
			`Another possible origin of the term may be derived from Twinkie, an American snake cake. The food is described as "little nutritional value, sweet to the taste, and creme-filled"; by comparison, the young men are described as "short, and blond, and full of creme". Cream is a well-known food-related euphemistic terms for semen. Wiktionary lists this as the official etymology. This dates the term back to 1963.`,
			`Oxford Dictionaries claims twink originates from the 1950s and is related to the word twinkle.`
		],
		references: [
			{
				name: 'What is a twink?',
				link: 'https://web.archive.org/web/20220121023603/https://www.pinknews.co.uk/2018/04/27/what-is-a-twink/',
				source: 'Pink News'
			},
			{
				name: 'Never Enough',
				link: 'https://archive.org/details/neverenough00mcgi_0/page/n7/mode/2up',
				source: 'McGinniss, Joe. / Simon & Schuster, 2007.'
			},
			{
				name: 'The New Partridge Dictionary of slang and unconventional English.',
				link: 'https://archive.org/details/newpartridgedict00tomd/mode/2up',
				source:
					'Partridge, Eric. / Dalzell, Tom (Senior Editor); / Victor, Terry (Editor), vol. 2, Routledge, 2006.'
			},
			{
				name: 'Twink etymology',
				link: 'https://web.archive.org/web/20220217213213/https://web.archive.org/web/20220217213213/https://www.etymonline.com/word/twink',
				source: 'web.archive.org.'
			},
			{
				name: 'Polari - The Lost Language of Gay Men',
				link: 'https://web.archive.org/web/20180208004359/https://books.google.co.uk/books?id=MRKCAgAAQBAJ',
				source: 'Baker, Paul / Routledge, 2002.'
			},
			{
				name: 'Gay-2-Zee: A Dictionary of Sex, Subtext, and the Sublime.',
				link: 'https://web.archive.org/web/20220217220236/https://books.google.co.uk/books?id=7FpPbfVRm3MC',
				source: `Reuter, Donald F. /  St. Martin's Press, 2006.`
			},
			{
				name: 'Twinkies, 75 Years And Counting',
				link: 'https://web.archive.org/web/20220121084913/https://www.washingtonpost.com/wp-dyn/articles/A46062-2005Apr12.html',
				source: 'Sagon, Candy / '
			},
			{
				name: 'Twink definition',
				link: 'https://web.archive.org/web/20220217214029/https://www.lexico.com/definition/twink',
				source: 'Oxford Dictionary'
			},
			{
				name: 'Pride flags: All of the flags you might see at Pride and what they mean',
				link: 'https://web.archive.org/web/20210704210443/https://www.pinknews.co.uk/2020/06/01/all-of-the-flags-you-might-see-at-pride-and-what-they-mean/',
				source: 'Glass, Jess '
			},
			{
				name: 'Queer Youth Cultures',
				link: 'https://web.archive.org/web/20220127051123/https://books.google.com.au/books?id=xHEcZEcgFfcC&redir_esc=y',
				source: 'Driver, Susan / SUNY Press, 2008'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Men'],
			attractedTo: ['Men'],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/twink.png',
		shortDescription: `Twink is a subcultural term referring to gay men who defy traditional masculine roles, embracing traits that are generally seen as feminine. 
		
Twinks are typically associated with a few key tropes: general physical attractiveness, a slim build, and a youthful appearance that lacks facial hair and often body hair as well. In his book Never Enough (2007), Joe McGinniss describes a court case in which twink was defined as "a gay slang term used to denote an attractive, boyish-looking gay man between the ages of 18 and 23, slender ectomorph and with little or no body hair, often blond, often but not necessarily Caucasian."`,
		number: 15
	},
	genderfae: {
		name: 'Genderfae',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://gender.fandom.com/wiki/Genderfae',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			},
			{
				name: '',
				link: '',
				source: ''
			},
			{
				name: '',
				link: '',
				source: ''
			},
			{
				name: '',
				link: '',
				source: ''
			},
			{
				name: '',
				link: '',
				source: ''
			},
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: ['Genderdoe', 'Genderthil'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/genderfae.png',
		shortDescription: `Genderfae is a form of genderfluidity that does not encompass man-aligned, miaspec genders, or anything similar. Genderfae individuals tend not to feel mingenders unless said gender happens to also be woman-aligned too (like azurgirl for example). Genderfae is under the genderfaer umbrella. Two subsets of genderfae are venufluid and lilafluid. `,
		number: 16
	},
	mogai: {
		name: 'Mogai',
		category: [сategories.umbrellaTerm],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/MOGAI',
		etymology: [
			`The specific acronym "MOGAI" has been attributed to a Tumblr user who is currently under the username cisphobeofficial, otherwise known as cloud, who was fourteen years old when they proposed that variation.`,
			`A group discussion began with a Tumblr post by Kay under the username okaysional (now taodefensesquad) on December 13, 2013. He said "LGBATQUI+ is trying to be all encompassing whilst getting longer every time people realise it’s missing some", but the problematic "GSM" (gender/sexuality minority) needed an alternative. Initially, he proposed MGS for Marginalized Gender/Sexuality.`,
			`Discussions quickly progressed with support for creating an alternative while critiquing MGS itself. The user robotic-fish said it was not exclusive enough since "kinksters and poly cishets will try and claim that they can use it too", sxizzor raised concerns about being "a little more inclusive of ace and queer romantic orientations", and dont-spoop-yourself noted that "marginalized gender could probably just include cishet women". Under the username sxizzor, Zach suggested using the phrase "gender alignment", saying it referred to whether or not the gender(s) someone identified as equaled their gender assignment at birth. He proposed MOGA for Marginalized Orientation and Gender Alignment; this shift also changed sexuality to orientation to be more inclusive of romantic orientations. By January 1, 2014, the further discussions had led Kay to support MOGA over MGS, in part to avoid confusion of the acronym MGS with Metal Gear Solid.`,
			`Further debate about being explicit about romantic versus sexual orientation led to several suggestions from the user mr-moon-the-cisphobic-panda, including MORSGA, which was then revised by cloud (under the username sunsetfucker) to MORSGAI on February 21. Sometime by March 16, 2014, it had been changed again to MOGAI and relayed by cloud to other Tumblr users.`
		],
		references: [
			{
				name: 'MOGAI FAQ',
				link: 'https://web.archive.org/web/20210909221419/https://cisphobeofficial.tumblr.com/mogaifaq',
				source: 'cisphobeofficial.tumblr.com'
			},
			{
				name: 'For lack of a better word: neo-identities in non-cisgender, non-straight communities on Tumblr',
				link: 'https://rshare.library.ryerson.ca/articles/thesis/For_lack_of_a_better_word_neo-identities_in_non-cisgender_non-straight_communities_on_Tumblr/14648067',
				source: 'Feraday, Christine / Ryerson University'
			},
			{
				name: '"A lot of people have been looking for an alternative to GSM',
				link: 'https://archive.ph/TA9F3',
				source: 'okaysional.tumblr.com'
			},
			{
				name: 'I made a dumb joke on this last time',
				link: 'https://web.archive.org/web/20220215035837/https://dont-spoop-yourself.tumblr.com/post/69941682309/revtomdildomolar-sxizzor-robotic-fish',
				source: ' dont-spoop-yourself.tumblr.com'
			},
			{
				name: '"okaysional has been discussing it and has decided to switch it to MOGA',
				link: 'https://archive.ph/TA9F3',
				source: 'greater pacific tree octopus'
			}
		],

		brandColor: '#702282',
		alternativeName: ['MOGA, IMOGA, MOGMI, MOGII'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['LGBTQIA+'],
			associatedRomanticism: ['']
		},
		shortDescription: `MOGAI is an acronym for Marginalized Orientations, Gender Alignment, and Intersex. MOGAI is an umbrella term for people who are not cisgender and/or heterosexual.`,
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/mogai.png',
		number: 17
	},
	cassgender: {
		name: 'Cassgender',
		category: [''],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The cassgender flag was created by pride-flags-for-us on or before February 27, 2015.'
			],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbta.miraheze.org/wiki/Cassgender',
		etymology: [`"Cass" means "to render useless or void" in English.`],
		references: [
			{
				name: 'Cassgender flag',
				link: 'https://archive.ph/JhhyE',
				source: 'archive.ph'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/cassgender.png',
		shortDescription: `Cassgender is a gender identity where one feels that their gender is unimportant or where one is indifferent to the idea of gender. Cassgender is different from a lack of gender, as a cassgender individual might have a gender but not feel that it's an important part of their identity. A related term is cassflux, where the level of indifference fluctuates. Sometimes one might feel completely indifferent towards gender, but at other times gender might feel more important. `,
		number: 18
	},
	lesbian: {
		name: 'Lesbian',
		category: [сategories.romanticOrientation, сategories.sexualOrientation],
		// `Certain lesbians have used the label to describe their gender in addition to their attractions. In the 2021 Gender Census, an annual online international survey of people who do not strictly identify with the gender binary, participants indicated their personal identifiers; the item "lesbian (partially or completely in relation to gender)" was selected by 12.9% of the participants.`,
		// `For over a century, lesbians have debated who shares their identity and is part of the lesbian community. They have variously been defined based on sexual behaviors, sexual attractions, or self-identifying with the label. For instance, women who self-identify as both bisexual and lesbian would not be included in a definition that specifies lesbians are only oriented toward women, but would be in a broader definition that encompasses other labels.`

		description: [loremDescriptionText],
		flagInfo: {
			description: [
				`At the end of June 2017, Mod Q of the Tumblr blog butch positivity (butchspace) posted a seven-striped orange and yellow butch flag design and color meanings. Days later in July, the username shapeshifter-of-constellation posted a general lesbian flag design. The bottom three stripes use color codes sampled from the top of Mod Q's butch flag, and the top four colors were derived from those of the lipstick lesbian flag (three of them directly sampled). The stripes are visually equal in size but have slight variances upon close inspection. Alternate versions with stripes from the More Color More Pride flag were also offered. At the suggestion of Mod T from butch positivity, shapeshifter-of-constellation proposed that the white stripe could symbolize those who do not identify as butch or femme, but no meanings were assigned to other individual stripes. Responding to Mod Q, they said the intention of it was a general lesbian flag for anyone in the community, not specifically a femme/butch flag.`
			],
			colors: [
				{
					color: 'Red-orange',
					description: 'gender non-conformity'
				},
				{
					color: 'Orange',
					description: 'independence'
				},
				{
					color: 'Light orange',
					description: 'community'
				},
				{
					color: 'White',
					description: 'unique relationships to womanhood'
				},
				{
					color: 'Light pink',
					description: 'serenity and peace'
				},
				{
					color: 'Medium pink',
					description: 'love and sex'
				},
				{
					color: 'Dark pink',
					description: 'femininity'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Lesbian',
		etymology: [
			`The term "Lesbian" originally referred to people or things from the Greek island of Lesbos. It is associated with famous poet Sappho, a community leader from the island of Lesbos who wrote multiple love poems to other women circa 600 BCE. The adjective "sapphic" is also derived from Sappho. Sappho also wrote erotic and romantic verses that included men, but in English language texts, her particular association with the erotic love between women has been dated to 1732 or before. By 1870, "lesbianism" had become a noun for a woman's erotic interest in other women or homosexual relations between them, while the phrase "lesbian love" was in use by 1883, originally circulating in U.S. medical journals that framed sexual intimacy between women as pathological. Previously used as an adjective related to the isle of Lesbos or to amatory poetry, "lesbian" has been in continuous use since 1890 to describe romantic and/or sexual behavior between women regardless of their specific sexualities, such as "lesbian couple", "lesbian sex", or "lesbian kiss". By 1904, lesbian was in use as a noun.`
		],
		references: [
			{
				name: 'The A-Z of Gender and Sexuality: From Ace to Ze. Jessica Kingsley Publishers, 2019.',
				link: '',
				source: 'Holleb, Morgan Lev Edward.'
			},
			{
				name: '"List of LGBTQ+ terms".',
				link: 'https://www.stonewall.org.uk/help-advice/faqs-and-glossary/list-lgbtq-terms',
				source: 'Stonewall'
			},
			{
				name: 'Queer Adolescence: Understanding the Lives of Lesbian, Gay, Bisexual, Transgender, Queer, Intersex, and Asexual Youth.',
				link: '',
				source: 'McNabb, Charlie. / Rowman & Littlefield.'
			},
			{
				name: `"'LGBTI' people and communities"`,
				link: 'https://www.lgbtiqhealth.org.au/lgbti_people_and_communities',
				source: 'LGBTIQ+ Health Australia'
			},
			{
				name: `"The Gender Closet: Lesbian Disappearance under the Sign 'Women'".`,
				link: 'https://www.thefreelibrary.com/The+gender+closet%3a+lesbian+disappearance+under+the+sign+%22women.%22-a017200206',
				source: 'Calhoun, Cheshire.'
			},
			{
				name: 'Queer Identities and Politics in Germany: A History, 1880–1945.',
				link: '',
				source: 'Whisnant, Clayton J.'
			},
			{
				name: ' Lesbian Health: Current Assessment and Directions for the Future.',
				link: '',
				source: `Solarz, Andrea L., National Academies Press, 1999.`
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Women', 'Non-binary', 'Genderqueer'],
			attractedTo: ['Women', 'Non-binary ', 'Genderqueer', ''],
			attractionType: ['Romantically', 'Sexually'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Sapphic'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/lesbian.png',
		shortDescription:
			'The term is generally used as a self-identification of sexual or romantic orientation. Although lesbians are frequently defined as women who are exclusively attracted to women, another definition is women primarily attracted to other women.',
		number: 19
	},
	lithromantic: {
		name: 'Lithromantic',
		category: [сategories.aromanticSpectrum],
		description: [
			`Someone who identifies as lithromantic can be romance repulsed, romance indifferent / neutral / apathetic towards romance, or romance positive. Like with any romantic orientation, lithromantic individuals can have any sexual orientation. `,
			`Due to controversy of appropriating lesbian culture, the term has been reclined to be akioromantic, as well as apromantic.`
		],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://mogai.fandom.com/wiki/Lithromantic',
		etymology: [
			'From lith- (“stone”) romantic, invoking the LGBT meaning of stone (“willing to give but not receive pleasure”) as in stone butch.'
		],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: ['Lithoromantic'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/lithromantic.png',
		shortDescription: `Lithromantic (also known as akioromantic or apromantic) is a romantic orientation on the aromantic spectrum. Somebody who is lithromantic can feel romantic attraction towards others and also enjoy being in romantic relationships but only in theory. They do not need the affection to be reciprocated, and as such do not usually feel compelled to seek out a relationship with someone they are interested in. Some lithromantics may also stop feeling their romantic attraction once in a relationship.`,
		number: 20
	},
	mascic: {
		name: 'Mascic',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/mascic.png',
		shortDescription: loremShortDescriptionText,
		number: 21
	},
	greygender: {
		name: 'Graygender',
		category: [сategories.agenderSpectrum],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				`The flag for this identity was designed by Pride-Flags on DeviantArt, on August 23, 2015. The meanings for the graygender flag's colors are as follows`
			],
			colors: [
				{
					color: 'Grey',
					description: 'Spectrum of experiences under this identity'
				},
				{
					color: 'Blue',
					description: 'Graygender as an identity and experience, comparing it to deep ocean waters'
				},
				{
					color: 'White',
					description: 'Purity and validity of graygender people and their unique experiences'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Graygender',
		etymology: [
			'The use of "gray-" in graygender is intended to be similar to the use of the suffix for graysexual. Instead of feeling a weak attraction as with graysexual, a person who is graygender would instead feel a weak connection to gender.'
		],
		references: [
			{
				name: 'Identifying As “Graygender”/“Greygender”',
				link: 'https://invernom.tumblr.com/post/80158494356/identifying-as-graygendergreygender',
				source: 'invernom'
			},
			{
				name: '68 Terms That Describe Gender Identity and Expression',
				link: 'https://www.healthline.com/health/different-genders',
				source: 'healthline.com'
			},
			{
				name: 'The Gender Identification Flags You Should Know About For Pride Season!',
				link: 'www.thelgbtsentinel.com/gender-identification-flags-know-pride-season/',
				source: 'The LGBT Sentinel'
			},
			{
				name: `The ABC's of LGBT+`,
				link: '',
				source: 'Hardell, Ash. / Mango Media Inc., 2016'
			},
			{
				name: 'What is Greygender? (Video) ',
				link: 'https://www.youtube.com/watch?v=0Amt3YOkNes',
				source: 'Ash Hardell'
			},
			{
				name: 'Graygender / Gray Agender',
				link: 'https://www.deviantart.com/pride-flags/art/Graygender-Gray-Agender-555820442',
				source: 'deviantart.com'
			}
		],

		brandColor: '#702282',
		alternativeName: ['Greygender', 'Grey agender', 'Gray agender'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Agender', 'Graysexual', 'Grayromantic'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/greygender.png',
		shortDescription: `Graygender, also sometimes spelled as greygender, and sometimes referred to as gray agender or grey agender, is a gender identity where a person feels ambivalent towards their gender. It can also be defined as an identity where a person feels a weak connection to gender in general.`,
		number: 22
	},
	torik: {
		name: 'Torik',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/toric.png',
		shortDescription: loremShortDescriptionText,
		number: 23
	},
	xenogender: {
		name: 'Xenogender',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'Multiple xenogender flags have been proposed. On DeviantArt, Roswell (under the username Pastelmemer) created two flag options on January 15, 2017. Both use the same seven stripe colors, which are described as common shades from iris flowers. The central yellow stripe symbolizes genders that have no relation to the gender binary. The symbol in the center of the designs is the astronomical sign for the asteroid 7 Iris, which is named after the deity associated with rainbows.'
			],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Xenogender',
		etymology: [
			'The term xenogender was proposed on June 24, 2014, by Baaphomett, a user on Tumblr. The prefix xen- or xeno- means stranger, guest, or host. The word "xenine" has been used to mean "of or pertaining to xenogenders", with "xenity" as a noun form.'
		],
		references: [
			{
				name: 'Untitled post',
				link: 'https://web.archive.org/web/20140701150845/http://baaphomett.tumblr.com/post/89738557605/ive-done-a-lot-of-thinking-about-identity-and',
				source: 'Baaphomett'
			},
			{
				name: 'Counselling Skills for Working with Gender Diversity and Identity.',
				link: '',
				source:
					'Beattie, Michael; Lenihan, Penny; and Dundas, Robin. / Jessica Kingsley Publishers, 2018.'
			},
			{
				name: 'LGBTQ+ Youth and the Search for Labels: Identity Exploration Online',
				link: 'https://www.proquest.com/openview/067bb01957e208afbc205ebf7c253565',
				source:
					'Archer, Katherine / Arizona State University. Meân, Lindsey; Cayetano, Catalina; and Taylor, Jameien '
			},
			{
				name: 'LEXICAL GAP (noun)',
				link: 'https://www.macmillandictionary.com/us/dictionary/american/lexical-gap',
				source: 'Macmillan Dictionary'
			},
			{
				name: 'Demixenogender',
				link: 'https://web.archive.org/web/20220125083321/https://www.deviantart.com/pride-flags/art/Demixenogender-870952056',
				source: 'Pride-Flags'
			},
			{
				name: 'Definition of xen-',
				link: 'https://www.merriam-webster.com/dictionary/xen-',
				source: 'Merriam-Webster Dictionary'
			},
			{
				name: `What exactly does 'xenine' mean?`,
				link: 'https://web.archive.org/web/20220123163425/https://momma-mogai-sphinx.tumblr.com/post/183175311934/im-sort-of-new-to-al-of-this-what-exactly-does',
				source: 'momma-mogai-sphinx'
			},
			{
				name: 'masterpost of genders coined by baaphomett',
				link: 'https://web.archive.org/web/20211024044910/http://purrloinsucks.tumblr.com/post/95720973644/masterpost-of-genders-coined-by-baaphomett',
				source: 'purrloinsucks.tumblr.com'
			},
			{
				name: 'MOGAI FAQ',
				link: 'https://web.archive.org/web/20210909221419/https://cisphobeofficial.tumblr.com/mogaifaq',
				source: 'cisphobeofficial.tumblr.com'
			},
			{
				name: 'For lack of a better word: neo-identities in non-cisgender, non-straight communities on Tumblr',
				link: 'https://rshare.library.ryerson.ca/articles/thesis/For_lack_of_a_better_word_neo-identities_in_non-cisgender_non-straight_communities_on_Tumblr/14648067',
				source: 'Feraday, Christine / Ryerson University'
			},
			{
				name: 'Xenogender (1)',
				link: 'https://web.archive.org/web/20201223004826/https://www.deviantart.com/pride-flags/art/Xenogender-1-656548427',
				source: 'Roswell / Pastelmemer / Pride-Flags'
			},
			{
				name: 'Xenogender (2)',
				link: 'https://web.archive.org/web/20210826005225/https://www.deviantart.com/pride-flags/art/Xenogender-2-656548421',
				source: 'Roswell / Pastelmemer / Pride-Flags'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['MOGAI', 'Non-binary']
		},
		relatedTerms: {
			differentFrom: ['Xenic'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/xenogender.png',
		shortDescription: `Xenogender is defined as "a gender that cannot be contained by human understandings of gender; more concerned with crafting other methods of gender categorization and hierarchy such as those relating to animals, plants, or other creatures/things". Xenogender individuals may use ideas and identities outside of the gender binary to describe themselves and avoid binary gendered identifiers, such as using only their first name or the name of an animal. They may feel they cannot place a label on themselves, or feel as though they lack the terms to fully express their gender or identity, something that derives from a lexical gap. The term "xenogender" itself was designed to help fill the lexical gap by using terms not typically associated with gender or describing gender with metaphors. Since it is a gender identity that is outside the binary concepts of masculinity and femininity, xenogender is a non-binary identity.`,
		number: 24
	},
	butch: {
		name: 'Butch',
		category: [сategories.genderIdentity, сategories.genderExpression],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'On June 27, 2017, Mod Q of the Tumblr blog butch positivity (butchspace) and Tumblr user princechaotic posted a seven-striped orange and yellow butch flag design. The color meanings are as follows (posted June 30, 2017).'
			],
			colors: [
				{
					color: 'Red',
					description: 'Passion and sexuality;'
				},
				{
					color: 'Red Orange',
					description: 'Courage'
				},
				{
					color: 'Light Orange',
					description: 'Joy'
				},
				{
					color: 'White',
					description: 'Renewal'
				},
				{
					color: 'Beige',
					description: 'Chivalry'
				},
				{
					color: 'Orange',
					description: 'Warmth'
				},
				{
					color: 'Brown',
					description: 'Honesty'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Butch',
		etymology: [
			`The word butch may have been coined by abbreviating the word butcher, as first noted in George Cassidy's nickname, Butch Cassidy. The specific term was first coined in the 1940s by lesbian and queer women, but the concept developed earlier.`
		],
		references: [
			{
				name: 'The Trans Language Primer: "Butch".',
				link: 'https://translanguageprimer.com/Butch/',
				source: 'The Trans Language Primer'
			},
			{
				name: `"It's #ButchAppreciationDay, and this is what butch means to me"`,
				link: 'https://www.stonewall.org.uk/about-us/news/it%E2%80%99s-butchappreciationday-and-what-butch-means-me',
				source: 'Yassine Senghor'
			},
			{
				name: 'Nonbinary Gender Identities: History, Culture, Resources. Rowman & Littlefield, 2018.',
				link: '',
				source: 'McNabb, Charlie.'
			},
			{
				name: 'Holleb, Morgan Lev Edward. Jessica Kingsley Publishers, 2019',
				link: '',
				source: 'The A-Z of Gender and Sexuality: From Ace to Ze.'
			},
			{
				name: `The Queens' English: The LGBTQIA+ Dictionary of Lingo and Colloquial Phrases.`,
				link: '',
				source: 'Davis, Chloe O. /  Clarkson Potter/Publishers, 2021.'
			},
			{
				name: 'PFLAG: "National Glossary of Terms".',
				link: 'https://pflag.org/glossary',
				source: 'pflag.org'
			},
			{
				name: 'Butch Bottom–Femme Top? An Exploration of Lesbian Stereotypes.',
				link: '',
				source: `Walker, Ja'nina. / Journal of Lesbian Studies. vol. 6`
			},
			{
				name: 'Boots of Leather, Slippers of Gold: The History of a Lesbian Community.',
				link: '',
				source: 'Kennedy, Elizabeth Lapovsky and Davis, Madeline D.'
			},
			{
				name: 'Mod Q of butchspace: "A new butch flag"',
				link: 'https://butchspace.tumblr.com/post/162316889795/a-new-butch-flag',
				source: 'butchpositivity'
			},
			{
				name: 'Mod Q of butchspace and princechaotic: "Color meanings"',
				link: 'https://butchspace.tumblr.com/post/162452543535/based-off-of-princechaotics-suggestions-and-my',
				source: 'butchpositivity'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Stud'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/butch.png',
		shortDescription: `Butch is an identity within the LGBTQIA+ community of some people whose outward gender expression matches their culture's understanding of masculinity. Most often, butches take on masculine roles and careers that are typically designated to men within their culture and time period. Butch originally referred to a style and gender role performed by masculine lesbians, and is still often associated with the lesbian community, but its usage and meaning have expanded and are not exclusive to lesbians. In current usage, butch sometimes refers to a particular non-binary gender identity.`,
		number: 25
	},
	gynesexual: {
		name: 'Gynesexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/gynesexual.png',
		shortDescription: loremShortDescriptionText,
		number: 26
	},
	asexual: {
		name: 'Asexual',
		category: [сategories.sexualOrientation],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The asexual pride flag was voted on by the Asexual Visibility and Education Network (AVEN) in 2010. It is composed of four horizontal stripes from top to bottom in the colors black, grey, white, and purple. The colors have the following meanings.'
			],
			colors: [
				{
					color: 'Black',
					description: 'Asexuals'
				},
				{
					color: 'Grey',
					description: 'Demisexuals and grayasexuals'
				},
				{
					color: 'White',
					description: 'Sexuals, as in non-asexual partners and allies'
				},
				{
					color: 'Purple',
					description: 'The community'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Asexual',
		etymology: [
			`The term 'asexual' comes from the negation prefix a-, meaning 'not' or 'without', with the word 'sexual'. It was initially used to describe biological organisms that had no sex organs. Its use as a label was popularized by Alfred Kinsey in his Heterosexual-Homosexual Rating Scale (the Kinsey scale), with X being used to denote people who did not engage in sexual behaviors`
		],
		references: [
			{
				name: 'General FAQ',
				link: 'https://www.asexuality.org/?q=general.html',
				source: 'Asexual Visibility and Education Network'
			},
			{
				name: 'Overview',
				link: 'https://www.asexuality.org/?q=general.html',
				source: 'Asexual Visibility and Education Network'
			},
			{
				name: 'The Trans Language Primer: "Asexual".',
				link: 'https://web.archive.org/web/20211028100925/https://translanguageprimer.com/asexual/',
				source: 'The Trans Language Primer.'
			},
			{
				name: '"Asexual Flag: And the winner is ..."',
				link: 'https://web.archive.org/web/20211215072417/https://www.asexuality.org/en/topic/53435-asexual-flag-and-the-winner-is/',
				source: 'Asexual Visibility and Education Network'
			},
			{
				name: '"The Asexuality Flag" (2012-02-20).',
				link: 'https://web.archive.org/web/20211128030358/https://www.asexualityarchive.com/the-asexuality-flag/',
				source: 'Asexuality Archive.'
			}
		],

		brandColor: '#702282',
		alternativeName: ['Ace'],
		specifics: {
			genders: ['Any'],
			attractedTo: ['No one (sexually)'],
			attractionType: ['None (sexually)'],
			spectrumOrUmbrella: ['Asexual spectrum']
		},
		relatedTerms: {
			differentFrom: ['Aromantic', 'Demisexual'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/asexual%20.png',
		shortDescription: `Asexual refers to people who do not experience sexual attraction toward others. They may experience other forms of attraction, such as romantic, sensual, or aesthetic attraction. Asexuality is a sexual orientation, not a gender identity, behavior, or medical condition. Some asexual people choose to engage in sexual activities for various reasons despite not experiencing sexual feelings and desire toward any particular person. Asexuality is part of the asexual spectrum (abbreviated "ace"), an umbrella term and a broad community of identities that are closely related to asexuality when placed on a spectrum ranging from asexual to sexual.`,
		number: 27
	},
	demisexual: {
		name: 'Demisexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demisexual.png',
		shortDescription: loremShortDescriptionText,
		number: 28
	},
	noninsexual: {
		name: 'Noninsexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/noninsexual.png',
		shortDescription: loremShortDescriptionText,
		number: 29
	},
	trixic: {
		name: 'Trixic',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/trixic.png',
		shortDescription: loremShortDescriptionText,
		number: 30
	},
	enbian: {
		name: 'Enbian',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/enbian.png',
		shortDescription: loremShortDescriptionText,
		number: 31
	},
	quoiromantic: {
		name: 'Quoiromantic',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/quoiromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 32
	},
	androsexual: {
		name: 'Androsexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/androsexual.png',
		shortDescription: loremShortDescriptionText,
		number: 33
	},
	bear: {
		name: 'Bear',
		category: [сategories.subculture],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				`The bear flag was created by psychology undergraduate student Craig Byrnes in 1995. The colors of this flag are derived from the animals rather than the people; thus, the varying shades of brown, white, and black are reminiscent of colors found in bear fur.`
			],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Bear',
		etymology: ['Elaborate on the origins of the name.'],
		references: [
			{
				name: 'The A-Z of Gender and Sexuality: From Ace to Ze',
				link: '',
				source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
			},
			{
				name: 'What is a bear? The gay tribe for big, hairy, hunky men',
				link: 'https://www.pinknews.co.uk/2018/05/18/what-is-a-bear-the-gay-tribe-for-big-hairy-hunky-men/',
				source: 'Polaris, Danny / PinkNews'
			},
			{
				name: 'Pride flags: The biggest guide to LGBT+ rainbow flags and what they all mean',
				link: 'https://www.gaystarnews.com/article/pride-flags-the-biggest-guide-to-lgbt-rainbow-flags-and-what-they-all-mean/',
				source: 'Reid-Smith, Tris / Gay Star News'
			},
			{
				name: 'Pride flags: All of the flags you might see at Pride and what they mean',
				link: 'https://www.gaystarnews.com/article/pride-flags-the-biggest-guide-to-lgbt-rainbow-flags-and-what-they-all-mean/',
				source: 'Glass, Jess / PinkNews'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Men (generally)'],
			attractedTo: ['Men (generally)'],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Otter'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bear.png',
		shortDescription: `One of the many long-standing gay subcultures, a bear is a large, hairy queer man who self-identifies with the 'bear' label. Being a bear combines gender expression, gender identity, and sexuality; a large, hairy straight man would not be a bear. They are generally masculine-presenting men over the age of 30 whose build may include a big belly, legs, and/or butt. Bears almost always have a full beard or facial hair, and they are often associated with so-called "traditional masculinity" or "rugged masculinity". However, there is a debate within the bear community regarding the acceptability of femininity; they tend to be contrasted with identities such as twinks and femmes. Although bears are implicitly masculine people, being a bear is not about specific mannerisms or identities like "masc", and bear identity does not indicate preferred partners or sexual roles.`,
		number: 34
	},
	pansexual: {
		name: 'Pansexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				`The most commonly used pansexual pride flag was designed by Jasper V in 2010. It consists of three horizontal stripes: a magenta stripe at the top, a strong gold yellow stripe in the center, and a light cerulean stripe at the bottom.`,
				`Jasper V stated on their Twitter that the pride flag's meanings were intended as follows: "Pink and blue, because of their gendered traditions, and yellow, a generally non-gendered colour, to represent nonbinary folks etc."The meaning of the colors, however, is debated. Some say the pink stand for attraction to women, yellow for attraction to non-binary or gender non-conforming individuals, and blue for attraction to men. Others say that the blue, pink, and yellow stand for those who identify as men, women, and non-binary people, respectively.`
			],
			colors: [
				{
					color: 'Pink',
					description: 'Women colour'
				},
				{
					color: 'Yellow ',
					description: 'Non-gendered colour'
				},
				{
					color: 'Blue',
					description: 'Man colour'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Pansexual',
		etymology: [
			'The term "pansexual" is derived from the Greek prefix pan-, meaning "all" or "every".'
		],
		references: [
			{
				name: 'Human Rights Campaign: "Glossary of Terms".',
				link: 'https://www.hrc.org/resources/glossary-of-terms',
				source: 'hrc.org'
			},
			{
				name: 'Admin Silverchip: "What it Means to be Pansexual or Panromantic"',
				link: 'https://lgbt.foundation/news/what-it-means-to-be-pansexual-or-panromantic/300',
				source: 'lgbt.foundation'
			},
			{
				name: '"Definition of Pan"',
				link: 'https://www.merriam-webster.com/dictionary/pan-',
				source: 'merriam-webster.com'
			},
			{
				name: `"LGBTQ Pride flags go beyond the classic rainbow. Here's what each one means".`,
				link: 'https://eu.usatoday.com/in-depth/graphics/2021/06/01/lgbtq-pride-flags-meaning-gay-lesbian-transgender-nonbinary-intersex-pride-flags-represent/5133381001/',
				source: 'eu.usatoday.com'
			},
			{
				name: '"A Storied Glossary of Iconic LGBT Flags and Symbols"',
				link: 'https://mashable.com/archive/lgbt-pride-symbols',
				source: 'mashable.com'
			},
			{
				name: `"Want to know more about the rainbow colors? Here's a guide to Pride flag symbolism".`,
				link: 'https://www.ktvu.com/news/want-to-know-more-about-the-rainbow-colors-heres-a-guide-to-pride-flag-symbolism',
				source: 'KTVU FOX 2'
			}
		],
		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any'],
			attractedTo: ['All'],
			attractionType: ['Sexual'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Bisexual', 'Omnisexual', 'Polysexual'],
			associatedRomanticism: ['Panromantic']
		},
		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pansexual.png',
		shortDescription:
			'Pansexuality is the sexual attraction toward people regardless of their sex or gender identity. Since gender or sex are not determining factors in who a pansexual person is attracted to, some pansexuals might call themselves gender-blind, therefore rejecting the gender binary.',
		number: 35
	},
	intersex: {
		name: 'Intersex',
		category: [''],
		description: [
			'According to the ISNA it is estimated that as many as 1.7% of individuals are born with intersex traits; however, cases of intersex people can be unreported or undiagnosed. Additionally, many people may be unaware of their intersex traits unless they receive genetic testing. Intersex people are not as uncommon as once believed; they have just been invisible until recent years. Intersex individuals may have any gender identity or gender expression.',
			`After years of activist efforts, members of the hijra community in India gained legal recognition in 2014 as part of a third gender category. Aspects of the hijra identity can include wearing clothing and cosmetics that are considered feminine. Some intersex people are part of the hijra community.`
		],
		flagInfo: {
			description: `The intersex flag was created by Morgan Carpenter from Intersex Human Rights Australia (IHRA, previously Organisation Intersex International Australia or OII Australia) in July 2013. The organization aimed to create a symbol that was unique--one that did not derive from existing flags, and one without pink and blue (which tend to be perceived as gendered). In Carpenter's words, the circle was chosen because it "is unbroken and unornamented, symbolising wholeness and completeness, and our potentialities. We are still fighting for bodily autonomy and genital integrity, and this symbolises the right to be who and how we want to be.'`,
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Intersex',
		etymology: [
			'The term "intersex" is comprised of "inter-", meaning "between", and "-sex". The term was coined in 1917 by geneticist Richard Goldschmidt, but it did not gain popularity until used by biologist Anne Fausto-Sterling in 1993.'
		],
		references: [
			{
				name: 'interACT: "FAQ: What is intersex?"',
				link: 'https://interactadvocates.org/faq/',
				source: 'interactadvocates.org'
			},
			{
				name: ' United Nations for LGBT Equality: "United Nations FACT SHEET Intersex"',
				link: 'https://www.unfe.org/wp-content/uploads/2017/05/UNFE-Intersex.pdf',
				source: 'unfe.org'
			},
			{
				name: 'ISNA: "Frequency".',
				link: 'https://isna.org/faq/frequency/',
				source: 'isna.org'
			},
			{
				name: 'InterAct: "Intersex 101: Everything You Want to Know!"',
				link: 'https://live-interact-advocates.pantheonsite.io/wp-content/uploads/2017/03/INTERSEX101.pdf',
				source: 'live-interact-advocates.pantheonsite.io'
			},
			{
				name: `"India's Third Gender Rises Again"`,
				link: 'https://www.sapiens.org/biology/hijra-india-third-gender/',
				source: 'sapiens.org'
			},
			{
				name: 'Morgan Carpenter: "An intersex flag" ',
				link: 'https://oii.org.au/22773/an-intersex-flag/',
				source: 'oii.org.au'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [
				'Non-binary',
				'Transgender',
				'Intergender',
				'Bisexual',
				'Bigender',
				'Androgyne',
				'Unisex'
			],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/intersex.png',
		shortDescription: `Intersex is an umbrella term for various people who are born with or develop sex characteristics that differ from the binary notions of a "male" or "female" body. These differences are called variations, and may involve one's hormones, chromosomes, external and internal reproductive organs, or secondary sex characteristics. An individual's intersex traits may include variations in one or multiple of the aforementioned types. These differences can be noticed at birth or later in life.`,
		number: 36
	},
	diamoric: {
		name: 'Diamoric',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'Flag were designed by the Tumblr user dionysiansuggestion. Proposed flag had three stripes with a purple myrtle in the center of the white central stripe.'
			],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Diamoric',
		etymology: [
			`The word diamoric is a neologism from the Greek prefix dia-, meaning "passing through, thoroughly, completely, or going apart from", and the Latin word amor, meaning "love". This combination is intended to mean "love that crosses through, goes apart from, or entirely encompasses the gender spectrum."`,
			`"Diamoric" was created with a community process. It originated as "dionysian" on the social media website Tumblr in an "ask" post from the user jesse-mccree to Marlowe Lune on June 13, 2016. After that term was criticized, a public channel was created on the chat platform Discord to discuss alternative vocabulary. Lune ran a Tumblr poll on July 5 to vote between two of the proposed alternatives: appelic and diamoric; the results posted on July 14 stated that diamoric was the favored option.`,
			`While the exact word for this concept was being debated, the proposed definition for that word was: "Love or attraction of any kind for, of, shared between or involving non binary people. This includes platonic, romantic, and/or sexual love and attraction. It includes any platonic, romantic or sexual feelings or relationships an NB person has, whether with other NB people or with binary people. This word is an equivalent to sapphic and achillean but further expanded to encompass any relationship or attraction which is neither same-gender nor 'opposite-gender' due to an NB person's involvement."`
		],
		references: [
			{
				name: 'Diamoric Love" (2016-07-14). Put me in the dirt.',
				link: 'https://web.archive.org/web/20220124014441/http://marlowelune.tumblr.com/post/147395086504/diamoric-love',
				source: 'Marlowe Lune'
			},
			{
				name: 'marlowelune to dionysiansuggestion',
				link: 'https://web.archive.org/web/20220124014353/http://marlowelune.tumblr.com/post/146529922219/dionysiansuggestion-dionysiansuggestion',
				source: 'Marlowe Lune'
			},
			{
				name: '"Diamoric". The Trans Language Primer',
				link: 'https://web.archive.org/web/20211102010053/https://translanguageprimer.com/diamoric/',
				source: 'The Trans Language Primer'
			},
			{
				name: 'marlowelune to jesse-mccree',
				link: 'https://web.archive.org/web/20220124014325/http://marlowelune.tumblr.com/post/145887394674/jesse-mcree-replied-to-your-post-feuillyadeux',
				source: 'Marlowe Lune'
			},
			{
				name: `The ABC's of LGBT+. Mango Media Inc.`,
				link: '',
				source: 'Hardell, Ash.'
			},
			{
				name: '"Non-binary Love: An Update and a Poll"',
				link: 'https://web.archive.org/web/20220216195600/http://marlowelune.tumblr.com/post/146953154069/non-binary-love-an-update-and-a-poll',
				source: 'Marlowe Lune'
			}
		],

		brandColor: '#702282',
		alternativeName: [`Adonian, adonic, cypric, dionysian`],
		specifics: {
			genders: ['Non-binary'],
			attractedTo: ['Any'],
			attractionType: ['Any'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/diamoric.png',
		shortDescription: `Diamoric —also known as adonian, adonic, cypric, or dionysian — is generally considered an umbrella term referring to the attractions experienced by non-binary individuals that cannot be described as "same gender" or "other gender", "straight" or "gay". As an identity word for non-binary people, it can be used to describe their sexual or romantic orientations, rather than being a specific orientation term of its own, or used to describe their relationships. Some non-binary people use it to emphasize their own gender identity and their attractions or relationships with other non-binary people. For instance, someone who is genderfluid and bisexual might describe themselves as a diamoric bisexual. Diamoric can also describe relationships in which one or more of the partners is non-binary, including relationships where one of the members is binary.`,
		number: 37
	},
	nofinsexual: {
		name: 'Nofinsexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/nofinsexual.png',
		shortDescription: loremShortDescriptionText,
		number: 38
	},
	graysexual: {
		name: 'Graysexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/graysexual.png',
		shortDescription: loremShortDescriptionText,
		number: 39
	},
	reciprosexual: {
		name: 'Reciprosexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/reciprosexual.png',
		shortDescription: loremShortDescriptionText,
		number: 40
	},
	demifluid: {
		name: 'Demifluid',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demifluid.png',
		shortDescription: loremShortDescriptionText,
		number: 41
	},
	femaric: {
		name: 'Femaric',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/femaric.png',
		shortDescription: loremShortDescriptionText,
		number: 42
	},
	neutrois: {
		name: 'Neutrois',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Neutrois',
		etymology: [
			`Neutrois had limited usage prior to 2009; however, it has been suggested that the word was coined as early as 1995 by Holly A. Burnham and derived from the Latin root neuter and French trois, meaning "three". It was included under the definition of "transgender" in the 2005 book Just Add Hormones: An Insider's Guide to the Transsexual Experience. The plural form of neutrois is the same as the singular.`
		],
		references: [
			{
				name: 'Terminology',
				link: 'https://www.fortlewis.edu/life-at-flc/health-safety/gender-sexuality-resource-center/gender-and-sexuality-resources/terminology',
				source: 'Dr. Bohan, Janis / fortlewis.edu.'
			},
			{
				name: 'Neutrois',
				link: 'http://neutrois.com/',
				source: 'neutrois.com'
			},
			{
				name: 'Neutrois',
				link: 'https://www.cosmopolitan.com/sexopedia/a37388362/neutrois/',
				source: 'Wynne, Griffon / Cosmopolitan'
			},
			{
				name: 'Neutrois - FAQ (March 7, 2001)',
				link: 'http://neutrois.com/',
				source: 'neutrois.com'
			},
			{
				name: 'Neutrois - AVENwiki',
				link: 'http://wiki.asexuality.org/Main_Page',
				source: 'wiki.asexuality.org'
			},
			{
				name: 'You Can Never Go Home',
				link: 'https://groups.google.com/g/soc.support.transgendered/c/ckLke9K-WtU/m/LuzuiVWEqTMJ',
				source: 'Sharon / Google Groups'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Agender'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/neutrois.png',
		shortDescription: `Neutrois is a non-binary gender identity described as being a neutral or null gender. It is considered part of the genderqueer, non-binary, and transgender umbrellas.`,
		number: 43
	},
	polysexual: {
		name: 'Polysexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: ['It was designed by Tumblr user fuckyeahpolysexuality in 2012.'],
			colors: [
				{
					color: 'Pink',
					description: 'attraction to women'
				},
				{
					color: 'green',
					description: 'attraction to non-binary (or otherwise gender non-conforming)'
				},
				{
					color: 'Blue',
					description: 'attraction to men'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Polysexual',
		etymology: [
			'The word "polysexual" comes from the Greek prefix polus, meaning "many". Another Greek prefix, polloi, meaning "much," may also have had an influence.'
		],
		references: [
			{
				name: `The Gay BC's of LGBT+: An Accompaniment to The ABC's of LGBT+. Mango Media Inc.`,
				link: 'https://mango.bz/books/the-gaybcs-of-lgbtq-365-b',
				source: 'Hardell, Ash.'
			},
			{
				name: '"What Is Polysexuality?"',
				link: 'https://www.webmd.com/sex/what-is-polysexuality',
				source: 'webmd.com.'
			},
			{
				name: '"Gender and Sexuality Dictionary: Polysexual"',
				link: 'https://www.dictionary.com/e/gender-sexuality/polysexual/',
				source: 'dictionary.com'
			},
			{
				name: 'Old Dominian University: "Queer 101". ',
				link: 'https://www.odu.edu/life/support/wgec/lgbt',
				source: 'Old Dominian University - LGBTQIA+ Initiatives.'
			},
			{
				name: '',
				link: 'https://ohyeahpolysexual-blog.tumblr.com/post/26964203712/fuckyeahpolysexuality-i-as-a-poly-individual',
				source: 'Oh yeah polysexual'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any'],
			attractedTo: ['Various'],
			attractionType: ['Sexual'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Pansexual', 'Bisexual', 'Omnisexual', 'Polyamorous'],
			associatedRomanticism: ['Polyromantic']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/polysexual.png',
		shortDescription:
			'Polysexuality is the sexual attraction to various, but not necessarily all, genders. A polysexual person may experience sexual attraction to any number of genders, varying between (at least) two and all but one. Polysexual individuals may have a preference when it comes to which gender they are attracted to, but this is not necessarily the case.',
		number: 44
	},
	omnisexual: {
		name: 'Omnisexual',
		category: [сategories.sexualOrientation],
		description: [loremDescriptionText],
		flagInfo: {
			description: ['The omnisexual pride flag was designed in 2015 by Tumblr user pastelmemer.'],
			colors: [
				{
					color: 'Dark purple/black, and blue flag',
					description: 'attraction to all other genders that are outside of the gender binary.'
				},
				{
					color: 'Pink',
					description: 'sexual attraction to femininity '
				},
				{
					color: 'Blue',
					description: 'sexual attraction to masculinity, respectively'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Omnisexual',
		etymology: [
			'The term "omnisexual" is derived from the Latin prefix omni-, meaning "all" or "universally".'
		],
		references: [
			{
				name: '"What Is Omnisexual?".',
				link: 'https://www.webmd.com/sex/what-is-omnisexual',
				source: 'webmd.com'
			},
			{
				name: '"Omnisexual: A Closer Look at Omnisexuality"',
				link: 'https://queersforacause.com/lgbtq%2B-tips/f/omnisexual-a-closer-look-at-omnisexuality',
				source: 'Queers for a Cause.'
			},
			{
				name: '"Definition of Omni-"',
				link: 'https://www.merriam-webster.com/dictionary/omni-',
				source: 'Merriam-Webster'
			},
			{
				name: '"What is Bisexuality?"',
				link: 'https://biresource.org/bi-info/what-is-bisexuality',
				source: 'Bisexual Resource Cente'
			}
		],
		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any'],
			attractedTo: ['All'],
			attractionType: ['Sexual'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Pansexual', 'Bisexual', 'Polysexual'],
			associatedRomanticism: ['Omniromantic']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/omnisexual.png',
		shortDescription: `Omnisexuality is the sexual attraction to people of all gender identities, wherein gender plays a role in one's attraction. Some omnisexual people may be more attracted to certain genders, but that is not always the case.`,
		number: 45
	},
	greyromantic: {
		name: 'Greyromantic',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/greyromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 46
	},
	achillean: {
		name: 'Achillean',
		category: [сategories.sexualOrientation],
		description: [
			`Achilles himself is a famous figure in Greek mythology. In relation to sexuality, Achilles had a relationship with another character, Patroclus, which is said to have romantic connotations. In Homer's Iliad, Achilles described Patroclus as being the "man I loved beyond all other comrades, loved as my own life." Their relationship plays a crucial part in the story. After Homer's iteration, the relationship between the men was depicted as a love affair.`,
			`The word "Achillean" has historically been used to describe all things relating to the aforementioned Achilles. An early use of the term in English to describe sexuality was in A.C. Hamilton's 1959 article titled, "Spenser's Treatment of Myth"`,
			`"Guyon subdues these Achillean affections through his own power; but they break out again as Cymochles lapses into lust and Pyrochles burns in the idle lake."`,
			`Using the term achillean in such a manner predated the reclamation of the word "gay" by the community.`,
			`The word "achillean" is often confused for gay or perceived to have the same meaning. However, gay describes a sexuality with attraction to only the same gender—men who are only attracted to other men. Achilleanism encompasses every male-based sexuality, therefore including all men, non-binary, and men-aligned people who are attracted to men. The term is meant to unite queer men.`
		],
		flagInfo: {
			description:
				'In ancient Rome and 19th century England, green indicated gay affiliations. Victorian men would often pin a green carnation on their lapel, as popularized by author Oscar Wilde. The first iteration of the achillean flag was created by Tumblr user pridenpositivity in 2016, and this version was later redesigned by DeviantArt user Pride-Flags on October 5, 2016.',
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Achillean',
		etymology: [
			'The term "achillean" refers to the Greek hero Achilles. Its 21st century use to describe sexualities is modelled after the term "sapphic", which is used to describe all women who are attracted to women.'
		],
		references: [
			{
				name: ' Lesbian, Gay, Bisexual, Transgender, Queer Plus (LGBTQ+)',
				link: 'https://uwm.edu/lgbtrc',
				source: 'Resource Center: "Glossary of Terms".'
			},
			{
				name: 'Who was Achilles?',
				link: 'https://blog.britishmuseum.org/who-was-achilles/',
				source: 'The British Museum Blog'
			},
			{
				name: 'Translated by J. M. Edmonds. "Idyll XXIX". The Greek Bucolic Poets.',
				link: 'https://www.theoi.com/Text/TheocritusIdylls5.html#29',
				source: 'The Loeb Classical Library, 1912.'
			},
			{
				name: 'Translated by A. S. F. Gow. "Idyll XXIX". Theocritus',
				link: '',
				source: 'Cambridge University Press, 1950.'
			},
			{
				name: 'Translated by Neil Hopkinson. "Idyll XXIX". Theocritus, Moschus, Bion.',
				link: 'https://www.loebclassics.com/view/theocritus-poems_i-xxx/2015/pb_LCL028.399.xml',
				source: 'Harvard University Press, 2015.'
			},
			{
				name: 'Entry on the year 1969 in gay liberation history.',
				link: 'https://en.wikipedia.org/wiki/Gay_liberation#1969',
				source: 'Wikipedia'
			},
			{
				name: '"The Fairest Flowers".',
				link: 'https://www.shakespeare.org.uk/explore-shakespeare/blogs/the-fairest-flowers-o-the-season-are-the-carnations-illustrations-of-carnations-in-rare-and-early-printed-books/',
				source: 'shakespeare.org.uk'
			},
			{
				name: 'Archived post announcing the achillean flag.',
				link: 'https://archive.is/hIjCa',
				source: 'Tumblr'
			},
			{
				name: 'Post with the current achillean flag.',
				link: 'https://www.deviantart.com/pride-flags/art/Achillean-638170749',
				source: 'DeviantArt'
			},
			{
				name: 'Queer Undefined: "LGTQ+ dictionary"',
				link: 'https://www.queerundefined.com/search/achillean',
				source: 'queerundefined.com.'
			}
		],
		brandColor: '#702282',
		alternativeName: ['Men loving men (MLM)'],
		specifics: {
			genders: ['Men', 'Men-aligned'],
			attractedTo: ['Men', 'Men-aligned'],
			attractionType: ['Any'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Gay'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/achillean.png',
		shortDescription:
			'Achillean refers to a man or man-aligned individual who is attracted to other men and men-aligned people. This describes all sexual orientations where someone male or man-aligned is attracted to others, serving as an umbrella term for men and non-binary people who are gay, pansexual, bisexual, queer, or other sexualities in which men are attracted to men. It is similar to and sometimes known as men loving men (MLM).',
		number: 47
	},
	pomosexual: {
		name: 'Pomosexual',
		category: [сategories.sexualOrientation],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The pomosexual flag was created in July 2016 by Tumblr user pride-color-schemes. Shades of pink and white define the pomosexual pride flag.'
			],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Pomosexual',
		etymology: ['"Pomo" is short for postmodern.'],
		references: [
			{
				name: 'Pomosexual',
				link: 'https://www.identiversity.org/terms/pomosexual',
				source: 'identiversity.org.'
			},
			{
				name: 'What does pomosexual mean?',
				link: 'https://www.definitions.net/',
				source: 'definitions.net'
			},
			{
				name: 'Pomosexuality: Finding a term that fits',
				link: 'https://archermagazine.com.au/2021/10/pomosexuality/',
				source: 'Chidananda Sastry, Patruni'
			},
			{
				name: 'Challenging Assumptions About Gender and Sexuality.',
				link: '',
				source: 'Queen, Carol. PoMoSexuals / Cleis Press, 1997'
			},
			{
				name: 'Pomo-',
				link: 'https://pride-color-schemes.tumblr.com/post/146935072870/pomo',
				source: 'pride-color-schemes.tumblr.com'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any'],
			attractedTo: ['Any (or none)'],
			attractionType: ['Sexual'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Pansexual'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pomosexual.png',
		shortDescription: `Pomosexuality is defined as denying, avoiding, or not fitting any sexual orientation label in terms of conventional labels or classifications, such as gay, lesbian, bisexual, or labels on the asexual or aromantic spectrums.[1][2][3] It challenges categorizations in favor of largely unmapped possibility and the intense charge that comes with transgression.[4] Some pomosexual people may be queer or questioning, and others may not.
		
		The romantic equivalent to pomosexual is pomoromantic.`,
		number: 48
	},
	cupioromantic: {
		name: 'Cupioromantic',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/cupioromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 49
	},
	aegoromantic: {
		name: 'Aegoromantic',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/aegoromantic.png',
		shortDescription: loremShortDescriptionText,
		number: 50
	},
	transmasculine: {
		name: 'Trans masculine',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Transmasculine',
		etymology: [''],
		references: [
			{
				name: 'Transmasculine',
				link: 'https://gender.fandom.com/wiki/Transmasculine',
				source: 'Gender Wiki'
			}
		],

		brandColor: '#702282',
		alternativeName: ['Transmasc'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Transgender'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/transmasculine.png',
		shortDescription: `Transmasculine, often abbreviated to transmasc, refers to people who were assigned female at birth and have a gender identity, gender expression, or both that is predominantly masculine. Transmasculine people may or may not identify as male. It can be a standalone identity term or an umbrella term for certain identities, such as:

 * Transgender men
 * Non-binary people who feel their gender is masculine, whether entirely or partially
 * Genderfluid or multigender people who feel predominantly masculine
 * Demiguys
 * People who are boyflux`,
		number: 51
	},
	demiromantic: {
		name: 'Demiromantic',
		category: [сategories.romanticOrientation],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The origins of the flag are also unknown, but those within the demiromantic community speculate that it is based off the aromantic flag and AVEN logo. While people often have different takes on the significance for each of the colors used, possible interpretations could be the following'
			],
			colors: [
				{
					color: 'Black',
					description: 'The sexuality spectrum as a whole'
				},
				{
					color: 'Gray',
					description: 'Grayaromanticism and demiromanticism'
				},
				{
					color: '',
					description:
						'Platonic and aesthetic attraction, queer/quasi platonic relationships, or being outside the straight-gay and male-female binaries'
				},
				{
					color: 'Green',
					description: 'Demiromanticism, or the aromantic spectrum'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Demiromantic',
		etymology: [
			`The prefix 'demi-' derives from the Latin dimidium, meaning "divided in half"; its usage in relation to romantic/sexual orientations means "half" or "partial". `
		],
		references: [
			{
				name: 'All Aromantic Terms".',
				link: 'https://web.archive.org/web/20220129083533/https://www.aromanticism.org/en/all-terms',
				source: 'AUREA - Aromantic-spectrum Union for Recognition, Education, and Advocacy'
			},
			{
				name: `The Gay BC's of LGBT+: An Accompaniment to The ABC's of LGBT+`,
				link: 'https://mango.bz/books/the-gaybcs-of-lgbtq-by-ashley-mardell-365-b',
				source: 'Hardell, Ash. / Mango Media Inc.'
			},
			{
				name: 'The A-Z of Gender and Sexuality: From Ace to Ze',
				link: '',
				source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
			},
			{
				name: 'Demiromantic Definition - What Does It Mean to be Demiromantic',
				link: 'https://www.cosmopolitan.com/sexopedia/a31094953/demiromantic-definition/',
				source: 'Cosmopolitan'
			},
			{
				name: 'Pride Flags',
				link: 'https://www.unco.edu/gender-sexuality-resource-center/resources/pride-flags.aspx',
				source: 'University of Northern Colorado'
			},
			{
				name: 'What Does Demiromantic Mean?',
				link: 'https://www.webmd.com/sex/what-demiromanticism-means',
				source: 'WebMD'
			},
			{
				name: 'City of Strife',
				link: 'https://queerbooksforteens.com/2018/01/15/city-of-strife/',
				source: 'Queer Books for Teens'
			},
			{
				name: 'The AroAce Database',
				link: 'https://www.aroacedatabase.com/character/120',
				source: 'Jenny Strings'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any'],
			attractedTo: [''],
			attractionType: ['Romantic'],
			spectrumOrUmbrella: ['Aromantic spectrum']
		},
		relatedTerms: {
			differentFrom: ['Greyromantic'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/demiromantic.png',
		shortDescription: `Demiromantic describes people who do not experience romantic attraction until they have formed a deep emotional connection with someone, according to the most common definition.Other definitions of this romantic orientation are only experiencing limited romantic attraction, or falling somewhere on a spectrum between aromantic and romantic; the latter definition overlaps with one for grayromantic.`,
		number: 52
	},
	genderNonConforming: {
		name: 'Gender non-conforming',
		category: [сategories.genderExpression],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Gender_non-conforming',
		etymology: [''],
		references: [
			{
				name: 'National Glossary of Terms',
				link: 'https://pflag.org/glossary',
				source: 'PFLAG'
			},
			{
				name: 'The Trans Language Primer: "Gender Non-Conforming (GNC)',
				link: 'https://translanguageprimer.com/gender-non-conforming/',
				source: 'The Trans Language Primer'
			},
			{
				name: 'Glossary of Terms - Transgender',
				link: 'https://www.glaad.org/reference',
				source: 'GLAAD Media Reference Guide - 10th Edition'
			},
			{
				name: 'The Social Costs of Gender Nonconformity for Transgender Adults: Implications for Discrimination and Health',
				link: 'The Social Costs of Gender Nonconformity for Transgender Adults: Implications for Discrimination and Health',
				source: 'ncbi.nlm.nih.gov'
			}
		],

		brandColor: '#702282',
		alternativeName: ['GNC, Gender diverse, gender expansive, gender variant'],
		specifics: {
			genders: ['Any'],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Non-binary', 'Transgender', 'Genderfuck', 'Genderqueer'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/nonconforming.png',
		shortDescription: `Gender non-conforming (GNC) people do not follow gender stereotypes; they differ from their society's conventional binary expectations of masculine or feminine presentation. Gender non-conformity can encompass many things, such as gender expression or gender roles. It is typically apparent in people whose gender identity is a binary gender such as male or female, whether they are cisgender or transgender; for instance, a feminine trans man and a feminine cis man are both non-conforming with expectations of masculinity. The term is not equivalent to non-binary or trans, but some trans or non-binary people also identify as gender non-conforming. It is sometimes seen as an umbrella term for non-binary genders, such as in the initialism "TGNC" (trans and gender non-conforming)`,
		number: 53
	},
	ceterosexual: {
		name: 'Ceterosexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			},
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/ceterosexual.png',
		shortDescription: loremShortDescriptionText,
		number: 54
	},
	polyamorous: {
		name: 'Polyamorous',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/polyamorous.png',
		shortDescription: loremShortDescriptionText,
		number: 55
	},
	genderflor: {
		name: 'Genderflor',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/genderflor.png',
		shortDescription: loremShortDescriptionText,
		number: 56
	},
	genderfaun: {
		name: 'Genderfaun',
		category: [''],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://gender.fandom.com/wiki/Genderfaun',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/genderfaun.png',
		shortDescription: `Genderfaun (or Genderfawn) is a form of genderfluidity that does not encompass women-aligned, fiaspec genders, or anything similar. Genderfaun individuals tend not to feel fingenders unless said gender happens to also be man-aligned too (like rosboy for example). Genderfaun is under the genderfaunet umbrella. Two subsets of genderfaun are marfluid and wistrafluid.`,
		number: 57
	},
	aromantic: {
		name: 'Aromantic',
		category: [сategories.romanticOrientation],
		description: [
			`The aromantic spectrum, also known as "aro-spec", ranges from aromantic to alloromantic, referring to people who regularly and consistently experience romantic attraction. People within the aromantic spectrum are part of a community that has much in common. They may use the label aromantic as a close fit for their experiences or use other labels that further describe them.`,
			``
		],
		flagInfo: {
			description: [
				' The first proposed aromantic flag had four stripes. This flag was later changed because it closely resembled the Rastafarian flag, and because it had a stripe representing alloromantics.',
				'Cameron Whimsy designed second aromantic flag and its modified version. Both are five-striped flags with shared top and bottom stripes, but the center stripe was changed from yellow to white. The meanings changed slightly with the center stripe change.'
			],
			colors: [
				{
					color: 'Green',
					description:
						'because it is the opposite of red, the most commonly associated romance color.'
				},
				{
					color: 'Yellow',
					description: 'representing platonic love'
				},
				{
					color: 'Orange',
					description: 'grayromantics, because it is in between red and yellow.'
				},
				{
					color: 'Black',
					description: 'alloromantics that "reject traditional ideas of romance"'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Aromantic',
		etymology: [
			`The term aromantic uses the Latin prefix a- which means 'without' or 'not'. In a literal sense, it means 'a lack of romance'`
		],
		references: [
			{
				name: `Hardell, Ash. The ABC's of LGBT+`,
				link: '',
				source: 'Mango Media Inc., 2016'
			},
			{
				name: 'Asexual Visibility and Education Network: "Romantic Orientations".',
				link: 'https://www.asexuality.org/?q=romanticorientation',
				source: 'The Asexual Visibility and Education Network.'
			},
			{
				name: '"About Aromanticism".',
				link: 'https://web.archive.org/web/20220220224321/http://www.arospecweek.org/about-aromanticism/',
				source: 'Aromantic Spectrum Awareness Week.'
			},
			{
				name: 'CRWflags.com lists the meaning of Aro flags',
				link: 'https://www.crwflags.com/fotw/flags/qq-arom.html',
				source: 'CRWflags.com'
			},
			{
				name: `"i've been reading up on a lot of the discussion about the aro flag"`,
				link: 'https://web.archive.org/web/20220124152825/https://cameronwhimsy.tumblr.com/post/75868343112/ive-been-reading-up-on-a-lot-of-the-discussion',
				source: 'Whimsy, Cameron'
			},
			{
				name: '"Newer and more improved aro flag"',
				link: 'https://web.archive.org/web/20220120152925/https://cameronwhimsy.tumblr.com/post/102698477928/whoops-yeah-i-just-realised-i-never-actually-made',
				source: 'Whimsy, Cameron'
			}
		],

		brandColor: '#702282',
		alternativeName: ['Aro'],
		specifics: {
			genders: ['Any'],
			attractedTo: ['None or limited'],
			attractionType: [''],
			spectrumOrUmbrella: ['Aromantic spectrum']
		},
		relatedTerms: {
			differentFrom: ['Asexual', 'Non-amory'],
			associatedRomanticism: ['Asexual']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/aromantic.png',
		shortDescription: `Aromantic, often shortened to aro, describes people who do not experience romantic attraction, or if not strictly aromantic, little to no romantic attraction. One of the meanings of the A in LGBTQIA+ is Aromantic. Aromanticism is a romantic orientation and may involve forms of attraction that are not necessarily romantic, or interests in relationships that are intimate in other ways. There is no singular experience of aromanticism.`,
		number: 58
	},
	alexigender: {
		name: 'Alexigender',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/alexigender.png',
		shortDescription: loremShortDescriptionText,
		number: 59
	},
	libramasculine: {
		name: 'Libramasculine',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/libramasculine.png',
		shortDescription: loremShortDescriptionText,
		number: 60
	},
	queerPlatonicRelationship: {
		name: 'Queer platonic relationship',
		category: [''],
		description: [
			`It may involve a greater degree of intimacy or commitment than a platonic friendship, but does not always include sexual or romantic elements. Queerplatonic relationships are not limited to the aromantic community, and also includes asexuals and those on the asexual spectrum, among other gender and sexual identities.`
		],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Queerplatonic_relationship',
		etymology: [''],
		references: [
			{
				name: 'What Does A Queerplatonic Relationship Look Like?',
				link: 'https://divethru.com/what-does-a-queerplatonic-relationship-look-like/',
				source: 'divethru.com'
			},
			{
				name: 'From Ace to Ze: The Little Book of LGBT Terms. ',
				link: '',
				source: 'Dyer, Harriet / Summersdale Publishers, Ltd, May 10, 2018.'
			},
			{
				name: 'Understanding the Asexual Community',
				link: 'https://www.hrc.org/resources/understanding-the-asexual-community',
				source: 'hrc.org'
			},
			{
				name: `Queerplatonic Relationship: What It Is & 25 Signs You're In One`,
				link: 'https://www.lovepanky.com/my-life/relationships/queer-platonic-relationship',
				source: 'lovepanky.com'
			},
			{
				name: 'The A-Z of Gender and Sexuality',
				link: '',
				source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
			},
			{
				name: 'Queerplatonic Relationships: A New Term for an Old Custom',
				link: 'https://www.psychologytoday.com/us/blog/bound-together/202109/queerplatonic-relationships-new-term-old-custom',
				source: 'Goerlich, Stefani / psychologytoday.com'
			},
			{
				name: 'Facts you should know about aromantic people from',
				link: 'https://www.them.us/story/facts-you-should-know-about-aromantic-people',
				source: 'them.us'
			},
			{
				name: `If you're aromantic — here's what that means`,
				link: 'https://www.insider.com/aromantic',
				source: 'Kennedy, Madeline / Insider Health'
			},
			{
				name: 'First Women, Women in Education - Romantic Friendship',
				link: 'https://www.womenhistoryblog.com/2016/04/romantic-friendship.html',
				source: 'History of American Women'
			},
			{
				name: 'A Visual History of Romantic Friendship',
				link: 'https://www.themarginalian.org/2014/08/25/romantic-friendship/',
				source: 'Maria Popova / The Marginalian'
			},
			{
				name: 'Are we dating? : an exploratory study of nonsexual, passionate friendships between women',
				link: 'https://scholarworks.smith.edu/theses/1317/',
				source: 'Chupkowski, Linda Christine / Masters Thesis, Smith College'
			},
			{
				name: 'Coyote, The Ace Theist: "A Genealogy of Queer Platonic" ',
				link: 'https://theacetheist.wordpress.com/2019/03/09/a-genealogy-of-queerplatonic/',
				source: 'theacetheist.wordpress.com'
			}
		],

		brandColor: '#702282',
		alternativeName: ['QPR, Quasiplatonic relationship'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['Aromantic spectrum']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['Aromantic']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/queerplatonic_Relationship.png',
		shortDescription: `Queerplatonic relationships is a close but non-sexual, non-romantic relationship that is beyond what most would consider to be a friendship. It consists of emotional commitment and prioritization that is typically seen in a romantic relationship. People in queerplatonic relationships may be of any gender or sexual identity.`,
		number: 61
	},
	androgyne: {
		name: 'Androgyne',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The most common androgyne flag, coined by Tumblr user saveferris on September 10, 2014, has 3 colors. '
			],
			colors: [
				{
					color: 'Pink',
					description: 'femininity'
				},
				{
					color: 'Blue',
					description: 'masculinity'
				},
				{
					color: 'Purple',
					description: 'a combination of the both'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Androgyne',
		etymology: [
			'The word androgyne is a combination of two Greek words: "andró" meaning "man", and "gynḗ" meaning "woman".'
		],
		references: [
			{
				name: `The ABC's of LGBT+.`,
				link: '',
				source: 'Hardell, Ash. / Mango Media Inc., 2016.'
			},
			{
				name: 'Androgyne',
				link: 'https://web.archive.org/web/20211031231811/https://translanguageprimer.com/androgyne',
				source: 'The Trans Language Primer'
			},
			{
				name: 'Andro- Definition & Meaning',
				link: 'https://www.dictionary.com/browse/andro-',
				source: 'dictionary.com'
			},
			{
				name: 'Gyne- Definition & Meaning',
				link: 'https://www.dictionary.com/browse/gyne-',
				source: 'dictionary.com'
			},
			{
				name: 'Not This, Not That',
				link: 'https://web.archive.org/web/20041209234238/http://www.chaparraltree.com/raq/notthis.shtml',
				source: 'Carter, Raphael / chaparraltree.com'
			},
			{
				name: 'Autobiography of an Androgyne. Herring, Scott, Rutgers University Press, February 22nd 2008.',
				link: 'https://www.goodreads.com/en/book/show/3063427-autobiography-of-an-androgyne',
				source: 'Werther, Ralph / '
			},
			{
				name: 'The Trouble With Tribbles',
				link: 'http://www.chakoteya.net/StarTrek/42.htm',
				source: 'chakoteya.net'
			}
		],

		brandColor: '#702282',
		alternativeName: ['Andro'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['Non-binary']
		},
		relatedTerms: {
			differentFrom: ['Bigender', 'Intersex', 'Neutrois'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/androgyne.png',
		shortDescription: `Androgyne is a gender identity in which a person has a gender that is a blend of both binary genders. People who are androgyne may describe this as being "between" female and male, man and woman, masculine and feminine, or simply 'in between.' They may also identify as neither feminine nor masculine, or neither female nor male.`,
		number: 62
	},
	librafeminine: {
		name: 'Librafeminine',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/librafeminine.png',
		shortDescription: loremShortDescriptionText,
		number: 63
	},
	freysexual: {
		name: 'Freysexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/freysexual.png',
		shortDescription: loremShortDescriptionText,
		number: 64
	},
	quoisexual: {
		name: 'Quoisexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/quoisexual.png',
		shortDescription: loremShortDescriptionText,
		number: 65
	},
	trigender: {
		name: 'Trigender',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The flag was created by an unknown individual on or before July 4, 2015, and uploaded by DeviantArt user Pride-Flags. The meaning of the colors is unknown.'
			],
			colors: [
				{
					color: 'Pink',
					description: 'feminine genders'
				},
				{
					color: 'Purple ',
					description: 'masculine genders'
				},
				{
					color: 'Green',
					description: 'neutral or non-binary genders'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Trigender',
		etymology: [
			'The exact origin of the term "trigender" is unknown, but it has been mentioned as early as 1998. The prefix tri- means three, so "trigender" literally means "three gender".'
		],
		references: [
			{
				name: 'Trans* Identities and Lives Glossary',
				link: 'https://web.uri.edu/gender-sexuality/resources/lgbtqa-glossary/trans-101-glossary/',
				source: 'University of Rhode Island'
			},
			{
				name: 'Trans Liberation: Beyond Pink or Blue',
				link: '',
				source: 'Leslie Feinberg / Beacon Press, 1998'
			},
			{
				name: 'Pride-Flags: "Trigender (1)"',
				link: 'https://www.deviantart.com/pride-flags/art/Trigender-1-543983082?ga_changes=1&ga_submit_new=10%253A1470014621&ga_type=edit',
				source: 'deviantart.com'
			}
		],

		brandColor: '#702282',
		alternativeName: ['Tri-gender'],
		specifics: {
			genders: ['Any three'],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['Transgender', 'Non-binary', 'Multigender']
		},
		relatedTerms: {
			differentFrom: ['Bigender', 'Genderfluid'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/trigender.png',
		shortDescription: `Trigender is a non-binary gender identity that describes a person who experiences three distinct genders. These genders can be binary or non-binary, and an individual may or may not be fluid between them. Trigender may also relate to the concept of a "third gender" which is not male, female, or between the two.`,
		number: 66
	},
	mavierique: {
		name: 'Maverique',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The maverique flag was designed by Vesper H. on June 16, 2014. The color meanings are as follows'
			],
			colors: [
				{
					color: 'Yellow',
					description: 'Independent from other genders'
				},
				{
					color: 'White',
					description: 'Autonomy and independence, especially from the gender binary'
				},
				{
					color: 'Orange',
					description: `Inner conviction in regard to one's gender`
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Maverique',
		etymology: [
			'Maverique is a combination of the word "maverick" and the French suffix "-ique". Two definitions for maverick include "a lone dissenter [...] who takes an independent stand apart from [their] associates" and "unorthodox, unconventional, or nonconformist". The suffix "-ique" is used to form adjectives from nouns, though it had been noted that maverique can be used as both a noun and an adjective.',
			'The intended pronunciation for maverique is “mav-REEK," making it rhyme with words like “antique”.'
		],
		references: [
			{
				name: `Ash. The ABC's of LGBT+`,
				link: '',
				source: 'Hardell, Ash.  / Mango Media Inc.'
			},
			{
				name: 'What is maverique',
				link: 'https://web.archive.org/web/20210606173451/https://maveriques.tumblr.com/maverique',
				source: 'Vesper H'
			},
			{
				name: 'Maverique --- Definition Reworded',
				link: 'https://queerascat.tumblr.com/post/89448452041/maverique-definition-reworded-062114-a',
				source: 'queerascat.tumblr.com'
			},
			{
				name: 'Maverique',
				link: 'https://orientando.org/listas/lista-de-generos/maverique/',
				source: 'orientando.org'
			},
			{
				name: 'Maverique',
				link: 'https://web.archive.org/web/20210606184203/https://nibi.space/maverique',
				source: 'nibi.space.'
			},
			{
				name: 'Maverick Definition & Meaning',
				link: 'https://www.dictionary.com/browse/maverick',
				source: 'dictionary.com'
			},
			{
				name: '-ique (French, Old French): meaning, origin, translation',
				link: 'https://www.wordsense.eu/-ique/',
				source: 'wordsense.eu'
			},
			{
				name: 'What Does Maverique Mean?',
				link: 'https://queerintheworld.com/what-does-maverique-mean/',
				source: 'queerintheworld.com'
			},
			{
				name: 'maverique" v3.0',
				link: 'https://web.archive.org/web/20210419130951/http://queerascat.com/2014/06/maverique-v3-0/',
				source: 'queerascat.com'
			},
			{
				name: 'maverique" v1.0',
				link: 'https://web.archive.org/web/20210513222832/http://queerascat.com/2014/06/maverique-v1-0/',
				source: 'queerascat.com'
			},
			{
				name: 'The maverique flag',
				link: 'https://web.archive.org/web/20210513231006/http://queerascat.com/2014/06/the-maverique-flag/',
				source: 'Vesper H / queerascat.com'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Aliagender', 'Aporagender', 'Neutrois', 'Agender'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/mavierique.png',
		shortDescription: `Maverique is a non-binary gender identity that is defined by autonomy and conviction about one's inner sense of self. It is not related to or derived from manhood or womanhood, but also is not neutrois or agender.`,
		number: 67
	},
	bisexual: {
		name: 'Bisexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: 'Pink ',
					description: 'Sexual attraction to the same sex only (gay and lesbian).'
				},
				{
					color: 'Blue ',
					description: 'Sexual attraction to the opposite sex only (straight).'
				},
				{
					color: 'Purple ',
					description: 'Sexual attraction to both sexes (bi).'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Bisexual',
		etymology: [
			'"Bisexual" comes from the roots "bi-", meaning "two" or "double", and "-sexual". The term "bisexuality", when referring to sexual orientation, was first used by neurologist Charles Gilbert Chaddock in his English translation of Psychopathia Sexualis in 1892, which contained a theory that the brain of a person attracted both to their own sex and the opposite sex must be partly of another sex and thus "hermaphroditic". Earlier, it was a term in botany for "having male and female parts".'
		],
		references: [
			{
				name: '"Understanding Bisexuality"',
				link: 'https://www.apa.org/pi/lgbt/resources/bisexual',
				source: 'American Psychological Association'
			},
			{
				name: '"What is Bisexuality?"',
				link: 'https://biresource.org/bi-info/what-is-bisexuality',
				source: 'Bisexual Resource Center'
			},
			{
				name: '"What is Bisexuality?"',
				link: 'https://bi.org/en/101/bisexuality',
				source: 'bi.org.'
			},
			{
				name: 'Psychopathia Sexualis.',
				link: 'https://books.google.pl/books?id=9SYKAAAAIAAJ&redir_esc=y',
				source: 'Kraft-Ebbing, Richard.'
			},
			{
				name: 'M.. Memoir of Observations on the Plants denominated Cryptogamick.',
				link: 'https://www.jstor.org/stable/pdf/1004869.pdf',
				source: 'de Beauvois / American Philosophical Society, 1793'
			},
			{
				name: 'The History of the Bi Pride Flag',
				link: 'https://web.archive.org/web/20010801185547/http://biflag.com/Activism.asp',
				source: 'Michael Page'
			},
			{
				name: 'Queer x Design highlights 50 years of LGBT+ graphic design',
				link: 'https://www.dezeen.com/2019/10/23/queer-design-andrew-campbell-50-years-lgbt-graphic-design/',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: ['Any'],
			attractedTo: ['Two or more genders'],
			attractionType: ['Any'],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Omnisexual', 'Polysexual', 'Pansexual'],
			associatedRomanticism: ['Biromantic']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/bisexual.png',
		shortDescription: `Bisexuality is the sexual attraction to two or more genders on the gender spectrum. Some bisexual people have a preference toward one or several genders and some do not.`,
		number: 68
	},
	orientedAroace: {
		name: 'Oriented aroace',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: ['The oriented aroace flag created by biaroace on Tumblr'],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Aromantic_asexual#cite_note-AUREA:_All_Terms-1',
		etymology: [''],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/oriented_Aroace.png',
		shortDescription: `Oriented aroace refers to someone who is aromantic and asexual and never experiences romantic or sexual attraction, but does experience another form of attraction that is significant enough to acknowledge alongside their aroace orientation.`,
		number: 69
	},
	transFeminine: {
		name: 'Trans feminine',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Transfeminine',
		etymology: [
			`The term "transfeminine" may or may not have been coined by Jane Nance in 1985 in the article "TRANSFEMININE!!!", which was published in the journal The TV-TS Tapestry. Nance described being assigned male at birth and having a feminine identity, not a "basic male self-identity". However, the existing "transvestite" and "transsexual" terminology of the time was inadequate and did not account for not feeling like "a male dressing in women's clothes" when presenting as a woman, having a self-image as a woman, but lacking an interest in surgical transition. Nance wondered, "Do we need another term or category to cover my particular reality? Maybe! Could it be 'transfeminine' (a male who feels like a female, strictly undefined in relation to any issue of an operation) - perhaps!"`
		],
		references: [
			{
				name: `The ABC's of LGBT+`,
				link: '',
				source: 'Hardell, Ash / Mango Media Inc'
			},
			{
				name: 'TRANSFEMININE!!!". The TV-TS Tapestry: The Journal for Persons Interested in Crossdressing & Transsexualism.',
				link: 'https://archive.org/details/tvtstapestry47unse/page/30/mode/2up?q=transfeminine',
				source: 'Nance, Jane / Tiffany Club, 1985'
			}
		],
		brandColor: '#702282',
		alternativeName: ['Transfem'],
		specifics: {
			genders: ['Transgender Woman', 'AMAB Feminine-Aligned Nonbinary People'],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: ['Transgender'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/transfeminine.png',
		shortDescription: `Transfeminine, often abbreviated to transfem, refers to people who were assigned male at birth and have a gender identity, gender expression, or both that is predominantly feminine. Transfeminine people may or may not identify as female. It can be a standalone identity term or an umbrella term for certain identities, such as:

 * Transgender women
 * Non-binary people who feel their gender is feminine, whether entirely or partially
 * Genderfluid or multigender people who feel predominantly feminine
 * Demigirls`,
		number: 70
	},
	twospirit: {
		name: 'Two spirit',
		category: [сategories.sexualOrientation, categories.genderIdentity, categories.umbrellaTerm],
		description: [
			`While some use the term specifically as it relates to the cultural roles of individuals who embody both spirits, Two-Spirit is also used to describe Aboriginal LGBTQIA+ people. It reflects traditionally Aboriginal gender diversity, including the fluid nature of gender, sexual identity, and other identities and how it connects with spirituality.`,
			`Two-Spirit is also an ancient teaching among Indigenous people. According to Elders' teachings, some people were gifted by carrying two spirits; that of a male and female. These members had roles in their community that were not traditionally that of their assigned gender. For example, women engaged in tribal warfare, women married women, and men married other men. Two-Spirited people were revered in the community and respected as fundamental components of these cultures and societies.`
		],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Two-Spirit',
		etymology: [
			'The term Two-Spirit was proposed during the third annual international LGBT Native American gathering in 1990 in Winnipeg, Canada, by Elder Myra Laramee. It was proposed as an Indigenously defined pan-Native North American term referring to the diversity of Aboriginal LGBTQIA+ identities as well as culturally-specific non-binary gender identities. The term does not diminish the tribal-specific names, roles, and traditions that specific nations have for Two-Spirit tribal members. The Lakota name is winkte while the Navajo name is nadleeh.',
			'Sometime in the late twentieth century, non-Native anthropologists used the term berdache to identify the individuals living outside the gender role of their biological sex. It derived from the French word bardache meaning "passive homosexual" or even "male prostitutes". Bardache, in turn, derived from the Persian barda meaning "captive", "prisoner of war", or "slave". The term berdache is now considered outdated and offensive in its use.'
		],
		references: [
			{
				name: 'What it really means to identify as Two-Spirit in Indigenous culture',
				link: 'https://matadornetwork.com/read/two-spirit-indigenous-culture/',
				source: 'John Garry / matadornetwork.com'
			},
			{
				name: 'Re:Searching For LGBTQ2S+ Health: "Two-Spirit Community"',
				link: 'https://web.archive.org/web/20220120174915/https://lgbtqhealth.ca/community/two-spirit.php',
				source: 'lgbtqhealth.ca'
			},
			{
				name: '"An Introduction to the Health of Two-Spirit People: Historical, contemporary and emergent issues"',
				link: 'https://www.nccih.ca/495/An_Introduction_to_the_Health_of_Two-Spirit_People__Historical,_contemporary_and_emergent_issues.nccih?id=156',
				source: 'Dr. Sarah Hunt'
			},
			{
				name: '2-Spirits: "2-Spirited People of the 1st Nations"',
				link: 'https://web.archive.org/web/20211126113044/http://www.2spirits.com/PDFolder/History.pdf',
				source: '2spirits.com'
			},
			{
				name: '"Two Spirited People of Manitoba Inc.".',
				link: 'https://twospiritmanitoba.ca/we-belong',
				source: 'twospiritmanitoba.ca'
			},
			{
				name: '8 Things You Should Know About Two Spirit People',
				link: 'https://indiancountrytoday.com/archive/8-misconceptions-things-know-two-spirit-people',
				source: 'Tony Enos / indiancountrytoday.com'
			},
			{
				name: 'Two-Spirit',
				link: 'https://courses.lumenlearning.com/culturalanthropology/chapter/two-spirit/',
				source: 'Lumen Learning / courses.lumenlearning.com'
			},
			{
				name: 'Definition of Berdache.',
				link: 'https://www.britannica.com/topic/berdache',
				source: 'Britannica / britannica.com'
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['']
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/two_Spirit.png',
		shortDescription: `Two-Spirit refers to a strictly Native identity that describes a person who identifies as having both a masculine and feminine spirit. It is an umbrella term used by some Indigenous people as a way to describe their sexual, gender, and/or spiritual identity. Two-Spirit is all-encompassing of LGBTQIA+ identities.`,
		number: 71
	},
	coeosexual: {
		name: 'Coeosexual',
		category: [сategories.sexuality, сategories.sexuality],
		description: [loremDescriptionText],
		flagInfo: {
			description: [''],
			colors: [
				{
					color: '',
					description: ''
				},
				{
					color: '',
					description: ''
				}
			]
		},
		linkOriginalWiki: '',
		etymology: [``],
		references: [
			{
				name: '',
				link: '',
				source: ''
			}
		],

		brandColor: '#702282',
		alternativeName: [''],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: [`Gender, Sexuality`]
		},
		relatedTerms: {
			differentFrom: [''],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/coeosexual.png',
		shortDescription: loremShortDescriptionText,
		number: 72
	},
	pangender: {
		name: 'Pangender',
		category: [сategories.genderIdentity],
		description: [loremDescriptionText],
		flagInfo: {
			description: [
				'The most known pangender flag was created by Cari Rez Lobo, known as pangendering on Tumblr. All colors of the flag are very light and bright, because the white color represents broad inclusion.'
			],
			colors: [
				{
					color: 'White',
					description:
						'has all the different colors in it, much like how pangender has all the genders in it.'
				},
				{
					color: 'Yellow ',
					description: 'all genders not related to female and male'
				},
				{
					color: 'Light red',
					description:
						'stands for the transition to the genders associated with the male and female binary'
				},
				{
					color: 'Violet ',
					description: 'transition to and combination of female and male.'
				}
			]
		},
		linkOriginalWiki: 'https://lgbtqia.fandom.com/wiki/Pangender',
		etymology: ['Pangender derives from the Greek prefix pan-, meaning "all" or "every".'],
		references: [
			{
				name: 'The A-Z of Gender and Sexuality: From Ace to Ze',
				link: '',
				source: 'Holleb, Morgan Lev Edward / Jessica Kingsley Publishers, 2019'
			},
			{
				name: 'Definition of Pan-',
				link: 'https://www.merriam-webster.com/dictionary/pan-',
				source: 'Merriam-Webster'
			},
			{
				name: 'The Flock: The Autobiography of a Multiple Personality',
				link: 'https://books.google.com/books?id=rt-kDQAAQBAJ&pg=PT11&lpg=PT11&dq=pangender+the+flock+book&source=bl&ots=p33LxsZnhC&sig=ACfU3U0T-ejIDkkrUBeQ2__BNSYGE19N7g&hl=en&sa=X&ved=2ahUKEwiQ_7_bro_2AhVkEEQIHYVZA7sQ6AF6BAgjEAM#v=onepage&q=pangender%20the%20flock%20book&f=false',
				source: 'Casey, Joan Frances / Ballantine Books, 2017.'
			},
			{
				name: 'What it means to be pangender',
				link: 'https://www.dailydot.com/irl/pangender-definition-pronouns/',
				source: 'Collyn Burke'
			},
			{
				name: 'Possible pangender pride flags',
				link: 'https://pangendering.tumblr.com/post/109400686126/possible-pangender-pride-flags',
				source: 'Lobo, Cari Rez '
			},
			{
				name: 'Pangender Definition - What Does Pangender Mean?',
				link: 'https://www.cosmopolitan.com/sexopedia/a36722153/pangender/',
				source: 'Sophia Melissa Caraballo Piñeiro'
			},
			{
				name: 'What Is Polygender? Polygender Definition',
				link: 'https://www.cosmopolitan.com/sex-love/a38832030/polygender/',
				source: 'Naydeline Mejia / cosmopolitan.com'
			}
		],
		brandColor: '#702282',
		alternativeName: ['Omnigender'],
		specifics: {
			genders: [''],
			attractedTo: [''],
			attractionType: [''],
			spectrumOrUmbrella: ['Multigender', 'Non-binary', 'Transgender']
		},
		relatedTerms: {
			differentFrom: ['Polygender', 'Pansexual'],
			associatedRomanticism: ['']
		},

		img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/flags/pangender.png',
		shortDescription: `Pangender is a gender identity defined as experiencing many or all genders. As an identity that is multigender—experiencing or having multiple genders—the number of genders experienced may be unknown or may fluctuate, and they may be experienced one at a time or simultaneously. Pangender falls under the non-binary and transgender umbrella terms.`,
		number: 73
	}
	// woman: {
	// 	name: 'woman',
	// 	category: [сategories.sexuality, сategories.sexuality],
	// 	description: [loremDescriptionText],
	// flagInfo: {
	//     description: [''],
	//     colors: [{
	//         color: '',
	//         description: ''
	//     }, {
	//         color: '',
	//         description: ''
	//     }],
	// },
	// linkOriginalWiki: '', etymology: [''],
	// references: [{
	//     name: '',
	//     link: '',
	// source: ''
	// }],
	// main: {
	//     ,
	//
	// },
	// brandColor: '#702282',
	// alternativeName: [''],
	// specifics: {
	//     genders: [''],
	//     attractedTo: [''],
	//     attractionType: [''],
	//     spectrumOrUmbrella: ['']
	// },
	// relatedTerms: {
	//     differentFrom: [''],
	//     associatedRomanticism: ['']
	// },
};


 
export default imgsInfo;