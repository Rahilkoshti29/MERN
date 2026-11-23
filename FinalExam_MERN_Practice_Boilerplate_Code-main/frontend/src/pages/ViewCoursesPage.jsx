import { useOutletContext } from "react-router";
import CourseRow from "../components/CourseRow";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => setCourses(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>All Courses</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Fees</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseRow key={course._id} course={course} />
            ))
          ) : (
            <tr>
              <td colSpan="6">No courses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ViewCoursesPage;
