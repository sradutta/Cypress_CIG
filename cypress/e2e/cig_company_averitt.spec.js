///<reference types = "cypress"/>

describe('Testing the job listings of Averitt', () =>{

    beforeEach( () => {
        cy.visit('https://www.careersingear.com/averitt-express')
        const numOfJobs = cy.get('.company-page-job-listings').its('length')
    })

    it('Testing that the first 10 jobs have JD pages', () => {
        const numOfJobs = 10
        for(let i = 0; i < numOfJobs; i++){
            cy.get('[class="main-link"]').eq(i).click()
            cy.get('[class="company-name"]').should('contain', 'Averitt Express')
            cy.get('[class="col l2 m3 s12 company-logo"]').should('exist')
            cy.get('#applicationHeader').should('exist')
            //Fill the form
            cy.wait(5000)
            cy.get('#radio_drivers_license_class_a_Yes').click({force:true})
            cy.get('[aria-label="Years of Experience"]').select('5 years')
            cy.get('[value="company driver"]').click({force:true})
            cy.get('#radio_team_solo_Team').click({force:true})
            cy.get('#radio_lease_purchase_Yes').click({force:true})
            cy.get('[value="heavy haul"]').click({force:true})
            cy.get('[value="oversized"]').click({force:true})
            cy.get('[value="hazmat"]').click({force:true, multiple:true})
            cy.get('[value="tanker"]').click({force:true, multiple:true})
            cy.get('[aria-label="Number of moving violations in the last 3 years?"]').select('0')
            cy.get('[aria-label="Number of preventable accidents in the last 3 years?"]').select('0')
            cy.get('[aria-label="First Name"]').type('Test1')
            cy.get('[aria-label="Last Name"]').type('Test2')
            cy.get('[aria-label="Zip Code"]').type('30301')
            cy.get('[placeholder="eg. somebody@somewhere.com"]').type('test@test.com')
            cy.get('[aria-label="Phone Number"]').type('8564712830')
            cy.contains('I AGREE, SUBMIT').click({force:true})
            cy.url().should('equal', 'https://www.careersingear.com/prequalified')
            cy.go('back')
            cy.go('back')
        }
    })
})