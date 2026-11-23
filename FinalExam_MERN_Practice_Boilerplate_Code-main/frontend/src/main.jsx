import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AddCoursePage from "./pages/AddCoursePage.jsx";
import ViewCoursesPage from "./pages/ViewCoursesPage.jsx";
import EditCoursesPage from "./pages/EditCoursesPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const myroutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "add", element: <AddCoursePage /> },
      { path: "view", element: <ViewCoursesPage /> },
      { path: "edit/:id", element: <EditCoursesPage /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myroutes} />
  </StrictMode>,
);
