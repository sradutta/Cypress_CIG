///<reference types = "cypress"/>

describe('Testing the three companies from homepage', () => {

    beforeEach ( () => {
        cy.visit('https://www.careersingear.com/')
    })

    it('testing first company US Xpress', () => {
        cy.get('a[href="/us-xpress"]').invoke('removeAttr', 'target').click()
        cy.get('.company-name').should('contain', 'US Xpress')
        cy.get('.company-page-job-listings').should('contain', 'Apply Now')
        cy.contains('[class="row company-page-job-listings no-margin"]', 'Apply Now').its('length').should('be.gt', 0) //redundant
    })

    it('Testing 2nd company Penske', () => {
        cy.get('[href="/penske/jobs"]').invoke('removeAttr', 'target').click()
        cy.get('.company-name').should('contain', 'Penske')
        cy.get('.company-page-job-listings').should ('contain', 'Apply Now')
    })

    it('Testing 3rd company Crete Carrier', () => {
        cy.get('[href="/crete-carrier-corporation"]').invoke('removeAttr', 'target').click()
        cy.get('.company-name').should('contain', 'Crete Carrier Corporation')
        cy.get('.company-page-job-listings').should('contain', 'Apply Now')
    })

})

