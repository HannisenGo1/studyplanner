import { create } from "zustand";
import { todos } from './data.js'
import { getToday } from "../utils/date.js";

const useStore = create(set => ({
	todos: todos,
	setTodos: (newTodos) => set ({todos: newTodos}),
	todayName: getToday(),
	
	toggleTodo: id =>
		set(state => ({
		...state,
		todos: state.todos.map(t =>
			t.id === id ? { ...t, done: !t.done } : t
		),
	})),
	resetTodos: () => set({ todos: [] }),
	setTodos: newTodos => set({ todos: newTodos }),
	setTodayName: newTodayName => set({ todayName: newTodayName }),
}));

export { useStore }
