describe('socket errors', () => {
  it('does not blow up', () => {
    cy.on('uncaught:exception', (err) => {
      debugger
    })
    cy.viewport(300, 300)
    cy.visit('/fixtures/socket.html')
    cy.wait(10000)
  })
})
