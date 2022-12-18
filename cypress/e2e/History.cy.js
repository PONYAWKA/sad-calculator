import { PATH_FC, PATH_CL } from "../const";
/* eslint-disable no-undef */
describe("HistoryTest", () => {
  it("Test", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "0.24+2 = 2.24");
  });
  it("Test2", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('[value="C"]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "");
  });
  it("Test3", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="3"]').click();
    cy.get('[value="="]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "");
  });
  it("Testcl", () => {
    cy.visit(PATH_CL);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "0.24+2 = 2.24");
  });
  it("Testcl", () => {
    cy.visit(PATH_CL);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('[value="C"]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "");
  });
  it("Testcl", () => {
    cy.visit(PATH_CL);
    cy.get('button[value="3"]').click();
    cy.get('[value="="]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "");
  });
  it("TestclearHistFC", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "0.24+2 = 2.24");
    cy.get(`a[href="/settingsFC"]`).click();
    cy.get('button[id="clear"]').click();
    cy.get(`a[href="/fc"]`).click();
    cy.get("#history").should("have.text", "");
  });
  it("TestclearHistCL", () => {
    cy.visit(PATH_CL);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('button[id="hideShow"]').click();
    cy.get("#history").should("have.text", "0.24+2 = 2.24");
    cy.get(`a[href="/settingsCL"]`).click();
    cy.get('button[id="clear"]').click();
    cy.get(`a[href="/cl"]`).click();
    cy.get("#history").should("have.text", "");
  });
});
