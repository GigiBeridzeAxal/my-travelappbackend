const mongoose = require('mongoose')


const ConnectDB = async() => {

    try{
        const con = await mongoose.connect(process.env.DB)
        if(con){
            console.log(con.connection.host)
        }

    }catch(err){
        console.log(err , "Something Went Wrong to Connect Database Please Try Again")
        
    }

}
module.exports = ConnectDB