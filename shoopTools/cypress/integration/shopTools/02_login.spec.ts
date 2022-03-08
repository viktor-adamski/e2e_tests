import LoginPage from "../../support/pages/LoginPage";

describe('02 Login', () => {
    const loginPage = new LoginPage();

    beforeEach(function ()  {
      loginPage.visit();
      cy.fixture('credentials').then(function (testdata) {
        this.testdata = testdata
       })
     
    })
  
    it('My account login url verification', function () {  
        cy.url().should('be.equal', this.testdata.myAccountUrl)
    })
  
    it('Login button and error message verification', function () {  
        loginPage.getLoginButton().should('exist');
        loginPage.clickLoginButton();
        loginPage.getLoginErrorCheck().should('contain', 'Error: Username is required.');
    })

    it('Remember me checkbox verification during login', () => {  
        loginPage.getRememberMeCheckBox().should('exist').check({force:true}).uncheck();
        loginPage.clickRememberMeCheckBox().should('be.checked').uncheck().should('not.be.checked');
    })

    it('Lost your password verification', function () {
        loginPage.getLostYourPassword().should('exist').and('have.text', 'Lost your password?');
        loginPage.getLostYourPassword().should('have.attr', 'href', 'https://shop.demoqa.com/my-account/lost-password/');
        loginPage.clickLostYourPassword();
        loginPage.typeEmailForReseting(this.testdata.email);
        loginPage.clickResetPassword();
        loginPage.getResetingConfirmation().should('exist').should('contain', 'Password reset email has been sent.');
        loginPage.getResetInfo().should('exist').should('contain', 'A password reset email has been sent to the email address on file for your account, but may take several minutes to show up in your inbox. Please wait at least 10 minutes before attempting another reset.');
    })

    it('Log in as registered user', function () {
        loginPage.getEmailAddress().type(this.testdata.loginEmail).should('have.value', this.testdata.loginEmail);
        loginPage.getPassword().type(this.testdata.loginPassword).should('have.value', this.testdata.loginPassword);
        loginPage.clickRememberMeCheckBox();
        loginPage.clickLoginButton();
    })
  
})