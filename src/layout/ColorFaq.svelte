<script>
   import Paper, {Title, Subtitle} from '@smui/paper/dist';
   import SvgLine from './ColorSvgLine.svelte'
   import Card, {Content} from '@smui/card/dist';
 import Button, {Label} from '@smui/button/dist';

export let title
</script>

<style>

</style>

<section style="width: 100%; margin-top: -50px;">
<SvgLine/>
  <div class="section-body" style="background-color: #47babb;">
    <Paper color="primary" style="width: auto; max-width: 1200px; background-color: #000;" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">{title}</Title>
      <Content style="">
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>


