<script>
import { onMount } from 'svelte';
import AOS from 'aos';

import Menu from '../components/landingPage/MainMenu.svelte';
import GameMenu from '../components/landingPage/GameMenu.svelte';
import AnimationLeftWrap from '../layout/AnimationLeftWrap.svelte';
import AnimationRightWrap from '../layout/AnimationRightWrap.svelte';

import SocialPanel from '../layout/SocialPanel.svelte';

import gamesData from '../data/gamesData';

onMount(() => {
    AOS.init();
});
</script>

<svelte:head>
    <title>DarkDev Games</title>
</svelte:head>
<div class="wrap-game-block" style="height: 250px; z-index: 0; margin-top: 0px; background-image: url('img/bg/first_bg.png');">
</div>   
<div class="wrap-game-block" style="min-height: 200px;  background-color: #47babb;">
    <div class="index-menu" style="position: absolute; top: 20px; left: 37%; z-index: 1; ">
        <section style="width: 430px; margin: 0; ">
            <div class="tur-bg" >
                <Menu />
            </div>
        </section>
    </div>
</div>    


<AnimationRightWrap backgroundImg={gamesData.covid.promo.landingBanner}>
    <GameMenu gameData={gamesData.covid}/>
</AnimationRightWrap>
<AnimationLeftWrap backgroundImg={gamesData.a.promo.landingBanner}>
    <GameMenu gameData={gamesData.a}/>
</AnimationLeftWrap>


<AnimationRightWrap backgroundImg={gamesData.graffity.promo.landingBanner}>
    <GameMenu gameData={gamesData.graffity}/>
</AnimationRightWrap>
<AnimationLeftWrap backgroundImg={gamesData.linux.promo.landingBanner}>
    <GameMenu gameData={gamesData.linux}/>
</AnimationLeftWrap>


<AnimationRightWrap backgroundImg={gamesData.ksg.promo.landingBanner}>
    <GameMenu gameData={gamesData.ksg}/>
</AnimationRightWrap>
<AnimationLeftWrap backgroundImg={gamesData.lgbt.promo.landingBanner}>
    <GameMenu gameData={gamesData.lgbt}/>
</AnimationLeftWrap>


<AnimationRightWrap backgroundImg={gamesData.squat.promo.landingBanner}>
    <GameMenu gameData={gamesData.squat}/>
</AnimationRightWrap>
<AnimationLeftWrap backgroundImg={gamesData.lgbt.promo.landingBanner}>
    <GameMenu gameData={gamesData.lgbt}/>
</AnimationLeftWrap>








<style>
.index-menu {
    display: flex; 
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    z-index: 1;  
}
</style>