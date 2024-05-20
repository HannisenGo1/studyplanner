import { useStore } from './store';

describe('Zustand Store', () => {
    it('should add a new todo', () => {
        const store = useStore.getState();
        
        store.resetTodos();
        
        store.setTodos([
            { id: 1, day: 'må', done: false, text: 'Test todo' },
        ]);
        
        // Add a new todo
        store.setTodos([
            ...store.todos,
            { id: 2, day: 'ti', done: false, text: 'Another todo' }
        ]);
        
        // Verify that the new todo has been added
        expect(store.todos).to.have.length(2);
        expect(store.todos[1].text).to.equal('Another todo');
    });
    
    it('should remove a todo', () => {
        const store = useStore.getState();
        
        store.resetTodos();
        
        store.setTodos([
            { id: 1, day: 'må', done: false, text: 'Test todo' },
            { id: 2, day: 'ti', done: false, text: 'Another todo' }
        ]);
        
        // Remove a todo
        store.toggleTodo(1);
        
        // Verify that the todo has been removed
        expect(store.todos).to.have.length(1);
        expect(store.todos[0].id).to.equal(2);
    });
    
    // Add more test cases for other scenarios
});

