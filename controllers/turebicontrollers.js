const bcrypt = require('bcrypt')
const DB = require('../modules/turebimodule')



const getturebi = async(req,res) => {
    const {Secure} = req.body

    if(!Secure){
        res.json("Dont Try Setal Any Information !!!")

    }else{
        if(bcrypt.compare(process.env.SecretPassword, Secure)){
            const getdata = await DB.find()
            res.json(getdata)
        }else{
            res.json("Dont Try Setal Any Information !!!")

        }

    }
   
    

}

const postturebi = async(req,res) => {
    const {Secure , image , price , location , hotelstar , transport , tourtime , category } = req.body

    if(!Secure || !image ||!price||!location||!hotelstar||!transport||!tourtime||!category){
        res.json("Dont Try To Steal Any Information !!!")
    }else{
        const compare = await bcrypt.compare(process.env.SecretPassword , Secure )
        if(compare){
            const create = await DB.create({
                 
                 image , 
                price ,
                 location ,
                 hotelstar ,
                 transport ,
                 tourtime ,
                 category 
            })

            if(create){
                console.log("Sucessfuly Created new Tour")
            }else{
                console.log("Something Went Wrong Please Try Again Later")
            }
        }
    }


   
  

}


module.exports = {getturebi,postturebi}