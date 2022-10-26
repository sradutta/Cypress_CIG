///<reference types="cypress"/>


it('Testing of fillling job application', {retries: 3}, () => {

    const hrefData = new Array()
    const firstPart = 'https://www.careersingear.com'
    cy.visit('https://www.careersingear.com/crete-carrier-corporation')
    //const numOfJobs = cy.get('.job-listings').its('length') || cy.get('.company-page-job-listings').its('length')


    // const temp = cy.get('a[class="main-link"]').invoke('attr', 'href').then(href => {
    //     console.log('AAAAAAAAAAAAAAAAAAAAAAA: '+href)
    // })
    
    cy.get('.main-link').each(($el) => {
        cy.wrap($el).invoke('attr', 'href').then(href => {
            hrefData.push(firstPart+href)
            cy.visit(href)
            //cy.wait(15000)
            cy.get('#radio_drivers_license_class_a_Yes').click({force: true})
            cy.get('[aria-label="Years of Experience"]').select('5 years')
            cy.get('[id="radio_driver_type_company driver"]').click({force:true})
            cy.get('#radio_team_solo_Solo').click({force: true})
            cy.get('#radio_lease_purchase_No').click({force:true})
            cy.get('#check_haul_type_oversized').check({force:true})
            cy.get('#check_endorsement_tanker').check({force:true})
            cy.get('[aria-label="Number of moving violations in the last 3 years?"]').select(0)
            cy.get('[aria-label="Number of preventable accidents in the last 3 years?"]').select(0)
            cy.get('[aria-label="First Name"]').type('Test1')
            cy.get('[aria-label="Last Name"]').type('Test2')
            cy.get('[aria-label="Zip Code"]').type('38002')
            cy.get('.form-control[aria-label="Email"]').type('test@test.com', {force:true})
            cy.get('[aria-label="Phone Number"]').type('8564792314')
        })
        .then( () => {
            console.log(hrefData)
        })
    }).then( () => {
        console.log(hrefData)
    })


    // for(let j = 0; j < numOfJobs; j++){
    //     cy.visit(hrefData[j])
        // const jobAppNotPresent = await this.page.locator('.off-site').isVisible()
        // if(jobAppNotPresent === true){
        //     continue
        // }
        // else {
        //     await forms.fillInJobRelatedQuestions("Yes", "4 years", "Company driver", "Team", "No", "Van", "Tanker", "0", "0")
        //     await forms.fillInPersonalCredentials("Test1", "Test2", "07675", "test@test.com", "8564712502")
        //     //await forms.assertLegalVerbiage()
        //     await forms.clickSubmit()
        //     await forms.assertJobApplicationSubmitted()
        //     await this.page.screenshot({path: 'longformsubmitted_'+[j]+'.png', fullPage:true}) 
        // }      
    // }     
})