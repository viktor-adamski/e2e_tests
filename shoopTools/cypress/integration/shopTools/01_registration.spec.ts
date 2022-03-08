import RegistrationPage from "/Users/viktoradamski/Desktop/shoopTools/cypress/support/pages/RegistrationPage";


describe('01 Registration', () => {
  const registrationPage = new RegistrationPage();
  beforeEach(() => {
    registrationPage.visit();
    cy.fixture('credentials').then(function (testdata) {
      this.testdata = testdata
     })
   
  })

  it('User registration without providing credentials ', () => {  
    registrationPage.getButtonRegister().click();
    registrationPage.getRegistrationError().should("contain","Error: Please provide a valid email address.");

  })

  it('User registration without all required credentials ', function () { 
    registrationPage.typeUserName(this.testdata.username).should('have.value', this.testdata.username);
    registrationPage.getButtonRegister().click();
    registrationPage.getRegistrationError().should("contain","Error: Please provide a valid email address.");

  })

  it('User registration with very weak password', function () {  
    registrationPage.typeUserName(this.testdata.username).should('have.value', this.testdata.username);
    registrationPage.typeEmailAddress(this.testdata.email).should('have.value', this.testdata.email);
    registrationPage.typePassword(this.testdata.passwordShort).should('have.value', this.testdata.passwordShort);
    registrationPage.getShowPasswordInput().should('exist');
    registrationPage.clickShowPasswordInput();
    registrationPage.getShortPasswordInfo().should('exist').contains('Very weak - Please enter a stronger password.');
    registrationPage.getButtonRegister().should('be.disabled');
  
  })

  it('User registration with weak password', function () {  
    registrationPage.typeUserName(this.testdata.username).should('have.value', this.testdata.username);
    registrationPage.typeEmailAddress(this.testdata.email).should('have.value', this.testdata.email);
    registrationPage.typePassword(this.testdata.passwordMidlLenth).should('have.value', this.testdata.passwordMidlLenth);
    registrationPage.getShowPasswordInput().should('exist');
    registrationPage.clickShowPasswordInput();
    registrationPage.getWeakPasswordInfo().should('exist').contains('Weak - Please enter a stronger password.');
    registrationPage.getButtonRegister().should('be.disabled');
  
  })

  it(' with medium password', function () {  
    registrationPage.typeUserName(this.testdata.username).should('have.value', this.testdata.username);
    registrationPage.typeEmailAddress(this.testdata.email).should('have.value', this.testdata.email);
    registrationPage.typePassword(this.testdata.passwordMediumlLenth).should('have.value', this.testdata.passwordMediumlLenth);
    registrationPage.getShowPasswordInput().should('exist');
    registrationPage.clickShowPasswordInput();
    registrationPage.getGoodPasswordInfo().should('exist').contains('Medium');
    registrationPage.getButtonRegister().should('not.be.disabled');
  
  })

  it('User registration with strong password', function () {  
    registrationPage.typeUserName(this.testdata.username).should('have.value', this.testdata.username);
    registrationPage.typeEmailAddress(this.testdata.email).should('have.value', this.testdata.email);
    registrationPage.typePassword(this.testdata.passwordStrong).should('have.value', this.testdata.passwordStrong);
    registrationPage.getShowPasswordInput().should('exist');
    registrationPage.clickShowPasswordInput();
    registrationPage.getStrongPasswordInfo().should('exist').contains('Strong');
    registrationPage.getButtonRegister().should('not.be.disabled');
    
  })

  it('Password helper and footer verification', function () {  
    registrationPage.typePassword(this.testdata.passwordShort);
    registrationPage.getPasswordHelper().should('have.text', 'Hint: The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).');
    registrationPage.getPrivacyPolicyFooter().contains('Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our ');
    registrationPage.getPrivacyPolicyLink().should('have.text', 'privacy policy');
    registrationPage.getPrivacyPolicyLink().should('have.attr', 'href', 'https://shop.demoqa.com/?page_id=3');
  
  })

  it('Register new user with all credentials', function () {  
    registrationPage.typeUserName(this.testdata.username);
    registrationPage.typeEmailAddress(this.testdata.email);
    registrationPage.typePassword(this.testdata.passwordStrong);
    registrationPage.getButtonRegister().click();
    
  })

describe('01 Registration with random credentials', () => {

  it('Registration with random credentials ', () => {  
    registrationPage.visit();
    cy.registerRandomUser();

  })

})
  
})