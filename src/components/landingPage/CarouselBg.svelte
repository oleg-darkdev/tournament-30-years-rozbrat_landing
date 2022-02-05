<script>
  import { flip } from 'svelte/animate';
  import { onDestroy } from 'svelte';

  export let bgImages;
//   export let imageWidth = 300;
//   export let bgImagespacing = 20;
  export let speed = 500;
  export let controlColor= '#444';
  export let controlScale = '0.5';
  export let autoplay = false;
  export let autoplaySpeed = 5000;
  export let displayControls = true;
  let interval;


  const rotateLeft = e => {
    const transitioningImage = bgImages[bgImages.length - 1]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    bgImages = [bgImages[bgImages.length -1],...bgImages.slice(0, bgImages.length - 1)]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }

  const rotateRight = e => {
    const transitioningImage = bgImages[0]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    bgImages = [...bgImages.slice(1, bgImages.length), bgImages[0]]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }

  const startAutoPlayBg = () => {
    if(autoplay){
      interval = setInterval(rotateLeft, autoplaySpeed)
    }
  }

  const stopAutoPlayBg = () => {
    clearInterval(interval)
  }

  if(autoplay){
    startAutoPlayBg()
  }

  onDestroy(()=>{stopAutoPlayBg()})

</script>

<div id="carousel-container">
  <div id="carousel-bgImages">
    {#each bgImages as image (image.id)}
    <div 
        animate:flip={{duration: speed}}>
        <!-- id={image.id} style="background-color: #191B1B; background-image: url({image.path});  background-position: center center;      
    background-repeat: no-repeat;      
    background-attachment: fixed;    height: 100%; width: 100%; 
    background-size: cover;" -->
        <img 
    src={image.path}
            alt={image.id}
            id={image.id}
        />
      </div>
    {/each}
  </div>
  </div>

<style>
  #carousel-container {
    width: 100%;
    height: 100%;
    /* margin-right: -100px; */
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  #carousel-bgImages {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    /* -webkit-mask: linear-gradient(
      to right,
      transparent,
      black 40%,
      black 60%,
      transparent
    );
    mask: linear-gradient(
      to right,
      transparent,
      black 40%,
      black 60%,
      transparent
    ); */
  }



  #left {
    left: 10px;
  }

  #right {
    right: 10px;
  }

</style>
