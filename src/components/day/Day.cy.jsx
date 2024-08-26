import React from 'react';
import Day from './Day';
// Visar ut måndag , tisdag i testning med endast ändring utav namn på uppgifterna.

describe('<Day /> interactions', () => {
  it('can edit,  and add todos for both Måndag and Tisdag', () => {
    const days = [
      {
        name: 'Måndag',
        todos: [
          { id: 1, day: 'Måndag', done: false, late: false, text: 'Göra klart inlämning' }
        ]
      },
      {
        name: 'Tisdag',
        todos: [
          { id: 2, day: 'Tisdag', done: false, late: false, text: 'Lektion i skolan 9-14' },
          { id: 3, day: 'Tisdag', done: false, late: true, text: 'Engelska C' }
        ]
      }
    ];

    // Rendera både måndag och tisdag 
    cy.mount(
      <div style={{ display: 'flex', gap: '20px' }}>
        {days.map(day => <Day key={day.name} day={day} />)}
      </div>
    );

    // Interaktion för Måndag
    cy.contains('Måndag').parent().within(() => {
      cy.get('button').contains('Ny uppgift').click();
      cy.get('input[placeholder="Ny uppgift"]').type('Ny testuppgift');
      cy.get('button.button-add').click();
    });

    // Interaktion för Tisdag
    cy.contains('Tisdag').parent().within(() => {
      cy.get('button').contains('Ny uppgift').click();
      cy.get('input[placeholder="Ny uppgift"]').type('Ny testuppgift för Tisdag');
      cy.get('button.button-add').click();
    });
  });
});
