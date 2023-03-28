describe("test",()=>{
    it('preprod link works',()=>{
        cy.viewport('ipad-mini')
        cy.visit('localhost:3000/template-2')
    })
})