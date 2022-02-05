<script>
import { onMount } from 'svelte';
import AOS from 'aos';

import Paper, {Title, Subtitle, Content} from '@smui/paper/dist';
import Carousel from '../components/landingPage/Carousel.svelte';
// import CarouselBg from '../components/landingPage/Carousel.svelte';

import Menu from '../components/landingPage/MainMenu.svelte';
import GameMenu from '../components/landingPage/GameMenu.svelte';
import AnimationLeftWrap from '../layout/AnimationLeftWrap.svelte';
import AnimationRightWrap from '../layout/AnimationRightWrap.svelte';

import SocialPanel from '../layout/SocialPanel.svelte';

import gamesData from '../data/gamesData';
const images = [
		{path: 'img/games/landingPromo/graffity.png', id: '1'},
		{path: 'img/games/landingPromo/a.png', id: '2'},
		{path: 'img/games/landingPromo/lgbt.png', id: '3'},
		{path: 'img/games/landingPromo/covid.png', id: '4'},
		{path: 'img/games/landingPromo/ksg.png', id: '5'},
		{path: 'img/games/landingPromo/linux.png', id: '6'},
		{path: 'img/games/landingPromo/graffity.png', id: '7'},
		// {path: '', id: '8'},
		// {path: '', id: '9'},
		// {path: '', id: '10'},
		// {path: '', id: '11'},
		// {path: '', id: '12'},
		// {path: '', id: '13'},
		// {path: '', id: '14'},
		// {path: '', id: '15'},
		// {path: '', id: '16'},
		// {path: '', id: '17'},
		// {path: '', id: '18'},
		// {path: '', id: '19'},
		// {path: '', id: '20'},
	]


onMount(() => {
    AOS.init();
});

</script>

<svelte:head>
    <title>DarkDev Games</title>
</svelte:head>
    <!-- <div class="video-bg">
    <video src="img/social.mp4" type="video/mp4" autoplay muted loop></video>
    <div class="effects"></div>
    <div class="video-bg__content">
            
        </div>
    </div> -->

<div class="wrap-game-block" style="height: 230px; z-index: 0; background-image: url('img/bg/first_bg.png');  margin-top: 0px; ">
</div>   
<div class="index-menu" style=" ">
    <section style="min-width: 430px;  max-width:760px; width: auto; margin: 0; ">
        <div class="tur-bg" >
            <!-- <div style="max-width: 700px; width: 100%; height: 124px; max-height: 124px; background-image: url(img/menuBtn/logo_menu.png); "></div> -->
            <Menu />
        </div>
    </section>
</div>   

<div class="wrap-game-block" style=" height: auto; width; 100%; margin-top: -60px; background-color: #47babb;">
                                                            <!-- position: absolute; top: 20px; left: 37%; z-index: 1; -->

    <Paper style="width: auto; width: 100%; margin: 0; max-width: 1960px; background-color: #191B1B; margin-left: -15px;">
      <Title style="color: #fff; font: 26px 'grafitty';">My Boardgames</Title>
      <Content style="">
        <Carousel 
        {images}
        controlColor={'white'}
        controlScale={0.8}
        autoplay={true}
        autoplaySpeed={3000}
    />

      </Content>
    </Paper>
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
<!-- <AnimationLeftWrap backgroundImg={gamesData.lgbt.promo.landingBanner}>
    <GameMenu gameData={gamesData.lgbt}/>
</AnimationLeftWrap> -->








<style>
.video-bg {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.video-bg video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
/* .effects {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
} */
.video-bg__content {
    z-index:999;
    color: #ffffff;
    font-size: 50px;
}


.index-menu {
    display: flex; 
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    margin-top: -360px;
    z-index: 9999;  
    position: relative;
    /* background-image: url('img/bg/first_bg.png'); z-index: 0; */
}

</style>