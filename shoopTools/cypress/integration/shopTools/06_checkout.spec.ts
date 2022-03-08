
import BasketPage from "../../support/pages/BasketPage";
import CheckoutPage from "../../support/pages/CheckoutPage";
import ShopPage from "../../support/pages/ShopPage";

describe('06 Checkout', () => {
    const shopPage = new ShopPage();
    const basketPage = new BasketPage();
    const checkoutPage = new CheckoutPage();

    beforeEach( function () {
        cy.logIn();
      
    })
  
    it('Have a coupon info verification on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.getProceedToCheckout().should('exist');
        basketPage.clickProceedToCheckout();
        checkoutPage.getHaveACoupon().should('exist').should('contain', 'Have a coupon? Click here to enter your code');

    })

    it('Personal data info verification on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.clickProceedToCheckout();
        checkoutPage.getPrivacyPolicyText().should('exist').should('contain', 'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.');

    })

    it('Privacy and policy hiperlink verification on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.clickProceedToCheckout();
        checkoutPage.getPrivacyPolicyLink().should('exist').should('have.attr', 'href', 'https://shop.demoqa.com/?page_id=3');

    })

    it('Verify clicking on "I have read and agree to the website terms and conditions" on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.clickProceedToCheckout();
        checkoutPage.getHaveReadText().should('exist').should('contain', 'I have read and agree to the website terms and conditions');
        checkoutPage.clickHaveReadCheckbox();
        checkoutPage.getHaveReadCheckbox().should('be.checked');

    })

    it('Verify error message and error color without accepting terms and conditions on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.clickProceedToCheckout();
        checkoutPage.clickPlaceOrder();
        checkoutPage.getTermsAndConditionsError().should('exist').should('contain', 'Please read and accept the terms and conditions to proceed with your order.');
        checkoutPage.getIHaveReadAndAgree().contains('I have read and agree to the website').should('have.css', 'color', 'rgb(170, 0, 0)');
   
    })

    it('Terms and conditions hiperlink verification on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.clickProceedToCheckout();
        checkoutPage.getTernsAndConditionsLink().should('exist').should('have.attr', 'href', 'https://shop.demoqa.com/?page_id=3');
    
        })

    it('Verify placing the order with additional information on Checkout', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.clickProceedToCheckout();
        checkoutPage.getOrderComments().should('exist');
        checkoutPage.typeOrderComments('Some additional test info for below order').should('have.value', 'Some additional test info for below order');
        checkoutPage.clickHaveReadCheckbox();
        checkoutPage.clickPlaceOrder();
        checkoutPage.getConfirmationOrderReceiving().should('exist').should('contain', 'Thank you. Your order has been received.');
    
    })

})