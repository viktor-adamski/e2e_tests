
import MainPage from "../../support/pages/MainPage";

describe('08 Main page', () => {
    const mainPage = new MainPage();

    beforeEach( function () {
        cy.logIn();
      
    })
  
    it('Verify existing contact information on main page', function () {
        mainPage.getHomeLink().should('exist');
        mainPage.clickGetHomeLink();
        mainPage.getContactDetails().should('exist').should('contain', 'nomail@toolsqa.com');
        mainPage.getContactDetails().should('exist').should('contain', '+(099) 999 - 9999');
        
    })

    it('Verify existing main footer on main page', function () {
        mainPage.clickGetHomeLink();
        mainPage.getPaymentLogo().should('exist').should('have.attr', 'src', 'http://shop.demoqa.com/wp-content/uploads/2019/04/payment_logo.png');
        mainPage.getMainFooter().should('exist').should('contain', '@ 2020. Copyright TOOLSQA');
        
    })

    it('Verify existing main advertisement on main page', function () {
        mainPage.clickGetHomeLink();
        mainPage.getMainScreenText().should('exist').should('contain', 'Spring - summer lookbook');
        mainPage.getUmbraBlue().should('exist').contains('umbra blue Dress');
        
    })

    it('Verify existing services information on main page', function () {
        mainPage.clickGetHomeLink();

        mainPage.getIconShipping().should('exist').should('have.attr', 'src', 'https://shop.demoqa.com/wp-content/uploads/2019/04/truck.png');
        mainPage.getIconShipping().trigger('mouseover', { force: true });
        mainPage.getServiceContent().eq(0).should('exist').contains('FREE SHIPPING Excepteur occaecat cupidatat');

        mainPage.getIconSecurePayment().should('exist').should('have.attr', 'src', 'https://shop.demoqa.com/wp-content/uploads/2019/04/Icon_service.png');
        mainPage.getIconSecurePayment().trigger('mouseover', { force: true });
        mainPage.getServiceContent().eq(1).should('exist').contains('Secure payment Excepteur occaecat cupidatat');
        
        mainPage.getIconWarranty().should('exist').should('have.attr', 'src', 'https://shop.demoqa.com/wp-content/uploads/2019/04/Icon_service2.png');
        mainPage.getIconWarranty().trigger('mouseover', { force: true });
        mainPage.getServiceContent().eq(2).should('exist').contains('2 Years Warranty Excepteur occaecat cupidatat');

        mainPage.getIconMoneyBack().should('exist').should('have.attr', 'src', 'https://shop.demoqa.com/wp-content/uploads/2019/04/Icon_service3.png');
        mainPage.getIconMoneyBack().trigger('mouseover', { force: true });
        mainPage.getServiceContent().eq(3).should('exist').contains('Money back 30 days Excepteur occaecat cupidatat');

    })

})