import Item from "./Item";

describe('<Item />', () => {
    it('renders a todo item with proper classes and labels', () => {
        const getItem = {
            id: 1,
            text: 'Testning hääär',
            done: false,
            late: false
        };
        
        const onUpdateTest = todo => {
            console.log("updated todos:", todo)
        }
        
        // Item-komponenten todo (getItem) som props
        cy.mount(<Item item={getItem} onUpdate={onUpdateTest} />);
        
        
        cy.get('.item').should('be.visible');
        cy.get('.item').should('not.have.class', 'done');  
        cy.get('.item').should('not.have.class', 'due'); 
        
    
      
        cy.get('input[type="checkbox"]').should('not.be.checked'); 
        
        
        cy.contains('✍️'); 
        cy.contains('🗑️'); 
        cy.contains('✍️').click();
        cy.contains('✔️');
        
        cy.contains('✔️').click().then(() => {
            cy.get('.item label').should('be.visible');
        });
        
        
    });
});
