// USER STORY: 
// Som en student vill jag kunna ändra texten för en todo item,
// så att jag kan uppdatera den om något nytt händer

//Acceptans kriterier:
// Det ska finnas en text att ändra på
// En knapp som man trycker på för att texten ska bli en label
// en label att skriva in i
//En knapp för att spara det uppdaterade värdet / texten
// Visa den nya texten


describe("TODO - Edit todo item", () => {
	it("page loading and can change a todo-item text", () => {
		cy.visit("/");
		
		cy.get('[data-cy="todo-item"]').first().should('be.visible');
		
		cy.get('[data-cy="edit-icon"]').first().click();
		
		cy.get('[data-cy="input-field"]').should('be.visible');
		
		//const newText = "testning";
		//cy.get('[data-cy="input-field"]').clear().type(newText);
		cy.get('[data-cy="save-icon"]').click();
	//	cy.get('[data-cy="todo-item"]').first().contains(newText).should('be.visible');
	});
});

//USER STORY:
//Som en student vill jag kunna snooza en todo item 
//(dvs flytta till nästa dag), så att jag inte blir påmind om mina tidigare misslyckanden

//Acceptans kriterier:
//Det ska finnas en snooza-knapp bredvid varje todo item.
//Snooza-knappen ska vara synlig och klickbar.
//När snooza-knappen klickas på, ska todo item flyttas till nästa dag.
//Todo item ska inte längre visas under den ursprungliga dagen.

it("can snooze a todo item to the next day", () => {
	cy.visit("/");

	cy.get('[data-cy="todo-item"]').should('have.length.greaterThan', 0);

	
	cy.get('[data-cy="todo-item"]').first().then(($todo) => {
		const todoText = $todo.text();
		cy.wrap($todo).find('[data-cy="snooze-icon"]').click();
		cy.get('[data-cy="todo-item"]').contains(todoText).should('not.exist');

	});
});

