import React from 'react';
import Day from './Day';

describe('<Day /> interactions', () => {
  const daysOfWeek = ['Måndag', 'Tisdag'];

  daysOfWeek.forEach(day => {
    it(`can edit, delete, and add todos for ${day}`, () => {
      const exampleDay = {
        name: day,
        todos: [
          { id: 1, day: 'Måndag', done: false, late: false, text: 'Göra klart inlämning' },
          { id: 2, day: 'Tisdag', done: false, late: false, text: 'Lektion i skolan 9-14' },
          { id: 3, day: 'Tisdag', done: false, late: true, text: 'Engelska C' },
        ]
      };

      cy.mount(<Day day={exampleDay} />);
  
      // Kontrollera att komponenten renderas korrekt
      cy.contains(day).should('be.visible');
      cy.contains('Göra klart inlämning').should('be.visible');
      cy.contains('Lektion i skolan 9-14').should('be.visible');

      // Redigeringsknappen
      cy.get('.icon.edit').first().click();
      // Aktiveras redigeringen??

      // Spara knappen
      cy.get('.icon.save').first().click();
    
      // Klicka på delete knappen
      cy.get('.icon.delete').first().click();

      // Lägga till en ny uppgift
      cy.get('button').contains('Ny uppgift').click();
      cy.get('input[placeholder="Ny uppgift"]').type('Ny testuppgift');
      cy.get('button.button-add').click();
     
    });
  });
});

