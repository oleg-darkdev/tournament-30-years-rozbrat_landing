<script>
  export let award;
</script>

<!--         img: '/images/medals/honors_second.svg',
        title: 'Drugie',
        awards: -->
<div role="listitem" class="award-card w-dyn-item">
  <div class="portfolio13_item">
    <div class="div-block-4">
      <div class="text-block-basic text-color-primary">{award.title} miejsce</div>
    </div>
    <div class="portfolio13_item-link w-inline-block">
      <div class="portfolio13_image-wrapper">
        <img src="{award.img}" loading="lazy" alt="" sizes="(max-width: 479px) 75vw, (max-width: 767px) 77vw, (max-width: 991px) 39vw, (max-width: 1919px) 25vw, 27vw" class="portfolio13_image">
      </div>
      <div class="portfolio13_item-content-top">
        <div class="portfolio15_tag-list films">
          <!-- <div class="tag-wrapper">
            <div class="text-block-tag">
              Lorem Ipsum
            </div>
          </div> -->
          <!-- <div class="tag-wrapper tag-big-white">
            {#each award.awards as item}
            <div class="text-block-tag text-color-primary">{item}</div>
            {/each}
          </div> -->
        </div>
        <div class="margin-bottom margin-xxsmall">
          {#each award.awards as item}
            <h2 class="heading-style-h5 text-center">
              {item}
            </h2>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  .award-card:first-child, .award-card:last-child {
    padding-top: 6rem;
  }
.tag-wrapper {
  background-color: var(--base-color-neutral--neutral-dark);
  padding: 0.25rem 1rem;
}
.tag-wrapper.tag-big-white{
  background-color: var(--base-color-neutral--neutral-lighter);
  padding-left: 0.35rem;
  padding-right: 0.35rem;
}
</style>
