
export default class MyWishlistPage {

selector = {
    myWishlist: {
        removeFromWishlist: '[class="remove remove_from_wishlist"]',
        productHiperLink: '[class="product-thumbnail"]',
        productPhoto: '[class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"]',
        productName: '[class="product-name"]',
        productUnitPrice: '[class="woocommerce-Price-amount amount"]',
        stockStatus: '[class="wishlist-in-stock"]',
      
    },

    buttons: {
        selectOption: '[class="product_type_variable add_to_cart_button add_to_cart alt"]',
    },
}

getRemoveFromWishlist(){
    return cy.get(this.selector.myWishlist.removeFromWishlist);
}
clickRemoveFromWishlist(){
    return this.getRemoveFromWishlist().click();
}
getProductHiperLink(){
    return cy.get(this.selector.myWishlist.productHiperLink);
}
getProductPhoto(){
    return cy.get(this.selector.myWishlist.productPhoto);
}
getProductName(){
    return cy.get(this.selector.myWishlist.productName);
}
getProductUnitPrice(){
    return cy.get(this.selector.myWishlist.productUnitPrice);
}
getStockStatus(){
    return cy.get(this.selector.myWishlist.stockStatus);
}
getSelectOption(){
    return cy.get(this.selector.buttons.selectOption);
}
clickSelectOption(){
    return this.getSelectOption().eq(1).click();
}

}