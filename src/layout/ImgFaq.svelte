<script>
   import Paper, {Title, Subtitle, Content} from '@smui/paper/dist';
   import SvgLine from './ColorSvgLine.svelte'

export let title, color, img;
</script>

<style>

</style>

<section style="width: 100%; background-color: #191B1B;">
  <!--  margin-top: -50px; -->
<!-- <SvgLine/> -->
  <div class="section-body bg-img" style="background-image: url({img});">
    <Paper color="primary" style="width: 90%; border: {color ? color: '#191B1B'}; margin: 0 20%; max-width: 1200px; background-color: #191B1B;" class="paper-demo">
      <Title style="color: {color ? color: '#fff'}; font: 26px 'grafitty';">{title}</Title>
      <Content >
        <slot>
        </slot>
      </Content>
    </Paper>
  </div>
</section>


