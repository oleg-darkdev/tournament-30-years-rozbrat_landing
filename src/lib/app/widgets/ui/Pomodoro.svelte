<script>
  export let timer;
  
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';
	import { showNotification, playSound, minutsAndSecondsToSecondsConverter } from '@coreShared';
	import { CountdownTime } from '@coreEntities';

	import { Button } from '@coreShared';

	import {
		timers,
		newEntry,
		pomodoroState,
		runningTimerId,
		pomodoroPaused,
		stopwatchState
	} from '@coreShared';



	let stopped = true,
		paused = false,
		waiting = false,
		done = false,
		buttonText = 'Start';

  let status = '';


	$: $pomodoroPaused = paused;

	let currentIndex = 0,
		currentTimerCount = '00:00';

	onDestroy(() => {
		stopTimer();
	});

	const startTimer = () => {
		if (timer.status === 'running') {
      // status = 'run';
			timer.pause();
		} else if (timer.status === 'paused') {
			waiting = false;
      // status = 'pause';

			timer.resume();
      // console.log('paused timer')
		} else {
      // status = 'run';
			timer.start($timers[currentIndex].time * 60000, 1000);
      //  console.log('&&&& timer')
      //
		}

		if (waiting) {
			timer.pause();
			buttonText = 'Continue';
		}

		done = false;

		$pomodoroState = true;
		$runningTimerId = $timers[currentIndex].id;
	};

	const stopTimer = () => {
		playSound('/sounds/timer-done.wav');

		waiting = false;
		done = false;
		currentIndex = 0;
		currentTimerCount = '10:00';
		timer.stop();
		$pomodoroState = false;
		$runningTimerId = 0;
	};

	timer.on('tick', (ms) => {
		currentTimerCount = timeAdapter(ms);
	});

	function timeAdapter(ms) {
		let minutes = Math.floor(ms / 60000);

		let seconds = ((ms % 60000) / 1000).toFixed(0);

		return parseInt(seconds) === 60
			? (minutes + 1 < 10 ? '0' + (minutes + 1) : '' + (minutes + 1)) + ':00'
			: (minutes < 10 ? '0' : '') + minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
	}

	$: currentTimerCountInSeconds = minutsAndSecondsToSecondsConverter(currentTimerCount);

	timer.on('statusChanged', (status) => {
		if (status === 'stopped') {
			buttonText = 'Start';
			paused = false;
			stopped = true;
		} else if (status === 'running') {
			buttonText = 'Pause';
			paused = false;
			stopped = false;
		} else {
			buttonText = 'Resume';
			paused = true;
			stopped = false;
		}
	});

	timer.on('done', () => {
		let currentName = $timers[currentIndex].name;
		playSound('/sounds/timer-done.wav');

		$timers[currentIndex].completed = true;

		currentIndex = currentIndex + 1;

		if (currentIndex < $timers.length) {
			if (browser ? !JSON.parse(localStorage.getItem('waitForStart')) : '') {
				showNotification("'" + currentName + "' completed!", 'Your next timer has started now.');
			} else {
				waiting = true;

				showNotification(
					"'" + currentName + "' completed!",
					'Check the app to start the next timer.'
				);
			}
			startTimer();
		} else {
			currentIndex = 0;
			done = true;
			showNotification(
				"'" + currentName + "' completed!",
				'You have completed all of your timers.'
			);
		}
	});


</script>



<div class="grid grid-cols-2 gap-8 w-full">
  <!--{ status === 'pause' ? 'bg-red-800': ' '} border border-white border-2 -->
    <div class=" h-40 w-80  px-8 py-2">
      <CountdownTime bind:paused bind:currentTimerCountInSeconds />
    </div>


    <div class="w-full">
      <Button
				buttonTitle={buttonText + ' timer'}
				withIcon
				buttonFunction={startTimer}
				disable={timers.length === 0 || done}
			>
				<span slot="icon">
					{#if stopped || paused}
						<svg
							width="300"
							height="300"
							viewBox="0 0 22 22"
							fill="#fff"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.3412 9.84166C19.2196 10.3565 19.2196 11.6435 18.3412 12.1583L6.97647 18.8188C6.09804 19.3336 5 18.6901 5 17.6605L5 4.33953C5 3.30989 6.09804 2.66637 6.97647 3.18119L18.3412 9.84166Z"
							/>
						</svg>
					{:else}
						<svg
							width="300"
							height="300"
							viewBox="0 0 22 22"
							fill="#991b1b"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect x="5" y="4" width="5" height="14" rx="1" />
							<rect x="14" y="4" width="5" height="14" rx="1" />
						</svg>
					{/if}
				</span>
				<span slot="label">{buttonText}</span>
			</Button>
  </div>
</div>



<svelte:window
	on:beforeunload={(event) => {
		if (!stopped && !done) {
			// Cancel the event as stated by the standard.
			event.preventDefault();
			// Chrome requires returnValue to be set.
			event.returnValue = '';
			// more compatibility
			return '...';
		}
	}}
/>

<style>
	/* .timer-number {
		font-family: 'Monument Extended';
		font-size: clamp(5rem, 20vw + 1rem, 10rem);
		line-height: 1;
		margin: 1rem 0 0.5rem 0;
		align-self: center;
		text-align: center;
		width: 100%;
	} */

	.action-controls-container {
		display: flex;
		justify-content: space-between;
		gap: 6px;
	}

	.main-controls {
		display: flex;
		column-gap: 4px;
	}
</style>
