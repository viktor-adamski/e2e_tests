
import MyAccountPage from '/Users/viktoradamski/Desktop/shoopTools/cypress/support/pages/MyAccountPage';

describe('03 My account', () => {
    const myAccountPage = new MyAccountPage();

    beforeEach(function ()  {
        cy.logIn();
    })

    it('My account content information existing verification', function () {  
        myAccountPage.getMyAccountContent();
    })

    it('My account logout verification', function () {  
        myAccountPage.getLogOut().should('exist').click();
    })

    it('My account side menu verification', function () {  
        myAccountPage.getDashboard().should('exist');
        myAccountPage.getOrders().should('exist');
        myAccountPage.getDownloads().should('exist');
        myAccountPage.getAddresses().should('exist');
        myAccountPage.getAccountDetails().should('exist');
        myAccountPage.getLogout().should('exist');
    })

    it('My account order content verification', function () {  
        myAccountPage.getOrders().click();
        myAccountPage.getOrderContent();
        myAccountPage.getNoOrder().should('contain', 'No order has been made yet.');
        myAccountPage.getBrowseProducts().should('exist');
    })

    it('Browse products verification', function () {  
        myAccountPage.getOrders().click();
        myAccountPage.getOrderContent();
        myAccountPage.getBrowseProducts().click();
    })

    it('My address content verification', function () {  
        myAccountPage.getAddresses().click();
        myAccountPage.getNoticesWrapper().should('contain', 'The following addresses will be used on the checkout page by default.');
        myAccountPage.getBillingAddressContent().should('contain', 'Billing address').and('contain', 'You have not set up this type of address yet.');
        myAccountPage.getAddBillingAddress().should('exist');
        myAccountPage.getShippingAddressContent().should('contain', 'Shipping address').and('contain', 'You have not set up this type of address yet.')
        myAccountPage.getAddShippingAddress().should('exist');
    })

    it('My billing address error message verification', function () {  
        myAccountPage.getAddresses().click();
        myAccountPage.getAddBillingAddress().should('exist').click();
        myAccountPage.clickSaveAddress();
        myAccountPage.getErrorFirstName().should('exist').should('contain', 'First name is a required field.');
        myAccountPage.getErrorLastName().should('exist').should('contain', 'Last name is a required field.');
        myAccountPage.getErrorCountry().should('exist').should('contain', 'Country / Region is a required field.');
        myAccountPage.getErrorAddress().should('exist').should('contain', 'Street address is a required field.');
        myAccountPage.getErrorCity().should('exist').should('contain', 'Town / City is a required field.');
        myAccountPage.getErrorState().should('exist').should('contain', 'State is a required field.');
        myAccountPage.getErrorPostCode().should('exist').should('contain', 'PIN is a required field.');
        myAccountPage.getErrorPhone().should('exist').should('contain', 'Phone is a required field.');
        
    })

    it('Complete billing address verification', function () {  
        myAccountPage.getAddresses().click();
        myAccountPage.getAddBillingAddress().click();
        myAccountPage.getFirstName().should('exist').clear().type('Joan').should('have.value', 'Joan');
        myAccountPage.getLastName().should('exist').clear().type('Smith').should('have.value', 'Smith');
        myAccountPage.clickCountryRegion();
        myAccountPage.getListBillingCountry().select('AU', { force: true });
        myAccountPage.getHouseStreet().should('exist').clear().type('Avenue 303').should('have.value', 'Avenue 303');
        myAccountPage.getAppartment().should('exist').clear().type('777').should('have.value', '777');
        myAccountPage.getCity().should('exist').clear().type('Sydney').should('have.value', 'Sydney');
        myAccountPage.clickStateCountry();
        myAccountPage.getListOfState().select('SA', { force: true });
        myAccountPage.getPostCode().should('exist').clear().type('10017').should('have.value', '10017');
        myAccountPage.getPhone().should('exist').clear().type('+1(646) 555-3890').should('have.value', '+1(646) 555-3890');
        myAccountPage.clickSaveAddress();
        myAccountPage.getChangingConfirmation().should('contain', 'Address changed successfully.');
        
    })

    it('My shipping address error message verification', function () {  
        myAccountPage.getAddresses().click();
        myAccountPage.getAddShippingAddress().click();
        myAccountPage.clickSaveAddress();
        myAccountPage.getErrorShippingFirstName().should('exist').should('contain', 'First name is a required field.');
        myAccountPage.getErrorShippingLastName().should('exist').should('contain', 'Last name is a required field.');
        myAccountPage.getErrorShippingCountry().should('exist').should('contain', 'Country / Region is a required field.');
        myAccountPage.getErrorShippingAddress().should('exist').should('contain', 'Street address is a required field.');
        myAccountPage.getErrorShippingCity().should('exist').should('contain', 'Town / City is a required field.');
        myAccountPage.getErrorShippingState().should('exist').should('contain', 'State is a required field.');
        myAccountPage.getErrorShippingPin().should('exist').should('contain', 'PIN is a required field.');
    })

    it('Complete shipping address verification', function () {  
        myAccountPage.getAddresses().click();
        myAccountPage.getAddShippingAddress().click();
        myAccountPage.getShippingFirstName().should('exist').clear().type('Joan').should('have.value', 'Joan');
        myAccountPage.getShippingLastName().should('exist').clear().type('Smith').should('have.value', 'Smith');
        myAccountPage.clickShippingCountryRegion();
        myAccountPage.getCountryRegionSearchField().type('India');
        myAccountPage.getCountryRegionSelectResults().next().click();
        myAccountPage.getShippingHouseStreet().should('exist').clear().type('Avenue 303').should('have.value', 'Avenue 303');
        myAccountPage.getShippingAppartment().should('exist').clear().type('777').should('have.value', '777');
        myAccountPage.getShippingCity().should('exist').clear().type('Delhi').should('have.value', 'Delhi');
        myAccountPage.clickShippingStateCountry();
        myAccountPage.getStateCountrySearchFiled().clear().type('Punjab');
        myAccountPage.getStateCountrySelectResults().contains('Punjab').click();
        myAccountPage.getShippingPin().clear().type('456001').should('have.value', '456001');
        myAccountPage.clickSaveAddress();
        myAccountPage.getChangingConfirmation().should('contain', 'Address changed successfully.');
        
    })

    it('Complete account details verification', function () {  
        myAccountPage.clickAccountDetails();
        myAccountPage.getAccountFirstName().clear().type('Joan').should('have.value', 'Joan');
        myAccountPage.getAccountLasttName().clear().type('Smith').should('have.value', 'Smith');
        myAccountPage.clickSaveAddress();
        myAccountPage.getChangingConfirmation().should('contain', 'Account details changed successfully.');
        
    })

})