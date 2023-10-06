import React from "react";

function VisibilityControl({ setShowCompleted, cleanTasks, showCompleted }) {
  function handleDelete() {
    cleanTasks();
    setShowCompleted(false);
  }

  return (
    <div className="d-flex justify-content-between bg-secondary p-2">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => {
            setShowCompleted(e.target.checked);
          }}
        />{" "}
        <label>Show Tasks Done</label>
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        clear
      </button>
    </div>
  );
}

export default VisibilityControl;
