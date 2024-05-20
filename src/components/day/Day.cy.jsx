import React from 'react';
import Day from './Day';

describe('<Day />', () => {
  it('renders all week days', () => {
    // Skapa ett exempel på en dag med namn och tom todos-array
    const exampleDay = {
      name: 'Måndag',
      todos: []
    };

    // Montera Day-komponenten och skicka med ett korrekt format
    cy.mount(<Day day={exampleDay} />);

    // Kontrollera att dagen renderas korrekt
    cy.contains('Måndag');

    // Du kan också göra andra kontroller för din komponent här
    // Till exempel att kontrollera att knappen 'Ny uppgift' finns
    cy.get('button').should('contain', 'Ny uppgift');
  });
});
