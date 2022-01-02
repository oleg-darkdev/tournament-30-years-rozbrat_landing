<script>
	  import List, { Item, Separator, Text } from '@smui/list';

export let question = ''
</script>

<Item on:SMUI:action={() => question.showAnswer = !question.showAnswer}><Text>{question.question}</Text></Item>
{#if question.showAnswer}
<div class='answer'>
	<slot></slot>
</div>
{/if}


<style>
.answer {
	height: auto;
	width: 400px;
	max-width: 362px;
	padding: 10px 15px;
	background-color: #47babb;
}
</style>
