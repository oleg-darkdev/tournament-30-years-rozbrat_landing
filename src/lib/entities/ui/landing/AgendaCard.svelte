<script>
  export let desc, time, title, link, linkTitle;
</script>

<div class="layout486_content-left">
  <div class="layout486_number">
      {time.start}
      <br />
      {time.finish}

  </div>
</div>
<div class="layout486_content-right">
  <div class="layout486_content ">
    <div  class=" layout486_number show-mobile-landscape ">
      {time.start}
      <br />
      {time.finish}
    </div>

    <div class="layout486_progress-wrapper">
      <div class="layout486_progress-bar"></div>
    </div>
    <div class="margin-bottom margin-small">
      <h2>{title}</h2>
    </div>
    <p class="text-size-medium">{desc}</p>
    <!-- <div class="margin-top margin-medium">
      <div class="button-group">
        <a href="/" class="button is-link is-icon w-inline-block">
          <div>View Films</div>
          <div class="icon-embed-xxsmall w-embed">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
            </svg>
          </div>
        </a>
      </div>
    </div> -->
  </div>
</div>


<style>
  .layout486_content {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

  .layout486_content-left {
  align-items: flex-start;
  height: 16rem;
  display: flex;
  position: relative;
  /* position: -webkit-sticky;
  position: sticky;
  top: 20%; */
  /* overflow: hidden; */
}

.layout486_number-wrapper {
  text-align: center;
}
.layout486_number {
  font-family: CFPunkAttitude, serif;
  font-size: 8rem;
  font-weight: 700;
  line-height: 1;
}
.layout486_number.show-mobile-landscape {
  display: none;
}

@media screen and (max-width: 767px) {
  .layout486_number {
    font-size: 4rem;
  }
  .layout486_number.show-mobile-landscape {
    margin-top: 1.25rem;
    display: flex;
  }
  .layout486_content-left {
    display: none;
    position: static;
  }
    .layout486_content {
    height: auto;
    /* padding-top: 2rem;
    padding-bottom: 2rem; */
  }
}
@media screen and (max-width: 479px) {
  .layout486_content {
    height: auto;
  }
}
</style>
