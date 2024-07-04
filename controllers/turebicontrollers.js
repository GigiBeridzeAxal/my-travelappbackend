const bcrypt = require('bcrypt')
const DB = require('../modules/turebimodule')



const getturebi = (req,res) => {
   
    

}

const postturebi = async(req,res) => {
    const {Secure} = req.body

    if(!Secure){
        res.json("Dont Try To Steal Any Information !!!")
    }else{
        const compare = await bcrypt.compare(process.env.SecretPassword , Secure )
        if(compare){
            console.log(req.body)
        }
    }


   
  

}


module.exports = {getturebi,postturebi}