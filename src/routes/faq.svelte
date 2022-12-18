<script>
import SocialPanel from '../layout/SocialPanel.svelte'
import QuestionsList from '../components/faq/QuestionsList.svelte'
import GameQuestionsList from '../components/faq/GameQuestionsList.svelte'

import BlackFaq from '../layout/BlackFaq.svelte';
import ColorFaq from '../layout/ColorFaq.svelte';
import TableOfContent from '../components/faq/TableOfContent.svelte';


import FAQCategories from '../data/faq/FAQCategories';
import generalFaq from '../data/faq/questionsGeneral';
import typographyFaq from '../data/faq/questionsTypography';
import shippingFaq from '../data/faq/questionsShipping';
import workshopsFaq from '../data/faq/questionsWorkshops';
import gamesFAQ from '../data/faq/questionsGames';

let step = 0;
// console.log()
</script>

<svelte:head>
	<title>FAQ`s ⁉️</title>
</svelte:head>
<!-- 
	Что такое обучающие настольные игры

	Почему я занимаюсь этим.
	Я считаю геймификацию наилучшим способом передачи информации и особенно при работе с молодыми людьми, внимание которых трудно увлечь. 

	Сколько времени я этим занимаюсь.
	Начал я в 10.09.2018 - был теплый сентябрьский вечер.


	Что можно приобрести в комплекте с любой игрой?
	Магниты на холодильник, брелки, наклейки, журнал.

	Где можно узнать информацию обо мне
	Линкедин, на странцу обо мне, белсат,


	Фак по журналам
	Для чего я выпускаю журнал к каждой игре.


 -->

<div style="display: flex; justify-content: center;align-items: center;   ">
	<TableOfContent bind:step/>
</div>

<BlackFaq title="Please read the following FAQ before contacting me.">
	<div class="questions-wrap">
		<QuestionsList category={FAQCategories.general} listQuestions={generalFaq}/>
		<QuestionsList category={FAQCategories.workshops} listQuestions={workshopsFaq}/>
	</div>
	<a name='{FAQCategories.shipping.id}'> </a>

	<div class="questions-wrap">
		<QuestionsList category={FAQCategories.shipping} listQuestions={shippingFaq}/>
		<QuestionsList  category={FAQCategories.typography} listQuestions={typographyFaq}/>
	</div>
</BlackFaq>

<ColorFaq title="FAQ about games 🎲"  >
	{#each Object.values(gamesFAQ) as game}
		<GameQuestionsList data={game}/>
	{/each}
</ColorFaq>



<!-- <SocialPanel title='Ask us on social media'/> -->

<style>
.questions-wrap {
    display: flex;
    flex-direction: row;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    /* padding: 25px; */

}
</style>
