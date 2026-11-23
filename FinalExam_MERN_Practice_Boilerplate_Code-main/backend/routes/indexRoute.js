import express from "express";
import {
  dummy,
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controller/indexController.js";

const router = express.Router();
router.get("/", dummy);
router.post("/courses", addCourse);
router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);
export default router;
