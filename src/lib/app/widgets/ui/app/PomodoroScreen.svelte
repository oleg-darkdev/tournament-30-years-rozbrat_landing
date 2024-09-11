<script>
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

<div class="mx-auto max-w-4xl">
	<Pomodoro timer={firstTimer}/>
	<!-- <ListPomodoro /> -->
</div>

<style>
</style>
