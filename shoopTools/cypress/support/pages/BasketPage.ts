

export default class BasketPage {

selector = {
    basket: {
        myBasket: '[class="cart-name-and-total"]',
        myBasketIcon: '[class="icon_bag_alt"]',
        myBasketEmptyInfo: '[class="cart-empty woocommerce-info"]',
        myBasketOrderQuantity: '[class="cart-name-and-total"]',
        myBasketOrderAmount: '[class="woocommerce-Price-amount amount"]',
        removeProductFromBasket: '[class="icon_close_alt2"]',
        confirmationOfproductRemoving: '[class="woocommerce-message"]',
        productName: '[class="product-name"]',
        couponCode: '[class="input-text"]',
        couponError: '[class="woocommerce-error"]',

    },

    buttons: {
        returnToShop: '[class="button wc-backward"]',
        continueShopping: '[class="continue"]', 
        clearShoppingCart: '[class="empty-cart"]',
        updateShoppingCart: '[name="update_cart"]',
        applyCoupon: '[class="noo-apply-coupon"]',
        proceedToCheckout: '[class="checkout-button button alt wc-forward"]',

   },

}

getMyBasket() {
    return cy.get(this.selector.basket.myBasket);
}
clickMyBasket() {
    return this.getMyBasket().click({ force: true });
}
getmyBasketIcon() {
    return cy.get(this.selector.basket.myBasketIcon);
}
getMyBasketEmptyInfo() {
    return cy.get(this.selector.basket.myBasketEmptyInfo);
}
getMyBasketOrderQuantity() {
    return cy.get(this.selector.basket.myBasketOrderQuantity);
}
getMyBasketOrderAmount() {
    return cy.get(this.selector.basket.myBasketOrderAmount);
}
getRemoveProductFromBasket(){
    return cy.get(this.selector.basket.removeProductFromBasket);
}
getReturnToShop() {
    return cy.get(this.selector.buttons.returnToShop);
}
clickRemoveProductFromBasket = () => {
    cy.get( 'body' ).then( $mainContainer => {
        const isVisible = $mainContainer.find( '.icon_close_alt2' ).is( ':visible' );
        if ( isVisible ) {
            cy.get( '.icon_close_alt2' ).click({ multiple: true, force: true });
            this.clickRemoveProductFromBasket();
        }
    } );
}
getConfirmationOfproductRemoving(){
    return cy.get(this.selector.basket.confirmationOfproductRemoving);
}
getProductName(){
    return cy.get(this.selector.basket.productName);
}
getContinueShopping(){
    return cy.get(this.selector.buttons.continueShopping);
}
clickContinueShopping(){
    return this.getContinueShopping().click();
}
getClearShoppingCart(){
    return cy.get(this.selector.buttons.clearShoppingCart);
}
clickClearShoppingCart(){
    return this.getClearShoppingCart().click();
}
getUpdateShoppingCart(){
    return cy.get(this.selector.buttons.updateShoppingCart);
}
clickUpdateShoppingCart(){
    return this.getUpdateShoppingCart().click();
}
getCouponCode(){
    return cy.get(this.selector.basket.couponCode);
}
typeCouponCode(value: string){
    return this.getCouponCode().should('exist').eq(1).type(value);
}
getApplyCoupon(){
    return cy.get(this.selector.buttons.applyCoupon);
}
clickApplyCoupon(){
    return this.getApplyCoupon().click();
}
getProceedToCheckout(){
    return cy.get(this.selector.buttons.proceedToCheckout);
}
clickProceedToCheckout(){
    return this.getProceedToCheckout().click();
}
getCouponError(){
    return cy.get(this.selector.basket.couponError);
}

}