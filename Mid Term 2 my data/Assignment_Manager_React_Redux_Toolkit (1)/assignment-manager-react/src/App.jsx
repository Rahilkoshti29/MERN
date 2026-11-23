import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  removeAssignment
} from "./redux/assignmentSlice";
import AssignmentCard from "./components/AssignmentCard";

export default function App() {
  const [title, setTitle] = useState("");
  const assignments = useSelector((state) => state.assignments.items);
  const dispatch = useDispatch();

  function handleAddAssignment(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    dispatch(
      addAssignment({
        id: Date.now(),
        title: cleanTitle
      })
    );
    setTitle("");
  }

  return (
    <main className="page">
      <section className="manager">
        <div className="heading">
          <p className="eyebrow">STUDY ORGANIZER</p>
          <h1>Assignment Manager</h1>
          <p className="subtitle">Keep track of your work, one assignment at a time.</p>
        </div>

        <form className="add-form" onSubmit={handleAddAssignment}>
          <label htmlFor="assignment-title">New assignment</label>
          <div className="input-row">
            <input
              id="assignment-title"
              type="text"
              placeholder="Enter assignment title..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button className="add-button" type="submit">+ Add Assignment</button>
          </div>
        </form>

        <div className="list-heading">
          <h2>Your assignments</h2>
          <span className="count">{assignments.length}</span>
        </div>

        {assignments.length === 0 ? (
          <p className="empty-state">No assignments available</p>
        ) : (
          <div className="assignment-list">
            {assignments.map((assignment) => (
              <div className="assignment-row" key={assignment.id}>
                <AssignmentCard title={assignment.title} />
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => dispatch(removeAssignment(assignment.id))}
                  aria-label={`Delete ${assignment.title}`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <p className="footer-note">Built with React and Redux Toolkit</p>
      </section>
    </main>
  );
}