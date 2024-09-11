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
            <div class="list_component">
              <div class=" w-dyn-list">
                <div role="list" class="list w-dyn-items mx-auto">
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
.list_component {
  flex-direction: column;
  align-items: center;
}
.list {
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
}

@media screen and (max-width: 991px) {
  .list {
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 767px) {
  .list {
    grid-row-gap: 3rem;
    grid-template-columns: 1fr;
  }
}
</style>
