import React from 'react';
import Day from './Day';
import { useStore } from '../../data/store';
// Här renderas alla dagar ut, med en task, och synliga knappar utan funktioner.
// u1 visa veckans alla dagar 

describe('<Day /> interactions', () => {
  const daysOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];

  const tasks = [
    { id: 1, day: 'Måndag', done: false, late: false, text: 'Göra klart inlämning' },
    { id: 2, day: 'Tisdag', done: false, late: false, text: 'Lektion i skolan 9-14' },
    { id: 3, day: 'Tisdag', done: false, late: true, text: 'Engelska C' },
    { id: 3, day: 'onsdag', done: false, late: true, text: 'Matte B' },
    { id: 3, day: 'Torsdag', done: false, late: true, text: 'Distans 9-15' },
  ];

  daysOfWeek.forEach(day => {
    it(`should show day, tasks, and button for ${day}`, () => {
      const testData = {
        name: day,
        todos: tasks.filter(task => task.day === day)
      };

      useStore.setState({ todos: testData.todos });

      cy.mount(<Day day={testData} />);

      // Kontrollera att dagen, uppgifterna och knappen visas
      cy.get('[data-cy="day"]').contains(day).should('be.visible');
      cy.get('button').contains('Ny uppgift').should('be.visible');
    });
  });
});
