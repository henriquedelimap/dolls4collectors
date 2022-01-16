const express = require('express')
const consign = require('consign')


module.exports = () =>{
    const app = express() //vamos executar o express que criamos

    consign()
        .include('controllers')
        .into(app)
    
    return app
}