/// <reference types="cypress" />
import { selectors } from "../selectors/selectors";
import { utility } from "../selectors/utilities"

describe('verify the login', () => {

beforeEach(()=>{
      cy.visit("/")
    })

    it('verify the page navigate to home page ',() => {
        cy.title()
          .should('eq',"Swag Labs")
        })  
    it('Enter Wrong User Name & Password' ,() => {
      
      utility.login('wrongUserName', 'wrongPassword')
        })  
    it('Enter correct User Name & Password' ,() => {
          utility.login('standard_user', 'secret_sauce')
            })  
     
})

