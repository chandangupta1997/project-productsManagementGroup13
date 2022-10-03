
const axios = require('axios')
const paymentModel = require('../models/paymentModel')

const orderModel =require('../models/orderModel')


const makePayment = async function(req,res){

    // we will check how much payment for the order by order Id

    let orderId = req.params.orderId

  

    // wiil check amount 
    let orderAmount = await orderModel.findById(orderId)
    if(!orderAmount){
        return res.send(' no order Amount ')
    }

    // will be making axios call to the backend server 
    // Stripe Payments 

    let options = {
        method: 'post',
        url: `https://localhost:5000/payment?amount=${orderAmount}` // our stripe payments 
    }
    let result = await axios(options);

    


}



const verifyPayment = async function (req,res){

}



module.exports ={makePayment,verifyPayment}