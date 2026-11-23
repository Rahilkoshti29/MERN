import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { NavLink } from "react-router";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand bg-light px-3">
      <NavLink to="/" end className="nav-link me-3">
        <BsHouseDoor /> Home
      </NavLink>
      <NavLink to="/add" className="nav-link me-3">
        Add Course
      </NavLink>
      <NavLink to="/view" className="nav-link me-3">
        View Courses
      </NavLink>
    </nav>
  );
};
export default MyNavbar;
