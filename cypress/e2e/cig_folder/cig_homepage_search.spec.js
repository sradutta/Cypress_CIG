/// <reference types = "cypress"/>

/* This tests the search feature on the homepage. 
The magnifying glass search feature from the top
right navigation bar. It also checks the Advanced
Filters. 
*/

describe('Testing the search input field on homepage', () => {

    const typedKeyword = 'Flatbed'
    const typedPlace = 'OH'

    beforeEach(() => {
        cy.visit('https://www.careersingear.com/')
    })

    it('Search box', () => {
        cy.get('[placeholder="City, State or Zip"]').should('have.attr', 'required')
        cy.get('#keywords').type(typedKeyword)
        cy.get('[placeholder="City, State or Zip"]').eq(1).type(typedPlace, {force: true})
        cy.get('[class="btn orange darken-4"]').click()
        cy.contains('Currently Viewing')
        cy.get('.filter-chip').should('contain', typedKeyword).and('contain', typedPlace) || cy.get('.filter-chip').should('contain', typedPlace)
        cy.get('.job-listings').its('length').should('be.gt', 0) || 
                    cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
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

    it('Advanced filters testing by filling in with attributes such that jobs not found', () => {
        cy.contains('Advanced Filters').click()
        cy.get('[name="location"]').eq(3).type(typedPlace, {force:true})
        cy.get('#oversized').check({force:true})
        cy.get('[class="btn waves-effect waves-light z-depth-0 filter"]').click()
        cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
    })

    it('Advanced filters testing by filling in with attributes such that jobs are found', () => {
        cy.contains('Advanced Filters').click()
        cy.get('[name="location"]').eq(3).type(typedPlace, {force:true})
        cy.get('#flatbed').check({force:true})
        cy.get('[class="btn waves-effect waves-light z-depth-0 filter"]').click()
        cy.get('.job-listings').its('length').should('be.gt', 0)
    })

    it('Testing the magnifying-glass search feature that is found in header navigation menu', () => {
        cy.visit('https://www.careersingear.com/haul-types')
        cy.get('[class="nav-search-icon mdi mdi-magnify"]').click()

        //Properties
        cy.get('[aria-label="Keywords"]').invoke('attr', 'placeholder').should('contain', 'Keywords or Company')
        cy.get('[aria-label="Location"]').invoke('attr', 'placeholder').should('contain', 'City, State or Zip')
        cy.get('[aria-label="Location"]').should('have.attr', 'required')
        //const values = ["", "20", "35", "50", "65", "80", "100"]
        cy.get('option').should('contain', 'Distance')
        cy.get('[class="white btn-flat light-blue-text text-darken-1 safari_only_search"]').should('contain', 'Search')

        //Colors
        cy.get('[aria-label="Keywords"]').should('have.css', 'background-color').and('eq', 'rgba(0, 0, 0, 0)')
        cy.get('[aria-label="Location"]').should('have.css', 'background-color').and('eq', 'rgba(0, 0, 0, 0)')
        cy.get('[class="input-field distance"]').should('have.css', 'background-color').and('eq', 'rgba(0, 0, 0, 0)')
        cy.get('[class="white btn-flat light-blue-text text-darken-1 safari_only_search"]').should('have.css', 'background-color').and('eq', 'rgb(255, 255, 255)')

        //Input values and confirm search feature
        cy.get('[placeholder="City, State or Zip"]').type(typedPlace, {force: true})
        cy.get('[class="white btn-flat light-blue-text text-darken-1 safari_only_search"]').click()
        cy.contains('Currently Viewing')
        cy.get('.filter-chip').should('contain', typedPlace)
        cy.get('.job-listings').its('length').should('be.gt', 0) || 
                    cy.get('[class="orange-text text-darken-4 condensed"]').should('contain', 'We did not find any trucking jobs')
    })

})