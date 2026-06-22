const {basepage}= require('./basePage')
class loginpage extends basepage{
    constructor(page){
        super(page)
        this.username='#user-name'
        this.password='#password'
        this.loginbtn='#login-button'
        this.errmsg='.error-message-container'
    }

    async loginUser(user,pass){
        await this.fillfunc(this.username,user)
        await this.fillfunc(this.password,pass)
        await this.clickfunc(this.loginbtn)
    }

    async isErrorVisible(){
        return await this.isvisible(this.errmsg)
    }

    async GetErrMsg(){
        return await this.getText(this.errmsg)
    }
}

module.exports= {loginpage}