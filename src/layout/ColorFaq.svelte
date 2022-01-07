<script>
   import Paper, {Title, Subtitle} from '@smui/paper/dist';
   import SvgLine from './ColorSvgLine.svelte'
   import Card, {Content} from '@smui/card/dist';
 import Button, {Label} from '@smui/button/dist';

export let title, color;
</script>

<style>

</style>

<section style="width: 100%; ">
  <!--  margin-top: -50px; -->
<!-- <SvgLine/> -->
  <div class="section-body" style="background-color: {color ? color: '#47babb'};">
    <Paper color="primary" style="width: 90%; border: {color ? color: '#191B1B'}; margin: 0 20%; max-width: 1200px; background-color: #191B1B;" class="paper-demo">
      <Title style="color: {color ? color: '#fff'}; font: 26px 'grafitty';">{title}</Title>
      <Content >
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>


