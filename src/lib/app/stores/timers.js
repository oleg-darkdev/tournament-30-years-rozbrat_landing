import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const defaultPomodoros = [
	{
		id: 2,
		name: 'default 10 min',
		time: 10,
		completed: false
	},

];

const defaultEntry = () => {
	return {
		id: Date.now(),
		name: 'New task',
		time: 10,
		completed: false
	};
};

export const newEntry = () => {
	timers.modify(defaultEntry());
};

function timerStore() {
	let state = defaultPomodoros;
	//  :
	// state = browser ? JSON.parse(localStorage.getItem('timers')) : defaultPomodoros;

		// state = browser ? defaultPomodoros  : JSON.parse(localStorage.getItem('timers'));

	const { subscribe, set, update } = writable(state);

	const timers = {
		sort(dragId, dropId) {
			update((state) => {
				let oldIndex = dragId;

				let newIndex = dropId;

				state.splice(newIndex, 0, state.splice(oldIndex, 1)[0]);
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';

				return state;
			});
		},
		modify(data) {
			update((state) => {
				let index = state.findIndex((state) => state.id == data.id);

				if (state[index] == null) {
					state = [data].concat(state);
				} else {
					state[index] = data;
				}
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';
				return state;
			});
		},
		delete(id) {
			update((state) => {
				state = state.filter((state) => state.id != id);
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';

				return state;
			});
		},
		reset() {
			update((state) => {
				state = defaultPomodoros;
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';

				return state;
			});
		}
	};

	return {
		subscribe,
		set,
		update,
		...timers
	};
}

export const timers = timerStore();

export const resetTimers = () => {
	if (window.confirm("This will replace all timers and can't be undone")) {
		timers.reset();
	}
};

//
export const draggingItem = writable();

export const pomodoroState = writable(false);
export const runningTimerId = writable(0);
export const pomodoroPaused = writable(false);

export const stopwatchState = writable(false);
export const stopwatchPaused = writable(false);

function lapStore() {
	const state = [];
	const { subscribe, set, update } = writable(state);

	const timers = {
		modify(data) {
			update((state) => {
				let index = state.findIndex((state) => state.id == data.id);

				if (state[index] == null) {
					state = [data].concat(state);
				} else {
					state[index] = data;
				}
				//localStorage.setItem("tim", JSON.stringify(state));

				return state;
			});
		},
		delete(id) {
			update((state) => {
				state = state.filter((state) => state.id != id);
				//localStorage.setItem("tim", JSON.stringify(state));

				return state;
			});
		},
		reset() {
			update((state) => {
				state = [];
				//localStorage.setItem("tim", JSON.stringify(state));

				return state;
			});
		}
	};

	return {
		subscribe,
		set,
		update,
		...timers
	};
}

export const laps = lapStore();
