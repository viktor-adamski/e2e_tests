// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import RegistrationPage from "./pages/RegistrationPage";
import {loginEmail, loginPassword} from "/Users/viktoradamski/Desktop/shoopTools/cypress/fixtures/credentials";
import LoginPage from "/Users/viktoradamski/Desktop/shoopTools/cypress/support/pages/LoginPage";

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();

declare global {
    namespace Cypress {
        interface Chainable<Subject>{
            logIn: typeof logIn;

        }
    }
}    

Cypress.Commands.add('logIn', () => {
    loginPage.visit();
    loginPage.getEmailAddress().type(loginEmail).should('have.value', loginEmail);
    loginPage.getPassword().type(loginPassword).should('have.value', loginPassword);
    loginPage.clickRememberMeCheckBox();
    loginPage.clickLoginButton();

})


declare global {
    namespace Cypress {
        interface Chainable<Subject>{
            registerRandomUser: typeof registerRandomUser;

        }
    }
}    

Cypress.Commands.add('registerRandomUser', ()=> {

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%^&*';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   
   console.log(makeid(5));

   registrationPage.typeUserName(makeid(15));
   registrationPage.typeEmailAddress(makeid(15) + "@test.com");
   registrationPage.typePassword(makeid(15));
   registrationPage.getButtonRegister().should('exist');
   registrationPage.clickButtonRegister()

})