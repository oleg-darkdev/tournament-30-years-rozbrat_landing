<script>
	// import { FooterApp } from '@coreEntities';

	import { pomodoroState, pomodoroPaused } from '@coreShared';
	import { ListPomodoro, Pomodoro } from '@coreWidgets';
  import Timer from 'tiny-timer';
  const firstTimer = new Timer(),
        secondTimer = new Timer();


	import { Button } from '@coreShared';
</script>

<!-- <Button grows running={$pomodoroState} paused={$pomodoroState && $pomodoroPaused}
	><span slot="label">POMODORO</span></Button
> -->



<section class='py-20 h-screen flex flex-col justify-between h-full'>
  <!-- flex items-center content-center  items-center w-full -->
    <div
      class=" mb-40"
    >
      <div class="mx-auto max-w-4xl">
        <Pomodoro timer={firstTimer}/>
        <!-- <ListPomodoro /> -->
      </div>
    </div>
    <div
      class=" mb-40"
    >
      <div class="mx-auto max-w-4xl">
        <Pomodoro timer={secondTimer}/>
        <!-- <ListPomodoro /> -->
      </div>
    </div>
    <!-- <div class="btns">

    </div>

    <div
      class="flex items-center content-center w-full"
    >
      <slot name="pomodoro-screen" />
    </div> -->
</section>



<!-- <section
	class="content flex min-h-screen flex-1 flex-col items-center justify-center overflow-y-scroll  bg-black pt-10 pb-40"
>

	<div
		class="flex h-auto flex-col items-center justify-center pb-36 xl:pb-10"
		class:hidden={activeScreen == 'Settings' || activeScreen == 'Stopwatch'}
	>
		<slot name="pomodoro-screen" />
	</div>

</section> -->

<!-- <FooterApp bind:activeScreen /> -->


	<!-- <div
		class="flex h-full flex-col justify-center"
		class:hidden={activeScreen == 'Settings' || activeScreen == 'Pomodoro'}
	>
		<slot name="stopwatch-screen" />
	</div> -->


  	<!-- <div class:hidden={activeScreen == 'Pomodoro' || activeScreen == 'Stopwatch'} class='lg:w-4/12 md:w-6/12 w-full'>
		<slot name="settings-screen" />
	</div> -->
