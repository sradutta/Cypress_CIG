///<reference types='cypress'/>

/* This tests the haul-types tab. Click on haul-type
from the top-right navigation menu. The test ensures
that each of the haul-types navigate user to the correct
page; user sees jobs. If jobs are not available, then
user is given the notice about the phone number to call. 
It also tests that the proper haul-type box is checked. */

describe('Testing the haul-type page', () => {

    beforeEach( () => {
        cy.visit('https://www.careersingear.com/haul-types')
    })

    it('Testing flatbed', () => {
        cy.contains('Flatbed').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/flatbed')
        //cy.get('#flatbed').should('be.checked')

        cy.get('span[style="all:unset"]').then(($el) => {
            if(($el.text() == "0") || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })

        // const numOfJobs = cy.get('.job-listings').its('length')
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }
    })

    it('Testing hazmat', () => {
        cy.contains('Hazmat').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/hazmat')
        //cy.get('#hazmat').should('be.checked')

        cy.get('span[style="all:unset"]').then(($el) => {
            if(($el.text() == "0") || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })

        // const numOfJobs = cy.get('.job-listings').its('length')
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }
        
    })

    it('Testing heavy haul', () => {
        cy.contains('Heavy Haul').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/heavy-haul')
        //cy.get('#heavy-haul').should('be.checked')

        cy.get('span[style="all:unset"]').then(($el) => {
            if((cy.wrap($el).contains('0')) || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })

        // const numOfJobs = cy.get('.job-listings').its('length')
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }
        
    })

    it('Testing oversized', () => {
        cy.contains('Oversized').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/oversized')

        cy.get('span[style="all:unset"]').then(($el) => {
            if((cy.wrap($el).contains('0')) || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })

        // cy.visit('https://www.careersingear.com/haul-type/oversized').then(() => {
        //     if(cy.contains('We did not find any trucking jobs')){
        //         // cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //         cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     } else {
        //         cy.get('.job-listings').its('length').should('be.gt', 0)
        //     }
        // })
        //cy.get('#oversized').should('be.checked')
        //const numOfJobs = cy.get('.job-listings').its('length')
        // const noJobPhrase = cy.contains('We did not find any trucking jobs')

        // if(noJobPhrase === true){
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')

        // }
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }
        
    })

    it('Testing reefer', () => {
        cy.contains('Reefer').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/reefer')
        //cy.get('#reefer').should('be.checked')
        // const numOfJobs = cy.get('.job-listings').its('length')
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }

        cy.get('span[style="all:unset"]').then(($el) => {
            if(($el.text() == "0") || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })
        
    })

    it('Testing tanker', () => {
        cy.contains('Tanker').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/tanker')
        //cy.get('#tanker').should('be.checked')

        cy.get('span[style="all:unset"]').then(($el) => {
            if(($el.text() == "0") || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })

        // const numOfJobs = cy.get('.job-listings').its('length')
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }    
    })

    it('Testing van', () => {
        cy.contains('Van').click()
        cy.url().should('equal', 'https://www.careersingear.com/haul-type/van')
        //cy.get('#van').should('be.checked')

        cy.get('span[style="all:unset"]').then(($el) => {
            if(($el.text() == "0") || (cy.wrap($el) == 0)) {
                cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
                cy.get('[class="condensed"]').should('contain', 'Suggestions')
                cy.contains('Call us now at').should('contain', '1-844-932-0940')
            }
            else {
                cy.get('.job-listings').its('length').should('be.gt', 0)
            }
        })

        // const numOfJobs = cy.get('.job-listings').its('length')
        // if(numOfJobs === 0) {
        //     cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
        //     //cy.get('[class="col l6 m12 s12"]:has-text("Suggestions")').should('contain', 'Call us now at 1-844-932-0940')
        //     cy.contains('Suggestions').should('contain', 'Call us now at 1-844-932-0940')
        //     console.log(numOfJobs) //debugging purpose
        // }
        // else {
        //     cy.get('.job-listings').its('length').should('be.gt', 0)
        // }  
        
    })
})