
export default class ShopPage {

selector = {
    shop:{
        showingResults: '[class="woocommerce-result-count"]',
        filterColor: '[name="filter_color"]',
        filterSize: '[name="filter_size"]',
        grid: '[name="filter_style"]',
        sorting: '[name="orderby"]',
        colorList: '[class="pull-left noo-shop-filter"]',
        pagination: '[class="page-numbers"]',
        search: '[class="noo-search"]',
        searchIcon: '[class="icon_search"]',
        searchNote: '[class="note-search"]',
        searchInput: '[class="form-control"]',
        productTitle: '[class="product_title entry-title"]',
        selectProduct: '[class="noo-product-inner"]',
        productPhotoPagination: '[class="owl-page active"]',
        productCompareButton: '[class="compare button"]',
        addProductToWishList: '[data-title="Add to Wishlist"]',
        wishlistFeedback: '[class="feedback"]',
        productQuickZoom: '[class="noo-quick-view icon_zoom-in_alt"]',
        removeFromWhishList: '[class="remove remove_from_wishlist"]',
        closingButton: '[id="cboxClose"]',
        productSuccessfullyRemovedFromWishList: '[class="woocommerce-message"]',
        closeProductQuickZoomModal: '[title="Close (Esc)"]',
        productEssentialDescription: '[class="product-essential__description"]',
        productEssentialSpecification: '[class="product-essential__specification"]',
        chooseColor: '[id="pa_color"]',
        chooseSize: '[id="pa_size"]',
        quantityToggle: '[class="quantity"]',
        quantityDecrease: '[class="qty-decrease"]',
        quantityIncrease: '[class="qty-increase"]',
        addToCart: '[type="submit"]',
        clearSelectedOptions: '[class="reset_variations"]',
        productDescription: '[class="description_tab active"]',
        productAdditionalInformation: '[class="additional_information_tab"]',
        productReviews: '[class="reviews_tab"]',
        productAttributesItem: '[class="woocommerce-product-attributes-item__label"]',
        productAttributesValue: '[class="woocommerce-product-attributes-item__value"]',
        reviewsTitle: '[class="woocommerce-Reviews-title"]',
        replyReviewTitle: '[class="comment-reply-title"]',
        ratingStars: '[class="stars"]',
        reviewComment: '[id="comment"]',
        
    },

buttons: {
    submit: '[id="submit"]',
},

}

getProductDescription(){
    return cy.get(this.selector.shop.productDescription);
}
getProductEssentialDescription(){
    return cy.get(this.selector.shop.productEssentialDescription);
}
getProductEssentialSpecification(){
    return cy.get(this.selector.shop.productEssentialSpecification);
}
getProductAdditionalInformation(){
    return cy.get(this.selector.shop.productAdditionalInformation);
}
clickProductAdditionalInformation(){
    return this.getProductAdditionalInformation().click();
}
getProductReviews(){
    return cy.get(this.selector.shop.productReviews);
}
clickProductReviews(){
    return this.getProductReviews().contains('Reviews').click();
}
getProductAttributesItem(){
    return cy.get(this.selector.shop.productAttributesItem);
}
getProductAttributesValue(){
    return cy.get(this.selector.shop.productAttributesValue);
}
getReviewsTitle(){
    return cy.get(this.selector.shop.reviewsTitle);
}
getReplyReviewTitle(){
    return cy.get(this.selector.shop.replyReviewTitle);
}
getRatingStars(){
    return cy.get(this.selector.shop.ratingStars);
}
clickRatingStars(){
    return this.getRatingStars().click();
}
getReviewComment(){
    return cy.get(this.selector.shop.reviewComment);
}
typeReviewComment(value: string){
    return this.getReviewComment().type(value);
}
getSubmit(){
    return cy.get(this.selector.buttons.submit);
}
clickSubmit(){
    return this.getSubmit().click();
}
getShowingResults(){
    return cy.get(this.selector.shop.showingResults).eq(0);
}
getFilterColor(){
    return cy.get(this.selector.shop.filterColor);
}  
getFilterSize(){
    return cy.get(this.selector.shop.filterSize);
}
getGrid(){
    return cy.get(this.selector.shop.grid);
} 
getSorting(){
    return cy.get(this.selector.shop.sorting);
}    
getPagination(){
    return cy.get(this.selector.shop.pagination);
}
clickPagination(){
    return this.getPagination().last().click();
}
getSearch(){
    return cy.get(this.selector.shop.search);
}
getSearchIcon(){
    return cy.get(this.selector.shop.searchIcon);
}
clickSearch(){
    return this.getSearch().click();
}
getSearchNote(){
    return cy.get(this.selector.shop.searchNote);
}
getSearchInput(){
    return cy.get(this.selector.shop.searchInput);
}
typeSearch(value: string){
    return cy.get(this.selector.shop.searchInput).type(value);
}
getProductTitle(){
    return cy.get(this.selector.shop.productTitle);
}
clickOutsideToCloseTheModal(){
    cy.get('body').click(0,0);
}
getSelectProduct(){
    return cy.get(this.selector.shop.selectProduct);
}
getProductPhotoPagination(){
    return cy.get(this.selector.shop.productPhotoPagination);
}
clickProductPhotoPagination(){
    cy.get('.post-1394 .owl-page').click({ multiple: true, force: true });
}
getProductCompareButton(){
    return cy.get(this.selector.shop.productCompareButton).eq(13);
}
clickProductCompareButton(){
    return this.getProductCompareButton().click();
}
getAddProductToWishList(){
    return cy.get(this.selector.shop.addProductToWishList);
}
clickAddProductToWishList(){
    return this.getAddProductToWishList().click({ force: true });
}
getWishlistFeedback(){
    return cy.get(this.selector.shop.wishlistFeedback).eq(13);
}
getProductQuickZoom(){
    return cy.get(this.selector.shop.productQuickZoom).eq(13);
}
clickProductQuickZoom(){
    return this.getProductQuickZoom().click();
}
clickMyWishList(){
    return cy.contains('a', 'My Wishlist').click({ force: true });
}
clickRemoveFromWhishList(){
    return cy.get(this.selector.shop.removeFromWhishList).click({ multiple: true, force: true }).wait(300);
}
getClosingButton(){
    return cy.get(this.selector.shop.closingButton);
}
clickClosingButton(){
    return this.getClosingButton().click();
}
getProductSuccessfullyRemovedFromWishList(){
    return cy.get(this.selector.shop.productSuccessfullyRemovedFromWishList);
}
getCloseProductQuickZoomModal(){
    return cy.get(this.selector.shop.closeProductQuickZoomModal);
}
clickcCloseProductQuickZoomModal(){
    return this.getCloseProductQuickZoomModal().click();
}
getChooseColor(){
    return cy.get(this.selector.shop.chooseColor);
}
getChooseSize(){
    return cy.get(this.selector.shop.chooseSize);
}
getQuantityToggle(){
    return cy.get(this.selector.shop.quantityToggle);
}
getQuantityDecrease(){
    return cy.get(this.selector.shop.quantityDecrease);
}
clickQuantityDecrease(){
    return this.getQuantityDecrease().click();
}
getQuantityIncrease(){
    return cy.get(this.selector.shop.quantityIncrease);
}
clickQuantityIncrease(){
    return this.getQuantityIncrease().dblclick();
}
getAddToCart(){
    return cy.get(this.selector.shop.addToCart);
}
clickAddToCart(){
    return this.getAddToCart().eq(1).click({ force: true });
}
getClearSelectedOptions(){
    return cy.get(this.selector.shop.clearSelectedOptions);
}
clickClearSelectedOptions(){
    return this.getClearSelectedOptions().click();
}

} 