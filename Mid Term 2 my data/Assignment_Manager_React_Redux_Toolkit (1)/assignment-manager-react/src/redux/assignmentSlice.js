import { createSlice } from "@reduxjs/toolkit";

const assignments = [
  { id: 1, title: "Complete HTML Assignment" },
  { id: 2, title: "Submit React Practical" },
  { id: 3, title: "Prepare UML Diagrams" }
];

const assignmentSlice = createSlice({
  name: "assignments",
  initialState: {
    items: assignments
  },
  reducers: {
    addAssignment: (state, action) => {
      state.items.push(action.payload);
    },
    removeAssignment: (state, action) => {
      state.items = state.items.filter(
        (assignment) => assignment.id !== action.payload
      );
    }
  }
});

export const { addAssignment, removeAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;