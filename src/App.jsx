import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import { initialTasks } from "./data/tasks.js";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    ); 
    return maxId + 1;
  };
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: getNextId(tasks), text: text,  done: false }]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map(t => {
        if(t.id === task.id){
            return task; 
        } else{
            return t;
        }
    })
    setTasks(nextTask);
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd = {handleAddTask}/>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  );
}

let nextId = 3;
