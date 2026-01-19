import userData from '../fixtures/users/user-date.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM - Tests', () => {

  const selectorList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder= 'yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    optionsField: ".oxd-select-text--after",
    optionNationality: ":nth-child(27) > span",
    optionMarital: ":nth-child(3) > span"
  
  }


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type("LastNameTest")
    cy.get(selectorList.genericField).eq(3).clear().type("Employee")
    cy.get(selectorList.genericField).eq(4).clear().type("OtherIdTest")
    cy.get(selectorList.genericField).eq(5).clear().type("DriversLicenseTest")
    cy.get(selectorList.genericField).eq(6).clear().type("2025-03-10")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.optionsField).eq(0).click()
    cy.get(selectorList.optionNationality).click()
    cy.get(selectorList.optionsField).eq(1).click()
    cy.get(selectorList.optionMarital).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})