<script>
	import Policy from './Policy.svelte'


	export let merchPolicy,
refundPolicy,
privacyPolicy,
shippingPolicy,
termsOfService;


let PolicyText = {
		heading: '',
		lastUpdate: '',
		preview: '',
		text: [
				{
				title: '',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
			{
				title: '',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
			{
				title: '',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
		]
};

	let merchPolicyText = {
		heading: 'DarkDev Games Policy on Fan Art and Merchandise',
		lastUpdate: 'Jan 26, 2021',
		preview: 'We at Leder Games feel grateful for the communities that have been built around our games. With passion, creativity, and ambition, we created the worlds of Root, Vast, Fort, and Oath that you have all come to know and enjoy now. We can only appreciate that our fans share this same passion to expand and amplify their game experiences with fan creations. In order to protect the art and IP of our work, we ask that the following guidelines be followed in regard to the sale of merchandise related to our works:',
		text: [
			{
				title: 'Art Use in Items for Sale',
				subtitle: '',
				text: [
					{
						main: 'Use of our official art or assets from our games such as logos, character art, component art, iconography, etc. are prohibited.',
						sub: [
							'Traced, digitally manipulated (i.e. skewed, flipped, mirrored, etc), vectorized, reproduced, or any other edit in nature to any existing artwork are also prohibited.'						]
					},
					{main: 'Unique and artistic interpretations of our art, characters, games, and any related features or gameplay mechanics are allowed.', sub: ''},

				]
			},
			// 					{main: '', sub: ''},

			{
				title: 'Production and Prohibited Merchandise',
				subtitle: '',
				text: [
					{main: 'Items may not be mass produced and must be produced on an individual and/or hand-made level unless with our express permission. ', sub: ['Professional, large, or manufacturing scale machinery are not permitted', '3D printing, laser etching, or other like machinery on an individual or small operation scale are allowed']},
					{main: 'Items such as figures or miniatures (for collectible, display, or gameplay use) are not permitted', sub: []},
					{main: 'T-Shirts, apparel, clothing, and other wearable items on a mass-produced scale are not permitted and must also indicate a limited run or limited period of availability', sub: ['Use of apparel services that sell and print on your behalf such as Threadless and Redbubble are not permitted']},
					{main: 'No items that are similar to our official products and accessories on our Leder Games site or Leder Games’ authorized licensees are allowed.', sub: []},
				]
			},
			{
				title: 'Product Listing Guidelines',
				subtitle: '',
				text: [
					{main: 'Ensure that your items are visibly and clearly marked as “Unofficial” in both title and item description. ', sub: ['Item descriptions must also describe that no authorization from our company was obtained in relation to its production or creation.', 'Item name and description cannot devalue the quality of our officially produced works or components such as “component upgrade.”']},
					{main: 'Imagery of our official products may not be used unless necessary to demonstrate use of the fan-made item (e.g. inserts)', sub: []},

				]
			},
			{
				title: 'Sale',
				subtitle: '',
				text: [
					{main: 'Items may not be sold in bulk to a single customer, such as retailers or wholesalers.', sub: []},
					{main: 'Items must be sold through an individual storefront that sells directly to customers such as conventions or an Etsy store', sub: ['Items may not be listed on large online sites that do not feature an “artist storefront” or similar feature to distinguish an individual or unique artist such as Amazon, Wish, Alibaba, etc.', 'Items may not be listed on large online sites that mass produce your items on your behalf such as Redbubble, Society6, Threadless, Displate, Zazzle, etc.']},
					{main: 'Items may not participate or seek funding through crowdfunding campaigns or platforms (e.g. Kickstarter). ', sub: []},
					{main: 'Do not associate Leder Games or any of our games or brands in works that are not in line with our company philosophy and values.  Do not associate our company with content that is illegal, sexist, racist, offensive, discriminatory, inappropriate, or in otherwise poor taste.', sub: []},
					{main: 'We reserve the right to ask you to remove any works for any reason. We reserve the right to update this policy at any time and ask that you comply with the most up to date contents of this page. ', sub: []},
					{main: 'If there are any questions or uncertainty in regard to this policy, please contact us at support@ledergames.com and we’ll get back to you as soon as we can. ', sub: []},
					{main: 'Please refer to the follow examples below to understand our policy in further detail.', sub: []},
				]
			},
		]
	},
	refundPolicyText = {
		heading: '',
		lastUpdate: '',
		preview: '',
		text: [
				{
				title: 'Returns',
				subtitle: '',
				text: [
					{main: 'Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.', sub: []},
					{main: 'To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To request a return, an email must be sent to support@ledergames.com for coordination.', sub: []},
					{main: 'To complete your return, we require a receipt or proof of purchase.', sub: []},
					{main: 'Please do not send your purchase back to the manufacturer.', sub: []},
				]
			},
				{
				title: 'Refunds ',
				subtitle: 'if applicable',
				text: [
					{main: 'Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.', sub: []},
					{main: 'If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.', sub: []}
				]

			},

			{
				title: 'Late or missing refunds',
				subtitle: 'if applicable',
				text: [
					{main: 'If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.', sub: []},
					{main: 'Next contact your bank. There is often some processing time before a refund is posted.', sub: []},
					{main: 'If you’ve done all of this and you still have not received your refund yet, please contact us at support@ledergames.com.', sub: []},
				]
			},
			{
				title: 'Exchanges',
				subtitle: 'if applicable',
				text: [
					{main: 'We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@ledergames.com.', sub: []},
				]
			},
						{
				title: 'Gifts',
				subtitle: '',
				text: [
					{main: 'If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a store credit for the value of your return. Once the returned item is received, a credit code will be e-mailed to you.', sub: []},
					{main: 'If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.', sub: []},
				]
			},
			{
				title: 'Shipping',
				subtitle: '',
				text: [
					{main: 'You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.', sub: []},
					{main: 'Depending on where you live, the time it may take for your exchanged product to reach you, may vary.', sub: []},
					{main: 'If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.', sub: []},
				]
			},
		]
},
privacyPolicyText = {
		heading: 'Privacy policy',
		lastUpdate: '',
		preview: 'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from leder-games.myshopify.com (the “Site”).',
		text: [
				{
				title: 'PERSONAL INFORMATION WE COLLECT',
				subtitle: '',
				text: [
					{main: 'When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.', sub: ['', '']},
					{main: 'Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information”.', sub: ['', '']},
					{main: 'When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.', sub: ['', '']},
					{main: 'We collect Device Information using the following technologies:', sub: ['“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.', '“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.', '“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.']},
				]
			},
			{
				title: 'HOW DO WE USE YOUR PERSONAL INFORMATION?',
				subtitle: '',
				text: [
					{main: 'We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). ', sub: ['', '']},
					{main: 'We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).', sub: ['', '']},
					{main: 'Additionally, we use this Order Information to:', sub: ['Communicate with you', 'Screen our orders for potential risk or fraud', 'When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services']},
				]
			},
			{
				title: 'SHARING YOUR PERSONAL INFORMATION',
				subtitle: '',
				text: [
					{main: 'We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store—you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy.', sub: ['', '']},
					{main: 'We also use Google Analytics to help us understand how our customers use the Site -- you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.', sub: ['', '']},
					{main: 'Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.', sub: ['', '']},
				]
			},
			{
				title: 'BEHAVIORAL ADVERTISING',
				subtitle: '',
				text: [
					{main: 'As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.', sub: ['', '']},
					{main: 'Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.', sub: ['', '']},
					{main: 'You can opt out of targeted advertising by using the links below:', sub: ['Facebook: https://www.facebook.com/settings/?tab=ads', 'Google: https://www.google.com/settings/ads/anonymous', 'Bing: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads']},
				]
			},
			{
				title: 'DO NOT TRACK',
				subtitle: '',
				text: [
					{main: 'Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.', sub: ['', '']},
				]
			},
			{
				title: 'YOUR RIGHTS',
				subtitle: '',
				text: [
					{main: 'If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.', sub: ['', '']},
					{main: 'Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.', sub: ['', '']},
				]
			},
						{
				title: 'DATA RETENTION',
				subtitle: '',
				text: [
					{main: 'When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.', sub: ['', '']},
				]
			},
			{
				title: 'CHANGES',
				subtitle: '',
				text: [
					{main: 'We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.', sub: ['', '']},
					{main: 'MINORS', sub: ['The Site is not intended for individuals under the age of 13.']},
					{main: 'CONTACT US', sub: ['For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at support@darkdevgames.com']},
				]
			},
		]
},
shippingPolicyText = {
		heading: 'Shipping policy',
		lastUpdate: '',
		preview: '',
		text: [
				{
				title: 'Pre-Orders',
				subtitle: '',
				text: [
					{main: 'Please note that any orders containing pre-order products will not ship until the entirety of the order contents are in hand and ready to ship. We will do our best to provide accurate timelines on when we expect pre-order product to reach in-stock status.', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
			{
				title: 'US',
				subtitle: '',
				text: [
					{main: 'Orders to the US are for a flat fee of $10 USD. For unusually large or heavy orders, additional postage rates may apply and communication will be made to your email provided on your order if such is the case. ', sub: ['', '']},
					{main: 'Orders generally have a 2-5 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.', sub: ['', '']},
					{main: 'Please allow 3–7 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
			{
				title: 'Canada',
				subtitle: '',
				text: [
					{main: 'Orders to Canada under $100 USD ship for a fee of $15 USD', sub: ['', '']},
					{main: 'Orders to Canada between $100-$175 USD ship for a fee of $20 USD', sub: ['', '']},
					{main: 'Orders to Canada above $175 USD ship for a fee of $25 USD', sub: ['', '']},
					{main: 'Orders generally have a 2–5 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.', sub: ['', '']},
					{main: 'Please allow 7-10 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.', sub: ['', '']},
					{main: 'Orders ship from the US and may be subject to customs fees upon arrival.', sub: ['', '']},
				]
			},
						{
				title: 'Europe',
				subtitle: '',
				text: [
					{main: 'Orders to Europe under $30 USD ship for a fee of $10 USD', sub: ['', '']},
					{main: 'Orders to Europe between $30-$150 USD ship for a fee of $15 USD', sub: ['', '']},
					{main: 'Orders to Europe between $150–$300 USD ship for a fee of $20 USD', sub: ['', '']},
					{main: 'Orders to Europe above $300 USD ship for a fee of $30 USD', sub: ['', '']},
					{main: 'Orders generally have a 2–5 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.', sub: ['', '']},
					{main: 'Please allow 7–10 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.', sub: ['', '']},
					{main: 'Orders to Europe ship from Germany and do not incur any additional tax or customs fees upon arrival. Tax laws to the UK are unchanged until Dec 31, 2020.', sub: ['', '']},
				]
			},
						{
				title: 'Asia',
				subtitle: '',
				text: [
					{main: 'Orders to Asia under $150 USD ship for a fee of $40 USD ', sub: ['', '']},
					{main: 'Orders to Asia above $150 USD ship for a fee of $50-$60 USD, depending on the destination country', sub: ['', '']},
					{main: 'Orders generally have a 7–10 business day processing time from the time you make your order. Holidays and large volumes of orders may affect how soon we can process orders and we will do our best to make proper announcements if we are seeing slower processing time than usual.', sub: ['', '']},
					{main: 'Please allow 7–21 business days for delivery from the time that your tracking information is received. Holidays may delay delivery estimates.', sub: ['', '']},
					{main: 'Orders to Asia will ship from Germany and all orders are subject to customs fees upon arrival', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
						{
				title: 'Russia',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
									{
				title: 'Belarus',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},

			]
			},
						{
				title: 'Other Regions',
				subtitle: '',
				text: [
					{main: 'We are unfortunately not expanding on our shipping regions at the moment but are still looking into reliable solutions and will update our shipping policy and site accordingly once we offer shipping to additional regions.', sub: ['', '']},
					{main: 'We currently do not offer shipping to some parts of Asia, South America, Africa, and some parts of Europe.  ', sub: ['', '']},
				]
			},
						{
				title: 'Lost, Missing, or Damaged Packages',
				subtitle: '',
				text: [
					{main: 'If any items from your order arrive damaged or missing, including missing or defective game pieces, please contact support@ledergames.com for a solution', sub: ['', '']},
				]
			},
		]
},
termsOfServiceText = {
		heading: '',
		lastUpdate: '',
		preview: '',
		text: [
				{
				title: '',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
			{
				title: '',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
			{
				title: '',
				subtitle: '',
				text: [
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
					{main: '', sub: ['', '']},
				]
			},
		]
};


// PolicyText = {
// 		heading: '',
// 		lastUpdate: '',
// 		preview: '',
// 		text: [
// 				{
// 				title: '',
// 				subtitle: '',
// 				text: [
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 				]
// 			},
// 			{
// 				title: '',
// 				subtitle: '',
// 				text: [
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 				]
// 			},
// 			{
// 				title: '',
// 				subtitle: '',
// 				text: [
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 					{main: '', sub: ['', '']},
// 				]
// 			},
// 		]
// }

</script>



<div style="width: 100%">
	<Policy bind:showPolicyMenu={merchPolicy} text={merchPolicyText}/>
	<Policy bind:showPolicyMenu={refundPolicy} text={refundPolicyText}/>
	<Policy bind:showPolicyMenu={privacyPolicy} text={privacyPolicyText}/>
	<Policy bind:showPolicyMenu={shippingPolicy} text={shippingPolicyText}/>
	<Policy bind:showPolicyMenu={termsOfService} text={termsOfServiceText}/>

</div>
