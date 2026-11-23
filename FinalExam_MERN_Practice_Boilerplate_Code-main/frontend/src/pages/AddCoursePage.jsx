import React, { useState } from "react";
import { useOutletContext } from "react-router";
import axios from "axios";
const emptyForm = {
  courseId: "",
  courseName: "",
  instructor: "",
  duration: "",
  fees: "",
};
const AddCoursePage = () => {
  const { courses, setCourses } = useOutletContext();
  const [form, setForm] = useState(emptyForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      ...form,
      fees: Number(form.fees),
    };
    axios
      .post("http://localhost:3000/courses", newCourse)
      .then(() => {
        alert("Course added successfully");
        setForm(emptyForm);
      })
      .catch((error) => alert("Failed to add: " + error.message));
  };
  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="courseId"
          placeholder="Course ID"
          value={form.courseId}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={form.courseName}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={form.instructor}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 3 months)"
          value={form.duration}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="fees"
          placeholder="Fees"
          min="0"
          value={form.fees}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
    </div>
  );
};
export default AddCoursePage;
