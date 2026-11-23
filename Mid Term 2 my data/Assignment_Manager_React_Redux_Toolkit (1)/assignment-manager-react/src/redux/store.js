
import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "./assignmentSlice";

export const store = configureStore({
  reducer: {
    assignments: assignmentReducer
  }
});
