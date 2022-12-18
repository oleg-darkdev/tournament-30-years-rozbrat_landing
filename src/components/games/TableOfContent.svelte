<script>
 import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';



import GetStarted from './GetStarted.svelte';
import SelectView from './SelectView.svelte';
import SelectCategory from './SelectCategory.svelte'
import Result from './Result.svelte'

export let step;

export let options;
</script>

<div style="display: flex; justify-content: center;align-items: center; background-color: #fff;">
    <section style="max-width: 760px;  margin: 0; display: flex;  height: auto; ">
        <div class="tur-bg" style="flex-direction: column; align-items: center;">
            <!-- max-width: 380px; -->
            <Card style="max-width: 740px;  margin-bottom: 15px;">
                  <!-- <Media  class={step == 0 ? '': 'hidden'} style="height: 400px; width: 100%; background-image: url('img/games.png');"/> -->
                  <Content class="mdc-typography--body2" style="background-color: #191B1B; display: flex; flex-direction: column;">
                      <!-- <GetStarted bind:step/> -->
                      <SelectView bind:step bind:options/>
                      <SelectCategory bind:step bind:options/>
                      <!-- <Result bind:step bind:options/> -->
                  </Content>
              </Card>
        </div>
    </section>
</div>


<style>


   .bg-img-index {
     background-image: url(img/bg/main_bg.png);
  }
</style>