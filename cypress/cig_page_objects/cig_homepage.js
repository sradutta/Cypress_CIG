export class cigHomePage{

    visitCigHomePage () {
        cy.visit('https://www.careersingear.com/')
    }

    visitUSXpressPage(){
        cy.visit('https://www.careersingear.com/us-xpress')
    }

    visitAverittPage() {
        cy.visit('https://www.careersingear.com/averitt-express')
    }

    visitCretePage(){
        cy.visit('https://www.careersingear.com/crete-carrier-corporation')
    }

    clickAndAssertCompanyTab() {
        cy.visit('https://www.careersingear.com/featured-trucking-companies')
    }

    clickAndAssertStateTab(){
        cy.visit('https://www.careersingear.com/trucking-jobs')
    }

    clickAndAssertHaulTypeTab(){
        cy.visit('https://www.careersingear.com/haul-types')
    }

    clickAndAssertAboutCigPage(){
        cy.visit('https://www.careersingear.com/about')
    }

    
}