import { create } from "zustand";
import { todos } from './data.js'
import { getToday } from "../utils/date.js";
// värdet från todo listan,
// uppdatera listan med den nya listan
//hämta dagens namn,datum
const daysOfWeek = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];


const useStore = create(set => ({
	todos: todos,
	setTodos: (newTodos) => set ({todos: newTodos}),
	todayName: getToday(),
	
	// för todo om -> done
	toggleTodo: id =>
		set(state => ({
		...state,
		todos: state.todos.map(t =>
			t.id === id ? { ...t, done: !t.done } : t
		),
	})),
	//återställa listan med reset och gör den till en tom
	// uppdatera listan med den nya listan
	//dagens datum,namn
	resetTodos: () => set(state => ({
		todos: state.todos.filter(t => !t.done)
	})),
	
	setTodayName: newTodayName => set({ todayName: newTodayName }),
	
	// snooza till nästa dag! 
	snoozeTodo: id =>
		set(state => {
		const updatedTodos = state.todos.map(todo => {
			if (todo.id === id) {
				const currentDayIndex = daysOfWeek.indexOf(todo.day);
				const nextDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
				const nextDay = daysOfWeek[nextDayIndex];
				return { ...todo, day: nextDay };
			}
			return todo;
		});
		return { todos: updatedTodos };
	}),
}));


export { useStore }