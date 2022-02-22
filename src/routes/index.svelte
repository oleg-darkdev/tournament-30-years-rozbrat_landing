<script>
import Paper, {Title, Subtitle, Content} from '@smui/paper/dist';
import Carousel from '../components/landingPage/Carousel.svelte';
import CarouselBg from '../components/landingPage/CarouselBg.svelte';

import Menu from '../components/landingPage/MainMenu.svelte';
import GameMenu from '../components/landingPage/GameMenu.svelte';
import AnimationLeftWrap from '../layout/AnimationLeftWrap.svelte';
import AnimationRightWrap from '../layout/AnimationRightWrap.svelte';

import SocialPanel from '../layout/SocialPanel.svelte';

import gamesData from '../data/gamesData';
const games = [
    {path:  gamesData.graffity.promo.promo, id: gamesData.graffity.promo.serial, link: gamesData.graffity.promo.id},
    {path:  gamesData.a.promo.promo, id: gamesData.a.promo.serial, link: gamesData.a.promo.id},
    {path:  gamesData.lgbt.promo.promo, id: gamesData.lgbt.promo.serial, link: gamesData.lgbt.promo.id},
    {path:  gamesData.covid.promo.promo, id: gamesData.covid.promo.serial, link: gamesData.covid.promo.id},
    {path:  gamesData.ksg.promo.promo, id: gamesData.ksg.promo.serial, link: gamesData.ksg.promo.id},
    {path:  gamesData.linux.promo.promo, id: gamesData.linux.promo.serial, link: gamesData.linux.promo.id},
    {path:  gamesData.gulagUSSR.promo.promo, id: gamesData.gulagUSSR.promo.serial, link: gamesData.gulagUSSR.promo.id},
    {path:  gamesData.fnb.promo.promo, id: gamesData.fnb.promo.serial, link: gamesData.fnb.promo.id},
    {path:  gamesData.ror.promo.promo, id: gamesData.ror.promo.serial, link: gamesData.ror.promo.id},
    // {path:  gamesData.fnb.promo.promo, id: gamesData.fnb.promo.serial, link: gamesData.graffity.promo.id},
    // {path:  gamesData.fnb.promo.promo, id: gamesData.fnb.promo.serial, link: gamesData.graffity.promo.id},
    // {path:  gamesData.fnb.promo.promo, id: gamesData.fnb.promo.serial, link: gamesData.graffity.promo.id},
    // {path:  gamesData.fnb.promo.promo, id: gamesData.fnb.promo.serial, link: gamesData.graffity.promo.id},
    // {path:  gamesData.fnb.promo.promo, id: gamesData.fnb.promo.serial, link: gamesData.graffity.promo.id},
	
	];

const bgImages = [
		{path: '/img/bg/boardgames.png', id: '101'},
		{path: '/img/bg/workshops.png', id: '102'},
		{path: '/img/bg/handmade.png', id: '103'},
		{path: '/img/bg/faq.png', id: '104'},
		{path: '/img/bg/boardgames.png', id: '105'},
		// {path: '/img/bg/workshops.png', id: '106'},
		// {path: '/img/bg/workshops.png', id: '107'},
		// {path: '', id: '108'},
		// {path: '', id: '109'},
		// {path: '', id: '110'},
		// {path: '', id: '111'},
		// {path: '', id: '112'},
		// {path: '', id: '113'},
		// {path: '', id: '114'},
		// {path: '', id: '115'},
		// {path: '', id: '116'},
		// {path: '', id: '117'},
		// {path: '', id: '118'},
		// {path: '', id: '119'},
		// {path: '', id: '120'},
	]

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
    <!-- <div style="height: 100vh; width: 100%;">
    <CarouselBg 
        {bgImages}
        controlColor={'white'}
        controlScale={0.8}
        autoplay={true}
        autoplaySpeed={3000}
    />
    </div> -->


<!-- <div class="wrap-game-block" style="height: 230px; z-index: 0; background-image: url('img/bg/first_bg.png');  margin-top: 0px; ">
 
</div>    -->
<!-- 640px -->
      <div style="height: 700px; width: 100%; z-index: 0;">
          <CarouselBg 
        {bgImages}
        controlColor={'white'}
        controlScale={0.8}
        autoplay={true}
        autoplaySpeed={3000}/>
    </div>

<div class="index-menu" style=" ">
    <section style="min-width: 430px;  max-width:760px; width: auto; margin: 0; ">
        <div class="tur-bg" >
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
        {games}
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


<AnimationRightWrap backgroundImg={gamesData.fnb.promo.landingBanner}>
    <GameMenu gameData={gamesData.fnb}/>
</AnimationRightWrap>
<AnimationLeftWrap backgroundImg={gamesData.ror.promo.landingBanner}>
    <GameMenu gameData={gamesData.ror}/>
</AnimationLeftWrap>


<AnimationRightWrap backgroundImg={gamesData.squat.promo.landingBanner}>
    <GameMenu gameData={gamesData.squat}/>
</AnimationRightWrap>
<!-- <AnimationLeftWrap backgroundImg={gamesData.lgbt.promo.landingBanner}>
    <GameMenu gameData={gamesData.lgbt}/>
</AnimationLeftWrap> -->

<AnimationRightWrap backgroundImg={gamesData.gulagUSSR.promo.landingBanner}>
    <GameMenu gameData={gamesData.gulagUSSR}/>
</AnimationRightWrap>
<!-- <AnimationLeftWrap backgroundImg={gamesData.gulagUSSR.promo.landingBanner}>
    <GameMenu gameData={gamesData.gulagUSSR}/>
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
    margin-top: -340px;
    z-index: 9999;  
    position: relative;
    /* background-image: url('img/bg/first_bg.png'); z-index: 0; */
}

</style>