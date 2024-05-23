import { useStore } from './store';

describe('Zustand Store', () => {
    let store;
 //hämta storen
    beforeEach(() => {
        store = useStore.getState();
        store.resetTodos();
    });


    it('should add a new todo', () => {
        store.setTodos([
            { id: 1, day: 'må', done: false, text: 'Test todo' },
        ]);
        
        // lägg till ny todo
        store.setTodos([
            ...store.todos,
            { id: 2, day: 'ti', done: false, text: 'Another todo' }
        ]);
        
    });
    
    it('should remove a todo', () => {
        store.setTodos([
            { id: 1, day: 'må', done: false, text: 'Test todo' },
            { id: 2, day: 'ti', done: false, text: 'Another todo' }
        ]);
        
        // Remove en todo
        store.setTodos(store.todos.filter(todo => todo.id !== 1));

    });
});

