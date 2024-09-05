<script>
  const orgs = [
    {
      title: 'Oleg Medvedev',
      link: 'https://oleg-darkdev.vercel.app/'
    },
    {
      title: 'DarkDev.Foundation',
      link: 'https://darkdev-foundation.vercel.app/'
    },
    {
      title: 'Ekipa skłotu ROZBRAT',
      link: 'https://www.rozbrat.org/'
    },
    {
      title: 'Food Not Bombs - Gdańsk',
      link: 'https://www.facebook.com/FNBgdansk/'
    },
  ]
</script>

<section class="shell-wrapper">
  <div class="side-menu-wrapper icaros">
    <a href="/" class="text-component w-inline-block">
      <p class="hero-text">org</p>
    </a>
  </div>
  <div class="main-wrapper">
    <div class="">
      
      <div class="padding-global">
        <div class="container-large">
          <div class="padding-section-small">
            <div class="content24_component">
              <div class="margin-bottom margin-small">
                <div class="w-layout-grid content24_content-wrapper small mobile-cropped">
                  <div>
                    <!-- <div class="text-white margin-bottom margin-small">
                      <h2>Lorem Ipsum is simply dummy</h2>
                    </div> -->
                    <!-- <div class="margin-bottom margin-medium">
                      <p class="text-white  text-no-uppercase heading-style-h2 text-style-italic">
                        Organizatorzy turnieju:
                      </p>
                    </div> -->
                    <div class="margin-bottom margin-tiny">
                      <!-- <h2 class="text-white  heading-style-h4">Organizatorzy turnieju:</h2> -->
                    </div>
                    <div class="text-white  margin-bottom margin-medium">
                      <p>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                    <div class="margin-bottom margin-small">
                      {#each orgs as {title, link}}
                        <p class="flex flex-row text-white mb-4 text-no-uppercase heading-style-h2 text-style-italic">
                          <span class="icon-embed-medium w-embed">
                            <svg width="" height="" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5">
                              </path>
                            </svg>
                          </span>
                          <a href="{link}" class='text-white' target="_blank">{title}</a>
                        </p>
                      {/each}
                      <!-- <h2 class="text-white heading-style-h4">Lorem Ipsum is simply dummy:</h2> -->
                    </div>

                    <!-- <div class="margin-bottom margin-medium">
                      <div class="text-rich-text w-richtext">
                        <p class='text-white '>
                          <strong>Lorem Ipsum:</strong> Lorem Ipsum is simply dummy
                        </p>
                      </div>
                    </div> -->
                  </div>
                  <div>
                    <div class="text-white margin-bottom margin-tiny">
                      <h2>Oleg Medvedev.</h2>
                    </div>
                    <div class="margin-bottom margin-tiny">
                      <img src="/images/org.png" loading="lazy" alt=""  class="character-image">
                    </div>
                    <div class="margin-bottom margin-medium">
                      <div class="text-rich-text w-richtext text-white ">
                        <!-- <h3>Oleg Medvedev.</h3> -->
                        <p>
                          <strong>Tytuł:</strong> Mistrz Białorusi w szachach.
                        </p>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                    <div class="margin-bottom margin-small w-condition-invisible">
                      <h2 class="heading-style-h4 text-white ">Lorem Ipsum:</h2>
                    </div>
                    <div class="margin-bottom margin-medium w-condition-invisible">
                      <div class="text-rich-text w-dyn-bind-empty w-richtext text-white ">
                                                      <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
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


<!-- <section class="shell-wrapper">
  <div class="side-menu-wrapper">
    <div class="text-component">
      <h1 class="hero-text white">org</h1>
    </div>
  </div>
  <div class="main-wrapper">
<div class="section_header19">
  <div class="padding-global">
    <div class="container-large">
      <div class="padding-section-large">
        <div class="w-layout-grid header19_component">
          <div class="header19_content">
            <div class="margin-bottom margin-small">
              <h2 class="heading-style-h1">
                Lorem Ipsum is simply dummy
              </h2>
            </div>
            <p class="text-size-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div class="margin-top margin-medium">
              <div class="button-group">
                <a href="/" class="button is-alternate w-button">Lorem Ipsum </a>
                <a href="/" class="button-3 is-secondary w-button">Lorem Ipsum </a>
              </div>
            </div>
          </div>
          <div class="h-full">
            <img src="" loading="eager" sizes="100vw"  alt="" class="header19_image">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section> -->

<style>

</style>
