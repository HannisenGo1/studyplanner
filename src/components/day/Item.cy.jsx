import Item from "./Item";
import React from "react";
import { useStore } from "../../data/store.js";

describe('<Item />', () => {
    it('renders a todo item and removes it when delete icon is clicked', () => {
        const item = {
            id: 1,
            text: 'Testning hääär',
            done: false,
            late: false
        };

        const onUpdateTest = todo => {
            console.log("updated todos:", todo);
        };

        // Mount the Item component with the item as prop
        cy.mount(<Item item={item} onUpdate={onUpdateTest} />);

        // Check initial visibility
        cy.get('.item').should('be.visible');
        cy.get('input[type="checkbox"]').should('not.be.checked');
        cy.contains('✍️').should('be.visible');
        cy.contains('🗑️').should('be.visible');

        // Click the delete icon
        cy.contains('🗑️').click();

        // Ensure the item is no longer in the DOM
        cy.get('.item').should('not.exist');
    });

    it('removes a todo item and verifies DOM update', () => {
        const items = [
            { id: 1, text: 'Todo 1', done: false, late: false },
            { id: 2, text: 'Todo 2', done: false, late: false },
            { id: 3, text: 'Todo 3', done: false, late: false }
        ];

        // Set up the initial state
        useStore.setState({ todos: items });

        // Mount all items
        items.forEach(item => {
            cy.mount(<Item item={item} key={item.id} />);
        });

        const selector = '[data-cy="delete-icon"]';

        // Verify and remove each item
        cy.get(selector).each(($el, index, $list) => {
            cy.wrap($el).click(); // Click the delete icon

            // Wait for the action to complete
            cy.wait(500); // Adjust the wait time if necessary

            // Verify that the item is removed using the length
            cy.get(selector).should('have.length', $list.length - index - 1);

            // Verify that the item is not in the DOM
            cy.contains(items[index].text).should('not.exist');
        });

        // Ensure that there are no delete icons left
        cy.get(selector).should('not.exist');
    });
});
