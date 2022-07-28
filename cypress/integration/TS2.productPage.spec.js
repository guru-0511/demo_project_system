/// <reference types="cypress" />

import { selectors } from "../selectors/selectors";
import { utility } from "../selectors/utilities";

describe("verify the coupon page section", () => {
  before(() => {
    cy.visit("/");
    utility.login('standard_user', 'secret_sauce')
  });

  it("verify the product High to low", () => {
    cy.get(selectors.productPage.bugerMenu).should("be.visible");
    cy.get(selectors.productPage.sortOption)
      .should("be.visible")
      .select("Price (high to low)");
    cy.get(".inventory_item_price").eq(0).should("have.text", "$49.99");
    cy.get(".inventory_item_price").eq(-1).should("have.text", "$7.99");
  });
  it("verify the product low to High", () => {
    cy.get(selectors.productPage.bugerMenu).should("be.visible");
    cy.get(selectors.productPage.sortOption)
      .should("be.visible")
      .select("Price (low to high)");
    cy.get(".inventory_item_price").eq(-1).should("have.text", "$49.99");
    cy.get(".inventory_item_price").eq(0).should("have.text", "$7.99");
  });
});
