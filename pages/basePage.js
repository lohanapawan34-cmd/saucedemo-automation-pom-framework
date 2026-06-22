class basepage{
    constructor(page){
        this.page=page
    }

    async navigate(url){
        await this.page.goto(url)
    }

    async fillfunc(locator,text){
        await this.page.locator(locator).fill(text)
    }

    async clickfunc(locator){
        await this.page.locator(locator).click()
    }

    async pagetitlefunc(){
        return await this.page.title()
    }

    async waitfunc(ms){
        await this.page.waitForTimeout(ms)
    }

    async getText(locator){
        return await this.page.locator(locator).innerText()
    }

    async isvisible(locator){
        return await this.page.locator(locator).isVisible()
    }

}

module.exports= {basepage}