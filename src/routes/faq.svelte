<script>
import SocialPanel from '../components/SocialPanel.svelte'
import QuestionsList from '../components/faq/QuestionsList.svelte'
import GameQuestionsList from '../components/faq/GameQuestionsList.svelte'

import Banner from '../layout/BannerSection.svelte'
import BlackFaq from '../layout/BlackFaq.svelte';
import ColorFaq from '../layout/ColorFaq.svelte';
//  import CustomFaq from '../components/layout/CustomFaq.svelte';
//  import WhiteFaq from '../components/layout/WhiteFaq.svelte';


import generalFaq from '../data/faq/questionsGeneral';
import typographyFaq from '../data/faq/questionsTypography';
import shippingFaq from '../data/faq/questionsShipping';
import workshopsFaq from '../data/faq/questionsWorkshops';

import gulagUSSRFaq from '../data/faq/games/gulagUSSR/gulagUSSR';

</script>

<svelte:head>
	<title>FAQ`s</title>
</svelte:head>

<Banner text='Frequently Asked Questions' imgUrl='img/faq/faq_bg.png'/>

<ColorFaq title="Please read the following FAQ before contacting us."  >
<div style="	  display: flex;
flex-direction: column; 		justify-content: center;">
	<SocialPanel title='Ask us on social media'/>
	<div class="questions-wrap">
		<QuestionsList title="General Help ⁉️" listQuestions={generalFaq}/>
		<QuestionsList title="Shipping 🚚" listQuestions={workshopsFaq}/>
	</div>
</div>
</ColorFaq>

<BlackFaq title="Please read the following FAQ before contacting us.">
<div class="questions-wrap">
	<QuestionsList title="Workshops 🧠" listQuestions={shippingFaq}/>
	<QuestionsList  title="Typography 📇"  listQuestions={typographyFaq}/>
</div>
</BlackFaq>

<ColorFaq title="Please read the following FAQ before contacting us."  >
<div class="questions-wrap">
	<GameQuestionsList data={gulagUSSRFaq}/>
</div>

</ColorFaq>

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
