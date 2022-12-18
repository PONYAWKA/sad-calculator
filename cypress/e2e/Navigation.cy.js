/* eslint-disable no-undef */
import { PATH_FC } from "../const";
describe("Navigation", () => {
  it("1", () => {
    cy.visit(PATH_FC);
    cy.get(`a[href="/settingsCL"]`).click();
    cy.get(`a[href="/settingsFC"]`).click();
    cy.get(`a[href="/fc"]`).click();
    cy.get(`a[href="/cl"]`).click();
    cy.get(`a[href="/fc"]`).click();
    cy.get(`a[href="/settingsCL"]`).click();
    cy.url().should("eq", "http://localhost:3000/settingsCL");
  });
});
