<script>
  import List from '@smui/list';
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';
	import Item from './ItemOnGameQuestionsList.svelte'

 const questionsGameFirst = [
	 {
		question: " I have a rules question about GameName!",
		answer: "Please search the Boardgamegeek forums to see if your questions has already been asked or answered. If you are still unclear, please reach out to us at support@darkdev.com"	 },
		{
		question: "When will GameName be available?",
		answer: `We're currently in the midst of our Kickstarter fulfillment for Oath and currently anticipate a retail release in Summer 2021.

(Last updated: March 25, 2021)`
	 },
	 		{
		question: "Will GameName be translated into different languages?",
		// Наше общее правило - дождаться завершения одобрения игровым сообществом и сделать продажи первого тиража любой из наших игр на английском или русском языках, прежде чем делать переведенные издания. Если вы хотите помочь или просто заинтересованы в переводе, напишите пожалуйста нам на
		answer: "Our general rule is to wait for community approval to complete and make first print sales of any of our games in English or Russian before making translated editions. If you want to help or are simply interested in translation, please write to us at support@darkdev.com"
	 },
	 		{
				//  Как мне вернуть игру в исходное состояние?
		question: "How do I reset the game back to the original game state?",
		// сделать для каждой настолки такой файл для каждой настолки (помогает операторам собирать коробки, и пользователям держать порядок) https://www.dropbox.com/s/yfjbun4vm95hcg3/Oath%20Deck%20Order.pdf?dl=0
		answer: "If for any reason, you want to reset the order of the cards back to the order of an unplayed game, you can refer to this file (fileLink on cloud) for the specific cards and order."
	// Если по какой-либо причине вы хотите восстановить порядок карт до порядка неигранной игры, вы можете обратиться к этому файлу, чтобы узнать о конкретных картах и порядке.
	},
	 		{
				//  сделать спіском базовую версію і все расшіренія
				//  Я новичок в GameName. С чего мне начать?
		question: "I'm new to GameName. Where do I start?",
		// Чтобы играть в любой Root-контент, вам понадобится базовая игра Root. Для получения дополнительной информации о том, как расширения Root расширяют ваш опыт, вы можете узнать больше здесь! Если хотите поиграть в Root с живыми людьми, запись на воркшопы доступна здесь 👉
		answer: "To play any Root content, you need the base Root game. For more information on how Root extensions extend your experience, you can read more here! If you want to play Root with real people, sign up for  is available here 👉"
	 },

	 		{
				//  сделать списком с датами изменений, и ссылками на фотоотчеты с тестов.
				//  Как развивалась игра, хронология изменений
		question: "How the GameName developed, the chronology of changes",
		answer: `В настоящее время мы в шестой раз печатаем базовую игру ...`
	 },
	 		{
		question: "How do I find Root in stock?",
		// Страны где есть мазіны Базовый набор и все связанные с ним продукты и расширения в настоящее время продаются в нашем магазине и на уровне дистрибьюторов.
		// - GameName core and all of its related products and expansions are currently sold out on our store and on a distributor level.
		// и все связанные с ним продукты и расширения в настоящее время доступны через распространение и прямо сейчас в нашем интернет-магазине.
		answer: `Poland - - GameName core and all of its related products and expansions are currently sold out on our store and on a distributor level.
		Asia, Australia, USA, EU, rest of world - GameName core and all of its related products and expansions are currently available through distribution and on our webstore right now.`
	 },
	 		{
				// Как узнать номер версии уже приобретенной игры?
		question: "How can I find out the version number of an already purchased game?",
		// Чтобы узнать, какой версией игры вы владеете, обратитесь к обратной стороне коробки. Ваш нфс номер и номер издания будут указаны рядом со штрих-кодом для всех наших продуктов, включая расширения.
		answer: "To find out which version of the game you own, refer to the back of the box. Your NSF number and edition number will be listed next to the barcode for all of our products, including extensions."
	 },
	 		{
				//  Как использовать последние дополнения вместе с ранней версией игры GameName
		question: "How to use the latest extensions with the early version of the GameName",
		// Если у вас есть более старая версия GameName, вы можете распечатать эти PDF-файлы дома и внести изменения в свой игровой набор, или приобрести Root Upgrade Kit в нашем интернет-магазине.
		answer: "If you have an older version of GameName, you can print these PDFs at home and make changes to your playset, or purchase the Root Upgrade Kit from our online store."
	 },
	 		{
				//  сделать спіском, с ссылкамі на магазін
				//  На каких языках доступен GameName?
		question: "What languages is GameName available in?",
		//
		answer: "GameName is natively created and developed in Russian. We also have language edition partners that have worked on GameName in the following languages as well:"
	 },
	 		{
				//  Планируются ли в ближайшее время изменения или новые дополнения?
		question: `Are there any changes or new extensions planned in the near future?`,
		// В настоящее время нет официальных планов по совершенствованию .. . У Root по-прежнему есть множество потенциальных идей и концепций, которые мы хотим реализовать в виде дополнений. Если у вас есть предложения по совершенствованию ..., , please write to us at support@darkdev.com. Мы всегда рассмотреть предложения от игрового сообщества.
		answer: `There are currently no official plans for improvement ... Root still has a lot of potential ideas and concepts that we want to implement as add-ons. If you have any suggestions for improvement ..., please write to us at support@darkdev.com. We always consider suggestions from the gaming community. `
	 },
	 	 		{
						// У меня проблема с компонентами переведенной версии Root. С кем мне связаться по поводу запчастей?
		question: `I have a problem with the components of the translated version of Root. Who should I contact about spare parts?`,
		// К сожалению, у нас нет доступа к компонентам, содержащим переведенный текст. Пожалуйста, обратитесь к передней или задней части вашего корневого ящика, чтобы найти имя партнерского издателя и связаться с ним для запроса деталей. Если вам нужен компонент, не содержащий текста, вы можете связаться с нами по адресу support@ledergames.com для получения помощи.
		answer: `Unfortunately, we do not have access to components that contain translated text. Please refer to the front or back of your Root box to find the name of the partnered publisher and contact them for a parts request. If you are in need of a component that does not contain text, you can contact us at support@darkdev.com for assistance.`
	 },
	 	 		{
						// Я скучал по Kickstarter/воркшоп . Как мне получить игру?
		question: `I missed the Kickstarter / workshop. How do I get the game?`,
		// В настоящее время мы принимаем заказы на доставку Mysterious Manor в Северную Америку, Европу, Азию и Австралию / Новую Зеландию.
		answer: `We are currently accepting orders here to ship Mysterious Manor to USA, Europe, Russia`
	 },
	 	 		{
						// Как мне получить игру? Миниатюры? Аддоны?
		question: ` How can I get the game? Miniatures? Addons?`,
		// Основная игра Vast: The Crystal Caverns, расширения The Miniatures и The Fearsome Foes проданы и в настоящее время не издаются. К сожалению, в настоящее время мы не планируем перепечатывать какие-либо из этих продуктов.
		// The core game of Vast: The Crystal Caverns, The Miniatures expansion, and The Fearsome Foes expansion are all sold out and currently out of print. We unfortunately do not have plans to reprint any of these products at this time.
		// Основная игра Vast: The Crystal Caverns, расширения The Miniatures и The Fearsome Foes доступны для заказа в нашем магазіне, если вы хотите поиграть в эту игру бесплатно - приходите на воркшопы
		answer: `The main game Vast: The Crystal Caverns, The Miniatures and The Fearsome Foes expansions are available for order in our store, if you want to play this game for free - come to the `
	 },
	 	 		{
						// У меня есть идея как усовершенствовать игру, как поделиться им?
		question: `I have an idea how to improve the game, how to share it?`,
					/*
					Пришлите пожалуйста вашу идею нам support@darkdev.com. Мы обязательно протестируем ее.

Если вы уже распечатали вашу идею на бумаге, опробывать ее с игровым сообществом вы можете на одном из воркшопов.

Если ваша идея покажется интересной сообществу, вас ждет денежное вознаграждение или что-либо из нашего мазагина на ваш выбор.
*/
		answer: `Please send your idea to us support@darkdev.com. We will definitely test it.

If you have already printed your idea on paper, you can try it out with the gaming community at one of the .

If your idea seems interesting to the community, you will receive a cash reward or something from our store of your choice.`
	 },
	 	 		{
						// Где можно посмотреть как делалась эта игра?
		question: `Where can I see how this game was made?`,
		// Видео изготовления различных компонентов доступны по ссылкам ниже:
		answer: `Videos of the manufacture of various components are available at the links below:`
	 },
	 	 		{
		question: ``,
		answer: ``
	 },
	 	 		{
		question: ``,
		answer: ``
	 },

 ]


 const games = [questionsGameFirst]
export let text = ''
</script>

<div style="display: flex; flex-direction: column;">


  <Card style="width: 425px; margin-right: 15px;">
      <div style="padding: 1rem;">
				<h3 style="color: #000; font: 36px 'grafitty';">{text} 🎲</h3>
      </div>
      <PrimaryAction>
        <Media class="card-media-16x9" style="height: 400px; background-image: url(https://cdn.shopify.com/s/files/1/0106/0162/7706/files/ledergames-fort_360x.jpg?v=1596378316);" aspectRatio="16x9" />
        <Content class="mdc-typography--body2" style="">
{#each games as game, i}
	<List  style="max-width: 450px; background-color: #fff; border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));  height: auto;">
			<Item question={game[0]}>
				<p class=" mdc-typography--body">{game[0].answer}
				</p>
			</Item>
			<Item question={game[1]}>
				<p class=" mdc-typography--body">{game[1].answer}
				</p>
			</Item>
			<Item question={game[2]}>
				<p class=" mdc-typography--body">{game[2].answer}
				</p>
			</Item>
			<Item question={game[3]}>
				<p class=" mdc-typography--body">{game[3].answer}
				</p>
			</Item>
			<Item question={game[4]}>
				<p class=" mdc-typography--body">{game[4].answer}
				</p>
			</Item>
			<Item question={game[5]}>
				<p class=" mdc-typography--body">{game[5].answer}
				</p>
			</Item>
			<Item question={game[6]}>
				<p class=" mdc-typography--body">{game[6].answer}
				</p>
			</Item>
			<Item question={game[7]}>
				<p class=" mdc-typography--body">{game[7].answer}
				</p>
			</Item>
			<Item question={game[8]}>
				<p class=" mdc-typography--body">{game[8].answer}
				</p>
			</Item>
			<Item question={game[9]}>
				<p class=" mdc-typography--body">{game[9].answer}
				</p>
			</Item>
		</List>
{/each}
	</Content>
      </PrimaryAction>
    </Card>

</div>

<style>


</style>
