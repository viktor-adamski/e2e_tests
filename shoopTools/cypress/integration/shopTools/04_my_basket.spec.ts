import BasketPage from "../../support/pages/BasketPage";

describe('04 My basket', () => {
    const basketPage = new BasketPage();

    beforeEach( function () {
        cy.logIn();    
     
    })
  
    it('Empty basket verification', function () {
        basketPage.getmyBasketIcon().should('exist');
        basketPage.getMyBasketOrderQuantity().should('contain', 'Cart(0)');
        basketPage.getMyBasketOrderAmount().should('contain', '0.00');
        basketPage.clickMyBasket();
        basketPage.getMyBasketEmptyInfo().should('exist').should('contain', 'Your cart is currently empty.');
        
    })
    it('Return to shop from basket verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().should('exist').should('contain', 'Return to shop').click(); 
    })
  
})