import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name :{type:String,required:true},
    email : {type:String,required:true,unique:true},
    semester : {type:Number,required:true},
    cgpa : {type:Number,required:true}
})

const Student = mongoose.model("student",studentSchema)
export default Student