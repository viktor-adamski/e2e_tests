
export default class LoginPage {
    
selector = {
    login: {
        dismiss: '[class="woocommerce-store-notice__dismiss-link"]',
        loginButton: '[name="login"]',
        loginErrorCheck: '[id="post-8"]',
        rememberMeCheckBox: '[id="rememberme"]',
        emailAddress: '[id="username"]',
        password: '[id="password"]',
        emailForReseting: '[id="user_login"]',
        resetPassword: '[type="submit"]',
        resetingConfirmation: '[class="woocommerce-message"]',
        resetInfo: '[id="primary"]',
    },
}

visit() {
    cy.viewport(3072, 1728);
    cy.visit("https://shop.demoqa.com/my-account/");
    this.clickDismiss();
}
clickDismiss(){
    return cy.get(this.selector.login.dismiss).click();
}
getLoginButton(){
    return cy.get(this.selector.login.loginButton);
}
clickLoginButton(){
    return this.getLoginButton().click();
}
getLoginErrorCheck(){
    return cy.get(this.selector.login.loginErrorCheck).find('li');
}
getRememberMeCheckBox(){
    return cy.get(this.selector.login.rememberMeCheckBox);
}
clickRememberMeCheckBox(){
    return this.getRememberMeCheckBox().click();
}
getEmailAddress(){
    return cy.get(this.selector.login.emailAddress);
}
getPassword(){
    return cy.get(this.selector.login.password);
}
getLostYourPassword(){
    return cy.contains('a', 'Lost your password?');
}
clickLostYourPassword(){
    return cy.contains('a', 'Lost your password?').click();
}
typeEmailForReseting(value: string){
    return cy.get(this.selector.login.emailForReseting).type(value);
}
clickResetPassword(){
    return cy.get(this.selector.login.resetPassword).last().click();
}
getResetingConfirmation(){
    return cy.get(this.selector.login.resetingConfirmation);
}
getResetInfo(){
    return cy.get(this.selector.login.resetInfo);
}

}