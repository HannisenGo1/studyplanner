import React from 'react';
import PrioItem from './PrioItem';

describe('<PrioItem />', () => {
  it('mountar PrioItems??', () => {
    const item = { id: 1, text: 'Test item', late: false };
    const num = 1;

    cy.mount(<PrioItem item={item} num={num} />);
  });

  it(' when late is true', () => {
    const item = { id: 2, text: 'Late item', late: true };
    const num = 2;

    cy.mount(<PrioItem item={item} num={num} />);
    cy.get('.item.due').should('exist');
  });

  it('when late is false', () => {
    const item = { id: 3, text: 'On-time item', late: false };
    const num = 3;

    cy.mount(<PrioItem item={item} num={num} />);
    cy.get('.item.due').should('not.exist');
  });

  it('renders the correct text', () => {
    const item = { id: 4, text: 'Check text rendering', late: false };
    const num = 4;

    cy.mount(<PrioItem item={item} num={num} />);
    cy.contains(`${num}. ${item.text}`).should('exist');
  });

  it('renders the correct number', () => {
    const item = { id: 5, text: 'Check number rendering', late: false };
    const num = 5;

    cy.mount(<PrioItem item={item} num={num} />);
    cy.contains(`${num}. ${item.text}`).should('exist');
  });

  it('renders nothing when item is undefined', () => {
    cy.mount(<PrioItem item={undefined} num={1} />);
    cy.get('.item').should('not.exist');
  });
});
