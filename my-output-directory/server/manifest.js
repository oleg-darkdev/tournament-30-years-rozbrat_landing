export const manifest = {
	appDir: "_app",
	assets: new Set(["grafitty-webfont.otf","grafitty-webfont.woff","grafitty-webfont.woff2","img/about/om.png","img/about/partners.png","img/about/partner_listovka.png","img/about копия.svg","img/bg/main_bg.png","img/blog/blog_bg.png","img/blog/post_card.png","img/darkdruk.png","img/faq/faq_bg.png","img/faq.png","img/footer/logo_footer.png","img/games/a/banners/persons_banner.png","img/games/a/persons/agorist_person.png","img/games/a/persons/capitalist_person.png","img/games/a/persons/ecolog_person.png","img/games/a/persons/egoist_person.png","img/games/a/persons/feminist_person.png","img/games/a/persons/maximalist_person.png","img/games/a/persons/mutuelist_person.png","img/games/a/persons/qweer_person.png","img/games/a/persons/sindikalist_person.png","img/games/a/persons/technokrat_person.png","img/games/banners/A_banner.png","img/games/banners/eco_banner.png","img/games/banners/fnb_banner.png","img/games/banners/gulag_banner.png","img/games/banners/hackerspace_banner.png","img/games/banners/katyn_banner.png","img/games/banners/ksg_banner.png","img/games/banners/lgbt_banner.png","img/games/banners/ror_banner.png","img/games/banners/squat_banner.png","img/games/banners/wikileaks_banner.png","img/games/banners/wtb_banner.png","img/games/banners/yakusa_banner.png","img/games/logos/12.262.png","img/games/logos/12.262_logo.png","img/games/logos/A.png","img/games/logos/A_logo.png","img/games/logos/eco.png","img/games/logos/eco_logo.png","img/games/logos/favicon.png","img/games/logos/fnb.png","img/games/logos/fnb_logo.png","img/games/logos/gulagUSSR_logo.png","img/games/logos/hackerspace.png","img/games/logos/hackerspace_logo.png","img/games/logos/katyn.png","img/games/logos/katyn_logo.png","img/games/logos/lgbt.png","img/games/logos/lgbt_logo.png","img/games/logos/ror.png","img/games/logos/ror_logo.png","img/games/logos/squat.png","img/games/logos/squat_logo.png","img/games/logos/wikileaks.png","img/games/logos/wikileaks_logo.png","img/games/logos/wtb.png","img/games/logos/wtb_logo.png","img/games/logos/yakusa.png","img/games/logos/yakusa_logo.png","img/games.png","img/glad_to_see_you.png","img/handmade.png","img/logo.png","img/logo.svg","img/main/about/about_1.png","img/main/about/logo_about.png","img/main/principles/edu.png","img/main/principles/eko.png","img/main/principles/gamify.png","img/main/principles/progress.png","img/main/principles/reflect.png","img/main/sale.png","img/principles/coop.png","img/principles/education.png","img/principles/eko.png","img/principles/gamify.png","img/principles/progress.png","img/principles/reflect.png","img/social/etsy_black.png","img/social/etsy_tq.png","img/social/fb_black.png","img/social/fb_tq.png","img/social/insta_black.png","img/social/insta_tq.png","img/social/in_black.png","img/social/in_tq.png","img/social/patronite_black.png","img/social/patronite_tq.png","img/social/pinterest_black.png","img/social/pinterest_tq.png","img/social/telega_black.png","img/social/telega_tq.png","img/social/tweeter_black.png","img/social/tweeter_tq.png","img/social/youtube_black.png","img/social/youtube_tq.png","img/support.png","img/workshop/workshop.png","img/workshops.png","smui-dark.css","webfontkit-20220117-171533/generator_config.txt","webfontkit-20220117-171533/grafitty-demo.html","webfontkit-20220117-171533/specimen_files/grid_12-825-55-15.css","webfontkit-20220117-171533/specimen_files/specimen_stylesheet.css","webfontkit-20220117-171533/stylesheet.css"]),
	_: {
		mime: {".otf":"font/otf",".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".svg":"image/svg+xml",".css":"text/css",".txt":"text/plain",".html":"text/html"},
		entry: {"file":"start-d52b6ac7.js","js":["start-d52b6ac7.js","chunks/vendor-fbdada6f.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/workshops\/?$/,
				params: null,
				path: "/workshops",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/auctions\/([^/]+?)\/?$/,
				params: (m) => ({ auction: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/handmade\/?$/,
				params: null,
				path: "/handmade",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/support\/?$/,
				params: null,
				path: "/support",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/games\/([^/]+?)\/?$/,
				params: (m) => ({ game: m[1]}),
				path: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/games\/?$/,
				params: null,
				path: "/games",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/shop\/expansions\/?$/,
				params: null,
				path: "/shop/expansions",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/shop\/?$/,
				params: null,
				path: "/shop",
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/faq\/?$/,
				params: null,
				path: "/faq",
				a: [0,11],
				b: [1]
			}
		]
	}
};
