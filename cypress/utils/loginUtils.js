export default class loginUtils {
    
  constructor() {
      this.url = "https://localhost:3100/#/login"
      this.userName = 'pei_xiao_dan@126.com'
      this.passWord = '123'
  }

  login() {
      
      cy.visit(this.url)
      cy.get('#form_item_email').type(this.userName).should('have.value',this.userName)
      cy.get('#form_item_password').type(`${this.passWord}{enter}`)
      cy.contains('成就',{ timeout: 100000 })
  }

  logout() {
      cy.get('.vben-header-user-dropdown__name').click()
      cy.get('.ant-dropdown-menu-title-content').click()
      cy.get('.ant-modal-confirm-body-wrapper>div:nth-child(2)>button:nth-child(2)').click()
      // check if jump into sign page
      cy.get('#form_item_email').should('be.visible')
      
  }

}
