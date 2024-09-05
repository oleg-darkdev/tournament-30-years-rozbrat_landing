<script>

</script>


<header class="section_home-hero">
  <div class="header9_component-2">
    <div class="div-block">
      <h1 class="hero-text-medium white ">turniej szachowy</h1>
    </div>

  </div>
</header>

<section class="shell-wrapper">
  <div class="hero-side-menu">
  <div class="hero-text-component">
    <h1 class="hero-text white"><span class='hide-desctop'>turniej szachowy <br/> na </span>  30 lecie Rozbratu</h1>
  </div>
</div>

  <div class="main-wrapper">
    <div class="flex items-end justify-end ">
    <img src="/images/banner.jpg" loading="eager"  alt="" class="bottom-0 right-0 relative w-full h-full hide-mobile">
    </div>
  </div>


</section>




<style>
.hero-text {
  color: var(--text-color--text-alternate);
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
}
/* hero-side-menu */
.hero-side-menu {
  z-index: 10;
  flex-flow: column;
  width: 8rem;
  min-width: 8rem;
  height: 100vh;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}


.hero-text-component {
  margin-top: px;
  text-decoration: none;
  display: block;
  position: relative;
}

.section_home-hero {
  color: var(--text-color--text-alternate);
  width: 100%;
}

.hero-text-medium {
  color: var(--text-color--text-alternate);
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
}

.header9_image-wrapper--2 {
  flex: 1;
  min-width: 100%;
  height: 100%;
  position: absolute;
}

.header9_background-image-wrapper {
  /* z-index: -1; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  /* position: absolute; */
  /* top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%; */
}

.header9_background-image-desktop {
  object-fit: cover;
  object-position: 50% 30%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.header9_component-2 {
  flex-flow: row;
  /* min-height: 100svh; */
  display: flex;
  position: relative;
}

@media screen and (min-width: 1920px) {
  .hero-side-menu {
    width: 12rem;
    min-width: 12rem;
  }
}
@media screen and (max-width: 991px) {
  .header9_background-image-desktop {
    object-position: 50% 50%;
    display: none;
  }
    .hero-side-menu {
    width: 8rem;
    min-width: 8rem;
  }
    .hero-text-component.hide-mobile-portrait {
    left: 0;
  }
  .hero-text {
  color: var(--text-color--text-alternate);
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 6.5rem;
  font-weight: 700;
  line-height: 1;
}
}
@media screen and (max-width: 767px) {
  .header9_background-image-desktop {
    display: none;
  }
    .hero-side-menu {
    justify-content: flex-start;
    width: 8rem;
  }
  .hero-side-menu.mobile {
    display: flex;
  }
  .header9_component-2 {
    height: auto;
    max-height: none;
  }
}
@media screen and (max-width: 479px) {
  .hero-side-menu {
    justify-content: flex-start;
    width: 4rem;
    min-width: 4rem;
  }
    .hero-text-component {
    left: 0;
  }
}
</style>
