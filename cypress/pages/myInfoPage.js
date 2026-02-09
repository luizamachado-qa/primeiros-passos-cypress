class MyInfoPage {
    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().genericField).eq(6).clear({force: true}).type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
    }

    fillStatus() {
        cy.get(this.selectorsList().optionsField).eq(0).click()
        cy.get(this.selectorsList().optionNationality).click()
        cy.get(this.selectorsList().optionsField).eq(1).click()
        cy.get(this.selectorsList().optionMarital).click()
    }
}

export default MyInfoPage
