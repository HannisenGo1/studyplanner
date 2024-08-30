import React from 'react';
import Item from './Item';
import { useStore } from '../../data/store';
// u2, u3 ! komponent testning

describe('testing the Item component', () => {
    const todos = [
        { id: 1, day: 'måndag', done: true, late: false, text: 'Göra klart inlämning' },
        { id: 2, day: 'tisdag', done: true, late: true, text: 'Lektion i skolan 9-16' },
        { id: 3, day: 'måndag', done: false, late: true, text: 'Övning 1' },
        { id: 4, day: 'onsdag', done: false, late: false, text: 'Repetera lektionen' },
    ];
    
    beforeEach(() => {
        useStore.setState({ todos });
    });
    
    it('renders a todo item with proper classes and labels', () => {
        cy.mount(<Item item={todos[0]} />);
        
        cy.get('[data-cy="todo-item"]').should('have.class', 'done');
        
        cy.get('[data-cy="text-label"]').contains('Göra klart inlämning').should('be.visible');
        
        cy.get('[data-cy="todo-item"]').should('be.visible');
        cy.get('[data-cy="todo-item"]').should('have.class', 'done');
        cy.get('[data-cy="todo-item"]').should('not.have.class', 'due');
        
        cy.get('input[type="checkbox"]').should('be.checked');
        
        cy.get('[data-cy="edit-icon"]').should('be.visible');
        cy.get('[data-cy="delete-icon"]').should('be.visible');
        cy.get('[data-cy="snooze-icon"]').should('be.visible');
    });
    
    it('should delete a todo item from the store', () => {
        const initialTodos = [...todos]; 
        const itemIdToDelete = initialTodos[0].id;
        
        useStore.getState().deleteTodo(itemIdToDelete);
        
        const updatedTodos = useStore.getState().todos;
        expect(updatedTodos).to.not.deep.include(initialTodos.find(todo => todo.id === itemIdToDelete));
    });
    
    it('should edit a todo item and update the text', () => {
        const newText = 'Ny todo text';

        const item = todos[0];

        cy.mount(<Item key={item.id} item={item} />);

        cy.get('[data-cy="edit-icon"]').click();
        cy.get('[data-cy="input-field"]').clear().type(newText);

        cy.get('[data-cy="save-icon"]').click();
    
       
        cy.get('[data-cy="text-label"]').should("exist", newText);
      
    });
    });
    
