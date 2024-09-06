<script>
  import {orgs} from '$shared';
</script>

<section class="shell-wrapper">
    <div class="side-menu-wrapper">
    <div class="text-component">
      <h1 class="hero-text text-[#dc2626]">org</h1>
    </div>
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
                      <h2 class="text-white  heading-style-h4">Słowo organizatora:</h2>
                    </div>
                    <div class="text-white  margin-bottom margin-medium">
                      <p class='mb-4'>
                        Turniej szachowy jako sposób na zbliżenie społeczności nie tylko w intelektualnej walce na planszy szachowej, ale także w klimacie solidarności i oporu.
                      </p>
                      <p>
                        Dziękuje nie tylko za podtrzymywanie ducha Rozbratu, ale także za kontynuowanie tworzenia przestrzeni dla kulturowego i społecznego oporu.
                      </p>
                    </div>
                    <div class="margin-bottom margin-small">
                      {#each orgs as {title, link}}
                        <h3 class="flex flex-row text-white items-center content-center mb-4 text-no-uppercase heading-style-h2 text-style-italic">
                          <span class="icon-embed-medium w-embed my-1 text-[#dc2626]">
                            <svg width="" height="" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5">
                              </path>
                            </svg>
                          </span>
                          <a href="{link}" class='hover:text-[#dc2626] text-white' target="_blank">{title}</a>
                        </h3>
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
                    <div class="text-white margin-bottom margin-medium">
                      <p>
                        Sędzia
                      </p>
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
                        <!-- <p>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p> -->
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
