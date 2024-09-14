
<script>
  import {orgs} from '$shared';
</script>

<section class="shell-wrapper">

  <div class="main-wrapper">
    <div class="flex justify-center items-center">

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
                      <h2 class="text-white  heading-style-h4">Przed rozpoczęciem</h2>
                    </div>
                    <div class="text-white  margin-bottom margin-medium">
                      <p class='mb-4'>
                        Przed rozpoczęciem gry należy wykonać poniższe kroki:
                      </p>
                      <p>
                        1. Głośno życz Rosbratowi wszystkiego najlepszego z okazji urodzin!
                      </p>
                      <p>
                        2. Podejdź do sędziego i zarejestruj się w turnieju.
                      </p>
                      <p>
                        3. Zapoznaj się z <a href="https://30-years-rozbrat.vercel.app/" class='text-[#dc2626]' target="_blank">harmonogramem turnieju</a> i trzymaj się go.
                      </p>
                      <p>
                        4. Kliknij <a href="https://ralfs-gutmanis.github.io/novuss-clock/#/" class='text-[#dc2626]' target="_blank">link do elektronicznego zegara szachowego</a> i ustaw 600 sekund w ustawieniach.
                      </p>
                      <p>
                        5. Po zakończeniu gry - zgłoś wynik sędziemu.
                      </p>

                    </div>

                    <div class="margin-bottom margin-small">
                          <h3 class="flex flex-row text-white items-center content-center mb-4 text-no-uppercase heading-style-h2 text-style-italic">
                          <span class="icon-embed-medium w-embed my-1 text-[#dc2626]">
                            <svg width="" height="" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5">
                              </path>
                            </svg>
                          </span>
                          <a href="https://ralfs-gutmanis.github.io/novuss-clock/#/ " target="_blank" class='hover:text-[#dc2626] text-white'>Link do elektronicznego zegara szachowego</a>
                        </h3>

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



<style>

</style>





<!-- <script lang="ts">
  import Controlls from "./Controlls.svelte"
  import Options from "./Options.svelte"
  import { settings } from "./stores"
  import Trigger from "./Trigger.svelte"

  $: {
    const cssVars = Object.entries($settings.colors)
      .map(([key, val]) => `${key}: ${val};`)
      .join("")
    document.body.setAttribute("style", cssVars)
  }
</script>

<div class="Clock center">
  {#if !$settings.open}
    <Controlls />
    <Trigger player={0} />
    <Trigger player={1} />
  {:else}
    <Options />
  {/if}
</div>

<style>
  :global(body) {
    --unit: calc(8 * min(1vh, 1vw));
    font-family: Arial, Helvetica, sans-serif;
    background: var(--color-bg);
  }
  :global(.center) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  :global(*) {
    font-size: calc(var(--unit) / 2);
    -webkit-tap-highlight-color: transparent;
  }
  .Clock {
    overflow: hidden;
    background-image: linear-gradient(
      175deg,
      var(--color-border),
      var(--color-brown)
    );
    margin: calc(var(--unit) / 2);
    border-radius: var(--unit);
    padding: 0.1rem;
    padding-bottom: 0.2rem;
    box-shadow: 0 0 0 1px var(--color-border2), 0 0 0 6px var(--color-border),
      0 0 0 7px var(--color-border2);
  }
</style> -->
