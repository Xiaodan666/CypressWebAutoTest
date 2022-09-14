
import loginUtils from "../../../../utils/loginUtils";
import DateUtils from './../../../../utils/dateUtils';

describe("The memorial Page", () => {
  
  const loginUtil = new loginUtils();
  const dateUtil = new DateUtils();
  const date = dateUtil.getCurrentDate();
  const timeStamp = dateUtil.getTimestamp();
  const memorialPublicName = `${date}新建公历纪念日${timeStamp}`
  const memorialLunaName = `${date}新建农历纪念日${timeStamp}`
  before(() => {
    loginUtil.login();
    cy.visit('https://localhost:3100/#/memorial/day')
  })
  after(()=>{
    loginUtil.logout();
  })
  it("新建公历纪念日", () => {
    cy.get('.target-list__button>button:last-child').click();
    cy.get('#form_item_dayTitle').type(memorialPublicName)
    cy.get('.ant-radio-group>label:first-child input').click()
    cy.get('#form_item_dayDate').click()
    cy.get('.ant-picker-cell-today').click()
    cy.get('#form_item_remindTime').click()
    cy.get('div[title="07:00"]').click()
    cy.get('div[codefield="familyIds"]').click()
    cy.get('div[title="旺仔家"]').click()
    cy.contains('确 认').click()
    cy.contains(memorialPublicName,{timeout:20000})
  })
  
  it("新建农历纪念日",()=>{
    cy.get('.target-list__button>button:last-child').click();
    cy.get('#form_item_dayTitle').type(memorialLunaName)
    cy.get('.ant-radio-group>label:last-child input').click()
    cy.get('div[codefield="lunarCalendarYear"]').click()
    cy.get('div[title="2013"]').click()
    cy.get('div[codefield="lunarCalendarMonth"]').click()
    cy.get('div[title="8"]').click()
    cy.get('div[codefield="lunarCalendarDay"]').click()
    cy.get('#form_item_lunarCalendarDay_list + div div[title="5"]').click()
    cy.get('#form_item_remindTime').click()
    cy.get('div[title="07:00"]').click()
    cy.get('div[codefield="familyIds"]').click()
    cy.get('div[title="旺仔家"]').click()
    cy.contains('确 认').click()
    cy.contains(memorialPublicName,{timeout:20000})

  })
});
