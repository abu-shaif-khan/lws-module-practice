import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/taskContext";
import { getNextId } from "../utils/getId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);
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
