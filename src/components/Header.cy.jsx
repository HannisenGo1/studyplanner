import React from 'react';
import Header from './Header';

describe('<Header />', () => {
  it('renders correctly', () => {
    cy.mount(<Header />);

    cy.contains('Vecka').should('exist'); 
    cy.get('.restart-week').should('exist'); 
  });
});
// rubriken finns med
//  knappen "Starta om vecka" finns med