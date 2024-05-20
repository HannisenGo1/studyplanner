import Item from "./Item";

describe('<Item />', () => {
    it('renders a todo item with proper classes and labels', () => {
        const getItem = {
            id: 1,
            text: 'Testa att skapa en todo',
            done: false,
            late: false
        };
        
        const onUpdateTest = todo => {
            console.log("updated todos:", todo)
        }
        
        // Item-komponenten todo (getItem) som props
        cy.mount(<Item item={getItem} onUpdate={onUpdateTest} />);
        
        
        cy.get('.item').should('exist');
        cy.get('.item').should('not.have.class', 'done');  
        cy.get('.item').should('not.have.class', 'due'); 
        
        cy.contains('Testa att skapa en todo');
        
        cy.get('input[type="checkbox"]').should('not.be.checked'); 
        
        
        //cy.contains('✍️'); //  att ändra-ikonen finns
        //cy.contains('🗑️'); // att ta bort-ikonen finns
        cy.contains('✍️').click();
        cy.contains('✔️');
        // efter klicket och kontrollera ändringen.
        cy.contains('✔️').click().then(() => {
            cy.get('.item label').should('exist');
        });
        
        
    });
});
