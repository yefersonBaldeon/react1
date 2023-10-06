import React, { useState, useSyncExternalStore } from "react";

function TaskCreate({ createNewTask }) {
  const [newTask, setnewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setnewTask("");
    createNewTask(newTask);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="row py-2">
        <div className="col-9">
          <input className="form-control"
            type="text"
            value={newTask}
            onChange={(e) => {
              setnewTask(e.target.value);
            }}
          />
        </div>

        <div className="col-3">
          <button className="btn btn-primary">save task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskCreate;
