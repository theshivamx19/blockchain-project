const cryptoModel = require('../models/cryptoModel')
const axios = require('axios')
const getCryptoData = async function(req, res){
    try{
        let options ={
            method : "get",
            url : `https://api.coincap.io/v2/assets/`,
            
        }
        let 
        let myResult = await options
        
        return res.status(200).send({status : true, msg : 'Data created successfully', data : myResult.data})
    }
    catch(err){
        return res.status(500).send({status : false, error : err.message})
    }

}

module.exports.getCryptoData = getCryptoData