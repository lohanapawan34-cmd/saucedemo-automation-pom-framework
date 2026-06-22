class envconfig{
    constructor(){
        this.config={
            dev:{
                url: 'https://dev.saucedemo.com',
                userName:'dev_user',
                passWord:'dev123'
            },
            staging:{
                url: 'https://stag.saucedemo.com',
                userName:'stag_user',
                passWord:'stag123'
            },
            production:{
                url: 'https://www.saucedemo.com',
                userName:'standard_user',
                passWord:'secret_sauce'
            }
        }
        this.activeUser='production'
    }

    configinfo(){
        const selected= this.config[this.activeUser]

        if(!selected){
            throw new Error(`"${this.activeUser} environment exist nhn karta"`)
        }

        return selected;
    }
}

module.exports= {envconfig}