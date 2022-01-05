<script>
   import Paper, {Title, Subtitle} from '@smui/paper/dist';
   import SvgLine from './BlackSvgLine.svelte'
   import Card, {Content} from '@smui/card/dist';

export let title
</script>

<style>

</style>

<section style="width: 100%; margin-top: -50px;">
<SvgLine/>
  <div class="section-body" style="ackground-color: #000;">
    <Paper style="width: auto; max-width: 960px; background-color: #47babb;" class="paper-demo">
      <Title style="color: #000; font: 26px 'grafitty';">{title}</Title>
      <Content style="">
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>


