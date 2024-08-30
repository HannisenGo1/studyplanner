import { create } from "zustand";
import { todos as initialTodos } from './data.js'; 
import { getToday } from "../utils/date.js";

const daysOfWeek = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];

const useStore = create(set => ({
    todos: initialTodos, 
    setTodos: (newTodos) => set({ todos: newTodos }),
    todayName: getToday(),

    toggleTodo: id =>
        set(state => ({
            todos: state.todos.map(t =>
                t.id === id ? { ...t, done: !t.done } : t
            ),
        })),

        resetTodos: () => set(state => ({ t: state.todos.map(t => ({
            ...t,
            done: false
        }))
    })),

    deleteTodo: id => {
        set(state => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    },

    setTodayName: newTodayName => set({ todayName: newTodayName }),

    snoozeTodo: id => {
        set(state => {
            const currentTodos = state.todos; 
            const updatedTodos = currentTodos.map(todo => {
                if (todo.id === id) {
                    const currentDayIndex = daysOfWeek.indexOf(todo.day);
                    const nextDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
                    const nextDay = daysOfWeek[nextDayIndex];
                    return { ...todo, day: nextDay };
                }
                return todo;
            });
            return { todos: updatedTodos };
        });
    }
}));

export { useStore };
