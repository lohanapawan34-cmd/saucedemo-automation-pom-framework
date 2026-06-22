class errorhandle{
    constructor(){
        this.errors=[]
    }

    handle(error,context){
        const errObj={
            message: error.message,
            context: context,
            time: new Date().toLocaleTimeString()
        }
        this.errors.push(errObj)
    }

    haserrors(){
        return this.errors.length > 0
    }

    printErrors(){
        if(!this.haserrors()){
            return;
        } 
        console.log("------Errors Report--------")
        this.errors.forEach((err,ind)=>{
            console.log(`${ind+1}: [${err.time}]  ${err.context} => "${err.message}"`)
        })
    }

}

module.exports= {errorhandle}