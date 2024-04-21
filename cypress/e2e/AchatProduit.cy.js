describe('Acheter un produit ', () => {
  // Test cases pour l'ajout des produits au panier
  beforeEach(() => {
    cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        // Completez le test d'achat d'un produit 
        cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
        cy.contains("Success: You have added ")
        cy.wait(15000)
        // verifier si le produit est bien ajouté au panier 
        cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click()
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart"]').click()
        cy.contains('tr','HTC Touch HD')
  })

    // Acheter un produit en utilisant une nouvelle adresse
    it('Acheter un produit au panier new adress', () => {
      
        cy.get('.buttons.d-flex > .btn-primary').click()
        // Sélectionner un bouton radio par son libellé
        //cy.contains('label', 'I want to use a new address').prev().check();
        cy.get('input[id="input-payment-address-new"]').check({force: true})
        cy.get('input[id="input-payment-firstname"]').type("Khlifi")
        cy.get('input[id="input-payment-lastname"]').type("Ameni")
        cy.get('input[id="input-payment-address-1"]').type("Le Bardo Tunis")
        cy.get('input[id="input-payment-city"]').type("Le Bardo ")
        cy.get('select[id="input-payment-country"]').select('Tunisia');
        cy.get('select[id="input-payment-zone"]').select('Tunis');
        cy.get('input[id="input-agree"]').check({force: true});
        cy.get('button[id="button-save"]').contains("Continue ").click();
        cy.contains("Confirm Order")
        cy.get('button[id="button-confirm"]').contains("Confirm Order ").click();
        cy.contains("Your order has been placed!")
    })
    
    //Ajoutez autres tests cases pour l'achat des produits 
      /*
        .
        .
        .
        .
      */  
    
  })