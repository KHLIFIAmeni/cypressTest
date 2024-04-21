describe('Mot de pass oublié', () => {
  var email;
  before(() => {
    email = 'Khlifi@test.com';
  });
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.title().should('eq', 'Your Store')
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
      cy.contains("Forgot Your Password?")
  })

  // Test cases pour la forget password
  it('Reset mot de pass avec succée', () => {
      cy.get('input[name="email"]').type(email)
      cy.get('button[type="submit"]').contains('Continue').click()
      cy.contains('An email with a confirmation link has been sent your email address.')
    });
  //Ajoutez autres test cases pour la partie forget password
  
    it('forget password test case invalid email', () => {
      cy.get('input[name="email"]').type("khlifiameni@test.com")
      cy.get('button[type="submit"]').contains('Continue').click()
      cy.contains('Warning: The E-Mail Address was not found in our records, please try again!')
    });
     
 
})
