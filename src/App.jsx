import "./App.css";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskContextProvider from "./contexts/TasksContext.jsx";

export default function TaskApp() {
  return (
    <>
      <TaskContextProvider>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskContextProvider>
    </>
  );
}
