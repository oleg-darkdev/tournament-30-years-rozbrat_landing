<!-- <script>
import { onMount } from 'svelte';
import AOS from 'aos';
onMount(() => {
    AOS.init();
});

export let backgroundImg;
</script>

<div data-aos="fade-left"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    class="wrap-game-block left-content" style="background-image: url({backgroundImg});">
      <div data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
        <slot>
        </slot>
    </div>
</div>


<style>
.left-content {
    justify-content: left;
    align-items: left;  
}
</style> -->