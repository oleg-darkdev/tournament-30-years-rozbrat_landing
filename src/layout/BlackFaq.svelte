<script>
   import Paper, {Title, Subtitle} from '@smui/paper/dist';
   import SvgLine from './BlackSvgLine.svelte'
   import Card, {Content} from '@smui/card/dist';

export let title, color = false;
</script>

<style>

</style>

<section style="width: 100%; background-color: #191B1B;">
  <!--  margin-top: -50px; -->
<!-- <SvgLine/> -->
  <div class="section-body" style="background-color: #191B1B;">
    <Paper style="width: auto; width: 90%; margin: 0 20%; max-width: 1200px; background-color: {color ? color: '#47babb'};" class="paper-demo">
      <Title style="color: #000; font: 26px 'grafitty';">{title}</Title>
      <Content style="">
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>

<!-- 
<section style="width: 100%; margin-top: -50px;">
<SvgLine/>
  <div class="section-body" style="background-color: #47babb;">
    <Paper color="primary" style="width: 90%; margin: 0 20%; max-width: 1200px; background-color: #191B1B;" class="paper-demo">
      <Title style="color: #fff; font: 26px 'grafitty';">{title}</Title>
      <Content >
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section> -->