const mongoose = require('mongoose')


const TurebiSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    hotelstar:{
        type:Number,
        required:true
    },
    transport:{
        type:String,
        required:true
    },
    tourtime:{
        type:Number,
        required:true
    },

})




module.exports = mongoose.model('turebi' , TurebiSchema)