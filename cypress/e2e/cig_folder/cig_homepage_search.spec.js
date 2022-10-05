/// <reference types = "cypress"/>

describe('Testing the search input field on homepage', () => {

    beforeEach(() => {
        cy.visit('https://www.careersingear.com/')
    })

    it('Search box', () => {
        cy.get('[placeholder="City, State or Zip"]').should('have.attr', 'required')
        cy.get('#keywords').type('flatbed')
        cy.get('[placeholder="City, State or Zip"]').eq(1).type('pit', {force: true})
        cy.get('[class="btn orange darken-4"]').click()
        cy.contains('Currently Viewing')
        cy.get('.filter-chip').should('contain', 'Flatbed').and('contain', 'pit')
        cy.get('.job-listings').its('length').should('be.gt', 0)
    })

    it('Advanced Filters testing the presence of elements', () => {
        cy.contains('Advanced Filters').click()
        cy.url().should('equal', 'https://www.careersingear.com/search')
        cy.get('.job-listings').its('length').should('be.gt', 0)
        cy.get('#keywords-filter').should('exist')
        cy.get('[aria-label="Detect Location"]').should('exist')
        cy.get('#location').should('exist').and('have.attr', 'required')
        cy.get('[name="radius"]').should('exist')
        //const dropDownRadiusValues = ['20 miles', '35 miles', '50 miles', '50 miles', '80 miles', '100 miles']
        //cy.get('[aria-label="Distance"]').invoke('text').should('equal', '\n Distance\n\n 20 miles\n 35 miles\n 50 miles\n 65 miles\n 80 miles\n 100 miles\n')
        cy.get('[class="grey-text text-darken-3"]').should('contain', 'Company')
        cy.get('[class="grey-text text-darken-3"]').should('contain', 'Haul Type Experience')
        cy.get('[class="btn waves-effect waves-light z-depth-0 filter"]').should('contain', 'Filter Results')
    
        // cy.get('[aria-label="Distance"]').find('option').then(options => {
        //     const actual = ['20 miles', '35 miles', '50 miles', '50 miles', '80 miles', '100 miles'].map(o => o.value)
        //     expect(actual).to.deep.eq(['20 miles', '35 miles', '50 miles', '50 miles', '80 miles', '100 miles'])
        //   })
    })

    it('Advanced filters testing by filling in and where jobs not found', () => {
        cy.contains('Advanced Filters').click()
        cy.get('[name="location"]').eq(3).type('USA', {force:true})
        cy.get('#oversized').check({force:true})
        cy.get('[class="btn waves-effect waves-light z-depth-0 filter"]').click()
        cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
    })

    it('Advanced filters testing by filling in and where jobs are found', () => {
        cy.contains('Advanced Filters').click()
        cy.get('[name="location"]').eq(3).type('OH', {force:true})
        cy.get('#flatbed').check({force:true})
        cy.get('[class="btn waves-effect waves-light z-depth-0 filter"]').click()
        cy.get('.job-listings').its('length').should('be.gt', 0)
    })

})