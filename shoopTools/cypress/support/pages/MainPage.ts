
export default class MainPage {

selector = {
    mainPage: {
        contactDetails: '[class="pull-left noo-topbar-left"]',
        shopLogo: '[class="custom-logo"]',
        homeLink: '[class="custom-logo-link"]',
        mainFooter: '[class="noo-container"]',
        paymentFootrLogo: '[alt="payment"]',
        springSummerLookbook : '[id="slide-6-layer-3"]',
        umbraBlue: '[id="slide-6-layer-4"]',
        iconShipping:'[alt="truck"]',
        iconSecurePayment: '[alt="Icon_service"]',
        iconWarranty: '[alt="Icon_service2"]',
        iconMoneyBack: '[alt="Icon_service3"]',
        serviceContent: '[class="noo-service-content"]',          
    },
}
getIconShipping(){
    return cy.get(this.selector.mainPage.iconShipping);
}
getIconSecurePayment(){
    return cy.get(this.selector.mainPage.iconSecurePayment);
}
getIconWarranty(){
    return cy.get(this.selector.mainPage.iconWarranty);
}
getIconMoneyBack(){
    return cy.get(this.selector.mainPage.iconMoneyBack);
}
getServiceContent(){
    return cy.get(this.selector.mainPage.serviceContent);
}
getContactDetails(){
    return cy.get(this.selector.mainPage.contactDetails);
}
getShopLogo(){
    return cy.get(this.selector.mainPage.shopLogo);
}
getHomeLink(){
    return cy.get(this.selector.mainPage.homeLink);
}
clickGetHomeLink(){
    return this.getHomeLink().click();
}
getPaymentLogo(){
    return cy.get(this.selector.mainPage.paymentFootrLogo).last();
}
getMainFooter(){
    return cy.get(this.selector.mainPage.mainFooter).last();
}
getMainScreenText(){
    return cy.get(this.selector.mainPage.springSummerLookbook);
}
getUmbraBlue(){
    return cy.get(this.selector.mainPage.umbraBlue);
}
    
}
    