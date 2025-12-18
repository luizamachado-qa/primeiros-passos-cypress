import userData from '../fixtures/users/user-date.json'

describe('Orange HRM - Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder= 'yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type("LastNameTest")
    cy.get(selectorList.genericField).eq(4).clear().type("123")
    cy.get(selectorList.genericField).eq(5).clear().type("OtherIdTest")
    cy.get(selectorList.genericField).eq(6).clear().type("DriversLicenseTest")
    cy.get(selectorList.genericField).eq(7).clear().type("2025-03-10")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(8).type("ssnNumber Test")
    cy.get(selectorList.genericField).eq(9).type("sinNumber Test")
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