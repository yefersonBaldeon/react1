import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ taskItems, toggleTask,showCompleted=false}) {

  function taskTableRows(doneValue){

    return (
      taskItems.
      filter((taskItem) => taskItem.done === doneValue).      
      map((taskItem, index) => {
         return (
            <TaskRow key={taskItem.name} taskItem={taskItem} toggleTask={toggleTask}></TaskRow>
        );
      })
    )

  }


  return (
    <div>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr className="table-primary">
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </div>
  );
}

export default TaskTable;
