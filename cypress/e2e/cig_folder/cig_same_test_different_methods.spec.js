/// <reference types="cypress" />

import { cigHomePage } from "../../cig_page_objects/cig_homepage"

describe('Test the 3 companies on homepage', () => {
    const cighomepage = new cigHomePage()

    beforeEach(() => {
        cighomepage.visitCigHomePage()
    })
    // it('Search Feature on Homepage', () => {
    //     cy.get('#keywords').type("van")
    //     cy.get('#navigation-search > .btn').click()
    
    // })
    it('Testing Method 1: Making sure that <a> has all the properties', () => {
        cy.get('[href="/us-xpress"]').should('have.prop', 'href').and('equal', 'https://www.careersingear.com/us-xpress')
        cy.get('a[href="/us-xpress"]').should('have.attr', 'target', '_blank')
    })

    it('Removing the _blank target so that the page opens in the same tab', () => {
        cy.get('a[href="/us-xpress"]').invoke('removeAttr', 'target').click()
        cy.url().should('equal', 'https://www.careersingear.com/us-xpress')
    })

    it('Testing without removing the _blank target', () => {
        cy.get('a[href="/us-xpress"]').then(function ($a){
            const href = $a.prop('href')
            cy.visit(href)
            cy.url().should('equal', 'https://www.careersingear.com/us-xpress')
        })
    })
    it.only('testing US Xpress', () => {
        cy.visit('https://www.careersingear.com/us-xpress')

    })
   
})