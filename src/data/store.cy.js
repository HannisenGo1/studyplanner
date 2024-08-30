describe('localStorage access', () => {
    it('should be able to access localStorage', () => {
        cy.visit('/');
        cy.window().then((win) => {
            win.localStorage.setItem('testKey', 'testValue');
            expect(win.localStorage.getItem('testKey')).to.equal('testValue');
        });
    });
});