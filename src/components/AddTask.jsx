import { useState } from "react";
import { useTasks, useTasksDispatch } from "../contexts/TasksContext";
import { getNextId } from "../utils/getId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  const tasks = useTasks();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "Added",
            text: text,
            id: getNextId(tasks),
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
