<script>
   import Paper, {Title, Subtitle} from '@smui/paper/dist';
   import SvgLine from './ColorSvgLine.svelte'
   import Card, {Content} from '@smui/card/dist';
 import Button, {Label} from '@smui/button/dist';

export let title
</script>

<style>
.section-body {
  background-color: #47babb;
  display: flex;
justify-content: center;
padding: 125px 0;
}
</style>

<section style="width: 100%; margin-top: -50px;">
<SvgLine/>
  <div class="section-body">
    <Paper color="primary" style="width: auto; max-width: 1200px; background-color: #000;" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">{title}</Title>
      <Content style="">
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>


