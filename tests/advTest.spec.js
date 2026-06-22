const {test,expect} = require('@playwright/test')
const {advinventory}= require('../pages/advInventorypage')
const {loginpage} = require ('../pages/loginPage')
const {envconfig} = require('../utils/EnvConfig')
const {testdata} = require ('../testData/loginTestdata')
const { inventorypage } = require('../pages/InventoryPage')

const config= new envconfig()
const data= config.configinfo()

//Reusable login helper
async function dologin(page) {
    const lgin = new loginpage(page)
    await lgin.navigate(data.url)
    await lgin.loginUser(
        testdata.users.valid.usernme,
        testdata.users.valid.passwrd
    )
}

//screenshot test
test('login page ka screenshot lo', async({page})=>{
    const invpage= new advinventory(page)
    await invpage.navigate(data.url)

    const filePath= await invpage.ss('login_Page')
    console.log('screenshot saved at:', filePath)

    expect(filePath).toContain('login_Page')
    expect(filePath).toContain('.png')
})

test('login k bd inventory ka ss', async({page})=>{
    const invpage= new advinventory(page)
    await dologin(page)

    const filePath= await invpage.ss('Inventory_screenshot')
    expect(filePath).toContain('Inventory_screenshot')
    expect(filePath).toContain('.png')
})

test('page ko bottom tak scroll kr', async({page})=>{
    const invpage= new advinventory(page)
    await dologin(page)

    await invpage.scrolltobottom();

    const isfooterVisible= await invpage.verifyElement(invpage.footer)
    expect(isfooterVisible).toBe(true)

    await invpage.ss('scroll_to_bottom')
})

test('bottom se top tk scroll karo', async({page})=>{
    const invpage= new advinventory(page)
    await dologin(page)
    await invpage.scrolltobottom()
    await invpage.scrolltotop()

    const elementVisible= await invpage.verifyElement(invpage.productlist)
    expect(elementVisible).toBe(true)

    await invpage.ss('top_screen_ss')
})

//hover
test('hover karo product p', async({page})=>{
    const invpage= new advinventory(page)
    await dologin(page)
    await invpage.hoverelement(invpage.productName)
    await invpage.ss('hover_product')
})

test('cart icon p hover karo', async({page})=>{
    const invpage= new advinventory(page)
    await dologin(page)
    await invpage.hoverelement(invpage.cartIcon)
    await invpage.ss('Cart-Icon')
})


//complete flow
test.only('complete flow', async ({page})=>{
    const invpage= new advinventory(page)

    //step:1 login
    await dologin(page)
    await invpage.ss('step:1 logged_in')

    //step:2 product verify karo
    const verify= await invpage.verifyElement(invpage.productItem)
    expect(verify).toBe(true)

    //step:3 product p hover karo
    await invpage.hoverelement(invpage.productName)
    await invpage.ss("Step:2 hovered")

    //step:4 cart mein add karo
    await invpage.addtoCart()
    const cart_count= await invpage.getCartCount()
    expect(cart_count).toBe('1')

    //step:5 footer tk scroll karo
    await invpage.scrolltoElement(invpage.footer)
    await invpage.ss('step:3 footer')

    //step:6 back to top
    await invpage.scrolltotop()
    await invpage.ss('step:4_top')

})
