///<reference types="cypress"/>

/* This test verifies all the links from About CIG page
   It also verifies that the CDL Scholarship page opens and
   displays the corect heading. It also verifies that when 
   user clicks on "Get Started" from "About CIG" page, user
   is navigated to the correct page with all of CIG's job
   listings.
*/

describe('Testing About CIG Page', () => {

    beforeEach( () => {
        cy.visit('https://www.careersingear.com/about')
    })

    it('Test about cig page', () => {
        cy.get('h1[class="title white-text"]').should('contain', 'About')
        //cy.get('[class="hero primary-color open"].primary-color').should('have.css', 'background').and('equal', 'rgb(201 201 201)')
    })

    it('Test the link Get Started', () => {
        cy.contains('Get Started').click()
        cy.url().should('equal', 'https://www.careersingear.com/search')
        cy.get('.row,.job-listings').its('length').should('be.gt', 0)
    })

    it('Testing the CDL Scholarship link and page ', () => {
        cy.contains('CDL Scholarship').click()
        cy.url().should('equal', 'https://www.careersingear.com/cdl-scholarship') 
        cy.get('h1').should('contain', 'Careers In Gear Trucking Scholarship')
    })

    it('Testing the bbb link and page', () => {
        cy.get('a[href="https://www.bbb.org/csal/business-reviews/digital-marketing/randall-reilly-in-tuscaloosa-al-1323#sealclick"]').invoke('removeAttr', 'target').click()
        cy.url().should('equal', 'https://www.bbb.org/us/al/tuscaloosa/profile/digital-marketing/randall-reilly-llc-0463-1323#sealclick')
        cy.get('[aria-label="Better Business Bureau Homepage"]').should('contain', 'Better Business BureauBetter Business Bureau®')
    })

    it('Testing the chamber page and link', () => {
        cy.get('a[href="https://www.tuscaloosachamber.com/the-chamber/membership-directory#action=Listing&value=47720&searchID=265580&cid=160&did=37"]').invoke('removeAttr', 'target').click()
        cy.url().should('equal', 'https://westalabamachamber.com/#action=Listing&value=47720&searchID=265580&cid=160&did=37') 
    })
})