/* eslint-disable no-undef */
import { PATH_FC } from "../const";
describe("Theme", () => {
  it("1", () => {
    cy.visit(PATH_FC);
    cy.get(`a[href="/settingsCL"]`).click();
    cy.get("select").select("light");
    cy.get("select").select("dark");
    cy.get("select").select("colored");
    cy.get("select").select("dark");
    cy.url().should("eq", "http://localhost:3000/settingsCL");
  });
});
