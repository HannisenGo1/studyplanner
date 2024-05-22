import React from 'react'
import Day from './Day'


describe('<Day />', () => {
  it('renders all week days', () => {
    
    const exampleDay = {
      name: 'Måndag', 
      todos: []
      
    };

   
    cy.mount(<Day day={exampleDay} />);

    // Renderas måndag ut??
    cy.contains('Måndag');

    // Finns knappen 'Ny uppgift' ?
    cy.get('button').should('contain', 'Ny uppgift');
  });
});
