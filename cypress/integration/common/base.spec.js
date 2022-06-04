import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../../support/PageObjects/BasePage";

describe('Base', () => {

        Given('I open Demo.Casino page on the Browser', () => {
            BasePage.navigate()
            BasePage.waitSpinner()
            BasePage.getGotIt().click() 
        })

        When('I press on SingIn button', () => {
            BasePage.getSingInButton().click()
            BasePage.getSingInAnchor().click()
            BasePage.waitSpinner()
        })

        And('I complete my {string} and my {string}', (myEmail, myPass) => {
            BasePage.getMyEmailInput().type(myEmail)
            BasePage.getMyPassInput().type(myPass)
        })

        And('I press on SignIn', () => {
            BasePage.getSignIn().click()
        })
        
        Then('I logged in', () => {
            BasePage.waitSpinner()
            BasePage.getUserInfo().should('exist')
        })
})
