
import loginUtils from "../../../../utils/loginUtils";
import DateUtils from './../../../../utils/dateUtils';

describe("The Achievement Page", () => {
  
  const loginUtil = new loginUtils();
  const dateUtil = new DateUtils();
  const date = dateUtil.getCurrentDate();
  const timeStamp = dateUtil.getTimestamp();
  const achivType = `${date}成就类型创建${timeStamp}`
  before(() => {
    loginUtil.login();
  })
  after(()=>{
    loginUtil.logout();
  })
  it.skip("新建成就类型", () => {
    cy.get('.list-search__button > :nth-child(1)').click();
    cy.get('#form_item_typeName').type(achivType)
    cy.get('.ant-modal-footer > div > .ant-btn-primary > span').click()
    //点击设置-成就类型，查看成就是否增加成功
    cy.contains('设置').click()
    cy.get('.ant-menu-vertical>li:nth-child(3)').click()
    cy.get('.ant-card-grid span span').should('have.text',achivType)
  })
  it("输入正确的参数，发布成就成功", ()=> {
    cy.visit('https://localhost:3100/#/achievement/list')
    cy.get('.list-search__button > :nth-child(2)').click();
    cy.get('#form_item_achvTypeId').click()
    // function scrollUntilElementFound(scrollIndex) {
    //   debugger
    //   if(scrollIndex >100){
    //     return "element not found"
    //   }
    //   scrollIndex = scrollIndex+10;
    //   if((cy.get('.rc-virtual-list-holder-inner>div').contains('成就类型创建2022-8-6'))!=0){
    //       cy.get('.rc-virtual-list-holder-inner>div').scrollTo(scrollIndex);
    //       scrollUntilElementFound(scrollIndex);
    //   } else {
    //       //element found
    //       return;
    //   }  
    //   }
    //   scrollUntilElementFound(1)
    cy.get('.rc-virtual-list-holder-inner>div').each(($ele) => {
      if($ele.text() == `33333`) {
        cy.wrap($ele).click({force: true})
      }
    })
    // cy.get('.rc-virtual-list-holder',{ensureScrollable: false}).scrollTo("bottom").contains(/成就/i).click()
    cy.get('#form_item_achvDesc').type(`新建成就${date}`);
    cy.get('.ant-space>div:nth-child(1)> button:nth-child(1)').click();
    cy.get('input[type="file"]').selectFile('cypress/files/achivement1.jpg', { force: true })
    cy.get('.ant-btn-success').click();
    cy.get('.upload-modal > .ant-btn-primary > span').click();
    cy.get('.ant-select-selection-overflow').click();
    cy.get('div[title="旺仔家"]>div').click();
    cy.contains('确 认').click();
    cy.get('.ant-spin-container>li:first-child p',{timeout:20000}).contains(`新建成就${date}`) 
  })
  it.skip("给成就进行点赞，点赞成功",()=>{
    cy.visit("https://localhost:3100/#/achievement/list")
    let numBefore=0;
    cy.get('.ant-spin-container>li:nth-child(1) button').then(($button)=>{
        numBefore = Number($button.text());
    })
    cy.get('.ant-spin-container>li:nth-child(1) button').click();
    cy.get('.ant-spin-container>li:nth-child(1) button').should(($button)=>{
        expect($button.text()).to.include(numBefore+1)   
    })
  })
});
