import { configDotenv } from "dotenv";
import mongoose from "mongoose";


configDotenv()
export const connectDB =async(req,res)=>{
    try {
        const connect =await mongoose.connect(process.env.MONGO_URI)
        console.log(`${connect.connection.host}-databazaya baglandi`);
    } catch (error) {
        console.log("error");
    }
}
