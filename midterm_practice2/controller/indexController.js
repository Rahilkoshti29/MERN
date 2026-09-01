
import  Student  from "../model/indexModel.js"
// const dummy = (req, res) => {
//   res.send("API is working")
// }

const createStudent = async (req,res) => {
  try {
     const student = await  Student.create(req.body)
     res.status(200).json(student)
  }
  catch(err)
  {
    res.status(400).json({message :err.message})
  }
}

const getStudent = async (req,res) => {
  try {
     const students = await  Student.find()
     res.status(200).json(students)
  }
  catch(err)
  {
    res.status(400).json({message :err.message})
  }
}

const getStudentByID = async (req,res) => {
  try {
    const student = await Student.findById(req.params.id)
    res.status(200).json(student)
  }
  catch(err)
  {
    res.status(400).json({message :err.message})
  }
}

const updateStudent = async (req,res) => {
  try {
     const student = await  Student.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
     res.status(200).json(student)
  }
  catch(err)
  {
    res.status(400).json({message :err.message})
  }
}

const deleteStudent = async (req,res) => {
  try {
     const student = await  Student.findByIdAndDelete(req.params.id)
     res.status(200).json(student)
  }
  catch(err)
  {
    res.status(400).json({message :err.message})
  }
}


export {createStudent,getStudent,getStudentByID,updateStudent,deleteStudent}