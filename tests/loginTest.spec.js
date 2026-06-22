const {test, expect}= require ('@playwright/test')
const {envconfig}= require ('../utils/EnvConfig')
const {errorhandle}= require ('../utils/ErrorHandler')
const {loginpage}= require('../pages/loginPage')
const {testdata}= require('../testData/loginTestdata')

const env= new envconfig()
const handler= new errorhandle()
const data= env.configinfo()

test('valid login', async({page})=>{
    const loginn= new loginpage(page)
    try {
        await loginn.navigate('https://www.saucedemo.com')
        await loginn.loginUser(
            testdata.users.valid.usernme,
            testdata.users.valid.passwrd
        )

    expect(page).toHaveURL(testdata.expected.inventoryURL);

    } catch (error) {
        handler.handle(error,'Valid login test')
        throw error
    }
})

test.only('invalid login', async ({page})=>{
    const loginn= new loginpage(page)

    try {
        await loginn.navigate('https://www.saucedemo.com')
        await loginn.loginUser(
            testdata.users.valid.usernme,
            testdata.users.valid.passwrd
        )

        const err= await loginn.GetErrMsg()
        expect(err).toContain(testdata.expected.loginErrorMsg)
    } catch (error) {
        handler.handle(error, 'invalid login test')
        handler.printErrors()
        throw error
    }
})

