import { useState } from "react";
import { Outlet } from "react-router";
import MyNavbar from "./components/MyNavbar";

function App() {
  const [courses, setCourses] = useState([]);

  return (
    <>
      <MyNavbar />

      <div className="container mt-5">
        <Outlet context={{ courses, setCourses }} />
      </div>
    </>
  );
}

export default App;
