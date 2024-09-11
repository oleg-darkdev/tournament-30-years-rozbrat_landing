<script>

</script>

<footer class="footer_component inherit-color">
  <div class="padding-global">
    <div>
      <div class="padding-vertical padding-xxlarge">
        <div class="line-divider"></div>
        <div class="padding-top padding-medium">
          <div class="footer_bottom-wrapper">
            <div class="flex flex-row justify-between flex-wrap w-full">
              <div class="footer-text">
                <div class="text-rich-text w-richtext">
                  <p>
                   <span class="text-2xl">❤️ </span> 100 lat - <span class='span-CFPunkAttitude'> <a href="https://www.rozbrat.org/" target="_blank">Rozbracie.</a></span>
                  </p>
                </div>
              </div>
              <div class="">
                <div class="text-rich-text w-richtext">
                  <p>
                    Development by <span class='span-CFPunkAttitude'> <a href="https://oleg-darkdev.vercel.app/"  target="_blank">oleg.darkdev</a></span>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</footer>


<style>
.footer_component.inherit-color {
  color: var(--text-color--text-alternate);
}
.footer_bottom-wrapper {
  justify-content: space-between;
  display: flex;
}
.footer-text {
  font-family: Courier New, sans-serif;
  font-size: 0.875rem;
}


@media screen and (max-width: 991px) {
  .footer_component.inherit-color {
    color: var(--text-color--text-alternate);
  }
}
@media screen and (max-width: 767px) {
  .footer_bottom-wrapper {
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 1rem;
  }
  .footer-text {
    margin-top: 2rem;
  }
}
</style>
