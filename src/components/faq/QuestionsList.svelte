<script>
  import List, { Item, Separator, Text } from '@smui/list';
import { fade } from 'svelte/transition';

export let listQuestions = [],
category = '';
</script>

<div style="display: flex; flex-direction: column; max-width: 405px;">

<h3 style="color: #000; font: 36px 'grafitty';">{category.text}</h3>
	<List  style="max-width: 450px; background-color: #000; border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));  height: auto;">
    {#each listQuestions  as question}
		<Item style="color: #fff;" on:SMUI:action={() => (question.showAnswer = !question.showAnswer)}><Text>{question.question}</Text></Item>
		{#if question.showAnswer}
		<div transition:fade class='answer'>
			<p class=" mdc-typography--body" >			{question.answer}
		</p></div>
		{/if}
    {/each}
  </List>
</div>

<style>

.answer {
	height: auto;
	/* width: 400px; */
	max-width: 372px;
	padding: 5px 10px;
	background-color: #47babb;
	margin-bottom: 15px;
	border-radius: 0 0 4px 4px;
}

</style>
