import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const EditCoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ duration: "", fees: "" });
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => {
        const course = res.data.find((item) => item._id === id);
        if (course) setForm({ duration: course.duration, fees: course.fees });
      })
      .catch((error) => console.log(error));
  }, [id]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/courses/" + id, {
        duration: form.duration,
        fees: Number(form.fees),
      })
      .then(() => navigate("/view"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={form.duration}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="fees"
          placeholder="Fees"
          value={form.fees}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
};
export default EditCoursePage;
