
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;



const paymentSchema = new mongoose.Schema({




    orderId:{ type:ObjectId

    },
    userId:{
        type:ObjectId

    },

    success:{ 
        type:Boolean

    }


})


module.exports = mongoose.model('payment',paymentSchema)