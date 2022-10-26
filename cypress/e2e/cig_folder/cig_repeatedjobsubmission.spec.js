///<reference types="cypress"/>

/* This test submits the same job 50 times */

Cypress._.times(50, () => {

    it('Testing of fillling job application', {retries: 3}, () => {

        cy.visit('https://www.careersingear.com/averitt-express/cdl-a-local-truck-driver-393135323033302d3330383032')
        
        //cy.wait(15000)
        cy.get('#radio_drivers_license_class_a_Yes').click({force: true})
        cy.get('[aria-label="Years of Experience"]').select('5 years')
        cy.get('[id="radio_driver_type_company driver"]').click({force:true})
        cy.get('#radio_team_solo_Solo').click({force: true})
        cy.get('#radio_lease_purchase_No').click({force:true})
        cy.get('#check_haul_type_oversized').check({force:true})
        cy.get('#check_endorsement_tanker').check({force:true})
        cy.get('[aria-label="Number of moving violations in the last 3 years?"]').select(0)
        cy.get('[aria-label="Number of preventable accidents in the last 3 years?"]').select(0)
        cy.get('[aria-label="First Name"]').type('Test1')
        cy.get('[aria-label="Last Name"]').type('Test2')
        cy.get('[aria-label="Zip Code"]').type('38002')
        cy.get('.form-control[aria-label="Email"]').type('test@test.com', {force:true})
        //cy.get('#email_container').type('test@test.com', {force:true})
        cy.get('[aria-label="Phone Number"]').type('8564792314')
    })
})