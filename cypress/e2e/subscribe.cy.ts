describe("Newsletter subscribe form", ()=> {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom@aol.com")
    })
})