const {test, expect}= require ('@playwright/test')
const {envconfig}= require ('../utils/EnvConfig')
const {errorhandle}= require ('../utils/ErrorHandler')
const {loginpage}= require('../pages/loginPage')
const {testdata}= require('../testData/loginTestdata')
const {inventorypage} = require('../pages/InventoryPage')

const env= new envconfig()
const handler= new errorhandle()
const data= env.configinfo()

async function loginAsValidUser(page) {
  const loginPage = new loginpage(page);
  await loginPage.navigate('https://www.saucedemo.com');
  await loginPage.loginUser(
    testdata.users.valid.usernme,
    testdata.users.valid.passwrd
  );
}


test('add product to cart', async({page})=>{

    const inventory= new inventorypage(page)

    try {
        await loginAsValidUser(page)
        await inventory.addProducttoCart()
        const count= await inventory.pro()
        expect(count).toBe('1')
    } catch (error) {
        handler.handle(error,'add product to cart test')
        throw error
    }
})

test.only('navigate to cart page', async ({page})=>{
    const i= new inventorypage(page)
    try {
        await loginAsValidUser(page)
        await i.addProducttoCart()
        await i.gotoCart()

        await expect(page).toHaveURL(testdata.expected.cartURL)
        console.log('✅ Cart page URL verified');

    } catch (error) {
        handler.handle(error, 'cart navigate test')
        throw error
    }
})