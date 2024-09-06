<script>
  import {agenda} from '$shared';
  import {AgendaCard} from '$entities';

</script>

<section class="shell-wrapper">
  <div class="side-menu-wrapper">
    <div class="text-component">
      <h1 class="hero-text text-[#dc2626]">Rozkład</h1>
    </div>
  </div>
  <div class="main-wrapper">
    <div class="section_layout486  inherit-color">
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-large">
            <div  class="w-layout-grid layout486_component">
              {#each agenda as {title, desc, time, link, linkTitle}}
                <AgendaCard {title} {desc} {time} {link} {linkTitle}/>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>

</style>
