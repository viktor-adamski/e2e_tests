import BasketPage from "../../support/pages/BasketPage";
import ShopPage from "../../support/pages/ShopPage";

describe('05 Shop page', () => {
    const shopPage = new ShopPage();
    const basketPage = new BasketPage();

    beforeEach( function () {
        cy.logIn();
      
    })
  
    it('Menu existing verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click(); 
        shopPage.getShowingResults().should('exist').should('contain', 'Showing 1–20 of 41 results');
        shopPage.getFilterColor().should('exist').should('contain', 'Filter color');
        shopPage.getFilterSize().should('exist').should('contain', 'Filter size');
        shopPage.getGrid().should('exist').should('contain', 'Filter style');
        shopPage.getSorting().should('exist').should('contain', 'Default sorting');
            
    })

    it('Menu functionality verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getFilterColor().eq(0).select('Black', { force: true }).should('have.value', '59');
        cy.wait(300);
        shopPage.getFilterSize().eq(0).select('Medium', { force: true }).should('have.value', '65');
        cy.wait(300);
        shopPage.getGrid().eq(0).select('Grid', { force: true }).should('have.value', 'grid');
        cy.wait(300);
        shopPage.getSorting().eq(0).select('Sort by price: low to high', { force: true }).should('have.value', 'price');

    })

    it('Filter color dropdown list verification', function () {
        const filterColorDropDownList = [
            "Filter color",
            "Beige",
            "Black",
            "Blue",
            "Brown",
            "Dark Blue",
            "Green",
            "Grey",
            "Mauve",
            "Mustard",
            "Nude",
            "Orange",
            "Pink",
            "Red",
            "Rose Gold",
            "Rust",
            "silver",
            "White",
            "Yellow",
        ];

        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getFilterColor().eq(0).children('option').should('have.length', 19)
        .each((value) => {
            expect(filterColorDropDownList).includes(value.text().trim());
        });

    })
    
    it('Filter size dropdown list verification', function () {
        const filterSizeDropDownList = [
            "Filter size",
            "32",
            "34",
            "36",
            "37",
            "38",
            "40",
            "42",
            "44",
            "Large",
            "Medium",
            "One",
            "Small",
            "X-Large",
        ];

        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getFilterSize().eq(0).children('option').should('have.length', 14)
        .each((value) => {
            expect(filterSizeDropDownList).includes(value.text().trim());
        });
    
    })
    
    it('Filter style dropdown list verification', function () {
        const filterStyleDropDownList = [
            "Filter style",
            "Grid",
            "List",
        ];
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getGrid().eq(0).children('option').should('have.length', 3)
        .each((value) => {
            expect(filterStyleDropDownList).includes(value.text().trim());
        });

    })

    it('Filter sorting dropdown list verification', function () {
        const filterSortingDropDownList = [
            "Default sorting",
            "Sort by popularity",
            "Sort by average rating",
            "Sort by latest",
            "Sort by price: low to high",
            "Sort by price: high to low",
        ];

        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSorting().eq(0).children('option').should('have.length', 6)
        .each((value) => {
            expect(filterSortingDropDownList).includes(value.text().trim());
        });
    
    })    

    it('Shop page pagination verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getPagination().should('exist').eq(1).click().should('contain', '2');
        shopPage.clickPagination().should('contain', '3');

    })

    it('Shop page search functionality verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSearch().should('exist').should('contain', 'Search');
        shopPage.getSearchIcon().should('exist');
        shopPage.clickSearch();
        shopPage.getSearchNote().should('contain', 'Type and Press Enter to Search');
        shopPage.typeSearch('QUAY AUSTRALIA X JLO GET RIGHT BLUE SUNGLASSES{enter}');
        shopPage.getProductTitle().should('exist').should('contain', 'quay australia x jlo get right blue sunglasses');
        
    })

    it('Shop page quit search verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.clickSearch();
        cy.wait(2000);
        shopPage.clickOutsideToCloseTheModal();

    })

    it('Select product verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getProductTitle().should('exist').should('contain', 'dark blue vice high waisted slash knee skinny jeans');

    })

    it('Product card content verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getProductCompareButton().should('exist');
        shopPage.getAddProductToWishList().should('exist');
        shopPage.getProductQuickZoom().should('exist');

    })

    it('Product photo pagination verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.clickProductPhotoPagination()
    
    })

    it('Product title content verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('grey long faux fur coat').click();
        shopPage.getProductTitle().should('exist').should('contain', 'grey long faux fur coat');

    })

    it('Product compare button verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getProductCompareButton().should('exist');
        shopPage.clickProductCompareButton();
        shopPage.getClosingButton().should('exist');
        shopPage.clickClosingButton();
    })

    it('Product card content zooming verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getProductQuickZoom().should('exist');
        shopPage.clickProductQuickZoom();
        shopPage.getCloseProductQuickZoomModal().should('be.visible').should('exist');
        shopPage.clickcCloseProductQuickZoomModal();

    })

    it('Product description and specification content verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getProductEssentialDescription().should('exist').should('have.text','vice style jeans with high waisted fit, slash knees and deep blue hue.');
        shopPage.getProductEssentialSpecification().should('exist')
        .contains('regular fit – front zip and button fasten 66% cotton 32% polyester 2% elastane ankle grazer – sits on the ankle bone pilar wears a uk size 8 / eu size 36 / us size 4 and her height is 5’9″ product number: g1802673');
        
    })

    it('Verify product color and size selection', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.getQuantityToggle().should('exist')
        shopPage.getQuantityIncrease().should('exist')
        shopPage.clickQuantityIncrease().should('exist')
        shopPage.getQuantityDecrease().should('exist')
        shopPage.clickQuantityDecrease().should('exist')
   
    })

    it('Verify product color and size selection', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.getQuantityToggle().should('exist')
        shopPage.getQuantityIncrease().should('exist')
        shopPage.clickQuantityIncrease().should('exist')
        shopPage.getQuantityDecrease().should('exist')
        shopPage.clickQuantityDecrease().should('exist')

    })

    it('Verify adding product to card button functionality', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease().should('exist')
        shopPage.getAddToCart().should('exist');
        shopPage.clickAddToCart();

    }) 

    it('Verify clearing the selected product parametrs', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.getClearSelectedOptions().should('exist').should('contain', 'Clear');
        shopPage.clickClearSelectedOptions();

    })

    it('Verify that product was added to card/basket', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease().should('exist')
        shopPage.getAddToCart().should('exist');
        shopPage.clickAddToCart();
        basketPage.clickMyBasket()
        basketPage.getProductName().should('exist').should('contain', 'dark blue vice high waisted slash knee skinny jeans - Dark Blue');

    })

    it('Update shopping card button verification', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket()
        basketPage.getUpdateShoppingCart().should('exist').should('have.value', 'Update shopping cart');
        basketPage.clickUpdateShoppingCart();
    
    })

    it('Using incorect coupon code and error verification', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.typeCouponCode('Test coupon code');
        basketPage.getApplyCoupon().should('exist').should('contain', 'Apply Coupon');
        basketPage.clickApplyCoupon();
        basketPage.getCouponError().should('contain', 'Coupon "test coupon code" does not exist!');

    })

    it('Continue shopping button verification', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().should('exist');
        basketPage.clickContinueShopping();

    })

    it('Proceed to checkout button verification', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.getProceedToCheckout().should('exist');
        basketPage.clickProceedToCheckout();

    })

    it('Verify product description', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('Black Cross Back Maxi Dress').click();
        shopPage.getProductDescription().should('exist').should('contain', 'Description');
        shopPage.getProductEssentialDescription().should('exist').should('contain', 'a black strappy maxi dress with a high neckline, cross back with a back zip fastening.');
        shopPage.getProductEssentialSpecification().should('exist').contains('regular fit floor sweeper – trails the floor slightly main: 95% polyester 5% elastane lining: 100% polyester tiffany wears a uk size 8 / eu size 36 / us size 4 and her height is 5’9″ product number: de927747');

    })

    it('Verify product additional information', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('Black Cross Back Maxi Dress').click();
        shopPage.getProductAdditionalInformation().should('exist').should('contain', 'Additional information');
        shopPage.clickProductAdditionalInformation();
        shopPage.getProductAttributesItem().eq(0).should('exist').should('contain', 'Color');
        shopPage.getProductAttributesItem().eq(1).should('exist').should('contain', 'Size');
        shopPage.getProductAttributesValue().eq(0).should('exist').should('contain', 'Beige, Black');
        shopPage.getProductAttributesValue().eq(1).should('exist').should('contain', 'Large, Medium, Small');                

    })

    it('Verify product reviews and review submiting functionality', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('Black Cross Back Maxi Dress').click();
        shopPage.clickProductReviews();
        shopPage.getReviewsTitle().should('exist').should('contain', 'Reviews');
        shopPage.getRatingStars().should('exist');
        shopPage.clickRatingStars();
        shopPage.getReviewComment().should('exist');
        shopPage.typeReviewComment('Test comment 1234567890').should('have.value', 'Test comment 1234567890');
        shopPage.getSubmit().should('exist');
        shopPage.clickSubmit(); 

    })
                
    it('Verify clear shopping card by using clearing button', function () {
        basketPage.clickMyBasket();
        basketPage.getContinueShopping().click();
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease();
        shopPage.clickAddToCart();
        basketPage.clickMyBasket()
        basketPage.getClearShoppingCart().should('exist').should('contain', 'clear shopping cart');
        basketPage.clickClearShoppingCart();
        basketPage.getMyBasketEmptyInfo().should('exist').should('contain', 'Your cart is currently empty.');

    })

    it('Verify delete product functionality from card', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click(); 
        shopPage.getSelectProduct().contains('dark blue vice high waisted slash knee skinny jeans').click();
        shopPage.getChooseColor().should('exist').select('Dark Blue');
        shopPage.getChooseSize().should('exist').select('37');
        shopPage.clickQuantityIncrease().should('exist')
        shopPage.getAddToCart().should('exist');
        shopPage.clickAddToCart();
        basketPage.clickMyBasket();
        basketPage.getRemoveProductFromBasket().should('exist');
        basketPage.clickRemoveProductFromBasket();

    })

    it('Clearing the product from the wish list verification', function () {
        basketPage.clickMyBasket();
        basketPage.getReturnToShop().click();
        shopPage.getAddProductToWishList().should('not.contain', 'The product is already in the wishlist!').first().click({ force: true }).wait(300);
        shopPage.clickMyWishList();
        shopPage.clickRemoveFromWhishList();
        
    })

})