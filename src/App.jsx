import { useReducer } from "react";
import "./App.css";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import { TaskContext, TaskDispatchContext } from "./contexts/taskContext.js";
import { initialTasks } from "./data/tasks.js";
import taskReducer from "./reducers/taskReducer.js";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
          <h1>Prague itinerary</h1>
          <AddTask />
          <TaskList />
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
}
