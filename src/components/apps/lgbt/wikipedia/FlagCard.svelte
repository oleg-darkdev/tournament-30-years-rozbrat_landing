<script>
import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
    Media,
    MediaContent,
} from '@smui/card';
import Chip, { Set, LeadingIcon, TrailingIcon, Text } from '@smui/chips';
import { fly } from 'svelte/transition';
import List from '@smui/list';

import ListRow from './card/ListRow.svelte';
import FlagColors from './card/FlagColors.svelte';
import Etymology from './card/Etymology.svelte';
import References from './card/References.svelte';
import RelatedTermsTable from './card/RelatedTermsTable.svelte';
import SpecificsTable from './card/SpecificsTable.svelte';
import ReactionsList from './ReactionsList.svelte';
import ReactionIngridients from './ReactionIngridients.svelte';

import trueReactions from '../../../../data/gamesApps/lgbt/reactions';

let showSpecifics = false,
    showRelatedTerms = false, 
    showEtymology = false, 
    showReferences = false, 
    showFlagInfo = false,
    showReaactions = false;

let showFullInfo = false;
let sortArr = [];
let ingridients = [];




	let questionContinueReaction = false;
	function showReaction() {
		questionContinueReaction = !questionContinueReaction;
	}


export let brandColor;
export let flag;
</script>


<Card style="width: 340px; margin: 0 0 15px 0;">
    <PrimaryAction on:click={() => showFullInfo = !showFullInfo} >
        <div style="padding: 1rem;">
            <h2 class="mdc-typography--headline6" style="margin: 0;">
            #{flag.number} {flag.name}
            </h2>
            <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                Alternative name: {flag.alternativeName}
            </h3>
        </div>
        <Media style="height: 190px; width: 340px; background-image: url({flag.img});" />
    </PrimaryAction>
    <Content class="mdc-typography--body2">
        {#if showFullInfo & !showReaactions}
            <div transition:fly="{{ y: -20, duration: 400 }}">
                {flag.shortDescription}
                <List class="demo-list">
                    <ListRow flagBrandColor={flag.brandColor} showData={showSpecifics} text='Specifics'>
                        <SpecificsTable {flag} /> 
                    </ListRow >
                    <ListRow flagBrandColor={flag.brandColor}  showData={showRelatedTerms} text='Related Terms '>
                        <RelatedTermsTable flag={flag.relatedTerms} />
                    </ListRow >
                    <ListRow flagBrandColor={flag.brandColor}  showData={showEtymology} text='Etymology'>
                        <Etymology flag={flag.etymology} />
                    </ListRow >
                    <ListRow flagBrandColor={flag.brandColor}  showData={showFlagInfo} text='Flag colors'>
                        <FlagColors flag={flag.flagInfo}/>
                    </ListRow >
                    <ListRow flagBrandColor={flag.brandColor}  showData={showReferences} text='References '>
                        <References flagBrandColor={flag.brandColor} flag={flag.references}/>
                    </ListRow >
                </List>

                <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                    Сlassification
                </h3>
                <Set chips={flag.category} let:chip>
                <Chip
                    {chip}
                    shouldRemoveOnTrailingIconClick={false}>
                    <Text tabindex={0}>{chip}</Text>
                </Chip>
                </Set>
            </div>
        {/if}
        {#if showReaactions}
            {#if questionContinueReaction == false}
                <ReactionsList {sortArr} bind:selectionReaction={ingridients} on:showReaction={showReaction}/>
            {:else}
                <div  transition:fly="{{ y: -20, duration: 400 }}">
                    <ReactionIngridients bind:ingridients={ingridients} bind:showReaactions bind:questionContinueReaction/>
                </div>
            {/if}
        {/if}
        {#if !showReaactions}
            <Card on:click={() => {
                let temp;
                trueReactions.forEach((reactionArrayForElement, ind) => {
                    temp = reactionArrayForElement.filter(function (e) {
                        return e.number == flag.number;
                    });
                    if (temp.length > 0) sortArr.push(reactionArrayForElement);
                });
                showReaactions =!showReaactions;
                }}  style='width: 300px; margin: 15px 0 10px 0; border: 2px solid {brandColor}; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/apps/lgbt/bg_btn_hint.png);height: 85px; '>
            </Card>
        {/if}
    </Content>
    <!-- <Actions fullBleed>
        <Button on:click={() => showFullInfo = !showFullInfo}>
        <Label>{showFullInfo ? 'Hide element': 'Show element'} </Label>
        <i class="material-icons" aria-hidden="true">{showFullInfo ? 'arrow_back':'arrow_forward'}</i>
        </Button>
    </Actions> -->
    </Card>


    <style>
        .d {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    </style>