const cryptoModel = require('../models/cryptoModel')
const axios = require('axios')
const getCryptoData = async function(req, res){
    try{
        let options ={
            method : "get",
            url : `https://api.coincap.io/v2/assets/`,
            headers : {
                authorization : "Bearer 435d4417-3649-4552-a597-dde6966a7c7c"
            }
        }
        let myResult = await axios(options)  
        let {data} = myResult.data
        data.sort((a,b)=>a.changePercent24Hr - b.changePercent24Hr)
        
        // await cryptoModel.deleteMany()

        data.forEach(values=> {
        const findData = new cryptoModel(values)
        findData.save()            
        });

        return res.status(200).send({status : true, msg : 'Data created successfully', data : data})
    }
    catch(err){
        return res.status(500).send({status : false, error : err.message})
    }

}

module.exports.getCryptoData = getCryptoData