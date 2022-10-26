///<reference types='cypress'/>

/* This tests the state-tab from the top-right navigation menu.
Click on state-tab and navigate to https://www.careersingear.com/trucking-jobs.
48 state cards are located in that page. Thus, this test will 
navigate to each of the states individually and make sure jobs are listed.
It will also make sure that jobs are listed for that particular state only by 
asserting the presence of the state-abbreivation in the location input 
field.
*/

describe('The State-Tab link from top-right', () => {

    const baseURL = 'https://www.careersingear.com/trucking-jobs'
    const stateArr = ['al','az','ar','ca','co','ct','de','fl','ga',
                          'id','il','in','ia','ks','ky','la','me','md','ma',
                          'mi','mn','ms','mo','mt','ne','nv','nh','nj',
                          'nm','ny','nc','nd','oh','ok','or','pa','ri','sc',
                          'sd','tn','tx','ut','vt','va','wa','wv','wi','wy']
    const length = stateArr.length

    for(let i=0; i<length; i++){
        it('Testing state --'+ stateArr[i], () => {
            cy.visit(baseURL+'/'+stateArr[i])
            cy.get('.job-listings').its('length').should('be.gt', 0)
            cy.get('input#location[placeholder="Location"][aria-label="Location"]').invoke('val').should('equal',stateArr[i].toUpperCase())
        })
    }
})