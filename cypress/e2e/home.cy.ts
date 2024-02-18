describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it('the h1 contains the correct text', () => {
    
    //cy.get("h1").contains("Testing Next.js Applications with Cypress") // This is chaining 
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains(/4 courses/i) // The slash makes it case insensitive
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })

  it("the h1 contains the correct text", () => {
    cy.getByData("hero-heading").contains(
      "Testing Next.js Applications with Cypress"
    )
  })
})