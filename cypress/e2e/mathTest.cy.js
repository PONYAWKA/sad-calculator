import { PATH_FC, PATH_CL } from "../const";

/* eslint-disable no-undef */
describe("Math Test", () => {
  it("1", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="0"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="4"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('div[id="Info"]').should("have.text", "2.24");
  });
  it("2", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="1"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get('div[id="Info"]').should("have.text", "1221");
  });
  it("3", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="("]').click();
    cy.get('button[value="0"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="/"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value=")"]').click();
    cy.get('button[value="%"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('div[id="Info"]').should("have.text", "0.5");
  });

  it("basicMultiplicationTest", () => {
    cy.visit(PATH_FC);
    cy.get('button[value="3"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="="]').click();
    cy.get('div[id="Info"]').should("have.text", "6");
  }),
    it("testMultiplicationWithDecimals", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "0.48");
    }),
    it("basicTestAddition", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="3"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "5");
    }),
    it("testAdditionWithDecimals", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "2.24");
    }),
    it("basicSubTest", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="3"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "1");
    }),
    it("testSubWithDecimals", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "-1.76");
    }),
    it("testBasicInfo", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "8");
    }),
    it("testTwoInfos", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "16");
    }),
    it("testWithSecondValueAsInfo", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="2"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "8");
    }),
    it("testWithBig", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="2"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "0");
    }),
    it("testWithBreakets", () => {
      cy.visit(PATH_FC);
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "0");
    }),
    it("basicTestWithDivision", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="3"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "1.5");
    }),
    it("testDivisionWithDecimals", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="/"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "0.12");
    }),
    it("basicMultiplicationTest", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="3"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "6");
    }),
    it("testMultiplicationWithDecimals", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "0.48");
    }),
    it("basicTestAddition", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="3"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "5");
    }),
    it("testAdditionWithDecimals", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "2.24");
    }),
    it("basicSubTest", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="3"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "1");
    }),
    it("testSubWithDecimals", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="0"]').click();
      cy.get('button[value="."]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="4"]').click();
      cy.get('button[value="-"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "-1.76");
    }),
    it("testBasicInfo", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "8");
    }),
    it("testTwoInfos", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "16");
    }),
    it("testWithSecondValueAsInfo", () => {
      cy.visit(PATH_CL);
      cy.get('button[value="2"]').click();
      cy.get('button[value="*"]').click();
      cy.get('button[value="("]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value="+"]').click();
      cy.get('button[value="2"]').click();
      cy.get('button[value=")"]').click();
      cy.get('button[value="="]').click();
      cy.get('div[id="Info"]').should("have.text", "8");
    });
});
