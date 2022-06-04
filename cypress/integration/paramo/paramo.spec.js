import { Then, When } from "cypress-cucumber-preprocessor/steps";
import RegisterUserPage from "../../support/PageObjects/RegisterUserPage";
import BasePage from "../../support/PageObjects/BasePage";


describe('Paramo', () => {

    When('I press on SingUp button', () => {
        RegisterUserPage.getSignUpButton().click()
        BasePage.waitSpinner()
    })
    
    And('I complete field Email {string}', (email) => {
        RegisterUserPage.getEmailInput().type(email)
    })

    And('I complete field Password {string}', (password) => {
        RegisterUserPage.getPasswordInput().type(password)
        RegisterUserPage.getConfirmPasswordInput().type(password)
    })

    And('I agree terms & conditions', () => {
        RegisterUserPage.getTermsAndConditions().click()
    })

    And('I select question', () => {
        RegisterUserPage.getQuestion().click()
        RegisterUserPage.getSelectQuestion().click()
        RegisterUserPage.getSecretAnswer().type("Guillermo Franchella")
    })

    And('I complete field Login {string}', (loginValue) => {
        RegisterUserPage.getLogin().type(loginValue)
    })

    And('I create account', () => {
        RegisterUserPage.getCreate().click()
    })

    Then('I register the new User', () => {
        BasePage.waitSpinner()
        RegisterUserPage.getSuccessfully().should('exist')
    })
})