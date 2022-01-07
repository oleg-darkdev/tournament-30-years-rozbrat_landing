export const manifest = {
	appDir: "_app",
	assets: new Set(["grafitty.otf","img/about/om.png","img/about/partners.png","img/about/partner_listovka.png","img/about копия.svg","img/blog/blog_bg.png","img/blog/post_card.png","img/darkdruk.png","img/faq/faq_bg.png","img/faq_1.png","img/footer/logo_footer.png","img/games/banners/A_banner.png","img/games/banners/eco_banner.png","img/games/banners/fnb_banner.png","img/games/banners/gulag_banner.png","img/games/banners/hackerspace_banner.png","img/games/banners/katyn_banner.png","img/games/banners/ksg_banner.png","img/games/banners/ror_banner.png","img/games/banners/squat_banner.png","img/games/banners/wikileaks_banner.png","img/games/banners/wtb_banner.png","img/games/banners/yakusa_banner.png","img/games/logos/12.262.png","img/games/logos/12.262_logo.png","img/games/logos/A.png","img/games/logos/A_logo.png","img/games/logos/eco.png","img/games/logos/eco_logo.png","img/games/logos/favicon.png","img/games/logos/fnb.png","img/games/logos/fnb_logo.png","img/games/logos/gulagUSSR_logo.png","img/games/logos/hackerspace.png","img/games/logos/hackerspace_logo.png","img/games/logos/katyn.png","img/games/logos/katyn_logo.png","img/games/logos/lgbt.png","img/games/logos/lgbt_logo.png","img/games/logos/ror.png","img/games/logos/ror_logo.png","img/games/logos/squat.png","img/games/logos/squat_logo.png","img/games/logos/wikileaks.png","img/games/logos/wikileaks_logo.png","img/games/logos/wtb.png","img/games/logos/wtb_logo.png","img/games/logos/yakusa.png","img/games/logos/yakusa_logo.png","img/glad_to_see_you.png","img/main/about/about_1.png","img/main/about/logo_about.png","img/main/principles/edu.png","img/main/principles/eko.png","img/main/principles/gamify.png","img/main/principles/progress.png","img/main/principles/reflect.png","img/main/sale.png","img/principles/coop.png","img/principles/education.png","img/principles/eko.png","img/principles/gamify.png","img/principles/progress.png","img/principles/reflect.png","img/social/etsy.png","img/social/fb_mini.png","img/social/insta_mini.png","img/social/in_mini.png","img/social/patronite.png","img/social/pinterest.png","img/social/telega_mini.png","img/social/tweeter_mini.png","img/social/youtube_mini.png","img/support.png","img/workshop/workshop.png","smui-dark.css","smui.css"]),
	_: {
		mime: {".otf":"font/otf",".png":"image/png",".svg":"image/svg+xml",".css":"text/css"},
		entry: {"file":"start-703bb958.js","js":["start-703bb958.js","chunks/vendor-75a52fb2.js"],"css":["assets/start-61d1577b.css"]},
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
			() => import('./nodes/10.js')
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
				pattern: /^\/handmade\/?$/,
				params: null,
				path: "/handmade",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/support\/?$/,
				params: null,
				path: "/support",
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/games\/eco\/?$/,
				params: null,
				path: "/games/eco",
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/games\/?$/,
				params: null,
				path: "/games",
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/shop\/expansions\/?$/,
				params: null,
				path: "/shop/expansions",
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/shop\/?$/,
				params: null,
				path: "/shop",
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/faq\/?$/,
				params: null,
				path: "/faq",
				a: [0,10],
				b: [1]
			}
		]
	}
};
