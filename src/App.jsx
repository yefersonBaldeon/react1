import React, { useState, useEffect } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";

function App() {
  const [taskItems, settaskItems] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find((taskItem) => taskItem.name === taskName)) {
      settaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  function toggleTask(task) {
    settaskItems(
      taskItems.map((one) =>
        one.name === task.name ? { ...one, done: !one.done } : one
      )
    );
  }

  function cleanTasks() {
    settaskItems(taskItems.filter((one) => one.done === false));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreate createNewTask={createNewTask}></TaskCreate>
        <TaskTable taskItems={taskItems} toggleTask={toggleTask}></TaskTable>

        <VisibilityControl
          setShowCompleted={setShowCompleted}
          showCompleted={showCompleted}
          cleanTasks={cleanTasks}
        ></VisibilityControl>

        {showCompleted && (
          <TaskTable
            taskItems={taskItems}
            toggleTask={toggleTask}
            showCompleted={true}
          ></TaskTable>
        )}
      </Container>
    </main>
  );
}

export default App;
