import React from 'react';
import Day from './Day';

describe('<Day />', () => {
  it('renders all week days', () => {
    // Montera Day-komponenten och skicka med en tom dag-array
    cy.mount(<Day day={[]} />);

    // Kontrollera att varje veckodag renderas korrekt
    cy.contains('Måndag');
    cy.contains('Tisdag');
    cy.contains('Onsdag');
    cy.contains('Torsdag');
    cy.contains('Fredag');
  

    // Du kan också göra andra kontroller för din komponent här
    // Till exempel att kontrollera att knappen 'Ny uppgift' finns

    // Exempel:
    cy.get('button').should('contain', 'Ny uppgift');
  });
});
