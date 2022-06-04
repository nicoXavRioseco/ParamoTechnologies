import 'cypress-wait-until';

class BasePage {

    //metodo para acceder al sitio. tiene solamente la "/" porque la url
    //está configurada en cypress.json
    navigate() {
        return cy.visit('/')
    }

    //campo para ingresar el username o email con el que nos logeamos
    getMyEmailInput(){
        return cy.waitUntil(() => cy.get('[id="UserLogin_username"]'))
    }

    //campo para ingresar el password con el que nos logeamos
    getMyPassInput(){
        return cy.waitUntil(() => cy.get('[id="UserLogin_password"]'))
    }

    //botón Sing In del header
    getSingInButton() {
        return cy.waitUntil(() => cy.get('div[class="login"]').first())
    }

    //botón para acceder al login. se muestra luego de oprimir sobre getSingInButton
    getSingInAnchor() {
        return cy.waitUntil(() => cy.get('a[href="/user/login"]').first())
    }

    //botón para logearnos con el usuario y contraseña ingresado
    getSignIn(){
        return cy.waitUntil(() => cy.get('button[data-test="control-submit"'))
    }

    //spinner que aparece miestra carga la página y sus secciones
    waitSpinner() {
        cy.get('#infinity-bg').should('not.exist')
    }

    //botón X para cerrar el pop up que se muestra al ingresar al sitio
    getGotIt() {
        return cy.waitUntil(() => cy.get('button[class="mfp-close"]'))
    }

    //elemento del header que corresponde a la información del usuario que se encuentra logeado
    //se utiliza para validar que se logea correctamente
    getUserInfo() {
        return cy.waitUntil(() => cy.get('div[class="user-info__wrapper"]'))
    }
}
export default new BasePage