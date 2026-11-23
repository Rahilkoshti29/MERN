//schema
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: String, required: true },
  fees: { type: Number, required: true },
});
const Course = mongoose.model("Course", courseSchema, "courses");
export default Course;
