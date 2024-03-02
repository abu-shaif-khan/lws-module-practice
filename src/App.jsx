import { useReducer } from "react";
import "./App.css";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import { TaskContext, TaskDispatchContext } from "./contexts/taskContext.js";
import { initialTasks } from "./data/tasks.js";
import taskReducer from "./reducers/taskReducer.js";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };
  const handleAddTask = (text) => {
    dispatch({
      type: "Added",
      text: text,
      id: getNextId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "Changed",
      task: task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "Deleted",
      id: taskId,
    });
  };

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
          <h1>Prague itinerary</h1>
          <AddTask onAdd={handleAddTask} />
          <TaskList />
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
}
