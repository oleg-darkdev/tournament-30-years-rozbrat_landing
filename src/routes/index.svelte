<script>
import { onMount } from 'svelte';
import AOS from 'aos';

import Menu from '../components/landingPage/mainMenu.svelte';
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
<div class="wrap-game-block" style="height: 300px; z-index: 0; margin-top: 0px; background-image: url('img/bg/first_bg.png');">
</div>      
<div class="index-menu" style="position: absolute; top: 20px; left: 37%; z-index: 1; ">
    <section style="width: 430px; margin: 0; ">
        <div class="tur-bg" >
            <Menu />
        </div>
    </section>
</div>

<AnimationRightWrap backgroundImg='img/covid_bg.png'>
    <GameMenu gameData={gamesData.covid}/>
</AnimationRightWrap>

<AnimationLeftWrap backgroundImg='img/a_bg.png'>
    <GameMenu gameData={gamesData.a}/>
</AnimationLeftWrap>

<AnimationRightWrap backgroundImg='img/graffity_bg.png'>
    <GameMenu gameData={gamesData.graffity}/>
</AnimationRightWrap>

 <AnimationLeftWrap backgroundImg='img/linux_bg.png'>
    <GameMenu gameData={gamesData.linux}/>
</AnimationLeftWrap>

<AnimationRightWrap backgroundImg='img/ksg_bg.png'>
    <GameMenu gameData={gamesData.ksg}/>
</AnimationRightWrap>



<style>
.index-menu {
    display: flex; 
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    z-index: 1;  
}
</style>