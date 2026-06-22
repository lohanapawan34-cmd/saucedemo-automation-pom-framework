const { advancebasepage } = require('./advancedBasepage')

class advinventory extends advancebasepage {
    constructor(page) {
        super(page)

        //selectors
        this.productlist = '.inventory_list'
        this.productItem = '.inventory_item'
        this.productName = '.inventory_item_name'
        this.productprice = '.inventory_item_price'
        this.productdesc = '.inventory_item_desc'
        this.addToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartBadge = '[data-test="shopping-cart-badge"]';
        this.cartIcon = '[data-test="shopping-cart-link"]';
        this.productTitle = '[data-test="inventory-item-name"]';
        this.menuButton = '#react-burger-menu-btn';
        this.logoutLink = '#logout_sidebar_link';
        this.footer='.footer'
        this.socialtwitter='.social_twitter'

    }

    async addtoCart(){
        await this.clickfunc(this.addToCartBtn)
    }

    async getCartCount(){
        return await this.gettext(this.cartBadge)
    }

    async logout(){
        await this.clickfunc(this.menuButton)
        await this.waitfunc(500)
        await this.clickfunc(this.logoutLink)
    }
}

module.exports= {advinventory};