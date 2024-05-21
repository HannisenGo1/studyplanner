import React from 'react'
import Day from './Day'


describe('<Day />', () => {
  it('renders all week days', () => {
    // Skapa ett exempel på en dag med namn och tom todos-array
    const exampleDay = {
      name: 'Måndag', 
      todos: []
      
    };

    // Mounta komponenten
    cy.mount(<Day day={exampleDay} />);

    // Renderas måndag ut??
    cy.contains('Måndag');

    // Finns knappen 'Ny uppgift' ?
    cy.get('button').should('contain', 'Ny uppgift');
  });
});
