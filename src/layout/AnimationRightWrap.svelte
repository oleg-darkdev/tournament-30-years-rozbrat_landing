<!-- <script>
import { onMount } from 'svelte';
import AOS from 'aos';
onMount(() => {
    AOS.init();
});


export let backgroundImg;
</script>

<div data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    class="wrap-game-block right-content" style="background-image: url({backgroundImg});">
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
.right-content {
    justify-content: right;
    align-items: right;  
}
</style> -->