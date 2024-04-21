
describe('Création de compte', () => {

    // déclarer les variables golbales 
    var firstname;  var lastname; var email;  var tel;  var password

    // Initialiser ces variables avec vos valeurs spécifique
    before(() => {
      firstname = 'Ameni';
      lastname = 'Khlifi';
      email = 'Khlifi@test.com';
      tel = '777777777';
      password = '12345abc';
    });

    // Actions à effectuer avant chaque cas de test
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').contains("Continue").click({force:true})
      
    })

    // les cas des tests 
    it('Creation de nouveau compte avec succée', () => {
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains("Congratulations! Your new account has been successfully created!")
    });

    //Ajoutez autres test cases pour la partie creation du compte
    /*
    it('Test de creation de compte avec des informations invalides', () => {
      .
      .
      .
      .
    });
    */
  
    it('Test de creation de compte avec un email existant ', () => {
      cy.get('input[name="firstname"]').type("med")
      cy.get('input[name="lastname"]').type("med")
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="telephone"]').type("123456987")
      cy.get('input[name="password"]').type("abcd12")
      cy.get('input[name="confirm"]').type("abcd12")
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains("Warning: E-Mail Address is already registered!")

    });
   
    it('Test de creation de compte avec un mot de passe longeur invalide ', () => {
       cy.get('input[name="firstname"]').type("med")
      cy.get('input[name="lastname"]').type("med")
      cy.get('input[name="email"]').type("med@admin.com")
      cy.get('input[name="telephone"]').type("7896542")
      cy.get('input[name="password"]').type("1")
      cy.get('input[name="confirm"]').type("1")
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains("Password must be between 4 and 20 characters!")
    });
   
     
     it('Test de creation de compte avec deux mot de passe non comforme', () => {
      cy.get('input[name="firstname"]').type("med")
      cy.get('input[name="lastname"]').type("med")
      cy.get('input[name="email"]').type("med@admin.com")
      cy.get('input[name="telephone"]').type("7896542")
     cy.get('input[name="password"]').type("145555")
     cy.get('input[name="confirm"]').type("55555")
     cy.get('input[id="input-newsletter-yes"]').click({force:true})
     cy.get('input[name="agree"]').click({force:true})
     cy.get('input[value="Continue"]').click({force:true})
     cy.contains("Password confirmation does not match password!")
   });
  

  });