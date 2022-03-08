
import MyWishlistPage from "../../support/pages/MyWishlistPage";
import ShopPage from "../../support/pages/ShopPage";
import BasketPage from "../../support/pages/BasketPage";


describe('07 My wishlist', () => {
    const shopPage = new ShopPage();
    const myWishlistPage = new MyWishlistPage();
    const basketPage = new BasketPage();

    beforeEach( function () {
        cy.logIn();
      
    })

    it('Verify My Wishlist functionality', function () {
        shopPage.clickMyWishList();
        
    })

    it('Verify My Wishlist content', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getAddProductToWishList().should('not.contain', 'The product is already in the wishlist!').first().click({ force: true }).wait(300);
        shopPage.clickMyWishList();
        myWishlistPage.getRemoveFromWishlist().should('exist');
        myWishlistPage.getProductHiperLink().find('a').should('exist').should('have.attr', 'href', 'https://shop.demoqa.com/product/black-cross-back-maxi-dress/');
        myWishlistPage.getProductPhoto().should('exist').should('have.attr', 'src', 'https://shop.demoqa.com/wp-content/uploads/2019/04/black-cross-back-maxi-dress-300x300.jpg');
        myWishlistPage.getProductName().should('exist').should('contain', 'Black Cross Back Maxi Dress');
        // myWishlistPage.getProductUnitPrice().should('exist').should('contain', '₹20.00 – ₹21.00');
        myWishlistPage.getStockStatus().should('exist').should('contain', 'In Stock');
        myWishlistPage.getSelectOption().should('exist').should('contain', 'Select options')
        myWishlistPage.getSelectOption().focus().should('be.focused');

    })
})