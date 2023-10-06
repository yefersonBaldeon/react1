import React from "react";

function TaskRow({taskItem,toggleTask}) {
  return (
    <tr >
      <td className="d-flex justify-content-between">
        {taskItem.name}
        <input
          type="checkbox"
          checked={taskItem.done}
          onChange={() => {

            toggleTask(taskItem)
          }}
        />  
      </td>
    </tr>
  );
}

export default TaskRow;
  