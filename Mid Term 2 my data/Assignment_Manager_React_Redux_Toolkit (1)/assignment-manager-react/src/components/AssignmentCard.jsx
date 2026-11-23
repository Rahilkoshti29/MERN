
import React from "react";

function AssignmentCard({ title }) {
  return (
    <div className="assignment-card">
      <span className="assignment-icon">✓</span>
      <p>{title}</p>
    </div>
  );
}

export default AssignmentCard;
