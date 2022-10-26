///<reference types='cypress'/>

/* Tests the features of the advertise page */

it('The Advertise Page', () => {

    cy.visit('https://www.careersingear.com')
    cy.get('[class="tab tab-advertise"]').click({force:true})
    cy.get('.tab-heading').should('contain', 'Advertise')
    cy.get('span[class="small"]').should('contain', 'close')
    cy.get('[class="tab-heading tab-advertise white-text"]').should('have.css', 'background-color').and('equal', 'rgb(209, 73, 0)')
    //cy.get('#contact_email[aria-label="Email"]').should('contain', 'required')//.and('contain', 'Email (required)')
    cy.get('[for="contact_email"]').should('contain', 'Email (required)')
    cy.get('[for="name"]').should('contain', 'Full Name (required)')
    cy.get('[for="subject"]').should('contain', 'Subject (required)')
    cy.get('[for="textarea"]').should('contain', 'Question or Comments (required)')
    cy.get('#submit_button').should('contain', 'Submit')
    cy.get('#submit_button').should('have.css', 'background-color').and('equal', 'rgb(13, 125, 186)')



})