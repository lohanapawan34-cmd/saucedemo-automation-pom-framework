const {test,expect} = require('@playwright/test')
const {loginpage} = require('../pages/loginPage')
const {envconfig} = require('../utils/EnvConfig')
const{datad} = require('../testData/Datadriventesting')
 


const config= new envconfig()
const env= config.configinfo()


//loop for valid users
for(const userss of datad.validUsers){
    test(`Valid login- ${userss.role} user`, async({page})=>{
        const loginn= new loginpage(page)
        await loginn.navigate('https:www.saucedemo.com')
        await loginn.loginUser(userss.usernme, userss.passwrd)

        await expect(page).toHaveURL(datad.expected.inventoryURL)

    })
}

//loop for invalid users
for(const userss of datad.InvalidUsers){
    test(`Invalid login- ${userss.reason}`, async({page})=>{
        const loginn= new loginpage(page)
        await loginn.navigate('https://www.saucedemo.com')
        await loginn.loginUser(userss.usernme, userss.passwrd)

        const errvisble= await loginn.isErrorVisible()
        expect(errvisble).toBe(true)


    })
}

test.only('locked user login', async({page})=>{
    const loginn= new loginpage(page)
    const user= datad.locked_user
    await loginn.navigate('https://www.saucedemo.com')
    await loginn.loginUser(user.usernme, user.passwrd)

    const errmsg= await loginn.GetErrMsg()
    expect(errmsg).toContain(datad.expected.lockedErrorMsg)


})