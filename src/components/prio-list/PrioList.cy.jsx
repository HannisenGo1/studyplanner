import React from 'react';
import PrioList from './PrioList';
import { useStore } from '../../data/store';

// Test data
const taskData = [
  { id: 1, text: 'First task', late: false },
  { id: 2, text: 'Second task', late: true },
  { id: 3, text: 'Another task', late: false },
];


useStore.setState({ todos: taskData });

describe('<PrioList />', () => {
  it('Mountar PrioList??', () => {
    cy.mount(<PrioList />);
  });

  it('renders correct number of tasks', () => {
    cy.mount(<PrioList />);
    cy.get('.prio-items .item').should('have.length', taskData.length);
  });

  it('renders tasks correctly', () => {
    cy.mount(<PrioList />);
    taskData.forEach(todo => {
      cy.contains(todo.text).should('exist');
    });
  });

  it('filters tasks based on search input', () => {
    cy.mount(<PrioList />);
    cy.get('input[type="search"]').type('First');
    cy.get('.prio-items .item').should('have.length', 1);
    cy.contains('First task').should('exist');
  });


  it('renders all tasks when search is cleared', () => {
    cy.mount(<PrioList />);
    cy.get('input[type="search"]').type('First').clear();
    cy.get('.prio-items .item').should('have.length', taskData.length);
  });
});
