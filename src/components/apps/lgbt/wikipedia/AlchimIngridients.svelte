<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import SelectIngridient from './SelectIngridient.svelte';
	import trueReactions from '../../../../data/gamesApps/lgbt/reactions';

	let selectFirstIngridient = false,
		selectSecondIngridient = false,
		hideMixedBtn = false,
        noReactionMsg = false;

	let firstIngridient = {
			number: 0
		},
		secondIngridient = {
			number: 0
		};

	let sortArr = [],
        resultReaction = [],
        temp = [];

	function findFirstIngridient() {
		trueReactions.forEach((reactionArrayForFirstElement, ind) => {
			temp = reactionArrayForFirstElement.filter(function (e) {
				return e.number == firstIngridient.number;
			});
			if (temp.length > 0) sortArr.push(reactionArrayForFirstElement);
		});
	}

	function findSecondIngridient() {
        sortArr.forEach((reactionArrayForSecondElement, ind) => {
            temp = reactionArrayForSecondElement.filter(function (e) {
                if (e.number == secondIngridient.number) {
                    return resultReaction = reactionArrayForSecondElement}
                else {
                    return noReactionMsg = true;}
            });
        });
	}

	export let flags;
</script>

<Card style="width: 340px; margin: 0 0 25px 0; max-height: 600px;">
	<Content style="padding: 25;">
		<div style=" display: flex; flex-direction: row; overflow-y: auto; max-height: 280px; ">

			<Card
				style=" width: 140px; height: 70px; margin: 0 25px 0 0;"
				on:click={() => {
					selectFirstIngridient = true;
					selectSecondIngridient = false;
					hideMixedBtn = true;
				}}
			>
				<Media
					class="card-media-16x9"
					style="background-image: url({firstIngridient ? firstIngridient.img : ''});"
					aspectRatio="16x9"
				/>
			</Card>
			{#if selectFirstIngridient}
				<SelectIngridient
					{flags}
					bind:selectedIngridient={firstIngridient}
					bind:showIngridientsList={selectFirstIngridient}
					bind:hideMixedBtn
				/>
			{/if}
			<Card
				style=" width: 140px; height: 70px; margin: 0 25px 0 0;"
				on:click={() => {
					selectFirstIngridient = false;
					selectSecondIngridient = true;
					hideMixedBtn = true;
				}}
			>
				<Media
					class="card-media-16x9"
					style="background-image: url({secondIngridient ? secondIngridient.img : ''});"
					aspectRatio="16x9"
				/>
			</Card>
			{#if selectSecondIngridient}
				<SelectIngridient
					{flags}
					bind:selectedIngridient={secondIngridient}
					bind:showIngridientsList={selectSecondIngridient}
					bind:hideMixedBtn
				/>
			{/if}
		</div>
		{#if !hideMixedBtn}
			<Card
				on:click={() => {
					if (firstIngridient.number && secondIngridient.number) {
                        sortArr = [], temp = [];
						findFirstIngridient();
						findSecondIngridient();
					}
				}}
				style="width: 300px; margin: 15px 0 10px 0; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/bg_btn_hint.png);height: 85px; "
			/>
		{/if}
	</Content>
</Card>

