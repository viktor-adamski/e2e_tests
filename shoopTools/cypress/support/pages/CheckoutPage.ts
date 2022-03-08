
export default class CheckoutPage {

selector = {
    checkout: {
        haveACoupon: '[class="woocommerce-info"]',
        privacyPolicyText: '[class="woocommerce-privacy-policy-text"]',
        privacyPolicyLink: '[class="woocommerce-privacy-policy-link"]',
        haveReadCheckbox: '[class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox"]',
        haveReadText: '[class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox"]',
        orderComments: '[id="order_comments"]',
        termsAndConditionsError: '[class="woocommerce-error"]',
        ternsAndConditionsLink: '[class="woocommerce-terms-and-conditions-link"]',
        iHaveReadAndAgree: '[class="woocommerce-terms-and-conditions-checkbox-text"]',
        confirmationOrderReceiving: '[class="woocommerce-thankyou-order-received"]',
    },

    buttons: {
        placeOrder: '[id="place_order"]',
   },

}
getHaveACoupon(){
    return cy.get(this.selector.checkout.haveACoupon);
}
getIHaveReadAndAgree(){
    return cy.get(this.selector.checkout.iHaveReadAndAgree);
}
getPrivacyPolicyText(){
    return cy.get(this.selector.checkout.privacyPolicyText);
}
getPrivacyPolicyLink(){
    return cy.get(this.selector.checkout.privacyPolicyLink);
}
getTernsAndConditionsLink(){
    return cy.get(this.selector.checkout.ternsAndConditionsLink);
}
getHaveReadCheckbox(){
    return cy.get(this.selector.checkout.haveReadCheckbox);
}
clickHaveReadCheckbox(){
    return this.getHaveReadCheckbox().click({ force: true });
}
getHaveReadText(){
    return cy.get(this.selector.checkout.haveReadText);
}
getTermsAndConditionsError(){
    return cy.get(this.selector.checkout.termsAndConditionsError);
}
getOrderComments(){
    return cy.get(this.selector.checkout.orderComments);
}
typeOrderComments(value: string){
    return this.getOrderComments().type(value);
}
getPlaceOrder(){
    return cy.get(this.selector.buttons.placeOrder);
}
clickPlaceOrder(){
    return this.getPlaceOrder().click({ force: true });
}
getConfirmationOrderReceiving(){
    return cy.get(this.selector.checkout.confirmationOrderReceiving);
}

}
