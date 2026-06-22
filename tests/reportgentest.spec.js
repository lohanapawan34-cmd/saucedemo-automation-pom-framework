const {test, expect} = require('@playwright/test')
const {envconfig}= require('../utils/EnvConfig')
const {loginpage}= require('../pages/loginPage')
const {inventorypage}= require('../pages/InventoryPage')
const {reportgen}= require('../utils/reportgenerator')
const {testdata} = require('../testData/loginTestdata')

const config= new envconfig()
const env= config.configinfo()
const report= new reportgen()

test('valid login', async({page})=>{
    const loginn= new loginpage(page)

    try {
         await loginn.navigate('https://www.saucedemo.com')
         await loginn.loginUser(
            testdata.users.valid.usernme,
            testdata.users.valid.passwrd
         )

         await expect(page).toHaveURL(testdata.expected.inventoryURL)
         report.addresult('valid login test', 'passed')
    } catch (error) {
        report.addresult('valid login test','failed', error.message)
        throw error
    }
})

//invalid login
test('invalid user login', async({page})=>{
    const lgin= new loginpage(page)
    try {
        await lgin.navigate('https://www.saucedemo.com')
        await lgin.loginUser(
            testdata.users.invalid.usernme,
            testdata.users.invalid.passwrd
        )

        const iserror= await lgin.isErrorVisible()
        expect(iserror).toBe(false)
        report.addresult('invalid user login','passed')
    } catch (error) {
        report.addresult('invalid user login', 'failed', error.message)
        throw error
    }
})

test.afterAll(() => {
    report.printReport()
})