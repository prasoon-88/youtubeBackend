// require('dotenv').config({path:'./env'}) 
// Its niether throw error in this state but for consistant purpose we need not to do it commonjs,modulejs
import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({path:"./env"})

console.log(process.env.DB_NAME)

connectDB()


// ;(
//    async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
//     }catch(error){
//         console.log(`Error while connectiong with DB `)
//         console.error('Error = ' ,error)
//     }
//    }
// )()