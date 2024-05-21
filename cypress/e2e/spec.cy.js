// "Smoke test" är när man försöker render appen eller en komponent och ser om något går fel

describe('smoke test', () => {
	it('passes', () => {
		// Surfa till webbsidan och kör testerna på den
		cy.visit('/')  // baseUrl från config-filen tas med
	})
})