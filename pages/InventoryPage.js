const { error } = require('node:console');
const {basepage} = require('./basePage')

class inventorypage extends basepage{
    constructor(page){
        super(page)
    this.addToCartBtn  = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartBadge     = '[data-test="shopping-cart-badge"]';
    this.cartIcon      = '[data-test="shopping-cart-link"]';
    this.productTitle  = '[data-test="inventory-item-name"]';
    this.menuButton    = '#react-burger-menu-btn';
    this.logoutLink    = '#logout_sidebar_link';
    }

    async addProducttoCart(){
        await this.clickfunc(this.addToCartBtn)
    }

    async getCartCount(){
        return await this.getText(this.cartBadge)
    }

    async gotoCart(){
        await this.clickfunc(this.cartIcon)
    }

    async logout(){
        await this.clickfunc(this.menuButton)
        await this.waitfunc(500)
        await this.clickfunc(this.logoutLink)
    }

    async getFirstProductName(){
        return await this.getText(this.productTitle)
    }
}

module.exports= {inventorypage}