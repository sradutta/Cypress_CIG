///<reference types = "cypress"/>

/* This tests that all the header links
from the CIG homepage. Thus, it clicks the cig logo, 
state, company and haul-type and navigates to the 
individual page. And, that each of those 
individual pages have all the required properties, 
and elements. 
*/

describe('Testing the header links on homepage', () =>{

    beforeEach(() => {
        cy.visit('https://www.careersingear.com/')
    })

    it('Testing the company tab', () => {
        cy.get('[class="dropdown-button hide-on-small-only condensed"]').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.careersingear.com/featured-trucking-companies')
        cy.get('.container').should('contain', 'Averitt Express', 'Crete Carrier Corporation', 'K&B Transportation', 'Penske', 'US Xpress',)
        cy.get('[href="/trucking-companies"]').should('contain', 'See more trucking companies hiring')
    })

    it('Testing the state tab', () => {
        cy.contains('State').click()
        cy.get('.state-name').eq(0).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/al')
        cy.get('.state-name').eq(1).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/az')
        cy.get('.state-name').eq(2).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ar')
        cy.get('.state-name').eq(3).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ca')
        cy.get('.state-name').eq(4).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/co')
        cy.get('.state-name').eq(5).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ct')
        cy.get('.state-name').eq(6).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/de')
        cy.get('.state-name').eq(7).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/fl')
        cy.get('.state-name').eq(8).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ga')
        cy.get('.state-name').eq(9).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/id')
        cy.get('.state-name').eq(10).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/il')
        cy.get('.state-name').eq(11).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/in')
        cy.get('.state-name').eq(12).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ia')
        cy.get('.state-name').eq(13).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ks')
        cy.get('.state-name').eq(14).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ky')
        cy.get('.state-name').eq(15).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/la')
        cy.get('.state-name').eq(16).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/me')
        cy.get('.state-name').eq(17).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/md')
        cy.get('.state-name').eq(18).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ma')
        cy.get('.state-name').eq(19).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/mi')
        cy.get('.state-name').eq(20).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/mn')
        cy.get('.state-name').eq(21).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ms')
        cy.get('.state-name').eq(22).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/mo')
        cy.get('.state-name').eq(23).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/mt')
        cy.get('.state-name').eq(24).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ne')
        cy.get('.state-name').eq(25).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/nv')
        cy.get('.state-name').eq(26).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/nh')
        cy.get('.state-name').eq(27).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/nj')
        cy.get('.state-name').eq(28).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/nm')
        cy.get('.state-name').eq(29).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ny')
        cy.get('.state-name').eq(30).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/nc')
        cy.get('.state-name').eq(31).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/nd')
        cy.get('.state-name').eq(32).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/oh')
        cy.get('.state-name').eq(33).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ok')
        cy.get('.state-name').eq(34).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/or')
        cy.get('.state-name').eq(35).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/pa')
        cy.get('.state-name').eq(36).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ri')
        cy.get('.state-name').eq(37).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/sc')
        cy.get('.state-name').eq(38).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/sd')
        cy.get('.state-name').eq(39).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/tn')
        cy.get('.state-name').eq(40).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/tx')
        cy.get('.state-name').eq(41).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/ut')
        cy.get('.state-name').eq(42).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/vt')
        cy.get('.state-name').eq(43).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/va')
        cy.get('.state-name').eq(44).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/wa')
        cy.get('.state-name').eq(45).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/wv')
        cy.get('.state-name').eq(46).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/wi')
        cy.get('.state-name').eq(47).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/trucking-jobs/wy')
    })
    
    it('Testing the haul-type link', () => {
        cy.contains('Haul Type').click()
        cy.url().should('include', 'https://www.careersingear.com/haul-types')
        cy.get('h1').should('contain', 'Haul Types')
        cy.get('.company-name').eq(0).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/flatbed')
        cy.get('.company-name').eq(1).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/hazmat')
        cy.get('.company-name').eq(2).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/heavy-haul')
        cy.get('.company-name').eq(3).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/oversized')
        cy.get('.company-name').eq(4).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/reefer')
        cy.get('.company-name').eq(5).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/tanker')
        cy.get('.company-name').eq(6).should('have.prop', 'href').and('equal', 'https://www.careersingear.com/haul-type/van')
    })

    it('Testing the CIG logo', () => {
        cy.get('[aria-label="Site logo link to homepage"]').should('have.prop', 'href').and('equal', 'https://www.careersingear.com/')
    })


})