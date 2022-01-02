<script>
import SocialPanel from '../components/SocialPanel.svelte'
import QuestionsList from '../components/faq/QuestionsList.svelte'
import GameQuestionsList from '../components/faq/GameQuestionsList.svelte'

import Banner from '../layout/BannerSection.svelte'
 import BlackFaq from '../layout/BlackFaq.svelte';
 import ColorFaq from '../layout/ColorFaq.svelte';
//  import CustomFaq from '../components/layout/CustomFaq.svelte';
//  import WhiteFaq from '../components/layout/WhiteFaq.svelte';

 const questionsGeneral = [
	 	 		{
				//  Как мне получить DIY издание какой либо игры с уникальным NFC и автографами всех членов коллектива?
		question: "How can I get a DIY edition of a game with a unique NFC and autographs of all team members?",
		// Приобретая коробку с игрой, вы автоматически получаете все выше перечисленное - заказать игру можно здесь:
		answer: "Buy the boardgame, you automatically receive all of the above - you can order the game here: /shop"
	 },
	/*
	1. Приходите к нам лично на ближайший воркшоп, познакомимся с вами лично

2. Напишите письмо по адресу support@ledergames.com. Наша служба поддержки по электронной почте может помочь с повреждениями, отсутствующими компонентами, запросами на заказ и всем, в чем вам понадобится помощь!
*/
	 	{
		question: ` How do I contact you?`,
		answer: `1. Come to us personally for the nearest workshop, we will get to know you personally 😁
2. Write an email to support@ledergames.com. Our email support team can help with damages, missing components, order requests, and anything else you need help with! `
	 },
	 	 	{
		question: `Is your studio open for public visits?`,
		// Мы все территориально распределенные участники одной большой семьи ... . Если вы хотите пообщаться лично с кем-то из нас, запишитесь на воркшоп
		answer: `We are all geographically distributed members of one big family DarkDev If you want to communicate personally with one of us, sign up for the workshop`
	 },
	 	 	{
					// Могу ли я поучаствовать в тестировании игры?
		question: `Can I get involved as a playtester?`,
		// Определенно! Подпишитесь на нашу рассылку! Мы свяжемся с вами, если у нас появятся возможности для тестирования в ближайшее время :)
		answer: `Definitely! Subscribe to our newsletter! We will contact you if we have opportunities for testing soon 😊`
	 },
	 	 	{
		question: ``,
		answer: ``
	 },
	 	 	{
					// Что означает DIY компоненты
		question: `What does DIY components mean?`,
		answer: `Lorem`
	 },
	 	 	{
					// Кем сделаны коробки и органазайнеры?
		question: `Who made the boxes and organizers?`,
		// Коробки, органазайнеры, игровые поля и т.д. - мы делаем сами, посмотреть как это выглядит можно в видео по ссылкам ниже:
		answer: `Boxes, organaziners, playing fields, etc. - we make it ourselves, you can see how it looks in the video at the links below:`
	 },
	 	 	{
		question: `About Chat-Bot`,
		answer: ``
	 },
	 	 	{
		question: ``,
		answer: ``
	 },
	 	 	{
		question: ``,
		answer: ``
	 },
	 	 	{
		question: ``,
		answer: ``
	 },
	 	 	{
		question: ``,
		answer: ``
	 },
 ];

const questionsShipping = [
	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
 ];

 const questionsWorkshops = [
	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
 ];

 const questionsTypography = [
	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
	 	 {
		question: "Lorem Ipsum is simply dummy text of the printing",
		answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	 },
 ];



</script>

<svelte:head>
	<title>FAQ`s</title>
</svelte:head>


<Banner text='Frequently Asked Questions' imgUrl='img/faq/faq_bg.png'/>

<ColorFaq title="Please read the following FAQ before contacting us."  >
	<div style="	  display: flex;
	  flex-direction: column; 		justify-content: center;">
	<SocialPanel title='Ask us on social media'/>
	<div class="questions-wrap" style="		background-color: #fff;">
		<QuestionsList title="General Help ⁉️" listQuestions={questionsGeneral}/>
		<QuestionsList title="Shipping 🚚" listQuestions={questionsShipping}/>
	</div>
	</div>
</ColorFaq>

<BlackFaq title="Please read the following FAQ before contacting us.">
	<div class="questions-wrap" style="background-color: #fff;">
		<QuestionsList title="Workshops 🧠" listQuestions={questionsWorkshops}/>
		<QuestionsList  title="Typography 📇"  listQuestions={questionsTypography}/>
	</div>
</BlackFaq>


<ColorFaq title="Please read the following FAQ before contacting us."  >
	<div class="questions-wrap" style="		background-color: #fff;">
		<GameQuestionsList text="GameName"/>
	</div>
</ColorFaq>


<style>

  .questions-wrap {
	  display: flex;
	  flex-direction: row;
	  height: auto;
		flex-wrap: wrap;
		justify-content: space-around;
			padding:25px;

  }


</style>

