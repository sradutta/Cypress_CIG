/// <reference types = "cypress" />

/* This tests all the footer links from CIG home page. 
It clicks on each of the footer link, navigates to the
respective page and checks the properties on the page. 
*/

describe('Testing all the footer links on homepage', () => {

beforeEach( () => {
    cy.visit('https://www.careersingear.com/')
})

it('Testing About CIG link', () => {
    cy.get('[href="/about"]').click()
    cy.get('h2').should('contain', 'For Job Seekers')
    cy.get('[href="/search"]').should('contain', 'Get Started').click()
    cy.get('[class="row job-listings"]').its('length').should('be.gt', 5)
})

it('Testing Advertise', () => {
    cy.get('[href="#tab-advertise"]').click()
    cy.get('.tab-advertise').should('contain', 'Advertise')
    cy.get('.tab-close').should('contain', 'close')
    // cy.get('.tab-close').click().then((el)=>{
    //     const el = cy.get('.advertise')
    //     el.should('have.css', 'display', 'none')
    // })
})

it('Testing RR Privacy Policy', () => {
    cy.contains('Randall-Reilly Terms of Use and Privacy Policy').invoke('removeAttr', 'target').click()
    cy.get('h1').should('contain', 'WEBSITE TERMS OF USE')
})

it('Testing Point of Collection link', () => {
    cy.contains('Point of Collection').invoke('removeAttr', 'target').click()
    cy.get('.otnotice-section-content').should('contain', 'POINT OF COLLECTION NOTICE')
})

it('Testing California Residents Notice link', () => {
    cy.contains('Notice California Residents – Exercise Your Rights').invoke('removeAttr', 'target').click()
    cy.get('.ql-align-center').should('contain', 'If you are a California or Nevada resident and would like to exercise any of your consumer rights, please select from the options below and provide the following information to submit your request to us. We will only use the information you provide to process your request and to maintain a record of your request and our response')
})

it('Testing RR Copyright Notice link', () => {
    cy.contains('© 2022 Randall-Reilly').invoke('removeAttr', 'target').click()
    cy.get('.eplus-wrapper').should('contain', 'We are the growth platform for vital industries.')
})

it('Testing the FB page link', () => {
    cy.get('[aria-label="Careers in Gear Facebook Page"]').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://www.facebook.com/CareersinGear')
})

it('Testing the twitter link', () => {
    cy.get('[aria-label="Careers in Gear Twitter Page"]').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://twitter.com/CareersInGear')
})

})