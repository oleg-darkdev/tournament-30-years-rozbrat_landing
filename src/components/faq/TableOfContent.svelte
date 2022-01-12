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
import GetStarted from './TableOfContent/GetStarted.svelte';
import AnchorList from './TableOfContent/AnchorList.svelte';


export let step;
</script>

<div style="display: flex; justify-content: center;align-items: center; width: 100%;  background-color:#191B1B;  ">
    <section style="width: 430px; margin: 0; display: flex;  height: auto; ">
        <div class="tur-bg" style="flex-direction: column; align-items: center; ">
            <!-- max-width: 380px; -->
            <Card style="width: 360px;  margin-bottom: 15px;">
                  <Media  class={step == 0 ? '': 'hidden'} style="height: 460px; width: 100%; background-image: url('img/faq.png');"/>
                  <Content class="mdc-typography--body2" style="display: flex; justify-content: center;align-items: center; flex-direction: column;">
                      <GetStarted bind:step/>
                      <AnchorList bind:step/>
                  </Content>
              </Card>
        </div>
    </section>
</div>


<style>
  :global(.wrap-faq-hidden-block) {
    display: flex; justify-content: center;align-items: center; flex-direction: column; 
  }
</style>