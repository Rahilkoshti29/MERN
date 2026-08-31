import express from "express"
import { createStudent,getStudent,getStudentByID,updateStudent,deleteStudent} from "../controller/indexController.js"
const router =  express.Router()

//router.get("/",dummy)
router.post("/",createStudent)
router.get("/",getStudent)
router.get("/:id",getStudentByID)
router.put("/:id",updateStudent)
router.delete("/:id",deleteStudent)
export default router
