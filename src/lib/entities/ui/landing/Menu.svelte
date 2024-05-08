<script>
    import CaretRight from "carbon-icons-svelte/lib/CaretRight.svelte";
 import CaretLeft from "carbon-icons-svelte/lib/CaretLeft.svelte";
 import Link from "carbon-icons-svelte/lib/Link.svelte";
 import Return from "carbon-icons-svelte/lib/Return.svelte";

    import { antISystems, social, historical, menu, emptyBoardgame, Email, GameConsole, BuildingInsights_2, PersonFavorite} from '$lib/shared';
	const boardgames = [].concat(antISystems, social, historical);



     $: now = 0;

  let step = 3;

export let  selectedMenu, selectedBoardgame;
</script>


<div class="c-work my-6">
  <ul class="c-work__list  ">


    {#if selectedMenu.id == 2}
    <button on:click={() => {selectedMenu = menu[0]; selectedBoardgame = emptyBoardgame}} class="mr-4 btn btn-circle btn-outline">
                    <Return size={32} />
                  </button>

    {#each boardgames.slice(now, now + step) as boardgame, i}
<li class="c-work__item py-2" >
      <div class="c-work-item " data-work-preview-id="{boardgame.id}">
        <div on:click={()=>selectedBoardgame = boardgame} class=" ">

        <span class="c-work-item__number u-b6">
                            {now + i + 1}
                        </span>
        <div class="c-work-item__title">
          <h3 style='margin-bottom: 0.2em;' class="u-a6 ">
            {boardgame.title}
          </h3>
        </div>
        </div>

        <span class="c-work-item__category u-b4">
                    {boardgame.shortDesc}
                        </span> <br />
                        <a href={boardgame.links.site} target='_blank' class="c-work-item__category u-b4">
                    <p class='flex flex-row'> <Link size={22} /> <span class='ml-4'>{boardgame.links.site} </span> </p>
                        </a>
      </div>
    </li>
    {/each}

    <div class="flex justify-center">
              {#if now > 0}
                  <button on:click={() => now = now - step} class="mr-4 btn btn-circle btn-outline">
                    <CaretLeft size={32}/>
                  </button>
                            {/if}

                  <button on:click={() => now = now + step} class="btn btn-circle btn-outline">
                    <CaretRight size={32}/>
                  </button>
            </div>


                    {:else}
                    {#each menu as nav, i}
    <li class="c-work__item pl-10" on:click={()=> {selectedMenu = nav;  selectedMenu.id == 2 ? selectedBoardgame = boardgames[0]: ''}}>
      <div class="c-work-item " data-work-preview-id="{nav.id}">
        <span class="c-work-item__number u-b6">
                             {#if nav.id == 1}
                              <Email size={40} />


                            {:else if i + 1 ==2}
                                                                                      <GameConsole size={40} />

                            {:else if i + 1 ==3}
                                                          <BuildingInsights_2 size={40} />

                            {:else if i + 1 ==4}
                                                          <PersonFavorite size={40} />

                            {:else}
                              <Email size={40} />
                            {/if}
                        </span>
        <div class="c-work-item__title">
          <h3 class="u-a6" style='margin-bottom: 0.4em;'>
            {nav.title}
          </h3>
        </div>
        <span class="c-work-item__category u-b4">
                    {nav.subTitle}
                        </span>
      </div>
    </li>


    {/each}

            <div class="flex justify-center">
              {#if now > 0}
                  <button on:click={() => now = now - step} class="mr-4 btn btn-circle btn-outline">
                    <CaretLeft size={32}/>
                  </button>
                            {/if}
                {#if now > 5}
                  <button on:click={() => now = now + step} class="btn btn-circle btn-outline">
                    <CaretRight size={32}/>
                  </button>
                {/if}
            </div>
    {/if}
  </ul>
</div>


<style>

.u-b6 {
  margin: 0;
  font-size: 10px;
}

.u-b4 {
  margin: 0;
  font-size: 14px;
}

.u-a6 {
  margin: 0;
  margin-bottom: 0.6em;
  font-size: 36px;
}

.u-a7 {
  margin: 0;
  font-size: 64px;
  padding: 60px 60px 0 60px;
}

.c-work {
  width: 100%;
  padding: 60px;
  height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.c-work__list {
  position: relative;
  z-index: 2;
}
.c-work__item {
  display: block;
}

.c-work-item {
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 15px 0;
}
.c-work-item__number {
  position: absolute;
  display: inline-block;
  right: 100%;
  top: 25px;
  margin-right: 25px;
  pointer-events: none;
  transition: all 0.2s 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}
.c-work-item__title {
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}
.c-work-item__category {
  display: inline-block;
  transition: all 0.2s 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}
.c-work-item__category i {
  font-style: normal;
  display: inline-block;
  margin-right: 8px;
}
.c-work-item:hover .c-work-item__title {
  transform: translateX(10px);
}
.c-work-item:hover .c-work-item__number {
  opacity: 0;
  transform: translateX(20px);
}
.c-work-item:hover .c-work-item__category {
  transform: translateX(10px);
}

.c-work-preview {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  padding-right: 60px;
  pointer-events: none;
  z-index: 1;
}
.c-work-preview__canvas {
  display: block;
  position: absolute;
  top: 0;
  right: 60px;
  width: 41.6666666667%;
  height: 100%;
}
.c-work-preview__canvas .canvas {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  left: 0;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  background-size: 0;
}
.c-work-preview__canvas canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.c-work-preview__list {
  display: block;
  position: absolute;
  top: 0;
  right: 60px;
  width: 41.6666666667%;
  height: 100%;
}
.c-work-preview__item {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  left: 0;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}
.c-work-preview__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  visibility: hidden;
}

</style>
