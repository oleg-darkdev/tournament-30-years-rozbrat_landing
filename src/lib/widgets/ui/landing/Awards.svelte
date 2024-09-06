<script>
  import {AwardCard} from '$entities';
  import {awards} from '$shared';
</script>

<section class="shell-wrapper">
  <div class="side-menu-wrapper">
    <div class="text-component">
      <h1 class="hero-text text-[#dc2626]">Nagrody</h1>
    </div>
  </div>
  <div class="main-wrapper">
<div class="section_header19 inherit-color">
  <div class="padding-global">
    <div class="container-large">
      <div class="padding-section-large">
          <div class="padding-section-medium">
            <div class="portfolio13_component">
              <div class="portfolio13_list-wrapper w-dyn-list">
                <div role="list" class="portfolio13_list w-dyn-items mx-auto">
                  {#each awards as award}
                    <AwardCard {award}/>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

<style>

</style>
