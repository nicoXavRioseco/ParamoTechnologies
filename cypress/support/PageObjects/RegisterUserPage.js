import 'cypress-wait-until';

class RegisterUserPage {

    //esta clase contiene los elementos utilizados para la registración de nuevos usuarios
    //todos los elementos de esta sección se encuentran acá para poder hacer mas fácil de
    //mantener los test cases

    //si bien el timeout default está configurado en cypress.json
    //mediante el waitUntil podría controlar el tiempo de espera específicamente para esta pantalla

    //boton Sign Up de la homepage
    getSignUpButton() {
        return cy.waitUntil(() => cy.get('a[href="/user/registration"]').first())
    }

    //campo para completar el email del nuevo usuario
    getEmailInput(){
        return cy.waitUntil(() => cy.get('input[data-test="input-email"'))
    }

    //campo para completar el password del nuevo usuario 
    getPasswordInput() {
        return cy.waitUntil(() => cy.get('input[data-test="input-password"]'))
    }

    //campo para confirmar el password del nuevo usuario
    getConfirmPasswordInput() {
        return cy.waitUntil(() => cy.get('input[data-test="input-password_confirmation"]'))
    }

    //check para aceptar los TyC
    getTermsAndConditions() {
        return cy.waitUntil(() => cy.get('label').contains("I unconditionally agree with "))
    }

    //campo para desplegar la lista de opciones para la pregunta secreta
    getQuestion() {
        return cy.waitUntil(() => cy.get('div[class="selectric selectric--placeholder"]'))
    }

    //opcion a seleccionar como pregunta
    getSelectQuestion(){
        return cy.waitUntil(() => cy.get('ul li').contains("Your favorite actor or actress"))
    }

    //campo para ingresar la respuesta a la pregunta
    getSecretAnswer(){
        return cy.waitUntil(() => cy.get('input[data-test="input-secret_answer"]'))
    }
   
    //campo para completar el username del nuevo usuario
    getLogin(){
        return cy.waitUntil(() => cy.get('input[data-test="input-username"]'))
    }

    //botón para crear el nuevo usuario
    getCreate(){
        return cy.waitUntil(() => cy.get('button[data-test="control-submit"]'))
    }

    //mensaje de notificación que indica que el usuario se creó correctamente
    getSuccessfully() {
        return cy.waitUntil(() => cy.get('p[class="notification__description"]'))
    }
}

export default new RegisterUserPage