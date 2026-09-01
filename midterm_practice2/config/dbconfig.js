import mongoose from "mongoose"

const connectDB = async (url)=> {
     try{
        await mongoose.connect(url)
        console.log("DB Connected");
        
    }
    catch(err){
        console.log(err)
    }
}
export default connectDB
