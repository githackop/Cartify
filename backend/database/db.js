import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/Ekart`)
        console.log('Mongodb succesfully connected')
    } catch (error){
console.log("Mongodb connection failed",error);
    }
}
    
export default connectDB