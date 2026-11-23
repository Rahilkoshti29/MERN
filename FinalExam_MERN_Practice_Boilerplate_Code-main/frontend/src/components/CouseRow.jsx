import React from 'react'
import { useNavigate } from 'react-router'
const CourseRow = ({ course }) => {
 const navigate = useNavigate()
 return (
 <tr>
 <td>{course.courseId}</td>
 <td>{course.courseName}</td>
 <td>{course.instructor}</td>
 <td>{course.duration}</td>
 <td>{course.fees}</td>
 <td>
 <button className="btn btn-warning btn-sm"
 onClick={() => navigate("/edit/" + course._id)}>
 Update
 </button>
 </td>
 </tr>
 )
}
export default CourseRow