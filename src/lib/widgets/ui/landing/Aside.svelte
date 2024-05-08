<script>
  import { menu, contactLinks, antISystems, Email, LogoLinkedin, GameConsole, LogoGithub, BuildingInsights_2, PersonFavorite } from '$lib/shared';


  let boardgame = antISystems[0];

  export let selectedMenu, showMenu, selectedBoardgame;
</script>

<aside id="topnav">
<button class="group transition duration-300 ease-in-out delay-150 transform hover:scale-110 relative z-10" on:click={() => (showMenu = !showMenu)}>
		<div class=" h-32 w-32 flex-col justify-center">
			<div class="{showMenu ? 'menu-btn-white': 'menu-btn-dark'} h-full w-full" />
			<h2 class="text-right text-md pr-6 text-neutral-400 group-hover:text-white">MENU</h2>
		</div>
	</button>
    <!-- </div> -->
	<div class="topnav-name">
		<h1><a href="/" class='text-4xl font-black hover:text-white transition duration-300 ease-in-out delay-150 transform hover:scale-105 relative'>44Games</a></h1>
	</div>
	<div class="topnav-links">
    <button class='my-2 hover:text-white transition duration-300 ease-in-out delay-150 transform hover:scale-125' title="Boardgames menu"  on:click={()=>{selectedMenu = menu[1]; selectedBoardgame = boardgame}}>
    <GameConsole size={32} />
    </button>

    <button class='my-2 hover:text-white transition duration-300 ease-in-out delay-150 transform hover:scale-125' title="Offer for organisations"  on:click={()=>selectedMenu = menu[2]}>
    <BuildingInsights_2 size={32} />
    </button>
    <button class='my-2 hover:text-white transition duration-300 ease-in-out delay-150 transform hover:scale-125' title="Offer for clients"  on:click={()=>selectedMenu = menu[3]}>
    <PersonFavorite  size={32} />
    </button>

    <div class="divider my-4"></div>


    <a href="mailto:{contactLinks.email}" title="Email contact" class='transition duration-300 ease-in-out delay-150 transform hover:scale-125 text-white my-2'>
    <Email size={32} />
    </a>
<a href={contactLinks.linkedin} title="Linkedin profile" class='transition duration-300 ease-in-out delay-150 transform hover:scale-125 text-white my-2' target="_blank" >
<LogoLinkedin size={32} />
</a>


    <a href="{contactLinks.github}" class='transition duration-300 ease-in-out delay-150 transform hover:scale-125 text-white my-2' title="Github repositories">
<LogoGithub size={32} />
    </a>

		<!--




		<button   on:click={()=>}>

    </button> -->
	</div>
</aside>



<style>
  .menu-btn-dark {
		background-image: url(/images/menu.svg);

		background-repeat: no-repeat;
		background-size: contain;
	}

  .menu-btn-white {
		background-image: url(/images/menu_white.svg);

		background-repeat: no-repeat;
		background-size: contain;
	}
	:root {
		--maingb1: 90, 180, 94;
		--maingb2: 173, 180, 90;
		--maingb3: 90, 180, 150;
		--genbg: #121212;
		--dark1: #101010;
		--dark2: #505050;
		--light1: #efefef;
		--light2: #aaa;

		--kalnia: 'Kalnia', serif;
		--cinzel: 'Cinzel Decorative', serif;
		--averia: 'Averia Serif Libre', serif;
		--prata: 'Prata', serif;
		--lora: 'Lora', serif;

		--abigailimg: url(https://a.l3n.co/i/7TE5ur.png);
	}

	#topnav {
		position: fixed;
		z-index: 99999;
		top: 0;
		left: 0;
    width: 80px;
		padding: 20px 15px;
		background-color: var(--dark1);
		color: var(--dark2);
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.topnav-icon {
		margin: 15px auto 20px auto;

		/* width: 40px;
		height: 40px; */
		/* border-radius: 50%; */
		/* background-blend-mode: lighten; */
		/* background-color: #222; */
		/* background-size: cover; */
		transition: all ease 0.4s;
	}
	/* .topnav-icon:hover {
		opacity: 0.5;
	} */
	.topnav-name {
		position: relative;
		width: 45px;
		height: 250px;
	}
	.topnav-name h1 {
		display: block;
		transform: rotate(-90deg);
		transform-origin: top left;
		position: absolute;
		height: 45px;
		width: 250px;
		top: 250px;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.topnav-name h1 a {
		text-decoration: none;
		/* font-family: var(--averia); */
		/* font-size: 12px; */
		text-transform: uppercase;
		letter-spacing: 5px;
		position: relative;
		top: 1px;
		/* color: rgba(var(--maingb3), 1); */
	}
	.topnav-links {
		margin: -5px auto;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.topnav-links button {
		font-size: 21px;
		font-weight: 400;
		margin-top: 17px;
		text-decoration: none;
		color: var(--light2);
	}
	/* .topnav-links button:hover, */
	/* .topnav-links button:first-child {
		color: rgba(var(--maingb3), 1);
	} */

	#wrapper {
		width: 1200px;
		min-height: 1500px;
		margin: 0 auto;
		position: relative;
		box-sizing: border-box;
	}
	#wrapper-top {
		overflow: hidden;
		position: relative;
		width: 1200px;
		height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.site-logo {
		filter: grayscale(100%) contrast(80%);
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: var(--abigailimg);
		background-size: 56%;
		background-repeat: no-repeat;
		background-position: 0% 6%;
	}
	.site-name:before {
		content: 'eden accords';
		position: absolute;
		left: 0px;
		font-family: var(--cinzel);
		color: var(--genbg);
		z-index: 1;
		opacity: 1;
		-moz-opacity: 1;
		letter-spacing: 3px;
	}
	.site-name {
		position: relative;
		font-size: 150px;
		font-family: 900;
		font-family: var(--cinzel);
		color: transparent;
		-webkit-text-stroke: 2px rgba(var(--maingb3), 1);
		text-transform: uppercase;
		line-height: 75%;
		letter-spacing: 3px;
		text-align: center;
	}
	.site-namesub {
		color: var(--light1);
		position: absolute;
		bottom: 150px;
		text-transform: uppercase;
		font: 14px 'open sans' !important;
	}
	.site-dia {
		z-index: -1;
		position: absolute;
		top: 10px;
		right: 300px;
		width: 550px;
		height: 550px;
		background: linear-gradient(
			34deg,
			rgba(var(--maingb3), 0.2497373949579832) 0%,
			rgba(var(--maingb3), 0.05) 75%,
			rgba(var(--maingb3), 0) 100%
		);
		border: 2px solid rgba(var(--maingb3), 1);
		transform: rotate(-45deg);
		transform-origin: center;
	}

	#topbar {
		width: 1200px;
		height: 50px;
		border-top: 1px solid var(--dark2);
		border-bottom: 1px solid var(--dark2);
		background: var(--genbg);
		color: rgba(var(--maingb3), 1);
		box-sizing: border-box;
		font-family: var(--averia);
		position: sticky;
		top: 0;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all ease 0.4s;
	}
	.navtree {
		padding-left: 70px;
		font-size: 10px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	.navtree a {
		text-decoration: none;
		color: var(--light1);
		margin-right: 30px;
	}
	.navtree a:first-child {
		color: rgba(var(--maingb3), 1);
	}

	#innerwrapper-1 {
		padding: 0px;
	}
	.catwrap {
		position: relative;
		width: 100%;
		color: var(--light1);
		background-color: var(--genbg);
		overflow: hidden;
		margin-bottom: 30px;
	}
	.category {
		background-image: url('https://www.transparenttextures.com/patterns/cartographer.png');
		background-color: var(--genbg);
		background-blend-mode: lighten;
		background-position: top center;
		text-align: center;
		font-family: 'open sans';
		font-size: 10px;
		font-weight: 500;
		line-height: 100%;
		text-transform: uppercase;
		letter-spacing: 3px;
		padding: 60px;
		border-bottom: 1px solid var(--dark2);
	}
	.cattitle span {
		font-family: var(--kalnia);
		color: var(--light1);
		background: rgba(var(--maingb3), 1);
		margin: 0px 50px 0px 5px;
		padding: 4px 7px;
	}
	.forumrow-1 {
		padding: 30px;
		background: var(--dark1);
		min-height: 500px;
		display: flex;
		flex-wrap: wrap;
	}
	.forumrow-rd {
		margin: 0px auto;
		width: 1150px;
		background-color: #555;
		height: 100px;
		position: relative;
		padding: 30px;
		display: flex;
		align-items: center;
		outline: 1px solid var(--dark2);
		border: 10px solid var(--genbg);
		background-size: cover;
		background-image: url(https://b.l3n.co/i/Ov7rU0.png);
		background-position: center right;
		background-blend-mode: multiply;
		margin-bottom: 10px;
	}
	.forumrow-rd .forum-name:after {
		content: 'the site handbook.';
		display: block;
		font: 12px 'open sans' !important;
		color: var(--light2) !important;
	}
	.forumrow-rd .forum-name {
		text-transform: uppercase;
		font-family: 'crimson';
		font-size: 60px;
		letter-spacing: 5px;
		color: transparent;
		-webkit-text-stroke: 1px rgba(var(--maingb3), 1);
		font-weight: 300;
	}
	.forumrow-1 .forumw {
		width: 360px;
		height: 500px;
		border: 1px solid var(--dark2);
		background-color: var(--genbg);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.forumrow-1 .forumw .fw-top {
		background-image: url('https://www.transparenttextures.com/patterns/swirl.png');
		background-color: rgba(var(--maingb3), 0.5);
		height: 120px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.forumrow-1 .forumw .forum-name a {
		color: var(--light1);
		text-decoration: none;
	}
	.forumrow-1 .forumw .forum-name {
		font-family: var(--averia);
		font-size: 12px;
		line-height: 9px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 2px;
		background-color: var(--genbg);
		padding: 10px 12px;
	}
	.forumrow-1 .forumw .forum-stats {
		color: rgba(var(--maingb3), 1);
		text-align: center;
		font-family: 'open sans';
		font-size: 9px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding: 30px 0px 5px 0px;
	}
	.forumrow-1 .forumw .forum-statss {
		margin: 0 25px;
	}
	.forumrow-1 .forumw .forum-desc {
		padding: 50px 50px 50px 50px;
		font-size: 12px;
		font-family: 'open sans';
		text-align: justify;
		line-height: 170%;
		color: var(--light2);
		height: 155px;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
	.forumrow-1 .forumw .forum-stuff {
		width: 100%;
		box-sizing: border-box;
		height: 150px;
		border-top: 1px solid var(--dark2);
		padding: 10px 20px 20px 20px;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
	.forumrow-1 .forumw .forum-stuff-icon {
		position: absolute;
		top: -20px;
		width: 40px;
		height: 40px;
		border: 5px solid var(--genbg);
		background-color: var(--dark2);
		outline: 1px solid var(--dark2);
		background-size: cover;
	}
	.forumrow-1 .forumw .forum-stuff-user,
	.forumrow-1 .forumw .forum-stuff-topic {
		font-family: open sans;
		font-size: 8px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: rgba(var(--maingb3), 1);
		text-align: center;
	}
	.forumrow-1 .forumw .forum-stuff-topic a {
		text-decoration: none;
		color: var(--light1);
		display: block;
		background-color: var(--lotus);
		padding: 3px;
		font-family: var(--averia);
		font-size: 10px;
		letter-spacing: 1px;
		margin: 10px;
	}
	.forumrow-1 .forumw .forum-stuff-user a {
		font-size: 14px;
		color: var(--light1);
		font-weight: 700;
		text-decoration: none;
		font-family: var(--averia);
		letter-spacing: 0px;
	}
</style>
