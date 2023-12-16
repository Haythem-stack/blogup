import mongoose from "mongoose";


export const connectToDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to MongoDb")
    }
   catch(err){
    console.log(err)
   }
}

connectToDB()
  
