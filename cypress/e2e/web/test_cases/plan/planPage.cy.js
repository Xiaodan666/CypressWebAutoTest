
import loginUtils from "../../../../utils/loginUtils";
import DateUtils from '../../../../utils/dateUtils';

describe("The Plan Page", () => {
  
  const loginUtil = new loginUtils();
  const dateUtil = new DateUtils();
  const date = dateUtil.getCurrentDate();
  const timeStamp = dateUtil.getTimestamp();
  const planName = `${date}新建计划${timeStamp}`
  const planDesc = `${date}计划描述信息${timeStamp}`
  before(() => {
    loginUtil.login();
    cy.visit('https://localhost:3100/#/plan-business/list')

  })
  after(()=>{
    loginUtil.logout();
  })
  it("新建计划", () => {
    cy.get('.target-list__button>button').click();
    cy.get('#form_item_familyId').click()
    cy.get('div[title="旺仔家"]').click()
    cy.get('#form_item_planName').type(planName)
    cy.get('input[codefield="targetNum"]').type(30)
    cy.get('#form_item_planDesc').type(planDesc)
    cy.get('.vben-cropper-avatar img').click()
    cy.get('input[type="file"]').selectFile('cypress/files/achivement1.jpg', { force: true }).wait(1000)
    cy.contains('确认并上传').click()
    cy.contains('确 认').click()
    cy.contains(planName,{timeout:20000})
    cy.contains(planDesc,{timeout:20000})
  })
  
  
});
