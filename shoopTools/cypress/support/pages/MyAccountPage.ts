
export default class MyAccountPage {

selector = {
    myAccount: {
        myAccountContent: '[class="woocommerce-MyAccount-content"]',
        dismiss: '[class="woocommerce-store-notice__dismiss-link"]',
        myAccountNavigation: '[class="woocommerce-MyAccount-navigation"]',
        orderContent: '[class="woocommerce-MyAccount-content"]',
        browseProducts: '[class="woocommerce-Button button"]',
        myAddressContent: '[class="woocommerce-MyAccount-content"]',
        addAddress: '[class="edit"]',
        changingConfirmation: '[class="woocommerce-message"]',
        
    billingAddress: {
        errorFirstName: '[data-id="billing_first_name"]',
        errorLastName: '[data-id="billing_last_name"]',
        errorCountry: '[data-id="billing_country"]',
        errorAddress: '[data-id="billing_address_1"]',
        errorCity: '[data-id="billing_city"]',
        errorState: '[data-id="billing_state"]',
        errorPostCode: '[data-id="billing_postcode"]',
        errorPhone: '[data-id="billing_phone"]',  
        firstName: '[id="billing_first_name"]',  
        lastName: '[id="billing_last_name"]',  
        countryRegion: '[id="select2-billing_country-container"]',
        houseStreet: '[id="billing_address_1"]',
        appartment: '[id="billing_address_2"]',
        city: '[id="billing_city"]',
        stateCountry: '[id="select2-billing_state-container"]',
        postCode: '[id="billing_postcode"]',
        phone: '[id="billing_phone"]',
        listBillingCountry: '[id="billing_country"]',
        listOfState: '[id="billing_state"]',

    },

    shippingAddress: {
        
        errorFirstName: '[data-id="shipping_first_name"]',
        errorLastName: '[data-id="shipping_last_name"]',
        errorCountry: '[data-id="shipping_country"]',
        errorAddress: '[data-id="shipping_address_1"]',
        errorCity: '[data-id="shipping_city"]',
        errorState: '[data-id="shipping_state"]',
        errorPin: '[data-id="shipping_postcode"]',  
        firstName: '[id="shipping_first_name"]',
        lastName: '[id="shipping_last_name"]',
        countryRegion: '[id="select2-shipping_country-container"]',
        countryRegionSearchField: '[class="select2-search__field"]',
        countryRegionSelectResults: '.select2-results__option',
        houseStreet: '[id="shipping_address_1"]',
        appartment: '[id="shipping_address_2"]',
        city: '[id="shipping_city"]',
        stateCountry: '[id="select2-shipping_state-container"]',
        stateCountrySearchFiled: '[class="select2-search__field"]',
        stateCountrySelectResults: '[id="select2-shipping_state-results"]',
        pin: '[id="shipping_postcode"]',
        
    },
    accountDetails: {
        accountFirstName: '[id="account_first_name"]',
        accountLastName: '[id="account_last_name"]',
    },

    buttons: {
        saveAddress: '[type="submit"]',
    },

    }

}

visit() {
    cy.viewport(3072, 1728);
    cy.visit("https://shop.demoqa.com/my-account/");
    this.clickDismiss();
}
getMyAccountContent(){
    return cy.get(this.selector.myAccount.myAccountContent)
}
clickDismiss(){
    return cy.get(this.selector.myAccount.dismiss).click();
}
getLogOut(){
    return cy.contains('a', 'Log out');
}
getDashboard() {
    return cy.get(this.selector.myAccount.myAccountNavigation).contains('a', 'Dashboard');
}
getOrders() {
    return cy.get(this.selector.myAccount.myAccountNavigation).contains('a', 'Orders');
}
getDownloads() {
    return cy.get(this.selector.myAccount.myAccountNavigation).contains('a', 'Downloads');
}
getAddresses() {
    return cy.get(this.selector.myAccount.myAccountNavigation).contains('a', 'Addresses');
}
getAccountDetails() {
    return cy.get(this.selector.myAccount.myAccountNavigation).contains('a', 'Account details');
}
clickAccountDetails() {
    return this.getAccountDetails().click();
}
getLogout() {
    return cy.get(this.selector.myAccount.myAccountNavigation).contains('a', 'Logout');
}
getOrderContent() {
    return cy.get(this.selector.myAccount.orderContent);
}
getNoOrder(){
    return cy.get(this.selector.myAccount.orderContent).contains('No order has been made yet.');
}
getBrowseProducts(){
    return cy.get(this.selector.myAccount.browseProducts);
}
getNoticesWrapper(){
    return cy.get(this.selector.myAccount.myAddressContent);
}
getBillingAddressContent(){
    return cy.get(this.selector.myAccount.myAddressContent);
}
getAddBillingAddress(){
    return cy.get(this.selector.myAccount.addAddress).eq(0);
}
getShippingAddressContent(){
    return cy.get(this.selector.myAccount.myAddressContent);
}
getAddShippingAddress(){
    return cy.get(this.selector.myAccount.addAddress).eq(1);
}
clickSaveAddress(){
    return cy.get(this.selector.myAccount.buttons.saveAddress).should('exist').eq(1).click();
}
getErrorBillingFirstName(){
    return cy.get(this.selector.myAccount.billingAddress.errorFirstName);
}
getErrorBillingLastName(){
    return cy.get(this.selector.myAccount.billingAddress.errorLastName);
}
getErrorBillingCountry(){
    return cy.get(this.selector.myAccount.billingAddress.errorCountry);
}
getErrorBillingAddress(){
    return cy.get(this.selector.myAccount.billingAddress.errorAddress);
}
getErrorBillingCity(){
    return cy.get(this.selector.myAccount.billingAddress.errorCity);
}
getErrorBillingState(){
    return cy.get(this.selector.myAccount.billingAddress.errorState);
}
getErrorBillingPostCode(){
    return cy.get(this.selector.myAccount.billingAddress.errorPostCode);
}
getErrorBillingPhone(){
    return cy.get(this.selector.myAccount.billingAddress.errorPhone);
}
getFirstName(){
    return cy.get(this.selector.myAccount.billingAddress.firstName);
}
getLastName(){
    return cy.get(this.selector.myAccount.billingAddress.lastName);
}
getCountryRegion(){
    return cy.get(this.selector.myAccount.billingAddress.countryRegion);
}
clickCountryRegion(){
    return this.getCountryRegion().click();
}
getListBillingCountry(){
    return cy.get(this.selector.myAccount.billingAddress.listBillingCountry);
}
getHouseStreet(){
    return cy.get(this.selector.myAccount.billingAddress.houseStreet);
}
getAppartment(){
    return cy.get(this.selector.myAccount.billingAddress.appartment);
}
getCity(){
    return cy.get(this.selector.myAccount.billingAddress.city);
}
getStateCountry(){
    return cy.get(this.selector.myAccount.billingAddress.stateCountry);
}
clickStateCountry(){
    return this.getStateCountry().click();
}
getListOfState(){
    return cy.get(this.selector.myAccount.billingAddress.listOfState);
}
getPostCode(){
    return cy.get(this.selector.myAccount.billingAddress.postCode);
}
getPhone(){
    return cy.get(this.selector.myAccount.billingAddress.phone);
}
getErrorShippingFirstName(){
    return cy.get(this.selector.myAccount.shippingAddress.errorFirstName);
}
getErrorShippingLastName(){
    return cy.get(this.selector.myAccount.shippingAddress.errorLastName);
}
getErrorShippingCountry(){
    return cy.get(this.selector.myAccount.shippingAddress.errorCountry);
}
getErrorShippingAddress(){
    return cy.get(this.selector.myAccount.shippingAddress.errorAddress);
}
getErrorShippingCity(){
    return cy.get(this.selector.myAccount.shippingAddress.errorCity);
}
getErrorShippingState(){
    return cy.get(this.selector.myAccount.shippingAddress.errorState);
}
getErrorShippingPin(){
    return cy.get(this.selector.myAccount.shippingAddress.errorPin);
}
getShippingFirstName(){
    return cy.get(this.selector.myAccount.shippingAddress.firstName);
}
getShippingLastName(){
    return cy.get(this.selector.myAccount.shippingAddress.lastName);
}
getShippingCountryRegion(){
    return cy.get(this.selector.myAccount.shippingAddress.countryRegion);
}
getShippingHouseStreet(){
    return cy.get(this.selector.myAccount.shippingAddress.houseStreet);
}
getShippingAppartment(){
    return cy.get(this.selector.myAccount.shippingAddress.appartment);
}
getShippingCity(){
    return cy.get(this.selector.myAccount.shippingAddress.city);
}
getShippingStateCountry(){
    return cy.get(this.selector.myAccount.shippingAddress.stateCountry);
}
clickShippingStateCountry(){
    return this.getShippingStateCountry().click();
}
getStateCountrySearchFiled(){
    return cy.get(this.selector.myAccount.shippingAddress.stateCountrySearchFiled)
}
getStateCountrySelectResults(){
    return cy.get(this.selector.myAccount.shippingAddress.stateCountrySelectResults);
}
getChangingConfirmation(){
    return cy.get(this.selector.myAccount.changingConfirmation);
}
getShippingPin(){
    return cy.get(this.selector.myAccount.shippingAddress.pin);
}
clickShippingCountryRegion() {
    return this.getShippingCountryRegion().click();
}
getCountryRegionSearchField() {
    return cy.get(this.selector.myAccount.shippingAddress.countryRegionSearchField)
}
getCountryRegionSelectResults() {
    return cy.get(this.selector.myAccount.shippingAddress.countryRegionSelectResults);
}
getAccountFirstName() {
    return cy.get(this.selector.myAccount.accountDetails.accountFirstName);
}
getAccountLasttName() {
    return cy.get(this.selector.myAccount.accountDetails.accountLastName);
}

}