
export default class RegistrationPage {
    
selector = {
    registration: {
        userName: '[id="reg_username"]',
        emailAddress: '[id="reg_email"]',
        password: '[id="reg_password"]',
        showPasswordInput: '[class="show-password-input"]',
        shortPasswordInfo: '[class="woocommerce-password-strength short"]',
        weakPasswordInfo: '[class="woocommerce-password-strength bad"]',
        goodPasswordInfo: '[class="woocommerce-password-strength good"]',
        strongPasswordInfo: '[class="woocommerce-password-strength strong"]',
        buttonRegister: '[name="register"]',
        errorCheck: '[id="primary"]',
        passwordHelper: '[class="woocommerce-password-hint"]',
        privacyPolicyFooter: '[class="woocommerce-privacy-policy-text"]',
        privacyPolicyLink: '[class="woocommerce-privacy-policy-link"]',

    },

};

visit() {
    cy.viewport(3072, 1728);
    cy.visit("https://shop.demoqa.com/my-account/");
}
getUserName(){
    return cy.get(this.selector.registration.userName);
}
typeUserName(value: string){
    return cy.get(this.selector.registration.userName).type(value);
}
getEmailAddress(){
    return cy.get(this.selector.registration.emailAddress);
}
typeEmailAddress(value: string){
    return cy.get(this.selector.registration.emailAddress).type(value);
}
getPassword(){
    return cy.get(this.selector.registration.password);
}
typePassword(value: string){
    return cy.get(this.selector.registration.password).type(value);
}
getShowPasswordInput(){
    return cy.get(this.selector.registration.showPasswordInput);
}
clickShowPasswordInput(){
    return cy.get(this.selector.registration.showPasswordInput).eq(1).click();
}
getShortPasswordInfo(){
    return cy.get(this.selector.registration.shortPasswordInfo);
}
getWeakPasswordInfo(){
    return cy.get(this.selector.registration.weakPasswordInfo);
}
getGoodPasswordInfo(){
    return cy.get(this.selector.registration.goodPasswordInfo);
}
getStrongPasswordInfo(){
    return cy.get(this.selector.registration.strongPasswordInfo);
}
getButtonRegister(){
    return cy.get(this.selector.registration.buttonRegister);
}
clickButtonRegister(){
    return this.getButtonRegister().click();
}
getRegistrationError(){
    return cy.get(this.selector.registration.errorCheck).find('li');
} 
getPasswordHelper(){
    return cy.get(this.selector.registration.passwordHelper);
}
getPrivacyPolicyFooter(){
    return cy.get(this.selector.registration.privacyPolicyFooter);
}
getPrivacyPolicyLink(){
    return cy.get(this.selector.registration.privacyPolicyLink);
}

}