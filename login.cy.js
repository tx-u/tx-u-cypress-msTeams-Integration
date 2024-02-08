// describe('Microsoft Teams Integration Testing', () => {

//     it('login teams', () => {
//       const email = 'teams.auto@outlook.com';
//       const password = 'Action@12345';

//       cy.visit('https://teams.microsoft.com/');
//       cy.wait(5000)
//     //   cy.get('[name="loginfmt"]').type(email);
//       cy.get('input[data-report-event="Signin_Email_Phone_Skype"]').type(email);
//     //   cy.get('[id="idSIButton9"]').click();
//       cy.get('input[data-report-event="Signin_Submit"]').click()
//       cy.wait(5000);
//     //   cy.get('[name="passwd"]').type(password);
//       cy.get('input[name="passwd"]').type(password);
//       cy.get('input[data-report-event="Signin_Submit"]').click();
//     //   cy.get('[id="idSIButton9"]').click();
//       cy.wait(5000);
//     });
//   });

describe("Initial Cypress Tests", () => {
  it("navigate to MSteams site", () => {
    const email = "usr";
    const password = "pass";
    cy.on("uncaught:exception", (error) => {
      return !error.message.includes(
        "Cannot read properties of null (reading 'addNotificationListener')"
      );
    });

    cy.visit("https://teams.microsoft.com/_#/");
    cy.origin("login.microsoftonline.com", () => {
      cy.get('input[type="email"]').type(email);
      cy.get('input[type="submit"]').click();
    });

    cy.origin("login.live.com", () => {
      cy.get('input[type="password"]').type(password);
      cy.get('input[type="submit"]').click();
      cy.get("#idBtn_Back").click();
    });

    cy.url().should("include", "https://teams.microsoft.com");
  });
});
