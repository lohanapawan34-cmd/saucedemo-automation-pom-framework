class reportgen{
    constructor(){
        this.results=[]
        this.starttime= Date.now()
    }

    addresult(testname,status,message=''){
        const res={
            testname,
            status,
            message,
            time: new Date().toLocaleTimeString()
        }

        this.results.push(res)

        if(status==='passed'){
            console.log(`Passed- ${testname}`)
        }else if (status==='failed'){
            console.log(`failed- ${testname} | Reason- ${message}`)
        }else if(status==='skipped'){
            console.log(`Skipped- ${testname} | Reason- ${message}`)
        }


    }

    getSummary(){
        const passed= this.results.filter(i=> i.status==='passed').length
        const failed= this.results.filter(i=> i.status==='failed').length
        const skipped= this.results.filter(i=> i.status==='skipped').length
        const total=this.results.length

        const duration= ((Date.now()- this.starttime)/1000).toFixed(2)

        return {passed,failed,skipped,total,duration}
    }

    printReport(){
        const{passed,failed,skipped,total,duration}=this.getSummary()

        console.log('----------Report---------')
        console.log(`Total: ${total}`)
        console.log(`Passed: ${passed}`)
        console.log(`Failed: ${failed}`)
        console.log(`Skipped: ${skipped}`)
        console.log(`Duration: ${duration}`)
        console.log('---------------------------------')


        //failed tests detail:
        const fail= this.results.filter(i=> i.status==='failed')
        if(fail.length > 0){
            console.log('failed tests det ail')
        fail.forEach((reson,i)=>{
            console.log(`${i+1}: ${reson.testname}`)
            console.log(` Reason: ${reson.message}`)
            console.log(`Time: ${reson.time}`)
        })

        console.log(`--------------------------`)
        }
    }
 

}
module.exports= {reportgen}