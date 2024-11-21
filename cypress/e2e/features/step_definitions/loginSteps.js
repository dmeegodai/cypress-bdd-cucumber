import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath');


Given("I navigate to the login page", () => {
    cy.visit("/login")
});

When("I enter valid credentials", () =>{
    cy.xpath("//input[@id='username']").type("tomsmith");
    cy.xpath("//input[@id='password']").type("SuperSecretPassword!");
    cy.xpath("//i[@class='fa fa-2x fa-sign-in']").click();
})

Then("I should see the dashboard", () =>{
    cy.contains("secure area!").should("be.visible");
})
