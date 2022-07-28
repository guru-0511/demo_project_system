import { selectors } from "../selectors/selectors";
const utility = {
  login(username, password) {
    cy.get(selectors.element.userName).type(username);
    cy.get(selectors.element.password).type(password);
    cy.get(selectors.element.loginBtn).click();
  },
};
module.exports = { utility };
