<script>
  const news = [
    {
      title: '',
      date: '',
      img: '',
      desc: ''
    }
  ]
</script>

<section class="">
<div class="side-menu-wrapper">
<div class="text-component">
  <h1 class="hero-text white">Wiadomości</h1>
</div>
</div>

<div class="section_news inherit-color">
  <div class="padding-global">
    <div class="container-large">
      <div class="padding-section-large">
        <div class="news_component">
          <div class="news_list-wrapper w-dyn-list">
            <div role="list" class="news_list w-dyn-items">

              {#each news as {title, desc, img, date}}
              <div role="listitem" class="w-dyn-item">
                <div class="news_item">
                  <a  href="/" class="news_image-link w-inline-block">
                    <div class="news_image-wrapper">
                      <img src="" loading="lazy" alt="" class="news_image w-dyn-bind-empty">
                    </div>
                  </a>
                  <div class="news_title-wrapper">
                    <div class="news_content-top">
                      <div class="news_tag-list">
                        <div class="tag-wrapper">
                          <div class="text-block-basic">Lorem Ipsum </div>
                        </div>
                        <div class="tag-wrapper">
                          <div class="text-block-basic"> Lorem Ipsum </div>
                        </div>
                      </div>
                      <div class="margin-bottom margin-tiny">
                        <div class="text-block-basic">
                          March 29, 2024
                        </div>
                      </div>
                      <div class="margin-bottom margin-small">
                        <h3 class="heading-style-h4">
                          Lorem Ipsum is simply dummy text
                        </h3>
                      </div>
                      <p  class="text-style-2lines">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>

                    <div class="margin-top margin-medium">
                      <a href="/" class="button is-link is-icon w-inline-block">
                        <div>Lorem Ipsum is</div>
                        <div class="icon-embed-xxsmall w-embed">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>


<style>
.section_news {
  color: var(--text-color--text-alternate);
}
.news_component {
  flex-direction: column;
  align-items: center;
}
.news_tag-list {
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  color: var(--text-color--text-primary);
  flex-flow: wrap;
  margin-bottom: 1rem;
  display: flex;
}
.news_tag-list.films {
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  text-decoration: none;
}

.news_title-link {
  margin-bottom: 0.5rem;
  text-decoration: none;
  display: block;
}

.news_title-wrapper {
  flex-direction: column;
  grid-template-rows: auto;
  grid-template-columns: 1fr max-content;
  grid-auto-columns: 1fr;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}
.news_image-link {
  width: 100%;
  margin-bottom: 1rem;
}
.news_image-wrapper {
  width: 100%;
  overflow: hidden;
}
.news_item {
  grid-column-gap: 0rem;
  border-top: 1px solid var(--base-color-neutral--neutral-dark);
  flex-flow: column;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
}
.news_item:last-child {
  padding-bottom: 0;
}
.news_image {
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.news_list {
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  flex-direction: column;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}
.news_tag-item {
  background-color: var(--base-color-neutral--neutral-lightest);
  color: var(--link-color--link-primary);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
}
.news_tag-item.w--current {
  border-bottom: 2px solid var(--base-color-neutral--black);
}

@media screen and (min-width: 1920px) {
  .news_item {
    align-items: stretch;
  }
}
@media screen and (max-width: 991px) {
  .news_item {
    grid-column-gap: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
@media screen and (max-width: 767px) {
  .news_title-wrapper {
    flex-direction: column;
    grid-template-columns: 1fr;
    justify-items: start;
  }
  .news_item {
    grid-row-gap: 1.5rem;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .news_list {
    grid-template-columns: 1fr;
  }
}
</style>
