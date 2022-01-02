export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","grafitty.otf","img/about/om.png","img/about/partners.png","img/about/partner_listovka.png","img/about копия.svg","img/blog/blog_bg.png","img/blog/post_card.png","img/darkdruk.png","img/faq/faq_bg.png","img/faq_1.png","img/footer/logo_footer.png","img/glad_to_see_you.png","img/main/about/about_1.png","img/main/about/logo_about.png","img/main/principles/edu.png","img/main/principles/eko.png","img/main/principles/gamify.png","img/main/principles/progress.png","img/main/principles/reflect.png","img/main/sale.png","img/principles/coop.png","img/principles/education.png","img/principles/eko.png","img/principles/gamify.png","img/principles/progress.png","img/principles/reflect.png","img/social/fb_mini.png","img/social/insta_mini.png","img/social/in_mini.png","img/social/telega_mini.png","img/social/tweeter_mini.png","img/social/youtube_mini.png","img/workshop/workshop.png","smui-dark.css","smui.css"]),
	_: {
		mime: {".png":"image/png",".otf":"font/otf",".svg":"image/svg+xml",".css":"text/css"},
		entry: {"file":"start-4615bc4a.js","js":["start-4615bc4a.js","chunks/vendor-80f08c05.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
				pattern: /^\/support\/?$/,
				params: null,
				path: "/support",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/shop\/?$/,
				params: null,
				path: "/shop",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/faq\/?$/,
				params: null,
				path: "/faq",
				a: [0,5],
				b: [1]
			}
		]
	}
};
