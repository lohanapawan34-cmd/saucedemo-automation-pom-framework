const fs= require('fs')
const path= require('path')

class advancebasepage{
    constructor(page){
        this.page=page;
        this.screentshotdir='screenshots'
    }

    //basic actions
    async navigate(url){
        await this.page.goto(url)
    }

    async clickfunc(locator){
        await this.page.locator(locator).click()
    }

    async fillfunc(locator,txt){
        await this.page.locator(locator).fill(txt)
    }

    async waitfunc(ms){
        await this.page.waitForTimeout(ms)
    }

    async gettext(locator){
      return await this.page.locator(locator).innerText()
    }

    async gettitle(){
        return await this.page.title()
    }

    //screenshot
    async ss(ssname){
        if(!fs.existsSync(this.screentshotdir)){
            fs.mkdirSync(this.screentshotdir)
        }

        const filename= `${ssname}_${Date.now()}.png`
        const filepath= path.join(this.screentshotdir,filename)

        await this.page.screenshot({path:filepath, fullPage: true}) 

        return filepath
    }

    //scroll

    async scrolltoElement(locator){
        await this.page.locator(locator).scrollIntoViewIfNeeded()
    }

    async scrolltobottom(){
        await this.page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight)
        })
    }

    async scrolltotop(){
        await this.page.evaluate(()=>{
            window.scrollTo(0,0)
        })
    }

    //hover
    async hoverelement(locator){
        await this.page.locator(locator).hover()
    }

    //verify element

    async verifyElement(locator){
     const isvisible= await this.page.locator(locator).isVisible()

     if(isvisible){
        console.log(`element visible he: ${locator}`)
     } else{
        console.log(`element visible nhn: ${locator}`)
     }

     return isvisible;
    }

    async verifyText(locator,expectedText){
        const actualText= await this.gettext(locator)
        const expect= actualText.includes(expectedText)

        return expect;


    }
}

module.exports = {advancebasepage};