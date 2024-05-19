import mongoose from "mongoose";
const DB_NAME = process.env.DB_NAME 
const MONGODB_URI = process.env.MONGODB_URI 

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST : ${connectionInstance.connection.host}`)
    }catch(error){
        console.log('Error occured while connecting to MONGODB')
        console.error("Error => ",error)
        process.exit(1)
    }
}

export default connectDB