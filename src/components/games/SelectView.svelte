<script>
import SegmentedButton, {
    Segment,
    Icon,
    Label,
} from '@smui/segmented-button';
import List, { Item, Graphic, Text } from '@smui/list';
import Fab  from '@smui/fab';


import BtnStepsPanel from '../BtnStepsPanel.svelte'
const views = [
  {
    name: 'list',
    icon: 'view_list',
    description: 'Short list.'
  },    
  {
    name: 'brief',
    icon: 'view_module',
    description: 'Logo with a brief description.'
  },    
  {
    name: 'full',
    icon: 'view_stream',
    description: 'Detailed information.'
  },
];

let showInfo = false;

export let step;    
export let options;
</script>


<div style="margin-bottom: 15px;" class={step == 1 ? '': 'hidden'}>
  <div class="wrap-games-hidden-block">
    <h2 style="font: 28px 'grafitty'; margin: 0 0 15px 0; width: 280px; text-align:center;">Choose the format display 👇</h2>
    <div style="display: flex; display: flex; justify-content: center;align-items: center; flex-direction: row;  flex-direction: row;">
    <SegmentedButton style="margin-right: 15px;"
        segments={views}
        let:segment
        singleSelect
        bind:selected={options.view}
        key={(segment) => segment.name}>
        <Segment {segment} title={segment.name}>
            <Icon class="material-icons">{segment.icon}</Icon>
        </Segment>
    </SegmentedButton>  
    <Fab color="primary" on:click={() => showInfo = !showInfo} mini>
      <Icon class="material-icons">help_outline</Icon>
    </Fab>
    </div>
   
      <div style="margin: 0 0 25px 0; display: flex; display: flex; justify-content: center;align-items: flex-start; flex-direction: column;  flex-direction: column; ">
        {#if !showInfo}
         {#each views as view, i}
          <List dense>
            <Item on:click={() => options.view = view}>
              <Graphic style="color: #888" class="material-icons">{view.icon}</Graphic>
              <Text style="color: #888"> {view.description}</Text>
            </Item>
          </List>
        {/each}
        {/if}
      </div>
    
        <BtnStepsPanel bind:step/>
  </div>
</div>